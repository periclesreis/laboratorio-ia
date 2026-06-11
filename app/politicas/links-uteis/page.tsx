// app/politicas/links-uteis/page.tsx
import Link from "next/link";

export default function PoliticaPrivacidadeLinksUteisPage() {
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
            Aplicativo: <strong className="text-purple-300">Links Úteis</strong>
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
            <strong>Links Úteis</strong> (“Aplicativo”, “app”, “nós” ou
            “nosso”) trata as informações dos usuários.
          </p>

          <p>
            Nosso compromisso é oferecer uma experiência simples, segura e
            transparente, permitindo que o usuário organize e acesse links úteis
            diretamente pelo aplicativo, com foco na privacidade e no controle
            dos seus próprios dados.
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
              O <strong>Links Úteis</strong> foi desenvolvido para funcionar
              com o mínimo necessário de dados.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              1.1 Informações fornecidas pelo usuário
            </h3>

            <p>
              O usuário pode inserir voluntariamente informações dentro do
              Aplicativo, como:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>títulos de links;</li>
              <li>endereços de páginas da internet;</li>
              <li>descrições de links;</li>
              <li>nomes de pastas ou categorias;</li>
              <li>organização personalizada dos links;</li>
              <li>dados exportados em arquivos de backup.</li>
            </ul>

            <p>
              Essas informações são criadas e gerenciadas pelo próprio usuário.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              1.2 Armazenamento local
            </h3>

            <p>
              Por padrão, os dados criados no Aplicativo são armazenados
              localmente no dispositivo do usuário.
            </p>

            <p>Isso pode incluir:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>links salvos;</li>
              <li>pastas e categorias;</li>
              <li>preferências do aplicativo;</li>
              <li>configurações internas;</li>
              <li>dados de backup gerados pelo usuário.</li>
            </ul>

            <p>
              Essas informações não são enviadas automaticamente para nossos
              servidores.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              1.3 Informações técnicas
            </h3>

            <p>
              O Aplicativo pode utilizar informações técnicas básicas
              necessárias ao seu funcionamento, como dados relacionados à versão
              do app, configurações do dispositivo ou funcionamento interno do
              sistema.
            </p>

            <p>
              Essas informações são usadas apenas para manter o funcionamento
              correto do Aplicativo, melhorar a experiência do usuário e
              corrigir eventuais falhas.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              1.4 Informações que não coletamos
            </h3>

            <p>
              O <strong>Links Úteis</strong> não coleta intencionalmente:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>nome do usuário;</li>
              <li>endereço de e-mail;</li>
              <li>número de telefone;</li>
              <li>documentos pessoais;</li>
              <li>informações bancárias;</li>
              <li>dados biométricos;</li>
              <li>localização precisa;</li>
              <li>contatos do dispositivo;</li>
              <li>fotos, vídeos ou áudios pessoais;</li>
              <li>dados de câmera ou microfone;</li>
              <li>histórico de navegação fora do Aplicativo.</li>
            </ul>

            <p>
              O Aplicativo também não monitora os sites visitados pelo usuário
              fora do ambiente do app.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              2. Como usamos as informações
            </h2>

            <p>As informações tratadas pelo Aplicativo são utilizadas para:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>permitir que o usuário salve, organize e acesse links;</li>
              <li>criar e gerenciar pastas ou categorias;</li>
              <li>manter preferências e configurações do app;</li>
              <li>permitir exportação e importação de dados;</li>
              <li>preservar o funcionamento adequado do Aplicativo;</li>
              <li>melhorar a experiência do usuário;</li>
              <li>corrigir falhas técnicas;</li>
              <li>cumprir obrigações legais, quando aplicável.</li>
            </ul>

            <p>
              Não utilizamos os dados do usuário para venda, publicidade
              comportamental ou criação de perfis pessoais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              3. Permissões utilizadas pelo Aplicativo
            </h2>

            <p>
              O Aplicativo pode utilizar permissões ou recursos do dispositivo
              Android apenas quando necessários para suas funcionalidades.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              3.1 Acesso à Internet
            </h3>

            <p>
              O Aplicativo pode utilizar acesso à Internet para abrir links
              externos selecionados pelo usuário ou acessar conteúdos
              disponíveis online.
            </p>

            <p>
              Essa permissão não é usada para rastrear a navegação do usuário
              fora do Aplicativo.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              3.2 Armazenamento local
            </h3>

            <p>
              O Aplicativo pode utilizar armazenamento local para salvar links,
              pastas, preferências e arquivos de backup criados pelo usuário.
            </p>

            <p>
              Esses dados permanecem no dispositivo, salvo quando o próprio
              usuário decide exportar, compartilhar ou salvar uma cópia em outro
              local.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              3.3 Compartilhamento e backup
            </h3>

            <p>
              O usuário pode optar por exportar ou compartilhar seus dados por
              meio de recursos do próprio dispositivo, como e-mail,
              armazenamento em nuvem, aplicativos de mensagens ou outros
              serviços instalados.
            </p>

            <p>
              Nesses casos, o compartilhamento ocorre por escolha do usuário e
              pode estar sujeito às políticas de privacidade dos serviços
              utilizados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              4. Compartilhamento de dados
            </h2>

            <p>
              Nós não vendemos, alugamos ou comercializamos dados dos usuários.
            </p>

            <p>
              Como regra geral, os dados criados no{" "}
              <strong>Links Úteis</strong> permanecem armazenados localmente no
              dispositivo.
            </p>

            <p>O compartilhamento pode ocorrer apenas nas seguintes situações:</p>

            <ol className="list-decimal pl-6 space-y-2 text-slate-300">
              <li>
                <strong>Por ação do próprio usuário:</strong> quando o usuário
                decide exportar, enviar, compartilhar ou salvar um backup usando
                serviços externos.
              </li>
              <li>
                <strong>Por obrigação legal:</strong> quando houver exigência
                válida de autoridade competente ou obrigação prevista em lei.
              </li>
              <li>
                <strong>Para proteção de direitos:</strong> quando necessário
                para proteger a segurança, integridade ou funcionamento do
                Aplicativo, dentro dos limites permitidos pela legislação.
              </li>
            </ol>

            <p>
              Não compartilhamos dados pessoais para fins de publicidade ou venda
              de informações.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              5. Links externos
            </h2>

            <p>
              O Aplicativo pode conter ou permitir o acesso a links externos,
              incluindo sites, páginas, serviços ou conteúdos de terceiros.
            </p>

            <p>
              Ao abrir um link externo, o usuário passa a interagir com o site
              ou serviço acessado. Nesses casos, esta Política de Privacidade
              não se aplica às práticas desses terceiros.
            </p>

            <p>
              Recomendamos que o usuário leia a política de privacidade de cada
              site ou serviço acessado por meio dos links disponíveis no
              Aplicativo.
            </p>

            <p>
              Não somos responsáveis pelo conteúdo, práticas de privacidade,
              segurança ou funcionamento de sites externos acessados pelo
              usuário.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              6. Backup, exportação e importação de dados
            </h2>

            <p>
              O <strong>Links Úteis</strong> pode permitir que o usuário exporte
              ou importe seus próprios dados, como listas de links, pastas e
              categorias.
            </p>

            <p>Esses arquivos podem ser usados para:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>criar cópias de segurança;</li>
              <li>restaurar dados no mesmo dispositivo;</li>
              <li>transferir dados para outro dispositivo;</li>
              <li>guardar uma cópia pessoal das informações.</li>
            </ul>

            <p>
              O usuário é responsável por proteger os arquivos exportados e
              escolher com cuidado onde irá armazená-los ou compartilhá-los.
            </p>

            <p>
              Se o usuário salvar backups em serviços externos, como e-mail,
              armazenamento em nuvem ou aplicativos de terceiros, esses serviços
              poderão tratar os dados de acordo com suas próprias políticas de
              privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              7. Retenção e exclusão de dados
            </h2>

            <p>
              Os dados armazenados localmente permanecem no dispositivo enquanto
              o Aplicativo estiver instalado ou enquanto o usuário não apagar
              essas informações.
            </p>

            <p>O usuário pode excluir seus dados a qualquer momento por meio de ações como:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>apagar links individualmente;</li>
              <li>apagar pastas ou categorias;</li>
              <li>limpar os dados do Aplicativo nas configurações do Android;</li>
              <li>desinstalar o Aplicativo;</li>
              <li>excluir arquivos de backup que tenha criado.</li>
            </ul>

            <p>
              Ao desinstalar o Aplicativo, os dados locais associados ao app
              podem ser removidos do dispositivo, conforme o comportamento do
              sistema Android.
            </p>

            <p>
              Arquivos exportados ou compartilhados pelo usuário devem ser
              excluídos manualmente pelo próprio usuário no local onde foram
              salvos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              8. Segurança das informações
            </h2>

            <p>
              Adotamos medidas razoáveis para proteger as informações utilizadas
              pelo Aplicativo, especialmente considerando que os dados são
              armazenados localmente no dispositivo do usuário.
            </p>

            <p>Buscamos aplicar boas práticas de desenvolvimento, incluindo:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>tratamento mínimo de dados;</li>
              <li>armazenamento local das informações do usuário;</li>
              <li>ausência de coleta desnecessária de dados pessoais;</li>
              <li>uso das permissões apenas quando necessárias;</li>
              <li>incentivo ao controle do usuário sobre seus próprios dados.</li>
            </ul>

            <p>
              Apesar disso, nenhum sistema é totalmente imune a falhas, acessos
              indevidos ou riscos de segurança. Por isso, recomendamos que o
              usuário mantenha seu dispositivo protegido, atualizado e utilize
              recursos de segurança, como senha, bloqueio de tela ou biometria,
              quando disponíveis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              9. Privacidade de crianças e adolescentes
            </h2>

            <p>
              O <strong>Links Úteis</strong> não é direcionado especificamente
              a crianças e não coleta intencionalmente dados pessoais de
              menores.
            </p>

            <p>
              O Aplicativo foi projetado para funcionar sem exigir cadastro,
              nome, e-mail, telefone ou outras informações pessoais de
              identificação direta.
            </p>

            <p>
              Caso pais ou responsáveis legais acreditem que algum dado pessoal
              de menor tenha sido coletado indevidamente, poderão entrar em
              contato conosco para análise e providências cabíveis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              10. Direitos do usuário
            </h2>

            <p>
              De acordo com a legislação aplicável, incluindo a Lei Geral de
              Proteção de Dados Pessoais (LGPD), o usuário pode ter direitos
              relacionados aos seus dados pessoais, como:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>solicitar informações sobre o tratamento de dados;</li>
              <li>solicitar correção de dados;</li>
              <li>solicitar exclusão de dados;</li>
              <li>solicitar esclarecimentos sobre uso e armazenamento;</li>
              <li>revogar consentimentos, quando aplicável.</li>
            </ul>

            <p>
              Como o Aplicativo não exige cadastro e não coleta dados pessoais
              de identificação direta por padrão, muitas solicitações poderão
              ser resolvidas pelo próprio usuário diretamente no dispositivo,
              apagando dados do app, excluindo links ou desinstalando o
              Aplicativo.
            </p>

            <p>
              Mesmo assim, o usuário pode entrar em contato conosco para dúvidas
              ou solicitações relacionadas à privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              11. Serviços de terceiros
            </h2>

            <p>
              O Aplicativo pode permitir que o usuário acesse sites, aplicativos
              ou serviços externos por meio dos links salvos ou disponíveis no
              app.
            </p>

            <p>
              Esses serviços são independentes e possuem suas próprias políticas
              de privacidade.
            </p>

            <p>
              Não controlamos e não nos responsabilizamos pelas práticas de
              coleta, uso, armazenamento ou compartilhamento de dados realizadas
              por terceiros.
            </p>

            <p>
              Caso o Aplicativo venha a incorporar futuramente serviços de
              análise, publicidade, login, banco de dados externo, notificações,
              crash reporting ou qualquer outro serviço que envolva coleta
              adicional de dados, esta Política de Privacidade será atualizada
              para refletir essas mudanças.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              12. Alterações nesta Política de Privacidade
            </h2>

            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir mudanças no Aplicativo, exigências legais,
              requisitos da Google Play Store ou melhorias em nossas práticas de
              privacidade.
            </p>

            <p>
              A data da última atualização será sempre indicada no início deste
              documento.
            </p>

            <p>
              Recomendamos que o usuário revise esta Política ocasionalmente
              para se manter informado sobre como protegemos sua privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              13. Contato
            </h2>

            <p>
              Em caso de dúvidas, solicitações, reclamações ou preocupações
              relacionadas a esta Política de Privacidade ou ao tratamento de
              dados no Aplicativo, entre em contato pelo e-mail:
            </p>

            <p>
              <a
                href="mailto:labdeapp@gmail.com"
                className="font-bold text-purple-300 hover:text-purple-200"
              >
                labdeapp@gmail.com
              </a>
            </p>

            <p>
              Responderemos às solicitações dentro de prazo razoável, conforme a
              natureza do pedido e a legislação aplicável.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              14. Compromisso com a privacidade
            </h2>

            <p>
              O <strong>Links Úteis</strong> foi criado para facilitar o acesso
              e a organização de links importantes, respeitando a privacidade do
              usuário.
            </p>

            <p>
              Nosso objetivo é oferecer uma ferramenta simples, funcional e
              segura, sem coleta desnecessária de informações pessoais.
            </p>

            <p>
              A confiança do usuário é essencial. Por isso, buscamos manter uma
              política clara, transparente e compatível com as boas práticas de
              privacidade e proteção de dados.
            </p>
          </section>

          <section className="rounded-lg border border-purple-500/30 bg-slate-900/60 p-4 text-sm text-slate-400 space-y-1">
            <p>
              <strong className="text-purple-300">Desenvolvedor:</strong>{" "}
              Pericles Reis
            </p>
            <p>
              <strong className="text-purple-300">Aplicativo:</strong> Links
              Úteis
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
              <strong className="text-purple-300">
                Versão da Política:
              </strong>{" "}
              1.0
            </p>
            <p>
              <strong className="text-purple-300">
                Última atualização:
              </strong>{" "}
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