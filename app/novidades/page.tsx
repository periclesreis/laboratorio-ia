import Link from "next/link";

export default function NovidadesPage() {
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
            Novidades
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Acompanhe os próximos projetos, aplicativos, tutoriais e novidades
            do Laboratório de IA.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800 border-2 border-purple-500 rounded-lg overflow-hidden shadow-lg shadow-purple-500/20">
            <div className="h-44 bg-gradient-to-br from-purple-700/40 via-slate-800 to-pink-700/30 flex items-center justify-center">
              <span className="text-6xl">🚀</span>
            </div>

            <div className="p-5">
              <h2 className="text-2xl font-bold text-purple-400 mb-3">
                Novidades
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Novos projetos estão sendo preparados para ampliar os conteúdos,
                aplicativos e experiências disponíveis no laboratório.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-lg text-slate-300 leading-relaxed">
          Aguardem este e outros projetos, tutoriais, aplicativos e muitas
          outras novidades!
        </p>
      </section>
    </div>
  );
}