'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Aplicativo = {
  slug: string;
  nome: string;
  descricao: string;
  categoria: string;
  iconSrc: string;
  politicaHref: string;
  exclusaoHref?: string;
};

const aplicativos: Aplicativo[] = [
  {
    slug: "cronometro-flutuante",
    nome: "Cronômetro Flutuante",
    descricao:
      "Ferramenta criada para auxiliar apresentações, discursos e treinamentos com precisão e facilidade.",
    categoria: "dev",
    iconSrc: "/icones/cronometro.png",
    politicaHref: "/politicas/cronometro-flutuante",
  },
  {
    slug: "links-uteis",
    nome: "Links & Notas",
    descricao:
      "Aplicativo para organizar links, anotações e conteúdos importantes em um só lugar, com acesso rápido e prático.",
    categoria: "dev",
    iconSrc: "/icones/links-uteis.png",
    politicaHref: "/politicas/links-uteis",
  },
  {
    slug: "jogo-casamento",
    nome: "Jogo Casamento",
    descricao:
      "Jogo personalizado criado para celebrar momentos especiais de forma interativa e divertida.",
    categoria: "ia",
    iconSrc: "/icones/jogo-casamento.png",
    politicaHref: "/politicas/jogo-casamento",
  },
  {
    slug: "controle-genealogico-aves",
    nome: "Controle Genealógico de Aves",
    descricao:
      "Aplicativo para cadastro, consulta, organização e controle genealógico de aves, com registros locais e Cadastro Nacional online.",
    categoria: "dev",
    iconSrc: "/icones/controle-genealogico-aves.png",
    politicaHref: "/politicas/controle-genealogico-aves",
    exclusaoHref: "/exclusao-de-conta/controle-genealogico-aves",
  },
];

const botaoCard =
  "inline-flex w-[250px] max-w-full items-center justify-center rounded-lg px-3 py-2 text-center text-sm font-bold transition";

export default function AplicativosPage() {
  const [noticeApp, setNoticeApp] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-50">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar</span>
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-[1.15] pb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Aplicativos
            </h1>

            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              Baixe ferramentas, jogos e utilitários desenvolvidos para estudo,
              produtividade e projetos personalizados.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[720px] px-4 py-12">
        <div className="grid justify-items-center gap-6 md:grid-cols-2">
          {aplicativos.map((app) => (
            <div
              key={app.slug}
              className="relative flex h-full w-full max-w-[330px] flex-col rounded-2xl border-2 border-purple-500/70 bg-slate-900/80 p-6 shadow-lg shadow-purple-500/10 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={app.iconSrc}
                  alt={app.nome}
                  width={110}
                  height={110}
                  className="h-[110px] w-[110px] rounded-2xl object-cover"
                />
              </div>

              <h2 className="mb-3 text-center text-2xl font-bold text-purple-400">
                {app.nome}
              </h2>

              <p className="mb-6 text-center text-sm leading-relaxed text-slate-300">
                {app.descricao}
              </p>

              <div className="mt-auto flex flex-col items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setNoticeApp(app.slug)}
                  className={`${botaoCard} border-2 border-green-500 bg-green-600 text-white hover:bg-green-500`}
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

                <Link
                  href={app.politicaHref}
                  className={`${botaoCard} border-2 border-slate-500 bg-slate-800 text-slate-200 hover:border-purple-400 hover:text-purple-300`}
                >
                  🔒 Políticas de Privacidade
                </Link>

                {app.exclusaoHref && (
                  <Link
                    href={app.exclusaoHref}
                    className={`${botaoCard} border-2 border-red-500/70 bg-red-950/40 text-red-100 hover:bg-red-900/60 hover:text-white`}
                  >
                    🗑️ Exclusão de contas e dados
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
