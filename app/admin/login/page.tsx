// app/admin/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Importante: incluir cookies
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erro ao fazer login');
        setLoading(false);
        return;
      }

      // Redirecionar após sucesso
      router.push('/admin/dashboard');
    } catch (err) {
      console.error('Erro:', err);
      setError('Erro ao conectar ao servidor');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Painel Admin
            </h1>
            <p className="text-slate-400">Laboratório de IA</p>
          </div>

          {error && (
            <div className="bg-red-500/20 border-2 border-red-500 text-red-300 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-400"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-400"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:opacity-50 text-white font-bold rounded-lg transition border-2 border-purple-500"
            >
              {loading ? 'Conectando...' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-purple-400 hover:text-purple-300 transition">
              ← Voltar ao site
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}