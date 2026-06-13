import Link from "next/link";

export default function IAPage() {
  const topics = [
    {
      titulo: "Prompts Efetivos",
      descricao:
        "Aprenda a criar prompts que geram resultados precisos e úteis com modelos de IA.",
      icone: "💬",
      href: "/ia/prompts-efetivos",
    },
    {
      titulo: "Agentes de IA",
      descricao:
        "Entenda como funcionam agentes autônomos e como usá-los para automatizar tarefas.",
      icone: "🤖",
      href: "/ia/agentes-ia",
    },
    {
      titulo: "Automações",
      descricao:
        "Crie fluxos de trabalho automatizados usando IA para aumentar sua produtividade.",
      icone: "⚙️",
      href: "/ia/automacoes",
    },
    {
      titulo: "Ferramentas Modernas",
      descricao:
        "Conheça as principais ferramentas e plataformas de IA disponíveis no mercado.",
      icone: "🛠️",
      href: "/ia/ferramentas-modernas",
    },
    {
      titulo: "Visão Computacional",
      descricao:
        "Explore técnicas de processamento de imagens e reconhecimento visual com IA.",
      icone: "👁️",
      href: "/ia/visao-computacional",
    },
    {
      titulo: "Processamento de Linguagem",
      descricao:
        "Aprenda sobre NLP e como máquinas entendem e processam texto natural.",
      icone: "📝",
      href: "/ia/processamento-linguagem",
    },
  ];

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

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-[1.15] pb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Inteligência Artificial 
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Aprenda os conceitos fundamentais e práticos de IA, desde prompts
            até automações inteligentes.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <Link
              href={topic.href}
              key={index}
              className="group bg-slate-800 border-2 border-purple-500 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-4xl">{topic.icone}</div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                    {topic.titulo}
                  </h2>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {topic.descricao}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}