// app/admin/codes/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Code {
  id: number;
  title: string;
  description: string;
  language: string;
  fileUrl: string;
  fileName: string;
  published: boolean;
}

export default function AdminCodesPage() {
  const [codes, setCodes] = useState<Code[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    language: 'JavaScript',
    fileUrl: '',
    fileName: '',
    published: true,
  });
  const router = useRouter();

  useEffect(() => {
    loadCodes();
  }, []);

  const loadCodes = async () => {
    try {
      const response = await fetch('/api/codes');
      const data = await response.json();
      setCodes(data);
    } catch (error) {
      console.error('Erro ao carregar códigos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        // Atualizar
        await fetch('/api/codes', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, id: editingId }),
        });
      } else {
        // Criar
        await fetch('/api/codes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      setFormData({
        title: '',
        description: '',
        language: 'JavaScript',
        fileUrl: '',
        fileName: '',
        published: true,
      });
      setEditingId(null);
      setShowForm(false);
      loadCodes();
    } catch (error) {
      console.error('Erro ao salvar código:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar este código?')) return;

    try {
      await fetch(`/api/codes?id=${id}`, { method: 'DELETE' });
      loadCodes();
    } catch (error) {
      console.error('Erro ao deletar código:', error);
    }
  };

  const handleEdit = (item: Code) => {
    setFormData({
      title: item.title,
      description: item.description,
      language: item.language,
      fileUrl: item.fileUrl,
      fileName: item.fileName,
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

  const languages = ['JavaScript', 'Python', 'HTML/CSS', 'Java', 'C', 'C++', 'PHP', 'SQL', 'TypeScript', 'React', 'Node.js'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-purple-500/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-purple-400">Gerenciar Códigos</h1>
            <p className="text-slate-400 text-sm">{codes.length} código(s)</p>
          </div>
          <Link href="/admin/dashboard" className="text-purple-400 hover:text-purple-300">
            ← Voltar
          </Link>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Botão Novo Código */}
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({
              title: '',
              description: '',
              language: 'JavaScript',
              fileUrl: '',
              fileName: '',
              published: true,
            });
          }}
          className="mb-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg border-2 border-purple-500 transition"
        >
          {showForm ? '✕ Cancelar' : '+ Novo Código'}
        </button>

        {/* Formulário */}
        {showForm && (
          <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              {editingId ? 'Editar Código' : 'Novo Código'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Título *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  placeholder="Ex: Calculadora em Python"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-2">Descrição *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none h-20"
                  placeholder="Descreva o que o código faz"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Linguagem *</label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                    required
                  >
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-2">Nome do Arquivo *</label>
                  <input
                    type="text"
                    value={formData.fileName}
                    onChange={(e) => setFormData({ ...formData, fileName: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                    placeholder="Ex: calculadora.py"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-2">URL do Arquivo *</label>
                <input
                  type="url"
                  value={formData.fileUrl}
                  onChange={(e) => setFormData({ ...formData, fileUrl: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                  placeholder="https://exemplo.com/arquivo.py"
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
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold rounded-lg border-2 border-purple-500 transition"
              >
                {editingId ? 'Atualizar' : 'Criar'} Código
              </button>
            </form>
          </div>
        )}

        {/* Lista de Códigos */}
        <div className="space-y-4">
          {codes.length === 0 ? (
            <div className="bg-slate-800 border-2 border-purple-500/30 rounded-lg p-8 text-center text-slate-400">
              Nenhum código ainda. Crie um para começar!
            </div>
          ) : (
            codes.map((item) => (
              <div key={item.id} className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{item.title}</h3>
                    <p className="text-slate-300 mb-2">{item.description}</p>
                    <div className="flex gap-4 text-sm text-slate-400">
                      <span>📝 {item.language}</span>
                      <span>📄 {item.fileName}</span>
                      <span>{item.published ? '✅ Publicado' : '⏸️ Rascunho'}</span>
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
