import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const InboundVoiceAgents = () => {
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
              <span className="text-foreground">Inbound Voice Agents</span>
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
                AI Voice Agents
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Inbound Voice Agents: De Slimme AI-Receptioniste die Nooit een Klant Mist
            </h1>

            {/* Lead */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              In een wereld waar klanten direct antwoord verwachten, kan één gemiste oproep het verschil betekenen tussen een nieuwe klant en een verloren kans.
              De Inbound Voice Agent van Voxa Auris verandert dat volledig.
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
                Deze slimme AI-receptioniste neemt elk telefoontje op, herkent de klant, checkt agenda's, plant afspraken in en beantwoordt vragen - allemaal binnen seconden. Of je nu een drukke ondernemer bent met volle agenda's of een bedrijf runt waar bereikbaarheid cruciaal is: een Inbound Voice Agent zorgt ervoor dat je nooit meer een klant mist.
              </p>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Wat is een Inbound Voice Agent van Voxa Auris?</h2>
              <p>
                Een Inbound Voice Agent is een AI-gestuurde spraakassistent die binnenkomende telefoongesprekken volledig zelfstandig afhandelt. Bij Voxa Auris gaat dat verder dan standaard telefonische beantwoording. Onze voice agent begrijpt context, spreekt natuurlijk Nederlands, en weet precies hoe jouw bedrijf werkt - omdat hij op maat is gemaakt.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Hoe werkt een AI-receptioniste in de praktijk</h3>
              <p>Wanneer een klant belt, neemt de agent op in jouw bedrijfsnaam. Hij kan:</p>
              <ul className="space-y-2 my-6">
                <li>Afspraken plannen of verzetten (binnen jouw beleid)</li>
                <li>Klantdata raadplegen (zoals bestellingen of dossiers)</li>
                <li>Antwoorden geven op veelgestelde vragen</li>
                <li>Notities doorgeven aan je team</li>
              </ul>
              <p>
                Dankzij machine learning wordt de agent steeds slimmer - en dankzij het Voxa Auris Dashboard zie je exact wat er gebeurt: hoeveel gesprekken, hoeveel afspraken en welke vragen het vaakst worden gesteld.
              </p>

              {/* CTA Block 1 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Mis nooit meer een klant</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek hoe een Inbound Voice Agent jouw bereikbaarheid transformeert
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Plan een gratis demo
                  </Button>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Verschil tussen een AI-agent en een menselijke receptioniste</h3>
              <p>Een AI-agent:</p>
              <ul className="space-y-2 my-6">
                <li>Werkt 24/7, zonder pauzes of ziekteverzuim</li>
                <li>Kan meerdere gesprekken tegelijk afhandelen</li>
                <li>Is altijd consistent in toon en beleid</li>
                <li>Integreert met je agenda en CRM</li>
              </ul>
              <p>Kortom: geen vervanging van de menselijke warmte, maar een uitbreiding van je bereikbaarheid.</p>

              {/* Section 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Waarom elk bedrijf een Inbound Voice Agent nodig heeft</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">De realiteit: gemiste oproepen = gemiste omzet</h3>
              <p>
                Onderzoek toont aan dat bedrijven gemiddeld 30% van hun potentiële klanten verliezen door gemiste telefoontjes. Elke gemiste oproep is een gemiste kans op een verkoop, een afspraak of een tevreden klant. De Voxa Auris Voice Agent zorgt ervoor dat geen enkel telefoontje meer onbeantwoord blijft.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Altijd bereikbaar, zonder extra personeel</h3>
              <p>
                In plaats van extra medewerkers in te huren of een callcenter te betalen, neemt de AI het over. Je blijft professioneel bereikbaar, maar zonder hoge personeelskosten. Ideaal voor groeiende bedrijven die nog geen 24/7 klantenservice kunnen betalen.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Data-inzichten via het Voxa Auris Dashboard</h3>
              <p>
                Een uniek voordeel van Voxa Auris is het dashboard: een helder overzicht van alle gesprekken, afspraken en klantvragen. Je ziet trends, kunt beleid aanpassen, en ontdekt waar je klanten het meest om vragen - zodat je bedrijf slimmer kan groeien.
              </p>

              {/* Section 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">De voordelen van de Voxa Auris Inbound Voice Agent</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Persoonlijke onboarding en maatwerk</h3>
              <p>
                Geen standaard oplossing. Voxa Auris neemt de tijd om jouw bedrijf, tone of voice en processen te begrijpen. We bouwen de AI precies zoals jij hem nodig hebt.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Betere klantbeleving door natuurlijke gesprekken</h3>
              <p>
                Onze voice agents spreken vloeiend Nederlands, met een toon die past bij jouw merk. Ze luisteren actief, herkennen emoties, en reageren menselijk.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Efficiënt agendabeheer en afspraakplanning</h3>
              <p>
                De agent koppelt direct met je digitale agenda. Hij kan afspraken plannen, verzetten of annuleren - volledig binnen jouw bedrijfsregels.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Klantvragen direct beantwoord</h3>
              <p>
                Veel vragen zijn routinematig: openingstijden, prijzen, status van bestellingen. De AI-agent beantwoordt ze onmiddellijk, zodat jij tijd bespaart voor belangrijkere zaken.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. Integratie met bestaande systemen</h3>
              <p>
                Of je nu werkt met Google Calendar, HubSpot of een ander CRM - de AI koppelt naadloos. Zo blijft je workflow intact en wordt de AI echt onderdeel van je team.
              </p>

              {/* CTA Block 2 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Klaar om 24/7 bereikbaar te zijn?</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek hoe Voxa Auris jouw klantenservice transformeert
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Start vandaag nog
                  </Button>
                </div>
              </div>

              {/* Section 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Praktische toepassingen in verschillende sectoren</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Voor dienstverleners</h3>
              <p>Van kappers tot consultants - klanten kunnen direct een afspraak plannen zonder te wachten.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Voor e-commerce bedrijven</h3>
              <p>Klanten kunnen bellen om hun bestelling te volgen of vragen te stellen, zonder dat er iemand aan de lijn hoeft te komen.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Voor medische praktijken en salons</h3>
              <p>De AI-receptioniste kan afspraken inboeken, herinneringen sturen of patiënten geruststellen.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Voor makelaars en sales teams</h3>
              <p>Gemiste oproepen van potentiële kopers of huurders behoren tot het verleden.</p>

              {/* Section 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: Veelgestelde vragen over Inbound Voice Agents</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Werkt de AI alleen tijdens kantooruren?</h3>
              <p>Nee, de AI werkt 24/7 - dag en nacht bereikbaar.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Hoe natuurlijk klinkt de stem?</h3>
              <p>Onze voice agents klinken bijna menselijk, met intonatie en empathie.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Kan de AI meerdere talen spreken?</h3>
              <p>Ja, Nederlands en Engels zijn standaard beschikbaar.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Hoe veilig is het gebruik van AI voor klantgegevens?</h3>
              <p>Voxa Auris gebruikt veilige, AVG-conforme technologie.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. Hoe lang duurt implementatie?</h3>
              <p>Gemiddeld 1 tot 2 weken afhankelijk van de complexiteit van jouw processen.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">6. Wat kost een Inbound Voice Agent?</h3>
              <p>De prijs is afhankelijk van jouw gebruik en functies - maar altijd voordeliger dan een menselijke kracht.</p>

              {/* Conclusie */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusie: Slimmer omgaan met klantcontact dankzij Voxa Auris</h2>
              <p>
                De Inbound Voice Agent van Voxa Auris is meer dan technologie - het is een slimme collega die jouw bedrijf laat groeien. Nooit meer een gemiste oproep, altijd bereikbaar, en altijd professioneel. Of je nu solo-ondernemer bent of een groeiend team hebt - met Voxa Auris kies je voor efficiëntie, bereikbaarheid en klanttevredenheid.
              </p>

              {/* Final CTA */}
              <div className="not-prose my-12 p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold mb-6">Ontdek hoe jij geen enkele lead meer mist</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Plan een gratis 30-minuten demo en ontdek hoe een Inbound Voice Agent jouw bedrijf kan transformeren
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

export default InboundVoiceAgents;
