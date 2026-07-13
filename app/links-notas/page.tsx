"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { getBiblicalText, normalizeReferenceKey } from "@/lib/biblical-texts-data";

type Area = "home" | "links" | "notes" | "history" | "about" | "settings";
type Mode = "all" | "folders" | "items";

type DateValue = string | number;

type LinkFolder = {
  id: string;
  title: string;
  icon: string;
  createdAt?: DateValue;
  updatedAt?: DateValue;
};

type CustomLink = {
  id: string;
  title: string;
  url: string;
  folderId?: string | null;
  isCustom?: boolean;
  createdAt?: DateValue;
  updatedAt?: DateValue;
};

type NoteFolder = {
  id: string;
  name: string;
  icon: string;
  createdAt?: DateValue;
  updatedAt?: DateValue;
};

type NoteItem = {
  id: string;
  title: string;
  content: string;
  folderId?: string | null;
  color?: string | null;
  isProtected?: boolean;
  reminderAt?: string | null;
  reminderNotificationId?: string | null;
  createdAt?: DateValue;
  updatedAt?: DateValue;
};

type StructuredNote = {
  id: string;
  title?: string;
  type?: string;
  source?: string;
  createdAt?: DateValue;
  updatedAt?: DateValue;
  sections?: unknown[];
  color?: string | null;
  [key: string]: unknown;
};

type AppData = {
  customFolders: LinkFolder[];
  customLinks: CustomLink[];
  noteFolders: NoteFolder[];
  notes: NoteItem[];
  structuredNotes: StructuredNote[];
};

type LinksNotasBackupFile = {
  schema: "links-notas-backup";
  version: 1;
  createdAt: string;
  source: "user-export";
  data: AppData;
};

type SelectedVerse = {
  reference: string;
  fullText: string;
};

type HelpTopic = {
  id: string;
  icon: string;
  title: string;
  summary: string;
  details: string[];
};


type Target =
  | { kind: "link"; item: CustomLink }
  | { kind: "linkFolder"; item: LinkFolder }
  | { kind: "note"; item: NoteItem }
  | { kind: "noteFolder"; item: NoteFolder };

type HistoryEntry = {
  id: string;
  title: string;
  subtitle: string;
  area: "links" | "notes";
  targetId?: string | null;
  kind: "link" | "note" | "structuredNote" | "linkFolder" | "noteFolder";
  createdAt: string;
};

type ModalName = "link" | "linkFolder" | "note" | "noteFolder" | "move" | "color" | null;

const STORAGE_KEY = "links-notas-web-layout-app-v3";

const EMPTY_DATA: AppData = {
  customFolders: [],
  customLinks: [],
  noteFolders: [],
  notes: [],
  structuredNotes: [],
};

const CARD_GRADIENT = "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #8B5CF6 100%)";

const COLORS = {
  background: "#F8FAFC",
  surface: "#FFFFFF",
  foreground: "#0F172A",
  muted: "#64748B",
  border: "#E2E8F0",
  primary: "#2563EB",
  purple: "#7C3AED",
  folderBackground: "#E0F2FE",
  folderBorder: "#38BDF8",
  actionBar: "#E5E7EB",
  actionBorder: "#94A3B8",
};

const APP_VERSION = "1.0.0";

const ICONS = ["📁", "⭐", "📌", "📚", "📝", "🔗", "💼", "🏠", "❤️", "✅"];

const NOTE_COLORS = [
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

const HELP_TOPICS: HelpTopic[] = [
  {
    id: "inicio",
    icon: "🏠",
    title: "Tela inicial e cards",
    summary: "Entenda os cards principais, a busca e o acesso rápido.",
    details: [
      "A tela inicial apresenta os cards principais do aplicativo: Meus Links e Anotações.",
      "O card Meus Links leva ao espaço onde você salva sites, atalhos e páginas importantes.",
      "O card Anotações leva ao bloco de notas, onde você cria notas comuns, pastas e acessa notas estruturadas.",
      "A barra de busca encontra links, notas, pastas e notas estruturadas salvos no aplicativo.",
      "Quando você abre um item pela busca, ele também pode aparecer no histórico de itens recentes.",
    ],
  },
  {
    id: "links",
    icon: "🔗",
    title: "Meus Links",
    summary: "Salvar, abrir, editar, mover, enviar e excluir links.",
    details: [
      "Use + Link para cadastrar um novo endereço. Informe o nome do link e a URL.",
      "Links podem ficar sem pasta ou dentro de uma pasta criada por você.",
      "Toque ou clique no link para abrir o endereço em uma nova aba/janela.",
      "Use o menu de opções do item para editar, mover, enviar ou excluir.",
      "Editar altera o nome, o endereço e a pasta do link.",
      "Mover troca o link de pasta ou o deixa sem pasta.",
      "Enviar usa o compartilhamento do navegador quando disponível.",
      "Excluir remove o link salvo localmente.",
    ],
  },
  {
    id: "pastas",
    icon: "📁",
    title: "Pastas",
    summary: "Organize links e notas por assunto.",
    details: [
      "Use + Pasta para criar uma pasta em Meus Links ou em Anotações.",
      "Pastas ajudam a separar conteúdos por tema, projeto ou finalidade.",
      "Ao abrir uma pasta, a tela mostra apenas os itens guardados dentro dela.",
      "Pastas podem ser editadas para alterar nome e ícone.",
      "Excluir uma pasta não precisa apagar os itens: os itens podem voltar para a área sem pasta, conforme a ação configurada na tela.",
      "No rodapé de opções, pastas exibem ações compatíveis, como editar, excluir e cancelar.",
    ],
  },
  {
    id: "notas",
    icon: "📝",
    title: "Notas comuns",
    summary: "Crie notas livres, organize em pastas e altere cores.",
    details: [
      "Use + Nota para criar uma nova anotação.",
      "A nota possui título, texto e opção de pasta.",
      "Se o título ficar vazio, o aplicativo tenta usar o começo do texto como título.",
      "Notas podem ser editadas a qualquer momento.",
      "Você pode mover uma nota para outra pasta ou deixá-la sem pasta.",
      "A opção Cor altera a cor do card da nota, facilitando a organização visual.",
      "A opção Enviar compartilha o conteúdo da nota quando o navegador oferece suporte.",
      "A opção Excluir remove a nota salva neste navegador.",
    ],
  },
  {
    id: "estruturadas",
    icon: "📖",
    title: "Notas estruturadas",
    summary: "Use Assuntos para Pregação e textos bíblicos clicáveis.",
    details: [
      "Notas estruturadas são notas especiais organizadas por assuntos e perguntas.",
      "Assuntos para Pregação fica sempre no topo da lista de notas.",
      "Ao abrir Assuntos para Pregação, você vê submenus como Deus, Família, Futuro e outros.",
      "Cada submenu abre uma tela própria com perguntas e textos bíblicos relacionados.",
      "Os textos bíblicos aparecem como botões clicáveis.",
      "Ao clicar em um texto bíblico, uma janela mostra o conteúdo local do versículo.",
      "Essa nota especial faz parte da lista de notas, mas não é editada como uma nota comum.",
    ],
  },
  {
    id: "rodape-opcoes",
    icon: "⋯",
    title: "Opções e rodapé",
    summary: "Ações exibidas ao selecionar itens.",
    details: [
      "Ao selecionar um item, o rodapé mostra as ações disponíveis para aquele tipo de conteúdo.",
      "Editar altera os dados do item selecionado.",
      "Mover aparece para links e notas, permitindo trocar de pasta.",
      "Cor aparece para notas, permitindo alterar a cor do card.",
      "Enviar compartilha links ou notas quando o navegador permite.",
      "Excluir remove o item selecionado.",
      "Cancelar fecha o rodapé de opções e volta à tela normal.",
      "O botão + abre as ações de criação. Quando aberto, ele vira X; ao cancelar, volta ao estado normal.",
      "A tecla Esc fecha o menu de criação, janelas abertas e ações temporárias.",
    ],
  },
  {
    id: "backup",
    icon: "💾",
    title: "Backup e dados locais",
    summary: "Entenda onde os dados ficam salvos e como preservar informações.",
    details: [
      "Os dados da versão web ficam salvos localmente no navegador, usando armazenamento local.",
      "Isso significa que seus dados não migram automaticamente para a versão mobile.",
      "Use Backup para exportar seus links, pastas, notas e notas estruturadas em um arquivo .lu.",
      "Use Restaurar/Importar para trazer dados de um backup salvo anteriormente.",
      "Se você limpar dados do navegador, trocar de computador ou usar aba anônima, os dados podem não aparecer.",
      "Faça backup periodicamente, principalmente antes de formatar o computador ou trocar de navegador.",
    ],
  },
  {
    id: "historico-configuracoes",
    icon: "🕘",
    title: "Histórico, Sobre e Configurações",
    summary: "Veja itens recentes, informações do app e ajustes.",
    details: [
      "O Histórico mostra itens abertos recentemente para facilitar o retorno rápido.",
      "Limpar histórico apaga apenas a lista de recentes; não apaga links, notas ou pastas.",
      "A aba Sobre mostra informações do aplicativo, desenvolvedor e canais de contato.",
      "A aba Configurações reúne resumo dos dados locais e opções de backup/restauração.",
      "O botão Fale conosco abre a página de contato do Laboratório de IA.",
    ],
  },
];

function makeId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function nowIso() {
  return new Date().toISOString();
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" ? (value as Record<string, unknown>) : {};
}

function asString(value: unknown, fallback = "") {
  if (value === null || value === undefined) {
    return fallback;
  }

  const text = String(value);

  return text.trim() ? text : fallback;
}

function normalizeComparableText(value: unknown) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toUpperCase();
}

function isPreachingStructuredNote(note: StructuredNote) {
  const title = normalizeComparableText(note.title);
  const type = normalizeComparableText(note.type);
  const source = normalizeComparableText(note.source);

  return (
    title.includes("ASSUNTOS PARA PREGACAO") ||
    type.includes("PREACHING") ||
    source.includes("PREACHING")
  );
}

function normalizeFolderId(value: unknown) {
  if (value === null || value === undefined) {
    return null;
  }

  const text = String(value).trim();

  if (!text) {
    return null;
  }

  const lowered = text.toLowerCase();

  if (
    lowered === "null" ||
    lowered === "undefined" ||
    lowered === "none" ||
    lowered === "root" ||
    lowered === "sem-pasta" ||
    lowered === "sem pasta"
  ) {
    return null;
  }

  return text;
}

function normalizeDateValue(value: unknown) {
  if (typeof value === "string" || typeof value === "number") {
    return value;
  }

  return nowIso();
}

function isRootByFolderId(folderId: unknown, validFolderIds: Set<string>) {
  const normalized = normalizeFolderId(folderId);

  return !normalized || !validFolderIds.has(normalized);
}

function matchesFolderId(folderId: unknown, selectedFolderId: string | null) {
  if (!selectedFolderId) {
    return false;
  }

  return normalizeFolderId(folderId) === selectedFolderId;
}

