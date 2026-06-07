import Link from "next/link";

export default function PythonPage() {
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
            Python
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
            A Linguagem Que Está Mudando o Mundo
          </p>
          
          <p className="text-lg text-slate-400 mb-8">
            De Uma Linguagem Simples para Iniciantes à Ferramenta Mais Poderosa da Tecnologia Moderna
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
            Você já parou para pensar em como a Netflix recomenda filmes?
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Como o Spotify sugere músicas?
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Como cientistas analisam bilhões de dados genéticos?
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Como empresas treinam modelos de Inteligência Artificial capazes de conversar, traduzir textos e gerar imagens?
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Apesar de parecerem áreas completamente diferentes, existe algo em comum entre elas.
          </p>
          <p className="text-blue-400 font-semibold text-lg mt-6">
            Python.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Essa linguagem está presente em praticamente todas as grandes revoluções tecnológicas das últimas décadas. Ela ajuda empresas a analisar dados. Automatiza processos. Constrói aplicações web. Controla sistemas complexos. E impulsiona a Inteligência Artificial moderna.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Mas Python não nasceu como uma linguagem para IA. Nem para ciência de dados. Na verdade, ela começou como um projeto pessoal de um programador que acreditava que programar deveria ser mais simples.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Essa simplicidade acabou transformando Python na linguagem mais popular do mundo.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Neste guia você entenderá por que Python conquistou milhões de desenvolvedores, quais problemas ela resolve e por que aprender Python pode abrir portas para praticamente qualquer área da tecnologia.
          </p>
        </div>

        {/* O Que Você Vai Aprender */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">O Que Você Vai Aprender Neste Guia</h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>O que é Python</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Como Python conquistou o mundo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Por que Python é tão popular</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Como Python funciona</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>O poder do ecossistema Python</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Sintaxe básica e legibilidade</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Python e Inteligência Artificial</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Python no mercado</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Como começar com Python</span>
            </li>
          </ul>
        </div>

        {/* O Que é Python */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">O Que é Python?</h2>
          <p className="text-slate-300 leading-relaxed">
            Python é uma linguagem de programação de alto nível. Isso significa que ela esconde muitos detalhes técnicos complexos do computador. Você escreve instruções de forma simples. E Python se encarrega de traduzir essas instruções para algo que o computador consiga executar.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Python também é uma linguagem interpretada. Você escreve o código. Executa imediatamente. E vê o resultado quase instantaneamente. Isso torna o desenvolvimento muito mais rápido e agradável.
          </p>
        </div>

        {/* Como Python Conquistou o Mundo */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Como Python Conquistou o Mundo</h2>
          <p className="text-slate-300 leading-relaxed">
            Durante muitos anos, linguagens como C, C++ e Java dominavam a programação. Elas eram extremamente poderosas. Mas também exigiam muito conhecimento técnico. Criar programas simples frequentemente exigia dezenas de linhas de código.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Python apareceu oferecendo uma proposta diferente. Ela priorizava o programador. Não a máquina. A ideia era simples: <span className="text-blue-400 italic">"Código deve ser fácil de escrever, fácil de ler e fácil de manter."</span>
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Enquanto outras linguagens exigiam muita complexidade, Python permitia resolver problemas com muito menos esforço.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Mas a verdadeira conquista de Python começou quando a tecnologia mudou.
          </p>
          
          <div className="bg-slate-800/30 border-l-4 border-blue-500 p-6 mt-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">A Explosão da Ciência de Dados</h3>
            <p className="text-slate-300 leading-relaxed">
              No início dos anos 2000, empresas começaram a acumular dados em escala nunca vista. Netflix tinha milhões de filmes assistidos. Spotify tinha bilhões de músicas ouvidas. Google tinha bilhões de buscas por dia.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Essas empresas perceberam algo crucial: os dados continham padrões. E esses padrões poderiam ser usados para tomar melhores decisões.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Python já possuía NumPy e Pandas. Bibliotecas criadas especificamente para análise de dados. Enquanto outras linguagens precisavam ser adaptadas, Python já estava pronta.
            </p>
          </div>

          <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 mt-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">A Explosão da Inteligência Artificial</h3>
            <p className="text-slate-300 leading-relaxed">
              Depois veio a IA. Pesquisadores começaram a treinar redes neurais profundas. Modelos com bilhões de parâmetros. Isso exigia uma linguagem que permitisse testar ideias rapidamente.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Python era perfeita para isso. E quando TensorFlow e PyTorch foram criados, foram criados em Python. Isso criou um ciclo de feedback positivo.
            </p>
          </div>

          <div className="bg-slate-800/30 border-l-4 border-blue-500 p-6 mt-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">O Ciclo Acelerou</h3>
            <p className="text-slate-300 leading-relaxed">
              Quando você combina pesquisadores usando Python para IA, cientistas de dados usando Python para análise, universidades ensinando Python, e empresas contratando especialistas em Python, você cria um ciclo praticamente impossível de parar.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Mais pessoas aprendem Python. Mais bibliotecas são criadas. Mais problemas podem ser resolvidos. Mais pessoas adotam Python.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Esse é o motivo pelo qual Python se tornou a linguagem mais popular do mundo. Não apenas por causa da linguagem em si. Mas porque estava no lugar certo, na hora certa, com as ferramentas certas.
            </p>
          </div>
        </div>

        {/* Por Que Python É Tão Popular */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Por Que Python É Tão Popular?</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Simplicidade</h3>
              <p className="text-slate-300 leading-relaxed">
                Python foi projetada para ser fácil de aprender. Sua sintaxe é limpa. Seu código é legível. Muitas vezes parece quase uma linguagem humana. Isso permite que iniciantes aprendam rapidamente. E que profissionais escrevam sistemas mais fáceis de manter.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Versatilidade</h3>
              <p className="text-slate-300 leading-relaxed">
                Python está presente em praticamente todos os setores da tecnologia. Você pode usar Python para desenvolvimento web, automação, ciência de dados, inteligência artificial, segurança, computação científica e robótica. Poucas linguagens possuem essa flexibilidade.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Comunidade</h3>
              <p className="text-slate-300 leading-relaxed">
                Python possui milhões de usuários ao redor do mundo. Isso significa mais documentação, mais bibliotecas, mais tutoriais e mais oportunidades de aprendizado. Quando você encontra um problema, provavelmente alguém já encontrou antes.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Produtividade</h3>
              <p className="text-slate-300 leading-relaxed">
                Com menos código você consegue produzir mais resultados. Isso reduz custos, acelera projetos e aumenta a produtividade das equipes.
              </p>
            </div>
          </div>
        </div>

        {/* Como Python Funciona */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Como Python Funciona</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Quando você executa um programa Python, várias etapas acontecem nos bastidores. Primeiro, Python lê seu código. Depois transforma esse código em uma representação intermediária chamada bytecode. Em seguida, a Máquina Virtual Python executa essas instruções.
          </p>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6 font-mono text-sm">
            <div className="text-slate-300 space-y-2">
              <div>Você escreve o código</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Python lê o arquivo</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Transforma em bytecode</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Máquina Virtual Python executa</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Bibliotecas são carregadas</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Resultado é produzido</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Usuário vê a saída</div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Você não precisa decorar essas etapas. Mas entender esse fluxo ajuda a compreender como a linguagem funciona.
          </p>
        </div>

        {/* O Verdadeiro Poder de Python: Seu Ecossistema */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">O Verdadeiro Poder de Python: Seu Ecossistema</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Muitas pessoas acreditam que Python se tornou popular apenas por causa da sintaxe. Mas isso é apenas parte da história. O verdadeiro diferencial está no seu ecossistema.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">A Oficina de Ferramentas</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Imagine que uma linguagem é uma oficina. A linguagem é o espaço de trabalho. As bibliotecas são as ferramentas. Quanto mais ferramentas você possui, mais problemas consegue resolver.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Python possui ferramentas para praticamente tudo. Não é apenas uma oficina. É uma oficina com praticamente todas as ferramentas que você poderia precisar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h4 className="text-blue-400 font-semibold mb-3">Para Análise de Dados:</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• <span className="font-semibold">NumPy</span> - Computação numérica</li>
                <li>• <span className="font-semibold">Pandas</span> - Manipulação de dados</li>
                <li>• <span className="font-semibold">Matplotlib</span> - Visualização</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h4 className="text-blue-400 font-semibold mb-3">Para Machine Learning:</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• <span className="font-semibold">TensorFlow</span> - Deep Learning</li>
                <li>• <span className="font-semibold">PyTorch</span> - Pesquisa em IA</li>
                <li>• <span className="font-semibold">Scikit-Learn</span> - ML clássico</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h4 className="text-blue-400 font-semibold mb-3">Para Desenvolvimento Web:</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• <span className="font-semibold">Django</span> - Apps web completas</li>
                <li>• <span className="font-semibold">Flask</span> - Apps web leves</li>
                <li>• <span className="font-semibold">FastAPI</span> - APIs modernas</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h4 className="text-blue-400 font-semibold mb-3">Para Automação:</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• <span className="font-semibold">Selenium</span> - Automação web</li>
                <li>• <span className="font-semibold">Beautiful Soup</span> - Web scraping</li>
                <li>• <span className="font-semibold">Requests</span> - HTTP</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mt-6">
            Isso significa que você raramente precisa começar do zero. Na maioria dos casos alguém já criou uma biblioteca pronta para ajudar. Esse é um dos maiores motivos do sucesso da linguagem. Python não venceu apenas porque é simples. Python venceu porque possui um dos maiores ecossistemas de bibliotecas já criados.
          </p>
        </div>

        {/* Sintaxe Básica */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Sintaxe Básica e Legibilidade</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Uma das características mais famosas de Python é sua legibilidade. Veja este exemplo:
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 font-mono text-sm mb-6 overflow-x-auto">
            <div className="text-slate-300">
              <div className="text-amber-400">usuarios</div>
              <div className="text-slate-400"> = ["João", "Maria", "Pedro"]</div>
              <div></div>
              <div className="text-blue-400">for</div>
              <div className="text-slate-400"> usuario </div>
              <div className="text-blue-400">in</div>
              <div className="text-slate-400"> usuarios:</div>
              <div className="text-slate-400">    </div>
              <div className="text-blue-400">print</div>
              <div className="text-slate-400">(</div>
              <div className="text-green-400">{`f"Olá, {usuario}!"`}</div>
              <div className="text-slate-400">)</div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Mesmo alguém sem experiência consegue entender o que está acontecendo. Essa clareza foi uma decisão intencional dos criadores da linguagem. A ideia é que o código seja lido como um texto organizado. Porque, na prática, programadores passam muito mais tempo lendo código do que escrevendo.
          </p>
        </div>

        {/* Projeto Real */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Projeto Real: Automatizando uma Tarefa Repetitiva</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Imagine que uma empresa precise organizar centenas de arquivos diariamente.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
            <h3 className="text-blue-400 font-semibold mb-4">Manualmente:</h3>
            <ul className="space-y-2 text-slate-300 mb-4">
              <li>• Abrir pasta</li>
              <li>• Renomear arquivos</li>
              <li>• Mover documentos</li>
              <li>• Organizar diretórios</li>
            </ul>
            <p className="text-slate-300"><span className="font-semibold">Tempo gasto:</span> 2 horas por dia</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
            <h3 className="text-blue-400 font-semibold mb-4">Com Python:</h3>
            <p className="text-slate-300 mb-4">Um script executa tudo em segundos.</p>
            <p className="text-slate-300 mb-2"><span className="font-semibold">Economiza:</span></p>
            <ul className="space-y-1 text-slate-300">
              <li>• 2 horas por dia</li>
              <li>• 10 horas por semana</li>
              <li>• 40 horas por mês</li>
              <li>• 480 horas por ano</li>
            </ul>
            <p className="text-slate-300 mt-4">Para uma empresa com 50 funcionários fazendo a mesma tarefa, isso representa <span className="font-semibold">24.000 horas economizadas por ano</span>. Isso é aproximadamente 12 pessoas trabalhando em tempo integral.</p>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Esse é um dos maiores motivos pelos quais empresas adotam Python. Ela transforma tarefas repetitivas em processos automáticos. Economizando tempo, dinheiro e esforço.
          </p>
        </div>

        {/* Python na Pilha Tecnológica */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Python na Pilha Tecnológica Completa</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Python não funciona isoladamente. Ele é parte de um ecossistema maior. Quando você abre um aplicativo de banco, por exemplo:
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 font-mono text-sm mb-6">
            <div className="text-slate-300 space-y-2">
              <div>Você clica em "Consultar Saldo"</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Frontend (JavaScript/React) coleta a ação</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Envia para API</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="text-blue-400 font-semibold">Backend em Python recebe a solicitação</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="text-blue-400 font-semibold">Python consulta o Banco de Dados</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Banco retorna os dados</div>
              <div className="text-center text-slate-500">↓</div>
              <div className="text-blue-400 font-semibold">Python processa e retorna resposta</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Frontend recebe a resposta</div>
              <div className="text-center text-slate-500">↓</div>
              <div>Você vê seu saldo na tela</div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-4">
            Python é o maestro orquestrando tudo isso. Recebendo solicitações do frontend. Comunicando com bancos de dados. Integrando com APIs externas. Processando dados. Retornando respostas.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Essa é a verdadeira força de Python. Não é apenas a linguagem. É como ela se conecta com tudo mais.
          </p>
        </div>

        {/* Por Que a IA Escolheu Python */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Por Que a IA Escolheu Python?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Imagine um pesquisador desenvolvendo um modelo com bilhões de parâmetros. Ele não quer gastar tempo lutando contra a linguagem. Ele quer gastar tempo resolvendo problemas.
          </p>

          <div className="bg-slate-800/30 border-l-4 border-blue-500 p-6 mb-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">O Problema da Velocidade de Iteração</h3>
            <p className="text-slate-300 leading-relaxed">
              Na pesquisa de IA, a velocidade é crítica. Um pesquisador pode ter uma ideia na segunda-feira. Precisa testá-la na quarta-feira. E apresentar resultados na sexta-feira.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Isso é impossível em linguagens que exigem compilação e configuração complexa. Python permite que ideias complexas sejam expressas com poucas linhas de código. Você escreve. Executa. Vê o resultado. Itera. Tudo em minutos.
            </p>
          </div>

          <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 mb-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">O Ecossistema Científico</h3>
            <p className="text-slate-300 leading-relaxed">
              Quando pesquisadores começaram a trabalhar com deep learning, criaram bibliotecas em Python. TensorFlow foi criado pelo Google em Python. PyTorch foi criado pelo Facebook em Python. Scikit-Learn foi criado pela comunidade em Python.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Por que Python? Porque Python permite que pesquisadores se concentrem na pesquisa, não na programação.
            </p>
          </div>

          <div className="bg-slate-800/30 border-l-4 border-blue-500 p-6 mb-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">O Ciclo de Feedback Positivo</h3>
            <p className="text-slate-300 leading-relaxed">
              À medida que a Inteligência Artificial cresceu, Python cresceu junto. Mais pesquisadores usavam Python. Mais bibliotecas eram criadas em Python. Mais pesquisadores adotavam Python.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              A explosão da IA e a explosão de Python aconteceram juntas. Hoje é difícil encontrar uma área importante da IA moderna que não utilize Python. ChatGPT foi treinado usando Python. Gemini foi treinado usando Python. Claude foi treinado usando Python. Praticamente todos os modelos de IA modernos foram treinados em Python.
            </p>
          </div>

          <div className="bg-slate-800/30 border-l-4 border-amber-500 p-6 rounded">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">Mas e a Velocidade?</h3>
            <p className="text-slate-300 leading-relaxed">
              Alguém pode perguntar: se Python é mais lenta que C++, por que continua dominando?
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              A resposta é sofisticada. Python não é usada para as partes mais críticas que exigem velocidade máxima. Essas partes são escritas em C ou C++. Mas Python atua como a camada de orquestração. Ela coordena tudo. Chama as funções rápidas em C quando necessário.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Em 99% dos casos, a produtividade ganha com Python supera qualquer perda de velocidade. Um pesquisador que consegue testar 10 ideias por dia em Python é muito mais eficiente do que um que consegue testar 2 ideias por dia em C++.
            </p>
            <p className="text-slate-300 leading-relaxed mt-3">
              Essa é a verdadeira razão pela qual Python continua dominando.
            </p>
          </div>
        </div>

        {/* Python no Mercado */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Python no Mercado</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Python está entre as linguagens mais requisitadas do mercado. Ela é utilizada por empresas como Google, Netflix, Spotify, Uber e Instagram.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Profissionais que dominam Python frequentemente atuam em áreas de alto crescimento como Inteligência Artificial, Ciência de Dados, Desenvolvimento Backend e Automação.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Essa combinação mantém Python entre as habilidades mais valorizadas da indústria.
          </p>
        </div>

        {/* A Transformação Que Python Oferece */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">A Transformação Que Python Oferece</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Lembre-se da analogia da oficina. Python é a oficina. Mas quando você aprende Python, você não apenas ganha acesso à oficina. Você se torna o mestre da oficina.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Aprender Python não significa apenas aprender uma linguagem de programação. Significa adquirir uma ferramenta capaz de automatizar trabalho repetitivo. Analisar dados que outras pessoas não conseguem entender. Criar aplicações que resolvem problemas reais. E participar das maiores revoluções tecnológicas da atualidade.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-8 mb-6">
            <p className="text-slate-300 leading-relaxed mb-6 font-semibold">Um programador que domina Python pode:</p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Automatizar 40 horas de trabalho manual em um script de 50 linhas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Analisar bilhões de dados e encontrar padrões invisíveis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Treinar modelos de IA que competem com especialistas humanos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Construir aplicações web utilizadas por milhões de pessoas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Trabalhar em startups que valem bilhões de dólares</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Contribuir para pesquisa científica que muda o mundo</span>
              </li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-6 font-semibold text-blue-400">
              Python é a chave que abre todas essas portas.
            </p>
          </div>
        </div>

        {/* Conclusão */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Conclusão</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Python é muito mais do que uma linguagem de programação. Ela se tornou uma plataforma que conecta algumas das áreas mais importantes da tecnologia moderna.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Com ela você pode automatizar tarefas. Criar aplicações web. Analisar dados. Treinar modelos de Inteligência Artificial. E desenvolver soluções utilizadas por milhões de pessoas.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Python conquistou o mundo porque conseguiu algo raro. Ser simples para iniciantes. E poderosa para especialistas. Por isso ela continua crescendo ano após ano.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Se você quer entrar no universo da programação, Python é um dos melhores pontos de partida.
          </p>
          <p className="text-slate-300 leading-relaxed">
            E se pretende trabalhar com dados, automação ou Inteligência Artificial, aprender Python não é apenas uma vantagem. É uma das habilidades mais valiosas que você pode desenvolver.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-lg p-8 text-center">
          <p className="text-slate-300 mb-6">
            Pronto para começar sua jornada com Python?
          </p>
          <Link href="/programacao" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
            Voltar para Programação
          </Link>
        </div>
      </section>
    </div>
  );
}