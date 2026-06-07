import Link from "next/link";

export default function JavaScriptTypeScriptPage() {
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
              JavaScript & TypeScript
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Fundamentos, Ecossistema e Desenvolvimento Moderno
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Tempo de leitura: ~45 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-slate-300">
            
            {/* Introdução */}
            <article className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Do Zero ao Herói: Domine a Linguagem que Alimenta a Web Moderna</h2>
              
              <p className="leading-relaxed">
                Imagine abrir o YouTube. Você pesquisa um vídeo e os resultados aparecem instantaneamente. Clica em um vídeo, os comentários carregam sem atualizar a página, as recomendações mudam em tempo real e tudo parece extremamente fluido.
              </p>

              <p className="leading-relaxed">
                Agora pense no Gmail, Google Maps, WhatsApp Web, Netflix ou Spotify. Todos oferecem experiências parecidas com aplicativos instalados no computador, mas funcionam diretamente no navegador.
              </p>

              <p className="leading-relaxed">
                Por trás dessa revolução existe uma tecnologia que mudou a internet para sempre: o JavaScript.
              </p>

              <p className="leading-relaxed">
                Durante muitos anos, os sites eram páginas estáticas. Para realizar qualquer ação, era necessário recarregar toda a página. A experiência era lenta e limitada.
              </p>

              <p className="leading-relaxed">
                O JavaScript mudou esse cenário. Hoje ele está presente em praticamente todos os sites modernos e vai muito além dos navegadores. Ele também é usado para criar aplicativos para celulares, programas para computadores, servidores, sistemas de automação e até aplicações de inteligência artificial.
              </p>

              <p className="leading-relaxed">
                E ao lado dele surgiu o TypeScript, uma tecnologia que tornou o desenvolvimento mais seguro, organizado e escalável.
              </p>

              <p className="leading-relaxed">
                Neste guia você entenderá por que JavaScript se tornou uma das linguagens mais importantes do mundo, como funciona seu ecossistema moderno e por que TypeScript se tornou indispensável para projetos profissionais.
              </p>
            </article>

            <hr className="border-white/10" />

            {/* O Que Você Vai Aprender */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">O Que Você Vai Aprender Neste Guia</h2>
              <p>Neste artigo você descobrirá:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>O que é JavaScript</li>
                <li>Como ele funciona dentro do navegador</li>
                <li>O que mudou com o surgimento do Node.js</li>
                <li>Por que TypeScript se tornou tão popular</li>
                <li>Como React, Next.js e Node.js trabalham juntos</li>
                <li>Como JavaScript participa da revolução da Inteligência Artificial</li>
                <li>Quais habilidades estudar para evoluir como desenvolvedor</li>
              </ul>
            </article>

            <hr className="border-white/10" />

            {/* Por Que Aprender JavaScript */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Por Que Aprender JavaScript?</h2>
              <p>Poucas tecnologias conseguem afirmar que dominam um setor inteiro. JavaScript consegue. Se você deseja trabalhar com desenvolvimento web, aprender JavaScript não é uma opção. É um requisito.</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">Está em Todos os Lugares</h3>
                  <p>JavaScript funciona em praticamente qualquer navegador moderno. Independentemente do sistema operacional ou dispositivo utilizado, ele está presente. Isso significa que uma aplicação pode alcançar milhões de pessoas sem exigir instalação.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">Possui um Ecossistema Gigantesco</h3>
                  <p className="mb-2">Milhões de desenvolvedores utilizam JavaScript diariamente. Isso resultou em:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Comunidades enormes</li>
                    <li>Milhares de bibliotecas</li>
                    <li>Ferramentas para praticamente qualquer necessidade</li>
                    <li>Conteúdo educacional abundante</li>
                    <li>Grande oferta de empregos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">É Extremamente Versátil</h3>
                  <p className="mb-2">Com JavaScript você pode criar:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Sites modernos</li>
                    <li>Aplicações web completas</li>
                    <li>APIs e servidores</li>
                    <li>Aplicativos para Android e iPhone</li>
                    <li>Programas para Windows, Linux e macOS</li>
                    <li>Sistemas de automação</li>
                    <li>Interfaces para inteligência artificial</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">Mercado Aquecido</h3>
                  <p>Empresas de todos os tamanhos utilizam JavaScript. Startups, bancos, e-commerces, plataformas de streaming e gigantes da tecnologia dependem da linguagem diariamente. Por isso a demanda por profissionais qualificados permanece extremamente alta.</p>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* O Que É JavaScript */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">O Que É JavaScript?</h2>
              <p>JavaScript é uma linguagem de programação criada para tornar páginas web interativas. Inicialmente seu objetivo era relativamente simples: adicionar comportamento às páginas da internet.</p>
              <p>Com o passar dos anos, a linguagem evoluiu e se transformou em uma plataforma completa para desenvolvimento de software. Hoje ela é utilizada em praticamente todos os segmentos da tecnologia.</p>
            </article>

            <hr className="border-white/10" />

            {/* Como JavaScript Evolui */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Como JavaScript Evolui?</h2>
              <p>Muitas pessoas imaginam que JavaScript é uma linguagem fixa, mas ela continua evoluindo todos os anos. O padrão oficial da linguagem é chamado ECMAScript, um conjunto de especificações que define como JavaScript deve funcionar. Navegadores como Chrome, Firefox, Edge e Safari implementam essas especificações para garantir compatibilidade entre diferentes plataformas.</p>
              <p className="mb-2">Foi graças à evolução contínua do ECMAScript que recursos modernos passaram a fazer parte da linguagem, incluindo:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>let e const</li>
                <li>Arrow Functions</li>
                <li>Classes</li>
                <li>Promises</li>
                <li>Async/Await</li>
                <li>Módulos JavaScript</li>
              </ul>
              <p>Essa evolução constante permite que JavaScript acompanhe as necessidades do desenvolvimento moderno sem abandonar a enorme quantidade de aplicações já existentes. É um dos principais motivos pelos quais a linguagem continua relevante após décadas de uso.</p>
            </article>

            <hr className="border-white/10" />

            {/* Como o Navegador Entende JavaScript */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Como o Navegador Entende JavaScript?</h2>
              <p>Para entender o papel do JavaScript, imagine a construção de uma casa. Cada tecnologia possui uma função específica:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                <li>HTML é a estrutura da casa</li>
                <li>CSS é a decoração e aparência</li>
                <li>JavaScript é a parte elétrica, os motores e os mecanismos que fazem tudo funcionar</li>
              </ul>
              <p className="mb-2">Quando você acessa um site, o navegador recebe esses três elementos. O HTML define o conteúdo. O CSS define a aparência. O JavaScript define o comportamento.</p>
              <p className="mb-2">Quando você:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                <li>Clica em um botão</li>
                <li>Envia um formulário</li>
                <li>Abre um menu</li>
                <li>Atualiza uma lista sem recarregar a página</li>
              </ul>
              <p>Normalmente existe código JavaScript trabalhando nos bastidores. É ele que transforma páginas estáticas em experiências interativas.</p>
            </article>

            <hr className="border-white/10" />

            {/* Os Fundamentos */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Os Fundamentos de JavaScript</h2>
              <p>Toda linguagem de programação é construída sobre alguns conceitos fundamentais.</p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Variáveis</h3>
                  <p className="mb-2">Variáveis armazenam informações.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`let nome = "Maria";
const idade = 30;`}
                  </pre>
                  <p>Pense nelas como caixas que guardam dados para serem utilizados posteriormente.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Tipos de Dados</h3>
                  <p className="mb-2">JavaScript trabalha com diferentes tipos de informação. Principais exemplos:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>String → textos</li>
                    <li>Number → números</li>
                    <li>Boolean → verdadeiro ou falso</li>
                    <li>Object → objetos</li>
                    <li>Array → listas</li>
                    <li>Null → ausência de valor</li>
                    <li>Undefined → valor não definido</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Condições</h3>
                  <p className="mb-2">Os programas tomam decisões constantemente.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`if (idade >= 18) {
  console.log("Maior de idade");
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Funções</h3>
                  <p className="mb-2">Funções são blocos reutilizáveis de código.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`function saudacao(nome) {
  return \`Olá, \${nome}\`;
}`}
                  </pre>
                  <p>Elas ajudam a organizar e reutilizar lógica. Praticamente toda aplicação moderna é construída utilizando funções.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Objetos e Arrays</h3>
                  <p className="mb-2">Objetos armazenam informações relacionadas.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`const pessoa = {
  nome: "João",
  idade: 30
};`}
                  </pre>
                  <p className="mb-2">Arrays armazenam listas.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`const numeros = [1, 2, 3, 4, 5];`}
                  </pre>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* Node.js */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">O Momento em Que JavaScript Saiu do Navegador</h2>
              <p>Durante muitos anos, JavaScript existia apenas dentro dos navegadores. Tudo mudou em 2009. Foi quando surgiu o Node.js.</p>
              <p>O Node.js permitiu executar JavaScript fora do navegador. Essa mudança teve um impacto gigantesco. De repente, desenvolvedores passaram a usar a mesma linguagem para:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                <li>Frontend</li>
                <li>Backend</li>
                <li>APIs</li>
                <li>Microsserviços</li>
                <li>Aplicações em tempo real</li>
              </ul>
              <p>Pela primeira vez era possível construir uma aplicação completa usando apenas JavaScript. Esse foi um dos eventos mais importantes da história da programação moderna.</p>
            </article>

            <hr className="border-white/10" />

            {/* Conceitos Intermediários */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Conceitos Intermediários que Todo Desenvolvedor Precisa Conhecer</h2>
              <p>Conforme os projetos crescem, alguns conceitos se tornam indispensáveis.</p>
              <p>Entre os conceitos intermediários mais importantes estão escopo, closures, callbacks, promises e async/await. Esses recursos permitem criar aplicações modernas capazes de realizar tarefas complexas, processar informações em segundo plano e se comunicar com APIs externas.</p>
              <p>Cada um desses temas merece um estudo aprofundado e será explorado em artigos específicos.</p>
            </article>

            <hr className="border-white/10" />

            {/* Conceitos Avançados */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Conceitos Avançados</h2>
              <p className="mb-2">À medida que os sistemas crescem, surgem necessidades mais sofisticadas. Entre os conceitos mais importantes estão:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Programação Orientada a Objetos</li>
                <li>Programação Funcional</li>
                <li>Módulos</li>
                <li>Tratamento de Erros</li>
                <li>Arquitetura de Software</li>
                <li>Padrões de Projeto</li>
              </ul>
              <p className="mt-4">Esses recursos permitem construir aplicações grandes, organizadas e fáceis de manter.</p>
            </article>

            <hr className="border-white/10" />

            {/* O Que É TypeScript */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">O Que É TypeScript?</h2>
              <p>À medida que os projetos JavaScript se tornaram maiores, um problema começou a aparecer: os erros. Em aplicações pequenas isso raramente era um problema. Mas em sistemas com milhares de arquivos e dezenas de desenvolvedores, identificar erros podia se tornar extremamente difícil.</p>
              <p>Foi então que surgiu o TypeScript. TypeScript é uma extensão do JavaScript criada pela Microsoft. Ele adiciona um sistema de tipos estáticos que permite detectar muitos problemas antes mesmo da aplicação ser executada.</p>
            </article>

            <hr className="border-white/10" />

            {/* Por Que TypeScript */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Por Que TypeScript se Tornou Tão Popular?</h2>
              <p>Imagine construir uma casa. JavaScript é como trabalhar com profissionais experientes, mas sem uma planta extremamente detalhada. Tudo pode funcionar perfeitamente. Mas alguns problemas só serão percebidos durante a construção.</p>
              <p>TypeScript adiciona essa planta. Ele verifica inconsistências antes que elas cheguem ao usuário final. Por isso grandes empresas adotaram TypeScript em larga escala.</p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Segurança de Tipos</h3>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`let nome: string = "João";
nome = 123; // Erro: Type 'number' is not assignable to type 'string'`}
                  </pre>
                  <p>O TypeScript garante que a variável continue armazenando apenas texto. Isso evita muitos erros comuns.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Melhor Autocompletar</h3>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`const pessoa: Pessoa = getPessoa();
pessoa. // IDE mostra todas as propriedades disponíveis`}
                  </pre>
                  <p>Os editores de código conseguem oferecer sugestões muito mais inteligentes. Isso aumenta a produtividade significativamente.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Código Mais Legível</h3>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`function calcularIdade(dataNascimento: Date): number {
  // Fica claro que a função recebe uma Date e retorna um number
}`}
                  </pre>
                  <p>Os tipos funcionam como documentação automática. Ao olhar uma função, fica muito mais fácil entender o que ela recebe e o que retorna.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Refatoração Mais Segura</h3>
                  <p>Quando um projeto cresce, alterações podem afetar dezenas de arquivos. TypeScript ajuda a identificar exatamente onde mudanças precisam ser feitas. Se você muda o tipo de uma propriedade, o TypeScript avisa todos os lugares que precisam ser atualizados.</p>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* Recursos TypeScript */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Recursos Importantes do TypeScript</h2>
              <p className="mb-4">Entre os recursos mais utilizados estão:</p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Interfaces</h3>
                  <p className="mb-2">Definem a estrutura de um objeto:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // Opcional
}

const pessoa: Pessoa = {
  nome: "João",
  idade: 30
};`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Tipos Personalizados</h3>
                  <p className="mb-2">Criam tipos específicos para sua aplicação:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`type Status = "ativo" | "inativo" | "pendente";

let statusUsuario: Status = "ativo";
statusUsuario = "invalido"; // Erro!`}
                  </pre>
                  <p>Nesse exemplo, o TypeScript gera erro porque "invalido" não faz parte dos valores permitidos pelo tipo Status. Isso ajuda a evitar estados inesperados dentro da aplicação e aumenta a confiabilidade do código.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Union Types</h3>
                  <p className="mb-2">Permitem múltiplos tipos:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`let resultado: string | number;
resultado = "Sucesso"; // OK
resultado = 200; // OK
resultado = true; // Erro!`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Genéricos</h3>
                  <p className="mb-2">Criam componentes reutilizáveis:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`function identidade<T>(valor: T): T {
  return valor;
}

console.log(identidade<string>("Olá")); // "Olá"
console.log(identidade<number>(42)); // 42`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Enums</h3>
                  <p className="mb-2">Definem um conjunto de constantes nomeadas:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`enum Cor {
  Vermelho = "VERMELHO",
  Verde = "VERDE",
  Azul = "AZUL"
}

let cor: Cor = Cor.Vermelho;`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Classes</h3>
                  <p className="mb-2">Estruturam código orientado a objetos:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`class Pessoa {
  nome: string;
  idade: number;
  
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  
  apresentar(): string {
    return \`Olá, meu nome é \${this.nome}\`;
  }
}`}
                  </pre>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* Quando Usar TypeScript */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Quando Usar TypeScript?</h2>
              <p>Embora seja possível desenvolver aplicações modernas utilizando apenas JavaScript, o TypeScript oferece vantagens que se tornam cada vez mais valiosas conforme os projetos crescem.</p>
              <p className="mb-2">Ele é especialmente útil em situações como:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                <li>Projetos que tendem a crescer ao longo do tempo</li>
                <li>Equipes com múltiplos desenvolvedores</li>
                <li>Sistemas corporativos</li>
                <li>Aplicações críticas onde erros podem gerar prejuízos</li>
                <li>Bibliotecas e frameworks utilizados por outras pessoas</li>
              </ul>
              <p>Mesmo em projetos menores, muitos desenvolvedores optam pelo TypeScript desde o início devido aos benefícios relacionados à organização, manutenção e prevenção de erros.</p>
              <p>Por isso, seu uso vem crescendo rapidamente e já se tornou padrão em grande parte do desenvolvimento profissional moderno.</p>
            </article>

            <hr className="border-white/10" />

            {/* Diferenças Práticas */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Diferenças Práticas: JavaScript vs TypeScript</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-3">Exemplo 1: Função Simples</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">JavaScript</p>
                      <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`function somar(a, b) {
  return a + b;
}

somar(5, 3); // 8
somar("5", 3); // "53" - Comportamento inesperado!`}
                      </pre>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">TypeScript</p>
                      <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`function somar(a: number, b: number): number {
  return a + b;
}

somar(5, 3); // 8
somar("5", 3); // Erro em tempo de desenvolvimento!`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-3">Exemplo 2: Objetos</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold mb-2">JavaScript</p>
                      <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`const usuario = {
  nome: "João",
  idade: 30
};

console.log(usuario.email); // undefined - Sem aviso`}
                      </pre>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">TypeScript</p>
                      <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`interface Usuario {
  nome: string;
  idade: number;
}

const usuario: Usuario = {
  nome: "João",
  idade: 30
};

console.log(usuario.email); // Erro: Property 'email' does not exist`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* Como Todas Essas Tecnologias Trabalham Juntas */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Como Todas Essas Tecnologias Trabalham Juntas?</h2>
              <p className="mb-4">Uma das maiores dúvidas de quem está começando é entender como JavaScript, TypeScript, React, Node.js e outras ferramentas se conectam. A melhor forma de visualizar isso é imaginar a construção de uma aplicação completa.</p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">JavaScript</h3>
                  <p>É a linguagem principal. Tudo parte dela.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">TypeScript</h3>
                  <p>Adiciona mais segurança, organização e previsibilidade ao JavaScript.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">React</h3>
                  <p>É responsável pela interface que o usuário vê e utiliza.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Next.js</h3>
                  <p>Expande as capacidades do React e facilita a criação de aplicações profissionais, rápidas e escaláveis.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Node.js</h3>
                  <p>Permite executar JavaScript no servidor.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Express</h3>
                  <p>Ajuda a criar APIs que conectam a interface aos dados.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Banco de Dados</h3>
                  <p>Armazena informações como usuários, pedidos, mensagens e configurações.</p>
                </div>
              </div>

              <p className="mt-4">Quando todas essas tecnologias trabalham juntas, formam uma das pilhas de desenvolvimento mais utilizadas no mundo atualmente. É exatamente essa combinação que alimenta milhares de startups, plataformas SaaS, e-commerces e aplicações modernas utilizadas diariamente por milhões de pessoas.</p>
            </article>

            <hr className="border-white/10" />

            {/* Ferramentas Essenciais */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Ferramentas Essenciais do Ecossistema JavaScript</h2>
              <p className="mb-4">Para trabalhar profissionalmente com JavaScript, você precisa conhecer algumas ferramentas fundamentais.</p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">npm (Node Package Manager)</h3>
                  <p className="mb-2">Gerenciador de pacotes que permite instalar bibliotecas:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`npm install react
npm install -D typescript`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Yarn</h3>
                  <p className="mb-2">Alternativa ao npm com melhor performance:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`yarn add react
yarn add --dev typescript`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Git</h3>
                  <p className="mb-2">O Git é um sistema de controle de versão utilizado para acompanhar alterações no código ao longo do tempo. Ele permite:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
                    <li>Voltar para versões anteriores</li>
                    <li>Trabalhar em equipe</li>
                    <li>Testar mudanças com segurança</li>
                    <li>Manter histórico completo do projeto</li>
                  </ul>
                  <p>Aprender Git é tão importante quanto aprender programação.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">GitHub</h3>
                  <p className="mb-2">O GitHub é uma plataforma baseada em Git utilizada para armazenar projetos online. Além de hospedar código, ele também é utilizado para:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
                    <li>Criar portfólio profissional</li>
                    <li>Colaborar com equipes</li>
                    <li>Participar de projetos open source</li>
                    <li>Compartilhar aplicações com a comunidade</li>
                  </ul>
                  <p>Hoje o GitHub é uma das ferramentas mais importantes da carreira de um desenvolvedor.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Vite</h3>
                  <p className="mb-2">Bundler moderno e rápido para desenvolvimento:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`npm create vite@latest meu-app -- --template react`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Webpack</h3>
                  <p>Bundler mais tradicional e poderoso para projetos complexos.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Jest</h3>
                  <p className="mb-2">Framework de testes para garantir qualidade:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`test('deve somar dois números', () => {
  expect(somar(2, 3)).toBe(5);
});`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">ESLint</h3>
                  <p className="mb-2">Linter que encontra e corrige problemas no código:</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`npm install --save-dev eslint
npx eslint src/`}
                  </pre>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* Erros Comuns */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Erros Comuns de Iniciantes</h2>
              <p className="mb-4">Evitar esses erros economiza tempo e frustração.</p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-6">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">1. Usar var em Vez de let/const</h3>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`// ❌ Evitar
var nome = "João";

// ✅ Preferir
const nome = "João";
let contador = 0;`}
                  </pre>
                  <p>var tem comportamentos inesperados com escopo. Use const por padrão e let quando precisar reatribuir.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">2. Não Entender Closures</h3>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`// ❌ Problema comum
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Imprime 3, 3, 3
  }, 100);
}

