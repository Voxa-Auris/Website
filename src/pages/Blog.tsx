import { Link } from "react-router-dom";
import PageShell from "@/components/site/PageShell";

const posts = [
  {
    title: "Inbound Voice Agents: De slimme AI-receptioniste die nooit een klant mist",
    excerpt:
      "In een wereld waar klanten direct antwoord verwachten, kan één gemiste oproep het verschil betekenen tussen een nieuwe klant en een verloren kans.",
    date: "2 december 2025",
    category: "Voice agents",
    slug: "inbound-voice-agents",
  },
  {
    title:
      "Outbound AI Agents: Nooit meer een lead missen binnen de golden 5-minuten window",
    excerpt:
      "Een nieuwe lead vult een contactformulier in. Tegen de tijd dat je belt, heeft de concurrent al gereageerd. Daar maakt de Outbound AI het verschil.",
    date: "2 december 2025",
    category: "Voice agents",
    slug: "outbound-ai-agents",
  },
  {
    title: "AI Chatbots voor bedrijven: 17 krachtige use cases en implementatietips",
    excerpt:
      "Voor ondernemers die sneller willen groeien en tegelijk support-kosten willen verlagen, zijn AI chatbots een slimme, schaalbare oplossing.",
    date: "2 december 2025",
    category: "Chatbots",
    slug: "ai-chatbots",
  },
  {
    title: "RAG Agents: De slimste AI die altijd juiste antwoorden geeft",
    excerpt:
      "AI kan geweldig zijn, tot het onzin gaat verzinnen. RAG Agents combineren taalintelligentie met jouw eigen bedrijfsdata.",
    date: "2 december 2025",
    category: "Technologie",
    slug: "rag-agents",
  },
  {
    title:
      "Social Media Agents: De AI marketingassistent die 24/7 post, plant en reageert",
    excerpt:
      "Consistent posten op social media is belangrijk, maar in de praktijk schiet het er vaak bij in. Social Media Agents nemen het over.",
    date: "2 december 2025",
    category: "Marketing",
    slug: "social-media-agents",
  },
  {
    title: "Lead Scrape Agents: De slimme AI die nieuwe leads zoekt, verrijkt en doorstuurt",
    excerpt:
      "Iedere ondernemer wil meer leads, maar niemand heeft tijd om ze handmatig te zoeken. Lead Scrape Agents vinden en verrijken automatisch.",
    date: "2 december 2025",
    category: "Lead generatie",
    slug: "lead-scrape-agents",
  },
];

export default function Blog() {
  return (
    <PageShell title="Blog">
      <section className="va-aa-hero">
        <div className="va-aa-hero-grid" aria-hidden />
        <div className="va-wrap" style={{ position: "relative" }}>
          <div className="va-aa-breadcrumb">
            <span className="va-hero-dot" />
            <Link to="/">Voxa Auris</Link>
            <span className="va-aa-sep">/</span>
            <span className="va-aa-current">Blog</span>
          </div>
          <h1 className="va-h1" style={{ maxWidth: "16ch", marginBottom: 36 }}>
            Inzichten over <em className="va-italic-gold">leadopvolging</em>, AI en MKB-bouw.
          </h1>
          <p className="va-body" style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 580 }}>
            Wat we leren onder de motorkap, over voice agents, chatbots, RAG, en hoe we ze in de
            praktijk inzetten voor Nederlandse bedrijven.
          </p>
        </div>
      </section>

      <section className="va-section va-section-darker">
        <div className="va-wrap">
          <ul className="va-blog-list">
            {posts.map((p, i) => (
              <li key={p.slug} className="va-reveal" data-stagger={(i % 3) + 1}>
                <Link to={`/blog/${p.slug}`} className="va-blog-card">
                  <div className="va-blog-card-top">
                    <span className="va-mono">{p.category}</span>
                    <span className="va-mono va-blog-card-date">{p.date}</span>
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.excerpt}</p>
                  <span className="va-blog-card-arrow">
                    Lees verder <span className="va-arr">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <style>{blogIndexStyles}</style>
    </PageShell>
  );
}

const blogIndexStyles = `
  .va-blog-list {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid rgba(244,221,141,0.30);
  }
  .va-blog-list li {
    border-bottom: 1px solid rgba(244,221,141,0.30);
  }
  .va-blog-card {
    display: block;
    padding: 48px 0;
    transition: background 220ms var(--ease);
    position: relative;
  }
  .va-blog-card:hover { background: rgba(244,221,141,0.02); }
  .va-blog-card-top {
    display: flex;
    gap: 14px;
    margin-bottom: 22px;
    align-items: center;
  }
  .va-blog-card-top .va-mono { color: var(--gold-deep); }
  .va-blog-card-date { color: var(--cream-mute) !important; }
  .va-blog-card h2 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(28px, 3.4vw, 44px);
    line-height: 1.1;
    letter-spacing: -0.005em;
    color: var(--cream);
    margin: 0 0 18px;
    max-width: 26ch;
    transition: color 220ms var(--ease);
  }
  .va-blog-card:hover h2 { color: var(--gold); }
  .va-blog-card p {
    margin: 0;
    color: var(--cream-mute);
    font-size: 16px;
    line-height: 1.6;
    max-width: 64ch;
  }
  .va-blog-card-arrow {
    margin-top: 22px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--mono);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--gold);
  }
  .va-blog-card-arrow .va-arr { transition: transform 220ms var(--ease); }
  .va-blog-card:hover .va-blog-card-arrow .va-arr { transform: translateX(3px); }

  .va-hero-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px rgba(244,221,141,0.12);
    display: inline-block;
  }
`;
