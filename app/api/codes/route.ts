// app/api/codes/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllCodes, createCode } from '@/lib/db';
import { getDb } from '@/lib/db';

// GET - Listar todos os códigos
export async function GET(request: NextRequest) {
  try {
    const codes = getAllCodes();
    return NextResponse.json(codes);
  } catch (error) {
    console.error('Erro ao buscar códigos:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar códigos' },
      { status: 500 }
    );
  }
}

// POST - Criar novo código (apenas admin)
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const code = createCode({
      title: data.title,
      description: data.description,
      language: data.language,
      fileUrl: data.fileUrl,
      fileName: data.fileName,
      published: data.published !== false,
    });

    return NextResponse.json(code, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar código:', error);
    return NextResponse.json(
      { error: 'Erro ao criar código' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar código
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const db = getDb();
    
    db.prepare(`
      UPDATE codes 
      SET title = ?, description = ?, language = ?, fileUrl = ?, fileName = ?, published = ?, updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(data.title, data.description, data.language, data.fileUrl, data.fileName, data.published, data.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao atualizar código:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar código' },
      { status: 500 }
    );
  }
}

// DELETE - Deletar código
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID do código é obrigatório' },
        { status: 400 }
      );
    }

    const db = getDb();
    db.prepare('DELETE FROM codes WHERE id = ?').run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao deletar código:', error);
    return NextResponse.json(
      { error: 'Erro ao deletar código' },
      { status: 500 }
    );
  }
}