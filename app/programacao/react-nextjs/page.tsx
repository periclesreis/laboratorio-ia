import Link from "next/link";

export default function ReactNextjsPage() {
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
              React & Next.js
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Crie Interfaces Dinâmicas e Aplicações Web Modernas
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
                  <h2 className="text-2xl font-bold mb-4">Do Componente Simples ao Aplicativo Profissional</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Há alguns anos, construir um site era relativamente simples. Você criava algumas páginas HTML, adicionava estilos com CSS e talvez algumas interações com JavaScript.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Mas a internet mudou. Hoje esperamos que aplicações web funcionem quase como aplicativos instalados no celular. Quando você usa Instagram, Gmail, Netflix, Spotify, ChatGPT você espera que tudo responda instantaneamente. Sem recarregar páginas. Sem travamentos. Sem demora.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Mas isso criou um enorme desafio para os desenvolvedores. Como manter centenas de elementos da interface sincronizados ao mesmo tempo? Como atualizar apenas o que mudou sem reconstruir a página inteira? Como organizar projetos com milhares de arquivos e dezenas de desenvolvedores?
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Foi para resolver esses problemas que surgiu o React. E, alguns anos depois, surgiu o Next.js para levar o React a um nível ainda mais profissional.
                  </p>
                </div>

                {/* O Que Você Vai Aprender */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">O Que Você Vai Aprender Neste Guia</h2>
                  <ul className="space-y-2 text-slate-300">
                    <li>✓ O problema que React resolve</li>
                    <li>✓ Como React funciona</li>
                    <li>✓ O conceito de componentes</li>
                    <li>✓ Como dados circulam em uma aplicação React</li>
                    <li>✓ O que são Hooks</li>
                    <li>✓ Como React e Next.js trabalham juntos</li>
                    <li>✓ O que torna Next.js tão importante</li>
                    <li>✓ Como criar aplicações modernas</li>
                    <li>✓ SEO e performance</li>
                    <li>✓ React, Next.js e Inteligência Artificial</li>
                  </ul>
                </div>

                {/* O Problema Que React Resolve */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">O Problema Que React Resolve</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Imagine um e-commerce moderno. A página possui carrinho de compras, lista de produtos, sistema de busca, filtros, favoritos, login e notificações.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Quando o usuário adiciona um produto ao carrinho: o contador muda, o valor total muda, o estoque muda, a lista de favoritos pode mudar, promoções podem aparecer.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Agora imagine dezenas de atualizações acontecendo ao mesmo tempo. Antes do React, os desenvolvedores precisavam atualizar manualmente várias partes da página. Quanto maior a aplicação, mais difícil isso se tornava.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    React resolveu esse problema com uma ideia simples: "O desenvolvedor descreve como a interface deve parecer. React cuida das atualizações automaticamente."
                  </p>
                </div>

                {/* Como React Enxerga a Interface */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Como React Enxerga a Interface</h2>
                  <p className="text-slate-300 leading-relaxed">
                    React trabalha com uma ideia chamada interface declarativa. Em vez de dizer "Atualize este botão. Atualize esta lista. Atualize este contador." você simplesmente informa "Este é o estado atual da aplicação."
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    React calcula automaticamente o que precisa mudar na tela. Isso torna o desenvolvimento muito mais simples e previsível.
                  </p>
                </div>

                {/* Virtual DOM */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">O Que é o Virtual DOM?</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Uma das tecnologias que ajudou React a se tornar tão popular é o Virtual DOM. Imagine que você precise reformar uma casa. Em vez de derrubar tudo e reconstruir do zero, você primeiro faz um planejamento. Analisa o que realmente precisa ser alterado. Depois executa apenas as mudanças necessárias.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    O Virtual DOM funciona de forma semelhante. React cria uma representação virtual da interface, compara as mudanças e atualiza apenas o que realmente foi modificado. Isso melhora significativamente a performance.
                  </p>
                </div>

                {/* Componentes */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Componentes: Os Blocos de Construção do React</h2>
                  <p className="text-slate-300 leading-relaxed">
                    O conceito mais importante de React é o componente. Imagine montar uma casa usando peças pré-fabricadas. Em vez de construir tudo do zero, você reutiliza partes prontas.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Um componente pode representar um botão, um menu, um formulário, um cartão de produto, uma barra lateral ou uma janela de login.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg my-4 border border-slate-700">
                    <code className="text-emerald-400 text-sm">
                      function Saudacao(&#123; nome &#125;) &#123;<br/>
                      &nbsp;&nbsp;return &lt;h1&gt;Olá, &#123;nome&#125;!&lt;/h1&gt;;<br/>
                      &#125;
                    </code>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Esse componente pode ser reutilizado quantas vezes forem necessárias. É exatamente essa reutilização que torna React tão poderoso.
                  </p>
                </div>

                {/* JSX */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">JSX: HTML Dentro do JavaScript</h2>
                  <p className="text-slate-300 leading-relaxed">
                    React utiliza uma sintaxe chamada JSX. Ela permite escrever estruturas semelhantes a HTML dentro do JavaScript.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg my-4 border border-slate-700">
                    <code className="text-emerald-400 text-sm">
                      const elemento = &lt;h1&gt;Olá, mundo!&lt;/h1&gt;;
                    </code>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Embora pareça HTML, o navegador interpreta isso como JavaScript. JSX torna o código mais intuitivo e fácil de ler.
                  </p>
                </div>

                {/* Dados em React */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Como os Dados Circulam em React</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Uma aplicação React vive de dados. Esses dados normalmente circulam através de dois conceitos:
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">Props</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Props funcionam como parâmetros de função. Permitem enviar informações de um componente para outro.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg my-4 border border-slate-700">
                    <code className="text-emerald-400 text-sm">
                      &lt;Saudacao nome="Maria" /&gt;
                    </code>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">State</h3>
                  <p className="text-slate-300 leading-relaxed">
                    State representa informações que podem mudar. Por exemplo: contador, lista de tarefas, carrinho de compras, usuário logado.
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg my-4 border border-slate-700">
                    <code className="text-emerald-400 text-sm">
                      const [contador, setContador] = useState(0);
                    </code>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Quando o estado muda, React atualiza automaticamente a interface.
                  </p>
                </div>

                {/* Hooks */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Hooks: A Evolução do React</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Durante muitos anos React utilizou componentes baseados em classes. Eles funcionavam bem, mas eram mais complexos.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Para simplificar o desenvolvimento, surgiram os Hooks. Hooks permitem utilizar recursos avançados de React de forma mais simples.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Os mais populares são: useState, useEffect, useContext, useMemo, useCallback.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Você não precisa dominar todos imediatamente. Mas entender que eles existem ajuda a compreender como React evoluiu ao longo do tempo.
                  </p>
                </div>

                {/* Projeto Real */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">Projeto Real: Como Um Blog é Construído em React</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Imagine que você deseja criar um blog. Em vez de pensar em páginas completas, React incentiva você a pensar em componentes.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Seu projeto poderia ser dividido em: Header, Menu, Lista de Posts, Página do Post, Formulário de Comentários, Rodapé.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Quando o usuário cria um comentário: o formulário envia os dados, o estado é atualizado, React atualiza a lista de comentários.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Tudo isso sem recarregar a página. Esse é o mesmo conceito utilizado em aplicações muito maiores.
                  </p>
                </div>

                {/* Por Que Next.js */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Por Que Next.js Foi Criado?</h2>
                  <p className="text-slate-300 leading-relaxed">
                    React é excelente para construir interfaces. Mas construir uma aplicação completa exige muito mais. Imagine que React seja o conjunto de tijolos de uma casa. Os tijolos são fundamentais. Mas você ainda precisa de portas, janelas, instalações elétricas, encanamento, telhado.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Next.js fornece toda essa estrutura pronta. Por isso ele se tornou o framework React mais popular do mercado.
                  </p>
                </div>

                {/* React e Next.js Juntos */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">Como React e Next.js Trabalham Juntos?</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Muitos iniciantes confundem os dois. A diferença é simples.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>React é responsável por:</strong> componentes, interface, interatividade, estado.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    <strong>Next.js é responsável por:</strong> estrutura do projeto, rotas, SEO, performance, backend integrado, renderização avançada.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    React constrói as peças. Next.js organiza e conecta tudo.
                  </p>
                </div>

                {/* Recursos Next.js */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">O Que Torna Next.js Especial?</h2>
                  
                  <h3 className="text-xl font-semibold mb-2 mt-4">Roteamento Automático</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Criar páginas é simples. Basta criar arquivos. Automaticamente você terá rotas para /, /blog, /contato.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2 mt-4">SEO Melhorado</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Motores de busca conseguem indexar páginas com mais facilidade. Isso é extremamente importante para blogs, lojas virtuais e sites institucionais.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2 mt-4">Performance</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Next.js inclui diversas otimizações automáticas: divisão inteligente de código, carregamento otimizado, compressão automática, otimização de imagens.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2 mt-4">Backend Integrado</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Você pode criar APIs sem sair do projeto. Isso reduz complexidade e acelera o desenvolvimento.
                  </p>
                </div>

                {/* Primeiro Projeto */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Seu Primeiro Projeto Next.js</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Criando um projeto:
                  </p>
                  <div className="bg-slate-900/50 p-4 rounded-lg my-4 border border-slate-700">
                    <code className="text-emerald-400 text-sm">
                      npx create-next-app@latest meu-projeto<br/>
                      cd meu-projeto<br/>
                      npm run dev
                    </code>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Em poucos minutos você terá uma aplicação moderna funcionando localmente. Essa simplicidade é um dos motivos da popularidade do Next.js.
                  </p>
                </div>

                {/* Mercado */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">React e Next.js no Mercado</h2>
                  <p className="text-slate-300 leading-relaxed">
                    React e Next.js são utilizados por empresas de todos os tamanhos. Desde startups até grandes organizações globais. Você encontrará essas tecnologias em: sistemas internos, e-commerces, fintechs, plataformas SaaS, aplicações de IA, redes sociais.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Conhecimentos em React frequentemente aparecem entre os requisitos mais solicitados para vagas de front-end.
                  </p>
                </div>

                {/* IA */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">React, Next.js e Inteligência Artificial</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    A Inteligência Artificial está mudando a forma como desenvolvedores trabalham. Ferramentas como ChatGPT, GitHub Copilot, Cursor, Claude podem gerar componentes React automaticamente.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Também conseguem: explicar erros, criar layouts, gerar testes, refatorar código.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Mas existe um detalhe importante. A IA pode ajudar a escrever código. Ela não substitui a compreensão da arquitetura da aplicação.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Por isso React e Next.js continuam sendo habilidades extremamente valiosas mesmo na era da IA.
                  </p>
                </div>

                {/* Boas Práticas */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Boas Práticas</h2>
                  <ul className="space-y-3 text-slate-300">
                    <li><strong>Crie Componentes Pequenos:</strong> Componentes menores são mais fáceis de entender e reutilizar.</li>
                    <li><strong>Organize o Projeto:</strong> Separe componentes, páginas, serviços e utilitários.</li>
                    <li><strong>Utilize TypeScript:</strong> TypeScript ajuda a detectar erros antes da aplicação ser executada.</li>
                    <li><strong>Pense em Reutilização:</strong> Sempre que possível, transforme partes repetidas em componentes.</li>
                    <li><strong>Priorize Legibilidade:</strong> Código fácil de ler costuma ser mais valioso do que código excessivamente complexo.</li>
                  </ul>
                </div>

                {/* Publicando */}
                <div className="card-hover card-dev">
                  <h2 className="text-2xl font-bold mb-4">Publicando Sua Aplicação</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Depois de concluir seu projeto, chega o momento de disponibilizá-lo para outras pessoas na internet.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Existem várias opções para publicar aplicações criadas com Next.js: Vercel, Netlify, AWS, Google Cloud, DigitalOcean.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    A Vercel merece destaque porque foi criada pela mesma empresa responsável pelo desenvolvimento do Next.js. Além da integração nativa com o framework, ela oferece uma experiência extremamente simples para iniciantes.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Na maioria dos casos, o processo envolve apenas:
                  </p>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>1. Fazer push do projeto para o GitHub</li>
                    <li>2. Conectar o repositório à plataforma</li>
                    <li>3. Publicar a aplicação</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Em poucos minutos seu projeto estará disponível online para qualquer pessoa acessar.
                  </p>
                </div>

                {/* Recursos */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Recursos Para Continuar Aprendendo</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Aprender React e Next.js é uma jornada contínua. Alguns recursos que podem acelerar seu desenvolvimento são:
                  </p>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>• Documentação oficial do React</li>
                    <li>• Documentação oficial do Next.js</li>
                    <li>• Comunidades React no Discord</li>
                    <li>• Stack Overflow</li>
                    <li>• GitHub</li>
                    <li>• Projetos open source para estudar e contribuir</li>
                    <li>• Canais especializados no YouTube</li>
                    <li>• Blogs técnicos da comunidade</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Uma das formas mais rápidas de evoluir é estudar projetos reais. Ao analisar como outros desenvolvedores organizam componentes, rotas e estruturas de aplicações, você aprende práticas utilizadas diariamente no mercado.
                  </p>
                </div>

                {/* Conclusão */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Conclusão</h2>
                  <p className="text-slate-300 leading-relaxed">
                    React transformou a forma como desenvolvemos interfaces web. Next.js transformou a forma como criamos aplicações web profissionais. Juntos, eles formam uma dupla poderosa.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    React fornece a flexibilidade e reatividade. Next.js fornece a estrutura e as ferramentas para produção.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Se você quer construir aplicações web modernas, escaláveis e profissionais, React e Next.js são as ferramentas certas.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    O mercado está pedindo por desenvolvedores que dominam essas tecnologias. E quanto mais cedo você começar, mais experiência terá quando for procurar emprego.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Comece pequeno. Crie um projeto simples. Aprenda fazendo. Essa é a melhor forma de dominar React e Next.js.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-12 pt-12 border-t border-white/10">
                  <div className="card-hover card-dev text-center">
                    <h3 className="text-xl font-bold mb-3">Pronto para começar?</h3>
                    <p className="text-slate-400 mb-6">
                      Explore mais tópicos sobre programação e comece a dominar React e Next.js!
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
