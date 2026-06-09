// app/api/projects/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllProjects, createProject } from '@/lib/db';
import { getDb } from '@/lib/db';

// GET - Listar todos os projetos
export async function GET(request: NextRequest) {
  try {
    const projects = getAllProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar projetos' },
      { status: 500 }
    );
  }
}

// POST - Criar novo projeto (apenas admin)
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const project = createProject({
      title: data.title,
      icon: data.icon,
      description: data.description,
      time: data.time,
      difficulty: data.difficulty,
      code: data.code,
      published: data.published !== false,
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar projeto:', error);
    return NextResponse.json(
      { error: 'Erro ao criar projeto' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar projeto
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const db = getDb();
    
    db.prepare(`
      UPDATE projects 
      SET title = ?, icon = ?, description = ?, time = ?, difficulty = ?, code = ?, published = ?, updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(data.title, data.icon, data.description, data.time, data.difficulty, data.code, data.published, data.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao atualizar projeto:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar projeto' },
      { status: 500 }
    );
  }
}

// DELETE - Deletar projeto
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID do projeto é obrigatório' },
        { status: 400 }
      );
    }

    const db = getDb();
    db.prepare('DELETE FROM projects WHERE id = ?').run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao deletar projeto:', error);
    return NextResponse.json(
      { error: 'Erro ao deletar projeto' },
      { status: 500 }
    );
  }
}