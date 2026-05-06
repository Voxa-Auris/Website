import { Link } from "react-router-dom";
import PageShell from "@/components/site/PageShell";
import Magnetic from "@/components/site/Magnetic";

const GHL_FORM_URL = "https://api.leadconnectorhq.com/widget/form/1NrTnNfSyP5VafVmAY7h";

const voiceSamples = [
  {
    label: "Installatiebedrijf",
    scenario: "Inkomend gesprek — klant meldt een cv-ketel storing",
    src: "/audio/voice-installatie.mp3",
  },
  {
    label: "Makelaardij",
    scenario: "Outbound follow-up — agent belt een bezichtigingsaanvraag terug",
    src: "/audio/voice-makelaardij.mp3",
  },
  {
    label: "Kliniek of zorginstelling",
    scenario: "Afsprakenbeheer — rustige professionele toon voor zorgpatiënten",
    src: "/audio/voice-zorg.mp3",
  },
];

const steps = [
  {
    title: "Vul het formulier in",
    body: "Bedrijfsnaam, type bedrijf en telefoonnummer. Klaar in 2 minuten. Geen verplichtingen.",
  },
  {
    title: "Wij bouwen je agent",
    body:
      "Volledig automatisch — op basis van jouw gegevens wordt een gepersonaliseerde demo klaargemaakt.",
  },
  {
    title: "Jouw AI belt je binnen 5 minuten",
    body:
      "Je ervaart precies hoe jouw toekomstige klanten de agent zouden horen. Geen PowerPoint — gewoon het echte product.",
  },
];

const faqs = [
  {
    q: "Hoe klinkt de demo-call?",
    a: "De AI-agent belt je op met een stem die lijkt op een professionele receptionist. Afgestemd op jouw bedrijfstype en in vloeiend Nederlands. Je hoort precies wat jouw klanten zouden horen.",
  },
  {
    q: "Kan ik de stem aanpassen?",
    a: "Ja. Bij een echte implementatie kies je uit meerdere stemmen — mannelijk, vrouwelijk, formeel of toegankelijk. We passen ook de toon en het script aan op jouw branche.",
  },
  {
    q: "Wat kost een echte implementatie?",
    a: "Dat hangt af van de complexiteit en het gebruik. Na de demo bespreken we vrijblijvend de opties. Geen verborgen kosten — alles transparant.",
  },
  {
    q: "Werkt dit voor elk type bedrijf?",
    a: "Grotendeels. AI voice agents werken het beste voor bedrijven die regelmatig telefonisch contact hebben met klanten: installateurs, makelaars, klinieken, salons, administratiekantoren en meer.",
  },
  {
    q: "Wat heb ik nodig om te starten?",
    a: "Alleen een telefoonnummer en een kort overzicht van wat de agent moet doen. Wij regelen de rest — van stem en script tot integraties.",
  },
];

