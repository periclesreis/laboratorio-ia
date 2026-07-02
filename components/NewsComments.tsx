"use client";

import { useEffect, useState } from "react";

type NewsComment = {
  id: number;
  name: string;
  content: string;
  created_at: string;
};

type NewsCommentsProps = {
  newsId: number;
};

const LIMITE_COMENTARIO = 300;

function formatarData(data: string) {
  const date = new Date(data);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function NewsComments({ newsId }: NewsCommentsProps) {
  const [aberto, setAberto] = useState(false);
  const [comentarios, setComentarios] = useState<NewsComment[]>([]);
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  async function carregarComentarios() {
    try {
      setCarregando(true);

      const response = await fetch(`/api/news/${newsId}/comments`, {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Erro ao carregar comentários.");
      }

      setComentarios(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao carregar comentários:", error);
      setMensagem("Não foi possível carregar os comentários.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if (aberto) {
      carregarComentarios();
    }
  }, [aberto, newsId]);

  async function enviarComentario(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nomeLimpo = nome.trim();
    const comentarioLimpo = comentario.trim();

    if (!comentarioLimpo) {
      setMensagem("Digite um comentário antes de enviar.");
      return;
    }

    if (comentarioLimpo.length > LIMITE_COMENTARIO) {
      setMensagem(`O comentário deve ter no máximo ${LIMITE_COMENTARIO} caracteres.`);
      return;
    }

    try {
      setEnviando(true);
      setMensagem("");

      const response = await fetch(`/api/news/${newsId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nomeLimpo || "Visitante",
          content: comentarioLimpo,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Erro ao enviar comentário.");
      }

      setComentario("");
      setNome("");
      setMensagem("Comentário enviado com sucesso.");
      await carregarComentarios();
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
      setMensagem(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar o comentário."
      );
    } finally {
      setEnviando(false);
    }
  }

  const caracteresRestantes = LIMITE_COMENTARIO - comentario.length;

  return (
    <section className="mt-10 border-t border-white/10 pt-6">
      <button
        type="button"
        onClick={() => setAberto((valor) => !valor)}
        className="inline-flex items-center justify-center rounded-lg border-2 border-purple-500 bg-slate-800 px-5 py-3 text-sm font-bold text-purple-200 transition hover:bg-purple-950/60 hover:text-white"
      >
        💬 Comentários
        {comentarios.length > 0 ? ` (${comentarios.length})` : ""}
      </button>

      {aberto && (
        <div className="mt-6 rounded-2xl border border-purple-500/40 bg-slate-950/70 p-4 sm:p-5">
          <h2 className="mb-2 text-2xl font-bold text-purple-400">
            Comentários
          </h2>

          <p className="mb-5 text-sm leading-relaxed text-slate-400">
            Compartilhe uma opinião curta sobre a notícia. Para facilitar a
            leitura dos outros visitantes, cada comentário é limitado a{" "}
            <strong className="text-slate-200">{LIMITE_COMENTARIO}</strong>{" "}
            caracteres.
          </p>

          <form onSubmit={enviarComentario} className="mb-6 space-y-3">
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value.slice(0, 60))}
              placeholder="Seu nome (opcional)"
              className="w-full rounded-lg border border-purple-500/40 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-purple-400"
            />

            <textarea
              value={comentario}
              onChange={(event) =>
                setComentario(event.target.value.slice(0, LIMITE_COMENTARIO))
              }
              placeholder="Escreva seu comentário..."
              maxLength={LIMITE_COMENTARIO}
              rows={4}
              className="w-full resize-none rounded-lg border border-purple-500/40 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-purple-400"
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span
                className={`text-xs ${
                  caracteresRestantes <= 30 ? "text-yellow-300" : "text-slate-400"
                }`}
              >
                {caracteresRestantes} caracteres restantes
              </span>

              <button
                type="submit"
                disabled={enviando}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-bold text-white transition hover:shadow-lg hover:shadow-purple-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {enviando ? "Enviando..." : "Enviar comentário"}
              </button>
            </div>
          </form>

          {mensagem && (
            <div className="mb-5 rounded-lg border border-purple-500/40 bg-purple-950/30 px-4 py-3 text-sm text-purple-100">
              {mensagem}
            </div>
          )}

          {carregando ? (
            <p className="text-sm text-slate-400">Carregando comentários...</p>
          ) : comentarios.length === 0 ? (
            <p className="text-sm text-slate-400">
              Ainda não há comentários. Seja o primeiro a comentar.
            </p>
          ) : (
            <div className="space-y-3">
              {comentarios.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-slate-700 bg-slate-900/80 p-4"
                >
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <strong className="text-sm text-purple-300">
                      {item.name || "Visitante"}
                    </strong>

                    <span className="text-xs text-slate-500">
                      {formatarData(item.created_at)}
                    </span>
                  </div>

                  <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-200">
                    {item.content}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
