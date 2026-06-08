import Link from "next/link";

export default function NoticiasPage() {
  const noticias = [
    {
      id: 1,
      titulo: "OpenAI Lança GPT-5 com Capacidades Revolucionárias de Raciocínio",
      descricao: "Nova versão do modelo de linguagem traz melhorias significativas em compreensão e geração de código",
      categoria: "Inteligência Artificial",
      data: "15 de Junho de 2026",
      link: "https://openai.com/blog/gpt-5-launch",
      icone: "🤖",
      cor: "purple"
    },
    {
      id: 2,
      titulo: "React 19 Traz Novo Sistema de Renderização Mais Rápido",
      descricao: "Melhorias de performance de até 40% em aplicações web com a nova versão do framework",
      categoria: "Programação",
      data: "12 de Junho de 2026",
      link: "https://react.dev/blog/2026/react-19",
      icone: "⚛️",
      cor: "blue"
    },
    {
      id: 3,
      titulo: "Google Anuncia Gemini 2.0 com Suporte Nativo a Vídeo",
      descricao: "Modelo de IA agora consegue processar e gerar conteúdo de vídeo com qualidade profissional",
      categoria: "Inteligência Artificial",
      data: "10 de Junho de 2026",
      link: "https://deepmind.google/gemini-2",
      icone: "🎥",
      cor: "purple"
    },
    {
      id: 4,
      titulo: "Python 3.13 Lançado com Melhorias de Performance",
      descricao: "Nova versão oferece otimizações de velocidade e novas features para desenvolvimento",
      categoria: "Programação",
      data: "8 de Junho de 2026",
      link: "https://www.python.org/downloads/release/python-3130/",
      icone: "🐍",
      cor: "blue"
    },
    {
      id: 5,
      titulo: "Meta Apresenta Llama 3.5: IA Open Source Competindo com GPT-4",
      descricao: "Modelo de linguagem de código aberto oferece alternativa gratuita para desenvolvedores",
      categoria: "Inteligência Artificial",
      data: "5 de Junho de 2026",
      link: "https://www.meta.com/research/llama/",
      icone: "🦙",
      cor: "purple"
    }
  ];

  const getCoreColor = (cor: string) => {
    switch(cor) {
      case "purple":
        return "from-purple-500/20 to-purple-500/10 hover:from-purple-500/30 hover:to-purple-500/20 border-purple-500/30 hover:border-purple-500/50";
      case "blue":
        return "from-blue-500/20 to-blue-500/10 hover:from-blue-500/30 hover:to-blue-500/20 border-blue-500/30 hover:border-blue-500/50";
      default:
        return "from-slate-500/20 to-slate-500/10 hover:from-slate-500/30 hover:to-slate-500/20 border-slate-500/30 hover:border-slate-500/50";
    }
  };

  const getTextColor = (cor: string) => {
    switch(cor) {
      case "purple":
        return "text-purple-400";
      case "blue":
        return "text-blue-400";
      default:
        return "text-slate-400";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-50"></div>
        <div className="relative max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-8">
            <span>←</span>
            <span>Voltar para Home</span>
          </Link>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Notícias
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
            Fique Atualizado com as Últimas Notícias sobre IA e Programação
          </p>
          
          <p className="text-lg text-slate-400 mb-8">
            Acompanhe os principais acontecimentos e lançamentos do mundo da Inteligência Artificial e Desenvolvimento de Software
          </p>
        </div>
      </section>

      {/* Notícias Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        <div className="grid gap-6">
          {noticias.map((noticia) => (
            <a
              key={noticia.id}
              href={noticia.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-r ${getCoreColor(noticia.cor)} border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-${noticia.cor}-500/20 cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                {/* Ícone */}
                <div className="text-4xl flex-shrink-0 mt-1">
                  {noticia.icone}
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  {/* Badge de Categoria */}
                  <div className="inline-block mb-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      noticia.categoria === "Inteligência Artificial" 
                        ? "bg-purple-500/20 text-purple-300" 
                        : "bg-blue-500/20 text-blue-300"
                    }`}>
                      {noticia.categoria}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 group-hover:text-slate-50 transition line-clamp-2">
                    {noticia.titulo}
                  </h3>

                  {/* Descrição */}
                  <p className="text-slate-400 mb-4 line-clamp-2 group-hover:text-slate-300 transition">
                    {noticia.descricao}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      📅 {noticia.data}
                    </span>
                    <span className={`text-sm font-semibold ${getTextColor(noticia.cor)} group-hover:translate-x-1 transition-transform`}>
                      Leia mais →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Quer Receber as Notícias Mais Recentes?
          </h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Fique atualizado com as últimas novidades sobre Inteligência Artificial, Programação e Desenvolvimento de Aplicativos
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            Entrar em Contato
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-slate-800/50 border border-slate-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-slate-100 mb-3">📰 Sobre Esta Seção</h3>
          <p className="text-slate-400 leading-relaxed">
            As notícias apresentadas aqui são atualizadas regularmente com os principais acontecimentos do mundo da Inteligência Artificial e Programação. Clique em qualquer notícia para ler o artigo completo no site oficial.
          </p>
        </div>
      </section>
    </div>
  );
}