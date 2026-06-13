import Link from "next/link";

export default function ProgramacaoPage() {
  const topics = [
    {
      titulo: "Algoritmos e Lógica de Programação",
      descricao:
        "Aprenda a pensar como um programador e resolver problemas usando lógica e algoritmos.",
      icone: "🧠",
      href: "/programacao/algoritmos-logica",
    },
    {
      titulo: "Git & GitHub",
      descricao:
        "Controle versões dos seus projetos e trabalhe em equipe usando Git e GitHub.",
      icone: "🔧",
      href: "/programacao/git-github",
    },
    {
      titulo: "JavaScript & TypeScript",
      descricao:
        "Fundamentos e avançado em JavaScript, TypeScript e desenvolvimento moderno.",
      icone: "⚡",
      href: "/programacao/javascript-typescript",
    },
    {
      titulo: "React & Next.js",
      descricao:
        "Crie interfaces dinâmicas e aplicações web com React e Next.js.",
      icone: "⚛️",
      href: "/programacao/react-nextjs",
    },
    {
      titulo: "Banco de Dados",
      descricao: "SQL, NoSQL e como estruturar dados para suas aplicações.",
      icone: "🗄️",
      href: "/programacao/banco-dados",
    },
    {
      titulo: "APIs & Backend",
      descricao:
        "Crie APIs robustas e servidores backend com diferentes tecnologias.",
      icone: "🔌",
      href: "/programacao/apis-backend",
    },
    {
      titulo: "Python",
      descricao: "Aprenda Python para web, data science, automação e muito mais.",
      icone: "🐍",
      href: "/programacao/python",
    },
    {
      titulo: "DevOps & Deploy",
      descricao:
        "Implante suas aplicações na nuvem e configure ambientes de produção.",
      icone: "🚀",
      href: "/programacao/devops-deploy",
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
            Programação
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Aprenda programação na prática, do zero, desde os fundamentos até a
            criação de aplicações modernas, usando as tecnologias mais
            utilizadas do mercado.
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