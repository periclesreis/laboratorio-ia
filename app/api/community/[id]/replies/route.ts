// app/api/community/[id]/replies/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  createCommunityReply,
  getAllCommunityRepliesAdmin,
  getCommunityPostById,
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

export async function GET(request: NextRequest, { params }: RouteProps) {
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

    const replies = await getAllCommunityRepliesAdmin(postId);

    return NextResponse.json(replies);
  } catch (error) {
    console.error('Erro ao buscar respostas admin:', error);

    return NextResponse.json(
      { error: 'Erro ao buscar respostas.' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest, { params }: RouteProps) {
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

    const body = await request.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const content = String(body.content || '').trim();

    if (!name || !content) {
      return NextResponse.json(
        { error: 'Nome e resposta são obrigatórios.' },
        { status: 400 }
      );
    }

    const trustedEmails = ['periclesreis@bol.com.br', 'labdeapp@gmail.com'];

const normalizedEmail = email.toLowerCase();
const shouldPublishImmediately = trustedEmails.includes(normalizedEmail);

const reply = await createCommunityReply(
  postId,
  name,
  email,
  content,
  shouldPublishImmediately
);

return NextResponse.json(
  {
    success: true,
    message: shouldPublishImmediately
      ? 'Sua resposta foi enviada e publicada com sucesso.'
      : 'Sua resposta foi enviada com sucesso e poderá aparecer após análise.',
    reply,
  },
  { status: 201 }
);
  } catch (error) {
    console.error('Erro ao enviar resposta:', error);

    return NextResponse.json(
      { error: 'Erro ao enviar resposta.' },
      { status: 500 }
    );
  }
}