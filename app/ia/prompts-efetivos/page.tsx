import Link from "next/link";

export default function PromptsEfetivosPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/ia" 
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium mb-4 inline-flex items-center"
            >
              ← Voltar para IA
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Prompts Efetivos
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Aprenda a criar prompts que geram resultados precisos e úteis com modelos de IA
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Tempo de leitura: ~15 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Introdução */}
            <article className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-white">Introdução</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Um prompt é uma instrução ou pergunta que você faz a um modelo de IA. A qualidade do seu prompt determina diretamente a qualidade da resposta que você receberá. Neste guia, você aprenderá técnicas comprovadas para criar prompts que geram resultados precisos, úteis e alinhados com suas expectativas.
              </p>

              {/* O que é um Prompt */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">O que é um Prompt?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Um <strong>prompt</strong> é basicamente uma instrução ou pergunta que você envia para um modelo de IA (como ChatGPT, Claude, Gemini, etc.). É como conversar com alguém, mas com regras específicas que ajudam a IA a entender exatamente o que você quer.
              </p>

              {/* Exemplo Básico */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 my-6">
                <h3 className="font-bold text-white mb-3">Exemplo Básico:</h3>
                
                <div className="mb-4">
                  <p className="text-sm text-slate-400 mb-2">❌ Prompt fraco:</p>
                  <div className="bg-slate-900/50 p-3 rounded border border-red-500/20 font-mono text-sm text-slate-300">
                    Me fale sobre IA
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-2">✅ Prompt efetivo:</p>
                  <div className="bg-slate-900/50 p-3 rounded border border-green-500/20 font-mono text-sm text-slate-300">
                    Explique o conceito de Machine Learning de forma simples, como se estivesse ensinando para um iniciante em programação. Use exemplos práticos do dia a dia.
                  </div>
                </div>
              </div>

              {/* Princípios Fundamentais */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Princípios Fundamentais de um Bom Prompt</h2>

              {/* Princípio 1 */}
              <h3 className="text-xl font-bold mb-3 text-white mt-8">1. Seja Específico e Claro</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Quanto mais específico você for, melhor será a resposta.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-400 mb-2">❌ Fraco:</p>
                <div className="bg-slate-900/50 p-2 rounded border border-red-500/20 font-mono text-sm text-slate-300 mb-3">
                  Como aprender programação?
                </div>

                <p className="text-sm text-slate-400 mb-2">✅ Efetivo:</p>
                <div className="bg-slate-900/50 p-2 rounded border border-green-500/20 font-mono text-sm text-slate-300">
                  Quero aprender Python para análise de dados. Sou iniciante completo. Qual é o melhor caminho de aprendizado? Recomende recursos gratuitos e pague em ordem de importância.
                </div>
              </div>

              {/* Princípio 2 */}
              <h3 className="text-xl font-bold mb-3 text-white mt-8">2. Forneça Contexto</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Contexto ajuda a IA a entender sua situação e personalizar a resposta.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-400 mb-2">❌ Fraco:</p>
                <div className="bg-slate-900/50 p-2 rounded border border-red-500/20 font-mono text-sm text-slate-300 mb-3">
                  Como fazer um site?
                </div>

                <p className="text-sm text-slate-400 mb-2">✅ Efetivo:</p>
                <div className="bg-slate-900/50 p-2 rounded border border-green-500/20 font-mono text-sm text-slate-300">
                  Quero criar um site educacional sobre IA. Será um blog com artigos, uma seção de aplicativos e um formulário de contato. Tenho experiência básica em HTML/CSS. Qual tecnologia você recomenda?
                </div>
              </div>

              {/* Princípio 3 */}
              <h3 className="text-xl font-bold mb-3 text-white mt-8">3. Defina o Formato da Resposta</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Diga exatamente como você quer a resposta.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-400 mb-2">❌ Fraco:</p>
                <div className="bg-slate-900/50 p-2 rounded border border-red-500/20 font-mono text-sm text-slate-300 mb-3">
                  Quais são os benefícios da IA?
                </div>

                <p className="text-sm text-slate-400 mb-2">✅ Efetivo:</p>
                <div className="bg-slate-900/50 p-2 rounded border border-green-500/20 font-mono text-sm text-slate-300">
                  Liste 5 benefícios práticos da IA em empresas. Para cada benefício, forneça: nome, explicação em 1 parágrafo e exemplo real de uso.
                </div>
              </div>

              {/* Princípio 4 */}
              <h3 className="text-xl font-bold mb-3 text-white mt-8">4. Especifique o Nível de Profundidade</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Indique se quer uma resposta superficial, intermediária ou aprofundada.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-400 mb-2">❌ Fraco:</p>
                <div className="bg-slate-900/50 p-2 rounded border border-red-500/20 font-mono text-sm text-slate-300 mb-3">
                  Explique redes neurais
                </div>

                <p className="text-sm text-slate-400 mb-2">✅ Efetivo:</p>
                <div className="bg-slate-900/50 p-2 rounded border border-green-500/20 font-mono text-sm text-slate-300">
                  Explique redes neurais em 3 níveis: para iniciante (1 parágrafo), para desenvolvedor (2 parágrafos técnicos) e para pesquisador (com fórmulas).
                </div>
              </div>

              {/* Técnicas Avançadas */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Técnicas Avançadas de Prompting</h2>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">1. Chain of Thought (Cadeia de Pensamento)</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Peça à IA para pensar passo a passo antes de responder.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-400 mb-2">Exemplo:</p>
                <div className="bg-slate-900/50 p-3 rounded border border-purple-500/20 font-mono text-sm text-slate-300">
                  Resolva este problema passo a passo: "Um site recebe 1000 visitantes por dia. 30% clicam em um anúncio. Desses, 10% fazem uma compra. Se cada compra gera R$ 50 de lucro, quanto o site lucra por dia?"
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">2. Few-Shot Learning (Exemplos)</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Forneça exemplos de como você quer a resposta.
              </p>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">3. Role-Playing (Simulação de Papel)</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Peça à IA para agir como um especialista.
              </p>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">4. Negação Explícita</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Diga o que você NÃO quer.
              </p>

              {/* Erros Comuns */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Erros Comuns ao Criar Prompts</h2>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-red-400 mb-2">❌ Erro 1: Ser Vago</h3>
                  <p className="text-slate-300 text-sm mb-2">"Me ajuda com programação"</p>
                  <p className="text-slate-400 text-sm"><strong>Solução:</strong> Seja específico sobre o que você quer aprender.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-red-400 mb-2">❌ Erro 2: Pedir Muitas Coisas de Uma Vez</h3>
                  <p className="text-slate-300 text-sm mb-2">"Crie um site, um app, um logo e um plano de marketing"</p>
                  <p className="text-slate-400 text-sm"><strong>Solução:</strong> Divida em múltiplos prompts.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-red-400 mb-2">❌ Erro 3: Não Fornecer Contexto Suficiente</h3>
                  <p className="text-slate-300 text-sm mb-2">"Como resolver esse erro?"</p>
                  <p className="text-slate-400 text-sm"><strong>Solução:</strong> Inclua o código, a mensagem de erro e o que você tentou.</p>
                </div>
              </div>

              {/* Conclusão */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Conclusão</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Criar prompts efetivos é uma <strong>habilidade que se desenvolve com a prática</strong>. Quanto mais você experimenta, mais intuitivo fica.
              </p>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-white mb-3">Princípios Principais:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ Seja específico</li>
                  <li>✅ Forneça contexto</li>
                  <li>✅ Defina o formato</li>
                  <li>✅ Refine iterativamente</li>
                  <li>✅ Revise as respostas</li>
                </ul>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="card-hover card-ia text-center">
                <h3 className="text-xl font-bold mb-3">Pronto para praticar?</h3>
                <p className="text-slate-400 mb-6">
                  Comece a criar prompts efetivos agora mesmo e veja os resultados melhorarem!
                </p>
                <Link
                  href="/ia"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
                >
                  ← Voltar para IA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
