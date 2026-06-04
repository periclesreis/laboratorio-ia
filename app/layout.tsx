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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <header className="border-b bg-white sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    <Link
      href="/"
      className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
    >
      Laboratório de IA
    </Link>

    <nav className="flex gap-6 text-sm font-medium">
      <Link href="/">Início</Link>
      <Link href="/ia">IA</Link>
      <Link href="/programacao">Programação</Link>
      <Link href="/aplicativos">Aplicativos</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/contato">Contato</Link>
    </nav>

  </div>
</header>

        <main>{children}</main>

        <footer className="border-t mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center">
            © {new Date().getFullYear()} Laboratório de IA
          </div>
        </footer>
      </body>
    </html>
  );
}