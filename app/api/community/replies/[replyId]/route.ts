// app/api/community/replies/[replyId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  deleteCommunityReply,
  updateCommunityReplyPublished,
} from '@/lib/db';
import { verifyToken } from '@/lib/auth';

interface RouteProps {
  params: Promise<{
    replyId: string;
  }>;
}

async function checkAdmin(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return false;
  }

  const payload = await verifyToken(token);

  return !!payload;
}

export async function PATCH(request: NextRequest, { params }: RouteProps) {
  try {
    const isAdmin = await checkAdmin(request);

    if (!isAdmin) {
      return NextResponse.json(
        { error: 'Não autorizado.' },
        { status: 401 }
      );
    }

    const { replyId } = await params;
    const id = Number(replyId);

    if (!id || Number.isNaN(id)) {
      return NextResponse.json(
        { error: 'ID inválido.' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const published = Boolean(body.published);

    const reply = await updateCommunityReplyPublished(id, published);

    if (!reply) {
      return NextResponse.json(
        { error: 'Resposta não encontrada.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error('Erro ao atualizar resposta:', error);

    return NextResponse.json(
      { error: 'Erro ao atualizar resposta.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteProps) {
  try {
    const isAdmin = await checkAdmin(request);

    if (!isAdmin) {
      return NextResponse.json(
        { error: 'Não autorizado.' },
        { status: 401 }
      );
    }

    const { replyId } = await params;
    const id = Number(replyId);

    if (!id || Number.isNaN(id)) {
      return NextResponse.json(
        { error: 'ID inválido.' },
        { status: 400 }
      );
    }

    const deleted = await deleteCommunityReply(id);

    if (!deleted) {
      return NextResponse.json(
        { error: 'Erro ao excluir resposta.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error('Erro ao excluir resposta:', error);

    return NextResponse.json(
      { error: 'Erro ao excluir resposta.' },
      { status: 500 }
    );
  }
}