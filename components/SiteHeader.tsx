'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
      {/* Mobile */}
      <div
        ref={menuRef}
        className="md:hidden w-full"
      >
        <div className="flex items-center justify-between bg-purple-950/50 px-4 py-4 shadow-lg shadow-purple-500/10">
          <div className="text-2xl font-bold text-purple-300 leading-tight">
            Laboratório de IA
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="rounded-lg bg-slate-900 px-4 py-2 text-xl font-bold text-purple-300 shadow-md shadow-black/30"
            aria-label="Abrir menu"
          >
            ☰ Menu
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="grid gap-2 bg-slate-900/98 px-4 py-4 shadow-2xl shadow-black/50">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-4 text-[27px] font-bold leading-tight text-purple-300 hover:bg-purple-500/10"
            >
              Início
            </Link>

            <Link
              href="/ia"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-4 text-[27px] font-bold leading-tight text-purple-300 hover:bg-purple-500/10"
            >
              Inteligência Artificial
            </Link>

            <Link
              href="/programacao"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-4 text-[27px] font-bold leading-tight text-blue-300 hover:bg-blue-500/10"
            >
              Programação
            </Link>

            <Link
              href="/aplicativos"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-4 text-[27px] font-bold leading-tight text-emerald-300 hover:bg-emerald-500/10"
            >
              Aplicativos
            </Link>

            <Link
              href="/projetos-codigos"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-4 text-[27px] font-bold leading-tight text-pink-300 hover:bg-pink-500/10"
            >
              Projetos & Códigos
            </Link>

            <Link
              href="/comunidade"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-4 text-[27px] font-bold leading-tight text-purple-300 hover:bg-purple-500/10"
            >
              Comunidade
            </Link>

            <Link
              href="/noticias"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-4 text-[27px] font-bold leading-tight text-slate-100 hover:bg-white/10"
            >
              Notícias
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-4 text-[27px] font-bold leading-tight text-slate-100 hover:bg-white/10"
            >
              Sobre
            </Link>

            <Link
              href="/contato"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-4 text-[27px] font-bold leading-tight text-slate-100 hover:bg-white/10"
            >
              Contato
            </Link>

            <Link
              href="/admin/login"
              onClick={closeMobileMenu}
              className="rounded-lg border border-purple-500/50 bg-purple-600/20 px-4 py-4 text-[27px] font-bold leading-tight text-purple-300 hover:bg-purple-600/30"
            >
              🔐 Área Logada
            </Link>
          </nav>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex container mx-auto px-4 h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
        >
          <span className="text-purple-500">Início</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/ia" className="hover:text-purple-400 transition-colors">
            IA
          </Link>

          <Link
            href="/programacao"
            className="hover:text-blue-400 transition-colors"
          >
            Programação
          </Link>

          <Link
            href="/aplicativos"
            className="hover:text-emerald-400 transition-colors"
          >
            Aplicativos
          </Link>

          <Link
            href="/projetos-codigos"
            className="hover:text-pink-400 transition-colors"
          >
            Projetos & Códigos
          </Link>

          <Link
            href="/comunidade"
            className="hover:text-purple-400 transition-colors"
          >
            Comunidade
          </Link>

          <Link
            href="/noticias"
            className="hover:text-white transition-colors"
          >
            Notícias
          </Link>

          <Link href="/about" className="hover:text-white transition-colors">
            Sobre
          </Link>
        </nav>

        <div className="flex items-center gap-4">
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
  );
}