import Link from "next/link";

export default function DevOpsDeployPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-50"></div>
        <div className="relative max-w-4xl mx-auto">
          <Link href="/programacao" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-8">
            <span>←</span>
            <span>Voltar para Programação</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            DevOps & Deploy
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
            Do Código ao Mundo Real
          </p>
          
          <p className="text-lg text-slate-400 mb-8">
            Como Colocar Suas Aplicações em Produção e Mantê-las Funcionando 24/7
          </p>
          
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-sm">⏱️ ~40 minutos de leitura</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-slate-300 leading-relaxed">
            Você já parou para pensar no que acontece depois que você termina de escrever o código?
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Você criou uma aplicação incrível. Testou localmente. Funciona perfeitamente.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Mas agora precisa colocar ela online. Precisa que milhões de pessoas acessem simultaneamente. Precisa que ela nunca caia. Precisa que ela seja rápida. Precisa que ela seja segura. Precisa que quando algo der errado, você saiba imediatamente.
          </p>
          <p className="text-blue-400 font-semibold text-lg mt-6">
            Isso é DevOps.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            DevOps é a ponte entre desenvolvimento e operações. É o conjunto de práticas, ferramentas e filosofias que transformam código em um serviço confiável, escalável e seguro.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Se desenvolvimento é criar a solução, DevOps é garantir que a solução funcione perfeitamente no mundo real.
          </p>
        </div>

        {/* O Que Você Vai Aprender */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">O Que Você Vai Aprender Neste Guia</h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>O que é DevOps</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Por que DevOps surgiu</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>A crise que criou DevOps</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>A analogia do aeroporto</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Infraestrutura como código</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Cloud Computing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Docker e Kubernetes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>CI/CD e o fluxo completo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Observabilidade em produção</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Por que o mercado valoriza DevOps</span>
            </li>
          </ul>
        </div>

        {/* O Que é DevOps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">O Que é DevOps?</h2>
          <p className="text-slate-300 leading-relaxed">
            DevOps é uma filosofia e um conjunto de práticas que une desenvolvimento e operações. Tradicionalmente, essas eram duas equipes separadas. Desenvolvedores escreviam código. Operações colocava em produção. Quando algo dava errado, cada um culpava o outro.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            DevOps elimina essa separação. Uma equipe é responsável por todo o ciclo de vida da aplicação. Desde o desenvolvimento até a produção. Desde a criação até a manutenção.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            DevOps não é apenas sobre ferramentas. É sobre mentalidade. É sobre automação. É sobre confiabilidade. É sobre velocidade. Pense em DevOps como o maestro de uma orquestra. Cada instrumento (ferramenta) tem seu papel. Mas o maestro coordena tudo para criar uma sinfonia perfeita.
          </p>
        </div>

        {/* A Crise Que Criou DevOps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">A Crise Que Criou o DevOps</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Para entender DevOps, você precisa entender por que ela surgiu.
          </p>

          <div className="bg-slate-800/30 border-l-4 border-blue-500 p-6 mb-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">O Mundo Antigo (Antes dos Anos 2000)</h3>
            <p className="text-slate-300 leading-relaxed">
              Antes dos anos 2000, software era atualizado raramente. Windows lançava uma versão a cada 2 ou 3 anos. Sistemas corporativos recebiam poucas atualizações. Quando uma atualização era feita, era um grande evento. Planejamento de meses. Testes extensivos. Janelas de manutenção. Risco alto.
            </p>
          </div>

          <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 mb-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">A Explosão da Internet</h3>
            <p className="text-slate-300 leading-relaxed">
              Depois vieram empresas como Google, Amazon, Netflix e Facebook. Essas empresas precisavam lançar código constantemente. Não a cada anos. Não a cada meses. Diariamente. Às vezes centenas de vezes por dia.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              O modelo antigo simplesmente não conseguia acompanhar.
            </p>
          </div>

          <div className="bg-slate-800/30 border-l-4 border-amber-500 p-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">A Solução: DevOps</h3>
            <p className="text-slate-300 leading-relaxed">
              DevOps surgiu como a resposta a esse dilema. A ideia era: você consegue ter ambos. Velocidade E estabilidade. Como? Através de automação. Através de testes contínuos. Através de deploy automático. Através de monitoramento contínuo.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Essa foi a revolução que DevOps trouxe.
            </p>
          </div>
        </div>

        {/* DevOps é o Aeroporto */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">DevOps é o Aeroporto</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Para entender DevOps profundamente, use esta analogia.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6">
            <p className="text-slate-300 leading-relaxed mb-4">
              Desenvolvedores constroem os aviões. Eles criam a tecnologia. Eles escrevem o código.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Mas alguém precisa:
            </p>
            <ul className="space-y-2 text-slate-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Abastecer os aviões</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Coordenar os voos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Monitorar o tráfego</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Controlar o espaço aéreo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Evitar colisões</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Lidar com emergências</span>
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed font-semibold text-blue-400">
              Esse alguém é o DevOps.
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Sem os aviões (código), nada funciona. Mas sem o aeroporto (DevOps), os aviões não conseguem decolar. Os aviões existem, mas o sistema entra em colapso.
          </p>
        </div>

        {/* Cloud Computing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">A Revolução da Computação em Nuvem</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            DevOps não seria possível sem a nuvem. E a nuvem não seria prática sem DevOps. Eles cresceram juntos.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Antes: Data Centers Próprios</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Comprar servidores físicos</li>
                <li>• Instalar em data centers</li>
                <li>• Manter infraestrutura</li>
                <li>• Escalar manualmente</li>
                <li>• Lidar com falhas</li>
                <li className="font-semibold text-amber-400 mt-3">Meses de preparação</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Depois: Cloud (AWS, Azure, GCP)</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Servidores sob demanda</li>
                <li>• Criados em minutos</li>
                <li>• Pagamento por uso</li>
                <li>• Escalabilidade automática</li>
                <li>• Confiabilidade garantida</li>
                <li className="font-semibold text-cyan-400 mt-3">Revolucionário</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            DevOps e Cloud são inseparáveis hoje. DevOps permite que você automatize a infraestrutura na nuvem. Cloud permite que DevOps escale infinitamente. Juntas, elas transformaram como software é criado e entregue.
          </p>
        </div>

        {/* Docker */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Docker: Containerização</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Uma das ferramentas mais importantes de DevOps é Docker. Docker permite que você empacote sua aplicação junto com todas as suas dependências em um "container".
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Um container é como uma caixa que contém tudo que sua aplicação precisa para funcionar.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
            <h3 className="text-blue-400 font-semibold mb-4">Por que containers?</h3>
            <p className="text-slate-300 leading-relaxed">
              Antes de Docker, você tinha que instalar manualmente: Python, Node.js, Bibliotecas específicas, Versões específicas, Configurações específicas. Tudo isso manualmente em cada servidor.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Com Docker, você cria uma imagem uma vez. E essa imagem funciona em qualquer lugar. No seu computador. No servidor de teste. No servidor de produção. Sempre igual.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3 font-semibold text-blue-400">
              "Funciona na minha máquina" deixa de ser um problema.
            </p>
          </div>
        </div>

        {/* Kubernetes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Kubernetes: Orquestração em Escala</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Quando você tem centenas de containers rodando, gerenciar manualmente fica impossível. Kubernetes resolve isso.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Kubernetes é um orquestrador de containers. Ele gerencia automaticamente: Quantos containers rodar, Onde rodar, Como distribuir o tráfego, Como fazer backup, Como recuperar de falhas.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-blue-400 font-semibold mb-4">Um Exemplo</h3>
            <p className="text-slate-300 leading-relaxed">
              Imagine que sua aplicação recebe 1 milhão de requisições por hora. Com Kubernetes, você diz: "Quero que minha aplicação sempre tenha entre 10 e 100 containers rodando."
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Kubernetes faz isso automaticamente. Quando o tráfego aumenta, ele cria mais containers. Quando o tráfego diminui, ele remove containers. Tudo automaticamente.
            </p>
          </div>
        </div>

        {/* CI/CD */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">O Fluxo Completo: CI/CD → Docker → Kubernetes → Produção</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Agora você entende as peças. Mas como tudo se conecta? Aqui está o fluxo completo:
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 font-mono text-sm mb-6">
            <div className="text-slate-300 space-y-2">
              <div>Desenvolvedor escreve código</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Faz push para GitHub</div>
              <div className="text-center text-slate-500">↓</div>
              <div>CI executa testes automáticos</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="text-blue-400">Docker cria uma imagem</div>
              <div className="text-center text-slate-500">↓</div>
              <div>CD inicia o deploy</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="text-blue-400">Kubernetes atualiza os containers</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Monitoramento acompanha tudo</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Usuário utiliza a aplicação</div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Tudo isso pode acontecer em minutos. Automaticamente. Sem intervenção humana. Sem risco. Essa é a magia de DevOps.
          </p>
        </div>

        {/* Netflix Case Study */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">O Que Acontece Quando Você Assiste Netflix?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Para entender DevOps na prática, vamos acompanhar o que acontece quando você aperta Play em um vídeo na Netflix.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 font-mono text-sm mb-6">
            <div className="text-slate-300 space-y-2">
              <div>Você aperta Play</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Frontend envia requisição</div>
              <div className="text-center text-slate-500">↓</div>
              <div>API recebe pedido</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="text-blue-400">Kubernetes escolhe container disponível</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Container consulta serviços internos</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Vídeo começa a ser transmitido</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="text-blue-400">Monitoramento acompanha tudo</div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-blue-400 font-semibold mb-4">O Resultado</h3>
            <p className="text-slate-300 leading-relaxed">
              Você aperta Play. O vídeo começa em menos de 1 segundo. Você não vê nada disso. Para você, é mágico.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Mas por trás dessa mágica está DevOps. Automação. Orquestração. Monitoramento. Escalabilidade. Confiabilidade. Tudo funcionando perfeitamente. 24/7. Para bilhões de pessoas.
            </p>
          </div>
        </div>

        {/* Escalabilidade */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Como Empresas Escalam Para Milhões de Usuários</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Uma das maiores fascinações com DevOps é como empresas conseguem escalar. Como Netflix consegue servir 250 milhões de usuários? Como Spotify consegue servir 500 milhões de usuários?
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Escalabilidade Vertical</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Comprar um servidor mais poderoso. Mais CPU. Mais memória. Mais armazenamento.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm mt-3 font-semibold text-amber-400">
                Tem limite. Eventualmente você chega ao servidor mais poderoso.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Escalabilidade Horizontal</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Comprar mais servidores. Não um servidor gigante. Mas muitos servidores pequenos.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm mt-3 font-semibold text-cyan-400">
                Sem limite. Estratégia de DevOps.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
            <h3 className="text-blue-400 font-semibold mb-4">Como Funciona Automaticamente</h3>
            <ol className="space-y-2 text-slate-300 text-sm">
              <li>1. Monitoramento detecta aumento</li>
              <li>2. Alertas são disparados</li>
              <li>3. Kubernetes cria mais containers</li>
              <li>4. Tráfego é distribuído</li>
              <li>5. Performance é mantida</li>
            </ol>
            <p className="text-slate-300 leading-relaxed text-sm mt-4 font-semibold text-blue-400">
              Tudo automaticamente. Sem intervenção humana.
            </p>
          </div>

          <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">O Exemplo da Netflix na Black Friday</h3>
            <p className="text-slate-300 leading-relaxed">
              Na Black Friday, Netflix recebe 10x mais tráfego que o normal. Sem DevOps, o sistema colapsaria. Com DevOps: Kubernetes detecta aumento, cria 100x mais containers, distribui o tráfego, performance é mantida, usuários não percebem nada.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Depois que a Black Friday passa: Tráfego diminui, Kubernetes detecta diminuição, remove containers desnecessários, economiza custos.
            </p>
          </div>
        </div>

        {/* SRE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">DevOps e SRE: A Evolução</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            DevOps foi revolucionário. Mas conforme sistemas ficaram mais complexos, um novo conceito surgiu. Site Reliability Engineering (SRE).
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
            <h3 className="text-blue-400 font-semibold mb-4">O Que é SRE?</h3>
            <p className="text-slate-300 leading-relaxed">
              SRE é uma evolução natural de DevOps. Enquanto DevOps foca em automação e deploy contínuo, SRE foca em confiabilidade.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              O Google criou o conceito. Conforme o Google crescia, eles perceberam que precisavam de uma abordagem mais estruturada. Não apenas colocar código em produção. Mas garantir que o código funcione perfeitamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">DevOps</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Como colocar código em produção</li>
                <li>• Velocidade</li>
                <li>• Automação de deploy</li>
                <li>• CI/CD</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">SRE</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Como manter código em produção</li>
                <li>• Confiabilidade</li>
                <li>• Observabilidade</li>
                <li>• Resposta a incidentes</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            DevOps entrega código rápido. SRE garante que o código funciona. Eles trabalham juntos. Hoje, grandes empresas têm times de SRE. Netflix, Google, Uber, Amazon. SRE é o futuro de como software é operado.
          </p>
        </div>

        {/* Observabilidade */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Como Saber o Que Está Acontecendo em Produção?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Colocar código em produção é apenas o começo. Você precisa saber o que está acontecendo. DevOps moderno gira em torno de observabilidade.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 font-semibold mb-3">Logs</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Registros detalhados do que acontece em cada etapa. Quando um usuário clica em um botão, um log é criado. Quando a aplicação consulta o banco de dados, um log é criado. Logs permitem que você entenda exatamente o que aconteceu.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 font-semibold mb-3">Métricas</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Números que mostram como a aplicação está performando. Quantas requisições por segundo? Qual o tempo de resposta? Qual o uso de CPU? Métricas permitem que você veja tendências.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 font-semibold mb-3">Traces</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Rastreamento de uma requisição através de todo o sistema. Um trace mostra todo esse caminho. Permite que você veja onde o tempo está sendo gasto.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-blue-400 font-semibold mb-3">Dashboards e Alertas</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                Logs, métricas e traces são combinados em dashboards. Dashboards mostram visualmente o que está acontecendo. Se algo sair do normal, um alerta é disparado. Você é notificado imediatamente.
              </p>
            </div>
          </div>
        </div>

        {/* Por Que o Mercado Valoriza DevOps */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Por Que o Mercado Valoriza DevOps Tanto?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            DevOps é uma das áreas que mais crescem em tecnologia. Mas por que?
          </p>

          <div className="bg-slate-800/30 border-l-4 border-amber-500 p-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">O Impacto de um Erro</h3>
            <p className="text-slate-300 leading-relaxed">
              Um erro no frontend pode incomodar um usuário. Um erro em DevOps pode derrubar: Netflix para milhões de pessoas, Um banco digital para milhões de clientes, Uma loja virtual para milhões de compradores.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Quando Netflix cai, a empresa perde milhões de dólares em minutos. Quando um banco cai, clientes não conseguem acessar suas contas. Quando uma loja virtual cai, vendas desaparecem.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3 font-semibold text-blue-400">
              Por isso o mercado valoriza profissionais de DevOps tanto.
            </p>
          </div>
        </div>

        {/* Conclusão */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Conclusão</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            DevOps é muito mais do que ferramentas. É uma mentalidade. É sobre automatizar. É sobre confiabilidade. É sobre velocidade. É sobre segurança.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            DevOps transformou como software é criado e entregue. Antes de DevOps, deploy era um evento arriscado. Depois de DevOps, deploy é um processo automático e confiável.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Se você quer trabalhar em tecnologia moderna, DevOps é uma habilidade essencial. Não apenas para especialistas em infraestrutura. Mas para qualquer desenvolvedor que quer entender como suas aplicações funcionam em produção.
          </p>
          <p className="text-slate-300 leading-relaxed">
            DevOps transforma código em serviço. E serviço em experiência para o usuário. Aprender DevOps é investir em uma carreira em tecnologia.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-lg p-8 text-center">
          <p className="text-slate-300 mb-6">
            Pronto para dominar DevOps?
          </p>
          <Link href="/programacao" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
            Voltar para Programação
          </Link>
        </div>
      </section>
    </div>
  );
}