export default function GratisDemoPage() {
  const scroll = () =>
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <PageShell title="Gratis demo">
      {/* HERO */}
      <section className="va-aa-hero" style={{ paddingTop: 200, paddingBottom: 120 }}>
        <div className="va-aa-hero-grid" aria-hidden />
        <div
          className="va-wrap"
          style={{
            position: "relative",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <span className="va-mono">Gratis gepersonaliseerde demo</span>
          <h1 className="va-h1" style={{ maxWidth: "18ch" }}>
            Hoor hoe het klinkt als jij{" "}
            <em className="va-italic-gold">geen leads meer mist.</em>
          </h1>
          <p className="va-body" style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 580 }}>
            Binnen 5 minuten een gepersonaliseerde demo — volledig automatisch. Jouw AI-agent
            belt jou op.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <Magnetic>
              <button onClick={scroll} className="va-btn va-btn-primary">
                Start mijn gratis demo <span className="va-arr">↓</span>
              </button>
            </Magnetic>
            <Magnetic>
              <Link to="/aanpak" className="va-btn va-btn-ghost">
                Lees eerst onze aanpak
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* PROMISE BAR */}
      <section className="va-section va-section-darker" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="va-wrap">
          <div className="va-demo-promise">
            <div className="va-reveal">
              <span className="va-mono">5 minuten</span>
              <p>Jouw demo klaar.</p>
            </div>
            <div className="va-vrule" aria-hidden />
            <div className="va-reveal" data-stagger={2}>
              <span className="va-mono">Volledig automatisch</span>
              <p>Geen mens aan te pas.</p>
            </div>
            <div className="va-vrule" aria-hidden />
            <div className="va-reveal" data-stagger={3}>
              <span className="va-mono">Jouw agent belt jou</span>
              <p>Geen scripted clip.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VOICE PREVIEW */}
      <section className="va-section">
        <div className="va-wrap">
          <div className="va-niche-head va-reveal">
            <span className="va-mono">Voorbeelden</span>
            <h2 className="va-h2" style={{ marginTop: 24 }}>
              Zo klinkt een AI-receptionist.
            </h2>
            <p style={{ marginTop: 24, color: "var(--cream)", maxWidth: "60ch" }}>
              Luister naar voorbeelden van bedrijven die al gebruik maken van onze agents.
            </p>
          </div>

          <div className="va-demo-samples">
            {voiceSamples.map((s, i) => (
              <div key={s.label} className="va-demo-sample va-reveal" data-stagger={(i % 3) + 1}>
                <span className="va-mono">{s.label}</span>
                <p>{s.scenario}</p>
                <audio controls preload="none">
                  <source src={s.src} type="audio/mpeg" />
                  Je browser ondersteunt geen audio.
                </audio>
              </div>
            ))}
          </div>
          <p className="va-mono va-demo-samples-foot va-reveal">
            De echte gepersonaliseerde demo ontvang je als telefoongesprek — direct op jouw nummer.
          </p>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="demo-form" className="va-aa-scan">
        <div className="va-wrap">
          <div className="va-aa-scan-card va-reveal">
            <span className="va-mono">Vraag je demo aan</span>
            <h2 className="va-h2" style={{ marginTop: 18 }}>
              Hoor jouw eigen AI-agent — <em className="va-italic-gold">gratis.</em>
            </h2>
            <p>
              Vul je gegevens in. Binnen 5 minuten word je gebeld door jouw persoonlijke AI-agent.
            </p>
            <div className="va-demo-form-shell">
              <iframe
                src={GHL_FORM_URL}
                className="va-demo-iframe"
                title="Gratis demo aanvragen"
              />
            </div>
            <p style={{ marginTop: 16, fontSize: 13, color: "var(--cream-mute)", textAlign: "center" }}>
              Na het invullen word je binnen 5 minuten gebeld door de AI-agent.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="va-section">
        <div className="va-wrap">
          <div className="va-niche-head va-reveal">
            <span className="va-mono">Hoe het werkt</span>
            <h2 className="va-h2" style={{ marginTop: 24 }}>
              Drie stappen. Geen onboarding.
            </h2>
          </div>
          {steps.map((s, i) => (
            <div key={s.title} className={`va-step ${i % 2 === 1 ? "va-step-right" : ""}`}>
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

      {/* FAQ */}
      <section className="va-section va-section-darker">
        <div className="va-wrap" style={{ maxWidth: 720 }}>
          <div className="va-niche-head va-reveal" style={{ textAlign: "center" }}>
            <span className="va-mono">Veelgestelde vragen</span>
            <h2 className="va-h2" style={{ marginTop: 24 }}>
              Alles wat je wilt weten <em className="va-italic-gold">vóór</em> de demo.
            </h2>
          </div>
          <ul className="va-faq">
            {faqs.map((f, i) => (
              <li key={i} className="va-reveal" data-stagger={(i % 3) + 1}>
                <details>
                  <summary>
                    <span className="va-mono">0{i + 1}</span>
                    <span className="va-faq-q">{f.q}</span>
                    <span className="va-faq-icon">+</span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="va-final">
        <div className="va-wrap" style={{ width: "100%" }}>
          <h1 className="va-h1 va-reveal">
            Vraag <em className="va-italic-gold">nu</em>
            <br />
            je demo aan.
          </h1>
          <p className="va-body va-reveal" data-stagger={2}>
            Geen verplichtingen. Geen creditcard. Gewoon jouw eigen AI-agent aan de lijn.
          </p>
          <div className="va-reveal" data-stagger={3} style={{ marginTop: 24 }}>
            <Magnetic>
              <button onClick={scroll} className="va-btn va-btn-primary">
                Start mijn gratis demo <span className="va-arr">↓</span>
              </button>
            </Magnetic>
          </div>
        </div>
      </section>

      <style>{demoStyles}</style>
    </PageShell>
  );
}

const demoStyles = `
  .va-demo-promise {
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr;
    gap: 56px;
    align-items: start;
    max-width: 960px;
    margin: 0 auto;
  }
  .va-demo-promise .va-mono {
    display: block;
    margin-bottom: 14px;
    color: var(--gold-deep);
  }
  .va-demo-promise p {
    margin: 0;
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(22px, 2.4vw, 28px);
    line-height: 1.2;
    color: var(--cream);
    letter-spacing: -0.005em;
    max-width: 14ch;
  }
  .va-demo-promise .va-vrule {
    width: 1px;
    align-self: stretch;
    background: linear-gradient(to bottom, transparent, rgba(244,221,141,0.30) 20%, rgba(244,221,141,0.30) 80%, transparent);
  }
  @media (max-width: 720px) {
    .va-demo-promise { grid-template-columns: 1fr; gap: 0; }
    .va-demo-promise .va-vrule { display: none; }
    .va-demo-promise > div {
      padding: 24px 0;
      border-top: 1px solid rgba(244,221,141,0.30);
    }
    .va-demo-promise > div:first-of-type { border-top: none; }
  }

  .va-demo-samples {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: rgba(244,221,141,0.25);
    border: 1px solid rgba(244,221,141,0.25);
  }
  @media (max-width: 880px) { .va-demo-samples { grid-template-columns: 1fr; } }
  .va-demo-sample {
    background: var(--ink);
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .va-demo-sample .va-mono { color: var(--gold-deep); }
  .va-demo-sample p {
    margin: 0 0 12px;
    font-family: var(--display);
    font-size: 20px;
    line-height: 1.3;
    color: var(--cream);
  }
  .va-demo-sample audio { width: 100%; margin-top: auto; }
  .va-demo-samples-foot {
    text-align: center;
    margin-top: 48px;
    color: var(--cream-mute);
  }

  .va-demo-form-shell {
    margin: 24px 0 0;
    background: var(--ink);
    border: 1px solid rgba(244,221,141,0.18);
    border-radius: 12px;
    padding: 8px;
  }
  .va-demo-iframe {
    width: 100%;
    height: 700px;
    border: 0;
    background: transparent;
    border-radius: 8px;
  }

  .va-faq {
    list-style: none;
    margin: 56px 0 0;
    padding: 0;
    border-top: 1px solid var(--ink-line);
  }
  .va-faq li { border-bottom: 1px solid var(--ink-line); }
  .va-faq details {
    padding: 24px 0;
  }
  .va-faq summary {
    list-style: none;
    cursor: pointer;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 24px;
    align-items: center;
  }
  .va-faq summary::-webkit-details-marker { display: none; }
  .va-faq-q {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(20px, 2.2vw, 24px);
    color: var(--cream);
    line-height: 1.3;
  }
  .va-faq-icon {
    font-family: var(--mono);
    font-size: 20px;
    color: var(--gold);
    transition: transform 220ms var(--ease);
  }
  .va-faq details[open] .va-faq-icon { transform: rotate(45deg); }
  .va-faq details p {
    margin: 16px 0 0 60px;
    color: var(--cream-mute);
    line-height: 1.6;
  }
  @media (max-width: 720px) {
    .va-faq details p { margin-left: 0; }
  }

  .va-final {
    text-align: center;
    padding-top: clamp(80px, 12vw, 140px);
    padding-bottom: clamp(80px, 12vw, 140px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .va-final h1 { max-width: 640px; margin-bottom: 28px; }
  .va-final .va-body {
    color: var(--cream-mute);
    margin: 0 auto 28px;
    max-width: 540px;
  }
`;
