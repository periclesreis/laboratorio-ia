// app/politicas/jogo-casamento/page.tsx
import Link from "next/link";

export default function PoliticaPrivacidadeJogoCasamentoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/aplicativos"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar para Aplicativos</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Política de Privacidade
          </h1>

          <p className="mt-4 text-slate-400">
            Aplicativo: <strong className="text-purple-300">Jogo Casamento</strong>
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Última atualização: 11 de junho de 2026
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <article className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6 sm:p-8 space-y-7 leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como o aplicativo{" "}
            <strong>Jogo Casamento</strong> (“Aplicativo”, “jogo”, “nós” ou
            “nosso”) trata as informações dos usuários. Nosso compromisso é
            oferecer uma experiência de entretenimento simples, segura e
            transparente, respeitando a privacidade de todos que utilizam o
            Aplicativo.
          </p>

          <p>
            Ao instalar ou utilizar o Aplicativo, você declara estar ciente das
            práticas descritas nesta Política de Privacidade.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              1. Informações que coletamos
            </h2>

            <p>
              O Aplicativo foi desenvolvido com foco na privacidade do usuário.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              1.1 Dados pessoais
            </h3>

            <p>
              Nós não coletamos, solicitamos, armazenamos ou compartilhamos
              dados pessoais de identificação direta, como:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>nome;</li>
              <li>endereço;</li>
              <li>número de telefone;</li>
              <li>e-mail;</li>
              <li>documentos pessoais;</li>
              <li>dados de localização precisa;</li>
              <li>contatos;</li>
              <li>fotos, vídeos ou arquivos pessoais do usuário.</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300">
              1.2 Dados de jogo e progresso
            </h3>

            <p>
              O Aplicativo pode armazenar localmente, no próprio dispositivo do
              usuário, informações relacionadas ao funcionamento do jogo, como:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>pontuações;</li>
              <li>fases ou níveis alcançados;</li>
              <li>preferências básicas do jogo;</li>
              <li>progresso salvo;</li>
              <li>configurações internas necessárias para a experiência do usuário.</li>
            </ul>

            <p>
              Essas informações são utilizadas apenas para permitir o
              funcionamento adequado do Aplicativo e preservar a experiência do
              jogador. Esses dados não são usados para identificar pessoalmente
              o usuário.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              1.3 Dados anônimos ou técnicos
            </h3>

            <p>
              O Aplicativo pode utilizar informações técnicas não identificáveis
              para fins de melhoria da experiência, correção de erros e
              aprimoramento do desempenho. Quando utilizadas, essas informações
              não têm como objetivo identificar o usuário individualmente.
            </p>

            <p>
              Caso, no futuro, o Aplicativo passe a utilizar ferramentas de
              análise, publicidade, login, serviços online ou qualquer
              tecnologia que envolva coleta adicional de dados, esta Política de
              Privacidade será atualizada antes ou no momento da implementação
              dessas funcionalidades.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              2. Permissões utilizadas pelo Aplicativo
            </h2>

            <p>
              Para funcionar corretamente, o Aplicativo pode solicitar ou
              utilizar permissões e recursos do dispositivo Android.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              2.1 Acesso à Internet
            </h3>

            <p>
              O Aplicativo pode utilizar a permissão de acesso à Internet para
              finalidades técnicas relacionadas ao funcionamento do jogo, como
              carregar conteúdos dinâmicos, acessar recursos necessários ao
              funcionamento do Aplicativo ou permitir comunicações técnicas
              básicas.
            </p>

            <p>
              Essa permissão não é utilizada para monitorar a navegação do
              usuário fora do Aplicativo.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              2.2 Armazenamento local
            </h3>

            <p>
              O Aplicativo pode utilizar armazenamento local do próprio
              dispositivo para salvar informações do jogo, como progresso,
              pontuação e configurações.
            </p>

            <p>
              Essas informações permanecem no dispositivo do usuário, salvo se
              alguma funcionalidade futura informar expressamente o contrário
              nesta Política de Privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              3. Como usamos as informações
            </h2>

            <p>
              As informações tratadas pelo Aplicativo são utilizadas
              exclusivamente para:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>permitir o funcionamento correto do jogo;</li>
              <li>salvar progresso, pontuação e preferências;</li>
              <li>melhorar a experiência do usuário;</li>
              <li>corrigir falhas técnicas;</li>
              <li>manter a estabilidade e a segurança do Aplicativo.</li>
            </ul>

            <p>
              Não utilizamos informações do usuário para criar perfis pessoais,
              realizar rastreamento fora do Aplicativo ou vender dados a
              terceiros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              4. Compartilhamento de informações
            </h2>

            <p>
              Nós não vendemos, alugamos, trocamos ou comercializamos dados
              pessoais dos usuários.
            </p>

            <p>
              Como o Aplicativo não coleta dados pessoais de identificação
              direta, não compartilhamos esse tipo de informação com terceiros.
            </p>

            <p>
              Poderemos compartilhar informações somente quando isso for
              estritamente necessário para cumprir obrigações legais, responder
              a solicitações válidas de autoridades competentes ou proteger
              direitos, segurança e integridade do Aplicativo, sempre dentro dos
              limites permitidos pela legislação aplicável.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              5. Segurança das informações
            </h2>

            <p>
              Adotamos medidas razoáveis de segurança para proteger as
              informações relacionadas ao uso do Aplicativo.
            </p>

            <p>
              Os dados armazenados localmente, como progresso e pontuação,
              ficam no dispositivo do usuário. Ainda assim, nenhum método de
              armazenamento ou transmissão eletrônica é totalmente imune a
              riscos. Por isso, buscamos manter boas práticas de desenvolvimento
              e segurança compatíveis com a natureza do Aplicativo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              6. Retenção e exclusão de dados
            </h2>

            <p>
              As informações locais do jogo, como progresso e pontuação,
              permanecem armazenadas no dispositivo enquanto o Aplicativo
              estiver instalado ou enquanto o usuário não apagar os dados do app
              nas configurações do Android.
            </p>

            <p>
              O usuário pode excluir esses dados a qualquer momento por meio das
              configurações do dispositivo, desinstalando o Aplicativo ou
              limpando os dados do app.
            </p>

            <p>
              O Aplicativo não oferece criação de conta de usuário. Portanto,
              não há conta vinculada ao Aplicativo a ser excluída.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              7. Privacidade de crianças
            </h2>

            <p>
              O Aplicativo não coleta conscientemente dados pessoais de crianças.
            </p>

            <p>
              Como não solicitamos nome, e-mail, telefone, localização precisa
              ou outros dados pessoais, buscamos oferecer uma experiência segura
              e adequada para diferentes públicos.
            </p>

            <p>
              Caso um responsável legal acredite que alguma informação pessoal
              de uma criança tenha sido coletada indevidamente, poderá entrar em
              contato conosco para que a situação seja analisada e, se
              necessário, corrigida.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              8. Serviços de terceiros
            </h2>

            <p>
              No momento, o Aplicativo não utiliza serviços de terceiros para
              coletar dados pessoais dos usuários.
            </p>

            <p>
              Caso sejam incorporados futuramente serviços de terceiros, como
              ferramentas de análise, anúncios, login, hospedagem, banco de
              dados, notificações ou outros recursos externos, esta Política de
              Privacidade será atualizada para informar quais serviços são
              utilizados, quais dados podem ser tratados e para quais
              finalidades.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              9. Direitos do usuário
            </h2>

            <p>
              De acordo com a legislação aplicável, incluindo a Lei Geral de
              Proteção de Dados Pessoais (LGPD), o usuário pode ter direitos
              relacionados aos seus dados pessoais, incluindo solicitação de
              acesso, correção, exclusão ou esclarecimentos sobre o tratamento
              de informações.
            </p>

            <p>
              Como o Aplicativo não coleta dados pessoais de identificação
              direta, muitas dessas solicitações podem não se aplicar. Ainda
              assim, o usuário pode entrar em contato conosco para obter
              esclarecimentos sobre privacidade e uso de dados no Aplicativo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              10. Alterações nesta Política de Privacidade
            </h2>

            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir mudanças no Aplicativo, exigências legais,
              requisitos da Google Play Store ou melhorias em nossas práticas de
              privacidade.
            </p>

            <p>
              Recomendamos que o usuário revise esta Política ocasionalmente. A
              data da última atualização será sempre indicada no início do
              documento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              11. Contato
            </h2>

            <p>
              Em caso de dúvidas, solicitações ou preocupações relacionadas a
              esta Política de Privacidade ou ao tratamento de dados no
              Aplicativo, entre em contato pelo e-mail:
            </p>

            <p>
              <a
                href="mailto:labdeapp@gmail.com"
                className="font-bold text-purple-300 hover:text-purple-200"
              >
                labdeapp@gmail.com
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              12. Compromisso com a privacidade
            </h2>

            <p>
              Valorizamos a confiança dos usuários. Nosso objetivo é oferecer
              uma experiência de jogo agradável, transparente e segura, sem
              coleta desnecessária de informações pessoais.
            </p>

            <p>
              A privacidade do usuário é tratada como prioridade, e o Aplicativo
              foi desenvolvido para funcionar com o mínimo de dados possível.
            </p>
          </section>
          <section className="rounded-lg border border-purple-500/30 bg-slate-900/60 p-4 text-sm text-slate-400 space-y-1">
  <p>
    <strong className="text-purple-300">Desenvolvedor:</strong>{" "}
    Daniel Ferraz
  </p>

  <p>
    <strong className="text-purple-300">Aplicativo:</strong>{" "}
    Jogo Casamento
  </p>

  <p>
    <strong className="text-purple-300">Contato:</strong>{" "}
    <a
      href="mailto:labdeapp@gmail.com"
      className="text-purple-300 hover:text-purple-200"
    >
      labdeapp@gmail.com
    </a>
  </p>

  <p>
    <strong className="text-purple-300">Plataforma:</strong>{" "}
    Android
  </p>

  <p>
    <strong className="text-purple-300">Versão da Política:</strong>{" "}
    1.0
  </p>

  <p>
    <strong className="text-purple-300">Última atualização:</strong>{" "}
    11 de junho de 2026
  </p>
</section>
          <div className="pt-6 border-t border-purple-500/30">
            <Link
              href="/aplicativos"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition font-semibold"
            >
              <span>←</span>
              <span>Voltar para Aplicativos</span>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}