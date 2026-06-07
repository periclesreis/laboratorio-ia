import Link from "next/link";

export default function ProgramacaoPage() {
  const topics = [
    {
      titulo: "Algoritmos e Lógica de Programação",
      descricao: "Aprenda a pensar como um programador e resolver problemas usando lógica e algoritmos.",
      icone: "🧠",
      href: "/programacao/algoritmos-logica",
    },
    {
      titulo: "Git & GitHub",
      descricao: "Controle versões dos seus projetos e trabalhe em equipe usando Git e GitHub.",
      icone: "🔧",
      href: "/programacao/git-github",
    },
    {
      titulo: "JavaScript & TypeScript",
      descricao: "Fundamentos e avançado em JavaScript, TypeScript e desenvolvimento moderno.",
      icone: "⚡",
      href: "/programacao/javascript-typescript",
    },
    {
      titulo: "React & Next.js",
      descricao: "Crie interfaces dinâmicas e aplicações web com React e Next.js.",
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
      descricao: "Crie APIs robustas e servidores backend com diferentes tecnologias.",
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
      descricao: "Implante suas aplicações na nuvem e configure ambientes de produção.",
      icone: "🚀",
      href: "/programacao/devops-deploy",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Programação</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Aprenda programação na prática, do zero, desde os fundamentos até a criação de aplicações modernas, usando as tecnologias mais utilizadas do mercado
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
                <Link href={topic.href} key={index} className="group card-hover card-dev">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-4xl">{topic.icone}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-300 transition-colors">
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
            <div className="card-hover card-dev text-center">
              <h2 className="text-2xl font-bold mb-4">Comece a programar agora</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Acesse nossos tutoriais, projetos e recursos para aprender programação na prática.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
                >
                  Acessar Blog
                </Link>
                <Link
                  href="/aplicativos"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-500/50 bg-blue-500/10 px-6 py-2 font-semibold text-blue-300 transition-all hover:bg-blue-500/20"
                >
                  Ver Projetos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  