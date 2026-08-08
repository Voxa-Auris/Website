import PageShell from "@/components/site/PageShell";
import DemoBelkaart from "@/components/site/DemoBelkaart";

/**
 * Gratis demo. Overgenomen van de scroll-site (voxa-auris-film/gratis-demo),
 * hier als React-pagina binnen de gewone site-chrome.
 */

const praktijk = [
  {
    v: "Kan ik mijn huidige nummer behouden?",
    a: "Ja. Voxa Auris vervangt je nummer niet. De agent vangt alleen op wat jij wilt: gemiste oproepen, oproepen buiten werktijd, of alles. Dat bepaal jij.",
  },
  {
    v: "Wat gebeurt er als Olivia iets niet weet?",
    a: "Dan gokt ze niet. De agent blijft binnen vooraf afgesproken grenzen, doet geen toezeggingen die niet mogen, en draagt het gesprek over aan een medewerker of legt een terugbelnotitie voor je klaar.",
  },
  {
    v: "Hoe voorkomen jullie verkeerde afspraken?",
    a: "Vóór livegang testen we jouw echte scenario's, uitzonderingen en veelgestelde vragen. De agent krijgt alleen toegang tot de agenda's en tijdsloten die jij aanwijst.",
  },
  {
    v: "Kan ik teruglezen wat er is besproken?",
    a: "Elk gesprek. Transcript, samenvatting, contactgegevens en afspraakstatus staan direct in je CRM. Je hoeft niemand na te bellen om te weten wat er is gezegd.",
  },
  {
    v: "Wat gebeurt er bij een storing?",
    a: "Daarvoor spreken we vooraf een fallback af: doorschakelen naar jou, voicemail of een terugbelmelding. Er valt nooit stilletjes een gat.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: praktijk.map((p) => ({
    "@type": "Question",
    name: p.v,
    acceptedAnswer: { "@type": "Answer", text: p.a },
  })),
};

