import { useEffect } from "react";

/**
 * Redireciona para o site estático do Consórcio AYLLU
 */
export default function Home() {
  useEffect(() => {
    window.location.replace("/index-ayllu.html");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1a2e18",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#f5efe2",
        fontFamily: "Georgia, serif",
        fontSize: "1.2rem",
      }}
    >
      Carregando AYLLU...
    </div>
  );
}
