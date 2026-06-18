import Link from "next/link";

const metaItems = [
  ["Última atualização", "17 de junho de 2026"],
  ["Aplicativo", "Links & Notas"],
  ["Desenvolvedor", "Pericles Reis"],
  ["Contato", "labdeapp@gmail.com"],
  ["Plataforma", "Android"],
  ["Versão da Política", "2.0"],
];

const sections = [
  {
    title: "1. Informações que coletamos",
    paragraphs: [
      "O Links & Notas foi desenvolvido para funcionar com o mínimo necessário de dados.",
    ],
    subsections: [
      {
        title: "1.1 Informações fornecidas pelo usuário",
        paragraphs: [
          "O usuário pode inserir voluntariamente informações dentro do Aplicativo, como:",
        ],
        bullets: [
          "títulos de links;",
          "endereços de páginas da internet;",
          "descrições de links;",
          "nomes de pastas ou categorias;",
          "organização personalizada dos links;",
          "títulos de notas;",
          "conteúdo de anotações;",
          "organização de notas em pastas;",
          "cores, marcações ou preferências associadas às notas;",
          "dados exportados em arquivos de backup.",
        ],
        after: [
          "Essas informações são criadas, editadas e gerenciadas pelo próprio usuário.",
        ],
      },
      {
        title: "1.2 Armazenamento local",
        paragraphs: [
          "Por padrão, os dados criados no Aplicativo são armazenados localmente no dispositivo do usuário.",
          "Isso pode incluir:",
        ],
        bullets: [
          "links salvos;",
          "pastas e categorias;",
          "notas e anotações criadas pelo usuário;",
          "organização de links e notas;",
          "preferências do aplicativo;",
          "configurações internas;",
          "dados de backup gerados pelo usuário.",
        ],
        after: [
          "Essas informações não são enviadas automaticamente para nossos servidores.",
        ],
      },
      {
        title: "1.3 Informações técnicas",
        paragraphs: [
          "O Aplicativo pode utilizar informações técnicas básicas necessárias ao seu funcionamento, como dados relacionados à versão do app, configurações do dispositivo ou funcionamento interno do sistema.",
          "Essas informações são usadas apenas para manter o funcionamento correto do Aplicativo, melhorar a experiência do usuário e corrigir eventuais falhas.",
        ],
      },
      {
        title: "1.4 Informações que não coletamos",
        paragraphs: ["O Links & Notas não coleta intencionalmente:"],
        bullets: [
          "nome do usuário;",
          "endereço de e-mail;",
          "número de telefone;",
          "documentos pessoais;",
          "informações bancárias;",
          "dados biométricos;",
          "localização precisa;",
          "contatos do dispositivo;",
          "fotos, vídeos ou áudios pessoais;",
          "dados de câmera ou microfone;",
          "histórico de navegação fora do Aplicativo.",
        ],
        after: [
          "O Aplicativo também não monitora os sites visitados pelo usuário fora do ambiente do app.",
        ],
      },
    ],
  },
  {
    title: "2. Como usamos as informações",
    paragraphs: ["As informações tratadas pelo Aplicativo são utilizadas para:"],
    bullets: [
      "permitir que o usuário salve, organize e acesse links;",
      "permitir que o usuário crie, edite, organize e consulte anotações;",
      "criar e gerenciar pastas ou categorias;",
      "manter preferências e configurações do app;",
      "permitir exportação e importação de dados;",
      "preservar o funcionamento adequado do Aplicativo;",
      "melhorar a experiência do usuário;",
      "corrigir falhas técnicas;",
      "cumprir obrigações legais, quando aplicável.",
    ],
    after: [
      "Não utilizamos os dados do usuário para venda, publicidade comportamental ou criação de perfis pessoais.",
    ],
  },
  {
    title: "3. Permissões utilizadas pelo Aplicativo",
    paragraphs: [
      "O Aplicativo pode utilizar permissões ou recursos do dispositivo Android apenas quando necessários para suas funcionalidades.",
    ],
    subsections: [
      {
        title: "3.1 Acesso à Internet",
        paragraphs: [
          "O Aplicativo pode utilizar acesso à Internet para abrir links externos selecionados pelo usuário ou acessar conteúdos disponíveis online.",
          "Essa permissão não é usada para rastrear a navegação do usuário fora do Aplicativo.",
        ],
      },
      {
        title: "3.2 Armazenamento local",
        paragraphs: [
          "O Aplicativo pode utilizar armazenamento local para salvar links, notas, pastas, preferências e arquivos de backup criados pelo usuário.",
          "Esses dados permanecem no dispositivo, salvo quando o próprio usuário decide exportar, compartilhar ou salvar uma cópia em outro local.",
        ],
      },
      {
        title: "3.3 Compartilhamento e backup",
        paragraphs: [
          "O usuário pode optar por exportar ou compartilhar seus dados por meio de recursos do próprio dispositivo, como e-mail, armazenamento em nuvem, aplicativos de mensagens ou outros serviços instalados.",
          "Nesses casos, o compartilhamento ocorre por escolha do usuário e pode estar sujeito às políticas de privacidade dos serviços utilizados.",
        ],
      },
    ],
  },
  {
    title: "4. Compartilhamento de dados",
    paragraphs: [
      "Nós não vendemos, alugamos ou comercializamos dados dos usuários.",
      "Como regra geral, os dados criados no Links & Notas permanecem armazenados localmente no dispositivo.",
      "O compartilhamento pode ocorrer apenas nas seguintes situações:",
    ],
    bullets: [
      "Por ação do próprio usuário: quando o usuário decide exportar, enviar, compartilhar ou salvar um backup usando serviços externos.",
      "Por obrigação legal: quando houver exigência válida de autoridade competente ou obrigação prevista em lei.",
      "Para proteção de direitos: quando necessário para proteger a segurança, integridade ou funcionamento do Aplicativo, dentro dos limites permitidos pela legislação.",
    ],
    after: [
      "Não compartilhamos dados pessoais para fins de publicidade ou venda de informações.",
    ],
  },
  {
    title: "5. Links externos",
    paragraphs: [
      "O Aplicativo pode conter ou permitir o acesso a links externos, incluindo sites, páginas, serviços ou conteúdos de terceiros.",
      "Ao abrir um link externo, o usuário passa a interagir com o site ou serviço acessado. Nesses casos, esta Política de Privacidade não se aplica às práticas desses terceiros.",
      "Recomendamos que o usuário leia a política de privacidade de cada site ou serviço acessado por meio dos links disponíveis no Aplicativo.",
      "Não somos responsáveis pelo conteúdo, práticas de privacidade, segurança ou funcionamento de sites externos acessados pelo usuário.",
    ],
  },
  {
    title: "6. Notas e anotações do usuário",
    paragraphs: [
      "O Links & Notas permite que o usuário crie, edite, organize e armazene anotações diretamente no Aplicativo.",
      "Essas notas podem conter textos criados livremente pelo usuário. O conteúdo das anotações é de responsabilidade do próprio usuário e permanece armazenado localmente no dispositivo, salvo quando o usuário optar por exportar, compartilhar ou fazer backup desses dados.",
      "Recomendamos que o usuário evite armazenar no Aplicativo informações altamente sensíveis, como senhas bancárias, documentos pessoais, dados financeiros sigilosos ou outras informações que exijam proteção especial.",
      "Caso o usuário utilize recursos de compartilhamento, exportação ou backup para enviar suas notas a outros aplicativos ou serviços, esses dados passarão a estar sujeitos às políticas de privacidade dos serviços escolhidos pelo próprio usuário.",
    ],
  },
  {
    title: "7. Backup, exportação e importação de dados",
    paragraphs: [
      "O Links & Notas pode permitir que o usuário exporte ou importe seus próprios dados, como listas de links, pastas, categorias e anotações.",
      "Esses arquivos podem ser usados para:",
    ],
    bullets: [
      "criar cópias de segurança;",
      "restaurar dados no mesmo dispositivo;",
      "transferir dados para outro dispositivo;",
      "guardar uma cópia pessoal das informações.",
    ],
    after: [
      "O usuário é responsável por proteger os arquivos exportados e escolher com cuidado onde irá armazená-los ou compartilhá-los.",
      "Se o usuário salvar backups em serviços externos, como e-mail, armazenamento em nuvem ou aplicativos de terceiros, esses serviços poderão tratar os dados de acordo com suas próprias políticas de privacidade.",
    ],
  },
  {
    title: "8. Retenção e exclusão de dados",
    paragraphs: [
      "Os dados armazenados localmente permanecem no dispositivo enquanto o Aplicativo estiver instalado ou enquanto o usuário não apagar essas informações.",
      "O usuário pode excluir seus dados a qualquer momento por meio de ações como:",
    ],
    bullets: [
      "apagar links individualmente;",
      "apagar notas individualmente;",
      "apagar pastas ou categorias;",
      "limpar os dados do Aplicativo nas configurações do Android;",
      "desinstalar o Aplicativo;",
      "excluir arquivos de backup que tenha criado.",
    ],
    after: [
      "Ao desinstalar o Aplicativo, os dados locais associados ao app podem ser removidos do dispositivo, conforme o comportamento do sistema Android.",
      "Arquivos exportados ou compartilhados pelo usuário devem ser excluídos manualmente pelo próprio usuário no local onde foram salvos.",
    ],
  },
  {
    title: "9. Segurança das informações",
    paragraphs: [
      "Adotamos medidas razoáveis para proteger as informações utilizadas pelo Aplicativo, especialmente considerando que os dados são armazenados localmente no dispositivo do usuário.",
      "Buscamos aplicar boas práticas de desenvolvimento, incluindo:",
    ],
    bullets: [
      "tratamento mínimo de dados;",
      "armazenamento local das informações do usuário;",
      "ausência de coleta desnecessária de dados pessoais;",
      "uso das permissões apenas quando necessárias;",
      "incentivo ao controle do usuário sobre seus próprios dados.",
    ],
    after: [
      "Apesar disso, nenhum sistema é totalmente imune a falhas, acessos indevidos ou riscos de segurança. Por isso, recomendamos que o usuário mantenha seu dispositivo protegido, atualizado e utilize recursos de segurança, como senha, bloqueio de tela ou biometria, quando disponíveis.",
    ],
  },
  {
    title: "10. Privacidade de crianças e adolescentes",
    paragraphs: [
      "O Links & Notas não é direcionado especificamente a crianças e não coleta intencionalmente dados pessoais de menores.",
      "O Aplicativo foi projetado para funcionar sem exigir cadastro, nome, e-mail, telefone ou outras informações pessoais de identificação direta.",
      "Caso pais ou responsáveis legais acreditem que algum dado pessoal de menor tenha sido coletado indevidamente, poderão entrar em contato conosco para análise e providências cabíveis.",
    ],
  },
  {
    title: "11. Direitos do usuário",
    paragraphs: [
      "De acordo com a legislação aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD), o usuário pode ter direitos relacionados aos seus dados pessoais, como:",
    ],
    bullets: [
      "solicitar informações sobre o tratamento de dados;",
      "solicitar correção de dados;",
      "solicitar exclusão de dados;",
      "solicitar esclarecimentos sobre uso e armazenamento;",
      "revogar consentimentos, quando aplicável.",
    ],
    after: [
      "Como o Aplicativo não exige cadastro e não coleta dados pessoais de identificação direta por padrão, muitas solicitações poderão ser resolvidas pelo próprio usuário diretamente no dispositivo, apagando dados do app, excluindo links, excluindo notas ou desinstalando o Aplicativo.",
      "Mesmo assim, o usuário pode entrar em contato conosco para dúvidas ou solicitações relacionadas à privacidade.",
    ],
  },
  {
    title: "12. Serviços de terceiros",
    paragraphs: [
      "O Aplicativo pode permitir que o usuário acesse sites, aplicativos ou serviços externos por meio dos links salvos ou disponíveis no app.",
      "Esses serviços são independentes e possuem suas próprias políticas de privacidade.",
      "Não controlamos e não nos responsabilizamos pelas práticas de coleta, uso, armazenamento ou compartilhamento de dados realizadas por terceiros.",
      "Caso o Aplicativo venha a incorporar futuramente serviços de análise, publicidade, login, banco de dados externo, notificações, crash reporting ou qualquer outro serviço que envolva coleta adicional de dados, esta Política de Privacidade será atualizada para refletir essas mudanças.",
    ],
  },
  {
    title: "13. Alterações nesta Política de Privacidade",
    paragraphs: [
      "Esta Política de Privacidade poderá ser atualizada periodicamente para refletir mudanças no Aplicativo, exigências legais, requisitos da Google Play Store ou melhorias em nossas práticas de privacidade.",
      "A data da última atualização será sempre indicada no início deste documento.",
      "Recomendamos que o usuário revise esta Política ocasionalmente para se manter informado sobre como protegemos sua privacidade.",
    ],
  },
  {
    title: "14. Contato",
    paragraphs: [
      "Em caso de dúvidas, solicitações, reclamações ou preocupações relacionadas a esta Política de Privacidade ou ao tratamento de dados no Aplicativo, entre em contato pelo e-mail:",
      "labdeapp@gmail.com",
      "Responderemos às solicitações dentro de prazo razoável, conforme a natureza do pedido e a legislação aplicável.",
    ],
  },
  {
    title: "15. Compromisso com a privacidade",
    paragraphs: [
      "O Links & Notas foi criado para facilitar o acesso e a organização de links importantes e anotações pessoais, respeitando a privacidade do usuário.",
      "Nosso objetivo é oferecer uma ferramenta simples, funcional e segura, sem coleta desnecessária de informações pessoais.",
      "A confiança do usuário é essencial. Por isso, buscamos manter uma política clara, transparente e compatível com as boas práticas de privacidade e proteção de dados.",
    ],
  },
];

