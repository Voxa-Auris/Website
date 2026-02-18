import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">V</span>
              </div>
              <span className="text-xl font-bold">
                Voxa <span className="text-primary">Auris</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-automatisering die werkt terwijl jij groeit.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigatie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diensten" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/over" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">AI Voice Agent</li>
              <li className="text-sm text-muted-foreground">Lead Kwalificatie</li>
              <li className="text-sm text-muted-foreground">Workflow Automatisering</li>
              <li className="text-sm text-muted-foreground">CRM Integratie</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@voxa-auris.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  info@voxa-auris.com
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Phone size={16} />
                  [TELEFOONNUMMER INVULLEN]
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Voxa Auris. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Algemene Voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
