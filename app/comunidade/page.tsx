// app/comunidade/page.tsx
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface CommunityPost {
  id: number;
  name: string;
  title: string;
  content: string;
  created_at: string;
  replies_count?: string | number;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("pt-BR");
}

export default function ComunidadePage() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
  });

  const loadPosts = async () => {
    try {
      const response = await fetch("/api/community");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Erro ao carregar comunidade:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setMessage("");

    try {
      const response = await fetch("/api/community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Erro ao enviar publicação.");
        return;
      }

      setMessage(
        data.message ||
          "Sua publicação foi enviada com sucesso e poderá aparecer após análise."
      );

      setFormData({
        name: "",
        email: "",
        title: "",
        content: "",
      });

      await loadPosts();
    } catch (error) {
      console.error("Erro ao enviar publicação:", error);
      setMessage("Erro ao enviar publicação.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar</span>
          </Link>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Comunidade
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Compartilhe dúvidas, ideias, sugestões e experiências com outros
            visitantes do Laboratório de IA.
          </p>
        </div>
      </section>

      <main className="max-w-[1500px] mx-auto px-4 py-14">
        <div className="grid xl:grid-cols-[minmax(0,1fr)_360px] gap-6 items-start">
          <section className="min-w-0">
            <div className="mb-4 rounded-lg bg-purple-950/40 px-4 py-3 shadow-lg shadow-purple-500/10">
  <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 leading-tight">
    Conversas recentes{" "}
    <span className="text-base sm:text-lg font-normal text-slate-200">
      (Clique sobre uma conversa para ler, responder e interagir)
    </span>
  </h2>
</div>
            {loading ? (
              <div className="text-purple-400">Carregando comunidade...</div>
            ) : posts.length === 0 ? (
              <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-6 text-slate-300">
                Ainda não há publicações aprovadas. Seja um dos primeiros a
                participar!
              </div>
            ) : (
              <div className="space-y-3">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/comunidade/${post.id}`}
                    className="block bg-slate-800 border-2 border-purple-500 rounded-lg px-3 py-2 hover:shadow-lg hover:shadow-purple-500/40 transition-all"
                  >
                    <div className="flex flex-wrap gap-x-3 gap-y-0 text-xs leading-tight text-slate-400 mb-1">
  <span>👤 {post.name}</span>
  <span>📅 {formatDate(post.created_at)}</span>
  <span>💬 {Number(post.replies_count || 0)} resposta(s)</span>
</div>

<h3 className="text-lg font-bold text-purple-400 mb-1 leading-tight">
  {post.title}
</h3>

<p className="text-slate-300 text-sm leading-tight line-clamp-2">
  {post.content}
</p>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <aside className="bg-slate-800 border-2 border-purple-500 rounded-lg p-5 w-full max-w-[360px] xl:ml-auto">
            <h2 className="text-2xl font-bold text-purple-400 mb-2">
              Criar publicação
            </h2>

            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Use este espaço para enviar dúvidas, sugestões, experiências,
              comentários ou ideias relacionadas a IA, programação, aplicativos
              e projetos. As publicações passam por moderação antes de aparecer.
            </p>

            {message && (
              <div className="mb-4 rounded-lg border border-purple-500/50 bg-slate-900 p-3 text-sm text-slate-200">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
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
                  Título *
                </label>

                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full rounded-lg border-2 border-purple-500 bg-slate-700 px-3 py-2 text-sm text-white focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1">
                  Mensagem *
                </label>

                <textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  className="h-32 w-full rounded-lg border-2 border-purple-500 bg-slate-700 px-3 py-2 text-sm text-white focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-lg border-2 border-purple-500 bg-purple-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-500 disabled:opacity-60"
              >
                {sending ? "Enviando..." : "Enviar para análise"}
              </button>
            </form>
          </aside>
        </div>
      </main>
    </div>
  );
}