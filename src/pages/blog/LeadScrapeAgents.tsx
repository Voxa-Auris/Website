import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Phone, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const LeadScrapeAgents = () => {
  const handleCTA = () => {
    window.open('https://airtable.com/app9GSVUAhLhKwIzt/pagtMd9CNB0XkIpAt/form', '_blank');
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
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Lead Scrape Agents</span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>2 december 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Voxa Auris Team</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                Lead Generatie
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Lead Scrape Agents: De Slimme AI die Nieuwe Leads Zoekt, Verrijkt en Doorstuurt
            </h1>

            {/* Lead */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Iedere ondernemer wil meer leads - maar niemand heeft tijd om ze handmatig te zoeken. De Lead Scrape Agents van Voxa Auris lossen dat probleem op.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {/* Intro */}
              <p className="text-lg leading-relaxed">
                Ze vinden, filteren en verrijken automatisch nieuwe leads die passen bij jouw doelgroep, en sturen ze direct door naar je CRM of Outbound Agent voor opvolging. Geen koude lijsten meer. Geen eindeloos scrollen op LinkedIn of bedrijvengidsen. Gewoon: dagelijks verse, relevante leads, klaar voor actie.
              </p>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Wat is een Lead Scrape Agent van Voxa Auris?</h2>
              <p>
                Een Lead Scrape Agent is een AI die zelfstandig potentiële klanten zoekt op basis van jouw criteria. Hij gebruikt publieke bronnen, databanken en online signalen om te ontdekken wie je ideale klant is, waar ze actief zijn en hoe ze te bereiken zijn.
              </p>
              <p>
                Vervolgens verrijkt hij die data: bedrijfsnaam, e-mail, telefoonnummer, sector, omzet, aantal medewerkers en meer.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">De kracht van automatische leadgeneratie</h3>
              <p>
                In plaats van handmatig lijsten samenstellen, draait de Lead Scrape Agent continu op de achtergrond. Hij zoekt, verifieert en levert alleen leads die voldoen aan jouw ideale klantprofiel.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Waarom handmatig leads zoeken verleden tijd is</h3>
              <p>
                Gemiddeld kost het een salesmedewerker 3 uur per dag aan research. De AI doet dit in minuten - en veel nauwkeuriger. Zo blijft je team bezig met gesprekken, niet met spreadsheets.
              </p>

              {/* CTA Block 1 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <Search className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Stop met zoeken, laat de AI voor je werken</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek hoe Lead Scrape Agents jouw pipeline automatisch vullen
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Plan een demo
                  </Button>
                </div>
              </div>

              {/* Section 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Hoe Lead Scrape Agents werken</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Data scraping: relevante bedrijfsinformatie vinden</h3>
              <p>
                De agent verzamelt publiek beschikbare gegevens van bedrijfswebsites, directories, events, vacaturesites en social media.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Data verrijking: e-mails, telefoons, functies, sectoren</h3>
              <p>
                Via betrouwbare datapartners of API's vult de AI ontbrekende velden aan: contactpersonen, functies, sectorcodes, en soms zelfs koopintenties.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Validatie: echte mensen, echte kansen</h3>
              <p>
                Geen rommeldata. De AI controleert patronen, validatie via e-mailformat en active status (zoals domein of social activity).
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Integratie met CRM en Outbound Agents</h3>
              <p>
                De leads worden direct doorgestuurd naar je CRM of gekoppeld aan je Outbound AI Agent, zodat de opvolging automatisch binnen 5 minuten start.
              </p>

              {/* Section 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">De voordelen van Lead Scrape Agents voor ondernemers</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Altijd verse leads in je pipeline</h3>
              <p>Elke dag nieuwe contacten die voldoen aan jouw criteria - zonder extra werk.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Minder handmatig werk voor je sales team</h3>
              <p>Je salesafdeling hoeft niet meer te zoeken, maar kan focussen op gesprekken en deals.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Hogere kwaliteit leads door slimme filtering</h3>
              <p>
                De AI begrijpt jouw ICP (Ideal Customer Profile) en leert na verloop van tijd welke leads de hoogste conversiekans hebben.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Directe opvolging binnen 5 minuten</h3>
              <p>
                In combinatie met de Outbound Agent worden leads direct gebeld of gemaild - precies binnen de golden 5-minute window.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. Meer groei, minder verspilling</h3>
              <p>Je marketing- en salesinspanningen worden 10x efficiënter.</p>

              {/* CTA Block 2 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Vul je pipeline automatisch</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek hoe je dagelijks nieuwe, gekwalificeerde leads krijgt
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Start vandaag
                  </Button>
                </div>
              </div>

              {/* Section 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Hoe Lead Scrape Agents integreren met andere Voxa Auris Agents</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Inbound Agents voor inkomende klanten</h3>
              <p>Nieuwe leads die bellen of mailen worden direct opgevangen en geholpen.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Outbound Agents voor directe opvolging</h3>
              <p>De AI belt nieuwe leads binnen 5 minuten op voor een kennismaking.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">RAG Agents voor kennisrijke opvolging</h3>
              <p>Antwoorden op vragen met actuele, merkveilige data uit jouw systemen.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Social Media Agents voor merkzichtbaarheid</h3>
              <p>Gebruik social data als bron voor nieuwe leaddoelen en engagementanalyse.</p>

              <p className="mt-6">Zo vormt Voxa Auris een volledige AI-pijplijn - van lead tot klant.</p>

              {/* Section 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Veelvoorkomende use cases</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">B2B leadgeneratie</h3>
              <p>
                Automatisch nieuwe bedrijven vinden die passen bij jouw niche (bijv. marketingbureaus, consultants, IT-bedrijven).
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Events en campagnes</h3>
              <p>Lijsten bouwen met potentiële bezoekers of partners voor een evenement.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Recruitment en partnerships</h3>
              <p>Vind bedrijven of kandidaten die openstaan voor samenwerking.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Lokale bedrijven en niches</h3>
              <p>Zoek gericht op regio, branche of specifieke diensten.</p>

              {/* FAQ */}
              <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: Lead Scrape Agents van Voxa Auris</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Is dit legaal en AVG-conform?</h3>
              <p>Ja, Voxa Auris gebruikt alleen publiek beschikbare data en werkt volledig AVG-conform.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Hoe vaak worden nieuwe leads gevonden?</h3>
              <p>Afhankelijk van je doelgroep: dagelijks, wekelijks of op aanvraag.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Kan de AI leads direct opvolgen?</h3>
              <p>Ja - via onze integratie met de Outbound Agent.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Welke bronnen gebruikt de Lead Scrape Agent?</h3>
              <p>Bedrijvengidsen, LinkedIn-profielen, websites, vacaturebanken en openbare databronnen.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. Hoe betrouwbaar is de data?</h3>
              <p>Elke lead wordt gevalideerd met meerdere checks en scoringsmodellen.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">6. Kan ik de criteria aanpassen?</h3>
              <p>Zeker. Je bepaalt zelf welke bedrijven of sectoren de AI moet targeten.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">7. Krijg ik inzicht in de resultaten?</h3>
              <p>
                Ja, via het Voxa Auris Dashboard zie je precies hoeveel leads, waarvandaan, en met welke kwaliteit.
              </p>

              {/* Conclusie */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusie: Altijd een stap voor op je concurrentie</h2>
              <p>
                Met de Lead Scrape Agents van Voxa Auris hoef je nooit meer te zoeken naar nieuwe klanten. De AI doet het zware werk: vinden, filteren, valideren en opvolgen. Samen met je andere Voxa Auris Agents - inbound, outbound, RAG en social - vormt het een krachtig systeem dat je bedrijf laat groeien, automatisch en meetbaar.
              </p>

              {/* Final CTA */}
              <div className="not-prose my-12 p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold mb-6">Ontdek hoe jij geen enkele lead meer mist</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Ontdek hoe je morgen al nieuwe leads kunt genereren met een Lead Scrape Agent
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Plan gratis demo
                  </Button>
                </div>
              </div>

            </motion.article>

            {/* Navigation */}
            <div className="mt-16 pt-8 border-t border-border">
              <Link
                to="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Terug naar blog overzicht
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadScrapeAgents;
