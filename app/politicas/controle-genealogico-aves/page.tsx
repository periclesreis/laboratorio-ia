import Link from "next/link";

export default function PoliticaControleGenealogicoAvesPage() {
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
            Controle Genealógico de Aves
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="rounded-2xl border-2 border-purple-500/60 bg-slate-900/80 p-6 sm:p-8 shadow-lg shadow-purple-500/10">
          <header className="mb-10 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Política de Privacidade — Controle Genealógico de Aves
            </h2>

            <div className="space-y-1 text-sm text-slate-300">
              <p>
                <strong className="text-slate-100">Data de vigência:</strong>{" "}
                02 de julho de 2026
              </p>
              <p>
                <strong className="text-slate-100">Aplicativo:</strong>{" "}
                Controle Genealógico de Aves
              </p>
              <p>
                <strong className="text-slate-100">Responsável:</strong>{" "}
                Lab de App / Laboratório de IA
              </p>
              <p>
                <strong className="text-slate-100">Contato:</strong>{" "}
                <a
                  href="mailto:labdeapp@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  labdeapp@gmail.com
                </a>
              </p>
            </div>
          </header>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <section className="space-y-4">
              <p>
                Esta Política de Privacidade explica como o aplicativo{" "}
                <strong className="text-slate-100">
                  Controle Genealógico de Aves
                </strong>{" "}
                coleta, usa, armazena, compartilha e protege informações dos
                usuários.
              </p>

              <p>
                Ao utilizar o aplicativo, o usuário declara estar ciente desta
                Política de Privacidade e concorda com o tratamento dos dados
                conforme descrito abaixo.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                1. Finalidade do aplicativo
              </h3>
              <p>
                O aplicativo Controle Genealógico de Aves foi desenvolvido para
                auxiliar criadores na organização de informações relacionadas ao
                cadastro, consulta, histórico, árvore genealógica e identificação
                de aves.
              </p>
              <p>
                O aplicativo pode funcionar com dados locais no aparelho do
                usuário e também com dados online, especialmente nas funções
                relacionadas à Rede Nacional, login, consulta pública de
                registros e bate-papo entre criadores cadastrados.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                2. Dados que podem ser coletados
              </h3>
              <p>
                O aplicativo pode coletar ou armazenar dados conforme o uso feito
                pelo usuário, incluindo dados de cadastro e login, dados sobre
                aves cadastradas, dados públicos na Rede Nacional e dados do
                bate-papo.
              </p>

              <div className="space-y-3 rounded-xl border border-purple-500/20 bg-slate-950/40 p-4">
                <h4 className="text-xl font-bold text-purple-300">
                  2.1. Dados de cadastro e login
                </h4>
                <p>Podem ser coletados:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>nome do criador;</li>
                  <li>apelido ou identificação pública do criador;</li>
                  <li>endereço de e-mail;</li>
                  <li>senha de acesso, processada pelo sistema de autenticação;</li>
                  <li>código ou identificador nacional do criador;</li>
                  <li>data e horário de criação ou atualização do cadastro;</li>
                  <li>informações necessárias para recuperação de senha.</li>
                </ul>
                <p>
                  A senha é utilizada para autenticação do usuário e não deve ser
                  compartilhada com terceiros. O aplicativo não solicita senha por
                  e-mail, mensagem externa ou fora das telas oficiais de login e
                  cadastro.
                </p>
              </div>

              <div className="space-y-3 rounded-xl border border-purple-500/20 bg-slate-950/40 p-4">
                <h4 className="text-xl font-bold text-purple-300">
                  2.2. Dados sobre aves cadastradas
                </h4>
                <p>O usuário pode registrar informações como:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>nome da ave;</li>
                  <li>número de anilha ou registro;</li>
                  <li>sexo da ave;</li>
                  <li>data de nascimento;</li>
                  <li>dados do pai e da mãe;</li>
                  <li>anilhas dos pais;</li>
                  <li>informações genealógicas;</li>
                  <li>características físicas;</li>
                  <li>observações;</li>
                  <li>informações de vacinação;</li>
                  <li>marcações ou anotações relacionadas ao cadastro da ave;</li>
                  <li>imagens, quando o usuário optar por adicionar.</li>
                </ul>
                <p>
                  Essas informações são fornecidas pelo próprio usuário e usadas
                  para organizar o controle genealógico e facilitar consultas
                  futuras.
                </p>
              </div>

              <div className="space-y-3 rounded-xl border border-purple-500/20 bg-slate-950/40 p-4">
                <h4 className="text-xl font-bold text-purple-300">
                  2.3. Dados públicos na Rede Nacional
                </h4>
                <p>
                  Ao utilizar a Rede Nacional, alguns dados cadastrados podem
                  ficar visíveis para outros usuários autenticados do aplicativo.
                </p>
                <p>
                  Podem ser exibidas publicamente, dentro do ambiente do
                  aplicativo, informações como:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>nome ou apelido do criador;</li>
                  <li>código nacional do criador;</li>
                  <li>informações básicas de aves cadastradas no banco online;</li>
                  <li>dados de anilha;</li>
                  <li>informações genealógicas;</li>
                  <li>registros relacionados ao cadastro nacional.</li>
                </ul>
                <p>
                  O objetivo dessa visibilidade é permitir consultas entre
                  criadores, identificação de aves e organização genealógica
                  compartilhada.
                </p>
                <p>
                  O usuário deve evitar inserir no cadastro público informações
                  pessoais desnecessárias, sensíveis ou que não queira tornar
                  visíveis a outros usuários cadastrados.
                </p>
              </div>

              <div className="space-y-3 rounded-xl border border-purple-500/20 bg-slate-950/40 p-4">
                <h4 className="text-xl font-bold text-purple-300">
                  2.4. Dados do bate-papo
                </h4>
                <p>
                  O aplicativo pode oferecer uma função de bate-papo ou mural
                  público entre criadores cadastrados.
                </p>
                <p>Ao usar essa função, podem ser armazenados:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>nome, apelido ou identificação pública do criador;</li>
                  <li>código ou identificador do criador;</li>
                  <li>mensagens publicadas;</li>
                  <li>data e horário das mensagens;</li>
                  <li>vínculo da mensagem com o usuário autenticado.</li>
                </ul>
                <p>
                  As mensagens do bate-papo podem ser visualizadas por outros
                  usuários logados na Rede Nacional.
                </p>
                <p>
                  É proibido usar o bate-papo para publicar ofensas, dados
                  sensíveis de terceiros, conteúdo impróprio, ilegal ou qualquer
                  conteúdo relacionado à marcação, comentário, divulgação ou
                  incentivo a brigas, rinhas ou outras formas de maus-tratos
                  animais.
                </p>
                <p>
                  Mensagens inadequadas poderão ser removidas e o acesso do
                  usuário poderá ser restringido ou suspenso.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                3. Como os dados são usados
              </h3>
              <p>Os dados coletados ou armazenados podem ser usados para:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>permitir login e autenticação;</li>
                <li>criar e manter o cadastro do criador;</li>
                <li>permitir recuperação de senha;</li>
                <li>cadastrar, consultar, editar e organizar aves;</li>
                <li>gerar fichas, relatórios ou consultas genealógicas;</li>
                <li>permitir consulta de aves e criadores na Rede Nacional;</li>
                <li>exibir mensagens no bate-papo entre usuários cadastrados;</li>
                <li>melhorar a segurança do aplicativo;</li>
                <li>prevenir uso indevido, fraude, abuso ou publicações proibidas;</li>
                <li>
                  cumprir obrigações legais ou solicitações válidas de
                  autoridades competentes.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                4. Banco de dados online
              </h3>
              <p>
                Algumas funções do aplicativo dependem de banco de dados online.
              </p>
              <p>
                Quando o usuário utiliza funções como login, cadastro nacional,
                consulta nacional, envio de dados para a Rede Nacional ou
                bate-papo, as informações podem ser enviadas e armazenadas em
                servidores externos usados pelo aplicativo.
              </p>
              <p>
                Esses dados são necessários para permitir que o usuário acesse
                sua conta em diferentes momentos e para que outros usuários
                autorizados possam consultar informações públicas da Rede
                Nacional.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                5. Dados armazenados localmente no aparelho
              </h3>
              <p>
                O aplicativo também pode armazenar informações diretamente no
                dispositivo do usuário, como dados locais de cadastro,
                preferências, configurações e registros usados no funcionamento
                do app.
              </p>
              <p>
                Dados armazenados localmente podem ser apagados caso o usuário
                desinstale o aplicativo, limpe os dados do app ou utilize funções
                internas de exclusão.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                6. Compartilhamento de dados
              </h3>
              <p>O aplicativo não vende dados pessoais dos usuários.</p>
              <p>Os dados podem ser compartilhados ou acessados nas seguintes situações:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  com serviços de autenticação e banco de dados usados para
                  funcionamento do aplicativo;
                </li>
                <li>
                  com serviços de envio de e-mail usados para recuperação de
                  senha;
                </li>
                <li>
                  com outros usuários autenticados, quando o próprio
                  funcionamento da Rede Nacional exigir a exibição de dados
                  públicos;
                </li>
                <li>
                  quando o usuário decidir compartilhar relatórios, fichas ou
                  informações geradas pelo aplicativo;
                </li>
                <li>
                  quando necessário para cumprir obrigação legal, ordem de
                  autoridade competente ou proteção contra uso indevido.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                7. Serviços de terceiros
              </h3>
              <p>
                O aplicativo pode utilizar serviços de terceiros para
                funcionalidades essenciais, incluindo:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>autenticação de usuários;</li>
                <li>armazenamento em banco de dados online;</li>
                <li>envio de e-mails de recuperação de senha;</li>
                <li>infraestrutura de hospedagem;</li>
                <li>serviços do sistema Android e da Google Play.</li>
              </ul>
              <p>
                Esses serviços podem processar dados técnicos ou pessoais
                conforme necessário para executar suas funções.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                8. Recuperação de senha e envio de e-mails
              </h3>
              <p>
                Quando o usuário solicita recuperação de senha, o aplicativo pode
                enviar um e-mail com link de redefinição.
              </p>
              <p>
                Esse e-mail é enviado apenas para permitir que o usuário recupere
                o acesso à própria conta. O usuário deve manter seu e-mail
                atualizado e não compartilhar links de redefinição de senha com
                terceiros.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                9. Segurança dos dados
              </h3>
              <p>
                O aplicativo adota medidas técnicas e organizacionais para
                proteger os dados contra acesso não autorizado, alteração, perda,
                uso indevido ou divulgação indevida.
              </p>
              <p>
                Apesar dos esforços de segurança, nenhum sistema eletrônico,
                aplicativo ou transmissão pela internet é completamente imune a
                riscos. Por isso, o usuário também deve proteger sua conta,
                mantendo sua senha em sigilo e usando apenas dispositivos
                confiáveis.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                10. Responsabilidade do usuário
              </h3>
              <p>
                O usuário é responsável pelas informações que cadastra, publica
                ou compartilha no aplicativo.
              </p>
              <p>O usuário não deve inserir:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>dados pessoais desnecessários;</li>
                <li>informações sensíveis próprias ou de terceiros;</li>
                <li>conteúdo ofensivo;</li>
                <li>conteúdo ilegal;</li>
                <li>informações falsas;</li>
                <li>conteúdo que viole direitos de terceiros;</li>
                <li>mensagens relacionadas a brigas, rinhas ou maus-tratos animais.</li>
              </ul>
              <p>
                O uso da Rede Nacional e do bate-papo deve respeitar a
                legislação aplicável, a finalidade do aplicativo e as regras de
                convivência da comunidade.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                11. Exclusão de dados
              </h3>
              <p>
                O usuário pode solicitar a exclusão de seus dados pessoais
                entrando em contato pelo e-mail{" "}
                <a
                  href="mailto:labdeapp@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  labdeapp@gmail.com
                </a>
                .
              </p>
              <p>
                A solicitação será analisada e atendida conforme as
                possibilidades técnicas, obrigações legais e necessidade de
                preservação de registros para segurança, prevenção de abuso,
                cumprimento legal ou proteção de direitos.
              </p>
              <p>
                Alguns dados públicos ou mensagens já visualizadas por outros
                usuários podem permanecer em registros técnicos ou backups por
                período limitado, quando necessário para segurança e integridade
                do sistema.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                12. Retenção de dados
              </h3>
              <p>Os dados podem ser mantidos enquanto forem necessários para:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>funcionamento da conta do usuário;</li>
                <li>manutenção dos cadastros de aves;</li>
                <li>funcionamento da Rede Nacional;</li>
                <li>histórico genealógico;</li>
                <li>segurança do sistema;</li>
                <li>cumprimento de obrigações legais;</li>
                <li>prevenção de fraude, abuso ou uso indevido.</li>
              </ul>
              <p>
                Quando os dados não forem mais necessários, poderão ser
                excluídos, anonimizados ou mantidos apenas quando houver base
                legal ou necessidade técnica legítima.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                13. Crianças e adolescentes
              </h3>
              <p>
                O aplicativo é voltado para criadores, responsáveis ou pessoas
                com interesse legítimo no controle genealógico de aves.
              </p>
              <p>
                Caso dados de crianças ou adolescentes sejam inseridos
                indevidamente no aplicativo, o responsável poderá solicitar a
                remoção pelo e-mail de contato informado nesta Política.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                14. Permissões do dispositivo
              </h3>
              <p>
                O aplicativo pode solicitar permissões do dispositivo apenas
                quando necessárias para determinadas funções, como seleção de
                imagens, geração de arquivos, compartilhamento de relatórios ou
                acesso a recursos locais.
              </p>
              <p>
                O usuário pode gerenciar permissões diretamente nas configurações
                do Android.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                15. Alterações nesta Política de Privacidade
              </h3>
              <p>
                Esta Política de Privacidade poderá ser atualizada
                periodicamente para refletir mudanças no aplicativo, em suas
                funcionalidades, em serviços utilizados ou em exigências legais.
              </p>
              <p>
                A versão mais recente ficará disponível no site oficial ou na
                página indicada na Google Play.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                16. Contato
              </h3>
              <p>
                Em caso de dúvidas, solicitações ou pedidos relacionados à
                privacidade e proteção de dados, entre em contato pelo e-mail:
              </p>
              <p>
                <a
                  href="mailto:labdeapp@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  labdeapp@gmail.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
