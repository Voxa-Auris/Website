import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/Voxa Auris Logo Transparant.png"
                alt="Voxa Auris Logo"
                className="h-24 w-auto"
              />
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
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
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
              <li className="text-sm text-muted-foreground">AI Voice Agents</li>
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
                  href="mailto:Info@voxa-auris.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  Info@voxa-auris.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+31762057076"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  +31 76 205 7076
                </a>
              </li>
              <li className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin size={16} />
                Breda, Noord-Brabant
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
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
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-xs text-muted-foreground">
            <span>KVK: 89475216</span>
            <span className="hidden md:inline">•</span>
            <span>BTW: NL004733082B79</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
