// app/api/codes/route.ts - PostgreSQL Version
import { NextRequest, NextResponse } from 'next/server';
import { getAllCodesAdmin, createCode, updateCode, deleteCode } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

// GET - Listar todos os códigos
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

      const codes = await getAllCodesAdmin();
      return NextResponse.json(codes || []);
    }

    // Códigos públicos (apenas publicados)
    const codes = await getAllCodesAdmin();
    const publicCodes = (codes || []).filter((item: any) => item.published === true);
    return NextResponse.json(publicCodes);
  } catch (error) {
    console.error('Erro ao buscar códigos:', error);
    return NextResponse.json([], { status: 200 });
  }
}

// POST - Criar código
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
    const { title, description, language, fileUrl, fileName, published } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Título e descrição são obrigatórios' },
        { status: 400 }
      );
    }

    const code = await createCode(title, description, language || '', fileUrl || '', fileName || '', published || false);

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
    const { id, title, description, language, fileUrl, fileName, published } = body;

    if (!id || !title || !description) {
      return NextResponse.json(
        { error: 'ID, título e descrição são obrigatórios' },
        { status: 400 }
      );
    }

    const code = await updateCode(id, title, description, language || '', fileUrl || '', fileName || '', published || false);

    return NextResponse.json(code);
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

    const success = await deleteCode(parseInt(id));

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Erro ao deletar código' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erro ao deletar código:', error);
    return NextResponse.json(
      { error: 'Erro ao deletar código' },
      { status: 500 }
    );
  }
}