// app/noticias/page.tsx
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface News {
  id: number;
  title: string;
  description: string;
  link?: string;
  image?: string;
  date: string;
  published: boolean;
}

function formatDate(dateString: string) {
  if (!dateString) return "";

  // Se vier no formato 2026-06-09 ou 2026-06-09T...
  const isoMatch = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);

  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return `${day}-${month}-${year}`;
  }

  // Fallback para outros formatos
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export default function NoticiasPage() {
  const [noticias, setNoticias] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error('Erro ao carregar notícias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6"
          >
            <span>←</span>
            <span>Voltar</span>
          </Link>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Notícias
          </h1>

          <p className="text-lg text-slate-400">
            Fique atualizado com as últimas novidades sobre IA, programação e tecnologia
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {loading ? (
          <div className="text-center text-purple-400 text-xl">
            Carregando notícias...
          </div>
        ) : noticias.length === 0 ? (
          <div className="text-center text-slate-400 text-lg">
            Nenhuma notícia disponível no momento.
          </div>
        ) : (
          <div className="grid gap-3">
            {noticias.map((noticia) => {
              const cardContent = (
                <div className="bg-slate-800 border-2 border-purple-500 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 h-full">
                  <div className="flex flex-col md:flex-row">
                    {/* Imagem */}
                    {noticia.image && (
                      <div className="md:w-44 md:shrink-0">
                        <img
                          src={noticia.image}
                          alt={noticia.title}
                          className="w-full h-24 md:h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Conteúdo */}
                    <div className="px-3 py-0.5 flex flex-col justify-center w-full">
  <div className="mb-0.5">
    <span className="text-[11px] leading-none text-purple-400 font-semibold">
      📅 {formatDate(noticia.date)}
    </span>
  </div>

  <h2 className="text-base font-bold text-purple-400 mb-0.5 leading-[1.05] line-clamp-1">
    {noticia.title}
  </h2>

  <p className="text-slate-300 text-xs leading-[1.05] line-clamp-2">
    {noticia.description}
  </p>
</div>
                  </div>
                </div>
              );

              if (noticia.link) {
                return (
                  <a
                    key={noticia.id}
                    href={noticia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div key={noticia.id} className="block">
                  {cardContent}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}