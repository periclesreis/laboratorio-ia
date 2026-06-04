import Link from "next/link";

export default function Home() {
  return (
    <div>

      <section className="bg-gradient-to-br from-blue-50 via-white to-violet-50">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">

          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            Inteligência Artificial • Programação • Aplicativos
          </div>

          <h1 className="text-6xl font-bold text-slate-900 mb-6">
            Aprenda IA e Programação
            <span className="block text-blue-600">
              do jeito prático
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Tutoriais, aplicativos, projetos e experiências reais
            usando Inteligência Artificial para acelerar o desenvolvimento.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              href="/ia"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Explorar IA
            </Link>

            <Link
              href="/programacao"
              className="border border-slate-300 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition"
            >
              Aprender Programação
            </Link>

          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Áreas de Conhecimento
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Link
            href="/ia"
            className="p-8 rounded-2xl border hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              Inteligência Artificial
            </h3>

            <p>
              Prompts, agentes, automações e ferramentas modernas.
            </p>
          </Link>

          <Link
            href="/programacao"
            className="p-8 rounded-2xl border hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              Programação
            </h3>

            <p>
              React Native, Web, JavaScript, Python e projetos.
            </p>
          </Link>

          <Link
            href="/aplicativos"
            className="p-8 rounded-2xl border hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              Aplicativos
            </h3>

            <p>
              Conheça e baixe aplicativos desenvolvidos no laboratório.
            </p>
          </Link>

        </div>
      </section>

      <section className="bg-slate-50">

        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Projetos em Destaque
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-bold text-xl mb-3">
                Cronômetro Flutuante
              </h3>

              <p>
                Ferramenta criada para auxiliar apresentações,
                discursos e treinamentos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-bold text-xl mb-3">
                Links Úteis
              </h3>

              <p>
                Organizador inteligente de links e categorias.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border">
              <h3 className="font-bold text-xl mb-3">
                Próximos Projetos
              </h3>

              <p>
                Novos aplicativos e experiências utilizando IA.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}