function normalizeBackupPayload(payload: unknown): AppData {
  if (!payload || typeof payload !== "object") {
    throw new Error("Arquivo de backup inválido.");
  }

  const root = asRecord(payload);
  const source =
    root.data && typeof root.data === "object"
      ? asRecord(root.data)
      : root;

  const rawCustomFolders = Array.isArray(source.customFolders) ? source.customFolders : [];
  const rawCustomLinks = Array.isArray(source.customLinks) ? source.customLinks : [];
  const rawNoteFolders = Array.isArray(source.noteFolders) ? source.noteFolders : [];
  const rawNotes = Array.isArray(source.notes) ? source.notes : [];
  const rawStructuredNotes = Array.isArray(source.structuredNotes) ? source.structuredNotes : [];

  const hasKnownBackupKeys =
    Array.isArray(source.customFolders) ||
    Array.isArray(source.customLinks) ||
    Array.isArray(source.noteFolders) ||
    Array.isArray(source.notes) ||
    Array.isArray(source.structuredNotes);

  if (!hasKnownBackupKeys) {
    throw new Error("Este arquivo não parece ser um backup do Links & Notas.");
  }

  const customFolders: LinkFolder[] = rawCustomFolders
    .map((item, index) => {
      const folder = asRecord(item);
      const id = asString(folder.id, `link-folder-${index}`);

      return {
        id,
        title: asString(folder.title ?? folder.name, "Sem título"),
        icon: asString(folder.icon, "📁"),
        createdAt: normalizeDateValue(folder.createdAt),
        updatedAt: normalizeDateValue(folder.updatedAt ?? folder.createdAt),
      };
    })
    .filter((folder) => folder.id);

  const customFolderIds = new Set(customFolders.map((folder) => folder.id));

  const customLinks: CustomLink[] = rawCustomLinks
    .map((item, index) => {
      const link = asRecord(item);
      const id = asString(link.id, `link-${index}`);
      const folderId = normalizeFolderId(link.folderId ?? link.folder_id ?? link.folderID);

      return {
        id,
        title: asString(link.title ?? link.name, "Sem título"),
        url: asString(link.url ?? link.href, ""),
        folderId: folderId && customFolderIds.has(folderId) ? folderId : null,
        isCustom: typeof link.isCustom === "boolean" ? link.isCustom : true,
        createdAt: normalizeDateValue(link.createdAt),
        updatedAt: normalizeDateValue(link.updatedAt ?? link.createdAt),
      };
    })
    .filter((link) => link.id && link.title);

  const noteFolders: NoteFolder[] = rawNoteFolders
    .map((item, index) => {
      const folder = asRecord(item);
      const id = asString(folder.id, `note-folder-${index}`);

      return {
        id,
        name: asString(folder.name ?? folder.title, "Sem título"),
        icon: asString(folder.icon, "📁"),
        createdAt: normalizeDateValue(folder.createdAt),
        updatedAt: normalizeDateValue(folder.updatedAt ?? folder.createdAt),
      };
    })
    .filter((folder) => folder.id);

  const noteFolderIds = new Set(noteFolders.map((folder) => folder.id));

  const notes: NoteItem[] = rawNotes
    .map((item, index) => {
      const note = asRecord(item);
      const id = asString(note.id, `note-${index}`);
      const folderId = normalizeFolderId(note.folderId ?? note.folder_id ?? note.folderID);

      return {
        id,
        title: asString(note.title, "Sem título"),
        content: asString(note.content ?? note.text, ""),
        folderId: folderId && noteFolderIds.has(folderId) ? folderId : null,
        color: typeof note.color === "string" ? note.color : null,
        isProtected: typeof note.isProtected === "boolean" ? note.isProtected : false,
        reminderAt: typeof note.reminderAt === "string" ? note.reminderAt : null,
        reminderNotificationId:
          typeof note.reminderNotificationId === "string" ? note.reminderNotificationId : null,
        createdAt: normalizeDateValue(note.createdAt),
        updatedAt: normalizeDateValue(note.updatedAt ?? note.createdAt),
      };
    })
    .filter((note) => note.id);

  const structuredNotes: StructuredNote[] = rawStructuredNotes
    .map((item, index) => {
      const note = asRecord(item);

      return {
        ...note,
        id: asString(note.id, `structured-note-${index}`),
        title: asString(note.title, "Sem título"),
        createdAt: normalizeDateValue(note.createdAt),
        updatedAt: normalizeDateValue(note.updatedAt ?? note.createdAt),
      } as StructuredNote;
    })
    .filter((note) => note.id);

  return {
    customFolders,
    customLinks,
    noteFolders,
    notes,
    structuredNotes,
  };
}

function mergeById<T extends { id: string }>(currentItems: T[], importedItems: T[]) {
  const merged = new Map<string, T>();

  currentItems.forEach((item) => {
    if (item?.id) {
      merged.set(item.id, item);
    }
  });

  importedItems.forEach((item) => {
    if (item?.id) {
      merged.set(item.id, item);
    }
  });

  return Array.from(merged.values());
}

function mergeAppData(current: AppData, imported: AppData): AppData {
  const merged: AppData = {
    customFolders: mergeById(current.customFolders, imported.customFolders),
    customLinks: mergeById(current.customLinks, imported.customLinks),
    noteFolders: mergeById(current.noteFolders, imported.noteFolders),
    notes: mergeById(current.notes, imported.notes),
    structuredNotes: mergeById(current.structuredNotes, imported.structuredNotes),
  };

  return normalizeBackupPayload(merged);
}

function createBackupFilePayload(data: AppData): LinksNotasBackupFile {
  return {
    schema: "links-notas-backup",
    version: 1,
    createdAt: nowIso(),
    source: "user-export",
    data: normalizeBackupPayload(data),
  };
}

function twoDigits(value: number) {
  return String(value).padStart(2, "0");
}

function makeBackupFileName(date = new Date()) {
  const year = date.getFullYear();
  const month = twoDigits(date.getMonth() + 1);
  const day = twoDigits(date.getDate());
  const hour = twoDigits(date.getHours());
  const minute = twoDigits(date.getMinutes());
  const second = twoDigits(date.getSeconds());

  return `links-notas-backup-${year}-${month}-${day}_${hour}-${minute}-${second}.lu`;
}

function normalizeUrl(url: string) {
  const clean = url.trim();

  if (!clean) {
    return "";
  }

  return /^https?:\/\//i.test(clean) ? clean : `https://${clean}`;
}

function getHost(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getDateTime(value?: DateValue | null) {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function formatDate(dateString?: DateValue | null) {
  const timestamp = getDateTime(dateString);

  if (!timestamp) {
    return "";
  }

  return new Date(timestamp).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });
}

