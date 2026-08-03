import { Link } from "react-router-dom";
import PageShell from "@/components/site/PageShell";
import Magnetic from "@/components/site/Magnetic";
import DemoBelkaart from "@/components/site/DemoBelkaart";

export default function Contact() {
  return (
    <PageShell title="Contact">
      <section className="va-aa-hero">
        <div className="va-aa-hero-grid" aria-hidden />
        <div className="va-wrap" style={{ position: "relative" }}>
          <div className="va-aa-breadcrumb">
            <span className="va-hero-dot" />
            <Link to="/">Voxa Auris</Link>
            <span className="va-aa-sep">/</span>
            <span className="va-aa-current">Contact</span>
          </div>
          <h1 className="va-h1" style={{ maxWidth: "16ch", marginBottom: 36 }}>
            Praat met <em className="va-italic-gold">ons.</em>
          </h1>
          <p className="va-body" style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 580 }}>
            Vul je gegevens in en we nemen binnen 1 werkdag contact op. Of bel direct. Geen
            wachttijden, geen voicemail.
          </p>
        </div>
      </section>

      <section className="va-section va-section-darker">
        <div className="va-wrap va-contact-grid">
          {/* Contact info */}
          <div className="va-reveal">
            <span className="va-mono">Direct contact</span>
            <h2 className="va-h2 va-contact-h2">Vier manieren om te bellen, te appen of te mailen.</h2>

            <ul className="va-contact-list">
              <li>
                <span className="va-mono">Bel Olivia</span>
                <a href="tel:+31762057076">+31 76 205 7076</a>
                <small>Onze AI-receptionist, neemt 24/7 op</small>
              </li>
              <li>
                <span className="va-mono">Mobiel + WhatsApp</span>
                <a href="tel:+31625251913">+31 6 25 25 19 13</a>
                <small>
                  <a href="https://wa.me/31625251913" target="_blank" rel="noopener noreferrer">
                    Stuur een WhatsApp →
                  </a>
                </small>
              </li>
              <li>
                <span className="va-mono">Email</span>
                <a href="mailto:info@voxa-auris.com">info@voxa-auris.com</a>
                <small>Respons binnen 1 werkdag</small>
              </li>
              <li>
                <span className="va-mono">Locatie</span>
                <span className="va-contact-static">Breda, Noord-Brabant</span>
                <small>Founder-led · KvK 89475216</small>
              </li>
            </ul>

            <div style={{ marginTop: 40 }}>
              <Magnetic>
                <Link to="/gratis-demo" className="va-btn va-btn-primary">
                  Vraag een gratis demo <span className="va-arr">→</span>
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Form */}
          <div className="va-reveal" data-stagger={2}>
            <span className="va-mono">Of laat ons bellen</span>
            <h3 className="va-contact-form-title">
              <em className="va-italic-gold">Hoor</em> meteen waar we het over hebben.
            </h3>
            <div className="va-contact-form-shell">
              <DemoBelkaart />
            </div>
            <p className="va-contact-formfoot">
              Olivia belt je binnen een minuut terug met een demo op jouw bedrijf. Geen
              verkooppraatje, gewoon het product aan de lijn.
            </p>
          </div>
        </div>
      </section>

      <style>{contactStyles}</style>
    </PageShell>
  );
}

const contactStyles = `
  .va-contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.45fr) minmax(0, 1fr);
    gap: 80px;
    align-items: start;
  }
  @media (max-width: 880px) {
    .va-contact-grid { grid-template-columns: 1fr; gap: 56px; }
  }
  .va-contact-h2 {
    margin: 24px 0 40px;
    max-width: 18ch;
  }
  .va-contact-list {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid rgba(244,221,141,0.20);
  }
  .va-contact-list li {
    padding: 24px 0;
    border-bottom: 1px solid rgba(244,221,141,0.20);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .va-contact-list .va-mono { color: var(--gold-deep); }
  .va-contact-list a, .va-contact-static {
    font-family: var(--display);
    font-size: clamp(22px, 2.4vw, 28px);
    color: var(--cream);
    line-height: 1.2;
    transition: color 220ms var(--ease);
  }
  .va-contact-list a:hover { color: var(--gold); }
  .va-contact-list small {
    font-size: 13px;
    color: var(--cream-mute);
  }
  .va-contact-list small a {
    color: var(--gold);
    transition: color 220ms var(--ease);
  }
  .va-contact-list small a:hover { color: var(--cream); }

  .va-contact-form-title {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(28px, 3.2vw, 36px);
    line-height: 1.15;
    color: var(--cream);
    margin: 24px 0 28px;
    max-width: 22ch;
  }
  .va-contact-form-shell {
    background: var(--ink-soft);
    border: 1px solid rgba(244,221,141,0.18);
    border-radius: 16px;
    padding: 12px;
    box-shadow: 0 30px 80px -40px rgba(0,0,0,0.8);
  }
  .va-contact-formfoot {
    margin-top: 16px;
    font-size: 13px;
    color: var(--cream-mute);
    text-align: center;
  }

  .va-hero-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px rgba(244,221,141,0.12);
    display: inline-block;
  }
`;
