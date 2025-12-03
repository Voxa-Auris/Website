import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OutboundAIAgents = () => {
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
              <span className="text-foreground">Outbound AI Agents</span>
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
              Outbound AI Agents: Nooit Meer een Lead Missen binnen de Golden 5-Minuten Window
            </h1>

            {/* Lead */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Iedere ondernemer kent het: een nieuwe lead vult een contactformulier in, en tegen de tijd dat je belt, heeft de concurrent al gereageerd. Dat is precies waar de Outbound AI Agents van Voxa Auris het verschil maken.
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
                Ze bellen jouw leads binnen 5 minuten nadat ze binnenkomen, het zogenaamde golden window waarin de kans op succes maximaal is. Snelheid, efficiëntie en menselijke communicatie, volledig geautomatiseerd.
              </p>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Wat is een Outbound AI Agent van Voxa Auris?</h2>
              <p>
                Een Outbound AI Agent is een digitale collega die automatisch nieuwe leads opvolgt zodra ze binnenkomen. Hij belt direct, praat natuurlijk Nederlands en kan alle klantgegevens inzien. Of het nu gaat om een ingevuld formulier, een chatgesprek of een inkomend e-mailcontact: jouw AI-agent reageert sneller dan wie dan ook.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">De "Golden 5-Minuten Window": waarom snelheid alles is</h3>
              <p>
                Uit wereldwijd onderzoek blijkt dat leads <strong>21x meer kans</strong> hebben om klant te worden als ze binnen 5 minuten worden gebeld. Na 10 minuten halveert de kans, en na 30 minuten daalt die met 90%. De reden? De lead is dan afgeleid, bezig met iets anders of al in gesprek met een concurrent.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">De psychologie achter snelle opvolging</h3>
              <p>
                Mensen waarderen direct contact. Een snelle reactie voelt professioneel, betrouwbaar en betrokken. En precies dat gevoel vertaalt zich in meer afspraken en hogere omzet.
              </p>

              {/* CTA Block 1 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <Clock className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Win de race om de lead</h3>
                  <p className="text-muted-foreground mb-6">
                    Reageer binnen 5 minuten en verhoog je conversie met 21x
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Ontdek hoe het werkt
                  </Button>
                </div>
              </div>

              {/* Section 2 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">De cijfers die alles zeggen over leadopvolging</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">78% kiest het bedrijf dat het eerst belt</h3>
              <p>
                Wanneer een klant meerdere offertes aanvraagt, kiest 78% voor degene die als eerste belt. De eerste indruk telt, en Voxa Auris zorgt dat die van jou is.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">21x meer kans op afspraken bij snelle reactie</h3>
              <p>
                Bedrijven die leads binnen 5 minuten opvolgen, boeken 21x meer afspraken dan bedrijven die wachten.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">90% minder kans op conversie na 30 minuten</h3>
              <p>
                Wachten betekent verliezen. Binnen 30 minuten daalt de kans op een reactie met 90%, en na een uur is de lead praktisch verdwenen.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Na 48 uur is een warme lead weer koud</h3>
              <p>
                Na twee dagen is de interesse weg, het momentum verloren. Een Outbound AI Agent voorkomt dat en houdt je pipeline levend.
              </p>

              {/* Section 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Hoe werken Outbound AI Agents van Voxa Auris in de praktijk?</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Van lead tot gesprek in seconden</h3>
              <p>
                Zodra een lead binnenkomt via je website, CRM of formulier, start de AI-agent automatisch een gesprek. Hij belt namens jouw bedrijf, gebruikt je tone of voice en registreert het resultaat direct in het dashboard.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Integratie met je CRM en formulieren</h3>
              <p>
                Of je nu werkt met HubSpot, Pipedrive, Salesforce of een simpel contactformulier - Voxa Auris koppelt met vrijwel elk systeem.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Menselijke toon, slimme logica</h3>
              <p>
                Onze AI's klinken niet robotisch. Ze luisteren, reageren gepast, en kunnen zelfs vervolgvragen stellen of afspraken inplannen.
              </p>

              {/* CTA Block 2 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Automatiseer je leadopvolging</h3>
                  <p className="text-muted-foreground mb-6">
                    Laat geen enkele lead meer liggen - reageer altijd als eerste
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Plan een demo
                  </Button>
                </div>
              </div>

              {/* Section 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">De voordelen voor ondernemers en sales teams</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Geen leads meer missen</h3>
              <p>
                Elke lead krijgt direct aandacht - 24/7. Zelfs buiten kantooruren, zodat je nooit een kans laat liggen.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Betere klantbeleving door directe opvolging</h3>
              <p>
                Een snelle reactie zorgt voor vertrouwen. Leads voelen zich gehoord en serieus genomen, wat hun bereidheid tot samenwerking vergroot.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Meer afspraken, minder kosten</h3>
              <p>
                Geen dure salesmedewerkers die constant moeten nabellen. De AI-agent doet het werk sneller, goedkoper en consistenter.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Inzicht via het Voxa Auris Dashboard</h3>
              <p>
                Je ziet exact hoeveel leads zijn opgevolgd, hoeveel gesprekken succesvol waren en waar verbetering mogelijk is.
              </p>

              {/* Section 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Use cases in verschillende sectoren</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Voor makelaars en vastgoedbedrijven</h3>
              <p>
                Wanneer iemand reageert op een woning, belt de AI binnen 5 minuten terug om een bezichtiging te plannen.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Voor marketingbureaus en leadgeneratie</h3>
              <p>
                Volg inkomende leads direct op - nog voordat ze de concurrent bereiken.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Voor coaches, consultants en dienstverleners</h3>
              <p>
                Nieuwe aanmeldingen? De AI plant meteen een intakegesprek of kennismakingscall.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Voor e-commerce en online services</h3>
              <p>
                Bel leads die hun winkelmandje verlaten of een offerte aanvragen direct op.
              </p>

              {/* FAQ */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Veelgestelde vragen (FAQ)</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Wat gebeurt er als een lead niet opneemt?</h3>
              <p>
                De AI probeert het later opnieuw of stuurt automatisch een opvolgmail of sms.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Kan de AI afspraken inplannen in mijn agenda?</h3>
              <p>
                Ja, via integraties met Google Calendar, Outlook of je CRM.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Klinkt de AI natuurlijk?</h3>
              <p>
                Absoluut - de stem is vloeiend en past zich aan per gesprek.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Kan de AI me helpen prioriteiten te stellen in leads?</h3>
              <p>
                Ja, hij scoort leads op basis van activiteit en urgentie.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. Wat is het verschil tussen Voxa Auris en andere aanbieders?</h3>
              <p>
                Wij leveren volledig maatwerk met persoonlijke onboarding en realtime inzicht via ons dashboard.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">6. Hoe snel kan ik starten?</h3>
              <p>
                Binnen één week na onboarding kan jouw Outbound Agent live gaan.
              </p>

              {/* Conclusie */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusie: Succes begint binnen 5 minuten</h2>
              <p>
                In de wereld van sales telt elke minuut. De Outbound AI Agents van Voxa Auris zorgen ervoor dat jij altijd als eerste reageert - professioneel, snel en met een menselijke touch. Zo verlies je nooit meer een warme lead, en maximaliseer je je kansen op groei.
              </p>

              {/* Final CTA */}
              <div className="not-prose my-12 p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold mb-6">Ontdek hoe jij geen enkele lead meer mist</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Plan een gratis 30-minuten demo en ontdek hoe Outbound AI Agents je conversie met 21x kunnen verhogen
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

export default OutboundAIAgents;
