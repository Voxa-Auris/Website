import { motion } from "framer-motion";
import { Phone, Database, Brain, Share2, PhoneIncoming, PhoneOutgoing, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Diensten = () => {
  const handleStartRequest = () => {
    window.open('https://airtable.com/appYourFormId/shrYourFormId', '_blank');
  };

  const handleCallOlivia = () => {
    window.location.href = 'tel:+31640824961';
  };

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
              Onze <span className="text-primary">Diensten</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete AI-automatisering voor moderne ondernemers. Van eerste contact tot gesloten deal.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* AI Voice Agents - Main Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-primary">AI Voice Agents — Altijd iemand aan de lijn</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Onze AI Voice Agents nemen gesprekken over alsof het echte medewerkers zijn.
              Ze leren je bedrijf, producten en tone-of-voice kennen, en staan 24/7 klaar om leads te kwalificeren, afspraken te boeken en klanten te helpen.
            </p>
          </motion.div>

          {/* Inbound Voice Agent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <PhoneIncoming className="w-10 h-10 text-primary" />
                  <h3 className="text-3xl font-bold text-primary">📞 Inbound Voice Agent</h3>
                </div>
                
                <h4 className="text-2xl font-semibold mb-4">Altijd bereikbaar, zelfs buiten kantooruren</h4>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    Je inbound agent fungeert als virtuele receptioniste én productspecialist.
                    Hij beantwoordt vragen over jouw diensten, legt uit hoe iets werkt en plant afspraken in wanneer jij offline bent.
                  </p>
                  <p>
                    De agent kan alle producten en processen "leren", zodat klanten altijd het juiste advies krijgen — telefonisch of via een website-chat.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Nooit meer gemiste telefoontjes of wachtrijen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">24/7 support, altijd vriendelijk</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Consistente kennis over producten en diensten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Integreerbaar met je agenda of CRM</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  onClick={handleCallOlivia}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Phone className="mr-2" />
                  Bel ons direct
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Outbound Voice Agent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <PhoneOutgoing className="w-10 h-10 text-primary" />
                  <h3 className="text-3xl font-bold text-primary">📈 Outbound Voice Agent</h3>
                </div>
                
                <h4 className="text-2xl font-semibold mb-4">Je beste verkoper, die nooit pauze neemt</h4>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    Deze agent volgt automatisch leads op binnen de Golden Window van 5 minuten na een aanvraag.
                    Hij belt, kwalificeert en plant afspraken in nog voor concurrenten reageren.
                  </p>
                  <p>
                    Geen vergeten leads, geen wachttijden — en tot 391 % meer kans op een afspraak.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Directe lead-opvolging binnen 5 minuten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Geen ziekte, geen vakantie, 24/7 beschikbaar</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Multi-attempt systeem (8 pogingen binnen 48 uur)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Realtime rapportage via dashboard</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  onClick={handleStartRequest}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Start aanvraag
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Cold-Call Agent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <Zap className="w-10 h-10 text-primary" />
                  <h3 className="text-3xl font-bold text-primary">🔥 Cold-Call Agent</h3>
                </div>
                
                <h4 className="text-2xl font-semibold mb-4">Laat AI je acquisitie doen terwijl jij deals sluit</h4>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    Cold-callen kost tijd en energie.
                    Onze AI-agenten nemen het eerste contact met potentiële klanten volledig over — met natuurlijke gesprekken die gevoel geven alsof een ervaren sales medewerker belt.
                  </p>
                  <p>
                    Ze stellen gerichte vragen, ontdekken kansen en plannen afspraken in wanneer er interesse is.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Bespaar uren aan acquisitie per week</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Natuurlijke stem (geen robotgeluid)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Directe kwalificatie van prospects</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">Sales-team houdt focus op closen in plaats van bellen</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  onClick={handleStartRequest}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Start aanvraag
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Other Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Lead Scraper */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    🤖 Lead Scraper — AI vindt je volgende klant
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Geef criteria zoals branche, locatie en bedrijfsgrootte, en de AI vult je CRM met verse, gekwalificeerde leads.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Bespaart handmatig zoekwerk</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Constante datakwaliteit</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Direct te koppelen aan Voice Agents</span>
                    </li>
                  </ul>

                  <Button 
                    size="lg" 
                    onClick={handleStartRequest}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Start aanvraag
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* RAG Agents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    📚 RAG Agents — AI met jouw kennis
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    RAG Agents gebruiken jouw documentatie, handleidingen en FAQ's om feitelijke antwoorden te geven in jouw tone-of-voice.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Minder menselijke fouten</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Snellere support</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Beter geïnformeerde klanten</span>
                    </li>
                  </ul>

                  <Button 
                    size="lg" 
                    onClick={handleStartRequest}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Start aanvraag
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Social Media Agent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Share2 className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    📱 Social Media Agent — Altijd zichtbaar
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    De AI analyseert beste post-momenten, schrijft captions in jouw stijl en plaatst automatisch op al je kanalen.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Consistent online</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Meer engagement</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Geen gedoe met planning</span>
                    </li>
                  </ul>

                  <Button 
                    size="lg" 
                    onClick={handleStartRequest}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Start aanvraag
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Diensten;
