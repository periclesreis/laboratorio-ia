// app/admin/projects/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  icon: string;
  description: string;
  time: string;
  difficulty: string;
  code: string;
  published: boolean;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    icon: '🚀',
    description: '',
    time: '15 minutos',
    difficulty: 'Iniciante',
    code: '',
    published: true,
  });
  const router = useRouter();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        // Atualizar
        await fetch('/api/projects', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, id: editingId }),
        });
      } else {
        // Criar
        await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      setFormData({
        title: '',
        icon: '🚀',
        description: '',
        time: '15 minutos',
        difficulty: 'Iniciante',
        code: '',
        published: true,
      });
      setEditingId(null);
      setShowForm(false);
      loadProjects();
    } catch (error) {
      console.error('Erro ao salvar projeto:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar este projeto?')) return;

    try {
      await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      loadProjects();
    } catch (error) {
      console.error('Erro ao deletar projeto:', error);
    }
  };

  const handleEdit = (item: Project) => {
    setFormData({
      title: item.title,
      icon: item.icon,
      description: item.description,
      time: item.time,
      difficulty: item.difficulty,
      code: item.code,
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

  const emojis = ['🚀', '📝', '🌐', '📱', '💻', '🎮', '🧮', '⚙️', '🔧', '📊'];
  const difficulties = ['Iniciante', 'Intermediário', 'Avançado'];
  const times = ['5 minutos', '10 minutos', '15 minutos', '20 minutos', '30 minutos', '1 hora'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-purple-500/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-purple-400">Gerenciar Projetos</h1>
            <p className="text-slate-400 text-sm">{projects.length} projeto(s)</p>
          </div>
          <Link href="/admin/dashboard" className="text-purple-400 hover:text-purple-300">
            ← Voltar
          </Link>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Botão Novo Projeto */}
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({
              title: '',
              icon: '🚀',
              description: '',
              time: '15 minutos',
              difficulty: 'Iniciante',
              code: '',
              published: true,
            });
          }}
          className="mb-4 px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg border-2 border-purple-500 transition"
        >
          {showForm ? '✕ Cancelar' : '+ Novo Projeto'}
        </button>

        {/* Formulário */}
        {showForm && (
          <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-4 mb-5">
            <h2 className="text-xl font-bold text-purple-400 mb-3 leading-tight">
              {editingId ? 'Editar Projeto' : 'Novo Projeto'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-1">Título *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-1.5 text-sm bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                    placeholder="Ex: Hello World em Python"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-1">Ícone</label>
                  <select
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-3 py-1.5 text-sm bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  >
                    {emojis.map((emoji) => (
                      <option key={emoji} value={emoji}>{emoji}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">Descrição *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-1.5 text-sm leading-tight bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none h-16"
                  placeholder="Descreva o projeto"
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-1">Tempo</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-1.5 text-sm bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  >
                    {times.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-1">Dificuldade</label>
                  <select
                    value={formData.difficulty}
                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                    className="w-full px-3 py-1.5 text-sm bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  >
                    {difficulties.map((diff) => (
                      <option key={diff} value={diff}>{diff}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-semibold mb-1">Linguagem</label>
                  <input
                    type="text"
                    placeholder="Ex: Python"
                    className="w-full px-3 py-1.5 text-sm bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">Código *</label>
                <textarea
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  className="w-full px-3 py-1.5 text-sm leading-tight bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none font-mono h-24"
                  placeholder="Cole o código do projeto aqui"
                  required
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
                className="w-full py-2 text-sm bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg border-2 border-purple-500 transition"
              >
                {editingId ? 'Atualizar' : 'Criar'} Projeto
              </button>
            </form>
          </div>
        )}

        {/* Lista de Projetos */}
        <div className="space-y-2">
          {projects.length === 0 ? (
            <div className="bg-slate-800 border-2 border-purple-500/30 rounded-lg p-4 text-center text-slate-400 text-sm">
              Nenhum projeto ainda. Crie um para começar!
            </div>
          ) : (
            projects.map((item) => (
              <div key={item.id} className="bg-slate-800 border-4 border-purple-500 rounded-lg p-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-lg font-bold text-purple-400 leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-slate-300 text-sm leading-tight mb-2 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
                      <span>⏱️ {item.time}</span>
                      <span>📊 {item.difficulty}</span>
                      <span>{item.published ? '✅ Publicado' : '⏸️ Rascunho'}</span>
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
            ))
          )}
        </div>
      </main>
    </div>
  );
}
