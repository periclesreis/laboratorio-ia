import Link from "next/link";

export default function AboutPage() {
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

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Sobre o Laboratório de IA
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Conheça a missão e os objetivos do nosso projeto educacional.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Missão */}
          <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Nossa Missão
            </h2>

            <p className="text-slate-300 leading-relaxed">
              O Laboratório de IA é um espaço dedicado ao aprendizado prático e
              acessível de Inteligência Artificial, Programação e
              Desenvolvimento de Aplicativos. Acreditamos que a tecnologia deve
              ser democratizada e que qualquer pessoa, independentemente de seu
              nível de experiência, pode aprender a criar soluções inovadoras.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Nossa Visão
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Queremos ser uma referência em educação tecnológica, oferecendo
              conteúdo de qualidade, ferramentas práticas e uma comunidade
              engajada. Nosso objetivo é capacitar pessoas a entender e utilizar
              IA no dia a dia, criando aplicativos e soluções que resolvem
              problemas reais.
            </p>
          </div>

          {/* Valores */}
          <div>
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              Nossos Valores
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-5 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
                <h3 className="font-bold text-purple-300 mb-2">
                  Acessibilidade
                </h3>

                <p className="text-slate-300 text-sm">
                  Conteúdo gratuito e fácil de entender para todos.
                </p>
              </div>

              <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-5 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
                <h3 className="font-bold text-purple-300 mb-2">
                  Praticidade
                </h3>

                <p className="text-slate-300 text-sm">
                  Aprendizado baseado em projetos reais e aplicáveis.
                </p>
              </div>

              <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-5 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
                <h3 className="font-bold text-purple-300 mb-2">
                  Inovação
                </h3>

                <p className="text-slate-300 text-sm">
                  Sempre atualizados com as tecnologias mais modernas.
                </p>
              </div>

              <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-5 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
                <h3 className="font-bold text-purple-300 mb-2">
                  Comunidade
                </h3>

                <p className="text-slate-300 text-sm">
                  Espaço colaborativo para aprender e crescer junto.
                </p>
              </div>
            </div>
          </div>

          {/* O que oferecemos */}
          <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-6">
              O que Oferecemos
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-2xl">📚</div>

                <div>
                  <h3 className="font-bold text-purple-300 mb-1">
                    Tutoriais e Artigos
                  </h3>

                  <p className="text-slate-300 text-sm">
                    Conteúdo educacional sobre IA, programação e
                    desenvolvimento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 text-2xl">🛠️</div>

                <div>
                  <h3 className="font-bold text-purple-300 mb-1">
                    Aplicativos Práticos
                  </h3>

                  <p className="text-slate-300 text-sm">
                    Ferramentas desenvolvidas no laboratório que você pode usar
                    e aprender.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 text-2xl">💡</div>

                <div>
                  <h3 className="font-bold text-purple-300 mb-1">
                    Projetos Reais
                  </h3>

                  <p className="text-slate-300 text-sm">
                    Exemplos e projetos que demonstram como aplicar os conceitos
                    aprendidos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 text-2xl">🚀</div>

                <div>
                  <h3 className="font-bold text-purple-300 mb-1">
                    Recursos Atualizados
                  </h3>

                  <p className="text-slate-300 text-sm">
                    Conteúdo sempre atualizado com as tendências e ferramentas
                    mais recentes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA mantido, mas padronizado */}
          <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Comece sua jornada agora
            </h2>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Explore nossos conteúdos e comece a aprender IA e programação hoje
              mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ia"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
              >
                Explorar IA
              </Link>

              <Link
                href="/programacao"
                className="inline-flex items-center justify-center rounded-lg border border-purple-500/50 bg-purple-500/10 px-6 py-2 font-semibold text-purple-300 transition-all hover:bg-purple-500/20"
              >
                Aprender Programação
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}