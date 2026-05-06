import { Link } from "react-router-dom";
import PageShell from "./PageShell";
import Magnetic from "./Magnetic";

export interface NicheCopy {
  /** "Aanpak" / "Installatiebedrijven" / etc. — shown in breadcrumb. */
  niche: string;
  pageTitle: string;
  /** Headline split: regular text + the gold italic accent + remainder. */
  hero: {
    line1: string;
    accent: string;
    line2?: string;
    lede: string;
  };
  pain: {
    title: string;
    body: string;
    items: { title: string; body: string }[];
  };
  flow: {
    title: string;
    body: string;
    steps: { title: string; body: string }[];
  };
  capabilities: {
    title: string;
    body: string;
    items: { title: string; body: string }[];
  };
  /** GoHighLevel form embed URL. */
  formUrl: string;
}

/**
 * Niche landing page template (Installatiebedrijven, Woningverbetering, …).
 * One layout, content swapped via the `copy` prop.
 */
export default function NicheLanding({ copy }: { copy: NicheCopy }) {
  const scroll = () =>
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <PageShell title={copy.pageTitle}>
      {/* HERO */}
      <section className="va-aa-hero">
        <div className="va-aa-hero-grid" aria-hidden />
        <div className="va-wrap" style={{ position: "relative" }}>
          <div className="va-aa-breadcrumb">
            <span className="va-hero-dot" />
            <Link to="/">Voxa Auris</Link>
            <span className="va-aa-sep">/</span>
            <span className="va-aa-current">{copy.niche}</span>
          </div>
          <h1 className="va-h1" style={{ maxWidth: "20ch", marginBottom: 36 }}>
            {copy.hero.line1} <em className="va-italic-gold">{copy.hero.accent}</em>
            {copy.hero.line2 ? (
              <>
                <br />
                {copy.hero.line2}
              </>
            ) : null}
          </h1>
          <p className="va-body" style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 580 }}>
            {copy.hero.lede}
          </p>

          <div style={{ marginTop: 40 }}>
            <Magnetic>
              <button onClick={scroll} className="va-btn va-btn-primary">
                Vraag gratis demo aan <span className="va-arr">↓</span>
              </button>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="va-section va-section-darker">
        <div className="va-wrap">
          <div className="va-niche-head va-reveal">
            <span className="va-mono">Het probleem</span>
            <h2 className="va-h2" style={{ marginTop: 24 }}>
              {copy.pain.title}
            </h2>
            <p style={{ marginTop: 24, color: "var(--cream)", maxWidth: "60ch" }}>
              {copy.pain.body}
            </p>
          </div>

          <div className="va-niche-grid">
            {copy.pain.items.map((item, i) => (
              <div key={item.title} className="va-niche-card va-reveal" data-stagger={(i % 3) + 1}>
                <span className="va-mono">0{i + 1} · {String(copy.pain.items.length).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="va-section">
        <div className="va-wrap">
          <div className="va-niche-head va-reveal">
            <span className="va-mono">Hoe het werkt</span>
            <h2 className="va-h2" style={{ marginTop: 24 }}>
              {copy.flow.title}
            </h2>
            <p style={{ marginTop: 24, color: "var(--cream)", maxWidth: "60ch" }}>
              {copy.flow.body}
            </p>
          </div>

          {copy.flow.steps.map((s, i) => (
            <div
              key={s.title}
              className={`va-step ${i % 2 === 1 ? "va-step-right" : ""}`}
            >
              <div className="va-step-num va-reveal">0{i + 1}</div>
              <div className="va-step-content va-reveal" data-stagger={2}>
                <span className="va-mono">Stap 0{i + 1}</span>
                <h3 className="va-h3">{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="va-section va-section-darker">
        <div className="va-wrap">
          <div className="va-niche-head va-reveal">
            <span className="va-mono">Wat de agent doet</span>
            <h2 className="va-h2" style={{ marginTop: 24 }}>
              {copy.capabilities.title}
            </h2>
            <p style={{ marginTop: 24, color: "var(--cream)", maxWidth: "60ch" }}>
              {copy.capabilities.body}
            </p>
          </div>
          <div className="va-niche-cap-grid">
            {copy.capabilities.items.map((c, i) => (
              <div
                key={c.title}
                className="va-niche-cap-item va-reveal"
                data-stagger={(i % 3) + 1}
              >
                <span className="va-mono">{String(i + 1).padStart(2, "0")}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="demo-form" className="va-aa-scan">
        <div className="va-wrap">
          <div className="va-aa-scan-card va-reveal" style={{ textAlign: "left" }}>
            <span className="va-mono">Ervaar het zelf</span>
            <h2 className="va-h2" style={{ marginTop: 18, maxWidth: "22ch", textAlign: "left" }}>
              <em className="va-italic-gold">Laat je terugbellen.</em>
              <br />
              Vrijblijvend, binnen 2 minuten.
            </h2>
            <p style={{ textAlign: "left", maxWidth: "52ch", marginBottom: 32 }}>
              Vul je gegevens in en onze AI belt jou terug met een live demo. Geen
              verkoopgesprek — gewoon het echte product aan de lijn.
            </p>
            <div className="va-niche-form">
              <iframe
                src={copy.formUrl}
                className="va-niche-iframe"
                title="Demo aanvragen"
              />
            </div>
            <p style={{ marginTop: 16, fontSize: 13, color: "var(--cream-mute)", textAlign: "center" }}>
              Na invullen ontvang je automatisch een telefoontje van onze AI voice agent.
            </p>
          </div>
        </div>
      </section>

      <style>{nicheStyles}</style>
    </PageShell>
  );
}

const nicheStyles = `
  .va-niche-head { max-width: 720px; margin-bottom: 80px; }
  .va-niche-head .va-mono { display: inline-block; }

  .va-niche-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid rgba(244,221,141,0.30);
  }
  @media (max-width: 880px) { .va-niche-grid { grid-template-columns: 1fr; } }
  .va-niche-card {
    padding: 48px 40px 56px;
    border-bottom: 1px solid rgba(244,221,141,0.30);
    border-right: 1px solid rgba(244,221,141,0.30);
  }
  .va-niche-grid .va-niche-card:nth-child(3n) { border-right: none; }
  @media (max-width: 880px) {
    .va-niche-card { border-right: none !important; padding: 40px 0 48px; }
  }
  .va-niche-card .va-mono {
    color: var(--cream-mute);
    margin-bottom: 28px;
    display: block;
  }
  .va-niche-card h3 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(26px, 2.8vw, 32px);
    line-height: 1.1;
    letter-spacing: -0.005em;
    color: var(--cream);
    margin-bottom: 18px;
    max-width: 22ch;
  }
  .va-niche-card p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: var(--cream);
    max-width: 38ch;
  }

  .va-niche-cap-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(244,221,141,0.25);
    border: 1px solid rgba(244,221,141,0.25);
  }
  @media (max-width: 720px) { .va-niche-cap-grid { grid-template-columns: 1fr; } }
  .va-niche-cap-item {
    background: var(--ink);
    padding: 36px 32px;
  }
  .va-niche-cap-item .va-mono {
    color: var(--gold-deep);
    display: block;
    margin-bottom: 22px;
  }
  .va-niche-cap-item h3 {
    font-family: var(--body);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    color: var(--cream);
    letter-spacing: -0.005em;
    margin-bottom: 12px;
  }
  .va-niche-cap-item p {
    margin: 0;
    font-size: 14px;
    line-height: 1.55;
    color: var(--cream-mute);
  }

  .va-niche-form {
    background: var(--ink);
    border: 1px solid rgba(244,221,141,0.18);
    border-radius: 12px;
    padding: 8px;
  }
  .va-niche-iframe {
    width: 100%;
    height: 640px;
    border: 0;
    background: transparent;
    border-radius: 8px;
  }

  .va-step {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 80px;
    align-items: center;
    padding: 80px 0;
    border-top: 1px solid;
    border-image: linear-gradient(to right, rgba(244,221,141,0.30), rgba(244,221,141,0.05)) 1;
  }
  .va-step-right .va-step-num { order: 2; text-align: right; }
  .va-step-right .va-step-content { order: 1; }
  @media (max-width: 880px) {
    .va-step, .va-step-right { grid-template-columns: 1fr; gap: 24px; }
    .va-step-right .va-step-num { order: 0; text-align: left; }
    .va-step-right .va-step-content { order: 1; }
  }
  .va-step-num {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(120px, 18vw, 240px);
    line-height: 0.85;
    color: var(--gold);
    letter-spacing: -0.02em;
    user-select: none;
  }
  .va-step-content .va-mono { margin-bottom: 18px; display: inline-block; }
  .va-step-content h3 { margin-bottom: 16px; }
  .va-step-content p { margin: 0; max-width: 44ch; color: var(--cream); }

  .va-hero-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px rgba(244,221,141,0.12);
    display: inline-block;
  }
`;
