import Link from "next/link";

export default function ExclusaoContaControleGenealogicoAvesPage() {
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
            Exclusão de Conta e Dados
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            Controle Genealógico de Aves
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="rounded-2xl border-2 border-purple-500/60 bg-slate-900/80 p-6 sm:p-8 shadow-lg shadow-purple-500/10">
          <div className="space-y-8 text-slate-300 leading-relaxed">
            <section className="space-y-4">
              <p>
                Esta página explica como solicitar a exclusão da conta e dos
                dados associados ao aplicativo{" "}
                <strong className="text-slate-100">
                  Controle Genealógico de Aves
                </strong>
                , desenvolvido por{" "}
                <strong className="text-slate-100">Laboratório de IA</strong>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-400">
                Como solicitar a exclusão da conta
              </h2>

              <p>Para solicitar a exclusão da sua conta, envie um e-mail para:</p>

              <p>
                <a
                  href="mailto:labdeapp@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  labdeapp@gmail.com
                </a>
              </p>

              <p>No assunto do e-mail, escreva:</p>

              <p>
                <strong className="text-slate-100">
                  Exclusão de conta — Controle Genealógico de Aves
                </strong>
              </p>

              <p>No corpo da mensagem, informe:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>o e-mail usado no cadastro do app;</li>
                <li>o código nacional do criador, se souber;</li>
                <li>
                  a confirmação de que deseja excluir sua conta e os dados
                  associados.
                </li>
              </ul>

              <p>
                Após recebermos a solicitação, poderemos pedir uma confirmação
                adicional para garantir que o pedido foi feito pelo titular da
                conta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-400">
                Dados que serão excluídos
              </h2>

              <p>
                Ao solicitar a exclusão da conta, serão excluídos, quando
                associados à sua conta:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>cadastro nacional do criador;</li>
                <li>nome, e-mail, apelido e dados de contato;</li>
                <li>aves cadastradas no Cadastro Nacional;</li>
                <li>dados genealógicos das aves;</li>
                <li>
                  informações de vacinação, marcações, observações e fotos
                  enviadas ao banco online;
                </li>
                <li>
                  mensagens do bate-papo vinculadas à conta, quando aplicável;
                </li>
                <li>
                  bloqueios e denúncias vinculados à conta, quando aplicável.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-400">
                Dados que podem ser mantidos temporariamente
              </h2>

              <p>
                Alguns registros podem ser mantidos por até{" "}
                <strong className="text-slate-100">90 dias</strong> em backups,
                logs técnicos ou registros necessários para segurança, prevenção
                de abuso, cumprimento de obrigações legais ou solução de
                problemas técnicos.
              </p>

              <p>
                Após esse período, os dados serão removidos dos backups conforme
                os ciclos normais de retenção.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-400">
                Exclusão parcial de dados
              </h2>

              <p>
                Você também pode solicitar a exclusão de dados específicos sem
                excluir toda a conta, como:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>exclusão de uma ave cadastrada;</li>
                <li>remoção de dados de contato;</li>
                <li>remoção de mensagens do bate-papo;</li>
                <li>correção ou atualização de dados do cadastro.</li>
              </ul>

              <p>
                Para isso, envie um e-mail para{" "}
                <a
                  href="mailto:labdeapp@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  labdeapp@gmail.com
                </a>{" "}
                informando quais dados deseja excluir ou alterar.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-400">
                Prazo de atendimento
              </h2>

              <p>
                As solicitações serão analisadas e processadas em prazo
                razoável, normalmente em até{" "}
                <strong className="text-slate-100">30 dias</strong>, salvo
                necessidade de confirmação de identidade ou exigência
                legal/técnica adicional.
              </p>

              <p className="text-sm text-slate-400">
                Última atualização: 02 de julho de 2026.
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
