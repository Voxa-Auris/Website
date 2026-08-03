import { Link } from "react-router-dom";
import PageShell from "@/components/site/PageShell";
import Magnetic from "@/components/site/Magnetic";

const values = [
  {
    cap: "Missie",
    title: "Meer tijd voor de verkoop.",
    body: "Een verkoop wordt gedaan bij de klant. Wij zorgen dat aanvragen direct worden opgevolgd, gekwalificeerd en ingepland. Jij hoeft alleen nog te verkopen.",
  },
  {
    cap: "Visie",
    title: "Geen klant die nog hoeft te wachten.",
    body: "Een wereld waarin elke ondernemer 24/7 bereikbaar is en geen enkele klant meer hoeft te wachten op antwoord.",
  },
  {
    cap: "Achtergrond",
    title: "Bouwen, niet praten.",
    body: "Ik kom uit de sales, niet uit de techniek. Ik weet hoe het voelt als een lead afkoelt terwijl jij bij een andere klant staat. Die ervaring zit in elk systeem dat ik bouw: eerst begrijpen hoe het verkoopgesprek loopt, dan pas de techniek eromheen.",
  },
  {
    cap: "Resultaat",
    title: "Snellere reactie. Meer omzet.",
    body: "Snellere responstijden, hogere conversies en tevreden klanten. Daar staan wij voor.",
  },
];

export default function Over() {
  return (
    <PageShell title="Over ons">
      {/* HERO + VERHAAL */}
      <section className="va-aa-hero">
        <div className="va-aa-hero-grid" aria-hidden />
        <div className="va-wrap" style={{ position: "relative" }}>
          <div className="va-aa-breadcrumb">
            <span className="va-hero-dot" />
            <Link to="/">Voxa Auris</Link>
            <span className="va-aa-sep">/</span>
            <span className="va-aa-current">Over ons</span>
          </div>
          <h1 className="va-h1" style={{ maxWidth: "16ch", marginBottom: 36 }}>
            Waarom ik <em className="va-italic-gold">dit bouw</em>.
          </h1>
          <p
            className="va-body"
            style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 580 }}
          >
            Een eerlijk verhaal over het probleem dat me niet meer losliet, en waarom Voxa Auris
            er nu staat.
          </p>
        </div>
      </section>

      {/* VERHAAL */}
      <section className="va-section va-section-darker">
        <div className="va-wrap va-over-story">
          <p className="va-reveal">
            Ik had een autodetailing bedrijf. In twee weken kreeg ik 70 leads binnen via
            advertenties. Ik was trots.
          </p>
          <p className="va-reveal" data-stagger={2}>
            Maar aan het einde van de maand had ik nul nieuwe klanten.
          </p>
          <p className="va-reveal" data-stagger={3}>
            Niet omdat het werk niet goed was. Niet omdat de prijs niet klopte. Maar omdat ik die
            leads te laat opvolgde. Soms uren later, soms dagen. En in die tijd gebeurt er van
            alles: de klant heeft al iemand anders gevonden, is het vergeten, of heeft geen
            interesse meer.
          </p>
          <p className="va-reveal" data-stagger={4}>
            Dat frustreerde me genoeg om te zoeken naar een oplossing. Ik vond geen systeem dat
            dit probleem echt oploste voor gewone MKB-bedrijven.
          </p>
          <p className="va-over-pull va-reveal" data-stagger={5}>
            Dus <em className="va-italic-gold">bouwde ik het zelf.</em>
          </p>
          <p className="va-reveal" data-stagger={6}>
            Voxa Auris zorgt dat leads binnen 60 seconden worden opgebeld, gekwalificeerd en
            ingepland. Zodat jij je kunt focussen op het werk zelf, niet op het najagen van mensen
            die al verder zijn gegaan.
          </p>
          <p className="va-over-sign va-mono va-reveal" data-stagger={6}>
            Mick Stadhouders, oprichter
          </p>
        </div>
      </section>

      {/* WAARDEN */}
      <section className="va-section">
        <div className="va-wrap">
          <div className="va-over-values-head va-reveal">
            <span className="va-mono">Waar we voor staan</span>
            <h2 className="va-h2">
              Vier overtuigingen die <em className="va-italic-gold">elke beslissing</em> sturen.
            </h2>
          </div>
          <div className="va-over-values">
            {values.map((v, i) => (
              <div key={v.cap} className="va-over-value va-reveal" data-stagger={(i % 3) + 2}>
                <span className="va-mono">{v.cap}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="va-section va-section-darker" style={{ textAlign: "center" }}>
        <div className="va-wrap">
          <h2 className="va-h2 va-reveal" style={{ maxWidth: "20ch", margin: "0 auto 28px" }}>
            Ook benieuwd waar leads bij <em className="va-italic-gold">jou</em> weglekken?
          </h2>
          <div className="va-reveal" data-stagger={2}>
            <Magnetic>
              <Link to="/aanpak" className="va-btn va-btn-primary">
                Lees over de aanpak <span className="va-arr">→</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      <style>{overStyles}</style>
    </PageShell>
  );
}

const overStyles = `
  .va-over-story {
    max-width: 720px;
    margin: 0 auto;
  }
  .va-over-story p {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(22px, 2.4vw, 28px);
    line-height: 1.4;
    color: var(--cream);
    letter-spacing: -0.005em;
    margin: 0 0 32px;
    max-width: 38ch;
  }
  .va-over-pull {
    font-size: clamp(28px, 3.4vw, 40px) !important;
    line-height: 1.15 !important;
    margin: 48px 0 !important;
    max-width: none !important;
  }
  .va-over-sign {
    font-family: var(--mono) !important;
    font-size: 12px !important;
    line-height: 1.5 !important;
    color: var(--cream-mute) !important;
    margin-top: 32px !important;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    max-width: none !important;
  }

  .va-over-values-head { margin-bottom: 80px; max-width: 720px; }
  .va-over-values-head .va-mono { display: inline-block; margin-bottom: 24px; }

  .va-over-values {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border-top: 1px solid rgba(244,221,141,0.30);
  }
  @media (max-width: 720px) {
    .va-over-values { grid-template-columns: 1fr; }
  }
  .va-over-value {
    padding: 48px 40px 56px;
    border-bottom: 1px solid rgba(244,221,141,0.30);
    border-right: 1px solid rgba(244,221,141,0.30);
  }
  .va-over-values .va-over-value:nth-child(2n) { border-right: none; }
  @media (max-width: 720px) {
    .va-over-value { border-right: none !important; padding: 40px 0 48px; }
  }
  .va-over-value .va-mono {
    display: block;
    margin-bottom: 22px;
    color: var(--gold-deep);
  }
  .va-over-value h3 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(28px, 3vw, 36px);
    line-height: 1.05;
    letter-spacing: -0.005em;
    color: var(--cream);
    margin: 0 0 18px;
    max-width: 22ch;
  }
  .va-over-value p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: var(--cream);
    max-width: 38ch;
  }

  .va-hero-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px rgba(244,221,141,0.12);
    display: inline-block;
  }
`;
