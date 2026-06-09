// app/api/projects/route.ts - PostgreSQL Version
import { NextRequest, NextResponse } from 'next/server';
import { getAllProjectsAdmin, createProject, updateProject, deleteProject } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

// GET - Listar todos os projetos
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

      const projects = await getAllProjectsAdmin();
      return NextResponse.json(projects || []);
    }

    // Projetos públicos (apenas publicados)
    const projects = await getAllProjectsAdmin();
    const publicProjects = (projects || []).filter((item: any) => item.published === true);
    return NextResponse.json(publicProjects);
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    return NextResponse.json([], { status: 200 });
  }
}

// POST - Criar projeto
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
    const { title, icon, description, time, difficulty, code, published } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Título e descrição são obrigatórios' },
        { status: 400 }
      );
    }

    const project = await createProject(title, icon || '🚀', description, time || '', difficulty || '', code || '', published || false);

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
    const { id, title, icon, description, time, difficulty, code, published } = body;

    if (!id || !title || !description) {
      return NextResponse.json(
        { error: 'ID, título e descrição são obrigatórios' },
        { status: 400 }
      );
    }

    const project = await updateProject(id, title, icon || '🚀', description, time || '', difficulty || '', code || '', published || false);

    return NextResponse.json(project);
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

    const success = await deleteProject(parseInt(id));

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Erro ao deletar projeto' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erro ao deletar projeto:', error);
    return NextResponse.json(
      { error: 'Erro ao deletar projeto' },
      { status: 500 }
    );
  }
}