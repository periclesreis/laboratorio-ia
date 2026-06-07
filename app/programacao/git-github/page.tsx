import Link from "next/link";

export default function GitGitHubPage() {
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
              Git & GitHub
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Controle de Versão e Colaboração em Projetos Reais
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Tempo de leitura: ~35 minutos
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
              <div className="mb-12">
                <p className="text-slate-300 leading-relaxed text-lg">
                  Imagine que você passou semanas desenvolvendo um projeto. Tudo está funcionando perfeitamente. Então você decide fazer uma pequena alteração. Alguns minutos depois, nada mais funciona. Você tenta lembrar exatamente o que mudou. Mas não consegue.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg mt-4">
                  Agora imagine que isso acontece em uma equipe com cinco, dez ou até cem desenvolvedores trabalhando ao mesmo tempo no mesmo projeto. Como evitar que uma pessoa sobrescreva o trabalho da outra? Como recuperar uma versão que funcionava? Como acompanhar quem fez cada alteração?
                </p>
                <p className="text-slate-300 leading-relaxed text-lg mt-4">
                  Durante muitos anos, esses problemas causaram enormes dores de cabeça para desenvolvedores. Foi exatamente para resolver esse desafio que surgiram ferramentas de controle de versão, e nenhuma delas se tornou tão importante quanto o Git.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg mt-4">
                  Hoje, praticamente toda empresa de tecnologia utiliza Git em seus projetos. E junto com ele, o GitHub se tornou uma das plataformas mais importantes do mundo para colaboração em software.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg mt-4">
                  Neste guia você aprenderá não apenas comandos, mas também como Git e GitHub transformaram a forma como desenvolvedores trabalham, colaboram e constroem suas carreiras.
                </p>
              </div>

              {/* O Que Você Vai Aprender */}
              <div className="card-hover card-dev mb-12">
                <h2 className="text-2xl font-bold mb-4">O Que Você Vai Aprender Neste Guia</h2>
                <ul className="space-y-2 text-slate-300">
                  <li>✓ O que é controle de versão e por que ele é essencial</li>
                  <li>✓ Como Git funciona internamente</li>
                  <li>✓ Os principais conceitos do Git</li>
                  <li>✓ Como criar seu primeiro repositório</li>
                  <li>✓ Como trabalhar com branches</li>
                  <li>✓ Como usar GitHub para hospedar projetos</li>
                  <li>✓ Como equipes profissionais colaboram</li>
                  <li>✓ Como resolver conflitos</li>
                  <li>✓ Boas práticas utilizadas na indústria</li>
                  <li>✓ Como construir um portfólio profissional</li>
                </ul>
              </div>

              {/* Seções do Artigo */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-3">O Que é Controle de Versão?</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Controle de versão é um sistema que registra todas as mudanças feitas em um projeto ao longo do tempo. Antes dessas ferramentas, muitos desenvolvedores organizavam seus arquivos assim: projeto_v1, projeto_v2, projeto_v2_final, projeto_v2_final_agora_vai, projeto_v2_final_mesmo. Além de confuso, esse método torna quase impossível acompanhar a evolução de um projeto.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    Um sistema de controle de versão resolve isso automaticamente. Cada alteração fica registrada junto com informações importantes: o que mudou, quem mudou, quando mudou e por que mudou. E o melhor: você pode voltar para qualquer versão anterior sempre que precisar.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Por Que Git é Tão Importante?</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Git não é apenas uma ferramenta. Ele se tornou um padrão da indústria.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="card-hover">
                      <h3 className="font-bold text-blue-300 mb-2">🔒 Segurança</h3>
                      <p className="text-slate-300 text-sm">Seu histórico fica preservado. Mesmo que algo dê errado, você pode recuperar versões anteriores.</p>
                    </div>
                    <div className="card-hover">
                      <h3 className="font-bold text-blue-300 mb-2">👥 Colaboração</h3>
                      <p className="text-slate-300 text-sm">Várias pessoas podem trabalhar no mesmo projeto simultaneamente.</p>
                    </div>
                    <div className="card-hover">
                      <h3 className="font-bold text-blue-300 mb-2">📋 Organização</h3>
                      <p className="text-slate-300 text-sm">Cada mudança fica documentada e rastreável.</p>
                    </div>
                    <div className="card-hover">
                      <h3 className="font-bold text-blue-300 mb-2">💼 Profissionalismo</h3>
                      <p className="text-slate-300 text-sm">Praticamente todas as empresas utilizam Git.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Como Git Enxerga Seu Projeto?</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Antes de aprender comandos, é importante entender o modelo mental do Git. Imagine um videogame. Antes de enfrentar uma fase difícil, você cria um ponto de salvamento. Se algo der errado, basta voltar para aquele momento. Git funciona de maneira parecida. Cada vez que você cria um commit, está criando um ponto de salvamento do projeto.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    Esses pontos formam uma linha do tempo completa. Você pode voltar para versões antigas, comparar mudanças, criar linhas paralelas de desenvolvimento e recuperar trabalho perdido. Por isso muitas pessoas chamam Git de uma verdadeira máquina do tempo para código.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Conceitos Fundamentais de Git</h2>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-bold text-blue-300">Repositório</h3>
                      <p className="text-slate-300 text-sm">Um repositório é o local onde Git armazena seu projeto e todo o histórico de alterações. Pode existir localmente no seu computador ou remotamente em plataformas como GitHub.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-bold text-blue-300">Commit</h3>
                      <p className="text-slate-300 text-sm">Um commit é um registro de um momento específico do projeto. Pense nele como uma fotografia do estado atual do código, contendo um identificador único, autor, data e mensagem descritiva.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-bold text-blue-300">Branch</h3>
                      <p className="text-slate-300 text-sm">Um branch é uma linha independente de desenvolvimento. Você cria um branch separado para experimentar livremente sem mexer na versão principal.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="font-bold text-blue-300">Merge</h3>
                      <p className="text-slate-300 text-sm">Merge significa unir mudanças feitas em diferentes branches. Após concluir uma funcionalidade, você incorpora-a ao projeto principal.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Projeto Real: Criando um Site de Portfólio</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Vamos imaginar um cenário comum. Você decidiu criar um site para apresentar seus projetos. Aqui está como você usaria Git em cada etapa:
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-4 space-y-3 text-sm">
                    <div>
                      <p className="text-blue-300 font-bold">Passo 1: Cria o projeto</p>
                      <code className="text-slate-300">git init</code>
                    </div>
                    <div>
                      <p className="text-blue-300 font-bold">Passo 2: Adiciona a página inicial</p>
                      <code className="text-slate-300">git add . && git commit -m "Cria página inicial"</code>
                    </div>
                    <div>
                      <p className="text-blue-300 font-bold">Passo 3: Adiciona uma seção "Sobre Mim"</p>
                      <code className="text-slate-300">git add . && git commit -m "Adiciona seção sobre mim"</code>
                    </div>
                    <div>
                      <p className="text-blue-300 font-bold">Passo 4: Cria um branch para testar novo design</p>
                      <code className="text-slate-300">git switch -c redesign</code>
                    </div>
                    <div>
                      <p className="text-blue-300 font-bold">Passo 5: Após satisfeito, une com a versão principal</p>
                      <code className="text-slate-300">git switch main && git merge redesign</code>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Esse é exatamente o tipo de fluxo utilizado diariamente por equipes profissionais.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Resolvendo Conflitos</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Conflitos acontecem quando duas pessoas alteram a mesma parte do código. Git não sabe qual versão deve ser mantida.
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                    <p className="text-blue-300 font-bold mb-2">Exemplo de Conflito:</p>
                    <pre className="text-slate-300 text-sm overflow-x-auto">
{`<<<<<<< HEAD
console.log("Versão local");
=======
console.log("Versão remota");
>>>>>>> branch-remoto`}
                    </pre>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Nesse caso, Git está mostrando duas versões diferentes da mesma linha de código. Você deve analisar as alterações, decidir qual versão manter (ou combinar ambas) e então concluir a resolução do conflito. Embora pareçam assustadores no início, conflitos fazem parte do trabalho diário de qualquer desenvolvedor.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Comandos Git Essenciais</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="text-left py-2 px-3 text-blue-300">Comando</th>
                          <th className="text-left py-2 px-3 text-blue-300">Função</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700">
                        <tr><td className="py-2 px-3 text-slate-300">git init</td><td className="py-2 px-3 text-slate-400">Inicializa repositório</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git clone</td><td className="py-2 px-3 text-slate-400">Clona projeto</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git add</td><td className="py-2 px-3 text-slate-400">Adiciona arquivos</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git commit</td><td className="py-2 px-3 text-slate-400">Cria commit</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git push</td><td className="py-2 px-3 text-slate-400">Envia alterações</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git pull</td><td className="py-2 px-3 text-slate-400">Baixa alterações</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git status</td><td className="py-2 px-3 text-slate-400">Mostra status</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git branch</td><td className="py-2 px-3 text-slate-400">Lista branches</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git switch</td><td className="py-2 px-3 text-slate-400">Troca de branch</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git merge</td><td className="py-2 px-3 text-slate-400">Une branches</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git log</td><td className="py-2 px-3 text-slate-400">Histórico</td></tr>
                        <tr><td className="py-2 px-3 text-slate-300">git diff</td><td className="py-2 px-3 text-slate-400">Mostra alterações</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">Conclusão</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Linguagens mudam. Frameworks surgem e desaparecem. Ferramentas entram e saem de moda. Mas Git continua sendo uma das tecnologias mais importantes da indústria de software.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Ele protege seu trabalho. Facilita a colaboração. Permite construir um histórico profissional público. E acompanha praticamente toda a carreira de um desenvolvedor.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Se você pretende construir projetos reais, colaborar com outras pessoas ou ingressar no mercado de tecnologia, Git e GitHub serão companheiros constantes da sua jornada.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-12 border-t border-white/10">
                <div className="card-hover card-dev text-center">
                  <h3 className="text-xl font-bold mb-3">Pronto para começar?</h3>
                  <p className="text-slate-400 mb-6">
                    Explore mais tópicos sobre programação e comece a dominar Git e GitHub!
                  </p>
                  <Link
                    href="/programacao"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    ← Voltar para Programação
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
