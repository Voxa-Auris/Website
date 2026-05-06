import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import PageShell from "./PageShell";
import Magnetic from "./Magnetic";

interface BlogPostLayoutProps {
  category: string;
  date: string;
  title: string;
  lede: string;
  children: ReactNode;
}

export default function BlogPostLayout({
  category,
  date,
  title,
  lede,
  children,
}: BlogPostLayoutProps) {
  return (
    <PageShell title={title}>
      <section className="va-aa-hero">
        <div className="va-aa-hero-grid" aria-hidden />
        <div className="va-wrap" style={{ position: "relative", maxWidth: 880 }}>
          <div className="va-aa-breadcrumb">
            <span className="va-hero-dot" />
            <Link to="/blog">Blog</Link>
            <span className="va-aa-sep">/</span>
            <span className="va-aa-current">{category}</span>
          </div>
          <div className="va-blog-meta">
            <span className="va-mono">{date}</span>
            <span className="va-mono">·</span>
            <span className="va-mono va-blog-meta-author">Voxa Auris</span>
          </div>
          <h1
            className="va-h1"
            style={{
              maxWidth: "20ch",
              marginTop: 36,
              marginBottom: 32,
              fontSize: "clamp(40px, 6vw, 72px)",
            }}
          >
            {title}
          </h1>
          <p
            className="va-body"
            style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 640, color: "var(--cream)" }}
          >
            {lede}
          </p>
        </div>
      </section>

      <section className="va-section va-section-darker">
        <div className="va-wrap">
          <article className="va-prose va-blog-prose">{children}</article>

          <div className="va-blog-back">
            <Link to="/blog" className="va-mono">
              ← Terug naar blog overzicht
            </Link>
          </div>
        </div>
      </section>

      <style>{blogStyles}</style>
    </PageShell>
  );
}

interface BlogCTAProps {
  title: string;
  body?: string;
  href?: string;
  cta?: string;
}

export function BlogCTA({
  title,
  body,
  href = "/gratis-demo",
  cta = "Plan een gratis demo",
}: BlogCTAProps) {
  return (
    <aside className="va-blog-cta">
      <h3>{title}</h3>
      {body && <p>{body}</p>}
      <Magnetic>
        <Link to={href} className="va-btn va-btn-primary">
          {cta} <span className="va-arr">→</span>
        </Link>
      </Magnetic>
    </aside>
  );
}

const blogStyles = `
  .va-blog-meta {
    display: flex;
    gap: 14px;
    align-items: center;
  }
  .va-blog-meta-author { color: var(--gold-deep); }

  .va-blog-prose {
    max-width: 720px;
  }
  .va-blog-prose h2 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(32px, 3.6vw, 44px);
    line-height: 1.1;
    letter-spacing: -0.005em;
    color: var(--cream);
    margin: 64px 0 24px;
    max-width: 24ch;
  }
  .va-blog-prose h2:first-of-type { margin-top: 0; }
  .va-blog-prose h3 {
    font-family: var(--body);
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    color: var(--cream);
    margin: 40px 0 14px;
    letter-spacing: -0.01em;
    max-width: 32ch;
  }
  .va-blog-prose p, .va-blog-prose li {
    color: var(--cream);
    font-size: 17px;
    line-height: 1.7;
    margin: 0 0 16px;
  }
  .va-blog-prose ul {
    margin: 0 0 24px;
    padding-left: 22px;
    list-style: none;
  }
  .va-blog-prose ul li {
    position: relative;
    padding-left: 8px;
    margin-bottom: 8px;
  }
  .va-blog-prose ul li::before {
    content: "—";
    position: absolute;
    left: -22px;
    color: var(--gold-deep);
  }
  .va-blog-prose strong { color: var(--cream); font-weight: 500; }
  .va-blog-prose a {
    color: var(--gold);
    border-bottom: 1px solid rgba(244,221,141,0.4);
  }
  .va-blog-prose a:hover { border-color: var(--gold); }

  .va-blog-cta {
    margin: 56px 0;
    padding: 48px clamp(28px, 4vw, 56px);
    background: var(--ink-soft);
    border: 1px solid rgba(244,221,141,0.18);
    border-radius: 16px;
    text-align: center;
  }
  .va-blog-cta h3 {
    font-family: var(--display);
    font-weight: 400;
    font-size: clamp(26px, 3vw, 32px);
    line-height: 1.15;
    color: var(--cream);
    margin: 0 0 14px;
    max-width: 22ch;
    margin-left: auto;
    margin-right: auto;
  }
  .va-blog-cta p {
    color: var(--cream-mute);
    margin: 0 0 24px;
    max-width: 38ch;
    margin-left: auto;
    margin-right: auto;
  }

  .va-blog-back {
    max-width: 720px;
    margin: 64px 0 0;
    padding-top: 32px;
    border-top: 1px solid var(--ink-line);
  }
  .va-blog-back a {
    color: var(--cream-mute);
    transition: color 220ms var(--ease);
  }
  .va-blog-back a:hover { color: var(--gold); }

  .va-hero-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px rgba(244,221,141,0.12);
    display: inline-block;
  }
`;
