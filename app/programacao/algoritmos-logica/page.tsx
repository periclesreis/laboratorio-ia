import Link from "next/link";

export default function AlgoritmosLogicaPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/programacao" 
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium mb-4 inline-flex items-center"
            >
              ← Voltar para Programação
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Algoritmos e Lógica de Programação
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Aprenda a pensar como um programador e resolver problemas usando lógica e algoritmos
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Tempo de leitura: ~30 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Introdução */}
            <article className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed">
                Imagine dois programadores recebendo exatamente o mesmo desafio.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Ambos precisam criar um sistema capaz de encontrar um cliente em uma base com milhões de registros.
              </p>
              <p className="text-slate-300 leading-relaxed">
                O primeiro escreve qualquer solução que funcione. O segundo entende lógica de programação e algoritmos.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Os dois conseguem resolver o problema. Mas existe uma diferença importante.
              </p>
              <p className="text-slate-300 leading-relaxed">
                O sistema do primeiro demora vários segundos para responder. O do segundo encontra a informação quase instantaneamente.
              </p>
              <p className="text-slate-300 leading-relaxed">
                A diferença não está na linguagem utilizada. Não está no computador. Não está no framework. Está na forma de pensar.
              </p>
              <p className="text-slate-300 leading-relaxed font-semibold text-blue-300">
                É exatamente isso que você aprenderá neste guia.
              </p>
            </article>

            {/* O Que Você Vai Aprender */}
            <div className="card-hover card-dev">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">O Que Você Vai Aprender Neste Guia</h2>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>O que são algoritmos e lógica de programação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Como programadores resolvem problemas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Os principais conceitos fundamentais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Como funcionam algoritmos clássicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>O que é complexidade de tempo (Big O)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Como algoritmos são utilizados em Inteligência Artificial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Como desenvolver raciocínio lógico na prática</span>
                </li>
              </ul>
            </div>

            {/* Seções Principais */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-3">O Que é Lógica de Programação?</h2>
                <p className="text-slate-300 leading-relaxed">
                  Lógica de programação é a capacidade de transformar um problema em uma sequência organizada de passos que levam a uma solução.
                </p>
                <p className="text-slate-300 leading-relaxed mt-3">
                  Curiosamente, usamos lógica todos os dias. Imagine que você precisa sair de casa. Você pode pensar: Está chovendo? Se sim, levo um guarda-chuva. Se não, saio normalmente.
                </p>
                <p className="text-slate-300 leading-relaxed mt-3">
                  Você acabou de tomar uma decisão baseada em condições. Isso é lógica. Programar funciona da mesma forma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">O Que é um Algoritmo?</h2>
                <p className="text-slate-300 leading-relaxed">
                  Um algoritmo é uma sequência de passos bem definidos para resolver um problema.
                </p>
                <p className="text-slate-300 leading-relaxed mt-3 italic text-blue-300">
                  "Um algoritmo é a aplicação prática da lógica."
                </p>
                <p className="text-slate-300 leading-relaxed mt-3">
                  Ele não precisa estar escrito em código. Pode ser descrito em linguagem comum. Por exemplo, uma receita de bolo é um algoritmo: misture os ingredientes, coloque na forma, leve ao forno por 30 minutos, retire e deixe esfriar.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Por Que Algoritmos São Importantes?</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-blue-300 mb-2">Eficiência</h3>
                    <p className="text-slate-300">Um algoritmo bem planejado pode ser centenas ou milhares de vezes mais rápido. A diferença pode ser entre 1 segundo ou 15 minutos.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-300 mb-2">Escalabilidade</h3>
                    <p className="text-slate-300">Um algoritmo ruim funciona com 100 registros, mas falha com 10 milhões.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-300 mb-2">Carreira Profissional</h3>
                    <p className="text-slate-300">Empresas de tecnologia avaliam lógica e algoritmos em entrevistas técnicas.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Como os Programadores Pensam?</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Uma das habilidades mais importantes é aprender a dividir problemas grandes em problemas menores. Normalmente o processo segue quatro etapas:
                </p>
                <div className="space-y-3">
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-1">1. Entender o problema</h4>
                    <p className="text-slate-300 text-sm">Antes de programar qualquer coisa, é necessário compreender exatamente o que precisa ser resolvido.</p>
                  </div>
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-1">2. Dividir em partes menores</h4>
                    <p className="text-slate-300 text-sm">Problemas complexos ficam mais fáceis quando são quebrados em etapas menores.</p>
                  </div>
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-1">3. Resolver cada etapa</h4>
                    <p className="text-slate-300 text-sm">Cada parte recebe sua própria solução.</p>
                  </div>
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-1">4. Combinar tudo</h4>
                    <p className="text-slate-300 text-sm">As pequenas soluções são reunidas para formar a solução completa.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Algoritmos e Inteligência Artificial</h2>
                <p className="text-slate-300 leading-relaxed">
                  Muitas pessoas acreditam que Inteligência Artificial é algo completamente diferente da programação tradicional. Na prática, não é.
                </p>
                <p className="text-slate-300 leading-relaxed mt-3">
                  Toda IA funciona através de algoritmos. Quando um chatbot responde uma pergunta, quando um sistema recomenda um filme ou quando um aplicativo identifica rostos em uma foto, algoritmos estão trabalhando nos bastidores.
                </p>
                <p className="text-slate-300 leading-relaxed mt-3">
                  Por isso, entender algoritmos é um dos melhores caminhos para quem deseja trabalhar com Inteligência Artificial.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Onde Algoritmos São Utilizados?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-2">Desenvolvimento Web</h4>
                    <p className="text-slate-300 text-sm">Sites e aplicações utilizam algoritmos para processar dados.</p>
                  </div>
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-2">Inteligência Artificial</h4>
                    <p className="text-slate-300 text-sm">Modelos de aprendizado de máquina dependem de algoritmos.</p>
                  </div>
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-2">Jogos</h4>
                    <p className="text-slate-300 text-sm">Personagens e sistemas de decisão utilizam algoritmos.</p>
                  </div>
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-2">Aplicativos Mobile</h4>
                    <p className="text-slate-300 text-sm">Rotas e recomendações dependem deles.</p>
                  </div>
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-2">Sistemas Financeiros</h4>
                    <p className="text-slate-300 text-sm">Bancos processam milhões de operações com algoritmos.</p>
                  </div>
                  <div className="card-hover card-dev p-4">
                    <h4 className="font-bold text-blue-300 mb-2">Redes Sociais</h4>
                    <p className="text-slate-300 text-sm">Feeds e recomendações são definidos por algoritmos.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Como Praticar</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-blue-300 mb-2">Comece com Problemas Simples</h3>
                    <p className="text-slate-300 text-sm">Encontrar o maior número, contar ocorrências, inverter uma lista, verificar palíndromos.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-300 mb-2">Utilize Plataformas de Exercícios</h3>
                    <p className="text-slate-300 text-sm">LeetCode, HackerRank, Exercism, CodeWars.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-300 mb-2">Estude Algoritmos Clássicos</h3>
                    <p className="text-slate-300 text-sm">Busca Linear, Busca Binária, Quick Sort, Merge Sort, BFS, DFS.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-300 mb-2">Implemente Tudo</h3>
                    <p className="text-slate-300 text-sm">Ler ajuda, mas programar é o que realmente desenvolve habilidade.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3">Dicas Finais</h2>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✅</span>
                    <span>Comece pelo básico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✅</span>
                    <span>Pense antes de programar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✅</span>
                    <span>Use papel para desenhar soluções</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✅</span>
                    <span>Teste cenários diferentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✅</span>
                    <span>Analise código de outros desenvolvedores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✅</span>
                    <span>Pratique regularmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✅</span>
                    <span>Busque entender, não decorar</span>
                  </li>
                </ul>
              </section>

              <section className="card-hover card-dev p-6">
                <h2 className="text-2xl font-bold mb-3">Conclusão</h2>
                <p className="text-slate-300 leading-relaxed">
                  Linguagens de programação mudam. Frameworks surgem e desaparecem. Ferramentas evoluem todos os anos.
                </p>
                <p className="text-slate-300 leading-relaxed mt-3">
                  Mas a capacidade de resolver problemas através da lógica continua sendo uma das habilidades mais valiosas da tecnologia.
                </p>
                <p className="text-slate-300 leading-relaxed mt-3">
                  Quem domina algoritmos não depende de uma linguagem específica. Aprende novas ferramentas com mais facilidade. Constrói soluções melhores. E consegue enfrentar problemas que nunca viu antes.
                </p>
                <p className="text-slate-300 leading-relaxed mt-3 font-semibold text-blue-300">
                  É por isso que algoritmos e lógica de programação continuam sendo o verdadeiro alicerce da carreira de qualquer desenvolvedor.
                </p>
              </section>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="card-hover card-dev text-center">
                <h3 className="text-xl font-bold mb-3">Pronto para começar?</h3>
                <p className="text-slate-400 mb-6">
                  Explore mais tópicos sobre programação e comece a dominar algoritmos e lógica!
                </p>
                <Link
                  href="/programacao"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
                >
                  ← Voltar para Programação
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
