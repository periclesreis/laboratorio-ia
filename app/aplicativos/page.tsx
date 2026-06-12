// app/aplicativos/page.tsx
'use client';

import Link from "next/link";
import { useState } from "react";

const aplicativos = [
  {
    slug: "cronometro-flutuante",
    nome: "Cronômetro Flutuante",
    descricao:
      "Ferramenta criada para auxiliar apresentações, discursos e treinamentos com precisão e facilidade.",
    categoria: "dev",
    icone: "⏱️",
    downloadHref: "/downloads/cronometro-flutuante.apk",
    politicaHref: "/politicas/cronometro-flutuante",
  },
  {
    slug: "links-uteis",
    nome: "Links Úteis",
    descricao:
      "Aplicativo para organizar links importantes em um só lugar, com acesso rápido e prático.",
    categoria: "dev",
    icone: "🔗",
    downloadHref: "/downloads/links-uteis.apk",
    politicaHref: "/politicas/links-uteis",
  },
  {
    slug: "jogo-casamento",
    nome: "Jogo Casamento",
    descricao:
      "Jogo personalizado criado para celebrar momentos especiais de forma interativa e divertida.",
    categoria: "ia",
    icone: "💍",
    downloadHref: "/downloads/jogo-casamento.apk",
    politicaHref: "/politicas/jogo-casamento",
  },
];

export default function AplicativosPage() {
  const [noticeApp, setNoticeApp] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Hero */}
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
            Aplicativos
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Baixe ferramentas, jogos e utilitários desenvolvidos para estudo,
            produtividade e projetos personalizados.
          </p>
        </div>
      </section>

      {/* Cards */}
      <main className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {aplicativos.map((app) => (
            <div
              key={app.slug}
              className="relative flex h-full flex-col rounded-lg border-2 border-purple-500 bg-slate-800 p-6 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:shadow-purple-500/40"
            >
              <div className="mb-4 text-5xl">{app.icone}</div>

              <h2 className="mb-3 text-2xl font-bold text-purple-400">
                {app.nome}
              </h2>

              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                {app.descricao}
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setNoticeApp(app.slug)}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-green-500 bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-500"
                >
                  ▶️ Download na Play Store
                </button>

                {noticeApp === app.slug && (
                  <div className="absolute left-4 right-4 top-4 z-20 rounded-lg border-2 border-red-500 bg-red-950/95 p-3 text-sm text-red-100 shadow-2xl shadow-red-950/60">
                    <button
                      type="button"
                      onClick={() => setNoticeApp(null)}
                      className="absolute right-2 top-1 text-lg font-bold text-red-200 transition hover:text-white"
                      aria-label="Fechar aviso"
                    >
                      ×
                    </button>

                    <p className="mb-3 pr-6 leading-relaxed">
                      Por enquanto, este aplicativo está disponível apenas para
                      testadores. Envie seu e-mail pelo formulário de contato e
                      teremos o maior prazer em inscrever você no nosso seleto
                      grupo de testadores.
                    </p>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Link
                        href="/contato"
                        className="inline-flex items-center justify-center rounded-md bg-green-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-green-500"
                      >
                        Enviar e-mail
                      </Link>

                      <button
                        type="button"
                        onClick={() => setNoticeApp(null)}
                        className="inline-flex items-center justify-center rounded-md border border-green-400/60 px-3 py-1.5 text-xs font-bold text-green-100 transition hover:bg-green-900/60"
                      >
                        OK, entendi
                      </button>
                    </div>
                  </div>
                )}

                <a
                  href={app.downloadHref}
                  download
                  className="inline-flex items-center justify-center rounded-lg border-2 border-purple-500 bg-purple-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-purple-500"
                >
                  ⬇️ Download do APK
                </a>

                <Link
                  href={app.politicaHref}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-slate-500 bg-slate-800 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-300"
                >
                  🔒 Políticas de Privacidade
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}