function Paragraphs({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

function Bullets({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className="list-disc space-y-1 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PoliticaLinksNotasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/aplicativos"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar</span>
          </Link>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-[1.15] pb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Política de Privacidade
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Links & Notas
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="rounded-2xl border-2 border-purple-500/60 bg-slate-900/80 p-6 sm:p-8 shadow-lg shadow-purple-500/10">
          <header className="mb-10 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Política de Privacidade — Links & Notas
            </h2>

            <div className="space-y-1 text-sm text-slate-300">
              {metaItems.map(([label, value]) => (
                <p key={label}>
                  <strong className="text-slate-100">{label}:</strong>{" "}
                  {label === "Contato" ? (
                    <a
                      href={`mailto:${value}`}
                      className="text-purple-400 hover:text-purple-300 transition"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </p>
              ))}
            </div>
          </header>

          <div className="mb-10 space-y-4 text-slate-300 leading-relaxed">
            <p>
              Esta Política de Privacidade descreve como o aplicativo{" "}
              <strong className="text-slate-100">Links & Notas</strong>{" "}
              (“Aplicativo”, “app”, “nós” ou “nosso”) trata as informações dos
              usuários.
            </p>

            <p>
              Nosso compromisso é oferecer uma experiência simples, segura e
              transparente, permitindo que o usuário organize e acesse links
              úteis, crie anotações, organize conteúdos em pastas e mantenha
              seus próprios dados sob seu controle.
            </p>

            <p>
              Ao instalar ou utilizar o Aplicativo, você declara estar ciente das
              práticas descritas nesta Política de Privacidade.
            </p>
          </div>

          <div className="space-y-10 text-slate-300 leading-relaxed">
            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-400">
                  {section.title}
                </h3>

                <Paragraphs items={section.paragraphs} />
                <Bullets items={section.bullets} />
                <Paragraphs items={section.after} />

                {section.subsections?.map((subsection) => (
                  <div key={subsection.title} className="space-y-4 pt-2">
                    <h4 className="text-xl font-bold text-purple-300">
                      {subsection.title}
                    </h4>

                    <Paragraphs items={subsection.paragraphs} />
                    <Bullets items={subsection.bullets} />
                    <Paragraphs items={subsection.after} />
                  </div>
                ))}
              </section>
            ))}
          </div>

          <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-300">
            <div className="space-y-1">
              {metaItems.slice(1).map(([label, value]) => (
                <p key={label}>
                  <strong className="text-slate-100">{label}:</strong>{" "}
                  {label === "Contato" ? (
                    <a
                      href={`mailto:${value}`}
                      className="text-purple-400 hover:text-purple-300 transition"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </p>
              ))}

              <p>
                <strong className="text-slate-100">Última atualização:</strong>{" "}
                17 de junho de 2026
              </p>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}