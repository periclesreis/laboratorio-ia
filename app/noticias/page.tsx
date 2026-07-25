import Image from "next/image";
import Link from "next/link";
import { getAllNews } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export const metadata = {
  title: "Notícias",
  description:
    "Notícias, artigos, tutoriais e atualizações do Laboratório de IA.",
};

type NewsItem = {
  id: number;
  title: string;
  description: string;
  date?: string;
};

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

function formatDate(date?: string) {
  if (!date) {
    return "";
  }

  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "America/Sao_Paulo",
    }).format(new Date(date));
  } catch {
    return date;
  }
}

export default async function NoticiasPage() {
  const noticias = (await getAllNews()) as NewsItem[];

  return (
    <div className="w-full">
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/20 opacity-20 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-purple-500/20 opacity-20 blur-3xl" />
        </div>

        <Image
          src="/images/logomarca-laboratorio-ia.png"
          alt=""
          width={240}
          height={240}
          className="pointer-events-none absolute right-6 top-8 hidden opacity-[0.08] blur-[0.2px] md:block"
          priority
        />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/logomarca-laboratorio-ia.png"
                alt="Logomarca do Laboratório de IA"
                width={76}
                height={76}
                priority
                className="h-[76px] w-[76px] rounded-2xl object-cover shadow-xl shadow-purple-500/25 ring-1 ring-purple-400/40"
              />
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Notícias do{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Laboratório
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Atualizações, tutoriais, experiências e conteúdos sobre
              Inteligência Artificial, Programação, Aplicativos e Tecnologia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {noticias.length === 0 ? (
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <div className="mb-4 text-4xl">📰</div>
              <h2 className="mb-2 text-2xl font-bold text-white">
                Nenhuma notícia publicada ainda
              </h2>
              <p className="text-slate-400">
                Em breve teremos novidades publicadas por aqui.
              </p>
            </div>
          ) : (
            <div className="mx-auto flex max-w-6xl flex-col gap-5">
              {noticias.map((item) => {
                const slug = criarSlug(item.title);

                return (
                  <Link
                    key={item.id}
                    href={`/noticias/${item.id}/${slug}`}
                    className="group card-hover card-dev relative overflow-hidden md:flex md:items-center md:gap-6"
                  >
                    <Image
                      src="/images/logomarca-laboratorio-ia.png"
                      alt=""
                      width={100}
                      height={100}
                      className="pointer-events-none absolute -right-5 -top-5 opacity-[0.05]"
                    />

                    <div className="mb-4 flex items-center gap-3 md:mb-0 md:w-36 md:flex-shrink-0 md:flex-col md:items-start md:justify-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-2xl">
                        📰
                      </div>
                      <div className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
                        Notícias
                      </div>
                    </div>

                    <div className="relative z-10 min-w-0 flex-1">
                      <h2 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-300 md:text-2xl">
                        {item.title}
                      </h2>

                      {item.date && (
                        <p className="mb-3 text-xs text-slate-500">
                          {formatDate(item.date)}
                        </p>
                      )}

                      <p className="line-clamp-4 text-sm leading-relaxed text-slate-400 md:text-base">
                        {item.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-5 flex items-center text-sm font-medium text-blue-400 transition-transform group-hover:translate-x-1 md:mt-0 md:w-32 md:flex-shrink-0 md:justify-end">
                      Ler notícia <span className="ml-2">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
