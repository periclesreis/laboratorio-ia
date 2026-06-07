import Link from "next/link";

export default function ProcessamentoLinguagemPage() {
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
              Processamento de Linguagem Natural
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Como máquinas aprendem a entender e processar a linguagem humana
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Tempo de leitura: ~20 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert max-w-none">
              {/* Introdução */}
              <h2 className="text-2xl font-bold mt-8 mb-4">Como a Inteligência Artificial Aprendeu a Ler, Compreender e Conversar em Linguagem Natural</h2>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Imagine conversar com um computador como se estivesse falando com outra pessoa.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Fazer uma pergunta. Receber uma resposta. Pedir uma tradução. Solicitar um resumo de um documento enorme. Ou até pedir ajuda para escrever um texto.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Durante décadas isso parecia algo reservado à ficção científica.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Hoje, milhões de pessoas fazem exatamente isso todos os dias utilizando ferramentas como ChatGPT, Gemini, Claude, assistentes virtuais e mecanismos de busca inteligentes.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Mas como uma máquina consegue entender aquilo que escrevemos? Como ela interpreta palavras, frases, perguntas, emoções e intenções?
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                A resposta está em uma das áreas mais fascinantes da Inteligência Artificial: o <strong>Processamento de Linguagem Natural</strong>, conhecido internacionalmente como <strong>Natural Language Processing (NLP)</strong>.
              </p>

              {/* O Que é */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">O Que é Processamento de Linguagem Natural?</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Processamento de Linguagem Natural é um campo da Inteligência Artificial dedicado a permitir que computadores entendam, interpretem e gerem linguagem humana de forma útil e significativa.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Seu objetivo é aproximar a comunicação entre humanos e máquinas.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8">
                <p className="text-slate-300 font-semibold mb-4">Por meio do NLP, computadores podem:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Compreender textos e perguntas</li>
                  <li>Traduzir idiomas</li>
                  <li>Identificar sentimentos e emoções</li>
                  <li>Extrair informações importantes</li>
                  <li>Resumir documentos</li>
                  <li>Responder perguntas</li>
                  <li>Gerar textos</li>
                  <li>Participar de conversas</li>
                </ul>
              </div>

              {/* Como um Computador Vê */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Como um Computador "Enxerga" um Texto?</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Quando lemos uma frase, enxergamos significado. Quando um computador recebe a mesma frase, ele não vê significado algum. Inicialmente, ele vê apenas dados: letras, símbolos e números.
              </p>
              
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4 mb-6">
                <p className="text-slate-300 italic">
                  Para nós a frase "Hoje está chovendo" transmite imediatamente uma informação. Para uma máquina, ela é apenas uma sequência de caracteres.
                </p>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                O grande desafio do NLP é justamente transformar símbolos em significado.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                Podemos fazer uma analogia com a visão computacional. Uma câmera captura pixels e a Inteligência Artificial precisa descobrir o que eles representam. Da mesma forma, um sistema de NLP recebe palavras e precisa descobrir o que elas significam.
              </p>

              {/* Por Que é Difícil */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Por Que a Linguagem Humana É Tão Difícil?</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                A linguagem humana é extremamente rica e complexa. Nós entendemos contexto, ironias, ambiguidades e expressões populares quase sem perceber. Máquinas precisam aprender tudo isso.
              </p>
              
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4 mb-6">
                <p className="text-slate-300 font-semibold mb-3">Considere a frase:</p>
                <p className="text-slate-300 italic mb-4">
                  "O banco fechou."
                </p>
                <p className="text-slate-300 text-sm">
                  O que significa? O banco financeiro encerrou suas atividades? Ou alguém fechou um banco de praça? O significado depende do contexto.
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                Além disso, existem gírias, regionalismos, erros de digitação, expressões idiomáticas, diferentes idiomas, duplos sentidos e sarcasmo. Tudo isso torna o processamento de linguagem um dos maiores desafios da Inteligência Artificial.
              </p>

              {/* O Poder do Contexto */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">O Poder do Contexto</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Durante muito tempo, computadores analisavam palavras isoladamente. O problema é que palavras podem ter significados completamente diferentes dependendo do contexto.
              </p>
              
              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4 mb-6">
                <p className="text-slate-300 font-semibold mb-3">Considere a palavra: <span className="text-purple-300">Manga</span></p>
                <p className="text-slate-300 text-sm mb-3">Ela pode significar:</p>
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-1 mb-4">
                  <li>Uma fruta</li>
                  <li>Parte de uma camisa</li>
                </ul>
                <p className="text-slate-300 text-sm mb-2">Observe:</p>
                <p className="text-slate-300 italic text-sm mb-2">"Comi uma manga no almoço."</p>
                <p className="text-slate-300 text-sm">Nós identificamos instantaneamente o significado correto porque analisamos o contexto.</p>
              </div>

              {/* Como Máquinas Processam */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Como Máquinas Processam Linguagem?</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Embora existam diversas abordagens, a maioria dos sistemas segue etapas semelhantes.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">1️⃣ Tokenização</h4>
                  <p className="text-slate-300 text-sm">O texto é dividido em pequenas unidades chamadas tokens. Por exemplo, "Olá, como você está?" é dividido em: Olá | , | como | você | está | ?</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">2️⃣ Normalização</h4>
                  <p className="text-slate-300 text-sm">O texto é padronizado: converter para minúsculas, corrigir erros, remover espaços desnecessários e padronizar formatos.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">3️⃣ Análise Gramatical</h4>
                  <p className="text-slate-300 text-sm">O sistema identifica substantivos, verbos, adjetivos, pronomes e estruturas da frase para compreender a função de cada palavra.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">4️⃣ Análise de Significado</h4>
                  <p className="text-slate-300 text-sm">O sistema procura entender o assunto principal, contexto, intenção e significado geral.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">5️⃣ Geração de Resposta</h4>
                  <p className="text-slate-300 text-sm">O sistema produz uma saída: uma resposta, tradução, resumo, classificação ou texto novo.</p>
                </div>
              </div>

              {/* Principais Técnicas */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Principais Técnicas de NLP</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">😊 Análise de Sentimentos</h4>
                  <p className="text-slate-300 text-sm mb-2">Permite identificar emoções ou opiniões expressas em um texto.</p>
                  <p className="text-slate-400 text-xs">Avaliações de produtos • Comentários em redes sociais • Feedback de clientes</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">📂 Classificação de Texto</h4>
                  <p className="text-slate-300 text-sm mb-2">Categoriza automaticamente documentos e mensagens.</p>
                  <p className="text-slate-400 text-xs">Filtro de spam • Classificação de notícias • Organização de chamados</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🔍 Extração de Informações</h4>
                  <p className="text-slate-300 text-sm mb-2">Localiza dados importantes dentro de um texto.</p>
                  <p className="text-slate-400 text-xs">Nomes de pessoas • Empresas • Datas • Valores monetários</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🌐 Tradução Automática</h4>
                  <p className="text-slate-300 text-sm mb-2">Converte textos entre idiomas preservando contexto.</p>
                  <p className="text-slate-400 text-xs">Tradutores online • Legendas automáticas • Comunicação internacional</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">📄 Resumo Automático</h4>
                  <p className="text-slate-300 text-sm mb-2">Reduz textos longos mantendo as informações essenciais.</p>
                  <p className="text-slate-400 text-xs">Artigos • Relatórios • Pesquisas científicas • Contratos</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">❓ Resposta a Perguntas</h4>
                  <p className="text-slate-300 text-sm mb-2">Encontra respostas diretamente em textos ou bases de conhecimento.</p>
                  <p className="text-slate-400 text-xs">Assistentes virtuais • Chatbots • Sistemas de suporte</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🏷️ Reconhecimento de Entidades</h4>
                  <p className="text-slate-300 text-sm mb-2">Identifica elementos importantes em um texto.</p>
                  <p className="text-slate-400 text-xs">Pessoas • Empresas • Cidades • Datas • Organizações</p>
                </div>
              </div>

              {/* NLP e IA Generativa */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">NLP e a Revolução da IA Generativa</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Durante muitos anos o NLP foi utilizado principalmente para tarefas específicas como filtros de spam, tradutores, motores de busca e chatbots simples.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Mas tudo mudou com o surgimento dos Grandes Modelos de Linguagem, conhecidos como <strong>LLMs</strong>.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8">
                <p className="text-slate-300 font-semibold mb-4">Esses modelos são capazes de:</p>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Escrever textos</li>
                  <li>Responder perguntas</li>
                  <li>Criar resumos</li>
                  <li>Traduzir idiomas</li>
                  <li>Gerar código</li>
                  <li>Explicar conceitos complexos</li>
                  <li>Manter conversas longas</li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8">
                Ferramentas como ChatGPT, Claude, Gemini e Microsoft Copilot são possíveis graças aos avanços do Processamento de Linguagem Natural. Hoje, o NLP não apenas entende textos. Ele também consegue produzir textos extremamente sofisticados.
              </p>

              {/* Aplicações Práticas */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Aplicações Práticas do NLP</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🤖 Assistentes Virtuais</h4>
                  <p className="text-slate-300 text-sm">Ferramentas que interagem com usuários através da linguagem natural: Siri, Alexa, Google Assistant, ChatGPT.</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🔍 Motores de Busca</h4>
                  <p className="text-slate-300 text-sm">Os mecanismos modernos tentam compreender a intenção da pesquisa, analisando significado, contexto e relevância.</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">💬 Atendimento ao Cliente</h4>
                  <p className="text-slate-300 text-sm">Empresas utilizam NLP para automatizar respostas e acelerar atendimentos.</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">📚 Educação</h4>
                  <p className="text-slate-300 text-sm">Tutores inteligentes, correção de textos, geração de exercícios e recomendação de conteúdo.</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🏥 Saúde</h4>
                  <p className="text-slate-300 text-sm">Análise de prontuários, organização de registros médicos, pesquisa científica e apoio à tomada de decisão.</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">📱 Redes Sociais</h4>
                  <p className="text-slate-300 text-sm">Monitoramento de marcas, análise de tendências, identificação de sentimentos e detecção de conteúdos inadequados.</p>
                </div>

                <div className="bg-white/5 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">🔒 Segurança Digital</h4>
                  <p className="text-slate-300 text-sm">Detecção de phishing, identificação de fraudes, filtragem de spam e monitoramento de riscos.</p>
                </div>
              </div>

              {/* A Evolução */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">A Evolução do NLP</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                O desenvolvimento do NLP pode ser dividido em três grandes fases.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">📋 Primeira Geração</h4>
                  <p className="text-slate-300 text-sm">Baseada em regras e palavras-chave. Os sistemas seguiam instruções pré-programadas e eram limitados e pouco flexíveis.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">📊 Segunda Geração</h4>
                  <p className="text-slate-300 text-sm">Baseada em aprendizado estatístico. As máquinas passaram a aprender padrões a partir de grandes volumes de texto e o desempenho melhorou significativamente.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">🧠 Terceira Geração</h4>
                  <p className="text-slate-300 text-sm">Baseada em Deep Learning e Transformers. Essa é a tecnologia utilizada pelos modelos modernos de IA e permitiu avanços impressionantes em compreensão e geração de linguagem.</p>
                </div>
              </div>

              {/* Desafios */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Desafios do NLP</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Apesar dos avanços, ainda existem desafios importantes.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚠️ Ambiguidade</h4>
                  <p className="text-slate-300 text-sm">Uma frase pode ter vários significados, dificultando a interpretação correta.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚠️ Contexto</h4>
                  <p className="text-slate-300 text-sm">Nem sempre o contexto está explícito, tornando difícil a compreensão completa.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚠️ Idiomas e Dialetos</h4>
                  <p className="text-slate-300 text-sm">Cada idioma possui regras e particularidades próprias que precisam ser aprendidas.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚠️ Dados de Treinamento</h4>
                  <p className="text-slate-300 text-sm">Modelos dependem de grandes quantidades de dados de qualidade para funcionar bem.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚠️ Compreensão Real</h4>
                  <p className="text-slate-300 text-sm">Embora sejam extremamente avançados, os modelos atuais ainda possuem limitações para compreender o mundo como seres humanos.</p>
                </div>
              </div>

              {/* Ferramentas */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Ferramentas e Plataformas Populares</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Algumas das ferramentas mais utilizadas em NLP incluem:
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8">
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li><strong>NLTK</strong> - Biblioteca Python clássica para NLP</li>
                  <li><strong>spaCy</strong> - Biblioteca moderna e rápida para NLP</li>
                  <li><strong>Hugging Face Transformers</strong> - Modelos pré-treinados</li>
                  <li><strong>OpenAI API</strong> - Acesso a modelos como GPT-4</li>
                  <li><strong>Google Cloud Natural Language</strong> - Serviço em nuvem do Google</li>
                  <li><strong>AWS Comprehend</strong> - Serviço da Amazon para NLP</li>
                </ul>
              </div>

              {/* Futuro */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">O Futuro do Processamento de Linguagem Natural</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                O futuro aponta para sistemas cada vez mais capazes de compreender significado, contexto e intenção.
              </p>

              <div className="bg-white/5 border border-purple-500/20 rounded-lg p-6 mb-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">🔄 IA Multimodal</h4>
                  <p className="text-slate-300 text-sm">Combinação de texto, imagem, áudio e vídeo em uma única plataforma.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">👤 Personalização</h4>
                  <p className="text-slate-300 text-sm">Modelos que se adaptam às necessidades de cada usuário.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">⚡ Maior Eficiência</h4>
                  <p className="text-slate-300 text-sm">Sistemas menores, mais rápidos e acessíveis que funcionam em qualquer dispositivo.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">🔍 Transparência</h4>
                  <p className="text-slate-300 text-sm">Modelos mais explicáveis e confiáveis que permitem entender suas decisões.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-300 mb-2">💬 Interação Natural</h4>
                  <p className="text-slate-300 text-sm">Conversas cada vez mais próximas da comunicação humana.</p>
                </div>
              </div>

              {/* Conclusão */}
              <h3 className="text-xl font-bold mt-10 mb-4 text-purple-300">Conclusão</h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Sempre que você conversa com um chatbot, utiliza um tradutor automático, pede ajuda para escrever um texto ou realiza uma busca na internet, existe algum sistema de Processamento de Linguagem Natural trabalhando nos bastidores.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                O objetivo dessa tecnologia não é apenas permitir que máquinas leiam palavras. É ajudá-las a compreender significado, contexto e intenção.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Hoje o NLP está presente em assistentes virtuais, mecanismos de busca, tradutores, ferramentas de produtividade, sistemas de atendimento e nas mais modernas plataformas de Inteligência Artificial.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                E à medida que os modelos continuam evoluindo, a comunicação entre humanos e computadores tende a se tornar cada vez mais natural.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                O que antes exigia comandos complexos agora pode ser feito simplesmente conversando. E essa talvez seja uma das transformações mais importantes da história da computação.
              </p>
            </article>

            {/* CTA */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="card-hover card-ia text-center">
                <h3 className="text-xl font-bold mb-3">Pronto para começar?</h3>
                <p className="text-slate-400 mb-6">
                  Explore mais tópicos sobre IA e comece a implementar essas técnicas em seus projetos!
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