// ✅ Solução
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Imprime 0, 1, 2
  }, 100);
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">3. Confundir == com ===</h3>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`// ❌ Evitar
if (valor == "5") { } // Faz conversão de tipo

// ✅ Preferir
if (valor === "5") { } // Comparação exata`}
                  </pre>
                  <p>Sempre use === para comparações.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">4. Não Tratar Promises Corretamente</h3>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`// ❌ Problema
fetch('https://api.exemplo.com/dados' )
  .then(resposta => resposta.json())
  // Sem tratamento de erro!

// ✅ Correto
fetch('https://api.exemplo.com/dados' )
  .then(resposta => resposta.json())
  .catch(erro => console.error("Erro:", erro))
  .finally(() => console.log("Concluído"));`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">5. Ignorar Erros</h3>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto mb-2">
{`// ❌ Ruim
try {
  // código
} catch (e) {
  console.log("Erro"); // Sem contexto!
}

// ✅ Bom
try {
  // código
} catch (erro) {
  console.error("Erro ao processar dados:", erro);
  // Lidar com o erro apropriadamente
}`}
                  </pre>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* Ecossistema */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">O Ecossistema que Tornou JavaScript Dominante</h2>
              <p className="mb-4">O sucesso de JavaScript não aconteceu apenas por causa da linguagem. Ele aconteceu graças ao ecossistema construído ao seu redor.</p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">React</h3>
                  <p className="mb-2">Criado pelo Facebook para construir interfaces modernas e dinâmicas. Hoje é uma das tecnologias mais utilizadas do mundo.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`function App() {
  return <h1>Bem-vindo ao React!</h1>;
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Next.js</h3>
                  <p className="mb-2">Construído sobre React. Facilita a criação de aplicações profissionais, rápidas e preparadas para produção.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`export default function Home() {
  return <h1>Bem-vindo ao Next.js</h1>;
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Node.js</h3>
                  <p className="mb-2">Permite utilizar JavaScript no servidor. É a base de milhares de APIs e sistemas modernos.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`const express = require('express');
const app = express();

app.get('/api/dados', (req, res) => {
  res.json({ mensagem: "Olá!" });
});`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">React Native</h3>
                  <p>O React Native permite criar aplicativos nativos para Android e iOS utilizando JavaScript e React. Em vez de manter equipes separadas para cada plataforma, os desenvolvedores conseguem compartilhar grande parte do código entre os dois sistemas. Isso reduz custos, acelera o desenvolvimento e facilita a manutenção dos aplicativos. Empresas de todos os portes utilizam React Native para criar experiências móveis modernas e eficientes.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Express.js</h3>
                  <p>Framework minimalista para criar APIs backend robustas.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Tailwind CSS</h3>
                  <p>Biblioteca de CSS utilitário que acelera o desenvolvimento de interfaces.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Prisma</h3>
                  <p>ORM (Object-Relational Mapping) que facilita trabalhar com bancos de dados.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">GraphQL</h3>
                  <p>Alternativa ao REST para APIs mais eficientes.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Outras Tecnologias Relevantes</h3>
                  <p className="mb-2">O ecossistema também inclui:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Vue.js</li>
                    <li>Angular</li>
                    <li>Svelte</li>
                    <li>Astro</li>
                    <li>Solid.js</li>
                  </ul>
                  <p className="mt-2">Cada uma atende necessidades específicas.</p>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* IA */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">JavaScript e a Revolução da Inteligência Artificial</h2>
              <p>Quando se fala em IA, muitas pessoas pensam imediatamente em Python. Mas JavaScript vem ganhando espaço rapidamente.</p>
              <p className="mb-2">Hoje é possível:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                <li>Integrar aplicações com ChatGPT</li>
                <li>Utilizar APIs do Gemini</li>
                <li>Criar agentes inteligentes</li>
                <li>Desenvolver chatbots</li>
                <li>Construir assistentes virtuais</li>
                <li>Consumir modelos de IA hospedados na nuvem</li>
              </ul>
              <p>Além disso, JavaScript é frequentemente usado para criar as interfaces que permitem aos usuários interagir com sistemas inteligentes.</p>
              <p>Em muitos projetos modernos, Python e JavaScript trabalham juntos. Python executa os modelos. JavaScript entrega a experiência ao usuário.</p>
            </article>

            <hr className="border-white/10" />

            {/* Boas Práticas */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Boas Práticas</h2>
              <p className="mb-4">Alguns hábitos fazem enorme diferença.</p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Prefira const e let</h3>
                  <p className="mb-2">Evite utilizar var em projetos modernos.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`// ❌ Evitar
var nome = "João";

// ✅ Preferir
const nome = "João";`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Use nomes claros</h3>
                  <p className="mb-2">Código é lido muito mais vezes do que escrito.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`// ❌ Ruim
const d = new Date();
const n = "João";

// ✅ Bom
const dataAtual = new Date();
const nomeUsuario = "João";`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Crie funções pequenas</h3>
                  <p className="mb-2">Funções menores são mais fáceis de entender e testar.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`// ❌ Ruim - 100 linhas
function processarDados(dados) {
  // tudo junto
}

// ✅ Bom - Separado por responsabilidade
function validarDados(dados) { }
function transformarDados(dados) { }
function salvarDados(dados) { }`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Trate erros adequadamente</h3>
                  <p className="mb-2">Nunca ignore erros importantes.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`// ❌ Ruim
try {
  // código
} catch (e) { }

// ✅ Bom
try {
  // código
} catch (erro) {
  console.error("Erro:", erro);
  // Lidar com o erro
}`}
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Utilize TypeScript em projetos profissionais</h3>
                  <p>Ele reduz significativamente a ocorrência de bugs.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Escreva testes</h3>
                  <p className="mb-2">Aplicações confiáveis dependem de testes automatizados.</p>
                  <pre className="bg-black/30 p-3 rounded text-sm overflow-x-auto">
{`describe('Calculadora', () => {
  test('deve somar dois números', () => {
    expect(somar(2, 3)).toBe(5);
  });
});`}
                  </pre>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* Como Aprender */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Como Aprender JavaScript Mais Rápido</h2>
              <p>Muitos iniciantes passam meses estudando teoria sem criar nada. Esse é um erro comum. A melhor forma de aprender programação é construir projetos.</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Comece com Projetos Simples</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Calculadoras</li>
                    <li>Listas de tarefas</li>
                    <li>Conversores</li>
                    <li>Jogos simples</li>
                    <li>Consumo de APIs</li>
                  </ul>
                  <p className="mt-2">Cada projeto ensina algo novo. A prática transforma conhecimento em habilidade.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Recursos Recomendados</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>MDN Web Docs - Documentação oficial e confiável</li>
                    <li>JavaScript.info - Guia interativo e completo</li>
                    <li>freeCodeCamp - Tutoriais gratuitos em vídeo</li>
                    <li>LeetCode/HackerRank - Desafios práticos de programação</li>
                    <li>Exercism - Exercícios com feedback da comunidade</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Dicas para Acelerar o Aprendizado</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Estude um conceito, depois crie um projeto com ele</li>
                    <li>Leia código de outros - Aprenda padrões</li>
                    <li>Participe de comunidades - Stack Overflow, Reddit, Discord</li>
                    <li>Contribua com open source - Ganhe experiência real</li>
                    <li>Crie um portfólio - Mostre seus projetos</li>
                  </ol>
                </div>
              </div>
            </article>

            <hr className="border-white/10" />

            {/* Conclusão */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Conclusão</h2>
              <p>JavaScript deixou de ser apenas uma linguagem para páginas web. Hoje ele é uma plataforma completa capaz de alimentar sites, aplicativos móveis, sistemas corporativos, APIs, serviços em nuvem e soluções de inteligência artificial.</p>
              <p>Ao lado dele, TypeScript trouxe um novo nível de segurança, organização e escalabilidade para o desenvolvimento moderno. Juntas, essas tecnologias formam uma das combinações mais poderosas da programação atual.</p>
              <p>Se você deseja entrar no mundo do desenvolvimento, criar aplicações modernas ou trabalhar com tecnologias de ponta, poucas escolhas são tão estratégicas quanto aprender JavaScript e TypeScript.</p>
              <p>O mais importante é lembrar que ninguém domina essa jornada da noite para o dia. Todo desenvolvedor começou escrevendo as primeiras linhas de código, cometendo erros e aprendendo com a prática.</p>
              <p>Comece hoje. Escolha um projeto. E veja como JavaScript pode transformar sua carreira.</p>
            </article>

            {/* CTA */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="card-hover card-dev text-center">
                <h3 className="text-xl font-bold mb-3">Pronto para começar?</h3>
                <p className="text-slate-400 mb-6">
                  Explore mais tópicos sobre programação e comece a dominar JavaScript e TypeScript!
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
