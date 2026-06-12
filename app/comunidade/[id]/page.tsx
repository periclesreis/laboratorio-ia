// app/comunidade/[id]/page.tsx
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Post {
  id: number;
  name: string;
  title: string;
  content: string;
  created_at: string;
}

interface Reply {
  id: number;
  name: string;
  content: string;
  created_at: string;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("pt-BR");
}

export default function ComunidadeConversaPage() {
  const params = useParams();
  const id = String(params.id);

  const [post, setPost] = useState<Post | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  useEffect(() => {
    const loadConversation = async () => {
      try {
        const response = await fetch(`/api/community/${id}`);
        const data = await response.json();

        if (response.ok) {
          setPost(data.post);
          setReplies(data.replies || []);
        }
      } catch (error) {
        console.error("Erro ao carregar conversa:", error);
      } finally {
        setLoading(false);
      }
    };

    loadConversation();
  }, [id]);

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setMessage("");

    try {
      const response = await fetch(`/api/community/${id}/replies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Erro ao enviar resposta.");
        return;
      }

      setMessage(
        "Sua resposta foi enviada com sucesso e poderá aparecer após análise."
      );

      setFormData({
        name: "",
        email: "",
        content: "",
      });
    } catch (error) {
      console.error("Erro ao enviar resposta:", error);
      setMessage("Erro ao enviar resposta.");
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-purple-400 text-xl">Carregando conversa...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <Link
            href="/comunidade"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar para Comunidade</span>
          </Link>

          <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-6">
            Conversa não encontrada.
          </div>
        </main>
      </div>
    );
  }

  const paragraphs = post.content
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/comunidade"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar para Comunidade</span>
          </Link>

          <div className="text-sm text-slate-400 mb-3">
            👤 {post.name} • 📅 {formatDate(post.created_at)}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {post.title}
          </h1>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <article className="bg-slate-800 border-2 border-purple-500 rounded-lg p-6">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        <section>
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            Respostas
          </h2>

          {replies.length === 0 ? (
            <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-5 text-slate-300">
              Ainda não há respostas aprovadas.
            </div>
          ) : (
            <div className="space-y-4">
              {replies.map((reply) => (
                <div
                  key={reply.id}
                  className="bg-slate-800 border-2 border-purple-500 rounded-lg p-5"
                >
                  <div className="text-xs text-slate-400 mb-2">
                    👤 {reply.name} • 📅 {formatDate(reply.created_at)}
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {reply.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="bg-slate-800 border-2 border-purple-500 rounded-lg p-5">
          <h2 className="text-2xl font-bold text-purple-400 mb-2">
            Enviar resposta
          </h2>

          <p className="text-slate-400 text-sm mb-4">
            Sua resposta poderá aparecer após análise.
          </p>

          {message && (
            <div className="mb-4 rounded-lg border border-purple-500/50 bg-slate-900 p-3 text-sm text-slate-200">
              {message}
            </div>
          )}

          <form onSubmit={handleReply} className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">
                Nome *
              </label>

              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border-2 border-purple-500 bg-slate-700 px-3 py-2 text-sm text-white focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">
                E-mail opcional
              </label>

              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border-2 border-purple-500 bg-slate-700 px-3 py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">
                Resposta *
              </label>

              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                className="h-28 w-full rounded-lg border-2 border-purple-500 bg-slate-700 px-3 py-2 text-sm text-white focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-lg border-2 border-purple-500 bg-purple-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-500 disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Enviar resposta para análise"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}