export default function GratisDemoPage() {
  return (
    <PageShell title="Gratis demo">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="va-gd">
        {/* HERO + BELKAART */}
        <section className="va-gd-hero">
          <span className="va-gd-eyebrow">gratis demo</span>
          <h1 className="va-gd-h1">
            Word één minuut je <em>eigen klant.</em>
          </h1>
          <p className="va-gd-lead">
            Vul je bedrijfsgegevens in. Binnen 60 seconden belt Olivia je op, alsof ze al voor
            jouw bedrijf werkt. Jij hoort precies wat jouw klanten straks horen.
          </p>

          <div className="va-gd-kaart">
            <DemoBelkaart knop="bel mij binnen 60 seconden" />
          </div>

          <ul className="va-gd-punten" aria-label="waarom Voxa Auris">
            <li>
              <strong>Maatwerk, geen template.</strong> Elke voice agent wordt gebouwd voor jouw
              bedrijf, jouw gesprekken, jouw klanten.
            </li>
            <li>
              <strong>Binnen 2 weken live.</strong> Van eerste gesprek tot werkende AI in je
              business.
            </li>
            <li>
              <strong>Nederlandse support.</strong> Direct contact met de mensen die het systeem
              hebben gebouwd.
            </li>
          </ul>
        </section>

        {/* POSITIONERING */}
        <section className="va-gd-belofte">
          <p>
            Voxa Auris vervangt je telefoon niet. Het vangt op wat je <em>anders zou missen</em>:
            buiten werktijd, of terwijl jij op een klus staat.
          </p>
        </section>

        {/* DEMO-FILM */}
        <section className="va-gd-reel" id="demo-film">
          <span className="va-gd-eyebrow">de demo-film</span>
          <h2 className="va-gd-h2">Zo ziet een gemiste klant eruit.</h2>
          <figure className="va-gd-speler">
            <video
              src="/videos/demo-film.mp4"
              poster="/videos/demo-film-poster.jpg"
              controls
              playsInline
              preload="metadata"
              aria-label="Demo-film: een bedrijf mist een oproep en verliest de klant; een bedrijf met Voxa Auris laat de AI opnemen en wint de klus"
            />
            <figcaption>akte 1: zonder Voxa Auris · akte 2: met Voxa Auris</figcaption>
          </figure>
        </section>

        {/* UITLEG-FILM */}
        <section className="va-gd-reel" id="zo-werkt-het">
          <span className="va-gd-eyebrow">zo werkt het</span>
          <h2 className="va-gd-h2">
            Van lead tot <em>afspraak.</em>
          </h2>
          <figure className="va-gd-speler is-breed">
            <video
              src="/videos/uitleg-film.mp4"
              poster="/videos/uitleg-film-poster.jpg"
              controls
              playsInline
              preload="metadata"
              aria-label="Uitleg-animatie: een lead reist door het Voxa Auris systeem, van binnenkomst via kwalificatie en agenda-check naar afspraak, logging en herinneringen"
            />
            <figcaption>het systeem, halte voor halte: van binnenkomst tot herinnering</figcaption>
          </figure>
        </section>

        {/* IN DE PRAKTIJK */}
        <section className="va-gd-praktijk" id="in-de-praktijk">
          <span className="va-gd-eyebrow">in de praktijk</span>
          <h2 className="va-gd-h2">
            Hoe werkt dit <em>in jouw bedrijf?</em>
          </h2>
          <div className="va-gd-praktijk-lijst">
            {praktijk.map((p) => (
              <div key={p.v} className="va-gd-praktijk-item">
                <h3>{p.v}</h3>
                <p>{p.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AFSLUITING */}
        <section className="va-gd-slot" id="contact">
          <h2 className="va-gd-h2">
            Liever meteen een <em>echt gesprek?</em>
          </h2>
          <a className="va-gd-tel" href="tel:+31762057076">
            bel Olivia: +31 76 205 7076
          </a>
          <div className="va-gd-slot-links">
            <a href="mailto:info@voxa-auris.com">info@voxa-auris.com</a>
            <a href="https://wa.me/31625251913" target="_blank" rel="noopener noreferrer">
              WhatsApp: +31 6 25 25 19 13
            </a>
          </div>
        </section>
      </div>

      <style>{gdStyles}</style>
    </PageShell>
  );
}

const gdStyles = `
  .va-gd {
    max-width: 1060px;
    margin: 0 auto;
    padding: clamp(120px, 16vh, 180px) 24px clamp(60px, 8vh, 100px);
    display: flex;
    flex-direction: column;
    gap: clamp(72px, 10vh, 120px);
  }
  .va-gd section[id] { scroll-margin-top: 96px; }

  .va-gd-eyebrow {
    display: block;
    font-family: var(--mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--gold);
    margin-bottom: 20px;
  }
  .va-gd-h1, .va-gd-h2 {
    font-family: var(--display);
    font-weight: 400;
    color: var(--cream);
    line-height: 1.12;
    letter-spacing: -0.005em;
    margin: 0;
  }
  .va-gd-h1 { font-size: clamp(34px, 5vw, 58px); max-width: 640px; }
  .va-gd-h2 { font-size: clamp(26px, 3.6vw, 42px); }
  .va-gd-h1 em, .va-gd-h2 em, .va-gd-belofte em {
    font-style: italic;
    color: var(--gold);
  }
  .va-gd-lead {
    margin: 24px 0 0;
    max-width: 540px;
    font-size: 15px;
    line-height: 1.7;
    color: var(--cream-mute);
  }

  .va-gd-kaart { margin-top: 44px; max-width: 560px; }

  .va-gd-punten {
    margin: 40px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 460px;
  }
  .va-gd-punten li {
    position: relative;
    padding-left: 22px;
    font-size: 13.5px;
    line-height: 1.65;
    color: var(--cream-mute);
  }
  .va-gd-punten li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5em;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #FFF3C4, var(--gold) 55%, var(--gold-deep));
    box-shadow: 0 0 8px rgba(244,221,141,0.4);
  }
  .va-gd-punten strong { color: var(--cream); font-weight: 500; }

  /* hero op desktop: verhaal links, kaart rechts */
  @media (min-width: 940px) {
    .va-gd-hero {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 460px;
      grid-template-rows: auto auto auto 1fr;
      grid-template-areas:
        "eyebrow card"
        "title   card"
        "lead    card"
        "punten  card";
      column-gap: clamp(56px, 7vw, 96px);
      align-items: start;
    }
    .va-gd-hero .va-gd-eyebrow { grid-area: eyebrow; }
    .va-gd-hero .va-gd-h1 { grid-area: title; }
    .va-gd-hero .va-gd-lead { grid-area: lead; }
    .va-gd-hero .va-gd-kaart { grid-area: card; margin-top: 0; max-width: none; }
    .va-gd-hero .va-gd-punten { grid-area: punten; align-self: end; }
  }

  .va-gd-belofte {
    border-left: 1px solid rgba(244,221,141,0.25);
    padding-left: 24px;
  }
  .va-gd-belofte p {
    margin: 0;
    font-family: var(--display);
    font-size: clamp(22px, 2.8vw, 32px);
    line-height: 1.35;
    color: var(--cream);
    max-width: 640px;
  }

  .va-gd-reel .va-gd-h2 { margin-bottom: 36px; }
  .va-gd-speler { margin: 0; }
  .va-gd-speler video {
    display: block;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 9 / 16;
    object-fit: cover;
    background: var(--ink-soft);
    border: 1px solid var(--ink-line);
    border-radius: 16px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.55);
  }
  .va-gd-speler.is-breed video {
    max-width: 860px;
    aspect-ratio: 16 / 9;
  }
  .va-gd-speler figcaption {
    margin-top: 12px;
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--cream-mute);
    line-height: 1.6;
  }

  .va-gd-praktijk .va-gd-h2 { margin-bottom: 44px; }
  .va-gd-praktijk-lijst {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 36px 64px;
  }
  .va-gd-praktijk-item {
    border-top: 1px solid var(--ink-line);
    padding-top: 22px;
  }
  .va-gd-praktijk-item h3 {
    font-family: var(--display);
    font-weight: 400;
    font-size: 21px;
    line-height: 1.25;
    color: var(--cream);
    margin: 0 0 10px;
  }
  .va-gd-praktijk-item p {
    margin: 0;
    font-size: 13.5px;
    line-height: 1.65;
    color: var(--cream-mute);
    max-width: 480px;
  }

  .va-gd-slot {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
  }
  .va-gd-tel {
    font-family: var(--mono);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gold);
    border: 1px solid var(--ink-line);
    border-radius: 999px;
    padding: 14px 26px;
    transition: border-color 300ms ease, transform 300ms var(--ease), box-shadow 300ms ease;
  }
  .va-gd-tel:hover {
    border-color: var(--gold);
    transform: translateY(-2px);
    box-shadow: 0 6px 30px rgba(244,221,141,0.12);
  }
  .va-gd-slot-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 24px;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.06em;
  }
  .va-gd-slot-links a { color: var(--cream-mute); transition: color 300ms ease; }
  .va-gd-slot-links a:hover { color: var(--gold); }

  @media (max-width: 760px) {
    .va-gd { padding-top: 110px; }
    .va-gd-praktijk-lijst { grid-template-columns: 1fr; gap: 26px; }
  }
`;
