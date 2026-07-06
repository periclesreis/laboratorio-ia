"use client";

import { useEffect, useMemo, useState } from "react";

type Area = "links" | "notes";
type ItemType = "link" | "note" | "folder";
type ColorValue = string | null;

type BaseItem = {
  id: string;
  type: ItemType;
  title: string;
  folderId: string | null;
  color: ColorValue;
  createdAt: number;
  updatedAt: number;
};

type LinkItem = BaseItem & {
  type: "link";
  url: string;
  description: string;
};

type NoteItem = BaseItem & {
  type: "note";
  content: string;
};

type FolderItem = BaseItem & {
  type: "folder";
  area: Area;
};

type AppItem = LinkItem | NoteItem | FolderItem;

const STORAGE_KEY = "links-notas-web-v1";

const COLORS: { label: string; value: ColorValue }[] = [
  { label: "Padrão", value: null },
  { label: "Azul escuro", value: "#1e3a8a" },
  { label: "Azul médio", value: "#1d4ed8" },
  { label: "Azul vivo", value: "#2563eb" },
  { label: "Azul céu", value: "#0284c7" },
  { label: "Verde escuro", value: "#14532d" },
  { label: "Verde folha", value: "#166534" },
  { label: "Verde vivo", value: "#15803d" },
  { label: "Verde petróleo", value: "#047857" },
  { label: "Vermelho escuro", value: "#7f1d1d" },
  { label: "Vermelho clássico", value: "#991b1b" },
  { label: "Vermelho vivo", value: "#b91c1c" },
  { label: "Vermelho vinho", value: "#be123c" },
  { label: "Amarelo escuro", value: "#854d0e" },
  { label: "Mostarda", value: "#a16207" },
  { label: "Dourado", value: "#b45309" },
  { label: "Âmbar", value: "#92400e" },
  { label: "Roxo", value: "#581c87" },
  { label: "Cinza", value: "#374151" },
];

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeUrl(url: string) {
  const clean = url.trim();
  if (!clean) return "";
  if (/^https?:\/\//i.test(clean)) return clean;
  return `https://${clean}`;
}

function formatDate(value: number) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
}

function emptyLink(folderId: string | null): LinkItem {
  const now = Date.now();
  return {
    id: createId(),
    type: "link",
    title: "",
    url: "",
    description: "",
    folderId,
    color: null,
    createdAt: now,
    updatedAt: now,
  };
}

function emptyNote(folderId: string | null): NoteItem {
  const now = Date.now();
  return {
    id: createId(),
    type: "note",
    title: "",
    content: "",
    folderId,
    color: null,
    createdAt: now,
    updatedAt: now,
  };
}

