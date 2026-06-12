// app/admin/community/page.tsx
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface CommunityPost {
  id: number;
  name: string;
  email?: string;
  title: string;
  content: string;
  published: boolean;
  created_at: string;
  replies_count?: string | number;
}

interface CommunityReply {
  id: number;
  post_id: number;
  name: string;
  email?: string;
  content: string;
  published: boolean;
  created_at: string;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleString("pt-BR");
}

export default function AdminCommunityPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null);
  const [replies, setReplies] = useState<CommunityReply[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [message, setMessage] = useState("");

  const loadPosts = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/community?admin=true");
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Erro ao carregar publicações.");
        setPosts([]);
        return;
      }

      setPosts(data);
    } catch (error) {
      console.error("Erro ao carregar publicações:", error);
      setMessage("Erro ao carregar publicações.");
    } finally {
      setLoading(false);
    }
  };

  const loadReplies = async (post: CommunityPost) => {
    setSelectedPost(post);
    setReplies([]);
    setLoadingReplies(true);
    setMessage("");

    try {
      const response = await fetch(`/api/community/${post.id}/replies`);
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Erro ao carregar respostas.");
        return;
      }

      setReplies(data);
    } catch (error) {
      console.error("Erro ao carregar respostas:", error);
      setMessage("Erro ao carregar respostas.");
    } finally {
      setLoadingReplies(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const updatePostStatus = async (postId: number, published: boolean) => {
    setMessage("");

    try {
      const response = await fetch(`/api/community/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ published }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Erro ao atualizar publicação.");
        return;
      }

      setMessage(
        published
          ? "Publicação aprovada com sucesso."
          : "Publicação ocultada com sucesso."
      );

      await loadPosts();

      if (selectedPost?.id === postId) {
        setSelectedPost({ ...selectedPost, published });
      }
    } catch (error) {
      console.error("Erro ao atualizar publicação:", error);
      setMessage("Erro ao atualizar publicação.");
    }
  };

  const deletePost = async (postId: number) => {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir esta publicação? As respostas também serão excluídas."
    );

    if (!confirmed) {
      return;
    }

    setMessage("");

    try {
      const response = await fetch(`/api/community/${postId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Erro ao excluir publicação.");
        return;
      }

      setMessage("Publicação excluída com sucesso.");

      if (selectedPost?.id === postId) {
        setSelectedPost(null);
        setReplies([]);
      }

      await loadPosts();
    } catch (error) {
      console.error("Erro ao excluir publicação:", error);
      setMessage("Erro ao excluir publicação.");
    }
  };

  const updateReplyStatus = async (replyId: number, published: boolean) => {
    setMessage("");

    try {
      const response = await fetch(`/api/community/replies/${replyId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ published }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Erro ao atualizar resposta.");
        return;
      }

      setMessage(
        published
          ? "Resposta aprovada com sucesso."
          : "Resposta ocultada com sucesso."
      );

      if (selectedPost) {
        await loadReplies(selectedPost);
        await loadPosts();
      }
    } catch (error) {
      console.error("Erro ao atualizar resposta:", error);
      setMessage("Erro ao atualizar resposta.");
    }
  };

  const deleteReply = async (replyId: number) => {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir esta resposta?"
    );

    if (!confirmed) {
      return;
    }

    setMessage("");

    try {
      const response = await fetch(`/api/community/replies/${replyId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Erro ao excluir resposta.");
        return;
      }

      setMessage("Resposta excluída com sucesso.");

      if (selectedPost) {
        await loadReplies(selectedPost);
        await loadPosts();
      }
    } catch (error) {
      console.error("Erro ao excluir resposta:", error);
      setMessage("Erro ao excluir resposta.");
    }
  };

  const pendingPosts = posts.filter((post) => !post.published).length;
  const publishedPosts = posts.filter((post) => post.published).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-8 px-3">
        <div className="max-w-[1800px] mx-auto">
          <Link
            href="/admin/dashboard"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-4 text-sm"
          >
            <span>←</span>
            <span>Voltar para área logada</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Gerenciar Comunidade
          </h1>

          <p className="text-slate-400 max-w-3xl leading-tight text-sm">
            Aprove, oculte ou exclua publicações e respostas enviadas pelos
            visitantes.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-red-500 bg-red-950/40 px-3 py-1 text-xs text-red-200">
              Pendentes: {pendingPosts}
            </span>

            <span className="rounded-full border border-green-500/50 bg-green-500/10 px-3 py-1 text-xs text-green-200">
              Aprovadas: {publishedPosts}
            </span>

            <span className="rounded-full border border-purple-500/50 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
              Total: {posts.length}
            </span>
          </div>
        </div>
      </section>

      <main className="max-w-[1800px] mx-auto px-3 py-6">
        {message && (
          <div className="mb-4 rounded-lg border border-purple-500/50 bg-slate-800 p-3 text-xs text-slate-200">
            {message}
          </div>
        )}

        <div className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-4 items-start">
          <section className="bg-slate-800 border-2 border-purple-500 rounded-lg p-3">
            <div className="flex items-center justify-between gap-2 mb-3">
              <h2 className="text-xl font-bold text-purple-400">
                Publicações
              </h2>

              <button
                type="button"
                onClick={loadPosts}
                className="rounded-md border border-purple-500 px-2 py-1 text-[11px] font-bold text-purple-200 transition hover:bg-purple-500/20"
              >
                Atualizar
              </button>
            </div>

            {loading ? (
              <p className="text-purple-300 text-sm">Carregando publicações...</p>
            ) : posts.length === 0 ? (
              <p className="text-slate-300 text-sm">Nenhuma publicação encontrada.</p>
            ) : (
              <div className="space-y-2">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className={`rounded-lg border-2 p-2 ${
                      post.published
                        ? "border-green-500/70 bg-green-950/20"
                        : "border-red-500 bg-red-950/40"
                    }`}
                  >
                    <div className="mb-1 flex flex-wrap gap-1 text-[11px] leading-tight">
                      <span
                        className={`rounded-full px-2 py-0.5 font-bold ${
                          post.published
                            ? "bg-green-500/20 text-green-200"
                            : "bg-red-500/20 text-red-200"
                        }`}
                      >
                        {post.published ? "Aprovada" : "Pendente"}
                      </span>

                      <span className="text-slate-400">
                        {formatDate(post.created_at)}
                      </span>

                      <span className="text-slate-400">
                        {Number(post.replies_count || 0)} resposta(s)
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-purple-300 mb-0.5 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-300 mb-1 leading-tight">
                      Por: {post.name}
                      {post.email ? ` • ${post.email}` : ""}
                    </p>

                    <p className="text-xs text-slate-300 leading-tight line-clamp-2 mb-2">
                      {post.content}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      <button
                        type="button"
                        onClick={() => loadReplies(post)}
                        className="rounded-md border border-purple-500 bg-purple-600 px-2 py-1 text-[11px] font-bold text-white transition hover:bg-purple-500"
                      >
                        Ver respostas
                      </button>

                      {!post.published ? (
                        <button
                          type="button"
                          onClick={() => updatePostStatus(post.id, true)}
                          className="rounded-md border border-green-500 bg-green-600 px-2 py-1 text-[11px] font-bold text-white transition hover:bg-green-500"
                        >
                          Aprovar
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => updatePostStatus(post.id, false)}
                          className="rounded-md border border-yellow-500 bg-yellow-600 px-2 py-1 text-[11px] font-bold text-white transition hover:bg-yellow-500"
                        >
                          Ocultar
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => deletePost(post.id)}
                        className="rounded-md border border-red-500 bg-red-700 px-2 py-1 text-[11px] font-bold text-white transition hover:bg-red-600"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="bg-slate-800 border-2 border-purple-500 rounded-lg p-3">
            <h2 className="text-xl font-bold text-purple-400 mb-3">
              Respostas
            </h2>

            {!selectedPost ? (
              <p className="text-slate-300 text-sm">
                Selecione uma publicação para ver as respostas.
              </p>
            ) : (
              <>
                <div className="mb-3 rounded-lg border border-purple-500/50 bg-slate-900 p-3">
                  <p className="text-[11px] text-slate-400 mb-0.5 leading-tight">
                    Publicação selecionada
                  </p>

                  <h3 className="font-bold text-purple-300 text-sm leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>

                {loadingReplies ? (
                  <p className="text-purple-300 text-sm">Carregando respostas...</p>
                ) : replies.length === 0 ? (
                  <p className="text-slate-300 text-sm">
                    Nenhuma resposta encontrada para esta publicação.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {replies.map((reply) => (
                      <div
                        key={reply.id}
                        className={`rounded-lg border-2 p-2 ${
                          reply.published
                            ? "border-green-500/70 bg-green-950/20"
                            : "border-red-500 bg-red-950/40"
                        }`}
                      >
                        <div className="mb-1 flex flex-wrap gap-1 text-[11px] leading-tight">
                          <span
                            className={`rounded-full px-2 py-0.5 font-bold ${
                              reply.published
                                ? "bg-green-500/20 text-green-200"
                                : "bg-red-500/20 text-red-200"
                            }`}
                          >
                            {reply.published ? "Aprovada" : "Pendente"}
                          </span>

                          <span className="text-slate-400">
                            {formatDate(reply.created_at)}
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 mb-1 leading-tight">
                          Por: {reply.name}
                          {reply.email ? ` • ${reply.email}` : ""}
                        </p>

                        <p className="text-xs text-slate-300 leading-tight mb-2">
                          {reply.content}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {!reply.published ? (
                            <button
                              type="button"
                              onClick={() =>
                                updateReplyStatus(reply.id, true)
                              }
                              className="rounded-md border border-green-500 bg-green-600 px-2 py-1 text-[11px] font-bold text-white transition hover:bg-green-500"
                            >
                              Aprovar
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() =>
                                updateReplyStatus(reply.id, false)
                              }
                              className="rounded-md border border-yellow-500 bg-yellow-600 px-2 py-1 text-[11px] font-bold text-white transition hover:bg-yellow-500"
                            >
                              Ocultar
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => deleteReply(reply.id)}
                            className="rounded-md border border-red-500 bg-red-700 px-2 py-1 text-[11px] font-bold text-white transition hover:bg-red-600"
                          >
                            Excluir
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}