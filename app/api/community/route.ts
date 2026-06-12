// app/api/community/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  createCommunityPost,
  getAllCommunityPostsAdmin,
  getPublishedCommunityPosts,
} from '@/lib/db';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const admin = searchParams.get('admin') === 'true';

    if (admin) {
      const token = request.cookies.get('auth-token')?.value;

      if (!token) {
        return NextResponse.json(
          { error: 'Não autenticado' },
          { status: 401 }
        );
      }

      const payload = await verifyToken(token);

      if (!payload) {
        return NextResponse.json(
          { error: 'Token inválido' },
          { status: 401 }
        );
      }

      const posts = await getAllCommunityPostsAdmin();
      return NextResponse.json(posts);
    }

    const posts = await getPublishedCommunityPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Erro ao buscar comunidade:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const title = String(body.title || '').trim();
    const content = String(body.content || '').trim();

    if (!name || !title || !content) {
      return NextResponse.json(
        { error: 'Nome, título e mensagem são obrigatórios.' },
        { status: 400 }
      );
    }

    if (name.length > 120) {
      return NextResponse.json(
        { error: 'O nome deve ter no máximo 120 caracteres.' },
        { status: 400 }
      );
    }

    if (title.length > 200) {
      return NextResponse.json(
        { error: 'O título deve ter no máximo 200 caracteres.' },
        { status: 400 }
      );
    }

    const trustedEmails = ['periclesreis@bol.com.br', 'labdeapp@gmail.com'];

const normalizedEmail = email.toLowerCase();
const shouldPublishImmediately = trustedEmails.includes(normalizedEmail);

const post = await createCommunityPost(
  name,
  email,
  title,
  content,
  shouldPublishImmediately
);

return NextResponse.json(
  {
    success: true,
    message: shouldPublishImmediately
      ? 'Sua publicação foi enviada e publicada com sucesso.'
      : 'Sua publicação foi enviada com sucesso e poderá aparecer após análise.',
    post,
  },
  { status: 201 }
);
  } catch (error) {
    console.error('Erro ao criar publicação:', error);

    return NextResponse.json(
      { error: 'Erro ao enviar publicação.' },
      { status: 500 }
    );
  }
}