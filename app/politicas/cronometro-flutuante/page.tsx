// app/politicas/cronometro-flutuante/page.tsx
import Link from "next/link";

export default function PoliticaPrivacidadeCronometroFlutuantePage() {
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
            Aplicativo:{" "}
            <strong className="text-purple-300">Cronômetro Flutuante</strong>
          </p>

          <div className="mt-3 text-sm text-slate-500 space-y-1">
            <p>Última atualização: 11 de junho de 2026</p>
            <p>Versão: 1.0</p>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <article className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6 sm:p-8 space-y-7 leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como o aplicativo{" "}
            <strong>Cronômetro Flutuante</strong> (“Aplicativo”, “app”, “nós”
            ou “nosso”) trata as informações dos usuários.
          </p>

          <p>
            O <strong>Cronômetro Flutuante</strong> foi desenvolvido para
            oferecer uma ferramenta simples de contagem de tempo em uma janela
            flutuante sobre outros aplicativos, com foco em privacidade,
            transparência e funcionamento local no dispositivo do usuário.
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
              O <strong>Cronômetro Flutuante</strong> foi desenvolvido para
              funcionar localmente no dispositivo do usuário.
            </p>

            <p>
              O Aplicativo{" "}
              <strong>
                não coleta, armazena, processa, transmite ou compartilha dados
                pessoais
              </strong>{" "}
              dos usuários.
            </p>

            <p>Isso inclui, mas não se limita a:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>nome;</li>
              <li>endereço de e-mail;</li>
              <li>número de telefone;</li>
              <li>endereço IP;</li>
              <li>localização;</li>
              <li>contatos;</li>
              <li>fotos, vídeos ou arquivos pessoais;</li>
              <li>dados de câmera ou microfone;</li>
              <li>dados de uso;</li>
              <li>informações do dispositivo;</li>
              <li>conteúdo gerado pelo usuário;</li>
              <li>histórico de navegação;</li>
              <li>informações financeiras ou de pagamento.</li>
            </ul>

            <p>
              O Aplicativo não exige cadastro, login, criação de conta ou
              fornecimento de qualquer informação pessoal para ser utilizado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              2. Funcionamento local do Aplicativo
            </h2>

            <p>
              Todas as funcionalidades do{" "}
              <strong>Cronômetro Flutuante</strong> são executadas localmente no
              próprio dispositivo do usuário.
            </p>

            <p>
              O Aplicativo não envia informações para servidores externos, não
              mantém banco de dados online e não realiza sincronização
              automática de dados.
            </p>

            <p>
              As configurações ou preferências necessárias ao funcionamento do
              app, quando existentes, permanecem armazenadas localmente no
              dispositivo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              3. Uso de permissões
            </h2>

            <p>
              Para oferecer suas funcionalidades principais, o Aplicativo pode
              solicitar permissões específicas do sistema Android.
            </p>

            <p>
              Essas permissões são usadas exclusivamente para permitir o
              funcionamento do cronômetro em janela flutuante e recursos
              relacionados.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              3.1 Exibição sobre outros aplicativos
            </h3>

            <p>
              O Aplicativo pode solicitar permissão para exibir conteúdo sobre
              outros aplicativos.
            </p>

            <p>
              Essa permissão permite que o cronômetro permaneça visível na tela
              enquanto o usuário utiliza outros apps, de acordo com a finalidade
              principal do <strong>Cronômetro Flutuante</strong>.
            </p>

            <p>
              A permissão não é utilizada para capturar, ler, registrar ou
              monitorar o conteúdo exibido em outros aplicativos.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              3.2 Serviço em primeiro plano
            </h3>

            <p>
              O Aplicativo pode utilizar serviço em primeiro plano para manter o
              cronômetro funcionando de forma contínua enquanto a janela
              flutuante estiver ativa.
            </p>

            <p>
              Essa funcionalidade é necessária para que o contador continue
              operando mesmo quando o Aplicativo principal estiver minimizado ou
              quando o usuário estiver utilizando outros aplicativos.
            </p>

            <p>
              O uso do serviço em primeiro plano não envolve coleta, transmissão
              ou compartilhamento de dados pessoais.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              3.3 Notificações
            </h3>

            <p>
              Quando necessário, o Aplicativo pode exibir notificação
              relacionada ao funcionamento do cronômetro ou do serviço em
              primeiro plano.
            </p>

            <p>
              Essa notificação tem finalidade técnica e informativa, permitindo
              que o usuário saiba que o cronômetro está ativo e possa gerenciar
              sua execução.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              3.4 Acesso à Internet
            </h3>

            <p>
              O Aplicativo não depende de acesso à Internet para sua
              funcionalidade principal.
            </p>

            <p>
              Caso alguma versão futura utilize acesso à Internet para
              atualização, suporte, comunicação ou qualquer funcionalidade
              adicional, esta Política de Privacidade será atualizada para
              explicar a finalidade do uso.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              4. Finalidade do tratamento de dados
            </h2>

            <p>
              Como o Aplicativo não coleta dados pessoais, não há tratamento de
              informações pessoais para fins comerciais, publicitários ou de
              análise comportamental.
            </p>

            <p>As permissões e recursos do sistema são utilizados apenas para:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>exibir o cronômetro em janela flutuante;</li>
              <li>permitir que o cronômetro funcione sobre outros aplicativos;</li>
              <li>manter a contagem de tempo em execução;</li>
              <li>
                permitir que o usuário inicie, pause, zere, mova ou feche o
                cronômetro;
              </li>
              <li>garantir o funcionamento adequado do Aplicativo.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              5. Compartilhamento de informações
            </h2>

            <p>
              O <strong>Cronômetro Flutuante</strong> não vende, aluga,
              compartilha, transfere ou divulga dados pessoais dos usuários a
              terceiros.
            </p>

            <p>
              Como o Aplicativo não coleta dados pessoais, não há informações
              pessoais a serem compartilhadas com empresas, anunciantes,
              plataformas de análise ou outros terceiros.
            </p>

            <p>
              Informações somente poderão ser fornecidas se houver obrigação
              legal válida, ordem de autoridade competente ou necessidade de
              cumprimento da legislação aplicável. Ainda assim, como o
              Aplicativo não coleta dados pessoais, é possível que não existam
              informações de usuário disponíveis para fornecimento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              6. Serviços de terceiros
            </h2>

            <p>O Aplicativo não utiliza serviços de terceiros para:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>análise de dados;</li>
              <li>rastreamento de comportamento;</li>
              <li>publicidade;</li>
              <li>anúncios personalizados;</li>
              <li>coleta de estatísticas;</li>
              <li>login externo;</li>
              <li>banco de dados online;</li>
              <li>armazenamento em nuvem;</li>
              <li>monitoramento de navegação.</li>
            </ul>

            <p>
              Caso futuras versões do Aplicativo passem a utilizar qualquer
              serviço de terceiros que envolva coleta ou tratamento de dados,
              esta Política de Privacidade será atualizada antes ou no momento
              da implementação dessas funcionalidades.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              7. Segurança das informações
            </h2>

            <p>
              Como o Aplicativo não coleta, transmite ou armazena dados pessoais
              em servidores externos, os riscos relacionados ao tratamento de
              dados pessoais são reduzidos.
            </p>

            <p>Ainda assim, buscamos seguir boas práticas de desenvolvimento, incluindo:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>
                limitação do uso de permissões ao necessário para o
                funcionamento do Aplicativo;
              </li>
              <li>ausência de coleta desnecessária de dados;</li>
              <li>funcionamento local no dispositivo;</li>
              <li>transparência sobre as permissões utilizadas;</li>
              <li>
                respeito às políticas aplicáveis da plataforma Android e da
                Google Play.
              </li>
            </ul>

            <p>
              Nenhum sistema é totalmente imune a falhas. Por isso, recomendamos
              que o usuário mantenha seu dispositivo atualizado e utilize
              recursos de segurança disponíveis no Android.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              8. Retenção e exclusão de dados
            </h2>

            <p>
              O Aplicativo não mantém dados pessoais dos usuários em servidores.
            </p>

            <p>
              Eventuais configurações locais do app, quando existentes,
              permanecem no dispositivo do usuário enquanto o Aplicativo estiver
              instalado.
            </p>

            <p>
              O usuário pode remover informações locais relacionadas ao
              Aplicativo a qualquer momento por meio das configurações do
              Android, limpando os dados do app ou desinstalando o Aplicativo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              9. Privacidade de crianças
            </h2>

            <p>
              O <strong>Cronômetro Flutuante</strong> não coleta
              intencionalmente dados pessoais de crianças, adolescentes ou
              adultos.
            </p>

            <p>
              O Aplicativo não possui cadastro, login, publicidade
              comportamental ou recursos voltados à coleta de informações
              pessoais.
            </p>

            <p>
              Caso pais ou responsáveis legais tenham dúvidas sobre o uso do
              Aplicativo por menores de idade, podem entrar em contato pelo
              e-mail indicado nesta Política.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              10. Direitos do usuário
            </h2>

            <p>
              Nos termos da legislação aplicável, incluindo a Lei Geral de
              Proteção de Dados Pessoais — LGPD, o usuário pode ter direitos
              relacionados aos seus dados pessoais, como acesso, correção,
              exclusão, informação sobre tratamento e revogação de consentimento.
            </p>

            <p>
              Como o <strong>Cronômetro Flutuante</strong> não coleta nem
              processa dados pessoais, não há dados pessoais armazenados em
              nossos sistemas que possam ser acessados, corrigidos, exportados
              ou excluídos.
            </p>

            <p>
              Ainda assim, o usuário pode entrar em contato conosco para
              solicitar esclarecimentos sobre privacidade, permissões e
              funcionamento do Aplicativo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              11. Conformidade com a Google Play
            </h2>

            <p>
              O <strong>Cronômetro Flutuante</strong> foi desenvolvido para
              respeitar as políticas aplicáveis da Google Play, utilizando
              permissões apenas quando necessárias para o funcionamento das
              funcionalidades oferecidas.
            </p>

            <p>
              O uso de permissões relacionadas à exibição sobre outros
              aplicativos e ao serviço em primeiro plano tem como finalidade
              permitir que o cronômetro permaneça visível e funcional enquanto o
              usuário utiliza outros aplicativos.
            </p>

            <p>
              Essas permissões não são usadas para coletar, rastrear, monitorar
              ou compartilhar dados pessoais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              12. Alterações nesta Política de Privacidade
            </h2>

            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir melhorias no Aplicativo, mudanças nas
              funcionalidades, exigências legais ou requisitos da plataforma de
              distribuição.
            </p>

            <p>
              A versão mais recente estará disponível no link informado na
              página do Aplicativo.
            </p>

            <p>
              Recomendamos que o usuário revise esta Política ocasionalmente
              para se manter informado sobre as práticas de privacidade do{" "}
              <strong>Cronômetro Flutuante</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              13. Contato
            </h2>

            <p>
              Em caso de dúvidas, solicitações ou preocupações relacionadas a
              esta Política de Privacidade ou ao funcionamento do Aplicativo,
              entre em contato:
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
              14. Compromisso com a privacidade
            </h2>

            <p>
              O <strong>Cronômetro Flutuante</strong> foi criado para oferecer
              uma ferramenta prática, simples e funcional, sem coleta
              desnecessária de informações pessoais.
            </p>

            <p>
              Nosso compromisso é respeitar a privacidade do usuário, limitar o
              uso de permissões ao necessário e manter transparência sobre o
              funcionamento do Aplicativo.
            </p>
          </section>

          <section className="rounded-lg border border-purple-500/30 bg-slate-900/60 p-4 text-sm text-slate-400 space-y-1">
            <p>
              <strong className="text-purple-300">Aplicativo:</strong>{" "}
              Cronômetro Flutuante
            </p>
            <p>
              <strong className="text-purple-300">Responsável:</strong>{" "}
              Pericles Silva Reis
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
              <strong className="text-purple-300">Plataforma:</strong> Android
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