import { Link } from "react-router-dom";
import PageShell from "@/components/site/PageShell";

export default function Privacy() {
  return (
    <PageShell title="Privacy & Outreach">
      <section className="va-aa-hero">
        <div className="va-aa-hero-grid" aria-hidden />
        <div className="va-wrap" style={{ position: "relative" }}>
          <div className="va-aa-breadcrumb">
            <span className="va-hero-dot" />
            <Link to="/">Voxa Auris</Link>
            <span className="va-aa-sep">/</span>
            <span className="va-aa-current">Privacy & outreach</span>
          </div>
          <h1 className="va-h1" style={{ maxWidth: "16ch", marginBottom: 36 }}>
            Privacy & <em className="va-italic-gold">outreach</em>.
          </h1>
          <p className="va-body" style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 580 }}>
            Hoe wij omgaan met persoonsgegevens, en specifiek met onze zakelijke outreach.
          </p>
        </div>
      </section>

      <section className="va-section va-section-darker">
        <div className="va-wrap">
          <article className="va-prose">
            <Block title="Wie zijn wij?">
              <p>
                Voxa Auris is een bedrijf dat AI voice agents en leadopvolging-systemen bouwt voor
                Nederlandse bedrijven. Verantwoordelijke voor de gegevensverwerking is{" "}
                <strong>Mick Stadhouders</strong>, contact via{" "}
                <a href="mailto:mickstadhouders@voxa-auris.com">mickstadhouders@voxa-auris.com</a>.
              </p>
            </Block>

            <Block title="Welke gegevens verwerken wij?">
              <p>Voor onze zakelijke outreach verwerken wij beperkte zakelijke contactgegevens:</p>
              <ul>
                <li>Bedrijfsnaam en website</li>
                <li>Naam en functie van een zakelijke contactpersoon</li>
                <li>Zakelijk e-mailadres</li>
                <li>Zakelijk telefoonnummer</li>
                <li>Branche/segment-indicatie</li>
              </ul>
            </Block>

            <Block title="Waar komen die gegevens vandaan?">
              <p>
                Wij verkrijgen deze gegevens uit publiek beschikbare bronnen: bedrijfswebsites,
                het Handelsregister van de Kamer van Koophandel, openbare zakelijke profielen en
                gepubliceerde bedrijvendatabases. Wij verzamelen geen gegevens van consumenten en
                richten onze outreach uitsluitend op rechtspersonen (B.V., N.V.).
              </p>
            </Block>

            <Block title="Waarvoor gebruiken wij ze?">
              <p>
                Wij gebruiken deze gegevens uitsluitend om een eenmalig of beperkt aantal zakelijke
                berichten te sturen waarin wij onze diensten introduceren. Onze grondslag is
                gerechtvaardigd belang (artikel 6 lid 1 sub f AVG): direct marketing tussen
                bedrijven, beperkt in omvang, met laagdrempelige opt-out.
              </p>
            </Block>

            <Block title="Hoe lang bewaren wij ze?">
              <p>
                Wij bewaren contactgegevens maximaal 24 maanden na het laatste contactmoment, of
                tot je aangeeft niet meer benaderd te willen worden. Daarna worden de gegevens uit
                onze actieve systemen verwijderd. Een suppressielijst (alleen e-mailadressen of
                bedrijfsdomeinen) bewaren wij langer om te voorkomen dat we per ongeluk opnieuw
                contact opnemen.
              </p>
            </Block>

            <Block title="Met wie delen wij gegevens?">
              <p>
                Voor het versturen van e-mails en het beheren van onze contactlijst gebruiken wij
                de volgende verwerkers (met verwerkersovereenkomst):
              </p>
              <ul>
                <li>Instantly (e-mail outreach platform)</li>
                <li>Apify (data-aggregatie)</li>
                <li>Supabase (database/CRM)</li>
                <li>n8n (workflow-automatisering, self-hosted)</li>
              </ul>
              <p>
                Wij verkopen of delen jouw gegevens nooit met derden voor marketingdoeleinden van
                andere partijen.
              </p>
            </Block>

            <Block title="Jouw rechten">
              <p>Onder de AVG heb je de volgende rechten:</p>
              <ul>
                <li>
                  <strong>Inzage</strong> — je mag opvragen welke gegevens wij van je hebben
                </li>
                <li>
                  <strong>Correctie</strong> — onjuiste gegevens laten corrigeren
                </li>
                <li>
                  <strong>Verwijdering</strong> — je gegevens uit onze systemen laten halen
                </li>
                <li>
                  <strong>Bezwaar tegen direct marketing</strong> — wij stoppen onmiddellijk bij elk
                  bezwaar
                </li>
                <li>
                  <strong>Klacht indienen</strong> — bij de Autoriteit Persoonsgegevens
                  (autoriteitpersoonsgegevens.nl)
                </li>
              </ul>
            </Block>

            <Block title="Hoe haal je jezelf uit onze lijst?">
              <p>Drie manieren, allemaal even effectief:</p>
              <ul>
                <li>Reageer op een mail van ons met "stop", "verwijder me" of "niet relevant"</li>
                <li>
                  Stuur een mail naar{" "}
                  <a href="mailto:privacy@voxa-auris.com">privacy@voxa-auris.com</a>
                </li>
                <li>Vraag het tijdens een telefoongesprek met ons</li>
              </ul>
              <p>
                Wij verwerken het verzoek binnen 1 werkdag en sturen jou nooit meer een commercieel
                bericht.
              </p>
            </Block>

            <p className="va-prose-stamp va-mono">Laatst bijgewerkt: 28 april 2026</p>
          </article>
        </div>
      </section>

      <style>{prosePageStyles}</style>
    </PageShell>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="va-prose-block va-reveal">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

const prosePageStyles = `
  .va-prose {
    max-width: 720px;
    margin: 0 auto;
  }
  .va-prose-block {
    padding: 28px 0;
    border-top: 1px solid var(--ink-line);
  }
  .va-prose-block:first-of-type { border-top: none; padding-top: 0; }
  .va-prose-block h2 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(28px, 3vw, 36px);
    line-height: 1.1;
    letter-spacing: -0.005em;
    color: var(--cream);
    margin: 0 0 18px;
    max-width: 22ch;
  }
  .va-prose p, .va-prose li {
    color: var(--cream);
    font-size: 16px;
    line-height: 1.7;
    margin: 0 0 14px;
  }
  .va-prose a {
    color: var(--gold);
    border-bottom: 1px solid rgba(244,221,141,0.4);
    transition: border-color 220ms var(--ease);
  }
  .va-prose a:hover { border-color: var(--gold); }
  .va-prose ul {
    margin: 0 0 14px;
    padding-left: 20px;
  }
  .va-prose strong { color: var(--cream); font-weight: 500; }
  .va-prose-stamp {
    margin-top: 56px;
    padding-top: 32px;
    border-top: 1px solid var(--ink-line);
    color: var(--cream-mute);
  }

  .va-hero-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px rgba(244,221,141,0.12);
    display: inline-block;
  }
`;
