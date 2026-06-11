// app/noticias/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/db";

interface NoticiaPageProps {
  params: {
    id: string;
  };
}

function formatDate(dateString: string) {
  if (!dateString) return "";

  const isoMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);

  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return `${day}-${month}-${year}`;
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export default async function NoticiaDetalhePage({ params }: NoticiaPageProps) {
  const id = Number(params.id);

  if (!id || Number.isNaN(id)) {
    notFound();
  }

  const noticia = await getNewsById(id);

  if (!noticia || !noticia.content) {
    notFound();
  }

  const paragraphs = String(noticia.content)
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar para Notícias</span>
          </Link>

          <div className="mb-3">
            <span className="text-sm text-purple-400 font-semibold">
              📅 {formatDate(noticia.date)}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.2] pb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {noticia.title}
          </h1>

          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            {noticia.description}
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <article className="bg-slate-800 border-4 border-purple-500 rounded-lg p-6 sm:p-8">
          {noticia.image && (
            <div className="mb-6 overflow-hidden rounded-lg border-2 border-purple-500/40">
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full max-h-[420px] object-cover"
              />
            </div>
          )}

          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-purple-500/30">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition font-semibold"
            >
              <span>←</span>
              <span>Voltar para Notícias</span>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}