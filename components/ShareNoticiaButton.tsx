'use client';

type ShareNoticiaButtonProps = {
  title: string;
  description?: string | null;
  path: string;
};

export default function ShareNoticiaButton({
  title,
  description,
  path,
}: ShareNoticiaButtonProps) {
  async function compartilharNoticia() {
    const origem =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://www.laboratoriodeia.dev";

    const url = `${origem}${path}`;
    const texto =
      description && description.trim().length > 0
        ? description.trim()
        : "Leia esta notícia no Laboratório de IA.";

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: texto,
          url,
        });

        return;
      }

      await navigator.clipboard.writeText(url);
      alert("Link da notícia copiado!");
    } catch (error) {
      console.error("Erro ao compartilhar notícia:", error);

      try {
        await navigator.clipboard.writeText(url);
        alert("Link da notícia copiado!");
      } catch {
        alert("Não foi possível compartilhar ou copiar o link.");
      }
    }
  }

  return (
    <button
      type="button"
      onClick={compartilharNoticia}
      className="inline-flex items-center justify-center rounded-lg border-2 border-purple-500 bg-purple-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/40"
    >
      🔗 Compartilhar notícia
    </button>
  );
}
