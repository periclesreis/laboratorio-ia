import Link from "next/link";

export default function AgentesIAPage() {
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
              Agentes de IA
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Entenda como funcionam agentes autônomos e como usá-los para automatizar tarefas
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Tempo de leitura: ~18 minutos
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
                Um <strong>agente de IA</strong> é um programa inteligente que pode tomar decisões, executar ações e resolver problemas de forma autônoma, sem necessidade de intervenção humana constante. Diferente de um chatbot que apenas responde perguntas, um agente de IA pode planejar, executar múltiplas ações e aprender com os resultados.
              </p>

              {/* O que é */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">O que é um Agente de IA?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Um <strong>agente de IA</strong> é um sistema inteligente que:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <div>
                    <p className="text-white font-bold">Percebe o ambiente</p>
                    <p className="text-slate-400 text-sm">Coleta informações sobre o estado atual</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <div>
                    <p className="text-white font-bold">Toma decisões</p>
                    <p className="text-slate-400 text-sm">Analisa informações e decide qual ação tomar</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <div>
                    <p className="text-white font-bold">Executa ações</p>
                    <p className="text-slate-400 text-sm">Realiza tarefas (enviar email, buscar dados, etc.)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">4.</span>
                  <div>
                    <p className="text-white font-bold">Aprende</p>
                    <p className="text-slate-400 text-sm">Melhora suas decisões baseado em resultados anteriores</p>
                  </div>
                </div>
              </div>

              {/* Diferenças */}
              <h3 className="text-xl font-bold mb-4 text-white mt-8">Diferenças Importantes</h3>
              
              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-3 text-purple-300">Característica</th>
                      <th className="text-left p-3 text-blue-300">Chatbot</th>
                      <th className="text-left p-3 text-emerald-300">Agente de IA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="p-3 text-slate-300">Interação</td>
                      <td className="p-3 text-slate-400">Reativa (responde)</td>
                      <td className="p-3 text-slate-400">Proativa (age)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 text-slate-300">Ações</td>
                      <td className="p-3 text-slate-400">Apenas conversa</td>
                      <td className="p-3 text-slate-400">Executa tarefas reais</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 text-slate-300">Memória</td>
                      <td className="p-3 text-slate-400">Limitada</td>
                      <td className="p-3 text-slate-400">Persistente</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-300">Autonomia</td>
                      <td className="p-3 text-slate-400">Nenhuma</td>
                      <td className="p-3 text-slate-400">Alta</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Componentes */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Componentes de um Agente de IA</h2>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">1. Percepção (Sensores)</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                O agente coleta informações do ambiente através de APIs externas, bancos de dados, sensores IoT, entrada do usuário e histórico de dados.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-400 mb-2">Exemplo:</p>
                <div className="bg-slate-900/50 p-3 rounded border border-purple-500/20 font-mono text-sm text-slate-300">
                  Um agente de vendas percebe:  

                  - Produtos disponíveis no estoque  

                  - Preferências do cliente  

                  - Histórico de compras  

                  - Tendências de mercado
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">2. Raciocínio (Processamento)</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                O agente analisa as informações e decide qual é o objetivo, quais são as opções e qual é a melhor ação.
              </p>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">3. Ação (Atuadores)</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                O agente executa a ação decidida: enviar mensagens, fazer requisições HTTP, atualizar bancos de dados, controlar dispositivos ou gerar relatórios.
              </p>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">4. Aprendizado (Feedback)</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                O agente aprende com os resultados: o cliente comprou? Que ótimo! O cliente rejeitou? Vou melhorar próxima vez.
              </p>

              {/* Tipos de Agentes */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Tipos de Agentes de IA</h2>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">1. Agentes Reativos Simples</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Respondem diretamente aos estímulos do ambiente. Sem memória, com regras simples, rápidos e eficientes, mas limitados em complexidade.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-400 mb-2">Exemplo:</p>
                <div className="bg-slate-900/50 p-3 rounded border border-purple-500/20 font-mono text-sm text-slate-300">
                  Se temperatura &gt; 30°C → Ligar ar condicionado  

                  Se temperatura &lt; 15°C → Ligar aquecimento
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">2. Agentes com Memória</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Armazenam informações do passado para tomar melhores decisões. Têm memória de curto e longo prazo, podem aprender padrões e são mais inteligentes que reativos.
              </p>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">3. Agentes Baseados em Objetivos</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Planejam uma sequência de ações para atingir um objetivo. Definem o objetivo, planejam o caminho, executam passo a passo e ajustam se necessário.
              </p>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">4. Agentes Baseados em Utilidade</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Escolhem a ação que maximiza o resultado desejado. Avaliam múltiplas opções, calculam o "valor" de cada ação, escolhem a melhor e otimizam resultados.
              </p>

              <h3 className="text-xl font-bold mb-3 text-white mt-8">5. Agentes com Aprendizado (Machine Learning)</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Melhoram continuamente através de dados e experiência. Aprendem com dados históricos, melhoram com cada interação, detectam padrões complexos e são muito poderosos.
              </p>

              {/* Casos de Uso */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Casos de Uso Reais</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2">📞 Atendimento ao Cliente</h3>
                  <p className="text-slate-400 text-sm mb-2">Responde perguntas, escalona para humano, registra informações, acompanha tickets.</p>
                  <p className="text-slate-500 text-sm"><strong>Benefício:</strong> Atendimento 24/7, reduz carga de trabalho, melhora satisfação</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-blue-300 mb-2">💰 Automação de Vendas</h3>
                  <p className="text-slate-400 text-sm mb-2">Qualifica leads, envia propostas, acompanha oportunidades, prevê probabilidade de venda.</p>
                  <p className="text-slate-500 text-sm"><strong>Benefício:</strong> Aumenta conversão, acelera ciclo de vendas, melhora ROI</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-emerald-300 mb-2">📊 Gestão de Projetos</h3>
                  <p className="text-slate-400 text-sm mb-2">Aloca recursos, identifica gargalos, prevê atrasos, sugere otimizações.</p>
                  <p className="text-slate-500 text-sm"><strong>Benefício:</strong> Projetos no prazo, melhor utilização de recursos, menos surpresas</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-yellow-300 mb-2">📈 Análise de Dados</h3>
                  <p className="text-slate-400 text-sm mb-2">Coleta dados, identifica padrões, gera insights, cria relatórios.</p>
                  <p className="text-slate-500 text-sm"><strong>Benefício:</strong> Decisões baseadas em dados, economia de tempo, descoberta de oportunidades</p>
                </div>
              </div>

              {/* Melhores Práticas */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Melhores Práticas</h2>

              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <div>
                    <p className="text-white font-bold">Comece Simples</p>
                    <p className="text-slate-400 text-sm">Não tente criar um agente super complexo no primeiro dia. Evolua gradualmente.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <div>
                    <p className="text-white font-bold">Teste Extensivamente</p>
                    <p className="text-slate-400 text-sm">Teste em cenários reais antes de colocar em produção.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <div>
                    <p className="text-white font-bold">Monitore Continuamente</p>
                    <p className="text-slate-400 text-sm">Acompanhe taxa de sucesso, tempo de resposta, erros e feedback.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">4.</span>
                  <div>
                    <p className="text-white font-bold">Melhore Iterativamente</p>
                    <p className="text-slate-400 text-sm">Use dados para melhorar o agente continuamente.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">5.</span>
                  <div>
                    <p className="text-white font-bold">Mantenha Controle Humano</p>
                    <p className="text-slate-400 text-sm">Sempre tenha um humano no loop para decisões críticas.</p>
                  </div>
                </div>
              </div>

              {/* Conclusão */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Conclusão</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Agentes de IA são o futuro da automação. Eles podem economizar tempo e dinheiro, melhorar qualidade das decisões, escalar operações e proporcionar experiências melhores.
              </p>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mb-6">
                <h3 className="font-bold text-white mb-3">Benefícios Principais:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ Economiza tempo e dinheiro</li>
                  <li>✅ Melhora qualidade das decisões</li>
                  <li>✅ Escala operações</li>
                  <li>✅ Proporciona experiências melhores</li>
                  <li>✅ Reduz erros humanos</li>
                </ul>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="card-hover card-ia text-center">
                <h3 className="text-xl font-bold mb-3">Pronto para começar?</h3>
                <p className="text-slate-400 mb-6">
                  Explore mais tópicos sobre IA e comece a implementar agentes em seus projetos!
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
