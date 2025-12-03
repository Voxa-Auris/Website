import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Neem <span className="text-primary">Contact</span> op
            </h1>
            <p className="text-xl text-muted-foreground">
              Klaar om te starten? Praat met Olivia of laat Alexander je bellen.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Spreek direct met onze AI
              </h2>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Geen wachttijden, geen voicemail — praat direct met Olivia of laat Alexander contact met je opnemen.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefoon</h3>
                    <a href="tel:+31762057076" className="text-muted-foreground hover:text-primary transition-colors">
                      +31 76 205 7076
                    </a>
                    <p className="text-sm text-primary mt-1">
                      <a href="tel:+31762057076" className="hover:underline">Bel Olivia direct</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">Info@voxa-auris.com</p>
                    <p className="text-sm text-secondary mt-1">Respons binnen 24 uur</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Locatie</h3>
                    <p className="text-muted-foreground">Breda, Noord-Brabant, Nederland</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  💡 <span className="font-semibold">Tip:</span> Wil je direct proberen? Bel ons nummer en ervaar hoe Olivia werkt!
                </p>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-2xl font-bold mb-6">Stuur een bericht</h3>

                {/* Embedded Airtable Form */}
                <iframe
                  className="airtable-embed w-full h-[600px] bg-transparent border-0"
                  src="https://airtable.com/embed/app9GSVUAhLhKwIzt/pagtMd9CNB0XkIpAt/form"
                  style={{ background: 'transparent', border: 'none' }}
                  title="Lead Formulier"
                />

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Of laat Alexander je bellen — vul je nummer in en we nemen binnen 24 uur contact op.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
