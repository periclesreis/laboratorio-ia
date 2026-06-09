// app/admin/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface DashboardStats {
  news: number;
  codes: number;
  projects: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({ news: 0, codes: 0, projects: 0 });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include',
        });
        
        if (!response.ok) {
          router.push('/admin/login');
          return;
        }

        loadStats();
      } catch (err) {
        console.error('Erro ao verificar autenticação:', err);
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [router]);

  const loadStats = async () => {
    try {
      const [newsRes, codesRes, projectsRes] = await Promise.all([
        fetch('/api/news'),
        fetch('/api/codes'),
        fetch('/api/projects'),
      ]);

      const news = await newsRes.json();
      const codes = await codesRes.json();
      const projects = await projectsRes.json();

      setStats({
        news: news.length,
        codes: codes.length,
        projects: projects.length,
      });
    } catch (err) {
      console.error('Erro ao carregar estatísticas:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { 
        method: 'POST',
        credentials: 'include',
      });
      router.push('/admin/login');
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
    }
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Painel Admin
            </h1>
            <p className="text-slate-400 text-sm">Laboratório de IA</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition border-2 border-red-500"
          >
            Sair
          </button>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Estatísticas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6">
            <div className="text-4xl mb-2">📰</div>
            <h3 className="text-slate-400 text-sm font-semibold mb-2">NOTÍCIAS</h3>
            <p className="text-3xl font-bold text-purple-400">{stats.news}</p>
          </div>

          <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6">
            <div className="text-4xl mb-2">💾</div>
            <h3 className="text-slate-400 text-sm font-semibold mb-2">CÓDIGOS</h3>
            <p className="text-3xl font-bold text-purple-400">{stats.codes}</p>
          </div>

          <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-slate-400 text-sm font-semibold mb-2">PROJETOS</h3>
            <p className="text-3xl font-bold text-purple-400">{stats.projects}</p>
          </div>
        </div>

        {/* Menu de Gerenciamento */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/admin/news">
            <div className="bg-slate-800 hover:bg-slate-700 border-4 border-purple-500 rounded-lg p-8 cursor-pointer transition group">
              <div className="text-5xl mb-4">📰</div>
              <h2 className="text-2xl font-bold text-purple-400 mb-2 group-hover:text-purple-300">
                Notícias
              </h2>
              <p className="text-slate-400">Adicionar, editar e deletar notícias</p>
            </div>
          </Link>

          <Link href="/admin/codes">
            <div className="bg-slate-800 hover:bg-slate-700 border-4 border-purple-500 rounded-lg p-8 cursor-pointer transition group">
              <div className="text-5xl mb-4">💾</div>
              <h2 className="text-2xl font-bold text-purple-400 mb-2 group-hover:text-purple-300">
                Códigos
              </h2>
              <p className="text-slate-400">Gerenciar códigos para download</p>
            </div>
          </Link>

          <Link href="/admin/projects">
            <div className="bg-slate-800 hover:bg-slate-700 border-4 border-purple-500 rounded-lg p-8 cursor-pointer transition group">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-purple-400 mb-2 group-hover:text-purple-300">
                Projetos
              </h2>
              <p className="text-slate-400">Gerenciar projetos para iniciantes</p>
            </div>
          </Link>
        </div>

        {/* Link para voltar ao site */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-purple-400 hover:text-purple-300 transition">
            ← Voltar ao site
          </Link>
        </div>
      </main>
    </div>
  );
}