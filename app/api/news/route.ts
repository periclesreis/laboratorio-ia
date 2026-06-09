// app/api/news/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllNews, createNews } from '@/lib/db';
import { getDb } from '@/lib/db';

// GET - Listar todas as notícias
export async function GET(request: NextRequest) {
  try {
    const news = getAllNews();
    return NextResponse.json(news);
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar notícias' },
      { status: 500 }
    );
  }
}

// POST - Criar nova notícia (apenas admin)
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const news = createNews({
      title: data.title,
      description: data.description,
      link: data.link,
      image: data.image,
      date: data.date || new Date().toISOString().split('T')[0],
      published: data.published !== false,
    });

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
    const data = await request.json();
    const db = getDb();
    
    db.prepare(`
      UPDATE news 
      SET title = ?, description = ?, link = ?, image = ?, date = ?, published = ?, updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(data.title, data.description, data.link, data.image, data.date, data.published, data.id);

    return NextResponse.json({ success: true });
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
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID da notícia é obrigatório' },
        { status: 400 }
      );
    }

    const db = getDb();
    db.prepare('DELETE FROM news WHERE id = ?').run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao deletar notícia:', error);
    return NextResponse.json(
      { error: 'Erro ao deletar notícia' },
      { status: 500 }
    );
  }
}