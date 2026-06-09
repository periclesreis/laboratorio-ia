export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "64px",
        zIndex: 2147483647,
        background: "rgba(2, 6, 23, 0.98)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        pointerEvents: "auto",
      }}
    >
      <a
        href="/"
        style={{
          color: "#a855f7",
          fontWeight: 700,
          fontSize: "20px",
          textDecoration: "none",
          pointerEvents: "auto",
          cursor: "pointer",
        }}
      >
        Início
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          pointerEvents: "auto",
        }}
      >
        <a
          href="/contato"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "36px",
            padding: "0 16px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.10)",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            pointerEvents: "auto",
            cursor: "pointer",
          }}
        >
          Contato
        </a>

        <a
          href="/admin/login"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            height: "36px",
            padding: "0 16px",
            borderRadius: "8px",
            background: "rgba(147, 51, 234, 0.25)",
            border: "1px solid rgba(168, 85, 247, 0.7)",
            color: "#c084fc",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            pointerEvents: "auto",
            cursor: "pointer",
          }}
        >
          <span>🔐</span>
          <span>Área Logada</span>
        </a>
      </div>
    </header>
  );
}