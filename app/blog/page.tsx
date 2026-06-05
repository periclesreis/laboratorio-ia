import Link from "next/link";

const posts = [
  {
    slug: "introducao-ia",
    titulo: "Introdução à Inteligência Artificial",
    resumo: "Entenda os conceitos básicos de IA de forma simples e prática.",
    tag: "ia",
    data: "15 de maio de 2024",
  },
  {
    slug: "como-programar-react",
    titulo: "Como começar no React",
    resumo: "Guia prático e completo para iniciantes em React e Next.js.",
    tag: "dev",
    data: "10 de maio de 2024",
  },
  {
    slug: "ia-no-dia-a-dia",
    titulo: "IA no dia a dia",
    resumo: "Como usamos Inteligência Artificial no cotidiano hoje.",
    tag: "ia",
    data: "5 de maio de 2024",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog do Laboratório</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Artigos, tutoriais e conteúdos sobre Inteligência Artificial, Programação e Desenvolvimento de Aplicativos.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block card-hover transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Tag */}
                      <div className="mb-3">
                        <span className={`tag tag-${post.tag}`}>
                          {post.tag === "ia" ? "Inteligência Artificial" : "Programação"}
                        </span>
                      </div>

                      {/* Título */}
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                        {post.titulo}
                      </h2>

                      {/* Resumo */}
                      <p className="text-slate-400 leading-relaxed mb-3">
                        {post.resumo}
                      </p>

                      {/* Data */}
                      <p className="text-sm text-slate-500">
                        {post.data}
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

            {/* Empty State Message */}
            <div className="mt-12 pt-12 border-t border-white/10 text-center">
              <p className="text-slate-400 mb-4">
                Mais artigos em breve! Fique atento para novas publicações.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                ← Voltar para Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
