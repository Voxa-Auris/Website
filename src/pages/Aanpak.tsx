import { Link } from "react-router-dom";
import PageShell from "@/components/site/PageShell";
import Magnetic from "@/components/site/Magnetic";

export default function Aanpak() {
  return (
    <PageShell title="Aanpak">
      {/* HERO */}
      <section className="va-aa-hero">
        <div className="va-aa-hero-grid" aria-hidden />
        <div className="va-wrap va-aa-hero-inner">
          <div className="va-aa-breadcrumb">
            <span className="va-hero-dot" />
            <Link to="/">Voxa Auris</Link>
            <span className="va-aa-sep">/</span>
            <span className="va-aa-current">Aanpak</span>
          </div>
          <h1 className="va-h1 va-aa-hero-h1">
            Eén systeem. <em className="va-italic-gold">Geen lead</em>
            <br />
            glipt nog weg.
          </h1>
          <p className="va-aa-hero-lede">
            We verkopen geen losse tools meer. We bouwen één samenhangend systeem dat elke
            lead opvangt vanaf het moment dat ze binnenkomt tot ze klant worden, of vriendelijk
            afgesloten zijn.
          </p>

          <div className="va-aa-hero-meta">
            <div>
              <span className="va-mono">Vier kanalen</span>
              <p>Voice, chat, WhatsApp, SMS: gekozen op wat past, niet wat we hebben.</p>
            </div>
            <div>
              <span className="va-mono">Eén traject</span>
              <p>Van eerste contact tot opvolging na offerte. Niets valt tussen wal en schip.</p>
            </div>
            <div>
              <span className="va-mono">Begint met luisteren</span>
              <p>We kijken eerst waar het weglekt, daarna bepalen we wat past bij jouw branche.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section className="va-section va-section-darker va-aa-thesis">
        <div className="va-wrap va-aa-thesis-inner">
          <span className="va-mono va-reveal">De gedachte</span>
          <div>
            <h2 className="va-h2 va-reveal">
              Geen menu van diensten. <em className="va-italic-gold">Eén systeem</em> dat van begin
              tot eind doorloopt.
            </h2>
            <p className="va-reveal" data-stagger={2}>
              De meeste AI-bureaus bieden je een lijst aan: een chatbot hier, een belrobot daar,
              een WhatsApp-flow erbij. Vier losse stukjes, vier rekeningen, en vier plekken waar
              leads alsnog tussen kunnen vallen.
            </p>
            <p className="va-reveal" data-stagger={3}>
              Wij bouwen één systeem. Voice, chat, WhatsApp en SMS zijn de kanalen waarmee dat
              systeem praat, afhankelijk van waar de klant op dat moment is en hoe die het liefst
              contact heeft. Achter de schermen is het één doorlopend proces.
            </p>
            <p className="va-aa-thesis-big va-reveal" data-stagger={4}>
              Een lead die binnenkomt om 23:14, krijgt om 23:15 een gesprek.{" "}
              <em>Niet pas maandag.</em>
            </p>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="va-section">
        <div className="va-wrap">
          <div className="va-aa-channels-head va-reveal">
            <span className="va-mono">De vier kanalen</span>
            <h2 className="va-h2">
              Hetzelfde systeem. <em className="va-italic-gold">Vier monden</em> en vier oren.
            </h2>
          </div>

          <div className="va-aa-channels-grid">
            <Channel
              num="01 / 04"
              title="Voice agent"
              role="Belt en neemt op"
              p="Olivia of Alexander belt nieuwe leads binnen 60 seconden, neemt inkomende telefoontjes aan buiten kantooruren, en voert volledige kwalificatiegesprekken in vloeiend Nederlands."
              when="Logisch wanneer je doelgroep liever belt of als snelheid het verschil maakt, dakkapel, kozijnen, solar, installatie."
            />
            <Channel
              num="02 / 04"
              title="Website chatbot"
              role="Vangt op de site"
              p="Beantwoordt eerste vragen op je website, kwalificeert bezoekers die anders zouden wegklikken, en geeft het gesprek naadloos door aan een voice agent of mens."
              when="Logisch wanneer je veel websiteverkeer hebt of complexe producten waar bezoekers eerst willen oriënteren."
              stagger={2}
            />
            <Channel
              num="03 / 04"
              title="WhatsApp"
              role="Houdt het warm"
              p="Beantwoordt vragen, stuurt bevestigingen, herinnert aan afspraken, en houdt het gesprek levend in het kanaal waar Nederlanders het liefst zitten."
              when="Logisch wanneer klanten meerdere keren contact hebben voordat ze beslissen, of als de leadtijd lang is."
            />
            <Channel
              num="04 / 04"
              title="SMS-opvolging"
              role="Sluit de cirkel"
              p="Stuurt geautomatiseerde maar persoonlijke opvolgberichten ná de offerte, ná de afspraak, of als een lead stilvalt. Brengt 'verloren' leads terug."
              when="Logisch wanneer je merkt dat offertes worden uitgebracht maar daarna stil blijven. Dat is de fase waar de meeste deals weglekken."
              stagger={2}
            />
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="va-section va-section-darker">
        <div className="va-wrap">
          <div className="va-aa-journey-head va-reveal">
            <span className="va-mono">Het volledige traject</span>
            <h2 className="va-h2">
              Van eerste contact tot na de offerte:{" "}
              <em className="va-italic-gold">geen gat in de keten.</em>
            </h2>
          </div>

          <div className="va-aa-journey">
            <Stage
              num="01"
              when="T = 0 minuten"
              title="Lead komt binnen"
              p="Via formulier, telefoon, WhatsApp of een advertentie-klik. Het maakt niet uit waar, het systeem registreert de lead direct en bepaalt welke route past bij dat type contact."
              chips={["Voice", "Chat", "WhatsApp"]}
            />
            <Stage
              num="02"
              when="Binnen 60 seconden"
              title="Eerste contact"
              p="De voice agent belt automatisch terug, of de chatbot reageert direct in het kanaal waar de lead zat. De vraag wordt opgepikt voordat de lead er op een ander tabblad alweer klaar mee is."
              chips={["Voice", "Chat"]}
            />
            <Stage
              num="03"
              when="In het gesprek"
              title="Kwalificatie"
              p="Het systeem stelt de juiste vragen: budget, timing, locatie, wat de klant écht zoekt. Niet als enquête maar als gesprek. Geen afhakers door starre formulieren."
              chips={["Voice", "Chat"]}
            />
            <Stage
              num="04"
              when="Direct erna"
              title="Afspraak ingepland"
              p="Een gekwalificeerde afspraak wordt direct in jouw agenda gezet. De klant krijgt een bevestiging via WhatsApp en SMS: geen heen-en-weer, geen no-shows door vergeten datums."
              chips={["WhatsApp", "SMS"]}
            />
            <Stage
              num="05"
              when="Dagen later"
              title="Na de offerte"
              p="Als jij een offerte hebt uitgebracht, neemt het systeem het opvolgen over. Vriendelijke herinneringen op de juiste momenten, via het kanaal dat de klant zelf koos. Geen lead blijft hangen in 'we komen erop terug.'"
              chips={["SMS", "WhatsApp", "Voice"]}
            />
            <Stage
              num="06"
              when="Tot besluit"
              title="Klant of netjes afgesloten"
              p="Of de lead wordt klant, of het systeem sluit het traject vriendelijk af met een notitie waarom. Geen lead blijft eeuwig op je lijst staan. Jij houdt focus op wie écht klaar is."
              chips={["Voice", "SMS"]}
            />
          </div>
        </div>
      </section>

      {/* MAATWERK */}
      <section className="va-section va-aa-maatwerk">
        <div className="va-wrap">
          <span className="va-mono va-reveal">Geen template</span>
          <h2 className="va-h2 va-reveal" data-stagger={2}>
            We bouwen <em className="va-italic-gold">nooit</em> alle vier kanalen voor elk bedrijf.
          </h2>
          <p className="va-reveal" data-stagger={3}>
            Een dakkapelbedrijf heeft een ander systeem nodig dan een adviespraktijk. Een
            installateur met 20 leads per dag iets anders dan een specialist met 3 grote opdrachten
            per maand. Daarom beginnen we altijd met luisteren, niet met bouwen.
          </p>
        </div>
      </section>

      {/* AI SCAN */}
      <section className="va-aa-scan" id="scan">
        <div className="va-wrap">
          <div className="va-aa-scan-card va-reveal">
            <span className="va-mono">De logische start</span>
            <h2 className="va-h2">
              <em className="va-italic-gold">Eerst kijken of het past.</em> Dan pas bouwen.
            </h2>
            <p>
              Het begint met één gesprek. Daarin kijken we of dit jouw probleem echt oplost en wat
              het gaat kosten. Past het niet, dan zeg ik dat gewoon. Past het wel, dan ligt de rest
              van het traject hieronder.
            </p>

            <div className="va-aa-scan-deliverables">
              <div className="va-aa-scan-item">
                <span className="va-mono">01 · Gesprek</span>
                <p>
                  We kijken samen of dit jouw probleem oplost, en wat het kost. Nog nergens aan
                  vast.
                </p>
              </div>
              <div className="va-aa-scan-item">
                <span className="va-mono">02 · Onboarding</span>
                <p>
                  Ga je akkoord, dan bepalen we samen hoe we het in jouw bedrijf inrichten.
                </p>
              </div>
              <div className="va-aa-scan-item">
                <span className="va-mono">03 · Bouwen</span>
                <p>
                  Ik bouw het systeem. Jij hoort niets, behalve als ik iets van je nodig heb.
                </p>
              </div>
              <div className="va-aa-scan-item">
                <span className="va-mono">04 · Live</span>
                <p>
                  Bij oplevering lopen we het samen door. Klopt het, dan zetten we het aan.
                </p>
              </div>
            </div>

            <Magnetic>
              <Link to="/contact" className="va-btn va-btn-primary">
                Plan een gesprek <span className="va-arr">→</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      <style>{aanpakStyles}</style>
    </PageShell>
  );
}

