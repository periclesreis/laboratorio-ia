import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laboratório de IA",
  description:
    "Aprenda Inteligência Artificial, Programação e Desenvolvimento de Aplicativos do zero.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-purple-500/30`}>
        {/* Header Global */}
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <span className="text-purple-500">Início</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <Link href="/ia" className="hover:text-purple-400 transition-colors">IA</Link>
              <Link href="/programacao" className="hover:text-blue-400 transition-colors">Programação</Link>
              <Link href="/aplicativos" className="hover:text-emerald-400 transition-colors">Aplicativos</Link>
              <Link href="/projetos-codigos" className="hover:text-pink-400 transition-colors">Projetos & Códigos</Link>
              <Link href="/noticias" className="hover:text-white transition-colors">Notícias</Link>
              <Link href="/about" className="hover:text-white transition-colors">Sobre</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link 
                href="/contato" 
                className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white/10 text-white hover:bg-white/20 h-9 px-4 py-2"
              >
                Contato
              </Link>
              
              <Link
                href="/admin/login"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple-600/20 border border-purple-500/50 hover:border-purple-500 text-purple-400 hover:text-purple-300 transition-all text-sm font-medium"
              >
                <span>🔐</span>
                <span>Área Logada</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer Global */}
        <footer className="border-t border-white/10 bg-slate-950 py-12 mt-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
                <span className="text-purple-500">Início</span>
              </Link>
              <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
                Um espaço dedicado ao aprendizado prático de Inteligência Artificial, Programação e criação de Aplicativos.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-slate-200">Conteúdo</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/ia" className="hover:text-purple-400 transition-colors">Inteligência Artificial</Link></li>
                <li><Link href="/programacao" className="hover:text-blue-400 transition-colors">Programação</Link></li>
                <li><Link href="/aplicativos" className="hover:text-emerald-400 transition-colors">Aplicativos</Link></li>
                <li><Link href="/projetos-codigos" className="hover:text-pink-400 transition-colors">Projetos & Códigos</Link></li>
                <li><Link href="/noticias" className="hover:text-white transition-colors">Notícias</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-slate-200">Laboratório</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Sobre o Projeto</Link></li>
                <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                <li>
                 <Link href="/politicas/site" className="hover:text-white transition-colors">
                   Política de Privacidade
                </Link>
</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Laboratório de IA. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}