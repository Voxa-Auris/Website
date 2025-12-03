import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Phone, Database } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const RAGAgents = () => {
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
              <span className="text-foreground">RAG Agents</span>
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
                AI Technologie
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              RAG Agents: De Slimste AI die Altijd Juiste Antwoorden Geeft met Jouw Bedrijfsdata
            </h1>

            {/* Lead */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              AI kan geweldig zijn - tot het onzin gaat verzinnen. Iedere ondernemer die ChatGPT of andere generatieve AI's gebruikt, weet: ze klinken slim, maar geven soms gewoon foute informatie. Dat is precies waarom RAG Agents bestaan.
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
                Een RAG Agent van Voxa Auris combineert taalintelligentie met jouw eigen bedrijfsdata. Zo krijg je AI die actuele, correcte en merkveilige antwoorden geeft - zonder dat je alles opnieuw hoeft te trainen.
              </p>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Wat is een RAG Agent (Retrieval-Augmented Generation)?</h2>
              <p>
                Een RAG Agent is een AI-systeem dat informatie niet uit zijn eigen geheugen haalt, maar uit jouw goedgekeurde kennisbronnen. Denk aan documenten, handleidingen, beleidsteksten, productinformatie of CRM-data.
              </p>
              <p>
                In plaats van te "raden" zoals standaard AI-modellen doen, zoekt een RAG Agent eerst relevante informatie op, en gebruikt die om het antwoord te formuleren. Zo combineer je de creativiteit van generatieve AI met de betrouwbaarheid van je eigen data.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Waarom RAG beter is dan standaard AI-chat</h3>
              <p>
                Een standaard chatbot kan makkelijk fouten maken: hij weet niet wat "waar" is, alleen wat waarschijnlijk klinkt. Een RAG Agent gebruikt jouw bedrijfsinformatie als bron. Dat betekent:
              </p>
              <ul className="space-y-2 my-6">
                <li>Geen "hallucinaties" meer</li>
                <li>Altijd juiste prijzen, voorwaarden en productinfo</li>
                <li>Actuele antwoorden zonder hertraining van het model</li>
              </ul>

              {/* CTA Block 1 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <Database className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Stop met hallucinaties, start met betrouwbare AI</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek hoe RAG Agents jouw bedrijfsdata transformeren naar slimme antwoorden
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

              <h3 className="text-2xl font-bold mt-8 mb-4">Wat maakt Voxa Auris' RAG Agents uniek</h3>
              <p>Voxa Auris bouwt maatwerk RAG Agents die naadloos integreren met jouw processen. Onze agents:</p>
              <ul className="space-y-2 my-6">
                <li>Koppelen met bestaande kennisbanken, intranet of SharePoint</li>
                <li>Begrijpen je tone of voice</li>
                <li>Draaien veilig en AVG-proof</li>
                <li>En tonen elk antwoord met bronverwijzing in het dashboard</li>
              </ul>

              {/* Section 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Hoe RAG Agents werken: van vraag tot juist antwoord</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Stap 1: Vraagdetectie en intent-analyse</h3>
              <p>De AI herkent het onderwerp, de intentie en de context van de vraag.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Stap 2: Zoeken in je kennisbank of documenten</h3>
              <p>Via semantische zoektechnologie vindt de agent de meest relevante fragmenten uit jouw data.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Stap 3: Antwoord genereren met merktaal en context</h3>
              <p>Het taalmodel gebruikt die fragmenten om een compleet, natuurlijk antwoord te formuleren - precies zoals jij dat zou zeggen.</p>

              {/* Section 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Waarvoor gebruik je RAG Agents in jouw bedrijf?</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Klantenservice en interne support</h3>
              <p>AI die direct antwoord geeft op vragen over producten, beleid, facturen of procedures.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Kennisdeling binnen teams</h3>
              <p>Nooit meer eindeloos zoeken in gedeelde mappen of Slack-kanalen - de RAG Agent vindt het direct.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">FAQ-automatisering en documentatiebeheer</h3>
              <p>Laat de AI FAQ's automatisch aanvullen en documentatie up-to-date houden.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Compliance, juridische of technische kennisvragen</h3>
              <p>Zekerheid dat antwoorden correct zijn volgens jouw interne richtlijnen en regelgeving.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">HR- of onboardingvragen intern</h3>
              <p>Nieuwe medewerkers kunnen vragen stellen aan de "AI HR-assistent" en direct geholpen worden.</p>

              {/* CTA Block 2 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Transformeer je kennisbank naar een AI-assistent</h3>
                  <p className="text-muted-foreground mb-6">
                    Bespreek jouw use case en ontdek hoe RAG werkt in jouw organisatie
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Bespreek jouw situatie
                  </Button>
                </div>
              </div>

              {/* Section 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">De voordelen van een RAG Agent van Voxa Auris</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. 100% merkveilige antwoorden</h3>
              <p>De AI gebruikt alleen data die jij goedkeurt - geen publieke info, geen risico's.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Actuele kennis zonder hertraining</h3>
              <p>Nieuwe documenten worden automatisch geïndexeerd, dus de AI is altijd up-to-date.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Besparing van uren aan handmatig zoeken</h3>
              <p>Gemiddeld bespaart een RAG Agent bedrijven tot 40% aan tijd bij interne support.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Volledig integreerbaar in bestaande workflows</h3>
              <p>Gebruik hem binnen Slack, Teams, intranet of CRM - waar jij werkt.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. AVG-conform en veilig</h3>
              <p>Data blijft onder jouw controle, versleuteld en traceerbaar.</p>

              {/* Section 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Technische uitleg: hoe RAG verschilt van standaard AI</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">De kracht van retrieval (document search)</h3>
              <p>
                De RAG Agent zoekt niet op trefwoorden, maar op betekenis. Een vraag als "Hoeveel garantie geven we op model X?" koppelt hij aan documenten waarin "servicevoorwaarden" staan, ook zonder exact dat woord te gebruiken.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Contextuele generatie en data-integratie</h3>
              <p>
                Hij combineert die info met context: datum, medewerker, afdeling. Zo krijg je niet alleen een antwoord, maar ook het relevante fragment als bewijs.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Koppeling met interne systemen</h3>
              <p>Onze RAG Agents koppelen met SharePoint, Notion, Google Drive, CRM's en API's.</p>

              {/* FAQ */}
              <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: RAG Agents van Voxa Auris</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Wat betekent RAG precies?</h3>
              <p>RAG staat voor Retrieval-Augmented Generation: AI + dataopvraging uit je eigen bronnen.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Kan een RAG Agent draaien op mijn bestaande documenten?</h3>
              <p>Ja, PDF's, Word, Notion, Google Docs, CRM-data - alles kan worden geïndexeerd.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Moet ik de AI zelf trainen?</h3>
              <p>Nee, Voxa Auris doet dit volledig voor je tijdens onboarding.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Hoe veilig is mijn data?</h3>
              <p>100% AVG-conform. Je data blijft onder jouw beheer, wij gebruiken geen publieke modellen.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. Kan ik updates direct doorvoeren?</h3>
              <p>Ja. Nieuwe documenten worden automatisch toegevoegd aan de index.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">6. Kan ik dit combineren met mijn chatbot of voice agent?</h3>
              <p>Zeker - onze RAG Agents voeden ook jouw chat- en voice AI met actuele kennis.</p>

              {/* Conclusie */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusie: AI die jouw kennis echt begrijpt</h2>
              <p>
                Met een RAG Agent van Voxa Auris heb je geen generieke chatbot, maar een AI die jouw bedrijf kent - tot in de details. Geen hallucinaties, geen verkeerde informatie, maar heldere, betrouwbare antwoorden op basis van jouw kennis. Zo werk je sneller, slimmer en met volledige controle over je data.
              </p>

              {/* Final CTA */}
              <div className="not-prose my-12 p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold mb-6">Ontdek hoe jij geen enkele lead meer mist</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Plan een 30-minuten demo en ontdek hoe een RAG Agent jouw organisatie direct slimmer maakt
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

export default RAGAgents;
