import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageShell from "@/components/site/PageShell";
import Magnetic from "@/components/site/Magnetic";

export default function Index() {
  const navigate = useNavigate();
  const [tel, setTel] = useState("");
  const heroH1Ref = useRef<HTMLHeadingElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const waveformRef = useRef<HTMLDivElement | null>(null);

  // Hero word-by-word stagger
  useEffect(() => {
    const words = heroH1Ref.current?.querySelectorAll<HTMLSpanElement>(".va-word");
    words?.forEach((w, i) => {
      w.style.animationDelay = `${80 * i + 100}ms`;
    });
  }, []);

  // Hero cursor-following gold glow with spring easing
  useEffect(() => {
    const glow = glowRef.current;
    const hero = heroRef.current;
    if (!glow || !hero) return;
    const SIZE = 600;
    const restingPos = () => {
      const r = hero.getBoundingClientRect();
      return { x: r.width * 0.72 - SIZE / 2, y: r.height * 0.5 - SIZE / 2 };
    };
    let target = restingPos();
    const pos = { ...target };
    const vel = { x: 0, y: 0 };
    let active = false;
    const stiffness = 100;
    const damping = 30;
    let raf = 0;
    const step = () => {
      const dt = 1 / 60;
      const ax = (target.x - pos.x) * stiffness - vel.x * damping;
      const ay = (target.y - pos.y) * stiffness - vel.y * damping;
      vel.x += ax * dt;
      vel.y += ay * dt;
      pos.x += vel.x * dt;
      pos.y += vel.y * dt;
      glow.style.transform = `translate3d(${pos.x.toFixed(1)}px,${pos.y.toFixed(1)}px,0)`;
      raf = requestAnimationFrame(step);
    };
    glow.style.transform = `translate3d(${pos.x}px,${pos.y}px,0)`;
    raf = requestAnimationFrame(step);

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      target = { x: e.clientX - r.left - SIZE / 2, y: e.clientY - r.top - SIZE / 2 };
      active = true;
    };
    const onLeave = () => {
      target = restingPos();
      active = false;
    };
    const onResize = () => {
      if (!active) target = restingPos();
    };
    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Living waveform — 60 bars with sine + amplitude modulator per bar
  useEffect(() => {
    const wf = waveformRef.current;
    if (!wf) return;
    const N = 60;
    const pseudo = (i: number) => {
      const x = Math.sin(i * 12.9898 + 7.123) * 43758.5453;
      return x - Math.floor(x);
    };
    let html = "";
    for (let i = 0; i < N; i++) html += '<span class="va-bar" style="width:2px"></span>';
    wf.innerHTML = html;
    const bars = wf.querySelectorAll<HTMLSpanElement>(".va-bar");
    const params = Array.from({ length: N }, (_, i) => ({
      phase: pseudo(i) * Math.PI * 2,
      speed: 0.0018 + pseudo(i + 11) * 0.001,
      modPhase: pseudo(i + 31) * Math.PI * 2,
      modSpeed: 0.0006 + pseudo(i + 53) * 0.0006,
      baseAmp: 0.55 + pseudo(i + 17) * 0.45,
    }));
    let raf = 0;
    const tick = (t: number) => {
      const H = wf.clientHeight || 96;
      const center = (N - 1) / 2;
      for (let i = 0; i < N; i++) {
        const p = params[i];
        const env = Math.pow(1 - Math.abs(i - center) / center, 0.5);
        const mod = 0.5 + 0.5 * Math.sin(t * p.modSpeed + p.modPhase);
        const wave = 0.5 + 0.5 * Math.sin(t * p.speed + p.phase);
        const norm = 0.08 + 0.92 * (wave * mod * p.baseAmp * env);
        const h = Math.max(H * 0.08, H * norm);
        const bar = bars[i];
        bar.style.height = `${h.toFixed(1)}px`;
        bar.style.opacity = (norm < 0.28 ? 0.3 : 0.6).toString();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <PageShell title="AI voice agents voor MKB">
      {/* HERO */}
      <section ref={heroRef} className="va-hero" id="top">
        <div className="va-hero-grid" aria-hidden />
        <div ref={glowRef} className="va-hero-glow" aria-hidden />
        <div className="va-wrap va-hero-inner">
          <div>
            <div className="va-hero-cap">
              <span className="va-hero-dot" />
              <span className="va-mono">Breda · Nederland · MKB-AI</span>
            </div>
            <h1 ref={heroH1Ref} className="va-h1 va-hero-h1">
              <span className="va-line">
                <span className="va-word">Elke</span> <span className="va-word">lead</span>{" "}
                <span className="va-word">die</span> <span className="va-word">je</span>
              </span>
              <br />
              <span className="va-line">
                <span className="va-word">te</span>{" "}
                <span className="va-word va-italic-gold">laat</span>{" "}
                <span className="va-word va-italic-gold">opvolgt</span>
                <span className="va-word">,</span>
              </span>
              <br />
              <span className="va-line">
                <span className="va-word">gaat</span> <span className="va-word">naar</span>{" "}
                <span className="va-word">je</span>
              </span>
              <br />
              <span className="va-line">
                <span className="va-word">concurrent</span>
                <span className="va-word">.</span>
              </span>
            </h1>
            <p className="va-body va-hero-body">
              De eerste 5 minuten na een lead bepalen of jij de opdracht krijgt of de buurman.
              Onze AI belt automatisch terug binnen 60 seconden, ook om 23:00.
            </p>
            <div className="va-hero-cta">
              <Magnetic>
                <Link to="/gratis-demo" className="va-btn va-btn-primary">
                  Plan een demo <span className="va-arr">→</span>
                </Link>
              </Magnetic>
              <Magnetic>
                <a href="#demo" className="va-btn va-btn-ghost">
                  Hoor Olivia bellen
                </a>
              </Magnetic>
            </div>
          </div>
          <div className="va-hero-ornament" aria-hidden>
            <div className="va-ornament-meta">
              <div className="va-ornament-num">
                60<sup>s</sup>
              </div>
              <small>
                Gemiddelde reactietijd.<br />
                Dag, nacht, weekend.
              </small>
            </div>
            <div className="va-ornament-line" />
            <div className="va-ornament-tag">A · 24 / 7</div>
          </div>
        </div>
        <div className="va-scroll-ind">
          <span className="va-mono">Scroll om te ontdekken</span>
          <span className="va-vline" />
        </div>
      </section>

      {/* PROBLEEM */}
      <section className="va-section va-section-tall va-section-darker" id="probleem">
        <div className="va-wrap" style={{ width: "100%" }}>
          <div className="va-problem-head va-reveal">
            <span className="va-mono">Het probleem</span>
            <h2 className="va-h2">
              De meeste bedrijven verliezen geen leads door hun product. Ze verliezen ze{" "}
              <em className="va-italic-gold">omdat ze te laat reageren.</em>
            </h2>
          </div>
          <div className="va-stats">
            <Stat label="5 minuten" figure="100" sup="×" body="Meer kans om iemand aan de lijn te krijgen als je binnen 5 minuten belt in plaats van na 30." />
            <Stat label="Reactietijd" figure="42u" body="Zo lang doet een gemiddeld bedrijf erover om op een aanvraag te reageren." stagger={2} />
            <Stat label="Snel genoeg" figure="7" sup="%" body="Zo klein is het deel van de bedrijven dat wél binnen 5 minuten reageert." stagger={3} />
            <Stat label="Beschikbaarheid" figure="24/7" body="AI reageert altijd. Ook 's nachts. Ook in het weekend." stagger={4} />
          </div>
          <p className="va-mono va-stats-source va-reveal" data-stagger={4}>
            Bronnen: InsideSales/MIT 2007 (contactkans), Harvard Business Review 2011, Drift 2018
          </p>
        </div>
      </section>

      {/* DEMO */}
      <section className="va-demo-section" id="demo">
        <div className="va-wrap">
          <div className="va-demo-head va-reveal">
            <span className="va-mono">Hoor het zelf</span>
            <h2 className="va-h2" style={{ maxWidth: 760, margin: "0 auto" }}>
              Lees niet wat wij ervan vinden. <br />
              <em className="va-italic-gold">Laat de AI je bellen.</em>
            </h2>
          </div>

          <div className="va-demo-card va-reveal">
            <div className="va-demo-top">
              <span className="va-live-tag">
                <span className="va-live-dot" /> Voorbeeldgesprek
              </span>
              <span className="va-call-meta">
                Olivia<span className="va-sep">·</span>inkomende oproep
              </span>
            </div>
            <div ref={waveformRef} className="va-waveform" aria-hidden />
            <p className="va-transcript">
              "...dus u zoekt een dakkapel voor uw woning in Eindhoven? Mooi. Ik heb morgenmiddag
              om 14:00 of donderdag om 10:00 beschikbaar. Wat past het beste?"
            </p>
            <div className="va-play-row">
              <Link to="/gratis-demo" className="va-play-btn">
                <span className="va-play-circle" aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="va-play-label">Laat Olivia mij bellen</span>
              </Link>
              <span className="va-play-caption">Binnen een minuut hoor je wat jouw klanten horen</span>
            </div>
          </div>

          <p className="va-demo-footnote va-reveal">
            Zo klinkt het als iemand jouw bedrijf belt op een moment dat jij niet kunt opnemen.
          </p>
        </div>
      </section>

      {/* PROCES */}
      <section className="va-section va-section-darker" id="aanpak">
        <div className="va-wrap">
          <div className="va-process-head va-reveal">
            <span className="va-mono">Zo werkt het</span>
            <h2 className="va-h2">Drie stappen. Geen handwerk.</h2>
          </div>

          <Step
            num="01"
            cap="Lead komt binnen"
            title="Via formulier, telefoon, of WhatsApp"
            body="Een potentiële klant vult je contactformulier in, belt je nummer of stuurt een bericht via WhatsApp. Het systeem registreert de lead direct."
          />
          <Step
            num="02"
            cap="Binnen 60 seconden"
            title="AI neemt contact op"
            body="Olivia of Alexander belt automatisch terug, stelt de juiste kwalificatie-vragen en luistert naar wat de klant écht nodig heeft."
            right
          />
          <Step
            num="03"
            cap="Automatisch ingepland"
            title="Afspraak staat in je agenda"
            body="De AI plant een afspraak in jouw agenda. Jij krijgt een gekwalificeerde lead die klaar is voor het gesprek, dus geen koud bellen meer."
          />
        </div>
      </section>

      {/* KWALITEITSBELOFTE */}
      <section className="va-section">
        <div className="va-wrap">
          <div className="va-promise-head va-reveal">
            <span className="va-mono">Onze belofte</span>
          </div>
          <div className="va-promise-grid">
            <PromiseItem
              h="Maatwerk, geen template."
              p="Elke voice agent wordt gebouwd voor jouw bedrijf, jouw gesprekken, jouw klanten. Geen één-grootte-past-iedereen oplossing."
            />
            <div className="va-vrule" aria-hidden />
            <PromiseItem
              h="Binnen 2 weken live."
              p="Van eerste gesprek tot werkende AI in je business. Geen maandenlange implementatie-trajecten."
              stagger={2}
            />
            <div className="va-vrule" aria-hidden />
            <PromiseItem
              h="Nederlandse support."
              p="Bouwen we samen op, fouten lossen we samen op. Direct contact met de mensen die het systeem hebben gebouwd."
              stagger={3}
            />
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="va-section va-section-darker" id="investering">
        <div className="va-wrap">
          <div className="va-pricing">
            <span className="va-mono va-reveal">Wat het oplevert</span>
            <div>
              <h2 className="va-h2 va-reveal">
                Elke aanvraag{" "}
                <span className="va-gold" style={{ fontStyle: "italic" }}>
                  binnen een minuut
                </span>{" "}
                opgevolgd.<br />
                Een vaste maandprijs.<br />
                Zonder verrassingen.
              </h2>
              <p className="va-body va-reveal" data-stagger={2} style={{ marginTop: 36 }}>
                We kijken eerst waar in jouw proces de aanvragen blijven liggen. Daarna bouwen we
                precies het stuk dat dat oplost, afgestemd op jouw gesprekken en jouw klanten. Wat
                het kost hoor je in het gesprek, voordat er iets gebouwd wordt.
              </p>
              <div className="va-reveal" data-stagger={3} style={{ marginTop: 32 }}>
                <Magnetic>
                  <Link to="/gratis-demo" className="va-btn va-btn-primary">
                    Start de gratis demo <span className="va-arr">→</span>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="va-final" id="contact">
        <div className="va-wrap" style={{ width: "100%" }}>
          <h1 className="va-h1 va-reveal">
            Hoeveel leads<br />
            <em className="va-italic-gold">mis jij</em> deze week?
          </h1>
          <p className="va-body va-reveal" data-stagger={2}>
            Laat je nummer achter, vul op de volgende pagina kort je bedrijf in, en Alexander belt
            je binnen 60 seconden. Geen gesprek met een verkoper, gewoon de AI in actie.
          </p>
          <form
            className="va-phone-form va-reveal"
            data-stagger={3}
            onSubmit={(e) => {
              e.preventDefault();
              const digits = tel.replace(/\D/g, "");
              navigate(digits ? `/gratis-demo?tel=${digits}` : "/gratis-demo");
            }}
          >
            <span className="va-pre">+31</span>
            <input
              type="tel"
              placeholder="6 12 34 56 78"
              autoComplete="tel-national"
              aria-label="Telefoonnummer"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <Magnetic>
              <button type="submit" className="va-btn va-btn-primary">
                Ga verder <span className="va-arr">→</span>
              </button>
            </Magnetic>
          </form>
          <span className="va-final-meta va-mono va-reveal" data-stagger={4}>
            Nederlands · Breda-based · KvK 89475216
          </span>
        </div>
      </section>

      <style>{indexStyles}</style>
    </PageShell>
  );
}

/* ---------- Sub-components ---------- */

function Stat({
  label,
  figure,
  sup,
  body,
  stagger,
}: {
  label: string;
  figure: string;
  sup?: string;
  body: string;
  stagger?: number;
}) {
  return (
    <div className="va-stat va-reveal" data-stagger={stagger}>
      <div className="va-stat-label va-mono">{label}</div>
      <div className="va-stat-figure">
        {figure}
        {sup && <sup>{sup}</sup>}
      </div>
      <p>{body}</p>
    </div>
  );
}

function Step({
  num,
  cap,
  title,
  body,
  right,
}: {
  num: string;
  cap: string;
  title: string;
  body: string;
  right?: boolean;
}) {
  return (
    <div className={`va-step ${right ? "va-step-right" : ""}`}>
      <div className="va-step-num va-reveal">{num}</div>
      <div className="va-step-content va-reveal" data-stagger={2}>
        <span className="va-mono">{cap}</span>
        <h3 className="va-h3">{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}

function PromiseItem({ h, p, stagger }: { h: string; p: string; stagger?: number }) {
  return (
    <div className="va-promise-item va-reveal" data-stagger={stagger}>
      <h3>{h}</h3>
      <p>{p}</p>
    </div>
  );
}

/* ---------- Page-scoped styles ---------- */

const indexStyles = `
  /* Hero */
  .va-hero {
    position: relative;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 80px;
    overflow: hidden;
  }
  @media (max-width: 720px) {
    .va-hero { padding-top: 96px; padding-bottom: 56px; min-height: auto; }
    .va-hero-cap { margin-bottom: 24px; }
    .va-hero-h1 { margin-bottom: 24px; }
    .va-hero-cta { margin-top: 28px; }
  }
  .va-hero-grid {
    position: absolute;
    inset: 0 -40% 0 40%;
    pointer-events: none;
    background-image:
      linear-gradient(to right, rgba(244,221,141,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(244,221,141,0.05) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse 70% 70% at 60% 50%, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 70% 70% at 60% 50%, black 30%, transparent 75%);
  }
  .va-hero-grid::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 80% 50%, rgba(244,221,141,0.04), transparent 50%);
  }
  .va-hero-glow {
    position: absolute;
    top: 0; left: 0;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle at center, rgba(244,221,141,0.08) 0%, rgba(244,221,141,0.045) 30%, rgba(244,221,141,0) 65%);
    mix-blend-mode: screen;
    transform: translate3d(-300px, -300px, 0);
    will-change: transform;
    z-index: 1;
  }
  .va-hero-inner {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.6fr);
    gap: 64px;
    align-items: center;
  }
  @media (max-width: 880px) {
    .va-hero-inner { grid-template-columns: 1fr; }
    .va-hero-grid { inset: 0 -60% 0 0; }
  }
  .va-hero-cap {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 36px;
  }
  .va-hero-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px rgba(244,221,141,0.12);
    display: inline-block;
  }
  .va-hero-h1 { margin-bottom: 32px; }
  .va-hero-h1 .va-word {
    display: inline-block;
    opacity: 0;
    transform: translateY(18px);
    animation: va-rise 700ms var(--ease) forwards;
  }
  @keyframes va-rise { to { opacity: 1; transform: translateY(0); } }
  .va-hero-body {
    opacity: 0;
    animation: va-fadeUp 700ms var(--ease) 900ms forwards;
  }
  .va-hero-cta {
    margin-top: 36px;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    opacity: 0;
    animation: va-fadeUp 700ms var(--ease) 1100ms forwards;
  }
  @keyframes va-fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .va-hero-ornament {
    position: relative;
    height: 380px;
    display: none;
  }
  @media (min-width: 881px) { .va-hero-ornament { display: block; } }
  .va-ornament-meta {
    position: absolute;
    top: 0; right: 0;
    text-align: right;
    color: var(--cream-mute);
  }
  .va-ornament-num {
    font-family: var(--display);
    font-weight: 400;
    font-size: 88px;
    line-height: 1;
    color: var(--gold);
    letter-spacing: -0.01em;
    margin-bottom: 8px;
  }
  .va-ornament-meta small {
    display: block;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    max-width: 200px;
    margin-left: auto;
  }
  .va-ornament-num sup {
    font-size: 0.42em;
    vertical-align: baseline;
    line-height: 1;
    top: 0;
    color: var(--cream-mute);
    margin-left: 0.06em;
  }
  .va-ornament-line {
    position: absolute;
    bottom: 20px; right: 0;
    width: 280px;
    border-top: 1px solid rgba(244,221,141,0.25);
  }
  .va-ornament-line::after {
    content: "";
    position: absolute;
    right: 0; top: -3px;
    width: 6px; height: 6px;
    background: var(--gold);
    border-radius: 50%;
  }
  .va-ornament-tag {
    position: absolute;
    bottom: 28px; right: 0;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--cream-mute);
  }

  .va-scroll-ind {
    position: absolute;
    left: 50%;
    bottom: 28px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    opacity: 0;
    animation: va-fadeUp 700ms var(--ease) 1500ms forwards;
  }
  .va-vline {
    width: 1px;
    height: 48px;
    background: linear-gradient(to bottom, transparent, var(--gold-deep), transparent);
    background-size: 100% 200%;
    animation: va-pulse 2.4s var(--ease) infinite;
  }
  @keyframes va-pulse {
    0%   { background-position: 0% 100%; opacity: 0.3; }
    50%  { background-position: 0% 0%;   opacity: 1;   }
    100% { background-position: 0% -100%; opacity: 0.3; }
  }

  /* Probleem stats */
  .va-problem-head {
    text-align: center;
    max-width: 920px;
    margin: 0 auto 96px;
  }
  .va-problem-head .va-mono { margin-bottom: 28px; display: inline-block; }
  .va-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 56px;
    max-width: 1100px;
    margin: 0 auto;
  }
  @media (max-width: 880px) { .va-stats { grid-template-columns: 1fr 1fr; gap: 40px; } }
  @media (max-width: 520px) { .va-stats { grid-template-columns: 1fr; } }
  .va-stats-source {
    max-width: 1100px;
    margin: 48px auto 0;
    color: var(--cream-mute);
    opacity: 0.55;
  }
  .va-stat-label { margin-bottom: 18px; }
  .va-stat-figure {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(56px, 6.5vw, 84px);
    line-height: 0.95;
    color: var(--gold);
    letter-spacing: -0.01em;
    margin-bottom: 16px;
  }
  /* Op de basislijn, niet als superscript: met line-height 0.95 duwde
     vertical-align:top het teken tot boven het label uit. */
  .va-stat-figure sup {
    font-size: 0.42em;
    vertical-align: baseline;
    line-height: 1;
    top: 0;
    color: var(--cream-mute);
    margin-left: 0.06em;
  }
  .va-stat p {
    margin: 0;
    font-size: 15px;
    line-height: 1.55;
    color: var(--cream);
    max-width: 22ch;
  }

  /* Demo */
  .va-demo-section {
    position: relative;
    padding-top: clamp(120px, 14vw, 180px);
    padding-bottom: clamp(120px, 14vw, 180px);
  }
  @media (max-width: 720px) {
    .va-demo-section { padding-top: 80px; padding-bottom: 80px; }
    .va-demo-card { padding: 20px 18px 24px; }
    .va-demo-top { flex-direction: column; align-items: flex-start; gap: 8px; }
    .va-demo-head { margin-bottom: 40px; }
    .va-demo-footnote { margin-top: 40px; }
  }
  .va-demo-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(244,221,141,0.05), transparent 70%);
    pointer-events: none;
  }
  .va-demo-head {
    text-align: center;
    margin-bottom: 64px;
  }
  .va-demo-head .va-mono { margin-bottom: 20px; }
  .va-demo-card {
    position: relative;
    max-width: 780px;
    margin: 0 auto;
    background: var(--ink-soft);
    border: 1px solid rgba(244,221,141,0.18);
    border-radius: 16px;
    padding: 28px 32px 32px;
    box-shadow: 0 30px 80px -40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.02);
  }
  .va-demo-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 22px;
    border-bottom: 1px solid var(--ink-line);
    margin-bottom: 26px;
  }
  .va-live-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--cream);
  }
  .va-live-dot {
    width: 7px; height: 7px;
    background: var(--gold);
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(244,221,141,0.18);
    animation: va-livepulse 2s var(--ease) infinite;
  }
  @keyframes va-livepulse {
    0%, 100% { box-shadow: 0 0 0 4px rgba(244,221,141,0.18); }
    50%      { box-shadow: 0 0 0 8px rgba(244,221,141,0.05); }
  }
  .va-call-meta {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--cream-mute);
  }
  .va-call-meta .va-sep { margin: 0 10px; opacity: 0.4; }
  .va-waveform {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    height: 96px;
    margin: 8px 0 28px;
  }
  .va-waveform .va-bar {
    width: 2px;
    background: var(--gold);
    opacity: 0.7;
    border-radius: 2px;
  }
  .va-transcript {
    font-family: var(--display);
    font-weight: 400;
    font-style: italic;
    font-size: clamp(20px, 2.2vw, 24px);
    line-height: 1.5;
    color: var(--cream);
    text-align: center;
    max-width: 580px;
    margin: 0 auto 32px;
    letter-spacing: -0.005em;
  }
  .va-transcript::before, .va-transcript::after {
    content: "";
    display: block;
    width: 24px;
    height: 1px;
    background: var(--gold-deep);
    opacity: 0.5;
    margin: 14px auto;
  }
  .va-play-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding-top: 14px;
    border-top: 1px solid var(--ink-line);
  }
  .va-play-btn {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    background: transparent;
    border: none;
    padding: 0;
    color: var(--cream);
  }
  .va-play-circle {
    width: 64px; height: 64px;
    border-radius: 50%;
    background: var(--gold);
    color: var(--ink);
    display: grid;
    place-items: center;
    transition: transform 220ms var(--ease), box-shadow 220ms var(--ease);
  }
  .va-play-btn:hover .va-play-circle {
    transform: scale(1.04);
    box-shadow: 0 14px 34px -14px rgba(244,221,141,0.6);
  }
  .va-play-label {
    font-size: 15px;
    font-weight: 500;
  }
  .va-play-caption {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--cream-mute);
  }
  .va-demo-footnote {
    margin-top: 64px;
    text-align: center;
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(22px, 2.6vw, 28px);
    line-height: 1.4;
    color: var(--cream);
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: -0.005em;
  }

  /* Process */
  .va-process-head {
    margin-bottom: 120px;
    max-width: 720px;
  }
  .va-process-head .va-mono { margin-bottom: 24px; display: inline-block; }
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
    .va-step, .va-step-right { grid-template-columns: 1fr; gap: 24px; padding: 56px 0; }
    .va-step-right .va-step-num { order: 0; text-align: left; }
    .va-step-right .va-step-content { order: 1; }
  }
  @media (max-width: 720px) {
    .va-process-head { margin-bottom: 64px; }
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

  /* Promise */
  .va-promise-head { margin-bottom: 80px; }
  .va-promise-head .va-mono { display: inline-block; }
  .va-promise-grid {
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr;
    gap: 56px;
    align-items: start;
  }
  .va-vrule {
    width: 1px;
    align-self: stretch;
    background: linear-gradient(to bottom, transparent, rgba(244,221,141,0.30) 20%, rgba(244,221,141,0.30) 80%, transparent);
  }
  .va-promise-item h3 {
    font-family: var(--body);
    font-weight: 500;
    font-size: 22px;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: var(--cream);
    margin: 0 0 18px;
    max-width: 18ch;
  }
  .va-promise-item p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: var(--cream-mute);
    max-width: 32ch;
  }
  @media (max-width: 880px) {
    .va-promise-grid { grid-template-columns: 1fr; gap: 0; }
    .va-vrule { display: none; }
    .va-promise-item {
      padding: 32px 0;
      border-top: 1px solid rgba(244,221,141,0.30);
    }
    .va-promise-item:first-of-type { border-top: none; padding-top: 0; }
  }

  /* Pricing */
  .va-pricing {
    display: grid;
    grid-template-columns: minmax(0, 0.4fr) minmax(0, 1fr);
    gap: 80px;
    align-items: start;
  }
  @media (max-width: 880px) {
    .va-pricing { grid-template-columns: 1fr; gap: 32px; }
  }
  .va-pricing .va-mono { padding-top: 16px; }
  .va-pricing h2 { margin-bottom: 28px; }
  .va-pricing p { margin: 0 0 32px; max-width: 540px; color: var(--cream); }

  /* Final */
  .va-final {
    text-align: center;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: clamp(80px, 12vw, 140px);
    padding-bottom: clamp(80px, 12vw, 140px);
    position: relative;
  }
  @media (max-width: 720px) {
    .va-final { min-height: auto; padding-top: 80px; padding-bottom: 80px; }
  }
  .va-final h1 { max-width: 800px; margin-bottom: 28px; }
  .va-final .va-body {
    color: var(--cream-mute);
    margin: 0 auto 48px;
    max-width: 540px;
  }
  .va-final-meta {
    margin-top: 48px;
    color: var(--cream-mute);
  }
`;
