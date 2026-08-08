import { useEffect, type ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useReveal } from "./useReveal";

interface PageShellProps {
  children: ReactNode;
  title?: string;
}

/**
 * Wraps every page with shared chrome: Nav, Footer, scroll-to-top on route change,
 * reveal observer. Pages just render their own sections inside.
 */
export default function PageShell({ children, title }: PageShellProps) {
  useReveal();

  useEffect(() => {
    if (title) document.title = `${title}: Voxa Auris`;
  }, [title]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="va-page">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
