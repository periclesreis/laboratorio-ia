// app/politicas/site/page.tsx
import Link from "next/link";

export default function PoliticaPrivacidadeSitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar para o início</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Política de Privacidade
          </h1>

          <p className="mt-4 text-slate-400">
            Site: <strong className="text-purple-300">Laboratório de IA</strong>
          </p>

          <div className="mt-3 text-sm text-slate-500 space-y-1">
            <p>Data de vigência: 11 de junho de 2026</p>
            <p>Última atualização: 11 de junho de 2026</p>
            <p>Versão: 1.0</p>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <article className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6 sm:p-8 space-y-7 leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como o{" "}
            <strong>Laboratório de IA</strong> (“nós”, “nosso”, “nos” ou
            “Site”) coleta, utiliza, armazena, compartilha e protege as
            informações dos usuários que acessam o site{" "}
            <strong>laboratorio-ia.vercel.app</strong>.
          </p>

          <p>
            Ao acessar ou utilizar o Site, você declara estar ciente das
            práticas descritas nesta Política de Privacidade. Caso não concorde
            com os termos aqui apresentados, recomendamos que não utilize o
            Site.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              1. Quem somos
            </h2>

            <p>
              O <strong>Laboratório de IA</strong> é um site voltado à
              divulgação de conteúdos, projetos, ferramentas, estudos e
              materiais relacionados à inteligência artificial, programação,
              aplicativos e tecnologia.
            </p>

            <p>
              O Site pode disponibilizar páginas informativas, formulários de
              contato, envio de projetos e área administrativa restrita.
            </p>

            <p>
              Para assuntos relacionados à privacidade e proteção de dados,
              entre em contato pelo e-mail:
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
              2. Informações que coletamos
            </h2>

            <p>
              Podemos coletar informações fornecidas diretamente pelo usuário,
              informações técnicas coletadas automaticamente e informações
              necessárias para o funcionamento do Site.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              2.1 Informações fornecidas diretamente pelo usuário
            </h3>

            <p>
              Coletamos informações que você nos fornece voluntariamente ao
              utilizar determinados recursos do Site, incluindo:
            </p>

            <h4 className="text-lg font-semibold text-purple-300">
              Formulário de contato
            </h4>

            <p>
              Quando você entra em contato conosco pelo Site, podemos coletar:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>nome;</li>
              <li>endereço de e-mail;</li>
              <li>assunto da mensagem;</li>
              <li>conteúdo da mensagem enviada.</li>
            </ul>

            <p>
              Essas informações são utilizadas para responder à solicitação,
              dúvida, sugestão ou mensagem enviada pelo usuário.
            </p>

            <h4 className="text-lg font-semibold text-purple-300">
              Formulário de envio de projetos
            </h4>

            <p>
              Caso o Site permita o envio de projetos, podemos coletar:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>nome;</li>
              <li>endereço de e-mail;</li>
              <li>nome do projeto;</li>
              <li>linguagem, tecnologia ou categoria do projeto;</li>
              <li>descrição do projeto;</li>
              <li>arquivos enviados pelo usuário;</li>
              <li>demais informações inseridas voluntariamente no formulário.</li>
            </ul>

            <p>
              Esses dados são utilizados para analisar, organizar, responder ou
              eventualmente publicar informações relacionadas ao projeto,
              conforme a finalidade do envio.
            </p>

            <h4 className="text-lg font-semibold text-purple-300">
              Painel administrativo
            </h4>

            <p>
              O Site pode possuir uma área administrativa restrita. Para esse
              acesso, podem ser tratados:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>e-mail de administrador;</li>
              <li>senha criptografada ou protegida por hash;</li>
              <li>token ou cookie de autenticação;</li>
              <li>registros técnicos relacionados ao acesso administrativo.</li>
            </ul>

            <p>
              Essas informações são utilizadas exclusivamente para autenticação,
              segurança e controle de acesso à área restrita.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              3. Informações coletadas automaticamente
            </h2>

            <p>
              Ao acessar o Site, algumas informações técnicas podem ser
              coletadas automaticamente pelo navegador, servidor, plataforma de
              hospedagem ou ferramentas utilizadas para manter o funcionamento
              do Site.
            </p>

            <p>Essas informações podem incluir:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>endereço IP;</li>
              <li>tipo e versão do navegador;</li>
              <li>sistema operacional;</li>
              <li>tipo de dispositivo;</li>
              <li>páginas acessadas;</li>
              <li>data e horário de acesso;</li>
              <li>tempo aproximado de permanência;</li>
              <li>origem do acesso;</li>
              <li>dados técnicos de navegação;</li>
              <li>registros de erro e segurança.</li>
            </ul>

            <p>
              Essas informações são utilizadas para manter o funcionamento do
              Site, melhorar a experiência do usuário, corrigir falhas, proteger
              o ambiente contra acessos indevidos e compreender o uso geral das
              páginas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              4. Cookies e tecnologias semelhantes
            </h2>

            <p>
              O Site pode utilizar cookies e tecnologias semelhantes para
              permitir funcionalidades essenciais, melhorar a navegação e manter
              a segurança.
            </p>

            <p>
              Cookies são pequenos arquivos armazenados no dispositivo do
              usuário pelo navegador.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              4.1 Cookies essenciais
            </h3>

            <p>
              Podemos utilizar cookies necessários para o funcionamento do Site,
              como:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>autenticação de usuários autorizados;</li>
              <li>manutenção de sessão no painel administrativo;</li>
              <li>proteção contra acessos indevidos;</li>
              <li>funcionamento correto de recursos técnicos.</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300">
              4.2 Cookie de autenticação
            </h3>

            <p>
              O Site pode utilizar cookie ou token de autenticação, como{" "}
              <strong>auth-token</strong>, para manter o usuário autorizado
              conectado ao painel administrativo.
            </p>

            <p>
              Esse tipo de cookie é necessário para segurança e controle de
              acesso.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              4.3 Cookies de análise
            </h3>

            <p>
              Caso sejam utilizadas ferramentas de análise, cookies ou
              tecnologias semelhantes poderão ser usados para entender como os
              visitantes interagem com o Site.
            </p>

            <p>
              Essas informações, quando utilizadas, têm finalidade estatística,
              técnica e de melhoria do conteúdo.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              4.4 Gerenciamento de cookies
            </h3>

            <p>
              O usuário pode configurar seu navegador para bloquear, excluir ou
              alertar sobre cookies.
            </p>

            <p>
              No entanto, a desativação de determinados cookies pode afetar o
              funcionamento de algumas áreas do Site, especialmente recursos de
              autenticação e administração.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              5. Como utilizamos as informações
            </h2>

            <p>
              As informações coletadas podem ser utilizadas para as seguintes
              finalidades:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>responder mensagens enviadas pelo formulário de contato;</li>
              <li>receber, analisar e organizar projetos enviados pelos usuários;</li>
              <li>administrar conteúdos, projetos e páginas do Site;</li>
              <li>autenticar acesso ao painel administrativo;</li>
              <li>proteger o Site contra acessos indevidos, fraudes, abusos ou falhas;</li>
              <li>melhorar a navegação e a experiência do usuário;</li>
              <li>corrigir erros técnicos;</li>
              <li>manter registros necessários para segurança;</li>
              <li>cumprir obrigações legais ou regulatórias;</li>
              <li>
                exercer direitos em processos administrativos, judiciais ou
                extrajudiciais.
              </li>
            </ul>

            <p>Não utilizamos dados pessoais para venda a terceiros.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              6. Base legal para o tratamento de dados
            </h2>

            <p>
              Quando aplicável, o tratamento de dados pessoais pelo Laboratório
              de IA poderá ocorrer com base nas hipóteses previstas na Lei Geral
              de Proteção de Dados Pessoais — LGPD, incluindo:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>
                consentimento do titular, quando o usuário envia informações
                voluntariamente;
              </li>
              <li>execução de procedimentos solicitados pelo próprio usuário;</li>
              <li>cumprimento de obrigação legal ou regulatória;</li>
              <li>
                legítimo interesse para manutenção, segurança e melhoria do
                Site;
              </li>
              <li>
                exercício regular de direitos em processos administrativos,
                judiciais ou extrajudiciais.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              7. Compartilhamento de informações
            </h2>

            <p>
              Nós não vendemos, alugamos ou comercializamos dados pessoais dos
              usuários.
            </p>

            <p>
              As informações poderão ser compartilhadas apenas quando necessário
              para o funcionamento do Site, cumprimento de obrigações legais ou
              proteção de direitos.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              7.1 Prestadores de serviço
            </h3>

            <p>
              O Site pode utilizar serviços de terceiros para hospedagem, banco
              de dados, envio de e-mails, infraestrutura, segurança ou
              funcionalidades técnicas.
            </p>

            <p>Esses serviços podem incluir, conforme a configuração do Site:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>
                <strong>Vercel</strong>, para hospedagem e infraestrutura;
              </li>
              <li>
                <strong>Neon PostgreSQL</strong>, para armazenamento de dados em
                banco de dados;
              </li>
              <li>serviços de envio de e-mail, quando utilizados;</li>
              <li>
                ferramentas técnicas necessárias para funcionamento, segurança
                ou manutenção.
              </li>
            </ul>

            <p>
              Esses prestadores podem processar dados apenas na medida
              necessária para prestar seus serviços.
            </p>

            <h3 className="text-xl font-semibold text-purple-300">
              7.2 Exigência legal
            </h3>

            <p>Poderemos compartilhar informações quando necessário para:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>cumprir lei, ordem judicial ou requisição de autoridade competente;</li>
              <li>proteger direitos, segurança e integridade do Site;</li>
              <li>
                investigar ou prevenir fraude, abuso, acesso indevido ou
                atividade ilegal.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300">
              7.3 Dados agregados ou anônimos
            </h3>

            <p>
              Podemos utilizar ou compartilhar informações agregadas,
              estatísticas ou anônimas que não identificam diretamente o
              usuário, para fins de análise, melhoria do Site ou demonstração de
              desempenho.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              8. Armazenamento e retenção dos dados
            </h2>

            <p>
              As informações pessoais serão mantidas apenas pelo tempo
              necessário para cumprir as finalidades descritas nesta Política de
              Privacidade, salvo quando houver obrigação legal, necessidade de
              segurança ou exercício regular de direitos.
            </p>

            <p>Exemplos de retenção:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>
                mensagens de contato podem ser mantidas pelo tempo necessário
                para atendimento e histórico da solicitação;
              </li>
              <li>
                dados de projetos enviados podem ser mantidos enquanto forem
                necessários para análise, publicação, organização ou comunicação
                com o usuário;
              </li>
              <li>
                dados de autenticação administrativa serão mantidos enquanto o
                acesso for necessário;
              </li>
              <li>
                registros técnicos de acesso e segurança podem ser mantidos por
                prazo razoável para proteção do Site.
              </li>
            </ul>

            <p>
              O usuário pode solicitar a exclusão de seus dados pessoais,
              observadas as obrigações legais e técnicas aplicáveis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              9. Segurança dos dados
            </h2>

            <p>
              Adotamos medidas técnicas e organizacionais razoáveis para
              proteger as informações tratadas pelo Site.
            </p>

            <p>Essas medidas podem incluir:</p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>uso de conexão segura por HTTPS;</li>
              <li>controle de acesso ao painel administrativo;</li>
              <li>armazenamento de senhas por meio de hash seguro, quando aplicável;</li>
              <li>restrição de acesso a informações sensíveis;</li>
              <li>monitoramento de falhas e acessos indevidos;</li>
              <li>boas práticas de desenvolvimento e segurança;</li>
              <li>uso de variáveis de ambiente para informações sensíveis do sistema.</li>
            </ul>

            <p>
              Apesar dos esforços de segurança, nenhum sistema é totalmente
              imune a riscos. Por isso, não é possível garantir segurança
              absoluta contra falhas, ataques, interceptações ou acessos não
              autorizados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              10. Direitos do usuário
            </h2>

            <p>
              Nos termos da legislação aplicável, especialmente a LGPD, o
              usuário pode solicitar:
            </p>

            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>confirmação da existência de tratamento de dados;</li>
              <li>acesso aos dados pessoais;</li>
              <li>correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>
                anonimização, bloqueio ou eliminação de dados desnecessários ou
                tratados em desconformidade;
              </li>
              <li>portabilidade dos dados, quando aplicável;</li>
              <li>informação sobre compartilhamento de dados;</li>
              <li>
                revogação de consentimento, quando o tratamento depender de
                consentimento;
              </li>
              <li>
                eliminação de dados tratados com base no consentimento,
                observadas as hipóteses legais;
              </li>
              <li>
                revisão ou esclarecimento sobre decisões automatizadas, se
                existirem.
              </li>
            </ul>

            <p>Para exercer seus direitos, envie uma solicitação para:</p>

            <p>
              <a
                href="mailto:labdeapp@gmail.com"
                className="font-bold text-purple-300 hover:text-purple-200"
              >
                labdeapp@gmail.com
              </a>
            </p>

            <p>
              A solicitação será analisada e respondida dentro de prazo
              razoável, conforme a legislação aplicável e a natureza do pedido.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              11. Links para sites de terceiros
            </h2>

            <p>
              O Site pode conter links para páginas, ferramentas, plataformas ou
              serviços externos.
            </p>

            <p>
              Ao clicar em um link externo, o usuário será direcionado para
              ambiente de terceiros. Esta Política de Privacidade não se aplica
              a esses sites, serviços ou plataformas.
            </p>

            <p>
              Não nos responsabilizamos pelas práticas de privacidade,
              segurança, conteúdo ou funcionamento de sites de terceiros.
            </p>

            <p>
              Recomendamos que o usuário leia a política de privacidade de cada
              site acessado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              12. Envio de arquivos e projetos
            </h2>

            <p>
              Caso o Site permita o envio de arquivos ou projetos, o usuário
              declara que possui autorização para enviar o conteúdo e que o
              material não viola direitos de terceiros.
            </p>

            <p>
              Os arquivos enviados poderão ser analisados para fins de avaliação,
              organização, resposta ao usuário ou eventual publicação, conforme a
              finalidade informada no próprio Site.
            </p>

            <p>
              Não envie arquivos que contenham dados pessoais sensíveis,
              informações sigilosas, senhas, chaves de API, documentos pessoais,
              dados bancários ou informações de terceiros sem autorização.
            </p>

            <p>
              Podemos remover, recusar ou excluir arquivos enviados quando
              houver suspeita de violação legal, risco de segurança ou
              inadequação ao propósito do Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              13. Privacidade de crianças e adolescentes
            </h2>

            <p>
              O Site não é direcionado especificamente a crianças e não tem como
              objetivo coletar intencionalmente dados pessoais de menores de
              idade.
            </p>

            <p>
              Caso pais ou responsáveis legais identifiquem que uma criança ou
              adolescente forneceu dados pessoais indevidamente, poderão entrar
              em contato conosco pelo e-mail:
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
              Após análise, adotaremos as medidas cabíveis para exclusão ou
              regularização das informações, quando aplicável.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              14. Transferência internacional de dados
            </h2>

            <p>
              Como o Site utiliza serviços de hospedagem, banco de dados ou
              infraestrutura que podem operar em servidores localizados fora do
              Brasil, algumas informações poderão ser processadas em outros
              países.
            </p>

            <p>
              Quando isso ocorrer, buscaremos utilizar prestadores de serviço
              que adotem medidas adequadas de segurança e proteção de dados,
              observando a legislação aplicável.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              15. Alterações nesta Política de Privacidade
            </h2>

            <p>
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir mudanças no Site, nas funcionalidades oferecidas,
              nas tecnologias utilizadas ou em exigências legais.
            </p>

            <p>
              A versão mais recente estará disponível no próprio Site, com a
              respectiva data de atualização.
            </p>

            <p>
              O uso contínuo do Site após alterações indica ciência da versão
              atualizada da Política de Privacidade.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              16. Contato
            </h2>

            <p>
              Em caso de dúvidas, solicitações, reclamações ou pedidos
              relacionados a esta Política de Privacidade ou ao tratamento de
              dados pessoais, entre em contato:
            </p>

            <div className="rounded-lg border border-purple-500/30 bg-slate-900/60 p-4 text-sm text-slate-300 space-y-2">
              <p>
                <strong className="text-purple-300">E-mail:</strong>{" "}
                <a
                  href="mailto:labdeapp@gmail.com"
                  className="text-purple-300 hover:text-purple-200"
                >
                  labdeapp@gmail.com
                </a>
              </p>

              <p>
                <strong className="text-purple-300">Site:</strong>{" "}
                laboratorio-ia.vercel.app
              </p>

              <p>
                <strong className="text-purple-300">Página de contato:</strong>{" "}
                laboratorio-ia.vercel.app/contato
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-purple-400">
              17. Disposições finais
            </h2>

            <p>
              Esta Política de Privacidade será interpretada de acordo com as
              leis da República Federativa do Brasil, especialmente a Lei Geral
              de Proteção de Dados Pessoais — LGPD.
            </p>

            <p>
              Eventuais controvérsias relacionadas a esta Política serão
              resolvidas conforme a legislação brasileira aplicável.
            </p>
          </section>

          <section className="rounded-lg border border-purple-500/30 bg-slate-900/60 p-4 text-sm text-slate-400 space-y-1">
            <p>
              <strong className="text-purple-300">Laboratório de IA</strong>
            </p>

            <p>
              <strong className="text-purple-300">Versão:</strong> 1.0
            </p>

            <p>
              <strong className="text-purple-300">Status:</strong> Ativa
            </p>

            <p>
              <strong className="text-purple-300">
                Última atualização:
              </strong>{" "}
              11 de junho de 2026
            </p>

            <p>
              <strong className="text-purple-300">
                Próxima revisão sugerida:
              </strong>{" "}
              11 de junho de 2027
            </p>
          </section>

          <div className="pt-6 border-t border-purple-500/30">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition font-semibold"
            >
              <span>←</span>
              <span>Voltar para o início</span>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}