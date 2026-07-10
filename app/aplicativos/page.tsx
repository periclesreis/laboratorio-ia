'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

const janelaMensagem =
  "absolute left-1/2 top-[58%] z-40 w-[min(92vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 p-5 text-sm shadow-2xl backdrop-blur-md";

const botaoFecharMensagem =
  "absolute right-3 top-2 text-2xl font-black transition hover:text-white";

// Coloque a versão compilada do projeto D:\DEV\aves-web em:
 // D:\DEV\site\public\controle-aves-web\
 // Assim, o arquivo final ficará em:
 // D:\DEV\site\public\controle-aves-web\index.html
const CONTROLE_AVES_WEB_URL = "/controle-aves-web/index.html";

export default function AplicativosPage() {
  const router = useRouter();
  const [noticeApp, setNoticeApp] = useState<string | null>(null);
  const [webNoticeApp, setWebNoticeApp] = useState<string | null>(null);
  const [windowsNoticeApp, setWindowsNoticeApp] = useState<string | null>(null);
  const [controleAvesWebNoticeApp, setControleAvesWebNoticeApp] =
    useState<string | null>(null);

  function abrirVersaoWeb() {
    setWebNoticeApp(null);
    setWindowsNoticeApp(null);
    setControleAvesWebNoticeApp(null);
    router.push("/links-notas");
  }

  function abrirControleAvesWeb() {
    setControleAvesWebNoticeApp(null);
    setNoticeApp(null);
    setWebNoticeApp(null);
    setWindowsNoticeApp(null);
    window.location.assign(CONTROLE_AVES_WEB_URL);
  }

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
              className="relative flex h-full w-full max-w-[330px] flex-col overflow-visible rounded-2xl border-2 border-purple-500/70 bg-slate-900/80 p-6 shadow-lg shadow-purple-500/10 transition-all duration-300"
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
                  onClick={() => {
                    setWebNoticeApp(null);
                    setWindowsNoticeApp(null);
                    setControleAvesWebNoticeApp(null);
                    setNoticeApp(app.slug);
                  }}
                  className={`${botaoCard} border-2 border-green-500 bg-green-600 text-white hover:bg-green-500`}
                >
                  ▶️ Download na Play Store
                </button>

                {app.slug === "cronometro-flutuante" && (
                  <button
                    type="button"
                    onClick={() => {
                      setNoticeApp(null);
                      setWebNoticeApp(null);
                      setControleAvesWebNoticeApp(null);
                      setWindowsNoticeApp(app.slug);
                    }}
                    className={`${botaoCard} border-2 border-sky-500 bg-sky-600 text-white hover:bg-sky-500`}
                  >
                    💻 Baixar versão Windows
                  </button>
                )}

                {app.slug === "links-uteis" && (
                  <button
                    type="button"
                    onClick={() => {
                      setNoticeApp(null);
                      setWindowsNoticeApp(null);
                      setControleAvesWebNoticeApp(null);
                      setWebNoticeApp(app.slug);
                    }}
                    className={`${botaoCard} border-2 border-sky-500 bg-sky-600 text-white hover:bg-sky-500`}
                  >
                    🌐 Usar Versão Web
                  </button>
                )}

                {app.slug === "controle-genealogico-aves" && (
                  <button
                    type="button"
                    onClick={() => {
                      setNoticeApp(null);
                      setWebNoticeApp(null);
                      setWindowsNoticeApp(null);
                      setControleAvesWebNoticeApp(app.slug);
                    }}
                    className={`${botaoCard} border-2 border-sky-500 bg-sky-600 text-white hover:bg-sky-500`}
                  >
                    🌐 USAR VERSÃO WEB
                  </button>
                )}

                {controleAvesWebNoticeApp === app.slug && (
                  <div className={`${janelaMensagem} border-sky-300 bg-slate-950/95 text-center text-slate-50 shadow-sky-950/80`}>
                    <button
                      type="button"
                      onClick={() => setControleAvesWebNoticeApp(null)}
                      className={`${botaoFecharMensagem} text-sky-200`}
                      aria-label="Fechar aviso da versão web do Controle Genealógico de Aves"
                    >
                      ×
                    </button>

                    <h3 className="mb-4 pr-8 text-xl font-black text-sky-100">
                      Aviso importante da versão Web
                    </h3>

                    <p className="mx-auto mb-4 max-w-[520px] text-base leading-relaxed text-slate-100">
                      Cadastros e alterações feitos na versão Web ficam salvos neste navegador e não aparecem automaticamente no aplicativo mobile.
                    </p>

                    <p className="mx-auto mb-6 max-w-[520px] text-base leading-relaxed text-slate-100">
                      Para visualizar no mobile ou em outro dispositivo, envie ao Cadastro Nacional online ou gere/restaure um backup compatível em <strong>Configurações &gt; Backup dos dados locais</strong>.
                    </p>

                    <button
                      type="button"
                      onClick={abrirControleAvesWeb}
                      className="mx-auto inline-flex min-w-[180px] items-center justify-center rounded-lg bg-sky-600 px-8 py-3 text-sm font-black text-white transition hover:bg-sky-500"
                    >
                      OK
                    </button>
                  </div>
                )}

                {noticeApp === app.slug && (
                  <div className={`${janelaMensagem} border-red-400 bg-red-950/95 text-red-50 shadow-red-950/80`}>
                    <button
                      type="button"
                      onClick={() => setNoticeApp(null)}
                      className={`${botaoFecharMensagem} text-red-200`}
                      aria-label="Fechar aviso"
                    >
                      ×
                    </button>

                    <h3 className="mb-2 pr-8 text-base font-black text-red-100">
                      Download na Play Store
                    </h3>

                    <p className="mb-4 pr-8 leading-relaxed">
                      Por enquanto, este aplicativo está disponível apenas para
                      testadores. Envie seu e-mail pelo formulário de contato e
                      teremos o maior prazer em inscrever você no nosso seleto
                      grupo de testadores.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/contato"
                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-500"
                      >
                        Enviar e-mail
                      </Link>

                      <button
                        type="button"
                        onClick={() => setNoticeApp(null)}
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-green-400/70 px-4 py-2 text-sm font-bold text-green-100 transition hover:bg-green-900/60"
                      >
                        OK, entendi
                      </button>
                    </div>
                  </div>
                )}

                {windowsNoticeApp === app.slug && (
                  <div className={`${janelaMensagem} border-sky-300 bg-slate-950/95 text-slate-50 shadow-sky-950/80`}>
                    <button
                      type="button"
                      onClick={() => setWindowsNoticeApp(null)}
                      className={`${botaoFecharMensagem} text-sky-200`}
                      aria-label="Fechar aviso da versão Windows"
                    >
                      ×
                    </button>

                    <h3 className="mb-2 pr-8 text-lg font-black text-sky-100">
                      Baixar versão Windows
                    </h3>

                    <p className="mb-4 leading-relaxed">
                      Escolha a versão compatível com o seu computador:
                    </p>

                    <div className="mb-4 rounded-xl border border-yellow-400/70 bg-yellow-950/40 p-4 text-yellow-50">
                      <h4 className="mb-2 text-sm font-black text-yellow-200">
                        ⚠️ Aviso de instalação no Windows
                      </h4>

                      <p className="mb-3 leading-relaxed">
                        Como o Cronômetro Flutuante é um aplicativo novo e independente,
                        o Windows pode exibir a mensagem <strong>“O Windows protegeu o computador”</strong>.
                      </p>

                      <p className="mb-2 font-bold">Para instalar:</p>

                      <ol className="mb-3 list-decimal space-y-1 pl-5">
                        <li>Clique em <strong>“Mais informações”</strong>.</li>
                        <li>Clique em <strong>“Executar assim mesmo”</strong>.</li>
                      </ol>

                      <p className="text-sm leading-relaxed text-yellow-100/90">
                        O aplicativo não coleta dados pessoais, não possui anúncios e funciona localmente no computador.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <a
                        href="/downloads/Cronometro-Flutuante-Setup-x64.exe"
                        download
                        className="inline-flex w-full items-center justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-bold text-white transition hover:bg-sky-500"
                      >
                        💻 Baixar versão 64 bits
                      </a>

                      <a
                        href="/downloads/Cronometro-Flutuante-Setup-x86.exe"
                        download
                        className="inline-flex w-full items-center justify-center rounded-md border border-sky-400/70 bg-slate-900 px-3 py-2 text-sm font-bold text-sky-100 transition hover:bg-sky-950"
                      >
                        💻 Baixar versão 32 bits
                      </a>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-slate-400">
                      Na maioria dos computadores atuais, a versão recomendada é a de 64 bits.
                    </p>
                  </div>
                )}

                {webNoticeApp === app.slug && (
                  <div className={`${janelaMensagem} border-sky-300 bg-slate-950/95 text-slate-50 shadow-sky-950/80`}>
                    <button
                      type="button"
                      onClick={() => setWebNoticeApp(null)}
                      className={`${botaoFecharMensagem} text-sky-200`}
                      aria-label="Fechar aviso da versão web"
                    >
                      ×
                    </button>

                    <h3 className="mb-2 pr-8 text-lg font-black text-sky-100">
                      Atenção sobre a Versão Web
                    </h3>

                    <p className="mb-3 leading-relaxed">
                      Os dados salvos nesta versão ficam gravados localmente neste navegador e neste dispositivo.
                      Eles não migram automaticamente para o aplicativo mobile.
                    </p>

                    <p className="mb-3 leading-relaxed">
                      Para levar seus links, pastas e anotações para outro navegador, computador ou para a versão
                      mobile, use a opção <strong>Backup</strong> dentro do aplicativo web e depois restaure o arquivo
                      <strong> .lu</strong> no destino.
                    </p>

                    <p className="mb-4 leading-relaxed text-slate-300">
                      Se você limpar os dados do navegador, trocar de aparelho ou usar uma aba anônima, os dados locais
                      podem não estar disponíveis. Faça backup periodicamente.
                    </p>

                    <button
                      type="button"
                      onClick={abrirVersaoWeb}
                      className="inline-flex w-full items-center justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-bold text-white transition hover:bg-sky-500"
                    >
                      OK, abrir Versão Web
                    </button>
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
