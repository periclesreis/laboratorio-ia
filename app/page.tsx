import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>

              <span className="text-sm font-medium text-slate-300">
                Bem-vindo ao Laboratório de IA
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Aprenda{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
                IA, Programação
              </span>{" "}
              e crie <span className="text-white">Aplicativos</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tutoriais práticos, projetos reais e experiências com Inteligência
              Artificial para acelerar seu desenvolvimento.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de Conhecimento */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Áreas de Conhecimento
            </h2>

            <p className="text-slate-400 text-lg">
              Explore os principais tópicos do laboratório
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* IA Card */}
            <Link href="/ia" className="group card-hover card-ia">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors mb-4">
                <span className="text-2xl">🧠</span>
              </div>

              <h3 className="text-xl font-bold mb-2">
                Inteligência Artificial
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Prompts, agentes, automações e ferramentas modernas de IA para
                resolver problemas reais.
              </p>

              <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Saiba mais <span className="ml-2">→</span>
              </div>
            </Link>

            {/* Programação Card */}
            <Link href="/programacao" className="group card-hover card-dev">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors mb-4">
                <span className="text-2xl">💻</span>
              </div>

              <h3 className="text-xl font-bold mb-2">Programação</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                React, Next.js, JavaScript, Python e projetos práticos para
                iniciantes e avançados.
              </p>

              <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Saiba mais <span className="ml-2">→</span>
              </div>
            </Link>

            {/* Aplicativos Card */}
            <Link href="/aplicativos" className="group card-hover card-apps">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors mb-4">
                <span className="text-2xl">📱</span>
              </div>

              <h3 className="text-xl font-bold mb-2">Aplicativos</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Conheça e baixe aplicativos desenvolvidos no laboratório com
                tecnologias modernas.
              </p>

              <div className="mt-4 flex items-center text-emerald-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Saiba mais <span className="ml-2">→</span>
              </div>
            </Link>

            {/* Projetos & Códigos Card */}
            <Link
              href="/projetos-codigos"
              className="group card-hover card-projects"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-pink-500/20 group-hover:bg-pink-500/30 transition-colors mb-4">
                <span className="text-2xl">🚀</span>
              </div>

              <h3 className="text-xl font-bold mb-2">Projetos & Códigos</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Aprenda fazendo projetos reais com passo a passo completo para
                iniciantes.
              </p>

              <div className="mt-4 flex items-center text-pink-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Saiba mais <span className="ml-2">→</span>
              </div>
            </Link>
          </div>

          {/* Cards adicionais */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {/* Comunidade Card */}
            <Link href="/comunidade" className="group card-hover card-ia">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors mb-4">
                <span className="text-2xl">💬</span>
              </div>

              <h3 className="text-xl font-bold mb-2">Comunidade</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Compartilhe dúvidas, ideias, sugestões e experiências com
                outros visitantes do laboratório.
              </p>

              <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Participar <span className="ml-2">→</span>
              </div>
            </Link>

            {/* Notícias Card */}
            <Link href="/noticias" className="group card-hover card-dev">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors mb-4">
                <span className="text-2xl">📰</span>
              </div>

              <h3 className="text-xl font-bold mb-2">Notícias</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Acompanhe novidades, atualizações, artigos e conteúdos sobre IA,
                programação e tecnologia.
              </p>

              <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Ler notícias <span className="ml-2">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Notícias CTA */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notícias do Laboratório
            </h2>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Artigos, tutoriais, experiências práticas e estudos sobre
              Inteligência Artificial, Programação e Desenvolvimento de
              Aplicativos.
            </p>

            <Link
              href="/noticias"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              Acessar Notícias
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}