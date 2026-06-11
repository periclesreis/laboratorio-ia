// app/aplicativos/page.tsx
import Link from "next/link";

const aplicativos = [
  {
    slug: "cronometro-flutuante",
    nome: "Cronômetro Flutuante",
    descricao:
      "Ferramenta criada para auxiliar apresentações, discursos e treinamentos com precisão e facilidade.",
    categoria: "dev",
    icone: "⏱️",
    playStoreHref: "#",
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
    playStoreHref: "#",
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
    playStoreHref: "#",
    downloadHref: "/downloads/jogo-casamento.apk",
    politicaHref: "/politicas/jogo-casamento",
  },
];
export default function AplicativosPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 transition hover:text-purple-300"
          >
            <span>←</span>
            <span>Voltar</span>
          </Link>

          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              Aplicativos
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Apps criados para facilitar tarefas do dia a dia
            </h1>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Baixe ferramentas, jogos e utilitários desenvolvidos para estudo,
              produtividade e projetos personalizados.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {aplicativos.map((app) => (
            <div
              key={app.slug}
              className={`rounded-2xl border-2 bg-slate-900/80 p-6 shadow-lg transition-all duration-300 ${
                app.categoria === "ia"
                  ? "border-pink-500/70 shadow-pink-500/10"
                  : "border-purple-500/70 shadow-purple-500/10"
              }`}
            >
              <div className="mb-4 text-5xl">{app.icone}</div>

              <h2 className="mb-3 text-2xl font-bold text-purple-400">
                {app.nome}
              </h2>

              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                {app.descricao}
              </p>

              <div className="mt-auto flex flex-col gap-3">
  <a
    href={app.playStoreHref}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-lg border-2 border-green-500 bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-500"
  >
    ▶️ Download na Play Store
  </a>

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