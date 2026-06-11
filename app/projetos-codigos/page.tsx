// app/projetos-codigos/page.tsx
'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

interface Code {
  id: number;
  title: string;
  description: string;
  language: string;
  fileUrl: string;
  fileName: string;
  published: boolean;
}

interface Project {
  id: number;
  title: string;
  icon: string;
  description: string;
  time: string;
  difficulty: string;
  code: string;
  published: boolean;
}

export default function ProjetosCodigosPage() {
  const [secao, setSecao] = useState<"menu" | "download" | "projetos" | "projeto-detalhes">("menu");
  const [projetoAberto, setProjetoAberto] = useState<number | null>(null);
  const [codigos, setCodigos] = useState<Code[]>([]);
  const [projetos, setProjetos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [codesRes, projectsRes] = await Promise.all([
          fetch('/api/codes'),
          fetch('/api/projects'),
        ]);
        
        const codesData = await codesRes.json();
        const projectsData = await projectsRes.json();
        
        setCodigos(codesData);
        setProjetos(projectsData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const projeto = projetos.find(p => p.id === projetoAberto);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-6">
            <span>←</span>
            <span>Voltar</span>
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.25] pb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
             Projetos & Códigos
          </h1>
          
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Escolha entre baixar códigos prontos ou seguir projetos passo a passo para iniciantes.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        {/* Menu Principal */}
        {secao === "menu" && (
          <div>
            <div className="grid md:grid-cols-3 gap-6 mb-12 mt-12">
  {/* Download de Códigos */}
  <button
    onClick={() => setSecao("download")}
    className="group bg-slate-900 hover:bg-slate-800/80 border-8 border-purple-500 rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 text-left cursor-pointer"
  >
    <div className="text-5xl mb-3">📥</div>

    <h2 className="text-2xl font-bold text-purple-400 mb-2 leading-tight group-hover:text-purple-300 transition">
      Download de Códigos
    </h2>

    <p className="text-slate-300 text-sm leading-tight mb-4">
      Baixe diversos códigos prontos para usar em seus projetos.
    </p>

    <div className="flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
      Acessar <span className="ml-2">→</span>
    </div>
  </button>

  {/* Projetos para Iniciantes */}
  <button
    onClick={() => setSecao("projetos")}
    className="group bg-slate-900 hover:bg-slate-800/80 border-8 border-purple-500 rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 text-left cursor-pointer"
  >
    <div className="text-5xl mb-3">🚀</div>

    <h2 className="text-2xl font-bold text-purple-300 mb-2 leading-tight group-hover:text-purple-200 transition">
      Projetos para Iniciantes
    </h2>

    <p className="text-slate-300 text-sm leading-tight mb-4">
      Siga passo a passo para criar seus primeiros programas.
    </p>

    <div className="flex items-center text-purple-300 text-sm font-medium group-hover:translate-x-2 transition-transform">
      Começar <span className="ml-2">→</span>
    </div>
  </button>

  {/* Compartilhe seu Projeto */}
  <Link
    href="/compartilhe-seu-projeto"
    className="group bg-slate-900 hover:bg-slate-800/80 border-8 border-purple-500 rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 text-left cursor-pointer"
  >
    <div className="text-5xl mb-3">🤝</div>

    <h2 className="text-2xl font-bold text-purple-400 mb-2 leading-tight group-hover:text-purple-300 transition">
      Compartilhe seu Projeto
    </h2>

    <p className="text-slate-300 text-sm leading-tight mb-4">
      Compartilhe aplicativos, códigos fonte, scripts, plugins e projetos com outros desenvolvedores.
    </p>

    <div className="flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
      Enviar projeto <span className="ml-2">→</span>
    </div>
  </Link>
</div>
            {/* Dicas */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">💡 Como Usar Esta Seção</h2>
              
              <div className="space-y-4 text-slate-300">
                <div className="flex gap-4">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-bold text-purple-300 mb-1">Se Você é Iniciante</h3>
                    <p>Clique em "Projetos para Iniciantes" e siga o passo a passo. Cada projeto tem instruções super detalhadas.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <span className="text-2xl">📚</span>
                  <div>
                    <h3 className="font-bold text-purple-300 mb-1">Se Quer Estudar Código</h3>
                    <p>Clique em "Download de Códigos" para baixar exemplos de código profissional e estudar como funciona.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-bold text-purple-300 mb-1">Comece Hoje</h3>
                    <p>Não precisa de experiência. Escolha um projeto e comece agora mesmo!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Download de Códigos */}
        {secao === "download" && (
          <div>
            <button
              onClick={() => setSecao("menu")}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-8 mt-8"
            >
              <span>←</span>
              <span>Voltar</span>
            </button>

            <h2 className="text-4xl font-bold text-purple-400 mb-8">📥 Download de Códigos</h2>

            {loading ? (
              <div className="text-center text-purple-400 text-xl">Carregando códigos...</div>
            ) : codigos.length === 0 ? (
              <div className="text-center text-slate-400 text-lg">Nenhum código disponível no momento.</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {codigos.map((codigo) => (
                  <a key={codigo.id} href={codigo.fileUrl} target="_blank" rel="noopener noreferrer">
                    <div className="bg-slate-800 border-2 border-purple-500 rounded-lg p-5 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer h-full flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-purple-400 line-clamp-2">{codigo.title}</h3>
                          <p className="text-xs text-purple-300 font-semibold mt-1">{codigo.language}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-xs leading-snug line-clamp-2 mb-3 flex-grow">
                        {codigo.description}
                      </p>
                      
                      <div className="text-purple-400 text-xs font-medium hover:text-purple-300 transition">
                        📥 {codigo.fileName}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Projetos para Iniciantes */}
        {secao === "projetos" && !projetoAberto && (
          <div>
            <button
              onClick={() => setSecao("menu")}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-8 mt-8"
            >
              <span>←</span>
              <span>Voltar</span>
            </button>

            <h2 className="text-4xl font-bold text-purple-400 mb-8">🚀 Projetos para Iniciantes</h2>

            {loading ? (
              <div className="text-center text-purple-400 text-xl">Carregando projetos...</div>
            ) : projetos.length === 0 ? (
              <div className="text-center text-slate-400 text-lg">Nenhum projeto disponível no momento.</div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetos.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      setProjetoAberto(proj.id);
                      setSecao("projeto-detalhes");
                    }}
                    className="group bg-slate-800 hover:bg-slate-700 border-4 border-purple-500 rounded-lg p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 text-left cursor-pointer"
                  >
                    <div className="text-5xl mb-4">{proj.icon}</div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2 group-hover:text-purple-300">{proj.title}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{proj.description}</p>
                    
                    <div className="flex gap-3 text-xs text-slate-400 mb-4">
                      <span>⏱️ {proj.time}</span>
                      <span>📊 {proj.difficulty}</span>
                    </div>
                    
                    <div className="flex items-center text-purple-400 font-medium group-hover:translate-x-2 transition-transform">
                      Ver Detalhes <span className="ml-2">→</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Detalhes do Projeto */}
        {secao === "projeto-detalhes" && projeto && (
          <div>
            <button
              onClick={() => {
                setSecao("projetos");
                setProjetoAberto(null);
              }}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-8 mt-8"
            >
              <span>←</span>
              <span>Voltar</span>
            </button>

            <div className="bg-slate-800 border-4 border-purple-500 rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{projeto.icon}</span>
                <div>
                  <h2 className="text-4xl font-bold text-purple-400">{projeto.title}</h2>
                  <p className="text-slate-400">{projeto.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-700 rounded-lg p-4">
                  <p className="text-slate-400 text-sm">Tempo estimado</p>
                  <p className="text-2xl font-bold text-purple-400">⏱️ {projeto.time}</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <p className="text-slate-400 text-sm">Nível de dificuldade</p>
                  <p className="text-2xl font-bold text-purple-400">📊 {projeto.difficulty}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">💻 Código</h3>
                <pre className="bg-slate-900 border-2 border-purple-500 rounded-lg p-6 overflow-x-auto">
                  <code className="text-slate-300 font-mono text-sm">{projeto.code}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}