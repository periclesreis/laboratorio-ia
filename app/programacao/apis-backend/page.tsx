import Link from "next/link";


export default function ApisBackendPage() {
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
              APIs & Backend
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Construa Servidores Profissionais e Comunique com Suas Aplicações
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Tempo de leitura: ~40 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert max-w-none">
              <div className="space-y-8">
                {/* Introdução */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Do Servidor Simples ao Sistema de Backend Escalável</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Você já parou para pensar no que acontece quando você clica em um botão em uma aplicação web? A interface responde quase instantaneamente. Os dados aparecem na tela. Uma compra é concluída. Uma mensagem é enviada. Um vídeo começa a ser reproduzido.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Mas por trás daquele clique existe uma enorme cadeia de eventos acontecendo. Uma solicitação é enviada para um servidor. O servidor processa a informação. Consulta bancos de dados. Executa regras de negócio. Valida permissões. E retorna uma resposta. Tudo isso em poucos milissegundos.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Esse servidor que recebe e processa as solicitações é chamado de backend. E a principal forma de comunicação entre aplicações modernas acontece através das APIs.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    <strong>Se os bancos de dados são a memória das aplicações, os backends são o cérebro. E as APIs são o sistema nervoso que conecta tudo.</strong>
                  </p>
                </div>

                {/* O Que Você Vai Aprender */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">O Que Você Vai Aprender Neste Guia</h2>
                  <ul className="space-y-2 text-slate-300">
                    <li>✓ O que é um backend</li>
                    <li>✓ Por que backends são importantes</li>
                    <li>✓ O que é uma API</li>
                    <li>✓ Como os sistemas conversavam antes das APIs</li>
                    <li>✓ O problema que as APIs resolvem</li>
                    <li>✓ Arquitetura cliente-servidor</li>
                    <li>✓ APIs RESTful e métodos HTTP</li>
                    <li>✓ Autenticação e autorização</li>
                    <li>✓ Frameworks populares</li>
                    <li>✓ APIs e Inteligência Artificial</li>
                  </ul>
                </div>

                {/* O Que é um Backend */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">O Que é um Backend?</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Um backend é a parte da aplicação que roda no servidor. Ele é responsável por receber solicitações, processar dados, executar regras de negócio, comunicar com bancos de dados e retornar respostas.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Enquanto o frontend é aquilo que o usuário vê e interage, o backend é responsável por fazer tudo funcionar nos bastidores.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    <strong>Pense no backend como o centro de comando da aplicação: é ele quem toma decisões, aplica regras e coordena toda a comunicação entre usuários, bancos de dados e serviços externos.</strong>
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Por exemplo, quando você faz uma compra em uma loja virtual:
                  </p>
                  <ul className="space-y-3 text-slate-300 mt-4">
                    <li><strong>Frontend:</strong> Exibe os produtos, mostra o carrinho, exibe o formulário de pagamento</li>
                    <li><strong>Backend:</strong> Valida o pedido, processa o pagamento, atualiza o estoque, registra a compra, envia confirmações</li>
                  </ul>
                </div>

                {/* Por Que São Importantes */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">Por Que Backends São Importantes?</h2>
                  <ul className="space-y-3 text-slate-300">
                    <li><strong>Segurança:</strong> Informações sensíveis como senhas, tokens e chaves de API ficam protegidas no servidor.</li>
                    <li><strong>Performance:</strong> Tarefas pesadas como análise de dados e processamento de imagens são muito mais eficientes no servidor.</li>
                    <li><strong>Escalabilidade:</strong> Um servidor pode atender milhares ou milhões de usuários simultaneamente.</li>
                    <li><strong>Controle:</strong> O backend centraliza as regras da aplicação, garantindo consistência e integridade dos dados.</li>
                  </ul>
                </div>

                {/* O Problema Resolvido */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">O Problema Que APIs Resolvem</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Imagine um aplicativo bancário. Se toda a lógica estivesse no navegador do usuário, o saldo poderia ser alterado manualmente, transferências poderiam ser falsificadas e pagamentos poderiam ser manipulados. Seria um caos.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Por isso existe o backend. Ele centraliza todas as regras importantes. Sempre que o usuário tenta realizar uma ação, o backend verifica se aquela operação é válida.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    As APIs surgiram justamente para criar um canal seguro de comunicação entre os sistemas e esse backend.
                  </p>
                </div>

                {/* Arquitetura Cliente-Servidor */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Arquitetura Cliente-Servidor</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Praticamente toda aplicação moderna utiliza a arquitetura cliente-servidor. Nela existem dois participantes principais:
                  </p>
                  <ul className="space-y-3 text-slate-300 mb-4">
                    <li><strong>Cliente:</strong> É a aplicação utilizada pelo usuário (navegador, aplicativo mobile, software desktop)</li>
                    <li><strong>Servidor:</strong> É o sistema responsável por processar as solicitações</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    O fluxo básico funciona assim: Cliente → Servidor → Banco de Dados → Servidor → Cliente. Esse modelo permite que milhares de clientes utilizem o mesmo sistema simultaneamente.
                  </p>
                </div>

                {/* O Que é uma API */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">O Que é uma API?</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    API significa Application Programming Interface. Uma API é uma ponte de comunicação entre sistemas. Ela define como uma aplicação pode solicitar informações ou executar ações em outra aplicação.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Imagine um restaurante. Você não entra na cozinha para preparar sua comida. Você faz seu pedido ao garçom. O garçom leva o pedido para a cozinha. A cozinha prepara a refeição. E o garçom traz a resposta.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    A API funciona exatamente dessa maneira. Ela recebe solicitações, encaminha para o backend, recebe os resultados e devolve uma resposta para quem fez o pedido.
                  </p>
                </div>

                {/* Como Era Antes */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Como os Sistemas Conversavam Antes das APIs?</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Imagine uma empresa que possui site, aplicativo móvel, sistema interno e plataforma de parceiros. Todos precisam acessar os mesmos dados.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Sem APIs, cada sistema precisaria criar conexões próprias com bancos de dados e regras internas. Isso gera duplicação de código, inconsistência de dados, problemas de segurança e manutenção complicada.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    As APIs resolveram esse problema. Elas criam um ponto central de comunicação. A API se torna uma espécie de recepcionista inteligente que recebe solicitações, verifica permissões, executa regras e entrega respostas. Esse modelo sustenta praticamente toda a internet moderna.
                  </p>
                </div>

                {/* REST */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">APIs RESTful</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    REST significa Representational State Transfer. É o padrão mais popular para construção de APIs. Uma API REST utiliza URLs para representar recursos e métodos HTTP para representar ações.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Por exemplo:
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg my-4 border border-slate-700">
                    <code className="text-emerald-400 text-sm">
                      GET /usuarios<br/>
                      GET /usuarios/1<br/>
                      POST /usuarios<br/>
                      PUT /usuarios/1<br/>
                      DELETE /usuarios/1
                    </code>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    REST se tornou popular porque segue a própria lógica da web. Ele é simples, organizado, fácil de aprender, fácil de documentar e compatível com qualquer linguagem.
                  </p>
                </div>

                {/* Métodos HTTP */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Métodos HTTP</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    HTTP é o protocolo responsável pela comunicação na internet. Os métodos mais importantes são:
                  </p>
                  <ul className="space-y-3 text-slate-300">
                    <li><strong>GET:</strong> Obtém informações (GET /usuarios)</li>
                    <li><strong>POST:</strong> Cria novos dados (POST /usuarios)</li>
                    <li><strong>PUT:</strong> Atualiza dados existentes (PUT /usuarios/1)</li>
                    <li><strong>DELETE:</strong> Remove dados (DELETE /usuarios/1)</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Esses quatro métodos formam a base da maioria das APIs modernas.
                  </p>
                </div>

                {/* Roteamento */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Roteamento</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Roteamento é o mecanismo que permite ao servidor identificar qual função deve ser executada. Quando uma solicitação chega, o backend analisa a URL e o método HTTP, e direciona para a função correta. Isso permite que cada rota represente uma funcionalidade específica da aplicação.
                  </p>
                </div>

                {/* Projeto Real: Blog */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">Projeto Real: Construindo uma API de Blog</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Imagine que você está desenvolvendo uma plataforma de blog. Você precisará de recursos para:
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li><strong>Usuários:</strong> Criar contas, atualizar perfis, gerenciar permissões</li>
                    <li><strong>Posts:</strong> Criar artigos, editar conteúdos, publicar textos</li>
                    <li><strong>Comentários:</strong> Adicionar comentários, moderar conteúdo, remover mensagens</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Cada recurso possui suas próprias rotas. Esse padrão torna a API previsível e fácil de manter.
                  </p>
                </div>

                {/* Projeto Real: Login */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Projeto Real: O Que Acontece Quando Você Faz Login?</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    O login é um dos melhores exemplos para entender o funcionamento de uma API. Quando você digita email e senha:
                  </p>
                  <ol className="space-y-2 text-slate-300 mb-4">
                    <li>1. O frontend envia os dados para a API.</li>
                    <li>2. A API recebe a solicitação.</li>
                    <li>3. O backend consulta o banco de dados.</li>
                    <li>4. O sistema verifica a senha.</li>
                    <li>5. Um token JWT é gerado.</li>
                    <li>6. O token retorna para o usuário.</li>
                    <li>7. O usuário é autenticado.</li>
                  </ol>
                  <p className="text-slate-300 leading-relaxed">
                    Tudo isso geralmente acontece em menos de um segundo. Esse fluxo é utilizado por praticamente todas as aplicações modernas.
                  </p>
                </div>

                {/* Autenticação e Autorização */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Autenticação e Autorização</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Esses conceitos costumam ser confundidos, mas possuem funções diferentes:
                  </p>
                  <ul className="space-y-3 text-slate-300 mb-4">
                    <li><strong>Autenticação:</strong> Responde "Quem é você?" - confirma a identidade</li>
                    <li><strong>Autorização:</strong> Responde "O que você pode fazer?" - verifica permissões</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    A tecnologia mais utilizada atualmente é o JWT (JSON Web Token). Ele permite identificar usuários de forma segura sem consultar o banco de dados a cada solicitação.
                  </p>
                </div>

                {/* Validação */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Validação de Dados</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Nunca confie nos dados recebidos do cliente. Mesmo que o frontend valide informações, o backend deve validar novamente.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Por exemplo: emails válidos, senhas fortes, campos obrigatórios, limites de tamanho. A validação protege o sistema contra erros e ataques.
                  </p>
                </div>

                {/* Tratamento de Erros */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tratamento de Erros</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Sistemas profissionais precisam falhar de forma controlada. Uma API deve retornar mensagens claras quando algo dá errado.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Por exemplo: Usuário não encontrado, Senha inválida, Acesso negado, Recurso inexistente. Isso facilita o desenvolvimento e melhora a experiência do usuário.
                  </p>
                </div>

                {/* Frameworks */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">Frameworks Populares</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Os frameworks surgiram para simplificar a construção de backends:
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li><strong>Express (Node.js):</strong> Criado para tornar a criação de servidores simples e rápida</li>
                    <li><strong>Fastify (Node.js):</strong> Focado em alta performance</li>
                    <li><strong>NestJS (Node.js):</strong> Projetado para aplicações grandes e escaláveis</li>
                    <li><strong>Flask (Python):</strong> Minimalista e flexível</li>
                    <li><strong>Django (Python):</strong> Criado para acelerar o desenvolvimento de aplicações completas</li>
                    <li><strong>FastAPI (Python):</strong> Projetado para construir APIs modernas e extremamente rápidas</li>
                  </ul>
                </div>

                {/* Bancos de Dados */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Bancos de Dados e Backend</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    O backend é responsável por intermediar o acesso ao banco de dados. O fluxo geralmente acontece assim:
                  </p>
                  <ol className="space-y-2 text-slate-300">
                    <li>1. Cliente faz solicitação</li>
                    <li>2. Backend recebe</li>
                    <li>3. Banco de dados é consultado</li>
                    <li>4. Dados são processados</li>
                    <li>5. Resposta retorna ao cliente</li>
                  </ol>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Essa camada intermediária aumenta segurança e organização.
                  </p>
                </div>

                {/* Escalabilidade */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Escalabilidade</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    À medida que o número de usuários cresce, o backend precisa acompanhar. Existem várias estratégias:
                  </p>
                  <ul className="space-y-3 text-slate-300">
                    <li><strong>Escalabilidade Vertical:</strong> Mais CPU, mais memória, mais recursos</li>
                    <li><strong>Escalabilidade Horizontal:</strong> Mais servidores, mais capacidade de atendimento</li>
                    <li><strong>Cache:</strong> Armazena respostas frequentes, reduz trabalho do banco de dados</li>
                    <li><strong>Filas:</strong> Processam tarefas pesadas em segundo plano, muito utilizadas em sistemas de grande porte</li>
                  </ul>
                </div>

                {/* IA */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">APIs e Inteligência Artificial</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    A Inteligência Artificial está mudando a forma como desenvolvemos software. Hoje ferramentas como ChatGPT podem gerar código de APIs e backends em segundos.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>APIs São a Ponte Entre IA e Aplicações</strong>
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Quando você conversa com um chatbot moderno: o frontend envia sua mensagem, o backend recebe, o backend chama uma API de IA, o modelo processa a solicitação, a resposta retorna ao usuário.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Grande parte da revolução da IA atual acontece através de APIs. Empresas como OpenAI, Google e Anthropic disponibilizam seus modelos dessa forma. Por isso, entender APIs significa também entender como a IA moderna funciona.
                  </p>
                </div>

                {/* APIs no Mundo Real */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">APIs no Mundo Real</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Praticamente tudo que você usa diariamente depende de APIs:
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li><strong>Netflix:</strong> Busca filmes e séries através de APIs internas</li>
                    <li><strong>Spotify:</strong> Entrega músicas, playlists e recomendações</li>
                    <li><strong>Uber:</strong> Conecta motoristas, passageiros e mapas</li>
                    <li><strong>WhatsApp:</strong> Envia mensagens através de múltiplos serviços conectados</li>
                    <li><strong>iFood:</strong> Integra restaurantes, pagamentos e entregadores</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    As APIs são a infraestrutura invisível por trás desses serviços.
                  </p>
                </div>

                {/* Como os Dados Viajam */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">Como os Dados Viajam Pela Aplicação</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Quando um usuário interage com uma aplicação, existe uma cadeia de eventos acontecendo nos bastidores:
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg my-4 border border-slate-700 text-center">
                    <code className="text-emerald-400 text-sm whitespace-pre">
{`Usuário clica em um botão
          ↓
Frontend coleta os dados
          ↓
Frontend envia solicitação para API
          ↓
Backend recebe a solicitação
          ↓
Backend valida os dados
          ↓
Backend executa regras de negócio
          ↓
Backend consulta o banco de dados
          ↓
Banco retorna os dados
          ↓
Backend processa o resultado
          ↓
Backend envia resposta
          ↓
Frontend recebe a resposta
          ↓
Tela é atualizada
          ↓
Usuário vê o resultado`}
                    </code>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Compreender esse fluxo é uma das habilidades mais importantes para qualquer desenvolvedor. Ele mostra exatamente como frontend, backend e banco de dados trabalham juntos para criar uma experiência perfeita.
                  </p>
                </div>

                {/* Frontend Conversa com Backend */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Como o Frontend Conversa com o Backend?</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Depois que a API é criada, o frontend precisa enviar solicitações para ela. Em JavaScript isso pode ser feito usando a função fetch:
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg my-4 border border-slate-700">
                    <code className="text-emerald-400 text-sm">
                      fetch('/api/usuarios')<br/>
                      &nbsp;&nbsp;.then(response =&gt; response.json())<br/>
                      &nbsp;&nbsp;.then(data =&gt; console.log(data));
                    </code>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Nesse exemplo: o frontend envia uma solicitação, a API recebe a solicitação, o backend busca os dados, o backend retorna uma resposta, o frontend exibe o resultado.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    O importante não é decorar o código. O importante é entender que APIs são a ponte que conecta a interface ao servidor.
                  </p>
                </div>

                {/* Boas Práticas */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Boas Práticas</h2>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Use versionamento</li>
                    <li>• Documente sua API</li>
                    <li>• Utilize HTTPS</li>
                    <li>• Implemente rate limiting</li>
                    <li>• Faça logging adequado</li>
                    <li>• Valide todos os dados</li>
                    <li>• Trate erros corretamente</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Essas práticas diferenciam projetos profissionais de projetos amadores.
                  </p>
                </div>

                {/* Mercado */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">APIs no Mercado</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Praticamente toda empresa de tecnologia utiliza APIs. Elas estão presentes em aplicações web, aplicações móveis, sistemas corporativos, integrações, microsserviços e plataformas de IA.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Por isso profissionais que dominam backend continuam entre os mais valorizados do mercado. Mesmo desenvolvedores frontend se beneficiam enormemente desse conhecimento. Quanto melhor você entende o fluxo completo de uma aplicação, melhores soluções você consegue construir.
                  </p>
                </div>

                {/* Recursos */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Recursos Para Continuar Aprendendo</h2>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>• Express</li>
                    <li>• NestJS</li>
                    <li>• FastAPI</li>
                    <li>• Django</li>
                    <li>• Postman</li>
                    <li>• Swagger</li>
                    <li>• Documentações oficiais</li>
                    <li>• Projetos reais</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    A melhor forma de aprender backend continua sendo construir aplicações reais.
                  </p>
                </div>

                {/* Conclusão */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Conclusão</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Toda vez que você faz login, envia uma mensagem, assiste a um filme, pede comida ou chama um carro por aplicativo, existe uma API trabalhando nos bastidores.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    APIs conectam sistemas. Backends executam regras. Bancos de dados armazenam informações. Juntos, eles formam a infraestrutura invisível que sustenta praticamente toda a internet moderna.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Aprender backend não significa apenas aprender uma tecnologia. Significa compreender como os sistemas realmente funcionam.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    E quanto mais você entende essa arquitetura, mais preparado estará para construir aplicações profissionais, escaláveis e prontas para o mundo real.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-12 pt-12 border-t border-white/10">
                  <div className="card-hover card-dev text-center">
                    <h3 className="text-xl font-bold mb-3">Pronto para construir seu backend?</h3>
                    <p className="text-slate-400 mb-6">
                      Explore mais tópicos sobre programação e comece a dominar APIs e backends!
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
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
