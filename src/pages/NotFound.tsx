import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageShell from "@/components/site/PageShell";
import Magnetic from "@/components/site/Magnetic";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route niet gevonden:", location.pathname);
  }, [location.pathname]);

  return (
    <PageShell title="404">
      <section className="va-aa-hero" style={{ paddingBottom: 200 }}>
        <div className="va-aa-hero-grid" aria-hidden />
        <div
          className="va-wrap"
          style={{
            position: "relative",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
          }}
        >
          <span className="va-mono">404 · Verdwenen lead</span>
          <h1 className="va-h1" style={{ maxWidth: "16ch" }}>
            Deze pagina is, net als een trage lead,{" "}
            <em className="va-italic-gold">naar de concurrent gegaan.</em>
          </h1>
          <p className="va-body" style={{ fontSize: 19 }}>
            Geen paniek. Wij reageren wél binnen 60 seconden.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Magnetic>
              <Link to="/" className="va-btn va-btn-primary">
                Terug naar home <span className="va-arr">→</span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/aanpak" className="va-btn va-btn-ghost">
                Lees over de aanpak
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