export default function LinksNotasWebPage() {
  const [area, setArea] = useState<Area>("home");
  const [data, setData] = useState<AppData>(EMPTY_DATA);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [homeSearch, setHomeSearch] = useState("");
  const [linkMode, setLinkMode] = useState<Mode>("all");
  const [noteMode, setNoteMode] = useState<Mode>("all");
  const [linkFolderId, setLinkFolderId] = useState<string | null>(null);
  const [noteFolderId, setNoteFolderId] = useState<string | null>(null);

  const [target, setTarget] = useState<Target | null>(null);
  const [fabOpen, setFabOpen] = useState(false);
  const [backupOpen, setBackupOpen] = useState(false);
  const [confirmClearHistoryOpen, setConfirmClearHistoryOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [activeHelpTopicId, setActiveHelpTopicId] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalName>(null);
  const [structuredPreview, setStructuredPreview] = useState<StructuredNote | null>(null);
  const [structuredSectionId, setStructuredSectionId] = useState<string | null>(null);
  const [selectedVerse, setSelectedVerse] = useState<SelectedVerse | null>(null);

  const [editId, setEditId] = useState<string | null>(null);
  const [fieldOne, setFieldOne] = useState("");
  const [fieldTwo, setFieldTwo] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState("📁");
  const [importUrl, setImportUrl] = useState("");

  useEffect(() => {
    if (!modal || editId) {
      return;
    }

    if (!["link", "linkFolder", "note", "noteFolder"].includes(modal)) {
      return;
    }

    const timer = window.setTimeout(() => {
      const firstField = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        "[data-auto-focus-field='true']"
      );

      firstField?.focus();
      firstField?.select?.();
    }, 50);

    return () => window.clearTimeout(timer);
  }, [modal, editId]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const rawHistory = window.localStorage.getItem(`${STORAGE_KEY}:history`);

      if (raw) {
        setData(normalizeBackupPayload(JSON.parse(raw)));
      }

      if (rawHistory) {
        setHistory(JSON.parse(rawHistory));
      }
    } catch {
      setData(EMPTY_DATA);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    window.localStorage.setItem(`${STORAGE_KEY}:history`, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      if (selectedVerse) {
        event.preventDefault();
        setSelectedVerse(null);
        return;
      }

      if (activeHelpTopicId) {
        event.preventDefault();
        setActiveHelpTopicId(null);
        return;
      }

      if (helpOpen) {
        event.preventDefault();
        setHelpOpen(false);
        return;
      }

      if (confirmClearHistoryOpen) {
        event.preventDefault();
        setConfirmClearHistoryOpen(false);
        return;
      }

      if (modal) {
        event.preventDefault();
        closeModal();
        return;
      }

      if (fabOpen) {
        event.preventDefault();
        setFabOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [activeHelpTopicId, confirmClearHistoryOpen, fabOpen, helpOpen, modal, selectedVerse]);

  const linkFolders = useMemo(
    () => data.customFolders.slice().sort((a, b) => a.title.localeCompare(b.title)),
    [data.customFolders],
  );

  const noteFolders = useMemo(
    () => data.noteFolders.slice().sort((a, b) => a.name.localeCompare(b.name)),
    [data.noteFolders],
  );

  const links = useMemo(
    () => data.customLinks.slice().sort((a, b) => a.title.localeCompare(b.title)),
    [data.customLinks],
  );

  const notes = useMemo(
    () =>
      data.notes
        .slice()
        .sort((a, b) => getDateTime(b.updatedAt) - getDateTime(a.updatedAt)),
    [data.notes],
  );

  const structuredNotes = useMemo(
    () =>
      data.structuredNotes
        .slice()
        .sort((a, b) => {
          const aIsPreaching = isPreachingStructuredNote(a);
          const bIsPreaching = isPreachingStructuredNote(b);

          if (aIsPreaching !== bIsPreaching) {
            return aIsPreaching ? -1 : 1;
          }

          return getDateTime(b.updatedAt) - getDateTime(a.updatedAt);
        }),
    [data.structuredNotes],
  );

  const activeLinkFolder = useMemo(
    () => linkFolders.find((folder) => folder.id === linkFolderId) ?? null,
    [linkFolders, linkFolderId],
  );

  const activeNoteFolder = useMemo(
    () => noteFolders.find((folder) => folder.id === noteFolderId) ?? null,
    [noteFolders, noteFolderId],
  );

  const linkFolderIds = useMemo(() => {
    return new Set(linkFolders.map((folder) => folder.id));
  }, [linkFolders]);

  const noteFolderIds = useMemo(() => {
    return new Set(noteFolders.map((folder) => folder.id));
  }, [noteFolders]);

  const rootLinks = useMemo(() => {
    return links.filter((link) => isRootByFolderId(link.folderId, linkFolderIds));
  }, [linkFolderIds, links]);

  const activeFolderLinks = useMemo(() => {
    if (!linkFolderId) {
      return [];
    }

    return links.filter((link) => matchesFolderId(link.folderId, linkFolderId));
  }, [linkFolderId, links]);

  const rootNotes = useMemo(() => {
    return notes.filter((note) => isRootByFolderId(note.folderId, noteFolderIds));
  }, [noteFolderIds, notes]);

  const activeFolderNotes = useMemo(() => {
    if (!noteFolderId) {
      return [];
    }

    return notes.filter((note) => matchesFolderId(note.folderId, noteFolderId));
  }, [noteFolderId, notes]);

  const visibleLinkFolders = useMemo(() => {
    if (linkFolderId) {
      return [];
    }

    return linkMode === "all" || linkMode === "folders" ? linkFolders : [];
  }, [linkFolderId, linkMode, linkFolders]);

  const visibleLinks = useMemo(() => {
    if (linkFolderId) {
      return activeFolderLinks;
    }

    return linkMode === "all" || linkMode === "items" ? rootLinks : [];
  }, [activeFolderLinks, linkFolderId, linkMode, rootLinks]);

  const visibleNoteFolders = useMemo(() => {
    if (noteFolderId) {
      return [];
    }

    return noteMode === "all" || noteMode === "folders" ? noteFolders : [];
  }, [noteFolderId, noteMode, noteFolders]);

  const visibleNotes = useMemo(() => {
    if (noteFolderId) {
      return activeFolderNotes;
    }

    return noteMode === "all" || noteMode === "items" ? rootNotes : [];
  }, [activeFolderNotes, noteFolderId, noteMode, rootNotes]);

  const visibleStructuredNotes = useMemo(() => {
    if (noteFolderId) {
      return [];
    }

    return noteMode === "all" || noteMode === "items" ? structuredNotes : [];
  }, [noteFolderId, noteMode, structuredNotes]);

  const homeResults = useMemo(() => {
    const query = homeSearch.trim().toLowerCase();

    if (!query) {
      return [];
    }

    const foundLinks = links
      .filter((link) => `${link.title} ${link.url} ${getHost(link.url)}`.toLowerCase().includes(query))
      .slice(0, 5);

    const foundNotes = notes
      .filter((note) => `${note.title} ${note.content}`.toLowerCase().includes(query))
      .slice(0, 5);

    const foundStructuredNotes = structuredNotes
      .filter((note) => `${note.title ?? ""} ${note.type ?? ""} ${note.source ?? ""}`.toLowerCase().includes(query))
      .slice(0, 5);

    const foundLinkFolders = linkFolders
      .filter((folder) => `${folder.icon} ${folder.title}`.toLowerCase().includes(query))
      .slice(0, 4);

    const foundNoteFolders = noteFolders
      .filter((folder) => `${folder.icon} ${folder.name}`.toLowerCase().includes(query))
      .slice(0, 4);

    return [
      ...foundLinkFolders.map((item) => ({ kind: "linkFolder" as const, item })),
      ...foundLinks.map((item) => ({ kind: "link" as const, item })),
      ...foundNoteFolders.map((item) => ({ kind: "noteFolder" as const, item })),
      ...foundStructuredNotes.map((item) => ({ kind: "structuredNote" as const, item })),
      ...foundNotes.map((item) => ({ kind: "note" as const, item })),
    ];
  }, [homeSearch, links, notes, structuredNotes, linkFolders, noteFolders]);

  function addHistory(entry: Omit<HistoryEntry, "id" | "createdAt">) {
    const createdAt = nowIso();

    setHistory((current) => [
      {
        id: makeId("history"),
        createdAt,
        ...entry,
      },
      ...current.filter(
        (item) =>
          !(
            item.kind === entry.kind &&
            item.targetId === entry.targetId &&
            item.title === entry.title
          ),
      ),
    ].slice(0, 80));
  }

  function openFooterArea(nextArea: Area) {
    closeSelection();
    closeModal();
    setFabOpen(false);
    setArea(nextArea);
    setLinkFolderId(null);
    setNoteFolderId(null);
    setStructuredPreview(null);
    setStructuredSectionId(null);
  }

  function closeSelection() {
    setTarget(null);
    setFabOpen(false);
  }

  function closeModal() {
    setModal(null);
    setSelectedVerse(null);
    setEditId(null);
    setFieldOne("");
    setFieldTwo("");
    setSelectedFolderId(null);
    setSelectedIcon("📁");
    setFabOpen(false);
  }

  function closeStructuredNote() {
    setStructuredPreview(null);
    setStructuredSectionId(null);
    setSelectedVerse(null);
    closeSelection();
  }

  function goHome() {
    closeSelection();
    closeModal();
    setArea("home");
    setLinkFolderId(null);
    setNoteFolderId(null);
    setStructuredPreview(null);
    setStructuredSectionId(null);
  }

  function handleBack() {
    if (area === "notes" && structuredPreview && structuredSectionId) {
      setStructuredSectionId(null);
      setSelectedVerse(null);
      closeSelection();
      return;
    }

    if (area === "notes" && structuredPreview) {
      closeStructuredNote();
      return;
    }

    if (area === "links" && linkFolderId) {
      setLinkFolderId(null);
      closeSelection();
      return;
    }

    if (area === "notes" && noteFolderId) {
      setNoteFolderId(null);
      closeSelection();
      return;
    }

    goHome();
  }

  function requestClearHistory() {
    closeSelection();
    setConfirmClearHistoryOpen(true);
  }

  function clearHistory() {
    setHistory([]);
    setConfirmClearHistoryOpen(false);
  }

  function openBiblicalText(reference: string, referenceKey?: string | null) {
    const key = referenceKey?.trim() || normalizeReferenceKey(reference);
    const biblicalText = getBiblicalText(key);

    if (!biblicalText) {
      alert(`O texto local de ${reference} ainda não foi encontrado no banco bíblico do app.`);
      return;
    }

    setSelectedVerse({
      reference: biblicalText.reference || reference,
      fullText: biblicalText.fullText,
    });
  }

  function openStructuredNote(note: StructuredNote) {
    addHistory({
      title: note.title || "Nota estruturada",
      subtitle: "Nota estruturada",
      area: "notes",
      kind: "structuredNote",
      targetId: note.id,
    });

    setArea("notes");
    setStructuredPreview(note);
    setStructuredSectionId(null);
    closeSelection();
  }

  function openTargetItem(nextTarget: Target) {
    if (nextTarget.kind === "link") {
      addHistory({
        title: nextTarget.item.title,
        subtitle: getHost(nextTarget.item.url),
        area: "links",
        kind: "link",
        targetId: nextTarget.item.id,
      });
      window.open(nextTarget.item.url, "_blank", "noopener,noreferrer");
      return;
    }

    if (nextTarget.kind === "linkFolder") {
      addHistory({
        title: nextTarget.item.title,
        subtitle: "Pasta de Meus Links",
        area: "links",
        kind: "linkFolder",
        targetId: nextTarget.item.id,
      });
      setArea("links");
      setLinkFolderId(nextTarget.item.id);
      closeSelection();
      return;
    }

    if (nextTarget.kind === "note") {
      addHistory({
        title: nextTarget.item.title || "Sem título",
        subtitle: "Anotação",
        area: "notes",
        kind: "note",
        targetId: nextTarget.item.id,
      });
      startNote(nextTarget.item);
      return;
    }

    addHistory({
      title: nextTarget.item.name,
      subtitle: "Pasta de Anotações",
      area: "notes",
      kind: "noteFolder",
      targetId: nextTarget.item.id,
    });
    setArea("notes");
    setNoteFolderId(nextTarget.item.id);
    closeSelection();
  }

  function startLink(item?: CustomLink) {
    setEditId(item?.id ?? null);
    setFieldOne(item?.title ?? "");
    setFieldTwo(item?.url ?? "");
    setSelectedFolderId(item?.folderId ?? linkFolderId ?? null);
    setFabOpen(false);
    setTarget(null);
    setModal("link");
  }

  function saveLink() {
    const title = fieldOne.trim();
    const url = normalizeUrl(fieldTwo);
    const timestamp = nowIso();

    if (!title) {
      alert("Digite o nome do link.");
      return;
    }

    if (!url) {
      alert("Digite o endereço do link.");
      return;
    }

    setData((current) => {
      if (editId) {
        return {
          ...current,
          customLinks: current.customLinks.map((link) =>
            link.id === editId
              ? {
                  ...link,
                  title,
                  url,
                  folderId: selectedFolderId,
                  updatedAt: timestamp,
                }
              : link,
          ),
        };
      }

      return {
        ...current,
        customLinks: [
          ...current.customLinks,
          {
            id: makeId("link"),
            title,
            url,
            folderId: selectedFolderId,
            createdAt: timestamp,
            updatedAt: timestamp,
          },
        ],
      };
    });

    closeModal();
  }

  function startLinkFolder(item?: LinkFolder) {
    setEditId(item?.id ?? null);
    setFieldOne(item?.title ?? "");
    setSelectedIcon(item?.icon ?? "📁");
    setFabOpen(false);
    setTarget(null);
    setModal("linkFolder");
  }

  function saveLinkFolder() {
    const title = fieldOne.trim();
    const timestamp = nowIso();

    if (!title) {
      alert("Digite o nome da pasta.");
      return;
    }

    setData((current) => {
      if (editId) {
        return {
          ...current,
          customFolders: current.customFolders.map((folder) =>
            folder.id === editId
              ? {
                  ...folder,
                  title,
                  icon: selectedIcon,
                  updatedAt: timestamp,
                }
              : folder,
          ),
        };
      }

      return {
        ...current,
        customFolders: [
          ...current.customFolders,
          {
            id: makeId("link-folder"),
            title,
            icon: selectedIcon,
            createdAt: timestamp,
            updatedAt: timestamp,
          },
        ],
      };
    });

    closeModal();
  }

  function startNote(item?: NoteItem) {
    setEditId(item?.id ?? null);
    setFieldOne(item?.title ?? "");
    setFieldTwo(item?.content ?? "");
    setSelectedFolderId(item?.folderId ?? noteFolderId ?? null);
    setFabOpen(false);
    setTarget(null);
    setModal("note");
  }

  function saveNote() {
    const title = fieldOne.trim() || fieldTwo.trim().split("\n")[0]?.slice(0, 48) || "Sem título";
    const timestamp = nowIso();

    if (!title.trim() && !fieldTwo.trim()) {
      alert("Digite um título ou uma anotação.");
      return;
    }

    setData((current) => {
      if (editId) {
        return {
          ...current,
          notes: current.notes.map((note) =>
            note.id === editId
              ? {
                  ...note,
                  title,
                  content: fieldTwo,
                  folderId: selectedFolderId,
                  updatedAt: timestamp,
                }
              : note,
          ),
        };
      }

      return {
        ...current,
        notes: [
          ...current.notes,
          {
            id: makeId("note"),
            title,
            content: fieldTwo,
            folderId: selectedFolderId,
            color: null,
            createdAt: timestamp,
            updatedAt: timestamp,
          },
        ],
      };
    });

    closeModal();
  }

  function startNoteFolder(item?: NoteFolder) {
    setEditId(item?.id ?? null);
    setFieldOne(item?.name ?? "");
    setSelectedIcon(item?.icon ?? "📁");
    setFabOpen(false);
    setTarget(null);
    setModal("noteFolder");
  }

  function saveNoteFolder() {
    const name = fieldOne.trim();
    const timestamp = nowIso();

    if (!name) {
      alert("Digite o nome da pasta.");
      return;
    }

    setData((current) => {
      if (editId) {
        return {
          ...current,
          noteFolders: current.noteFolders.map((folder) =>
            folder.id === editId
              ? {
                  ...folder,
                  name,
                  icon: selectedIcon,
                  updatedAt: timestamp,
                }
              : folder,
          ),
        };
      }

      return {
        ...current,
        noteFolders: [
          ...current.noteFolders,
          {
            id: makeId("note-folder"),
            name,
            icon: selectedIcon,
            createdAt: timestamp,
            updatedAt: timestamp,
          },
        ],
      };
    });

    closeModal();
  }

  function editTarget() {
    if (!target) {
      return;
    }

    if (target.kind === "link") startLink(target.item);
    if (target.kind === "linkFolder") startLinkFolder(target.item);
    if (target.kind === "note") startNote(target.item);
    if (target.kind === "noteFolder") startNoteFolder(target.item);
  }

  function deleteTarget() {
    if (!target) {
      return;
    }

    const label =
      target.kind === "noteFolder"
        ? target.item.name
        : target.kind === "linkFolder"
          ? target.item.title
          : target.item.title;

    if (!window.confirm(`Excluir "${label}"?`)) {
      return;
    }

    setData((current) => {
      if (target.kind === "link") {
        return {
          ...current,
          customLinks: current.customLinks.filter((link) => link.id !== target.item.id),
        };
      }

      if (target.kind === "linkFolder") {
        return {
          ...current,
          customFolders: current.customFolders.filter((folder) => folder.id !== target.item.id),
          customLinks: current.customLinks.map((link) =>
            link.folderId === target.item.id ? { ...link, folderId: null } : link,
          ),
        };
      }

      if (target.kind === "note") {
        return {
          ...current,
          notes: current.notes.filter((note) => note.id !== target.item.id),
        };
      }

      return {
        ...current,
        noteFolders: current.noteFolders.filter((folder) => folder.id !== target.item.id),
        notes: current.notes.map((note) =>
          note.folderId === target.item.id ? { ...note, folderId: null } : note,
        ),
      };
    });

    closeSelection();
  }

  function moveTarget(folderId: string | null) {
    if (!target) {
      return;
    }

    const timestamp = nowIso();

    setData((current) => {
      if (target.kind === "link") {
        return {
          ...current,
          customLinks: current.customLinks.map((link) =>
            link.id === target.item.id
              ? {
                  ...link,
                  folderId,
                  updatedAt: timestamp,
                }
              : link,
          ),
        };
      }

      if (target.kind === "note") {
        return {
          ...current,
          notes: current.notes.map((note) =>
            note.id === target.item.id
              ? {
                  ...note,
                  folderId,
                  updatedAt: timestamp,
                }
              : note,
          ),
        };
      }

      return current;
    });

    closeSelection();
    closeModal();
  }

  function applyColor(color: string | null) {
    if (!target || target.kind !== "note") {
      return;
    }

    const timestamp = nowIso();

    setData((current) => ({
      ...current,
      notes: current.notes.map((note) =>
        note.id === target.item.id
          ? {
              ...note,
              color,
              updatedAt: timestamp,
            }
          : note,
      ),
    }));

    closeSelection();
    closeModal();
  }

  async function shareTarget() {
    if (!target) {
      return;
    }

    const text =
      target.kind === "link"
        ? `${target.item.title}\n${target.item.url}`
        : target.kind === "note"
          ? `${target.item.title}\n\n${target.item.content}`
          : target.kind === "linkFolder"
            ? target.item.title
            : target.item.name;

    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {}
      return;
    }

    alert(text);
  }

  function exportBackup() {
    const payload = JSON.stringify(createBackupFilePayload(data), null, 2);

    const blob = new Blob([payload], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = makeBackupFileName();
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function importPayload(payload: unknown) {
    try {
      const imported = normalizeBackupPayload(payload);

      setData((current) => mergeAppData(normalizeBackupPayload(current), imported));
      setBackupOpen(false);

      alert(
        [
          "Backup importado e salvo neste navegador.",
          "",
          `Pastas de Meus Links: ${imported.customFolders.length}`,
          `Links personalizados: ${imported.customLinks.length}`,
          `Pastas de Anotações: ${imported.noteFolders.length}`,
          `Notas comuns: ${imported.notes.length}`,
          `Notas estruturadas: ${imported.structuredNotes.length}`,
        ].join("\n")
      );
    } catch (error) {
      alert(error instanceof Error ? error.message : "Não foi possível importar o backup.");
    }
  }

  async function importBackupFile(file: File) {
    try {
      const raw = await file.text();
      importPayload(JSON.parse(raw));
    } catch {
      alert("Não foi possível ler este arquivo .lu. Verifique se ele é um backup válido do Links & Notas.");
    }
  }

  async function importByUrl() {
    const url = importUrl.trim();

    if (!url) {
      alert("Cole o link do backup.");
      return;
    }

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Falha ao baixar o backup.");
      }

      const payload = await response.json();

      importPayload(payload);
      setImportUrl("");
    } catch {
      alert("Não foi possível importar o backup pelo link informado.");
    }
  }

  function clearLocalData() {
    if (!window.confirm("Apagar todos os dados locais deste navegador?")) {
      return;
    }

    setData(EMPTY_DATA);
    window.localStorage.removeItem(STORAGE_KEY);
    closeSelection();
    setBackupOpen(false);
  }

  function renderHeader(title: string, subtitle?: string) {
    return (
      <header className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <BackButton onClick={handleBack} />

          <div className="min-w-0 flex-1">
            <h1 className="truncate text-[24px] font-black text-slate-950">{title}</h1>
            {subtitle && <p className="mt-0.5 truncate text-[13px] text-slate-500">{subtitle}</p>}
          </div>

          <button
            type="button"
            onClick={() => setBackupOpen(true)}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-700"
          >
            Backup
          </button>
        </div>
      </header>
    );
  }

  function renderTabHeader(title: string, subtitle?: string) {
    return (
      <header
        className="border-b px-4"
        style={{
          backgroundColor: COLORS.background,
          borderBottomColor: COLORS.border,
          paddingTop: 22,
          paddingBottom: 20,
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-center text-[28px] font-black text-slate-950">{title}</h1>
          <button
            type="button"
            onClick={() => setHelpOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#7C3AED] bg-white text-[18px] font-black text-[#7C3AED] shadow-sm active:opacity-75"
            aria-label="Ajuda"
            title="Ajuda"
          >
            ?
          </button>
        </div>
        {subtitle && (
          <p className="mt-2 text-center text-[15px] font-medium leading-6 text-slate-500">
            {subtitle}
          </p>
        )}
      </header>
    );
  }

  function renderFilter(label: string, active: boolean, onClick: () => void) {
    return (
      <button
        type="button"
        onClick={() => {
          closeSelection();
          onClick();
        }}
        className={`flex-1 rounded-xl border px-3 py-2.5 text-[13px] font-extrabold ${
          active
            ? "border-[#2563EB] bg-[#2563EB] text-white"
            : "border-slate-200 bg-white text-slate-900"
        }`}
      >
        {label}
      </button>
    );
  }

  function renderHome() {
    return (
      <>
        {renderTabHeader("Links & Notas", "Guarde e proteja seus links favoritos e organize-os por pastas")}

        <div className="flex-1 overflow-y-auto px-4 py-4 pb-44">
          {homeSearch.trim() ? (
            <div className="grid gap-4">
              {homeResults.length === 0 ? (
                <div className="items-center py-8 text-center text-slate-500">
                  Nenhum link ou nota encontrado
                </div>
              ) : (
                <>
                  {homeResults.some((item) => item.kind === "link") && (
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold uppercase text-slate-500">Meus Links</p>
                      {homeResults
                        .filter((item): item is { kind: "link"; item: CustomLink } => item.kind === "link")
                        .map((result) => (
                          <button
                            key={`home-link-${result.item.id}`}
                            type="button"
                            onClick={() => openTargetItem({ kind: "link", item: result.item })}
                            className="rounded-[18px] border-[1.5px] bg-white p-3 text-left active:opacity-75"
                            style={{ borderColor: COLORS.purple }}
                          >
                            <p className="truncate font-extrabold text-slate-950">🔗 {result.item.title}</p>
                            <p className="mt-1 truncate text-sm text-slate-500">{getHost(result.item.url)}</p>
                          </button>
                        ))}
                    </div>
                  )}

                  {homeResults.some((item) => item.kind === "structuredNote" || item.kind === "note") && (
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold uppercase text-slate-500">Anotações</p>

                      {homeResults
                        .filter((item): item is { kind: "structuredNote"; item: StructuredNote } => item.kind === "structuredNote")
                        .map((result) => (
                          <button
                            key={`home-structured-note-${result.item.id}`}
                            type="button"
                            onClick={() => openStructuredNote(result.item)}
                            className="rounded-[18px] border-[1.5px] p-3 text-left active:opacity-75"
                            style={{
                              backgroundColor: result.item.color ?? "#FFFFFF",
                              borderColor: COLORS.purple,
                            }}
                          >
                            <p className={`truncate font-extrabold ${result.item.color ? "text-white" : "text-slate-950"}`}>
                              📖 {result.item.title?.trim() || "Nota estruturada"}
                            </p>
                            <p className={`mt-1 truncate text-sm ${result.item.color ? "text-white/80" : "text-slate-500"}`}>
                              Nota estruturada
                            </p>
                          </button>
                        ))}

                      {homeResults
                        .filter((item): item is { kind: "note"; item: NoteItem } => item.kind === "note")
                        .map((result) => {
                          const note = result.item;
                          return (
                            <button
                              key={`home-note-${note.id}`}
                              type="button"
                              onClick={() => openTargetItem({ kind: "note", item: note })}
                              className="rounded-[18px] border-[1.5px] p-3 text-left active:opacity-75"
                              style={{
                                backgroundColor: note.color ?? "#FFFFFF",
                                borderColor: COLORS.purple,
                              }}
                            >
                              <p className={`truncate font-extrabold ${note.color ? "text-white" : "text-slate-950"}`}>
                                📝 {note.title?.trim() || "Sem título"}
                              </p>
                              {note.content?.trim() && (
                                <p className={`mt-1 truncate text-sm ${note.color ? "text-white/80" : "text-slate-500"}`}>
                                  {note.content}
                                </p>
                              )}
                            </button>
                          );
                        })}
                    </div>
                  )}

                  {homeResults.some((item) => item.kind === "linkFolder" || item.kind === "noteFolder") && (
                    <div className="grid gap-2">
                      <p className="text-xs font-semibold uppercase text-slate-500">Pastas</p>
                      {homeResults
                        .filter((item): item is { kind: "linkFolder"; item: LinkFolder } | { kind: "noteFolder"; item: NoteFolder } => item.kind === "linkFolder" || item.kind === "noteFolder")
                        .map((result) => {
                          const isLinkFolder = result.kind === "linkFolder";
                          const folder = result.item;
                          return (
                            <button
                              key={`home-folder-${result.kind}-${folder.id}`}
                              type="button"
                              onClick={() =>
                                isLinkFolder
                                  ? openTargetItem({ kind: "linkFolder", item: folder as LinkFolder })
                                  : openTargetItem({ kind: "noteFolder", item: folder as NoteFolder })
                              }
                              className="rounded-[18px] border-[1.5px] p-3 text-left active:opacity-75"
                              style={{ backgroundColor: COLORS.folderBackground, borderColor: COLORS.folderBorder }}
                            >
                              <p className="truncate font-extrabold text-slate-950">
                                {"icon" in folder ? folder.icon || "📁" : "📁"} {"title" in folder ? folder.title : folder.name}
                              </p>
                              <p className="mt-1 text-sm text-slate-500">{isLinkFolder ? "Pasta de Meus Links" : "Pasta de Anotações"}</p>
                            </button>
                          );
                        })}
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="grid gap-[14px]">
              <HomeCard
                icon="🔗"
                overline="Repositório"
                title="MEUS LINKS"
                description="Guarde e proteja seus links favoritos e organize-os por pastas"
                onClick={() => {
                  setArea("links");
                  closeSelection();
                }}
              />

              <HomeCard
                icon="📝"
                overline="Bloco de notas"
                title="Anotações"
                description="Crie notas, proteja-as com senha e organize-as por pastas"
                onClick={() => {
                  setArea("notes");
                  closeSelection();
                }}
              />
            </div>
          )}
        </div>

        <div
          className="absolute left-0 right-0 z-20 px-4 pb-4 pt-3"
          style={{
            bottom: 68,
            backgroundColor: COLORS.background,
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <SearchBox value={homeSearch} onChange={setHomeSearch} placeholder="Buscar links e notas..." />
        </div>
      </>
    );
  }

  function renderLinks() {
    const foldersToRender = visibleLinkFolders;
    const linksToRender = visibleLinks;

    return (
      <>
        {renderHeader(activeLinkFolder?.title ?? "MEUS LINKS", activeLinkFolder ? "Pasta de links" : "Pastas, links e tudo")}

        {!linkFolderId && (
          <div className="flex gap-2 bg-[#F8FAFC] px-4 pt-3">
            {renderFilter(`Pastas (${linkFolders.length})`, linkMode === "folders", () => setLinkMode("folders"))}
            {renderFilter(`Links (${rootLinks.length})`, linkMode === "items", () => setLinkMode("items"))}
            {renderFilter(`Tudo (${linkFolders.length + rootLinks.length})`, linkMode === "all", () => setLinkMode("all"))}
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-4 py-4 pb-36">
          {foldersToRender.length > 0 && (
            <>
              <p className="mb-2 text-sm font-black text-slate-500">Pastas</p>
              <div className="mb-4 grid w-full max-w-full gap-3">
                {foldersToRender.map((folder) => (
                  <FolderCard
                    key={folder.id}
                    icon={folder.icon}
                    title={folder.title}
                    subtitle={`${links.filter((link) => link.folderId === folder.id).length} link(s)`}
                    onOpen={() => openTargetItem({ kind: "linkFolder", item: folder })}
                    onOptions={() => setTarget({ kind: "linkFolder", item: folder })}
                  />
                ))}
              </div>
            </>
          )}

          {linksToRender.length > 0 && (
            <>
              {!linkFolderId && linkMode === "all" && (
                <p className="mb-2 text-sm font-black text-slate-500">Links</p>
              )}

              <div className="grid w-full max-w-full gap-3">
                {linksToRender.map((link) => (
                  <LinkCard
                    key={link.id}
                    link={link}
                    onOpen={() => openTargetItem({ kind: "link", item: link })}
                    onOptions={() => setTarget({ kind: "link", item: link })}
                  />
                ))}
              </div>
            </>
          )}

          {foldersToRender.length === 0 && linksToRender.length === 0 && (
            <EmptyState
              message={
                linkFolderId
                  ? "Nenhum link nesta pasta."
                  : linkMode === "items"
                    ? "Nenhum link fora de pasta."
                    : linkMode === "folders"
                      ? "Nenhuma pasta criada ainda."
                      : "Nenhuma pasta ou link fora de pasta."
              }
            />
          )}
        </div>

        <FabMenu area={area} folderOpen={Boolean(linkFolderId)} open={fabOpen} setOpen={setFabOpen} onCreateItem={() => startLink()} onCreateFolder={() => startLinkFolder()} />
      </>
    );
  }

  function renderNotes() {
    const foldersToRender = visibleNoteFolders;
    const notesToRender = visibleNotes;
    const structuredNotesToRender = visibleStructuredNotes;

    const noteItemsToRender: Array<
      | { kind: "structuredNote"; item: StructuredNote }
      | { kind: "note"; item: NoteItem }
    > = [
      ...structuredNotesToRender.map((item) => ({ kind: "structuredNote" as const, item })),
      ...notesToRender.map((item) => ({ kind: "note" as const, item })),
    ].sort((a, b) => {
      const aIsPreaching = a.kind === "structuredNote" && isPreachingStructuredNote(a.item);
      const bIsPreaching = b.kind === "structuredNote" && isPreachingStructuredNote(b.item);

      if (aIsPreaching !== bIsPreaching) {
        return aIsPreaching ? -1 : 1;
      }

      return getDateTime(b.item.updatedAt) - getDateTime(a.item.updatedAt);
    });

    return (
      <>
        {renderHeader(activeNoteFolder?.name ?? "Anotações", activeNoteFolder ? "Pasta de anotações" : "Notas, pastas e tudo")}

        {!noteFolderId && (
          <div className="flex gap-2 bg-[#F8FAFC] px-4 pt-3">
            {renderFilter(`Notas (${rootNotes.length + structuredNotes.length})`, noteMode === "items", () => setNoteMode("items"))}
            {renderFilter(`Pastas (${noteFolders.length})`, noteMode === "folders", () => setNoteMode("folders"))}
            {renderFilter(`Tudo (${noteFolders.length + rootNotes.length + structuredNotes.length})`, noteMode === "all", () => setNoteMode("all"))}
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-4 py-4 pb-36">
          {foldersToRender.length > 0 && (
            <>
              <p className="mb-2 text-sm font-black text-slate-500">Pastas</p>
              <div className="mb-4 grid w-full max-w-full gap-3">
                {foldersToRender.map((folder) => (
                  <FolderCard
                    key={folder.id}
                    icon={folder.icon}
                    title={folder.name}
                    subtitle={`${notes.filter((note) => note.folderId === folder.id).length} nota(s)`}
                    onOpen={() => openTargetItem({ kind: "noteFolder", item: folder })}
                    onOptions={() => setTarget({ kind: "noteFolder", item: folder })}
                  />
                ))}
              </div>
            </>
          )}

          {noteItemsToRender.length > 0 && (
            <>
              {!noteFolderId && noteMode === "all" && (
                <p className="mb-2 text-sm font-black text-slate-500">Notas</p>
              )}

              <div className="grid w-full max-w-full gap-3">
                {noteItemsToRender.map((entry) =>
                  entry.kind === "structuredNote" ? (
                    <StructuredNoteCard
                      key={`structured-${entry.item.id}`}
                      note={entry.item}
                      onOpen={() => openStructuredNote(entry.item)}
                    />
                  ) : (
                    <NoteCard
                      key={`note-${entry.item.id}`}
                      note={entry.item}
                      onOpen={() => openTargetItem({ kind: "note", item: entry.item })}
                      onOptions={() => setTarget({ kind: "note", item: entry.item })}
                    />
                  ),
                )}
              </div>
            </>
          )}

          {foldersToRender.length === 0 && noteItemsToRender.length === 0 && (
            <EmptyState
              message={
                noteFolderId
                  ? "Nenhuma nota nesta pasta."
                  : noteMode === "items"
                    ? "Nenhuma nota fora de pasta."
                    : noteMode === "folders"
                      ? "Nenhuma pasta criada ainda."
                      : "Nenhuma pasta ou nota fora de pasta."
              }
            />
          )}
        </div>

        <FabMenu area={area} folderOpen={Boolean(noteFolderId)} open={fabOpen} setOpen={setFabOpen} onCreateItem={() => startNote()} onCreateFolder={() => startNoteFolder()} />
      </>
    );
  }

  function openHistoryEntry(entry: HistoryEntry) {
    if (entry.kind === "link") {
      const link = data.customLinks.find((item) => item.id === entry.targetId);
      if (link) openTargetItem({ kind: "link", item: link });
      return;
    }

    if (entry.kind === "linkFolder") {
      const folder = data.customFolders.find((item) => item.id === entry.targetId);
      if (folder) openTargetItem({ kind: "linkFolder", item: folder });
      return;
    }

    if (entry.kind === "note") {
      const note = data.notes.find((item) => item.id === entry.targetId);
      if (note) openTargetItem({ kind: "note", item: note });
      return;
    }

    if (entry.kind === "structuredNote") {
      const note = data.structuredNotes.find((item) => item.id === entry.targetId);
      if (note) openStructuredNote(note);
      return;
    }

    const folder = data.noteFolders.find((item) => item.id === entry.targetId);
    if (folder) openTargetItem({ kind: "noteFolder", item: folder });
  }

  function formatHistoryDateWeb(value: string) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";

    return date.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }


  function renderStructuredNote() {
    if (!structuredPreview) {
      return renderNotes();
    }

    const sections = Array.isArray(structuredPreview.sections)
      ? structuredPreview.sections.map((section, index) => ({
          section: asRecord(section),
          index,
        }))
      : [];

    const activeSectionEntry = structuredSectionId
      ? sections.find(({ section }) => asString(section.id) === structuredSectionId) ?? null
      : null;

    if (activeSectionEntry) {
      return renderStructuredSection(activeSectionEntry.section, activeSectionEntry.index);
    }

    return (
      <>
        <header
          className="border-b px-5"
          style={{
            backgroundColor: COLORS.background,
            borderBottomColor: COLORS.border,
            paddingTop: 26,
            paddingBottom: 18,
          }}
        >
          <div className="flex min-w-0 items-center gap-3">
            <BackButton onClick={closeStructuredNote} />

            <div className="min-w-0 flex-1">
              <h1 className="truncate text-[28px] font-black leading-tight text-slate-950">
                {structuredPreview.title || "Nota estruturada"}
              </h1>
              <p className="mt-1 truncate text-[17px] text-slate-500">
                Nota estruturada • {sections.length} assunto(s)
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4 pb-8">
          <div className="grid gap-3">
            {sections.map(({ section, index }) => {
              const sectionId = asString(section.id, `structured-section-${index}`);
              const sectionTitle = asString(section.title, `Assunto ${index + 1}`);
              const items = Array.isArray(section.items) ? section.items : [];

              return (
                <button
                  key={sectionId}
                  type="button"
                  onClick={() => setStructuredSectionId(sectionId)}
                  className="rounded-[20px] border-[2px] px-4 py-3 text-left shadow-sm active:opacity-75"
                  style={{
                    backgroundColor: "#E0F2FE",
                    borderColor: COLORS.purple,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[18px] text-slate-950">▸</span>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[22px] font-black leading-tight text-slate-950">
                        {sectionTitle}
                      </p>
                      <p className="mt-0.5 text-[17px] text-slate-500">
                        {items.length} pergunta(s)
                      </p>
                    </div>

                    <span className="text-[30px] text-slate-500">→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  function renderStructuredSection(section: Record<string, unknown>, sectionIndex: number) {
    if (!structuredPreview) {
      return null;
    }

    const sectionTitle = asString(section.title, `Assunto ${sectionIndex + 1}`);
    const items = Array.isArray(section.items) ? section.items : [];

    return (
      <>
        <header
          className="border-b px-5"
          style={{
            backgroundColor: COLORS.background,
            borderBottomColor: COLORS.border,
            paddingTop: 26,
            paddingBottom: 18,
          }}
        >
          <div className="flex min-w-0 items-center gap-3">
            <BackButton
              onClick={() => {
                setStructuredSectionId(null);
                setSelectedVerse(null);
              }}
            />

            <div className="min-w-0 flex-1">
              <h1 className="truncate text-[28px] font-black leading-tight text-slate-950">
                {sectionTitle}
              </h1>
              <p className="mt-1 truncate text-[17px] text-slate-500">
                {structuredPreview.title || "Nota estruturada"} • {items.length} pergunta(s)
              </p>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4 pb-8">
          <div className="grid gap-3">
            {items.map((rawItem, itemIndex) => {
              const item = asRecord(rawItem);
              const references = Array.isArray(item.biblicalReferences)
                ? item.biblicalReferences
                : Array.isArray(item.references)
                  ? item.references
                  : [];

              return (
                <article
                  key={asString(item.id, `structured-item-${sectionIndex}-${itemIndex}`)}
                  className="rounded-[20px] border-[2px] bg-white p-3"
                  style={{ borderColor: COLORS.purple }}
                >
                  <p className="text-[21px] font-black leading-7 text-slate-950">
                    {asString(item.enunciation ?? item.question ?? item.title, `Pergunta ${itemIndex + 1}`)}
                  </p>

                  {references.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {references.map((rawReference, referenceIndex) => {
                        const reference = asRecord(rawReference);
                        const referenceText = asString(
                          reference.reference ?? reference.text ?? rawReference,
                          ""
                        );
                        const referenceKey = asString(
                          reference.referenceKey ?? reference.key,
                          referenceText ? normalizeReferenceKey(referenceText) : ""
                        );

                        if (!referenceText) {
                          return null;
                        }

                        return (
                          <button
                            key={`${referenceKey || referenceText}-${referenceIndex}`}
                            type="button"
                            onClick={() => openBiblicalText(referenceText, referenceKey)}
                            className="rounded-full border-[2px] px-3 py-2 text-[17px] font-black active:opacity-75"
                            style={{
                              backgroundColor: "#E0F2FE",
                              borderColor: COLORS.purple,
                              color: COLORS.foreground,
                            }}
                            title={`Abrir ${referenceText}`}
                          >
                            {referenceText}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {typeof item.learnMoreUrl === "string" && item.learnMoreUrl && (
                    <a
                      href={item.learnMoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-block rounded-full bg-emerald-50 px-4 py-2.5 text-sm font-extrabold text-emerald-700"
                    >
                      {asString(item.learnMoreLabel, "Saiba mais...")}
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  function getHistoryIconWeb(item: HistoryEntry) {
    if (item.kind === "link") return "🔗";
    if (item.kind === "note") return "📝";
    if (item.kind === "structuredNote") return "📖";
    if (item.kind === "linkFolder" || item.kind === "noteFolder") return "📂";
    return "📌";
  }

  function renderHistory() {
    return (
      <>
        <header
          className="border-b px-4 py-4"
          style={{ backgroundColor: COLORS.background, borderBottomColor: COLORS.border }}
        >
          <h1 className="text-[26px] font-black text-slate-950">Histórico</h1>
          <p className="mt-1 text-[15px] text-slate-500">Últimos itens abertos no aplicativo</p>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4 pb-32">
          {history.length === 0 ? (
            <div
              className="rounded-[14px] border p-[18px] text-center text-sm text-slate-500"
              style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}
            >
              Nenhum histórico salvo ainda.
            </div>
          ) : (
            <>
              <div className="grid gap-[10px]">
                {history.map((entry) => (
                  <button
                    key={`${entry.id}-${entry.createdAt}`}
                    type="button"
                    onClick={() => openHistoryEntry(entry)}
                    className="rounded-[18px] border-[1.5px] bg-white p-[14px] text-left active:opacity-75"
                    style={{ borderColor: COLORS.purple }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getHistoryIconWeb(entry)}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[16px] font-extrabold text-slate-950">{entry.title}</p>
                        <p className="mt-1 text-[12px] text-slate-500">{formatHistoryDateWeb(entry.createdAt)}</p>
                      </div>
                      <span className="text-[22px] text-slate-500">→</span>
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={requestClearHistory}
                className="mt-4 w-full rounded-[14px] border p-[14px] text-center font-black text-red-600 active:opacity-75"
                style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}
              >
                Limpar histórico
              </button>
            </>
          )}
        </div>
      </>
    );
  }

  function renderAbout() {
    return (
      <>
        <div className="flex-1 overflow-y-auto px-4 py-8 pb-32">
          <div className="flex flex-col items-center">
            <img
              src="/icones/links-uteis-sobre.png"
              alt="Links & Notas"
              className="h-24 w-24 rounded-[24px] border-2 object-cover shadow-lg"
              style={{ borderColor: COLORS.border }}
            />
          </div>

          <div className="mt-6 flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold text-slate-950">Links Úteis</h1>
            <p className="text-sm text-slate-500">Versão {APP_VERSION}</p>
          </div>

          <div className="mt-6 grid gap-6">
            <AboutCard title="Sobre o Aplicativo">
              Links Úteis é um aplicativo que organiza seus links favoritos em categorias temáticas, permitindo acesso rápido e fácil a ferramentas, utilitários e recursos educacionais.
            </AboutCard>

            <AboutCard title="Desenvolvedor">
              <>
                <span className="font-medium text-[#2563EB]">Pericles Silva Reis</span>
                <br />
                labdeapp@gmail.com
              </>
            </AboutCard>

            <div className="rounded-2xl bg-white p-6" style={{ backgroundColor: COLORS.surface }}>
              <p className="text-sm font-semibold text-slate-950">Contato</p>
              <div className="mt-4 grid gap-3">
                <a
                  href="mailto:labdeapp@gmail.com"
                  className="rounded-lg px-4 py-3 text-center font-medium text-white"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  📧 Enviar Email
                </a>
                <a
                  href="tel:+5577988122104"
                  className="rounded-lg px-4 py-3 text-center font-medium text-white"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  📱 Ligar (77) 98812-2104
                </a>

                <a
                  href="https://www.laboratoriodeia.dev/contato"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg px-4 py-3 text-center font-medium text-white"
                  style={{ backgroundColor: "#7C3AED" }}
                >
                  💬 Fale conosco
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6" style={{ backgroundColor: COLORS.surface }}>
              <p className="text-sm font-semibold text-slate-950">Redes Sociais</p>
              <div className="mt-4 grid gap-3">
                <a href="https://www.instagram.com/pericles.silvareis?igsh=MTJqdTk1ZWY1N2VtNA==" target="_blank" rel="noreferrer" className="rounded-lg px-4 py-3 text-center font-medium text-white" style={{ backgroundColor: "#E1306C" }}>
                  📸 Instagram
                </a>
                <a href="https://m.youtube.com/user/ericlesreis1?fbclid=PAb21jcARhqYlleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaftioPaheAUVIPSowlJqgZGPHd47vQc_3EdT5gIgnHIFq_J3GI-X4qsaCqUIg_aem_MW_Pp8SlK7gPukWC-LJYsw" target="_blank" rel="noreferrer" className="rounded-lg px-4 py-3 text-center font-medium text-white" style={{ backgroundColor: "#FF0000" }}>
                  ▶️ YouTube
                </a>
                <a href="https://www.facebook.com/share/1B31efoLWm/" target="_blank" rel="noreferrer" className="rounded-lg px-4 py-3 text-center font-medium text-white" style={{ backgroundColor: "#1877F2" }}>
                  f Facebook
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6" style={{ backgroundColor: COLORS.surface }}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-950">Histórico de Versões</p>
                <span className="rounded-full bg-[#2563EB] px-3 py-1 text-xs font-bold text-white">v{APP_VERSION}</span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-[#2563EB]">v{APP_VERSION} - Versão web</p>
                <p className="mt-1 whitespace-pre-line text-xs leading-5 text-slate-500">
                  • Layout adaptado para web<br />• Meus Links e Anotações<br />• Backup local e importação
                </p>
              </div>
            </div>

            <p className="pb-4 text-center text-xs text-slate-500">
              Desenvolvido com ❤️ para facilitar seu acesso aos melhores recursos
            </p>
          </div>
        </div>
      </>
    );
  }

  function renderSettings() {
    const summary = {
      customFolders: data.customFolders.length,
      customLinks: data.customLinks.length,
      noteFolders: data.noteFolders.length,
      notes: data.notes.length,
      structuredNotes: data.structuredNotes.length,
    };

    return (
      <>
        <div className="flex-1 overflow-y-auto px-4 py-4 pb-32">
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h1 className="text-[28px] font-black text-slate-950">Configurações</h1>
              <p className="text-[15px] leading-6 text-slate-500">Gerencie backup, restauração e dados do aplicativo.</p>
            </div>

            <div className="rounded-2xl border bg-white p-4" style={{ borderColor: COLORS.border }}>
              <div className="grid gap-1">
                <h2 className="text-xl font-black text-slate-950">💾 Backup</h2>
                <p className="text-sm leading-5 text-slate-500">
                  Exporte ou restaure um arquivo .lu com Meus Links, pastas, notas comuns e notas estruturadas.
                </p>
              </div>

              <div className="mt-4 grid gap-3">
                <button
                  type="button"
                  onClick={exportBackup}
                  className="rounded-xl p-[15px] text-center text-[16px] font-extrabold text-white active:opacity-80"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Exportar backup .lu
                </button>

                <label
                  className="block rounded-xl border p-[15px] text-center text-[16px] font-extrabold active:opacity-80"
                  style={{
                    backgroundColor: COLORS.background,
                    borderColor: COLORS.primary,
                    color: COLORS.primary,
                  }}
                >
                  Restaurar backup .lu
                  <input
                    type="file"
                    accept=".lu,.json,application/json"
                    className="hidden"
                    onChange={async (event) => {
                      const input = event.currentTarget;
                      const file = input.files?.[0];

                      if (file) {
                        await importBackupFile(file);
                      }

                      input.value = "";
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-4" style={{ borderColor: COLORS.border }}>
              <h2 className="text-[16px] font-extrabold text-slate-950">O que entra no backup?</h2>
              <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-500">
                • Pastas e links criados em Meus Links<br />
                • Pastas de Anotações<br />
                • Notas comuns<br />
                • Notas estruturadas, como Assuntos para Pregação<br />
                • Compatibilidade com backup antigo .lu do Links Úteis
              </p>
            </div>

            <BackupSummaryCardWeb title="Resumo atual" summary={summary} />
          </div>
        </div>
      </>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 p-2 md:p-3">
      <style jsx global>{`
        button,
        a,
        select,
        summary,
        [role="button"],
        input[type="button"],
        input[type="submit"],
        input[type="file"] {
          cursor: pointer;
        }

        input,
        textarea {
          cursor: text;
        }

        button:disabled {
          cursor: not-allowed;
        }
      `}</style>

      <div className="relative mx-auto flex h-[calc(100dvh-16px)] max-h-[760px] w-full max-w-[480px] flex-col overflow-hidden bg-[#F8FAFC] shadow-2xl md:h-[calc(100dvh-24px)] md:max-h-[760px] md:rounded-[32px] md:border md:border-slate-800">
        {area === "home" && renderHome()}
        {area === "links" && renderLinks()}
        {area === "notes" && (structuredPreview ? renderStructuredNote() : renderNotes())}
        {area === "history" && renderHistory()}
        {area === "about" && renderAbout()}
        {area === "settings" && renderSettings()}

        {!structuredPreview && <FooterNav active={area} onChange={openFooterArea} />}

        {target && !structuredPreview && (
          <ActionBar
            target={target}
            onEdit={editTarget}
            onMove={() => setModal("move")}
            onColor={() => setModal("color")}
            onShare={shareTarget}
            onDelete={deleteTarget}
            onCancel={closeSelection}
          />
        )}
      </div>

      {helpOpen && (
        <HelpIndexModal
          topics={HELP_TOPICS}
          onSelect={setActiveHelpTopicId}
          onClose={() => {
            setHelpOpen(false);
            setActiveHelpTopicId(null);
          }}
        />
      )}

      {activeHelpTopicId && (
        <HelpTopicModal
          topic={HELP_TOPICS.find((topic) => topic.id === activeHelpTopicId) ?? HELP_TOPICS[0]}
          onBack={() => setActiveHelpTopicId(null)}
          onClose={() => {
            setActiveHelpTopicId(null);
            setHelpOpen(false);
          }}
        />
      )}

      {confirmClearHistoryOpen && (
        <ConfirmModal
          title="Limpar histórico?"
          message="Esta ação vai apagar somente a lista de itens abertos recentemente."
          details="Seus links, pastas, notas e backups não serão apagados. Para confirmar, clique em “Limpar histórico”."
          confirmLabel="Limpar histórico"
          onConfirm={clearHistory}
          onClose={() => setConfirmClearHistoryOpen(false)}
          danger
        />
      )}

      {modal === "link" && (
        <FormModal title={editId ? "Editar link" : "Novo link"} onSave={saveLink} onClose={closeModal}>
          <TextField label="Nome do link" value={fieldOne} onChange={setFieldOne} autoFocus={!editId} />
          <TextField label="Endereço" value={fieldTwo} onChange={setFieldTwo} placeholder="https://exemplo.com" />
          <FolderSelect
            value={selectedFolderId}
            onChange={setSelectedFolderId}
            folders={linkFolders.map((folder) => ({ id: folder.id, label: `${folder.icon} ${folder.title}` }))}
          />
        </FormModal>
      )}

      {modal === "linkFolder" && (
        <FormModal title={editId ? "Editar pasta" : "Nova pasta"} onSave={saveLinkFolder} onClose={closeModal}>
          <TextField label="Nome da pasta" value={fieldOne} onChange={setFieldOne} autoFocus={!editId} />
          <IconPicker value={selectedIcon} onChange={setSelectedIcon} />
        </FormModal>
      )}

      {modal === "note" && (
        <FormModal title={editId ? "Editar nota" : "Nova nota"} onSave={saveNote} onClose={closeModal} tall>
          <TextField label="Título" value={fieldOne} onChange={setFieldOne} autoFocus={!editId} />
          <label className="flex min-h-0 flex-1 flex-col">
            <span className="mb-1 block shrink-0 text-sm font-bold text-slate-700">Anotação</span>
            <textarea
              value={fieldTwo}
              onChange={(event) => setFieldTwo(event.currentTarget.value)}
              onInput={(event) => setFieldTwo(event.currentTarget.value)}
              rows={16}
              className="min-h-[360px] w-full flex-1 resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
              style={{ color: "#0F172A", WebkitTextFillColor: "#0F172A", caretColor: "#2563EB", backgroundColor: "#FFFFFF" }}
            />
          </label>
          <FolderSelect
            value={selectedFolderId}
            onChange={setSelectedFolderId}
            folders={noteFolders.map((folder) => ({ id: folder.id, label: `${folder.icon} ${folder.name}` }))}
          />
        </FormModal>
      )}

      {modal === "noteFolder" && (
        <FormModal title={editId ? "Editar pasta" : "Nova pasta"} onSave={saveNoteFolder} onClose={closeModal}>
          <TextField label="Nome da pasta" value={fieldOne} onChange={setFieldOne} autoFocus={!editId} />
          <IconPicker value={selectedIcon} onChange={setSelectedIcon} />
        </FormModal>
      )}

      {selectedVerse && (
        <VerseModal verse={selectedVerse} onClose={() => setSelectedVerse(null)} />
      )}

      {modal === "move" && target && (
        <FormModal title="Mover" onClose={closeModal} hideSave>
          <div className="grid gap-2">
            <button
              type="button"
              onClick={() => moveTarget(null)}
              className="rounded-2xl border border-slate-300 px-4 py-3 text-left text-sm font-extrabold"
            >
              Sem pasta
            </button>

            {(target.kind === "link" ? linkFolders : noteFolders).map((folder: any) => (
              <button
                key={folder.id}
                type="button"
                onClick={() => moveTarget(folder.id)}
                className="rounded-2xl border border-slate-300 px-4 py-3 text-left text-sm font-extrabold"
              >
                {folder.icon} {folder.title || folder.name}
              </button>
            ))}
          </div>
        </FormModal>
      )}

      {modal === "color" && target?.kind === "note" && (
        <FormModal title="Mudar cor" onClose={closeModal} hideSave>
          <div className="grid max-h-[60vh] grid-cols-3 gap-2 overflow-y-auto">
            {NOTE_COLORS.map((color) => (
              <button
                key={color.label}
                type="button"
                onClick={() => applyColor(color.value)}
                className="min-h-[64px] rounded-[12px] border px-2 py-3 text-center text-sm font-bold active:opacity-75"
                style={{
                  backgroundColor: color.value ?? COLORS.surface,
                  borderColor: COLORS.border,
                  color: color.value ? "#FFFFFF" : COLORS.foreground,
                }}
              >
                {color.label}
              </button>
            ))}
          </div>
        </FormModal>
      )}

      {backupOpen && (
        <FormModal title="Backup" onClose={() => setBackupOpen(false)} hideSave>
          <p className="text-sm leading-6 text-slate-600">
            Exporte, importe por arquivo ou leia um backup salvo em nuvem por link direto.
          </p>

          <button
            type="button"
            onClick={exportBackup}
            className="rounded-2xl bg-[#2563EB] px-4 py-3 text-sm font-extrabold text-white"
          >
            Exportar backup
          </button>

          <label className="block rounded-2xl border border-slate-300 px-4 py-3 text-center text-sm font-extrabold">
            Importar arquivo .lu
            <input
              type="file"
              accept=".lu,.json,application/json"
              className="hidden"
              onChange={async (event) => {
                const input = event.currentTarget;
                const file = input.files?.[0];

                if (file) {
                  await importBackupFile(file);
                }

                input.value = "";
              }}
            />
          </label>

          <input
            value={importUrl}
            onChange={(event) => setImportUrl(event.currentTarget.value)}
            onInput={(event) => setImportUrl(event.currentTarget.value)}
            placeholder="Cole o link do backup"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
            style={{ color: "#0F172A", WebkitTextFillColor: "#0F172A", caretColor: "#2563EB", backgroundColor: "#FFFFFF" }}
          />

          <button
            type="button"
            onClick={importByUrl}
            className="rounded-2xl border border-[#94A3B8] bg-[#E5E7EB] px-4 py-3 text-sm font-extrabold text-slate-900"
          >
            Importar por link
          </button>

          <button
            type="button"
            onClick={clearLocalData}
            className="rounded-2xl bg-red-600 px-4 py-3 text-sm font-extrabold text-white"
          >
            Limpar dados locais
          </button>
        </FormModal>
      )}
    </main>
  );
}


function FooterNav({
  active,
  onChange,
}: {
  active: Area;
  onChange: (area: Area) => void;
}) {
  const items: { area: Area; label: string; icon: string }[] = [
    { area: "home", label: "Home", icon: "⌂" },
    { area: "history", label: "Histórico", icon: "‹/›" },
    { area: "about", label: "Sobre", icon: "➤" },
    { area: "settings", label: "Configurações", icon: "⚙️" },
  ];

  return (
    <nav
      className="absolute inset-x-0 bottom-0 z-10 border-t px-2"
      style={{
        backgroundColor: COLORS.background,
        borderTopColor: COLORS.border,
        paddingTop: 8,
        paddingBottom: 12,
        height: 68,
      }}
    >
      <div className="grid grid-cols-4 gap-1">
        {items.map((item) => {
          const selected = active === item.area;

          return (
            <button
              key={item.area}
              type="button"
              onClick={() => onChange(item.area)}
              className="rounded-xl px-1 py-1 text-center"
              style={{ color: selected ? COLORS.primary : COLORS.muted }}
            >
              <span className="block text-[22px] leading-none">{item.icon}</span>
              <span className="mt-1 block truncate text-[11px] font-bold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function AboutCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-6" style={{ backgroundColor: COLORS.surface }}>
      <p className="text-sm font-semibold text-slate-950">{title}</p>
      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-500">{children}</p>
    </div>
  );
}

function BackupSummaryCardWeb({
  title,
  summary,
}: {
  title: string;
  summary: {
    customFolders: number;
    customLinks: number;
    noteFolders: number;
    notes: number;
    structuredNotes: number;
  };
}) {
  return (
    <div className="rounded-[14px] border bg-white p-4" style={{ borderColor: COLORS.border }}>
      <h2 className="text-[16px] font-extrabold text-slate-950">{title}</h2>
      <div className="mt-3 grid gap-2">
        <SummaryRowWeb label="Pastas de Meus Links" value={summary.customFolders} />
        <SummaryRowWeb label="Links personalizados" value={summary.customLinks} />
        <SummaryRowWeb label="Pastas de Anotações" value={summary.noteFolders} />
        <SummaryRowWeb label="Notas comuns" value={summary.notes} />
        <SummaryRowWeb label="Notas estruturadas" value={summary.structuredNotes} />
      </div>
    </div>
  );
}

function SummaryRowWeb({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-bold text-slate-950">{value}</span>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[18px] border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-[16px] font-black text-slate-950">{title}</h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">{children}</p>
    </div>
  );
}

function HomeCard({
  icon,
  overline,
  title,
  description,
  onClick,
}: {
  icon: string;
  overline: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-[220px] overflow-hidden rounded-[20px] text-left shadow-lg active:opacity-90"
      style={{
        background: CARD_GRADIENT,
        boxShadow: "0 5px 10px rgba(29, 78, 216, 0.16)",
      }}
    >
      <div
        className="flex h-full flex-col justify-between rounded-[20px] p-[18px]"
        style={{ border: "1px solid #93C5FD" }}
      >
        <div>
          <span className="mb-[14px] block text-[40px] leading-none">{icon}</span>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="mt-3 text-base leading-6 text-white/85">{description}</p>
        </div>
        <div className="text-right text-3xl text-white">→</div>
      </div>
    </button>
  );
}

function SearchBox({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="flex items-center gap-2 rounded-[18px] border border-slate-200 bg-white px-3 py-2.5 shadow-sm focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-blue-100">
      <span className="text-lg text-slate-400">🔎</span>
      <input
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        onInput={(event) => onChange(event.currentTarget.value)}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-[15px] font-semibold text-slate-900 outline-none placeholder:text-slate-400"
        style={{ color: "#0F172A", WebkitTextFillColor: "#0F172A", caretColor: "#2563EB" }}
      />
      {value && (
        <button type="button" onClick={() => onChange("")} className="rounded-full bg-slate-100 px-2 py-1 text-xs font-black text-slate-500">
          Limpar
        </button>
      )}
    </label>
  );
}

function FolderCard({
  icon,
  title,
  subtitle,
  onOpen,
  onOptions,
}: {
  icon: string;
  title: string;
  subtitle: string;
  onOpen: () => void;
  onOptions: () => void;
}) {
  return (
    <div
      className="rounded-[18px] border-[1.5px] p-3.5 text-left shadow-sm"
      style={{ backgroundColor: "#E0F2FE", borderColor: "#38BDF8" }}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpen}
          className="flex min-w-0 flex-1 items-center gap-3 text-left active:opacity-70"
        >
          <span className="text-3xl">{icon || "📁"}</span>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[16px] font-extrabold text-slate-950">{title}</p>
            <p className="mt-1 text-[13px] text-slate-500">{subtitle}</p>
          </div>
        </button>

        <button
          type="button"
          onClick={onOptions}
          className="rounded-full px-3 py-2 text-xl text-slate-500 active:opacity-70"
          aria-label="Opções"
          title="Opções"
        >
          ⋯
        </button>
      </div>
    </div>
  );
}

function LinkCard({
  link,
  onOpen,
  onOptions,
}: {
  link: CustomLink;
  onOpen: () => void;
  onOptions: () => void;
}) {
  return (
    <div
      className="rounded-[18px] border-[1.5px] p-3.5 text-left shadow-sm"
      style={{ backgroundColor: "#FFFFFF", borderColor: "#7C3AED" }}
    >
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onOpen}
          className="flex min-w-0 flex-1 items-center justify-between gap-3 text-left active:opacity-70"
        >
          <div className="min-w-0 flex-1">
            <p className="truncate text-[16px] font-bold text-slate-950">🔗 {link.title}</p>
            <p className="mt-1 truncate text-[13px] text-slate-500">{getHost(link.url)}</p>
          </div>

          <span className="text-2xl text-slate-400">→</span>
        </button>

        <button
          type="button"
          onClick={onOptions}
          className="rounded-full px-3 py-2 text-xl text-slate-500 active:opacity-70"
          aria-label="Opções"
          title="Opções"
        >
          ⋯
        </button>
      </div>
    </div>
  );
}

function NoteCard({
  note,
  onOpen,
  onOptions,
}: {
  note: NoteItem;
  onOpen: () => void;
  onOptions: () => void;
}) {
  const colored = Boolean(note.color);
  const title = note.title?.trim() || "Sem título";
  const content = note.content?.trim() || "";
  const noteTextColor = colored ? "#FFFFFF" : COLORS.foreground;
  const noteMutedColor = colored ? "rgba(255,255,255,0.78)" : COLORS.muted;

  return (
    <div
      className="w-full max-w-full overflow-hidden rounded-[18px] border-[1.5px] p-3 text-left shadow-sm"
      style={{
        backgroundColor: note.color ?? "#FFFFFF",
        borderColor: COLORS.purple,
      }}
    >
      <div className="flex w-full max-w-full min-w-0 items-center gap-3 overflow-hidden">
        <button
          type="button"
          onClick={onOpen}
          className="flex w-full min-w-0 flex-1 items-center gap-3 overflow-hidden text-left active:opacity-70"
        >
          <span className="shrink-0 text-2xl">{note.isProtected ? "🔒" : "📝"}</span>

          <div className="min-w-0 flex-1 overflow-hidden">
            <p
              className="block max-w-full truncate text-[18px] font-bold"
              style={{
                color: noteTextColor,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {title}
            </p>

            {content && (
              <p
                className="mt-1 block max-w-full truncate text-[14px]"
                style={{
                  color: noteMutedColor,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {note.isProtected ? "Nota protegida" : content}
              </p>
            )}

            {note.reminderAt && (
              <p
                className="mt-1 block max-w-full truncate text-[12px]"
                style={{
                  color: noteMutedColor,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                🔔 lembrete
              </p>
            )}
          </div>

          <span
            className="shrink-0 whitespace-nowrap text-[13px]"
            style={{ color: noteMutedColor }}
          >
            {formatDate(note.updatedAt)}
          </span>
        </button>

        <button
          type="button"
          onClick={onOptions}
          className="shrink-0 rounded-full px-2 py-2 text-xl active:opacity-70"
          style={{ color: noteMutedColor }}
          aria-label="Opções"
          title="Opções"
        >
          ⋯
        </button>
      </div>
    </div>
  );
}

function StructuredNoteCard({
  note,
  onOpen,
}: {
  note: StructuredNote;
  onOpen: () => void;
}) {
  const sections = Array.isArray(note.sections) ? note.sections : [];
  const questionCount = sections.reduce<number>((total, rawSection) => {
    const section = asRecord(rawSection);
    const items = Array.isArray(section.items) ? section.items : [];

    return total + items.length;
  }, 0);
  const colored = Boolean(note.color);
  const noteTextColor = colored ? "#FFFFFF" : COLORS.foreground;
  const noteMutedColor = colored ? "rgba(255,255,255,0.78)" : COLORS.muted;

  return (
    <div
      className="w-full max-w-full overflow-hidden rounded-[18px] border-[1.5px] p-4 text-left shadow-sm"
      style={{
        backgroundColor: note.color ?? "#FFFFFF",
        borderColor: COLORS.purple,
      }}
    >
      <button
        type="button"
        onClick={onOpen}
        className="flex w-full min-w-0 items-center gap-3 overflow-hidden text-left active:opacity-70"
      >
        <span className="shrink-0 text-[26px]">📖</span>

        <div className="min-w-0 flex-1 overflow-hidden">
          <p
            className="block max-w-full truncate text-[18px] font-extrabold"
            style={{
              color: noteTextColor,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {note.title || "Nota estruturada"}
          </p>

          <p
            className="mt-1 block max-w-full truncate text-[14px]"
            style={{
              color: noteMutedColor,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Nota estruturada • {sections.length} assunto(s) • {questionCount} pergunta(s)
          </p>

          <p
            className="mt-2 block max-w-full truncate text-[12px]"
            style={{
              color: noteMutedColor,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {formatDate(note.updatedAt)}
          </p>
        </div>

        <span
          className="shrink-0 text-[22px]"
          style={{ color: noteMutedColor }}
        >
          →
        </span>
      </button>
    </div>
  );
}

function VerseModal({
  verse,
  onClose,
}: {
  verse: SelectedVerse;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-[440px] overflow-hidden rounded-[22px] bg-white shadow-2xl">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="text-[26px] font-black leading-tight text-slate-950">
            {verse.reference}
          </h2>
        </div>

        <div className="max-h-[52vh] overflow-y-auto px-5 py-5">
          <p className="whitespace-pre-line text-[23px] leading-[1.45] text-slate-950">
            {verse.fullText}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full bg-[#E11D48] px-4 py-4 text-center text-[18px] font-black text-white active:opacity-80"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

function FabMenu({
  area,
  folderOpen,
  open,
  setOpen,
  onCreateItem,
  onCreateFolder,
}: {
  area: Area;
  folderOpen: boolean;
  open: boolean;
  setOpen: (value: boolean | ((previous: boolean) => boolean)) => void;
  onCreateItem: () => void;
  onCreateFolder: () => void;
}) {
  if (area === "home") {
    return null;
  }

  const itemLabel = area === "links" ? "+ Link" : "+ Nota";
  const itemIcon = area === "links" ? "🔗" : "📝";
  const itemColor = area === "links" ? "#2563EB" : "#7C3AED";

  return (
    <div className="absolute bottom-[86px] right-5 z-20 flex flex-col items-end gap-3">
      {open && (
        <div className="min-w-[172px] overflow-hidden rounded-2xl border border-blue-100 bg-white p-2 shadow-xl">
          <button
            type="button"
            onClick={onCreateItem}
            className="mb-2 flex w-full cursor-pointer items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-extrabold text-white shadow-sm active:opacity-80"
            style={{ backgroundColor: itemColor }}
          >
            <span className="text-lg">{itemIcon}</span>
            <span>{itemLabel}</span>
          </button>

          {!folderOpen && (
            <button
              type="button"
              onClick={onCreateFolder}
              className="flex w-full cursor-pointer items-center gap-2 rounded-xl border border-[#38BDF8] bg-[#E0F2FE] px-4 py-3 text-left text-sm font-extrabold text-slate-900 active:opacity-80"
            >
              <span className="text-lg">📁</span>
              <span>+ Pasta</span>
            </button>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#2563EB] text-3xl font-light text-white shadow-xl active:opacity-75"
        aria-label={open ? "Fechar criação" : "Criar"}
        title={open ? "Fechar" : "Criar"}
      >
        {open ? "×" : "+"}
      </button>
    </div>
  );
}

function ActionBar({
  target,
  onEdit,
  onMove,
  onColor,
  onShare,
  onDelete,
  onCancel,
}: {
  target: Target;
  onEdit: () => void;
  onMove: () => void;
  onColor: () => void;
  onShare: () => void;
  onDelete: () => void;
  onCancel: () => void;
}) {
  const isFolder = target.kind === "linkFolder" || target.kind === "noteFolder";
  const canMove = target.kind === "link" || target.kind === "note";

  return (
    <div className="absolute inset-x-0 bottom-0 z-30 border-t border-[#94A3B8] bg-[#E5E7EB] px-2 py-2 shadow-2xl">
      <div className="grid grid-cols-5 gap-1">
        <ActionIconButton icon="✎" label="Editar" onClick={onEdit} />
        {canMove && <ActionIconButton icon="⇄" label="Mover" onClick={onMove} />}
        {target.kind === "note" && <ActionIconButton icon="🎨" label="Cor" onClick={onColor} />}
        {!isFolder && <ActionIconButton icon="↗" label="Enviar" onClick={onShare} />}
        <ActionIconButton icon="🗑" label="Excluir" onClick={onDelete} danger />
        <ActionIconButton icon="✕" label="Cancelar" onClick={onCancel} />
      </div>
    </div>
  );
}

function ActionIconButton({
  icon,
  label,
  onClick,
  danger,
}: {
  icon: string;
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`min-w-0 rounded-xl border px-1 py-2 text-center active:opacity-75 ${
        danger
          ? "border-red-300 bg-red-600 text-white"
          : "border-[#94A3B8] bg-white text-slate-900"
      }`}
    >
      <span className="block text-[19px] leading-none">{icon}</span>
      <span className="mt-1 block truncate text-[10px] font-extrabold">{label}</span>
    </button>
  );
}

function HelpIndexModal({
  topics,
  onSelect,
  onClose,
}: {
  topics: HelpTopic[];
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 px-4">
      <div className="flex h-[calc(100dvh-24px)] max-h-[760px] w-full max-w-[440px] flex-col rounded-3xl bg-white p-4 shadow-2xl">
        <div className="flex shrink-0 items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black text-slate-950">Ajuda do Links & Notas</h2>
            <p className="mt-1 text-sm leading-5 text-slate-500">
              Escolha um tópico para ver instruções detalhadas.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl font-black text-slate-700 active:opacity-75"
            aria-label="Fechar ajuda"
            title="Fechar"
          >
            ×
          </button>
        </div>

        <div className="mt-4 grid min-h-0 flex-1 gap-3 overflow-y-auto pr-1">
          {topics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              onClick={() => onSelect(topic.id)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-left active:opacity-75"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{topic.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-black text-slate-950">{topic.title}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-500">{topic.summary}</p>
                </div>
                <span className="text-xl text-slate-400">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function HelpTopicModal({
  topic,
  onBack,
  onClose,
}: {
  topic: HelpTopic;
  onBack: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 px-4">
      <div className="flex h-[calc(100dvh-24px)] max-h-[760px] w-full max-w-[440px] flex-col rounded-3xl bg-white p-4 shadow-2xl">
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-black text-slate-700 active:opacity-75"
          >
            ← Tópicos
          </button>

          <button
            type="button"
            onClick={onClose}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl font-black text-slate-700 active:opacity-75"
            aria-label="Fechar ajuda"
            title="Fechar"
          >
            ×
          </button>
        </div>

        <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1">
          <div className="rounded-2xl border border-[#7C3AED] bg-[#F5F3FF] p-4">
            <p className="text-3xl">{topic.icon}</p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">
              {topic.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{topic.summary}</p>
          </div>

          <div className="mt-4 grid gap-3">
            {topic.details.map((detail, index) => (
              <div key={`${topic.id}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-3">
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  <span className="font-black text-[#7C3AED]">{index + 1}.</span> {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BackButton({
  onClick,
  label = "Voltar",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-[18px] border-[2px] bg-white px-3 py-1.5 text-[14px] font-black active:opacity-75"
      style={{
        borderColor: "#6366F1",
        color: "#166534",
        maxWidth: "fit-content",
      }}
      aria-label={label}
      title={label}
    >
      <span className="text-[18px] leading-none">←</span>
      <span>{label}</span>
    </button>
  );
}

function EmptyState({ message = "Nenhum item encontrado." }: { message?: string }) {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
      {message}
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  autoFocus,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <label>
      <span className="mb-1 block text-sm font-bold text-slate-700">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        onInput={(event) => onChange(event.currentTarget.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        data-auto-focus-field={autoFocus ? "true" : undefined}
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
        style={{ color: "#0F172A", WebkitTextFillColor: "#0F172A", caretColor: "#2563EB", backgroundColor: "#FFFFFF" }}
      />
    </label>
  );
}

function FolderSelect({
  value,
  onChange,
  folders,
}: {
  value: string | null;
  onChange: (value: string | null) => void;
  folders: { id: string; label: string }[];
}) {
  return (
    <label>
      <span className="mb-1 block text-sm font-bold text-slate-700">Pasta</span>
      <select
        value={value || ""}
        onChange={(event) => onChange(event.currentTarget.value || null)}
        className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-base outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100"
        style={{
          color: "#0F172A",
          WebkitTextFillColor: "#0F172A",
          backgroundColor: "#FFFFFF",
          caretColor: "#2563EB",
        }}
      >
        <option value="" style={{ color: "#0F172A", backgroundColor: "#FFFFFF" }}>
          Sem pasta
        </option>
        {folders.map((folder) => (
          <option
            key={folder.id}
            value={folder.id}
            style={{ color: "#0F172A", backgroundColor: "#FFFFFF" }}
          >
            {folder.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function IconPicker({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div>
      <span className="mb-2 block text-sm font-bold text-slate-700">Ícone</span>
      <div className="flex flex-wrap gap-2">
        {ICONS.map((icon) => (
          <button
            key={icon}
            type="button"
            onClick={() => onChange(icon)}
            className={`rounded-xl border px-3 py-2 text-xl ${
              value === icon ? "border-[#2563EB] bg-blue-50" : "border-slate-300"
            }`}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}

function ConfirmModal({
  title,
  message,
  details,
  confirmLabel,
  onConfirm,
  onClose,
  danger,
}: {
  title: string;
  message: string;
  details?: string;
  confirmLabel: string;
  onConfirm: () => void;
  onClose: () => void;
  danger?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4">
      <div className="w-full max-w-[440px] rounded-3xl bg-white p-4 shadow-2xl">
        <h2 className="text-xl font-black text-slate-950">{title}</h2>

        <p className="mt-3 text-[15px] font-semibold leading-6 text-slate-700">
          {message}
        </p>

        {details && (
          <p className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
            {details}
          </p>
        )}

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-2xl border border-[#94A3B8] bg-[#E5E7EB] px-4 py-3 text-sm font-extrabold text-slate-900"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className={`flex-1 rounded-2xl px-4 py-3 text-sm font-extrabold text-white ${
              danger ? "bg-red-600" : "bg-[#2563EB]"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function FormModal({
  title,
  children,
  onSave,
  onClose,
  hideSave,
  tall,
}: {
  title: string;
  children: ReactNode;
  onSave?: () => void;
  onClose: () => void;
  hideSave?: boolean;
  tall?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4">
      <div
        className={`w-full max-w-[440px] rounded-3xl bg-white p-4 shadow-2xl ${
          tall ? "flex h-[calc(100dvh-16px)] max-h-[760px] flex-col" : ""
        }`}
      >
        <h2 className="shrink-0 text-xl font-black text-slate-950">{title}</h2>

        <div className={tall ? "mt-4 flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto" : "mt-4 grid gap-3"}>
          {children}
        </div>

        <div className="mt-4 flex shrink-0 gap-2">
          <button type="button" onClick={onClose} className="flex-1 rounded-2xl border border-[#94A3B8] bg-[#E5E7EB] px-4 py-3 text-sm font-extrabold text-slate-900">
            Cancelar
          </button>

          {!hideSave && (
            <button type="button" onClick={onSave} className="flex-1 rounded-2xl bg-[#2563EB] px-4 py-3 text-sm font-extrabold text-white">
              Salvar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
