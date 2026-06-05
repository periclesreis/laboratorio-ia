export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div style={{ padding: 40 }}>
      <h1>Aplicativo: {slug}</h1>

      <a
        href={`/aplicativos/${slug}/privacy`}
        style={{
          display: "inline-block",
          marginTop: 20,
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Ver política de privacidade
      </a>

      <br />

      <a href="/aplicativos" style={{ display: "block", marginTop: 20 }}>
        ← Voltar
      </a>
    </div>
  );
}