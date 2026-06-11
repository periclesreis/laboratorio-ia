// app/admin/news/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface News {
  id: number;
  title: string;
  description: string;
  link?: string;
  content?: string;
  image?: string;
  date: string;
  published: boolean;
}

type NewsType = 'link' | 'content';

export default function AdminNewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newsType, setNewsType] = useState<NewsType>('link');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    content: '',
    image: '',
    date: new Date().toISOString().split('T')[0],
    published: true,
  });

  useEffect(() => {
    loadNews();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      link: '',
      content: '',
      image: '',
      date: new Date().toISOString().split('T')[0],
      published: true,
    });

    setEditingId(null);
    setNewsType('link');
  };

  const loadNews = async () => {
    try {
      const response = await fetch('/api/news?admin=true', {
        credentials: 'include',
      });

      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Erro ao carregar notícias:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      link: newsType === 'link' ? formData.link : '',
      content: newsType === 'content' ? formData.content : '',
    };

    if (newsType === 'link' && !payload.link.trim()) {
      alert('Informe o link da notícia.');
      return;
    }

    if (newsType === 'content' && !payload.content.trim()) {
      alert('Informe o texto completo da notícia.');
      return;
    }

    try {
      if (editingId) {
        await fetch('/api/news', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ ...payload, id: editingId }),
        });
      } else {
        await fetch('/api/news', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(payload),
        });
      }

      resetForm();
      setShowForm(false);
      loadNews();
    } catch (error) {
      console.error('Erro ao salvar notícia:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar esta notícia?')) return;

    try {
      await fetch(`/api/news?id=${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      loadNews();
    } catch (error) {
      console.error('Erro ao deletar notícia:', error);
    }
  };

  const handleEdit = (item: News) => {
    const hasContent = Boolean(item.content && item.content.trim().length > 0);

    setNewsType(hasContent ? 'content' : 'link');

    setFormData({
      title: item.title || '',
      description: item.description || '',
      link: item.link || '',
      content: item.content || '',
      image: item.image || '',
      date: item.date || new Date().toISOString().split('T')[0],
      published: item.published,
    });

    setEditingId(item.id);
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-purple-400 text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-purple-500/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-purple-400">
              Gerenciar Notícias
            </h1>

            <p className="text-slate-400 text-sm">
              {news.length} notícia(s)
            </p>
          </div>

          <Link
            href="/admin/dashboard"
            className="text-purple-400 hover:text-purple-300"
          >
            ← Voltar
          </Link>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Botão Nova Notícia */}
        <button
          onClick={() => {
            setShowForm(!showForm);
            resetForm();
          }}
          className="mb-4 px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg border-2 border-purple-500 transition"
        >
          {showForm ? '✕ Cancelar' : '+ Nova Notícia'}
        </button>

        {/* Formulário */}
        {showForm && (
          <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-4 mb-5">
            <h2 className="text-xl font-bold text-purple-400 mb-3 leading-tight">
              {editingId ? 'Editar Notícia' : 'Nova Notícia'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-2">
              {/* Tipo da notícia */}
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">
                  Tipo da notícia *
                </label>

                <div className="grid sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setNewsType('link')}
                    className={`px-3 py-2 text-sm rounded-lg border-2 transition ${
                      newsType === 'link'
                        ? 'bg-purple-600 border-purple-400 text-white'
                        : 'bg-slate-700 border-purple-500 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    🔗 Link externo
                  </button>

                  <button
                    type="button"
                    onClick={() => setNewsType('content')}
                    className={`px-3 py-2 text-sm rounded-lg border-2 transition ${
                      newsType === 'content'
                        ? 'bg-purple-600 border-purple-400 text-white'
                        : 'bg-slate-700 border-purple-500 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    📝 Texto completo
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">
                  Título *
                </label>

                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-3 py-1.5 text-sm bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">
                  Descrição / prévia do card *
                </label>

                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-3 py-1.5 text-sm leading-tight bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none h-16"
                  placeholder="Essa descrição aparecerá no card da página pública, com até 2 linhas."
                  required
                />
              </div>

              {newsType === 'link' && (
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-1">
                    Link externo *
                  </label>

                  <input
                    type="url"
                    value={formData.link}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        link: e.target.value,
                        content: '',
                      })
                    }
                    className="w-full px-3 py-1.5 text-sm bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                    placeholder="https://exemplo.com/noticia"
                    required={newsType === 'link'}
                  />
                </div>
              )}

              {newsType === 'content' && (
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-1">
                    Texto completo da notícia *
                  </label>

                  <textarea
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        content: e.target.value,
                        link: '',
                      })
                    }
                    className="w-full px-3 py-2 text-sm leading-relaxed bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none h-44"
                    placeholder="Digite ou cole aqui o texto completo da notícia."
                    required={newsType === 'content'}
                  />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-1">
                    Data
                  </label>

                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-sm bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-1">
                    URL da Imagem
                  </label>

                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-sm bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) =>
                    setFormData({ ...formData, published: e.target.checked })
                  }
                  className="w-4 h-4"
                />

                <label htmlFor="published" className="text-slate-300 text-sm">
                  Publicar
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 text-sm bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg border-2 border-purple-500 transition"
              >
                {editingId ? 'Atualizar' : 'Criar'} Notícia
              </button>
            </form>
          </div>
        )}

        {/* Lista de Notícias */}
        <div className="space-y-2">
          {news.length === 0 ? (
            <div className="bg-slate-800 border-2 border-purple-500/30 rounded-lg p-4 text-center text-slate-400 text-sm">
              Nenhuma notícia ainda. Crie uma para começar!
            </div>
          ) : (
            news.map((item) => {
              const isInternalText = Boolean(
                item.content && item.content.trim().length > 0
              );

              return (
                <div
                  key={item.id}
                  className="bg-slate-800 border-4 border-purple-500 rounded-lg p-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-purple-400 mb-1 leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-tight mb-2 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                        <span>📅 {item.date}</span>

                        <span>
                          {item.published ? '✅ Publicado' : '⏸️ Rascunho'}
                        </span>

                        {isInternalText ? (
                          <span>📝 Texto completo</span>
                        ) : (
                          item.link && <span>🔗 Link externo</span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => handleEdit(item)}
                        className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg border-2 border-blue-500 transition"
                      >
                        ✏️ Editar
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg border-2 border-red-500 transition"
                      >
                        🗑️ Deletar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}