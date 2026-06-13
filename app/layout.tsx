import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import MobileMenu from "@/components/MobileMenu";
import SiteHeader from "@/components/SiteHeader";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-purple-500/30`}
      >
        {/* Header Global */}
         <SiteHeader />
        {/* Conteúdo Principal */}
        <main className="flex-1">{children}</main>

        {/* Footer Global */}
        <footer className="border-t border-white/10 bg-slate-950 py-12 mt-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4"
              >
                <span className="text-purple-500">Início</span>
              </Link>

              <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
                Um espaço dedicado ao aprendizado prático de Inteligência
                Artificial, Programação e criação de Aplicativos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-200">Conteúdo</h3>

              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    href="/ia"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Inteligência Artificial
                  </Link>
                </li>

                <li>
                  <Link
                    href="/programacao"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Programação
                  </Link>
                </li>

                <li>
                  <Link
                    href="/aplicativos"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Aplicativos
                  </Link>
                </li>

                <li>
                  <Link
                    href="/projetos-codigos"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Projetos & Códigos
                  </Link>
                </li>

                <li>
                  <Link
                    href="/comunidade"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Comunidade
                  </Link>
                </li>

                <li>
                  <Link
                    href="/noticias"
                    className="hover:text-white transition-colors"
                  >
                    Notícias
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-200">Laboratório</h3>

              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    Sobre o Projeto
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contato"
                    className="hover:text-white transition-colors"
                  >
                    Contato
                  </Link>
                </li>

                <li>
                  <Link
                    href="/politicas/site"
                    className="hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Laboratório de IA. Todos os direitos
            reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}