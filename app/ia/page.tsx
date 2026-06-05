import Link from "next/link";

export default function IAPage() {
  const topics = [
    {
      titulo: "Prompts Efetivos",
      descricao: "Aprenda a criar prompts que geram resultados precisos e úteis com modelos de IA.",
      icone: "💬",
      href: "/ia/prompts-efetivos",
    },
    {
      titulo: "Agentes de IA",
      descricao: "Entenda como funcionam agentes autônomos e como usá-los para automatizar tarefas.",
      icone: "🤖",
      href: "/ia/agentes-ia",
    },
    {
      titulo: "Automações",
      descricao: "Crie fluxos de trabalho automatizados usando IA para aumentar sua produtividade.",
      icone: "⚙️",
      href: "/ia/automacoes",
    },
    {
      titulo: "Ferramentas Modernas",
      descricao: "Conheça as principais ferramentas e plataformas de IA disponíveis no mercado.",
      icone: "🛠️",
      href: "/ia/ferramentas-modernas",
    },
    {
      titulo: "Visão Computacional",
      descricao: "Explore técnicas de processamento de imagens e reconhecimento visual com IA.",
      icone: "👁️",
      href: "/ia/visao-computacional",
    },
    {
      titulo: "Processamento de Linguagem",
      descricao: "Aprenda sobre NLP e como máquinas entendem e processam texto natural.",
      icone: "📝",
      href: "/ia/processamento-linguagem",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Inteligência <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Artificial</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Aprenda os conceitos fundamentais e práticos de IA, desde prompts até automações inteligentes.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {topics.map((topic, index) => (
                <Link href={topic.href} key={index} className="group card-hover card-ia">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-4xl">{topic.icone}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">
                        {topic.titulo}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {topic.descricao}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card-hover card-ia text-center">
              <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Explore nossos artigos e tutoriais sobre Inteligência Artificial no blog do laboratório.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
                >
                  Acessar Blog
                </Link>
                <Link
                  href="/aplicativos"
                  className="inline-flex items-center justify-center rounded-lg border border-purple-500/50 bg-purple-500/10 px-6 py-2 font-semibold text-purple-300 transition-all hover:bg-purple-500/20"
                >
                  Ver Aplicativos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
