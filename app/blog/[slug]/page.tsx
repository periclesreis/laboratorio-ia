const posts: Record<string, { titulo: string; conteudo: string }> = {
  "introducao-ia": {
    titulo: "Introdução à Inteligência Artificial",
    conteudo: "Conteúdo sobre IA básica.",
  },
  "como-programar-react": {
    titulo: "Como começar no React",
    conteudo: "Conteúdo sobre React.",
  },
  "ia-no-dia-a-dia": {
    titulo: "IA no dia a dia",
    conteudo: "Conteúdo sobre aplicações reais de IA.",
  },
};

export default async function Page({ params }: any) {
  const { slug } = await params;

  console.log("SLUG RECEBIDO:", slug);

  const post = posts[slug];

  if (!post) {
    return (
      <div style={{ padding: 40 }}>
        <h1>POST NÃO ENCONTRADO</h1>
        <p>Slug recebido: {slug}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>{post.titulo}</h1>
      <p style={{ marginTop: 20 }}>{post.conteudo}</p>
    </div>
  );
}