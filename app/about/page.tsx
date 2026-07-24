import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sobre",
  description:
    "Conheça o Laboratório de IA, um projeto dedicado ao aprendizado prático de Inteligência Artificial, Programação e Aplicativos.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-500/20 opacity-20 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-blue-500/20 opacity-20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/logomarca-laboratorio-ia.png"
                alt="Logomarca oficial do Laboratório de IA"
                width={170}
                height={170}
                priority
                className="h-[170px] w-[170px] rounded-[2rem] object-cover shadow-2xl shadow-purple-500/30 ring-2 ring-purple-400/40"
              />
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Sobre o{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Laboratório de IA
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Um espaço criado para ensinar, demonstrar e construir soluções com
              Inteligência Artificial, Programação e Aplicativos de forma
              prática, acessível e voltada para problemas reais.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="card-hover card-ia">
              <div className="mb-4 text-3xl">🧠</div>
              <h2 className="mb-3 text-xl font-bold text-white">Inteligência Artificial</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Conteúdos, exemplos e demonstrações para mostrar como a IA pode
                ajudar nos estudos, no trabalho, na criação de ideias e na
                solução de problemas.
              </p>
            </div>

            <div className="card-hover card-dev">
              <div className="mb-4 text-3xl">💻</div>
              <h2 className="mb-3 text-xl font-bold text-white">Programação</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Projetos práticos com tecnologias modernas, explicados de forma
                simples para quem quer aprender criando.
              </p>
            </div>

            <div className="card-hover card-apps">
              <div className="mb-4 text-3xl">📱</div>
              <h2 className="mb-3 text-xl font-bold text-white">Aplicativos</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Desenvolvimento de ferramentas, aplicativos e experiências
                digitais com foco em utilidade, educação e produtividade.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold text-white">Missão</h2>
            <p className="text-slate-400 leading-relaxed">
              Tornar o conhecimento sobre IA e tecnologia mais próximo das
              pessoas, especialmente estudantes, professores, criadores,
              empreendedores e todos que desejam se preparar para o futuro.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/ia"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
              >
                Explorar conteúdos de IA
              </Link>

              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-lg border border-purple-500/50 bg-purple-500/10 px-6 py-3 font-semibold text-purple-300 transition-all hover:bg-purple-500/20"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
