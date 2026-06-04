import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-6">
          Laboratório de IA
        </h1>

        <p className="text-xl mb-10">
          Aprenda Inteligência Artificial, Programação e conheça
          aplicativos desenvolvidos durante essa jornada.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">
              Inteligência Artificial
            </h2>
            <p>
              Tutoriais, ferramentas, agentes de IA e aplicações práticas.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">
              Programação
            </h2>
            <p>
              Conteúdo para iniciantes em desenvolvimento de software.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">
              Aplicativos
            </h2>
            <p>
              Projetos, downloads e ferramentas criadas no laboratório.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}