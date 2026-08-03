import { useEffect, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";

/**
 * Belkaart: vervangt het GoHighLevel-formulier. Post rechtstreeks naar de
 * n8n-webhook, die de lead in het CRM zet en Olivia laat terugbellen.
 *
 * De webhook-URL komt uit VITE_DEMO_WEBHOOK zodat je hem per omgeving kunt
 * wisselen zonder de code aan te raken.
 */
const WEBHOOK =
  import.meta.env.VITE_DEMO_WEBHOOK ??
  "https://n8n.voxa-auris.com/webhook/gratis-demo-start";

type Status = "idle" | "sending" | "calling" | "error";

const LEEG = {
  name: "",
  business: "",
  industry: "",
  website: "",
  email: "",
  phone: "",
};

interface Props {
  /** Kleine kop boven de kaart. */
  eyebrow?: string;
  /** Tekst op de knop. */
  knop?: string;
}

export default function DemoBelkaart({
  eyebrow = "demo-oproep · stand-by",
  knop = "Bel mij binnen 60 seconden",
}: Props) {
  const [params] = useSearchParams();
  const [velden, setVelden] = useState(LEEG);
  const [status, setStatus] = useState<Status>("idle");
  const [kop, setKop] = useState(eyebrow);
  const [melding, setMelding] = useState(
    "We gebruiken je gegevens alleen voor deze ene demo-oproep.",
  );

  // Nummer dat op de homepage is ingetypt overnemen.
  useEffect(() => {
    const tel = params.get("tel");
    if (tel) setVelden((v) => ({ ...v, phone: tel }));
  }, [params]);

  const zet = (k: keyof typeof LEEG) => (e: { target: { value: string } }) => {
    setVelden((v) => ({ ...v, [k]: e.target.value }));
    if (status === "error") {
      setStatus("idle");
      setKop(eyebrow);
      setMelding("We gebruiken je gegevens alleen voor deze ene demo-oproep.");
    }
  };

  const fout = (k: string, m: string) => {
    setStatus("error");
    setKop(k);
    setMelding(m);
  };

  async function versturen(e: FormEvent) {
    e.preventDefault();
    if (status === "sending" || status === "calling") return;

    const cijfers = velden.phone.replace(/\D/g, "");
    if (cijfers.length < 9) {
      fout(
        "demo-oproep · controleer je nummer",
        "Dat nummer lijkt niet compleet. Check het en probeer het opnieuw.",
      );
      return;
    }

    setStatus("sending");
    setKop("demo-oproep · verbinden");
    setMelding("Een moment, we geven je gegevens door aan Olivia.");

    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          Object.fromEntries(
            Object.entries(velden).map(([k, v]) => [k, v.trim()]),
          ),
        ),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);

      const antwoord = await res.json().catch(() => ({}));

      if (antwoord.status === "call_gestart") {
        setStatus("calling");
        setKop("demo-oproep · Olivia belt je nu");
        setMelding(
          antwoord.melding ?? "Neem op: binnen 60 seconden gaat je telefoon.",
        );
      } else if (antwoord.status === "ongeldig_nummer") {
        fout(
          "demo-oproep · controleer je nummer",
          antwoord.melding ??
            "Dat nummer lijkt niet te kloppen. Check het en probeer het opnieuw.",
        );
      } else if (antwoord.status === "al_recent_gebeld") {
        fout(
          "demo-oproep · al gebeld",
          antwoord.melding ??
            "We hebben je op dit nummer al gebeld. Probeer het morgen opnieuw.",
        );
      } else {
        throw new Error("onbekende status");
      }
    } catch {
      fout(
        "demo-oproep · niet gelukt",
        "Verzenden lukte niet. Probeer het opnieuw, of bel Olivia direct: +31 76 205 7076.",
      );
    }
  }

  const bezig = status === "sending";
  const klaar = status === "calling";

  return (
    <form className={`va-belkaart is-${status}`} onSubmit={versturen} noValidate>
      <div className="va-bk-head">
        <span className="va-bk-dot" aria-hidden />
        <span className="va-mono">{kop}</span>
      </div>

      <div className="va-bk-velden">
        <Veld label="je naam" name="name" autoComplete="name" placeholder="Mick" value={velden.name} onChange={zet("name")} disabled={klaar} />
        <Veld label="bedrijfsnaam" name="business" autoComplete="organization" placeholder="Stadhouders Installatietechniek" value={velden.business} onChange={zet("business")} disabled={klaar} />
        <Veld label="branche" name="industry" placeholder="installatiebedrijf" value={velden.industry} onChange={zet("industry")} disabled={klaar} />
        <Veld label="je website" name="website" type="text" inputMode="url" autoComplete="url" placeholder="www.jouwbedrijf.nl" value={velden.website} onChange={zet("website")} disabled={klaar} />
        <Veld label="e-mail" name="email" type="email" autoComplete="email" placeholder="jij@jouwbedrijf.nl" value={velden.email} onChange={zet("email")} disabled={klaar} />
        <Veld label="mobiel nummer" name="phone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" value={velden.phone} onChange={zet("phone")} disabled={klaar} />
      </div>

      <button type="submit" className="va-btn va-btn-primary va-bk-knop" disabled={bezig || klaar}>
        {klaar ? "demo gestart" : bezig ? "verbinden…" : knop}
      </button>

      <p className="va-bk-note" role="status">
        {melding}
      </p>
      <p className="va-bk-avg">
        Zie onze <Link to="/privacy">privacyverklaring</Link> voor hoe we met je gegevens omgaan.
      </p>

      <style>{belkaartStyles}</style>
    </form>
  );
}

