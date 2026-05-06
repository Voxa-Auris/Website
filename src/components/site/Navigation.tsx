import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Magnetic from "./Magnetic";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Aanpak", to: "/aanpak" },
  { label: "Over ons", to: "/over" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`va-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="va-wrap va-nav-inner">
        <Link to="/" className="va-wordmark" onClick={() => setMobileOpen(false)}>
          Voxa Auris
        </Link>

        <div className="va-nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="va-nav-cta">
          <Magnetic>
            <Link to="/gratis-demo" className="va-btn va-btn-primary">
              Plan demo
            </Link>
          </Magnetic>
        </div>

        <button
          aria-label={mobileOpen ? "Sluit menu" : "Open menu"}
          className="va-nav-burger"
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="va-nav-mobile">
          <div className="va-wrap">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `va-nav-mobile-link ${isActive ? "is-active" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/gratis-demo"
              className="va-btn va-btn-primary va-nav-mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              Plan demo
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .va-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: background 300ms var(--ease), border-color 300ms var(--ease), backdrop-filter 300ms var(--ease);
          border-bottom: 1px solid transparent;
        }
        .va-nav.is-scrolled {
          background: rgba(10,10,10,0.72);
          backdrop-filter: saturate(140%) blur(14px);
          -webkit-backdrop-filter: saturate(140%) blur(14px);
          border-bottom: 1px solid var(--ink-line);
        }
        .va-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 24px;
        }
        .va-wordmark {
          font-family: var(--display);
          font-weight: 400;
          font-size: 20px;
          color: var(--gold);
          letter-spacing: -0.005em;
        }
        .va-nav-links {
          display: none;
          gap: 32px;
          align-items: center;
        }
        @media (min-width: 880px) {
          .va-nav-links { display: flex; }
        }
        .va-nav-links a {
          font-size: 14px;
          color: var(--cream-mute);
          transition: color 200ms var(--ease);
          position: relative;
          padding: 4px 0;
        }
        .va-nav-links a:hover { color: var(--cream); }
        .va-nav-links a.is-active { color: var(--cream); }
        .va-nav-links a.is-active::before {
          content: "";
          position: absolute;
          left: 0; right: 0;
          bottom: -6px;
          height: 1px;
          background: var(--gold);
        }
        .va-nav-links a::after {
          content: "";
          position: absolute;
          left: 0; bottom: -6px;
          width: 0; height: 1px;
          background: var(--gold);
          transition: width 220ms var(--ease);
        }
        .va-nav-links a:hover::after { width: 100%; }

        .va-nav-cta { display: none; }
        @media (min-width: 880px) {
          .va-nav-cta { display: block; }
        }

        .va-nav-burger {
          background: transparent;
          border: 1px solid var(--ink-line);
          border-radius: 999px;
          padding: 8px;
          color: var(--cream);
          display: inline-flex;
        }
        @media (min-width: 880px) {
          .va-nav-burger { display: none; }
        }

        .va-nav-mobile {
          background: rgba(10,10,10,0.95);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--ink-line);
          padding: 24px 0 32px;
        }
        .va-nav-mobile-link {
          display: block;
          padding: 14px 0;
          font-size: 18px;
          color: var(--cream-mute);
          font-family: var(--body);
          border-bottom: 1px solid var(--ink-line);
        }
        .va-nav-mobile-link.is-active { color: var(--gold); }
        .va-nav-mobile-cta {
          display: inline-flex;
          margin-top: 20px;
        }
      `}</style>
    </nav>
  );
}
