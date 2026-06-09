// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import { createToken } from '@/lib/auth';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    const dbPath = path.join(process.cwd(), 'data.db');
    const db = new Database(dbPath);

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;
    db.close();

    if (!user) {
      return NextResponse.json(
        { error: 'Email ou senha incorretos' },
        { status: 401 }
      );
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Email ou senha incorretos' },
        { status: 401 }
      );
    }

    // Criar token
    const token = await createToken(email);

    // Criar resposta
    const response = NextResponse.json(
      { success: true, user: { email: user.email, name: user.name } },
      { status: 200 }
    );

    // Definir cookie NA RESPOSTA
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    return response;
  } catch (error) {
    console.error('Erro no login:', error);

    return NextResponse.json(
      { error: 'Erro ao fazer login' },
      { status: 500 }
    );
  }
}