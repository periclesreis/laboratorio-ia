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
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6">
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="text-center text-purple-400 text-xl">
            Carregando notícias...
          </div>
        ) : noticias.length === 0 ? (
          <div className="text-center text-slate-400 text-lg">
            Nenhuma notícia disponível no momento.
          </div>
        ) : (
          <div className="grid gap-6">
            {noticias.map((noticia) => (
              <Link key={noticia.id} href={noticia.link || '#'} target={noticia.link ? "_blank" : undefined} rel={noticia.link ? "noopener noreferrer" : undefined}>
                <div className="bg-slate-800 border-2 border-purple-500 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer h-full">
                  <div className="flex flex-col md:flex-row">
                    {/* Imagem */}
                    {noticia.image && (
                      <div className="md:w-1/4">
                        <img
                          src={noticia.image}
                          alt={noticia.title}
                          className="w-full h-40 md:h-full object-cover"
                        />
                      </div>
                    )}
                    
                    {/* Conteúdo */}
                    <div className={`p-5 flex flex-col justify-between ${noticia.image ? 'md:w-3/4' : 'w-full'}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-purple-400 font-semibold">📅 {noticia.date}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-purple-400 mb-2 line-clamp-2 hover:text-purple-300 transition">
                          {noticia.title}
                        </h2>
                        
                        <p className="text-slate-300 text-sm leading-snug line-clamp-2">
                          {noticia.description}
                        </p>
                      </div>
                      
                      {noticia.link && (
                        <div className="mt-3 flex items-center text-purple-400 text-xs font-medium hover:text-purple-300 transition">
                          Leia mais →
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}