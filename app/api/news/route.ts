// app/api/news/route.ts - PostgreSQL Version
import { NextRequest, NextResponse } from 'next/server';
import { getAllNewsAdmin, createNews, updateNews, deleteNews } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

// GET - Listar todas as notícias (públicas)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const admin = searchParams.get('admin') === 'true';

    if (admin) {
      // Verificar autenticação
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

      const news = await getAllNewsAdmin();
      return NextResponse.json(news || []);
    }

    // Notícias públicas (apenas publicadas)
    const news = await getAllNewsAdmin();
    const publicNews = (news || []).filter((item: any) => item.published === true);
    return NextResponse.json(publicNews);
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return NextResponse.json([], { status: 200 });
  }
}

// POST - Criar notícia
export async function POST(request: NextRequest) {
  try {
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

    const body = await request.json();
    const { title, description, link, date, published } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Título e descrição são obrigatórios' },
        { status: 400 }
      );
    }

    const news = await createNews(title, description, link || '', date || new Date().toLocaleDateString('pt-BR'), published || false);

    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar notícia:', error);
    return NextResponse.json(
      { error: 'Erro ao criar notícia' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar notícia
export async function PUT(request: NextRequest) {
  try {
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

    const body = await request.json();
    const { id, title, description, link, date, published } = body;

    if (!id || !title || !description) {
      return NextResponse.json(
        { error: 'ID, título e descrição são obrigatórios' },
        { status: 400 }
      );
    }

    const news = await updateNews(id, title, description, link || '', date || new Date().toLocaleDateString('pt-BR'), published || false);

    return NextResponse.json(news);
  } catch (error) {
    console.error('Erro ao atualizar notícia:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar notícia' },
      { status: 500 }
    );
  }
}

// DELETE - Deletar notícia
export async function DELETE(request: NextRequest) {
  try {
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

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID é obrigatório' },
        { status: 400 }
      );
    }

    const success = await deleteNews(parseInt(id));

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Erro ao deletar notícia' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erro ao deletar notícia:', error);
    return NextResponse.json(
      { error: 'Erro ao deletar notícia' },
      { status: 500 }
    );
  }
}