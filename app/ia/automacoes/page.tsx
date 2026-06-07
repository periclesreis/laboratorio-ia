import Link from "next/link";

export default function AutomacoesPage() {
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
              Automações com IA
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Como fazer o computador trabalhar por você e ganhar horas do seu dia
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Tempo de leitura: ~12 minutos
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
                Imagine a seguinte cena: você chega ao trabalho, abre seu e-mail e encontra dezenas de mensagens parecidas. Você precisa ler uma por uma, copiar os dados para uma planilha, responder aos clientes e organizar documentos em pastas.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Essas tarefas, embora importantes, podem consumir horas preciosas do seu dia.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Agora imagine um cenário diferente. Enquanto você toma seu café, um sistema inteligente já leu os e-mails, identificou o que cada cliente precisava, preencheu a planilha automaticamente e deixou respostas personalizadas prontas para sua aprovação.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Parece algo futurista? Na verdade, essa tecnologia já existe e está ao alcance de qualquer pessoa. Ela se chama <strong>automação com Inteligência Artificial</strong>.
              </p>

              {/* O que são automações */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">O que são Automações com IA?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Uma automação com IA é a combinação de softwares, aplicativos e modelos de Inteligência Artificial para executar tarefas de forma automática, rápida e inteligente.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 my-6">
                <h3 className="font-bold text-white mb-4">Comparação:</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-300 font-bold mb-2">Automação Tradicional (Trem em trilhos)</p>
                    <p className="text-slate-400 text-sm">Percorre sempre o mesmo caminho e segue regras previamente definidas.</p>
                  </div>

                  <div>
                    <p className="text-purple-300 font-bold mb-2">Automação com IA (Carro autônomo)</p>
                    <p className="text-slate-400 text-sm">Possui um objetivo, mas consegue interpretar situações, analisar informações e adaptar suas ações de acordo com o contexto.</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                Em vez de apenas seguir comandos fixos, a IA consegue:
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-slate-300">Interpretar textos</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-slate-300">Resumir informações</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-slate-300">Identificar intenções</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-slate-300">Classificar conteúdos</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-slate-300">Gerar respostas</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-slate-300">Produzir conteúdo</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-slate-300">Tomar decisões simples com base em dados</span>
                </div>
              </div>

              {/* Como funciona */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Como Funciona uma Automação com IA?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                A maioria das automações segue um fluxo bastante simples composto por três etapas.
              </p>

              <div className="space-y-6 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2">1. Entrada (Gatilho)</h3>
                  <p className="text-slate-400 text-sm mb-3">É o evento que inicia o processo.</p>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• Um formulário é preenchido</li>
                    <li>• Um e-mail chega</li>
                    <li>• Uma mensagem é recebida no WhatsApp</li>
                    <li>• Um arquivo é enviado para uma pasta</li>
                    <li>• Um cliente realiza uma compra</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2">2. Processamento (O Cérebro)</h3>
                  <p className="text-slate-400 text-sm mb-3">Nesta etapa, a IA analisa as informações recebidas.</p>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• Resumir textos</li>
                    <li>• Identificar sentimentos</li>
                    <li>• Classificar documentos</li>
                    <li>• Extrair dados importantes</li>
                    <li>• Traduzir conteúdos</li>
                    <li>• Gerar respostas</li>
                    <li>• Produzir conteúdo personalizado</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-purple-300 mb-2">3. Ação (Resultado)</h3>
                  <p className="text-slate-400 text-sm mb-3">Depois de analisar os dados, o sistema executa uma tarefa.</p>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• Enviar um e-mail</li>
                    <li>• Atualizar uma planilha</li>
                    <li>• Criar um documento</li>
                    <li>• Registrar informações em banco de dados</li>
                    <li>• Notificar uma equipe</li>
                    <li>• Criar um atendimento automaticamente</li>
                  </ul>
                </div>
              </div>

              {/* Exemplo Real */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Um Exemplo Real de Automação</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Imagine uma pequena empresa que recebe pedidos através do site.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-slate-300 mb-3">❌ Sem Automação</h3>
                <ol className="space-y-2 text-slate-400 text-sm">
                  <li>1. O cliente preenche o formulário</li>
                  <li>2. Um funcionário abre o e-mail</li>
                  <li>3. Copia os dados manualmente</li>
                  <li>4. Atualiza uma planilha</li>
                  <li>5. Envia uma resposta ao cliente</li>
                  <li>6. Informa a equipe responsável</li>
                </ol>
                <p className="text-slate-500 text-xs mt-3">Todo esse processo pode levar vários minutos para cada solicitação.</p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-purple-300 mb-3">✅ Com Automação e IA</h3>
                <ol className="space-y-2 text-slate-300 text-sm">
                  <li>1. O cliente envia o formulário</li>
                  <li>2. A IA analisa o pedido</li>
                  <li>3. Os dados são registrados automaticamente</li>
                  <li>4. Um e-mail personalizado é criado</li>
                  <li>5. A equipe recebe uma notificação</li>
                  <li>6. O cliente recebe uma confirmação</li>
                </ol>
                <p className="text-slate-400 text-xs mt-3">Tudo isso acontece em poucos segundos, sem copiar, colar ou preencher planilhas manualmente.</p>
              </div>

              {/* Exemplos de Automações */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Exemplos de Automações com IA no Dia a Dia</h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">📞 Atendimento ao Cliente</h3>
                  <p className="text-slate-400 text-sm">Um chatbot inteligente pode responder dúvidas frequentes, identificar reclamações urgentes, direcionar clientes para o setor correto e criar respostas personalizadas.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">✍️ Produção de Conteúdo</h3>
                  <p className="text-slate-400 text-sm">A IA pode criar títulos para artigos, gerar descrições de produtos, produzir posts para redes sociais, criar roteiros de vídeos e elaborar resumos de documentos.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">📊 Organização de Informações</h3>
                  <p className="text-slate-400 text-sm">Uma automação pode ler documentos em PDF, extrair dados importantes, organizar informações em planilhas e criar relatórios automaticamente.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">📈 Marketing Digital</h3>
                  <p className="text-slate-400 text-sm">A IA pode criar campanhas de e-mail, segmentar clientes, gerar anúncios, analisar resultados e identificar oportunidades de melhoria.</p>
                </div>
              </div>

              {/* Benefícios */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Principais Benefícios das Automações com IA</h2>

              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">⏱️</span>
                  <div>
                    <p className="text-white font-bold">Economia de Tempo</p>
                    <p className="text-slate-400 text-sm">Tarefas que antes consumiam horas podem ser concluídas em segundos.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">✓</span>
                  <div>
                    <p className="text-white font-bold">Redução de Erros</p>
                    <p className="text-slate-400 text-sm">Processos automatizados reduzem falhas humanas como esquecimentos e erros de digitação.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">📈</span>
                  <div>
                    <p className="text-white font-bold">Aumento da Produtividade</p>
                    <p className="text-slate-400 text-sm">Você passa menos tempo em tarefas repetitivas e mais tempo resolvendo problemas importantes.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">🚀</span>
                  <div>
                    <p className="text-white font-bold">Escalabilidade</p>
                    <p className="text-slate-400 text-sm">Uma única automação pode executar centenas ou milhares de tarefas sem exigir esforço adicional.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">24/7</span>
                  <div>
                    <p className="text-white font-bold">Disponibilidade 24 Horas por Dia</p>
                    <p className="text-slate-400 text-sm">Enquanto você descansa, suas automações continuam funcionando.</p>
                  </div>
                </div>
              </div>

              {/* Ferramentas */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Ferramentas Populares para Criar Automações</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                A boa notícia é que você não precisa aprender programação para começar. Hoje existem plataformas que permitem criar automações através de interfaces visuais.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">🤖 ChatGPT</h3>
                  <p className="text-slate-400 text-sm">Excelente para gerar textos, resumir conteúdos, analisar informações, criar respostas e produzir ideias.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">⚡ Zapier</h3>
                  <p className="text-slate-400 text-sm">Uma das ferramentas mais populares para iniciantes. Permite conectar milhares de aplicativos sem necessidade de programação.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">🔧 Make</h3>
                  <p className="text-slate-400 text-sm">Possui uma interface visual extremamente intuitiva. Ideal para criar fluxos de automação mais avançados.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">🔓 n8n</h3>
                  <p className="text-slate-400 text-sm">Uma plataforma poderosa e de código aberto. Muito utilizada por profissionais e empresas que desejam maior controle.</p>
                </div>
              </div>

              {/* Como Começar */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Como Começar Hoje Mesmo?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Se você deseja criar sua primeira automação, siga este roteiro simples:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <div>
                    <p className="text-white font-bold">Escolha uma Tarefa Repetitiva</p>
                    <p className="text-slate-400 text-sm">Pode ser algo que você faz todos os dias ou toda semana.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <div>
                    <p className="text-white font-bold">Mapeie o Processo</p>
                    <p className="text-slate-400 text-sm">Anote cada etapa realizada manualmente.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <div>
                    <p className="text-white font-bold">Escolha uma Ferramenta</p>
                    <p className="text-slate-400 text-sm">Zapier, Make e n8n são ótimos pontos de partida.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">4.</span>
                  <div>
                    <p className="text-white font-bold">Adicione IA Onde Ela Gera Valor</p>
                    <p className="text-slate-400 text-sm">Use a IA para interpretar informações, gerar conteúdo ou tomar decisões simples.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-purple-400 font-bold">5.</span>
                  <div>
                    <p className="text-white font-bold">Teste em Pequena Escala</p>
                    <p className="text-slate-400 text-sm">Comece com uma única automação. Depois de validá-la, expanda gradualmente.</p>
                  </div>
                </div>
              </div>

              {/* Conclusão */}
              <h2 className="text-2xl font-bold mb-4 text-white mt-12">Conclusão</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                As automações com Inteligência Artificial estão transformando a forma como pessoas e empresas trabalham. Ao combinar automação tradicional com a capacidade de compreensão da IA, é possível economizar tempo, reduzir erros, aumentar a produtividade e realizar mais tarefas com menos esforço.
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                A melhor parte é que você não precisa ser um especialista em tecnologia para começar. Escolha uma única tarefa repetitiva da sua rotina e tente automatizá-la.
              </p>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mb-6">
                <p className="text-slate-300 leading-relaxed">
                  Muitas pessoas descobrem o verdadeiro potencial da Inteligência Artificial exatamente dessa forma: resolvendo um pequeno problema do dia a dia e percebendo quanto tempo estavam desperdiçando sem necessidade.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  Seu próximo assistente pode não ser uma pessoa. Pode ser uma automação trabalhando para você 24 horas por dia.
                </p>
              </div>
            </article>

            {/* CTA */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="card-hover card-ia text-center">
                <h3 className="text-xl font-bold mb-3">Pronto para começar?</h3>
                <p className="text-slate-400 mb-6">
                  Explore mais tópicos sobre IA e comece a implementar automações em seus projetos!
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
