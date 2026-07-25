import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import MobileMenu from "./components/MobileMenu";
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

const siteUrl = "https://www.laboratoriodeapp.com";
const logoUrl = "/images/logomarca-laboratorio-ia.png";
const ogImageUrl = "/images/og-laboratorio-ia.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Laboratório de IA",
    template: "%s | Laboratório de IA",
  },
  description:
    "Aprenda Inteligência Artificial, Programação e Desenvolvimento de Aplicativos do zero.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Laboratório de IA",
    description:
      "Aprenda Inteligência Artificial, Programação e Desenvolvimento de Aplicativos do zero.",
    url: siteUrl,
    siteName: "Laboratório de IA",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Logomarca oficial do Laboratório de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratório de IA",
    description:
      "Aprenda Inteligência Artificial, Programação e Desenvolvimento de Aplicativos do zero.",
    images: [ogImageUrl],
  },
};

function BrandMark({ size = "small" }: { size?: "small" | "footer" }) {
  const dimension = size === "footer" ? 42 : 34;

  return (
    <Image
      src={logoUrl}
      alt="Logomarca do Laboratório de IA"
      width={dimension}
      height={dimension}
      priority
      className="rounded-xl object-cover shadow-lg shadow-purple-500/20 ring-1 ring-purple-400/30"
    />
  );
}

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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-82CEQVFXNY"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-82CEQVFXNY');
          `}
        </Script>

        {/* Header Global */}
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
          <div className="container relative mx-auto px-4 py-3 md:h-16 md:py-0 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* Topo mobile e logo desktop */}
            <div className="flex items-center justify-between gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-2xl md:text-xl tracking-tight"
              >
                <BrandMark />
                <span className="text-purple-500">Início</span>
              </Link>

              <div className="ml-auto flex items-center justify-end md:hidden">
                <MobileMenu />
              </div>
            </div>

            {/* Menu desktop */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <Link href="/ia" className="hover:text-purple-400 transition-colors">
                IA
              </Link>

              <Link href="/programacao" className="hover:text-blue-400 transition-colors">
                Programação
              </Link>

              <Link href="/aplicativos" className="hover:text-emerald-400 transition-colors">
                Aplicativos
              </Link>

              <Link href="/projetos-codigos" className="hover:text-pink-400 transition-colors">
                Projetos & Códigos
              </Link>

              <Link href="/comunidade" className="hover:text-purple-400 transition-colors">
                Comunidade
              </Link>

              <Link href="/noticias" className="hover:text-white transition-colors">
                Notícias
              </Link>

              <Link href="/about" className="hover:text-white transition-colors">
                Sobre
              </Link>
            </nav>

            {/* Botões desktop */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-white/10 text-white hover:bg-white/20 h-9 px-4 py-2"
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
        <main className="flex-1">{children}</main>

        {/* Footer Global */}
        <footer className="border-t border-white/10 bg-slate-950 py-12 mt-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link
                href="/"
                className="flex items-center gap-3 font-bold text-xl tracking-tight mb-4"
              >
                <BrandMark size="footer" />
                <span className="text-purple-500">Laboratório de IA</span>
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
                  <Link href="/ia" className="hover:text-purple-400 transition-colors">
                    Inteligência Artificial
                  </Link>
                </li>

                <li>
                  <Link href="/programacao" className="hover:text-blue-400 transition-colors">
                    Programação
                  </Link>
                </li>

                <li>
                  <Link href="/aplicativos" className="hover:text-emerald-400 transition-colors">
                    Aplicativos
                  </Link>
                </li>

                <li>
                  <Link href="/projetos-codigos" className="hover:text-pink-400 transition-colors">
                    Projetos & Códigos
                  </Link>
                </li>

                <li>
                  <Link href="/comunidade" className="hover:text-purple-400 transition-colors">
                    Comunidade
                  </Link>
                </li>

                <li>
                  <Link href="/noticias" className="hover:text-white transition-colors">
                    Notícias
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-200">Laboratório</h3>

              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Sobre o Projeto
                  </Link>
                </li>

                <li>
                  <Link href="/contato" className="hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>

                <li>
                  <Link href="/politicas/site" className="hover:text-white transition-colors">
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
