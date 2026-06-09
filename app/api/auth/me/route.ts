// app/api/auth/me/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
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

    return NextResponse.json(
      {
        authenticated: true,
        user: payload,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error);

    return NextResponse.json(
      { error: 'Erro ao verificar autenticação' },
      { status: 401 }
    );
  }
}