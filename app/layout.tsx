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
  description: "Aprenda IA, Programação e Desenvolvimento de Aplicativos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b bg-white">
          <div className="max-w-5xl mx-auto px-6 py-4 flex gap-6 items-center">
            <Link href="/" className="font-bold text-xl">
              Laboratório de IA
            </Link>

            <nav className="flex gap-4">
              <Link href="/">Início</Link>
              <Link href="/about">Sobre</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}