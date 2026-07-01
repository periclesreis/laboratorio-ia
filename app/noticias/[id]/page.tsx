import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/db";

type NoticiaPageProps = {
  params: Promise<{
    id: string;
    slug?: string;
  }>;
};

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

function resumirTexto(texto?: string | null, limite = 160) {
  if (!texto) return "Leia esta notícia no Laboratório de IA.";

  const limpo = texto.replace(/\s+/g, " ").trim();

  if (limpo.length <= limite) {
    return limpo;
  }

  return `${limpo.slice(0, limite).trim()}...`;
}

function criarSlug(texto: string) {
  return (
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/&/g, "e")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 120) || "noticia"
  );
}

export async function generateMetadata({
  params,
}: NoticiaPageProps): Promise<Metadata> {
  const { id } = await params;
  const noticia = await getNewsById(Number(id));

  if (!noticia) {
    return {
      title: "Notícia não encontrada",
      description: "Esta notícia não foi encontrada no Laboratório de IA.",
    };
  }

  const title = noticia.title;
  const description = resumirTexto(noticia.description || noticia.content);
  const slug = criarSlug(noticia.title);
  const url = `/noticias/${noticia.id}/${slug}`;

  const image =
    noticia.image && noticia.image.trim().length > 0
      ? noticia.image
      : "/og/noticias.png";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Laboratório de IA",
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function NoticiaDetalhePage({
  params,
}: NoticiaPageProps) {
  const { id } = await params;
  const noticia = await getNewsById(Number(id));

  if (!noticia) {
    notFound();
  }

  const conteudo =
    noticia.content && noticia.content.trim().length > 0
      ? noticia.content
      : noticia.description;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-[1.15] pb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {noticia.title}
          </h1>

          <p className="text-sm text-purple-300 font-semibold">
            📅 {formatDate(noticia.date)}
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="rounded-2xl border-2 border-purple-500/60 bg-slate-900/80 p-6 sm:p-8 shadow-lg shadow-purple-500/10">
          {noticia.image && (
            <div className="mb-8 overflow-hidden rounded-xl border border-purple-500/40">
              <img
                src={noticia.image}
                alt={noticia.title}
                className="w-full max-h-[420px] object-cover"
              />
            </div>
          )}

          {noticia.description && (
            <p className="mb-8 text-lg leading-relaxed text-slate-300 border-l-4 border-purple-500 pl-4">
              {noticia.description}
            </p>
          )}

          <div className="whitespace-pre-wrap text-slate-200 leading-relaxed text-base sm:text-lg">
            {conteudo}
          </div>

          {noticia.link && (
            <div className="mt-10 border-t border-white/10 pt-6">
              <a
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 text-sm font-bold text-white transition hover:shadow-lg hover:shadow-purple-500/40"
              >
                Acessar fonte externa →
              </a>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}