// app/noticias/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/db";

interface NoticiaPageProps {
  params: Promise<{
    id: string;
  }>;
}

function formatDate(dateString: string) {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("pt-BR");
}

export default async function NoticiaDetalhePage({
  params,
}: NoticiaPageProps) {
  const { id } = await params;
  const newsId = Number(id);

  if (!newsId || Number.isNaN(newsId)) {
    notFound();
  }

  const noticia = await getNewsById(newsId);

  if (!noticia) {
    notFound();
  }

  const textoCompleto = String(noticia.content || "").trim();

  const paragraphs = textoCompleto
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar para Notícias</span>
          </Link>

          {noticia.date && (
            <div className="text-sm text-slate-400 mb-3">
              {formatDate(noticia.date)}
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {noticia.title}
          </h1>

          {noticia.description && (
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              {noticia.description}
            </p>
          )}
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {noticia.image_url && (
          <div className="mb-8 overflow-hidden rounded-lg border-2 border-purple-500 bg-slate-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={noticia.image_url}
              alt={noticia.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <article className="bg-slate-800 border-2 border-purple-500 rounded-lg p-6">
          {paragraphs.length > 0 ? (
            <div className="space-y-4 text-slate-300 leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Esta notícia foi cadastrada sem texto completo.
              </p>

              {noticia.link && (
                <p>
                  <a
                    href={noticia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Abrir link externo da notícia
                  </a>
                </p>
              )}
            </div>
          )}
        </article>
      </main>
    </div>
  );
}