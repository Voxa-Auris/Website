import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="va-footer">
      <div className="va-wrap va-footer-inner">
        <span className="va-wordmark">Voxa Auris</span>
        <div className="va-footer-links">
          <Link to="/">Home</Link>
          <Link to="/aanpak">Aanpak</Link>
          <Link to="/over">Over ons</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <span className="va-footer-meta">
          © {new Date().getFullYear()} Voxa Auris · KvK 89475216
        </span>
      </div>
      <style>{`
        .va-footer {
          border-top: 1px solid var(--ink-line);
          padding: 40px 0 56px;
          background: var(--ink);
        }
        .va-footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .va-footer-links {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }
        .va-footer-links a {
          font-size: 13px;
          color: var(--cream-mute);
          transition: color 220ms var(--ease);
          position: relative;
        }
        .va-footer-links a:hover { color: var(--cream); }
        .va-footer-meta {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cream-mute);
        }
      `}</style>
    </footer>
  );
}
