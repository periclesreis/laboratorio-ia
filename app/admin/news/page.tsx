// app/admin/news/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface News {
  id: number;
  title: string;
  description: string;
  link?: string;
  image?: string;
  date: string;
  published: boolean;
}

export default function AdminNewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    image: '',
    date: new Date().toISOString().split('T')[0],
    published: true,
  });
  const router = useRouter();

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const response = await fetch('/api/news');
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
    
    try {
      if (editingId) {
        // Atualizar
        await fetch('/api/news', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, id: editingId }),
        });
      } else {
        // Criar
        await fetch('/api/news', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      setFormData({
        title: '',
        description: '',
        link: '',
        image: '',
        date: new Date().toISOString().split('T')[0],
        published: true,
      });
      setEditingId(null);
      setShowForm(false);
      loadNews();
    } catch (error) {
      console.error('Erro ao salvar notícia:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar esta notícia?')) return;

    try {
      await fetch(`/api/news?id=${id}`, { method: 'DELETE' });
      loadNews();
    } catch (error) {
      console.error('Erro ao deletar notícia:', error);
    }
  };

  const handleEdit = (item: News) => {
    setFormData({
      title: item.title,
      description: item.description,
      link: item.link || '',
      image: item.image || '',
      date: item.date,
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
            <h1 className="text-2xl font-bold text-purple-400">Gerenciar Notícias</h1>
            <p className="text-slate-400 text-sm">{news.length} notícia(s)</p>
          </div>
          <Link href="/admin/dashboard" className="text-purple-400 hover:text-purple-300">
            ← Voltar
          </Link>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Botão Nova Notícia */}
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({
              title: '',
              description: '',
              link: '',
              image: '',
              date: new Date().toISOString().split('T')[0],
              published: true,
            });
          }}
          className="mb-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg border-2 border-purple-500 transition"
        >
          {showForm ? '✕ Cancelar' : '+ Nova Notícia'}
        </button>

        {/* Formulário */}
        {showForm && (
          <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              {editingId ? 'Editar Notícia' : 'Nova Notícia'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Título *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-2">Descrição *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none h-24"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Link</label>
                  <input
                    type="url"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Data</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-2">URL da Imagem</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="published" className="text-slate-300">Publicar</label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg border-2 border-purple-500 transition"
              >
                {editingId ? 'Atualizar' : 'Criar'} Notícia
              </button>
            </form>
          </div>
        )}

        {/* Lista de Notícias */}
        <div className="space-y-4">
          {news.length === 0 ? (
            <div className="bg-slate-800 border-2 border-purple-500/30 rounded-lg p-8 text-center text-slate-400">
              Nenhuma notícia ainda. Crie uma para começar!
            </div>
          ) : (
            news.map((item) => (
              <div key={item.id} className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{item.title}</h3>
                    <p className="text-slate-300 mb-2">{item.description}</p>
                    <div className="flex gap-4 text-sm text-slate-400">
                      <span>📅 {item.date}</span>
                      <span>{item.published ? '✅ Publicado' : '⏸️ Rascunho'}</span>
                      {item.link && <span>🔗 Com link</span>}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg border-2 border-blue-500 transition"
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg border-2 border-red-500 transition"
                    >
                      🗑️ Deletar
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
