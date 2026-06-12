// app/api/community/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  deleteCommunityPost,
  getCommunityPostById,
  getPublishedCommunityReplies,
  updateCommunityPostPublished,
} from '@/lib/db';
import { verifyToken } from '@/lib/auth';

interface RouteProps {
  params: Promise<{
    id: string;
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

export async function GET(_request: NextRequest, { params }: RouteProps) {
  try {
    const { id } = await params;
    const postId = Number(id);

    if (!postId || Number.isNaN(postId)) {
      return NextResponse.json(
        { error: 'ID inválido.' },
        { status: 400 }
      );
    }

    const post = await getCommunityPostById(postId);

    if (!post) {
      return NextResponse.json(
        { error: 'Publicação não encontrada.' },
        { status: 404 }
      );
    }

    const replies = await getPublishedCommunityReplies(postId);

    return NextResponse.json({
      post,
      replies,
    });
  } catch (error) {
    console.error('Erro ao buscar conversa:', error);

    return NextResponse.json(
      { error: 'Erro ao buscar conversa.' },
      { status: 500 }
    );
  }
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

    const { id } = await params;
    const postId = Number(id);

    if (!postId || Number.isNaN(postId)) {
      return NextResponse.json(
        { error: 'ID inválido.' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const published = Boolean(body.published);

    const post = await updateCommunityPostPublished(postId, published);

    if (!post) {
      return NextResponse.json(
        { error: 'Publicação não encontrada.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      post,
    });
  } catch (error) {
    console.error('Erro ao atualizar publicação:', error);

    return NextResponse.json(
      { error: 'Erro ao atualizar publicação.' },
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

    const { id } = await params;
    const postId = Number(id);

    if (!postId || Number.isNaN(postId)) {
      return NextResponse.json(
        { error: 'ID inválido.' },
        { status: 400 }
      );
    }

    const deleted = await deleteCommunityPost(postId);

    if (!deleted) {
      return NextResponse.json(
        { error: 'Erro ao excluir publicação.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error('Erro ao excluir publicação:', error);

    return NextResponse.json(
      { error: 'Erro ao excluir publicação.' },
      { status: 500 }
    );
  }
}