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
                <strong className="text-slate-100">Última atualização:</strong>{" "}
                28 de junho de 2026
              </p>
              <p>
                <strong className="text-slate-100">Aplicativo:</strong>{" "}
                Controle Genealógico de Aves
              </p>
              <p>
                <strong className="text-slate-100">Responsável:</strong>{" "}
                Laboratório de App
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
                Esta Política de Privacidade descreve como o aplicativo{" "}
                <strong className="text-slate-100">
                  Controle Genealógico de Aves
                </strong>{" "}
                trata informações fornecidas pelos usuários durante o uso do
                aplicativo.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                1. Identificação e contato
              </h3>

              <p>
                O aplicativo{" "}
                <strong className="text-slate-100">
                  Controle Genealógico de Aves
                </strong>{" "}
                é disponibilizado pelo Laboratório de App.
              </p>

              <p>
                Contato para assuntos de privacidade:{" "}
                <a
                  href="mailto:labdeapp@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  labdeapp@gmail.com
                </a>
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                2. Finalidade do aplicativo
              </h3>

              <p>
                O Controle Genealógico de Aves foi desenvolvido para auxiliar
                criadores no cadastro, consulta, organização e controle
                genealógico de aves. O aplicativo permite registrar informações
                locais no aparelho e, quando o usuário optar por utilizar o
                Cadastro Nacional, enviar dados para um banco online vinculado ao
                criador cadastrado.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                3. Informações que podem ser coletadas
              </h3>

              <p>
                O aplicativo pode tratar dados do criador, dados das aves, fotos
                cadastradas pelo usuário, informações de vacinação, marcações dos
                pés e membranas, dados genealógicos, relatórios, backups e
                registros necessários para autenticação e sincronização com o
                banco online.
              </p>

              <p>
                O aplicativo não solicita dados financeiros, documentos oficiais
                ou localização em tempo real.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                4. Como as informações são usadas
              </h3>

              <p>
                As informações são usadas para criar e manter cadastros locais,
                permitir consultas pela anilha, evitar duplicidades, organizar
                árvore genealógica, gerar relatórios e backups, permitir login e
                uso do Cadastro Nacional online e identificar o criador
                responsável pelos registros enviados ao banco nacional.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                5. Armazenamento dos dados
              </h3>

              <p>
                Parte dos dados é armazenada localmente no aparelho do usuário.
                Quando o usuário utiliza o Cadastro Nacional, alguns dados são
                enviados para um banco online usado para autenticação, consulta e
                organização dos registros nacionais.
              </p>

              <p>
                A senha do usuário é tratada pelo serviço de autenticação e não é
                exibida pelo aplicativo.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                6. Compartilhamento de informações
              </h3>

              <p>O aplicativo não vende dados pessoais.</p>

              <p>
                As informações podem ser compartilhadas quando o próprio usuário
                escolhe compartilhar relatórios, arquivos PDF ou backups; quando
                envia dados ao Cadastro Nacional online; quando necessário para
                funcionamento técnico do banco online, autenticação e
                armazenamento; ou quando houver obrigação legal.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                7. Relatórios, backups e arquivos exportados
              </h3>

              <p>
                O usuário pode gerar relatórios, PDFs e backups com informações
                cadastradas no aplicativo. Ao compartilhar, salvar ou enviar
                esses arquivos para outros aplicativos, serviços de nuvem,
                e-mail, mensagens ou armazenamento externo, o tratamento desses
                arquivos passa a depender também das políticas dos serviços
                escolhidos pelo usuário.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                8. Permissões do aplicativo
              </h3>

              <p>
                O aplicativo pode solicitar acesso à câmera ou galeria para
                cadastrar fotos das aves, acesso a arquivos para gerar, salvar,
                restaurar ou compartilhar backups e relatórios, e acesso à
                internet para login, sincronização e consulta ao Cadastro
                Nacional online.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                9. Segurança
              </h3>

              <p>
                O aplicativo adota medidas razoáveis para proteger as informações
                cadastradas, incluindo autenticação para acesso ao Cadastro
                Nacional e separação entre dados locais e online. O usuário deve
                manter seu aparelho protegido, não compartilhar sua senha e ter
                cuidado ao enviar relatórios ou backups para terceiros.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                10. Retenção e exclusão dos dados
              </h3>

              <p>
                Os dados locais permanecem no aparelho enquanto o usuário mantiver
                o aplicativo instalado ou até que sejam apagados pelas funções do
                próprio aplicativo.
              </p>

              <p>
                Dados enviados ao Cadastro Nacional podem permanecer no banco
                online enquanto o cadastro estiver ativo. O usuário pode
                solicitar exclusão ou correção de dados pelo e-mail{" "}
                <a
                  href="mailto:labdeapp@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  labdeapp@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                11. Direitos do usuário
              </h3>

              <p>
                O usuário pode solicitar confirmação sobre o tratamento de seus
                dados, acesso aos dados cadastrados, correção de dados
                incorretos, exclusão de dados quando aplicável e informações
                sobre uso e compartilhamento dos dados.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                12. Privacidade de crianças e adolescentes
              </h3>

              <p>
                O aplicativo não é direcionado a crianças. Caso seja utilizado
                por menor de idade, o uso deve ocorrer com orientação e
                responsabilidade de pais ou responsáveis legais.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                13. Alterações nesta Política
              </h3>

              <p>
                Esta Política de Privacidade pode ser atualizada para refletir
                melhorias no aplicativo, mudanças legais ou alterações nas
                funcionalidades. A data de atualização será revisada sempre que
                houver mudança relevante.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-400">
                14. Contato
              </h3>

              <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o
                tratamento de dados pelo aplicativo, entre em contato pelo e-mail:
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