function Channel({
  num,
  title,
  role,
  p,
  when,
  stagger,
}: {
  num: string;
  title: string;
  role: string;
  p: string;
  when: string;
  stagger?: number;
}) {
  return (
    <article className="va-aa-channel va-reveal" data-stagger={stagger}>
      <div className="va-aa-channel-num">{num}</div>
      <h3>{title}</h3>
      <span className="va-aa-channel-role">{role}</span>
      <p>{p}</p>
      <p className="va-aa-channel-when">{when}</p>
    </article>
  );
}

function Stage({
  num,
  when,
  title,
  p,
  chips,
}: {
  num: string;
  when: string;
  title: string;
  p: string;
  chips: string[];
}) {
  return (
    <div className="va-aa-stage va-reveal">
      <div className="va-aa-stage-marker">{num}</div>
      <div className="va-aa-stage-when">{when}</div>
      <h3>{title}</h3>
      <p>{p}</p>
      <div className="va-aa-chips">
        {chips.map((c) => (
          <span key={c} className="va-chip">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

/* .va-aa-hero, .va-aa-hero-grid, .va-aa-breadcrumb, .va-aa-sep, .va-aa-current,
   .va-hero-dot en .va-aa-scan(-card) staan in src/index.css: ze worden door
   meerdere pagina's gebruikt en moeten dus niet page-scoped zijn. */
const aanpakStyles = `
  .va-aa-hero-h1 { max-width: 16ch; margin-bottom: 36px; }
  .va-aa-hero-lede {
    max-width: 580px;
    font-size: 19px;
    line-height: 1.55;
    color: var(--cream);
  }
  .va-aa-hero-meta {
    margin-top: 64px;
    display: flex;
    gap: 80px;
    flex-wrap: wrap;
    border-top: 1px solid var(--ink-line);
    padding-top: 32px;
  }
  .va-aa-hero-meta div .va-mono { display: block; margin-bottom: 8px; }
  .va-aa-hero-meta div p { margin: 0; font-size: 15px; color: var(--cream); max-width: 22ch; }

  /* Thesis */
  .va-aa-thesis-inner {
    display: grid;
    grid-template-columns: minmax(0, 0.42fr) minmax(0, 1fr);
    gap: 64px;
    align-items: start;
  }
  @media (max-width: 880px) {
    .va-aa-thesis-inner { grid-template-columns: 1fr; gap: 32px; }
  }
  .va-aa-thesis .va-mono { padding-top: 12px; }
  .va-aa-thesis h2 { margin-bottom: 28px; }
  .va-aa-thesis p { margin: 0 0 18px; max-width: 56ch; }
  .va-aa-thesis-big {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(24px, 2.6vw, 30px);
    line-height: 1.35;
    letter-spacing: -0.005em;
    color: var(--cream);
    max-width: 28ch;
    margin: 36px 0 0 !important;
  }
  .va-aa-thesis-big em { font-style: italic; color: var(--gold); }

  /* Channels */
  .va-aa-channels-head { margin-bottom: 80px; max-width: 720px; }
  .va-aa-channels-head .va-mono { display: inline-block; margin-bottom: 24px; }
  .va-aa-channels-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid rgba(244,221,141,0.30);
  }
  @media (max-width: 720px) {
    .va-aa-channels-grid { grid-template-columns: 1fr; }
  }
  .va-aa-channel {
    padding: 48px 40px 56px;
    border-bottom: 1px solid rgba(244,221,141,0.30);
    border-right: 1px solid rgba(244,221,141,0.30);
    position: relative;
  }
  .va-aa-channels-grid .va-aa-channel:nth-child(2n) { border-right: none; }
  @media (max-width: 720px) {
    .va-aa-channel { border-right: none !important; padding: 40px 0 48px; }
  }
  .va-aa-channel-num {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    color: var(--cream-mute);
    margin-bottom: 28px;
  }
  .va-aa-channel h3 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(28px, 3vw, 36px);
    line-height: 1.05;
    letter-spacing: -0.005em;
    color: var(--cream);
    margin-bottom: 14px;
  }
  .va-aa-channel-role {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 22px;
    display: block;
  }
  .va-aa-channel p {
    margin: 0 0 20px;
    font-size: 15px;
    line-height: 1.6;
    color: var(--cream);
    max-width: 38ch;
  }
  .va-aa-channel-when {
    font-family: var(--display);
    font-style: italic;
    font-size: 15px;
    color: var(--cream-mute) !important;
    line-height: 1.5;
    max-width: 38ch;
  }
  .va-aa-channel-when::before {
    content: "—";
    margin-right: 8px;
    color: var(--gold-deep);
    font-style: normal;
  }

  /* Journey */
  .va-aa-journey-head { margin-bottom: 96px; max-width: 760px; }
  .va-aa-journey-head .va-mono { display: inline-block; margin-bottom: 24px; }
  .va-aa-journey { position: relative; }
  .va-aa-journey::before {
    content: "";
    position: absolute;
    left: 28px;
    top: 8px;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, rgba(244,221,141,0.6), rgba(244,221,141,0.05));
  }
  @media (max-width: 720px) { .va-aa-journey::before { left: 16px; } }
  .va-aa-stage {
    position: relative;
    padding-left: 96px;
    padding-bottom: 64px;
  }
  @media (max-width: 720px) {
    .va-aa-stage { padding-left: 56px; padding-bottom: 48px; }
  }
  .va-aa-stage:last-child { padding-bottom: 0; }
  .va-aa-stage-marker {
    position: absolute;
    left: 0; top: 0;
    width: 56px; height: 56px;
    border-radius: 50%;
    border: 1px solid rgba(244,221,141,0.30);
    background: var(--ink);
    display: grid;
    place-items: center;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--gold);
  }
  @media (max-width: 720px) {
    .va-aa-stage-marker { width: 32px; height: 32px; font-size: 10px; }
  }
  .va-aa-stage-when {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--cream-mute);
    margin-bottom: 12px;
  }
  .va-aa-stage h3 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(28px, 3.4vw, 40px);
    line-height: 1.05;
    letter-spacing: -0.005em;
    color: var(--cream);
    margin-bottom: 14px;
    max-width: 22ch;
  }
  .va-aa-stage p { margin: 0; max-width: 56ch; color: var(--cream); }
  .va-aa-chips {
    margin-top: 18px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  /* Maatwerk */
  .va-aa-maatwerk { text-align: center; }
  .va-aa-maatwerk .va-mono { display: inline-block; margin-bottom: 28px; }
  .va-aa-maatwerk h2 { max-width: 880px; margin: 0 auto 36px; }
  .va-aa-maatwerk p { margin: 0 auto; color: var(--cream); max-width: 60ch; font-size: 17px; }

  /* Stappen in de scan-kaart */
  .va-aa-scan-deliverables {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    text-align: left;
    margin: 48px 0;
    padding-top: 36px;
    border-top: 1px solid var(--ink-line);
  }
  @media (max-width: 980px) {
    .va-aa-scan-deliverables { grid-template-columns: 1fr 1fr; gap: 32px 28px; }
  }
  @media (max-width: 560px) {
    .va-aa-scan-deliverables { grid-template-columns: 1fr; gap: 24px; }
  }
  .va-aa-scan-item .va-mono { display: block; margin-bottom: 10px; color: var(--gold-deep); }
  .va-aa-scan-item p { margin: 0; font-size: 14px; line-height: 1.55; max-width: 28ch; color: var(--cream); }
`;
