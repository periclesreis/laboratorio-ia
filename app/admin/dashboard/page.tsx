// app/admin/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include',
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      router.push('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-purple-400 text-xl">Carregando...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-purple-500/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-purple-400">
              Painel Admin
            </h1>

            <p className="text-slate-400 text-sm">Laboratório de IA</p>
          </div>

          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
          >
            Sair
          </button>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Notícias Card */}
          <Link href="/admin/news" className="group">
            <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-8 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer h-full">
              <div className="text-5xl mb-4">📰</div>

              <h2 className="text-2xl font-bold text-purple-400 mb-3 group-hover:text-purple-300">
                Gerenciar Notícias
              </h2>

              <p className="text-slate-300 mb-4">
                Adicione, edite ou delete notícias do laboratório.
              </p>

              <div className="flex items-center text-purple-400 font-medium group-hover:translate-x-2 transition-transform">
                Acessar <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Códigos Card */}
          <Link href="/admin/codes" className="group">
            <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-8 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer h-full">
              <div className="text-5xl mb-4">💾</div>

              <h2 className="text-2xl font-bold text-purple-400 mb-3 group-hover:text-purple-300">
                Gerenciar Códigos
              </h2>

              <p className="text-slate-300 mb-4">
                Adicione, edite ou delete códigos para download.
              </p>

              <div className="flex items-center text-purple-400 font-medium group-hover:translate-x-2 transition-transform">
                Acessar <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Projetos Card */}
          <Link href="/admin/projects" className="group">
            <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-8 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer h-full">
              <div className="text-5xl mb-4">🚀</div>

              <h2 className="text-2xl font-bold text-purple-400 mb-3 group-hover:text-purple-300">
                Gerenciar Projetos
              </h2>

              <p className="text-slate-300 mb-4">
                Adicione, edite ou delete projetos para iniciantes.
              </p>

              <div className="flex items-center text-purple-400 font-medium group-hover:translate-x-2 transition-transform">
                Acessar <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Comunidade Card */}
          <Link href="/admin/community" className="group">
            <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-8 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer h-full">
              <div className="text-5xl mb-4">💬</div>

              <h2 className="text-2xl font-bold text-purple-400 mb-3 group-hover:text-purple-300">
                Gerenciar Comunidade
              </h2>

              <p className="text-slate-300 mb-4">
                Aprove, oculte ou exclua publicações e respostas dos visitantes.
              </p>

              <div className="flex items-center text-purple-400 font-medium group-hover:translate-x-2 transition-transform">
                Acessar <span className="ml-2">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            ℹ️ Informações
          </h2>

          <ul className="space-y-2 text-slate-300">
            <li>✅ Todas as alterações são salvas em tempo real</li>
            <li>✅ Os dados aparecem imediatamente no site público</li>
            <li>✅ Você pode adicionar, editar e deletar conteúdo</li>
            <li>✅ Não é necessário recompilar o site</li>
            <li>✅ Publicações da comunidade só aparecem após aprovação</li>
          </ul>
        </div>
      </section>
    </div>
  );
}