'use client';

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-purple-950/50 px-4 py-3 text-base font-bold text-purple-300 shadow-lg shadow-purple-500/10"
      >
        ☰ Menu
      </button>

      {open && (
        <nav className="mt-3 grid gap-2 rounded-lg bg-slate-900/95 p-3 shadow-xl shadow-black/40">
          <Link
            href="/ia"
            onClick={closeMenu}
            className="rounded-md px-4 py-3 text-purple-300 hover:bg-purple-500/10"
          >
            IA
          </Link>

          <Link
            href="/programacao"
            onClick={closeMenu}
            className="rounded-md px-4 py-3 text-blue-300 hover:bg-blue-500/10"
          >
            Programação
          </Link>

          <Link
            href="/aplicativos"
            onClick={closeMenu}
            className="rounded-md px-4 py-3 text-emerald-300 hover:bg-emerald-500/10"
          >
            Aplicativos
          </Link>

          <Link
            href="/projetos-codigos"
            onClick={closeMenu}
            className="rounded-md px-4 py-3 text-pink-300 hover:bg-pink-500/10"
          >
            Projetos & Códigos
          </Link>

          <Link
            href="/comunidade"
            onClick={closeMenu}
            className="rounded-md px-4 py-3 text-purple-300 hover:bg-purple-500/10"
          >
            Comunidade
          </Link>

          <Link
            href="/noticias"
            onClick={closeMenu}
            className="rounded-md px-4 py-3 text-slate-200 hover:bg-white/10"
          >
            Notícias
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="rounded-md px-4 py-3 text-slate-200 hover:bg-white/10"
          >
            Sobre
          </Link>

          <Link
            href="/contato"
            onClick={closeMenu}
            className="rounded-md px-4 py-3 text-slate-200 hover:bg-white/10"
          >
            Contato
          </Link>
        </nav>
      )}
    </div>
  );
}