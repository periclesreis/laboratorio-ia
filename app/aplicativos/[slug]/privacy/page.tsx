export default function PrivacyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div style={{ padding: 40 }}>
      <h1>Política de Privacidade</h1>

      <p style={{ marginTop: 20 }}>
        Aplicativo: <strong>{slug}</strong>
      </p>

      <p style={{ marginTop: 20 }}>
        Este aplicativo não coleta dados pessoais.
      </p>

      <a href={`/aplicativos/${slug}`} style={{ display: "block", marginTop: 20 }}>
        ← Voltar para o aplicativo
      </a>
    </div>
  );
}