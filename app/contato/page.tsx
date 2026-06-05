import Link from "next/link";

export default function ContatoPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Tem dúvidas, sugestões ou quer colaborar? Ficaremos felizes em ouvir você.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Email */}
              <div className="card-hover card-ia">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Envie suas dúvidas e sugestões por email.
                </p>
                <a
                  href="mailto:contato@laboratoriodia.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium text-sm"
                >
                  contato@laboratoriodia.com
                </a>
              </div>

              {/* Redes Sociais */}
              <div className="card-hover card-dev">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-lg font-bold mb-2">Redes Sociais</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Siga-nos nas redes sociais para atualizações.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm"
                  >
                    Twitter
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="card-hover">
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 transition-colors focus:border-purple-500/50 focus:bg-white/10 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 transition-colors focus:border-purple-500/50 focus:bg-white/10 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    placeholder="Assunto da mensagem"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 transition-colors focus:border-purple-500/50 focus:bg-white/10 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Sua mensagem aqui..."
                    rows={5}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 transition-colors focus:border-purple-500/50 focus:bg-white/10 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
              <div className="space-y-4">
                <div className="card-hover">
                  <h3 className="font-bold mb-2">Como posso aprender IA?</h3>
                  <p className="text-slate-400 text-sm">
                    Acesse a seção de IA no menu principal para encontrar tutoriais, artigos e recursos sobre Inteligência Artificial.
                  </p>
                </div>
                <div className="card-hover">
                  <h3 className="font-bold mb-2">Os conteúdos são gratuitos?</h3>
                  <p className="text-slate-400 text-sm">
                    Sim! Todo o conteúdo do Laboratório de IA é gratuito e acessível para todos.
                  </p>
                </div>
                <div className="card-hover">
                  <h3 className="font-bold mb-2">Posso usar os aplicativos?</h3>
                  <p className="text-slate-400 text-sm">
                    Claro! Todos os aplicativos desenvolvidos no laboratório estão disponíveis para uso. Acesse a seção de Aplicativos.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-12 border-t border-white/10 text-center">
              <p className="text-slate-400 mb-6">
                Não encontrou o que procura? Volte para a página inicial.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-2 font-semibold text-white transition-all hover:bg-white/20"
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
