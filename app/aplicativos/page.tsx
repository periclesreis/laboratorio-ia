import Link from "next/link";

const apps = [
  {
    slug: "cronometro-flutuante",
    nome: "Cronômetro Flutuante",
    descricao: "Ferramenta criada para auxiliar apresentações, discursos e treinamentos com precisão e facilidade.",
    categoria: "dev",
    icone: "⏱️",
  },
  {
    slug: "links-uteis",
    nome: "Links Úteis",
    descricao: "Organizador inteligente de links e categorias para manter seus recursos sempre organizados.",
    categoria: "dev",
    icone: "🔗",
  },
  {
    slug: "estudos-ia",
    nome: "Estudos IA",
    descricao: "Plataforma interativa para estudar conceitos de Inteligência Artificial com exercícios práticos.",
    categoria: "ia",
    icone: "🧠",
  },
];

export default function AplicativosPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aplicativos</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Conheça e explore os aplicativos desenvolvidos no Laboratório de IA.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {apps.map((app) => (
                <Link
                  key={app.slug}
                  href={`/aplicativos/${app.slug}`}
                  className={`group card-hover ${app.categoria === "ia" ? "card-ia" : "card-dev"} transition-all`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Ícone e Categoria */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{app.icone}</span>
                        <span className={`tag tag-${app.categoria}`}>
                          {app.categoria === "ia" ? "IA" : "Programação"}
                        </span>
                      </div>

                      {/* Nome */}
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                        {app.nome}
                      </h2>

                      {/* Descrição */}
                      <p className="text-slate-400 leading-relaxed">
                        {app.descricao}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <span className="text-slate-400 group-hover:text-white transition-colors">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="card-hover text-center">
                <h3 className="text-xl font-bold mb-2">Quer criar um aplicativo?</h3>
                <p className="text-slate-400 mb-4">
                  Aprenda a criar seus próprios aplicativos com IA e programação.
                </p>
                <Link
                  href="/programacao"
                  className="inline-flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Começar a aprender →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
