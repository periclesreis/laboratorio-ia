import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

const LIMITE_COMENTARIO = 300;
const LIMITE_NOME = 60;

export async function GET(_request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const newsId = Number(id);

    if (!Number.isInteger(newsId) || newsId <= 0) {
      return NextResponse.json(
        { error: "ID da notícia inválido." },
        { status: 400 }
      );
    }

    const db = await getDb();

    const result = await db.query(
      `
      SELECT id, news_id, name, content, created_at
      FROM news_comments
      WHERE news_id = $1
        AND published = true
      ORDER BY created_at DESC
      LIMIT 50
      `,
      [newsId]
    );

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar comentários da notícia:", error);

    return NextResponse.json(
      { error: "Erro ao buscar comentários." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const newsId = Number(id);

    if (!Number.isInteger(newsId) || newsId <= 0) {
      return NextResponse.json(
        { error: "ID da notícia inválido." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const name = String(body?.name || "Visitante").trim().slice(0, LIMITE_NOME);
    const content = String(body?.content || "").trim();

    if (!content) {
      return NextResponse.json(
        { error: "Digite um comentário antes de enviar." },
        { status: 400 }
      );
    }

    if (content.length > LIMITE_COMENTARIO) {
      return NextResponse.json(
        {
          error: `O comentário deve ter no máximo ${LIMITE_COMENTARIO} caracteres.`,
        },
        { status: 400 }
      );
    }

    const db = await getDb();

    const result = await db.query(
      `
      INSERT INTO news_comments (news_id, name, content, published)
      VALUES ($1, $2, $3, true)
      RETURNING id, news_id, name, content, created_at
      `,
      [newsId, name || "Visitante", content]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("Erro ao criar comentário da notícia:", error);

    return NextResponse.json(
      { error: "Erro ao enviar comentário." },
      { status: 500 }
    );
  }
}
