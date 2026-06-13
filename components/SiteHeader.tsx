'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const mobileMenuItemBase =
    "w-[250px] rounded-lg border px-4 py-0.5 text-[22px] font-bold leading-tight transition-colors";

  const mobileMenuItemInicio =
    `${mobileMenuItemBase} border-emerald-500/60 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-500/10`;

  const mobileMenuItemPrincipal =
    `${mobileMenuItemBase} border-purple-500/60 bg-purple-950/30 text-purple-300 hover:bg-purple-500/10`;

  const mobileMenuItemWhite =
    `${mobileMenuItemBase} border-slate-500/60 bg-slate-800/50 text-slate-100 hover:bg-white/10`;

  const mobileMenuItemAdmin =
    `${mobileMenuItemBase} border-purple-500/70 bg-purple-600/20 text-purple-300 hover:bg-purple-600/30`;

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
      <div ref={menuRef} className="md:hidden w-full">
        <div className="bg-purple-950/50 px-3 py-3 shadow-lg shadow-purple-500/10">
          <div className="text-center text-3xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Laboratório de IA
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-800 px-3 py- text-lg font-bold text-purple-200 shadow-md shadow-black/30 transition hover:bg-slate-700"
            aria-label="Abrir menu"
          >
            ☰ Menu
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="grid gap-2 bg-slate-900/98 px-3 py-3 shadow-2xl shadow-black/50">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={mobileMenuItemInicio}
            >
              Início
            </Link>

            <Link
              href="/ia"
              onClick={closeMobileMenu}
              className={mobileMenuItemPrincipal}
            >
              Inteligência Artificial
            </Link>

            <Link
              href="/programacao"
              onClick={closeMobileMenu}
              className={mobileMenuItemPrincipal}
            >
              Programação
            </Link>

            <Link
              href="/aplicativos"
              onClick={closeMobileMenu}
              className={mobileMenuItemPrincipal}
            >
              Aplicativos
            </Link>

            <Link
              href="/projetos-codigos"
              onClick={closeMobileMenu}
              className={mobileMenuItemPrincipal}
            >
              Projetos & Códigos
            </Link>

            <Link
              href="/comunidade"
              onClick={closeMobileMenu}
              className={mobileMenuItemPrincipal}
            >
              Comunidade
            </Link>

            <Link
              href="/noticias"
              onClick={closeMobileMenu}
              className={mobileMenuItemPrincipal}
            >
              Notícias
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={mobileMenuItemWhite}
            >
              Sobre
            </Link>

            <Link
              href="/contato"
              onClick={closeMobileMenu}
              className={mobileMenuItemWhite}
            >
              Contato
            </Link>

            <Link
              href="/admin/login"
              onClick={closeMobileMenu}
              className={mobileMenuItemAdmin}
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
            Inteligência Artificial
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