function Veld({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="va-bk-rij">
      <span className="va-bk-label">{label}</span>
      <input className="va-bk-input" required {...rest} />
    </label>
  );
}

const belkaartStyles = `
  .va-belkaart {
    background: var(--ink-soft);
    border: 1px solid var(--ink-line);
    border-radius: 16px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.55);
    padding: 22px 24px 26px;
    text-align: left;
  }
  .va-bk-head {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--ink-line);
  }
  .va-bk-head .va-mono { color: var(--cream-mute); }
  .va-bk-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--cream-mute);
    flex: none;
    transition: background 300ms ease;
  }
  .is-sending .va-bk-dot,
  .is-calling .va-bk-dot {
    background: var(--gold);
    animation: bkPuls 1.1s ease-in-out infinite;
  }
  .is-calling .va-bk-head .va-mono { color: var(--gold); }
  .is-error .va-bk-dot { background: #c96c6c; animation: none; }
  .is-error .va-bk-head .va-mono { color: #c96c6c; }
  @keyframes bkPuls {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(244,221,141,0.4); }
    50%      { opacity: 0.35; box-shadow: 0 0 0 6px rgba(244,221,141,0); }
  }

  .va-bk-velden { display: flex; flex-direction: column; }
  .va-bk-rij {
    display: grid;
    grid-template-columns: 132px 1fr;
    align-items: center;
    gap: 16px;
    padding: 13px 0;
    border-bottom: 1px solid var(--ink-line);
  }
  .va-bk-label {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--cream-mute);
    transition: color 300ms ease;
  }
  .va-bk-rij:focus-within .va-bk-label { color: var(--gold); }
  .va-bk-input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--cream);
    font-family: var(--body);
    font-size: 14.5px;
    padding: 4px 0;
    border-bottom: 1px solid transparent;
    transition: border-color 300ms ease;
  }
  .va-bk-input::placeholder { color: #4a463d; }
  .va-bk-input:focus { border-bottom-color: var(--gold-deep); }
  .va-bk-input:disabled { opacity: 0.5; }

  .va-bk-knop {
    margin-top: 24px;
    justify-content: center;
  }
  .va-bk-knop:disabled { opacity: 0.45; cursor: default; transform: none; box-shadow: none; }

  .va-bk-note {
    margin: 16px 0 0;
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.04em;
    line-height: 1.6;
    color: var(--cream-mute);
  }
  .is-error .va-bk-note { color: #c96c6c; }
  .is-calling .va-bk-note { color: var(--cream); }
  .va-bk-avg {
    margin: 8px 0 0;
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.04em;
    line-height: 1.6;
    color: var(--cream-mute);
  }
  .va-bk-avg a { color: var(--gold); }

  @media (max-width: 760px) {
    .va-bk-rij { grid-template-columns: 1fr; gap: 6px; padding: 11px 0; }
    .va-bk-knop { width: 100%; }
  }
  @media (prefers-reduced-motion: reduce) {
    .is-sending .va-bk-dot, .is-calling .va-bk-dot { animation: none; }
  }
`;