export default function LinksNotasWebPage() {
  const [items, setItems] = useState<AppItem[]>([]);
  const [activeArea, setActiveArea] = useState<Area>("links");
  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [editingLink, setEditingLink] = useState<LinkItem | null>(null);
  const [editingNote, setEditingNote] = useState<NoteItem | null>(null);
  const [folderName, setFolderName] = useState("");
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [moveTargetFolderId, setMoveTargetFolderId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === selectedItemId) ?? null,
    [items, selectedItemId],
  );

  const folders = useMemo(
    () =>
      items
        .filter((item): item is FolderItem => item.type === "folder" && item.area === activeArea)
        .sort((a, b) => b.updatedAt - a.updatedAt),
    [items, activeArea],
  );

  const currentFolder = useMemo(
    () => folders.find((folder) => folder.id === currentFolderId) ?? null,
    [folders, currentFolderId],
  );

  const visibleItems = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();

    return items
      .filter((item) => {
        if (activeArea === "links") {
          if (item.type !== "link" && item.type !== "folder") return false;
          if (item.type === "folder" && item.area !== "links") return false;
        }

        if (activeArea === "notes") {
          if (item.type !== "note" && item.type !== "folder") return false;
          if (item.type === "folder" && item.area !== "notes") return false;
        }

        if (item.folderId !== currentFolderId) return false;
        if (!cleanQuery) return true;
        if (item.title.toLowerCase().includes(cleanQuery)) return true;

        if (item.type === "link") {
          return item.url.toLowerCase().includes(cleanQuery) || item.description.toLowerCase().includes(cleanQuery);
        }

        if (item.type === "note") {
          return item.content.toLowerCase().includes(cleanQuery);
        }

        return false;
      })
      .sort((a, b) => {
        if (a.type === "folder" && b.type !== "folder") return -1;
        if (a.type !== "folder" && b.type === "folder") return 1;
        return b.updatedAt - a.updatedAt;
      });
  }, [items, activeArea, currentFolderId, query]);

  function resetSelection() {
    setSelectedItemId(null);
    setMoveTargetFolderId(null);
  }

  function openArea(area: Area) {
    setActiveArea(area);
    setCurrentFolderId(null);
    setQuery("");
    resetSelection();
  }

  function saveFolder() {
    const name = folderName.trim();
    if (!name) {
      alert("Informe o nome da pasta.");
      return;
    }

    const now = Date.now();
    setItems((current) => [
      {
        id: createId(),
        type: "folder",
        area: activeArea,
        title: name,
        folderId: currentFolderId,
        color: null,
        createdAt: now,
        updatedAt: now,
      },
      ...current,
    ]);
    setFolderName("");
  }

  function saveLink() {
    if (!editingLink) return;
    const title = editingLink.title.trim();
    const url = normalizeUrl(editingLink.url);

    if (!title) {
      alert("Informe o título do link.");
      return;
    }

    if (!url) {
      alert("Informe o endereço do link.");
      return;
    }

    const nextLink: LinkItem = { ...editingLink, title, url, updatedAt: Date.now() };
    setItems((current) => {
      const exists = current.some((item) => item.id === nextLink.id);
      if (exists) return current.map((item) => (item.id === nextLink.id ? nextLink : item));
      return [nextLink, ...current];
    });
    setEditingLink(null);
  }

  function saveNote() {
    if (!editingNote) return;
    const title = editingNote.title.trim();
    const content = editingNote.content.trim();

    if (!title && !content) {
      alert("Digite um título ou uma anotação.");
      return;
    }

    const finalTitle = title || content.split("\n")[0].slice(0, 40) || "Sem título";
    const nextNote: NoteItem = { ...editingNote, title: finalTitle, content, updatedAt: Date.now() };

    setItems((current) => {
      const exists = current.some((item) => item.id === nextNote.id);
      if (exists) return current.map((item) => (item.id === nextNote.id ? nextNote : item));
      return [nextNote, ...current];
    });
    setEditingNote(null);
  }

  function deleteSelectedItem() {
    if (!selectedItem) return;
    const confirmed = window.confirm(`Excluir "${selectedItem.title}"?`);
    if (!confirmed) return;

    const idsToDelete = new Set<string>([selectedItem.id]);

    if (selectedItem.type === "folder") {
      let changed = true;
      while (changed) {
        changed = false;
        for (const item of items) {
          if (item.folderId && idsToDelete.has(item.folderId) && !idsToDelete.has(item.id)) {
            idsToDelete.add(item.id);
            changed = true;
          }
        }
      }
    }

    setItems((current) => current.filter((item) => !idsToDelete.has(item.id)));
    resetSelection();
  }

  function moveSelectedItem() {
    if (!selectedItem) return;
    if (selectedItem.type === "folder" && moveTargetFolderId === selectedItem.id) {
      alert("A pasta não pode ser movida para dentro dela mesma.");
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.id === selectedItem.id ? { ...item, folderId: moveTargetFolderId, updatedAt: Date.now() } : item,
      ),
    );
    resetSelection();
  }

  function changeSelectedColor(color: ColorValue) {
    if (!selectedItem) return;
    setItems((current) =>
      current.map((item) => (item.id === selectedItem.id ? { ...item, color, updatedAt: Date.now() } : item)),
    );
  }

  function editSelectedItem() {
    if (!selectedItem) return;

    if (selectedItem.type === "link") setEditingLink(selectedItem);
    if (selectedItem.type === "note") setEditingNote(selectedItem);

    if (selectedItem.type === "folder") {
      const nextName = window.prompt("Novo nome da pasta:", selectedItem.title);
      if (nextName && nextName.trim()) {
        setItems((current) =>
          current.map((item) =>
            item.id === selectedItem.id ? { ...item, title: nextName.trim(), updatedAt: Date.now() } : item,
          ),
        );
      }
    }

    resetSelection();
  }

  async function shareSelectedItem() {
    if (!selectedItem) return;
    let text = selectedItem.title;

    if (selectedItem.type === "link") text = `${selectedItem.title}\n${selectedItem.url}\n${selectedItem.description}`;
    if (selectedItem.type === "note") text = `${selectedItem.title}\n\n${selectedItem.content}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: selectedItem.title, text });
      } catch {}
      return;
    }

    alert(text);
  }

  function openLink(item: LinkItem) {
    window.open(item.url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-5">
        <header className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-700">Versão web</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Links & Notas</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Salve links úteis, organize pastas e registre anotações diretamente no navegador. Nesta primeira versão, os dados ficam salvos apenas neste dispositivo.
          </p>
        </header>

        <section className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => openArea("links")}
            className={`rounded-3xl border p-5 text-left shadow-sm transition ${
              activeArea === "links" ? "border-blue-600 bg-blue-700 text-white" : "border-slate-200 bg-white text-slate-900 hover:border-blue-300"
            }`}
          >
            <span className="text-sm font-medium uppercase tracking-[0.14em] opacity-80">Repositório</span>
            <strong className="mt-2 block text-2xl">MEUS LINKS</strong>
            <span className="mt-2 block text-sm opacity-80">Guarde sites, páginas, documentos e conteúdos importantes.</span>
          </button>

          <button
            type="button"
            onClick={() => openArea("notes")}
            className={`rounded-3xl border p-5 text-left shadow-sm transition ${
              activeArea === "notes" ? "border-emerald-600 bg-emerald-700 text-white" : "border-slate-200 bg-white text-slate-900 hover:border-emerald-300"
            }`}
          >
            <span className="text-sm font-medium uppercase tracking-[0.14em] opacity-80">Bloco de notas</span>
            <strong className="mt-2 block text-2xl">Anotações</strong>
            <span className="mt-2 block text-sm opacity-80">Crie notas, ideias, lembretes e textos pessoais.</span>
          </button>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-bold">{activeArea === "links" ? "MEUS LINKS" : "Anotações"}</h2>
              <p className="text-sm text-slate-500">{currentFolder ? `Pasta atual: ${currentFolder.title}` : "Tela principal"}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {currentFolderId && (
                <button
                  type="button"
                  onClick={() => {
                    setCurrentFolderId(currentFolder?.folderId ?? null);
                    resetSelection();
                  }}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  Voltar
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  resetSelection();
                  activeArea === "links" ? setEditingLink(emptyLink(currentFolderId)) : setEditingNote(emptyNote(currentFolderId));
                }}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
              >
                {activeArea === "links" ? "+ Link" : "+ Nota"}
              </button>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-700">Buscar</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Digite para buscar..."
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <label className="block md:min-w-72">
              <span className="mb-1 block text-sm font-medium text-slate-700">Nova pasta</span>
              <div className="flex gap-2">
                <input
                  value={folderName}
                  onChange={(event) => setFolderName(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") saveFolder();
                  }}
                  placeholder="Nome da pasta"
                  className="min-w-0 flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <button type="button" onClick={saveFolder} className="rounded-2xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600">
                  Criar
                </button>
              </div>
            </label>
          </div>

          <div className="mt-5 grid gap-3">
            {visibleItems.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-500">Nenhum item encontrado.</div>
            ) : (
              visibleItems.map((item) => {
                const hasColor = Boolean(item.color);
                const isSelected = selectedItemId === item.id;

                return (
                  <article
                    key={item.id}
                    className={`rounded-3xl border p-4 shadow-sm transition ${isSelected ? "ring-2 ring-blue-500" : ""} ${
                      hasColor ? "border-transparent text-white" : "border-slate-200 bg-white text-slate-900"
                    }`}
                    style={hasColor ? { backgroundColor: item.color ?? undefined } : undefined}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          if (item.type === "folder") {
                            setCurrentFolderId(item.id);
                            resetSelection();
                            return;
                          }

                          setSelectedItemId(item.id);
                          setMoveTargetFolderId(item.folderId);
                        }}
                        className="min-w-0 flex-1 text-left"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">
                          {item.type === "folder" ? "Pasta" : item.type === "link" ? "Link" : "Nota"}
                        </span>
                        <strong className="mt-1 block truncate text-lg">{item.title}</strong>

                        {item.type === "link" && (
                          <>
                            <span className="mt-1 block truncate text-sm opacity-80">{item.url}</span>
                            {item.description && <span className="mt-2 block text-sm opacity-80">{item.description}</span>}
                          </>
                        )}

                        {item.type === "note" && (
                          <span className="mt-2 block whitespace-pre-wrap text-sm opacity-80">
                            {item.content.slice(0, 180)}
                            {item.content.length > 180 ? "..." : ""}
                          </span>
                        )}

                        <span className="mt-3 block text-xs opacity-70">Atualizado em {formatDate(item.updatedAt)}</span>
                      </button>

                      <div className="flex flex-wrap gap-2">
                        {item.type === "link" && (
                          <button
                            type="button"
                            onClick={() => openLink(item)}
                            className={`rounded-full px-3 py-2 text-xs font-semibold ${
                              hasColor ? "bg-white/20 text-white hover:bg-white/30" : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                            }`}
                          >
                            Abrir
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedItemId(item.id);
                            setMoveTargetFolderId(item.folderId);
                          }}
                          className={`rounded-full px-3 py-2 text-xs font-semibold ${
                            hasColor ? "bg-white/20 text-white hover:bg-white/30" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          Opções
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </section>

        {selectedItem && (
          <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Item selecionado</p>
                <h3 className="text-lg font-bold">{selectedItem.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={editSelectedItem} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
                  Editar
                </button>
                <button type="button" onClick={shareSelectedItem} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  Enviar
                </button>
                <button type="button" onClick={deleteSelectedItem} className="rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">
                  Excluir
                </button>
                <button type="button" onClick={resetSelection} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  Cancelar
                </button>
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-slate-700">Mover para</span>
                <select
                  value={moveTargetFolderId ?? ""}
                  onChange={(event) => setMoveTargetFolderId(event.target.value || null)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Tela principal</option>
                  {folders
                    .filter((folder) => folder.id !== selectedItem.id)
                    .map((folder) => (
                      <option key={folder.id} value={folder.id}>
                        {folder.title}
                      </option>
                    ))}
                </select>
                <button type="button" onClick={moveSelectedItem} className="mt-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
                  Mover
                </button>
              </label>

              <div>
                <span className="mb-2 block text-sm font-medium text-slate-700">Cor</span>
                <div className="flex flex-wrap gap-2">
                  {COLORS.map((color) => (
                    <button
                      key={color.label}
                      type="button"
                      onClick={() => changeSelectedColor(color.value)}
                      className="rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                      style={
                        color.value
                          ? {
                              backgroundColor: color.value,
                              color: "#ffffff",
                              borderColor: color.value,
                            }
                          : undefined
                      }
                    >
                      {color.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {editingLink && (
          <section className="rounded-3xl border border-blue-200 bg-white p-5 shadow-sm">
            <h3 className="text-xl font-bold">{items.some((item) => item.id === editingLink.id) ? "Editar link" : "Novo link"}</h3>
            <div className="mt-4 grid gap-3">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-slate-700">Título</span>
                <input value={editingLink.title} onChange={(event) => setEditingLink({ ...editingLink, title: event.target.value })} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-slate-700">Link</span>
                <input value={editingLink.url} onChange={(event) => setEditingLink({ ...editingLink, url: event.target.value })} placeholder="https://exemplo.com" className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-slate-700">Descrição</span>
                <textarea value={editingLink.description} onChange={(event) => setEditingLink({ ...editingLink, description: event.target.value })} rows={3} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </label>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={saveLink} className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">Salvar</button>
              <button type="button" onClick={() => setEditingLink(null)} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">Cancelar</button>
            </div>
          </section>
        )}

        {editingNote && (
          <section className="rounded-3xl border border-emerald-200 bg-white p-5 shadow-sm">
            <h3 className="text-xl font-bold">{items.some((item) => item.id === editingNote.id) ? "Editar nota" : "Nova nota"}</h3>
            <div className="mt-4 grid gap-3">
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-slate-700">Título</span>
                <input value={editingNote.title} onChange={(event) => setEditingNote({ ...editingNote, title: event.target.value })} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium text-slate-700">Anotação</span>
                <textarea value={editingNote.content} onChange={(event) => setEditingNote({ ...editingNote, content: event.target.value })} rows={8} className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </label>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={saveNote} className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600">Salvar</button>
              <button type="button" onClick={() => setEditingNote(null)} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">Cancelar</button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
