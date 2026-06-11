// app/compartilhe-seu-projeto/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CompartilheSeuProjetoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileAlert, setFileAlert] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess('');
    setError('');
    setFileAlert('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const arquivo = formData.get('arquivo') as File | null;

    if (!arquivo || arquivo.size === 0) {
      setFileAlert('Selecione um arquivo para enviar.');
      setLoading(false);
      return;
    }

    if (arquivo.size > 10 * 1024 * 1024) {
      setFileAlert('O arquivo é muito grande. Envie um arquivo de até 10 MB.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/compartilhe-projeto', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Erro ao enviar projeto.');
        return;
      }

      setSuccess('Projeto enviado com sucesso!');
      setFileName('');
      form.reset();
    } catch (err) {
      console.error(err);
      setError('Erro ao conectar ao servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projetos-codigos"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.2] pb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Compartilhe seu Projeto
          </h1>

          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Envie aplicativos, códigos fonte, scripts, plugins e projetos para avaliação.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6">
          {success && (
            <div className="mb-4 bg-green-500/20 border-2 border-green-500 text-green-300 px-4 py-3 rounded-lg">
              {success}
            </div>
          )}

          {error && (
            <div className="mb-4 bg-red-500/20 border-2 border-red-500 text-red-300 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Seu nome *
              </label>

              <input
                type="text"
                name="nome"
                required
                className="w-full px-3 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Seu email
              </label>

              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                placeholder="email@exemplo.com"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Nome do projeto *
              </label>

              <input
                type="text"
                name="nomeProjeto"
                required
                className="w-full px-3 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                placeholder="Ex: Meu App de Tarefas"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Linguagem / tecnologia *
              </label>

              <input
                type="text"
                name="linguagem"
                required
                className="w-full px-3 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none"
                placeholder="Ex: JavaScript, Python, React, Android"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Descrição *
              </label>

              <textarea
                name="descricao"
                required
                className="w-full px-3 py-2 bg-slate-700 border-2 border-purple-500 rounded-lg text-white focus:outline-none h-28 leading-tight"
                placeholder="Descreva o que o projeto faz"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Arquivo do projeto *
              </label>

              <label className="block w-full px-3 py-3 bg-slate-700 border-2 border-purple-500 rounded-lg text-slate-300 cursor-pointer hover:bg-slate-600 transition">
                <span>
                  {fileName || 'Clique aqui para fazer o upload do arquivo/projeto'}
                </span>

                <input
                  type="file"
                  name="arquivo"
                  required
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (!file) {
                      setFileName('');
                      return;
                    }

                    if (file.size > 10 * 1024 * 1024) {
                      e.target.value = '';
                      setFileName('');
                      setFileAlert(
                        'O arquivo é muito grande. Envie um arquivo de até 10 MB.'
                      );
                      return;
                    }

                    setFileAlert('');
                    setFileName(file.name);
                  }}
                />
              </label>

              <div className="text-slate-400 text-xs mt-2 leading-relaxed">
                <p>
                  Envie ZIP, APK, TXT, JS, PY, HTML, CSS ou outro arquivo do projeto.
                </p>

                <p>
                  Limite de 10 MB por arquivo.
                </p>

                <p>
                  Para projetos maiores, envie um link do Google Drive, GitHub ou OneDrive,
                  em vez de anexar o arquivo direto.
                </p>
              </div>
            </div>

            {fileAlert && (
              <div className="mb-3 bg-red-500/20 border-2 border-red-500 text-red-300 px-4 py-3 rounded-lg text-center">
                <p className="font-semibold mb-3">
                  {fileAlert}
                </p>

                <button
                  type="button"
                  onClick={() => setFileAlert('')}
                  className="px-4 py-1.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg border border-red-400 transition"
                >
                  OK
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:opacity-50 text-white font-bold rounded-lg border-2 border-purple-500 transition"
            >
              {loading ? 'Enviando...' : 'Enviar Projeto'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}