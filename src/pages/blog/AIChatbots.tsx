import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AIChatbots = () => {
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
              <span className="text-foreground">AI Chatbots voor Bedrijven</span>
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
                AI Chatbots
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              AI Chatbots voor Bedrijven: 17 Krachtige Use Cases en Implementatietips (2025)
            </h1>

            {/* Lead */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              AI is niet meer "nice to have". Voor ondernemers die sneller willen groeien en tegelijk support-kosten willen verlagen, zijn AI Chatbots voor bedrijven een slimme, schaalbare oplossing.
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
                Ze reageren direct, 24/7, in jouw tone of voice en koppelen met je systemen. Bij Voxa Auris zetten we chatbots in als praktische aanvulling op onze voice agents: chat vangt snelle vragen op via je website of WhatsApp, terwijl voice complexe cases of telefoongesprekken overneemt. Resultaat: kortere wachttijden, meer afspraken en hogere klanttevredenheid.
              </p>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Wat zijn AI Chatbots voor bedrijven (en waarom nu)?</h2>
              <p>
                Een AI chatbot is software die gesprekken voert alsof je met een medewerker praat. Dankzij taalmodellen, intent-detectie en je eigen kennisbank (via RAG: Retrieval-Augmented Generation) kan de bot context snappen, vervolgvragen stellen en taken uitvoeren - zoals afspraak plannen, offerte sturen of orderstatus checken.
              </p>

              <p>
                <strong>Waarom nu?</strong> Klanten verwachten directe service via hun voorkeurskanaal (website, WhatsApp, Instagram DM). Met AI automatiseer je dat zonder dat kwaliteit of merkbeleving eronder lijdt.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Website-chat vs. WhatsApp-chat: wanneer kies je wat?</h3>
              <ul className="space-y-2 my-6">
                <li><strong>Website-chat:</strong> ideaal voor nieuwe bezoekers, leadvangst en productvragen. Triggert op CTA's of exit-intent.</li>
                <li><strong>WhatsApp-chat:</strong> perfect voor bestaande klanten en opvolging. Persistent gesprek, rijke notificaties en hogere openrates.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">De rol van AI Chatbots binnen de Voxa Auris stack</h3>
              <p>Bij Voxa Auris zijn AI Chatbots voor bedrijven geen losstaand speeltje. Ze werken samen met:</p>
              <ul className="space-y-2 my-6">
                <li>Inbound Voice Agent (AI-receptioniste)</li>
                <li>Outbound Agent (golden 5-min window opvolging)</li>
                <li>RAG-agent (merkveilige, actuele antwoorden uit jouw data)</li>
                <li>Dashboard (inzichten, KPI's, AB-tests)</li>
              </ul>
              <p>Zo krijg je één coherent systeem dat conversie en klantervaring verbetert.</p>

              {/* CTA Block 1 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <MessageSquare className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Automatiseer je klantenservice</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek hoe AI Chatbots jouw support-kosten verlagen en conversie verhogen
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
              <h2 className="text-3xl font-bold mt-12 mb-6">17 praktijkgerichte use cases die vandaag al werken</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1-5: Leadkwalificatie, FAQ, offertes, afspraken, orderstatus</h3>
              <ul className="space-y-2 my-6">
                <li><strong>Leadkwalificatie</strong> - Stel pre-kwalificerende vragen (budget, timing, behoefte) en routeer slim.</li>
                <li><strong>FAQ-automatisering</strong> - Openingstijden, prijzen, levertijden, garanties: direct beantwoord.</li>
                <li><strong>Offerte-aanvraag</strong> - Verzamel de juiste velden, stuur PDF of CRM-deal aanmaken.</li>
                <li><strong>Afspraakplanning</strong> - Integreer met Google/Outlook en toon beschikbare slots.</li>
                <li><strong>Orderstatus</strong> - Koppel met e-commerce/ERP en geef realtime updates.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">6-10: Onboarding, upsell/cross-sell, retouren, heractivatie, abandon cart</h3>
              <ul className="space-y-2 my-6">
                <li><strong>Onboarding-assistent</strong> - Stapsgewijs starten, checklists, video's, vervolgtips.</li>
                <li><strong>Upsell/Cross-sell</strong> - Relevante suggesties op basis van eerdere aankopen/gedrag.</li>
                <li><strong>Retouren en support</strong> - Automatisch RMA-nummer en label genereren.</li>
                <li><strong>Heractivatie</strong> - Benader inactieve klanten met een persoonlijke incentive.</li>
                <li><strong>Abandon cart</strong> - Vang wegklikkers op met vriendelijke reminder + kortingscode.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">11-17: After-hours support, events, RAG-Q&A, feedback, NPS, betalingen, escalaties</h3>
              <ul className="space-y-2 my-6">
                <li><strong>After-hours</strong> - Vang 's avonds/weekend service-vragen op, zet urgent door.</li>
                <li><strong>Eventregistratie</strong> - Registreer, bevestig, verstuur reminders en QR-tickets.</li>
                <li><strong>Kennisbank Q&A (RAG)</strong> - Betrouwbare antwoorden uit je eigen documenten.</li>
                <li><strong>Feedback verzamelen</strong> - Vraag gericht om reviews na afhandeling.</li>
                <li><strong>NPS/CSAT</strong> - Meet klanttevredenheid en log resultaten in het dashboard.</li>
                <li><strong>Betalingen</strong> - Start veilige betaallinks via PSP-koppeling (bijv. Mollie/Stripe).</li>
                <li><strong>Slimme escalaties</strong> - Herken frustratie/complexiteit en zet door naar medewerker met context.</li>
              </ul>

              {/* CTA Block 2 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">17 manieren om te groeien</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek welke use cases het beste passen bij jouw bedrijf
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Bespreek jouw use case
                  </Button>
                </div>
              </div>

              {/* Section 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Conversatie-design: zo bouw je flows die wel converteren</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Intent-detectie, tone of voice, en fallback-strategieën</h3>
              <ul className="space-y-2 my-6">
                <li><strong>Intent-detectie:</strong> Herken het doel achter de vraag ("prijs", "afspraak", "retour").</li>
                <li><strong>Tone of voice:</strong> Stem af op je merk: vriendelijk, direct en oplossingsgericht.</li>
                <li><strong>Fallback:</strong> Als het onduidelijk is, stel verduidelijkende vragen of toon keuzeknoppen.</li>
                <li><strong>Begrenzing:</strong> Leg vast wat de bot wel/niet mag toezeggen (beleid, kortingen, privacy).</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Human handoff zonder frictie</h3>
              <p>Soms is een mens beter. Zorg voor:</p>
              <ul className="space-y-2 my-6">
                <li>Heldere escalatie (mens beschikbaarheid + wachttijd)</li>
                <li>Contextoverdracht (gesprekslog, klantkaart, intent)</li>
                <li>Kanaalkeuze (live chat, telefoon, e-mail)</li>
              </ul>
              <p>Bij Voxa Auris bouwen we handoff in je flow, zodat je AI Chatbots voor bedrijven en je team naadloos samenwerken.</p>

              {/* Section 4 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Integraties: CRM, agenda, betalingen en je kennisbank (RAG)</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Koppelingen met HubSpot/Pipedrive, Google Calendar, PSP's</h3>
              <p>Je chatbot is pas echt nuttig als hij dingen kan doen:</p>
              <ul className="space-y-2 my-6">
                <li><strong>CRM</strong> (HubSpot, Pipedrive, Salesforce): leads aanmaken, deals updaten, notities loggen.</li>
                <li><strong>Agenda</strong> (Google/Outlook): afspraak inboeken, verzetten, reminders.</li>
                <li><strong>PSP</strong> (Mollie, Stripe): veilige betaalflows starten, betaalstatus ophalen.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">RAG: actuele, merkveilige antwoorden uit je eigen data</h3>
              <p>
                Met RAG gebruikt de bot alleen bronnen die jij goedkeurt: handleidingen, beleid, prijzen, blogs, PDF's. Zo krijg je merkveilige antwoorden (geen hallucinaties) en kun je updates direct doorvoeren zonder hertraining van het hele model.
              </p>

              {/* Section 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">KPI's en het Voxa Auris Dashboard</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Conversieratio, first response time, containment, AHT</h3>
              <p>In het Voxa Auris Dashboard zie je o.a.:</p>
              <ul className="space-y-2 my-6">
                <li><strong>First Response Time (FRT)</strong> - Hoe snel krijgt een klant antwoord?</li>
                <li><strong>Containment Rate</strong> - % gesprekken dat zonder medewerker opgelost is.</li>
                <li><strong>Conversieratio</strong> - % gesprekken dat leidt tot afspraak/aanvraag/verkoop.</li>
                <li><strong>Average Handle Time (AHT)</strong> - Gemiddelde afhandeltijd per case.</li>
                <li><strong>CSAT/NPS</strong> - Hoe tevreden zijn je klanten?</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">AB-testen van promoties en microcopy</h3>
              <p>
                Test begroetingen, CTA-teksten en incentives. Vaak levert kleine copy-tuning al +5-15% conversie op. Ons team helpt bij hypothese, test, analyse en rollout.
              </p>

              {/* CTA Block 3 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Meet wat werkt, optimaliseer wat niet werkt</h3>
                  <p className="text-muted-foreground mb-6">
                    Krijg realtime inzicht in je chatbot performance via ons dashboard
                  </p>
                  <Button
                    onClick={handleCTA}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Zie het dashboard in actie
                  </Button>
                </div>
              </div>

              {/* Section 6 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Best practices en veelgemaakte fouten (do's en don'ts)</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Do's</h3>
              <ul className="space-y-2 my-6">
                <li>Begin met 3-5 hoogwaardige use cases (impact × haalbaarheid).</li>
                <li>Toon snelle paden ("Afspraken", "Offerte", "Orderstatus") bovenaan.</li>
                <li>Schrijf menselijk: kort, actief, met empathie.</li>
                <li>Log alles in je CRM voor follow-up en segmentatie.</li>
                <li>Meet en itereer: elke 2-4 weken optimaliseren.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Don'ts</h3>
              <ul className="space-y-2 my-6">
                <li>Niet te veel keuzeknoppen (keuzestress).</li>
                <li>Geen "verstopte" handoff - maak menselijk contact zichtbaar.</li>
                <li>Geen los zand: zorg voor koppelingen, anders is het alleen Q&A.</li>
                <li>Vermijd "sorry, ik snap het niet" zonder vervolgoptie.</li>
              </ul>

              {/* FAQ */}
              <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: AI Chatbots voor bedrijven</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Kunnen AI Chatbots voor bedrijven ook via WhatsApp werken?</h3>
              <p>
                Ja, WhatsApp is een van de beste kanalen voor service en opvolging. We koppelen via de officiële Business-API.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Hoe natuurlijk klinkt de chatbot?</h3>
              <p>
                We trainen op jouw tone of voice. Korte, heldere zinnen, empathie en context - geen robottaal.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Heb ik een grote kennisbank nodig voor RAG?</h3>
              <p>
                Niet per se. We starten met de belangrijkste pagina's (FAQ, policy, prijzen) en breiden iteratief uit.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Hoe zit het met AVG en privacy?</h3>
              <p>
                We werken standaard AVG-conform: dataminimalisatie, bewaartermijnen, rollen/rechten en versleuteling.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. Kunnen jullie ook afspraken inplannen en betalingen starten?</h3>
              <p>
                Zeker. Via agenda- en PSP-integraties kan de bot direct boeken en veilige betaallinks sturen.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">6. Wat kost het?</h3>
              <p>
                Afhankelijk van volume en features. Belangrijk: klanten zien vaak snelle ROI door lagere supportkosten en hogere conversie.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">7. Is een chatbot niet "te onpersoonlijk"?</h3>
              <p>
                Niet als je 'm goed ontwerpt. Met empathische microcopy, duidelijke keuzes en snelle handoff voelt het als een echte medewerker.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">8. Hoe snel kan dit live?</h3>
              <p>
                Meestal binnen 1-2 weken na onboarding, afhankelijk van koppelingen en content.
              </p>

              {/* Conclusie */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusie: combineer chat + voice voor maximale impact</h2>
              <p>
                AI Chatbots voor bedrijven zijn je 24/7 frontlinie: ze beantwoorden vragen, plannen afspraken, kwalificeren leads en starten betalingen. In combinatie met de voice agents van Voxa Auris heb je één coherent systeem dat meer omzet, lagere wachttijden en hogere klanttevredenheid oplevert. Start klein, koppel goed, meet slim - en schaal wat werkt.
              </p>

              {/* Final CTA */}
              <div className="not-prose my-12 p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold mb-6">Ontdek hoe jij geen enkele lead meer mist</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Plan een gratis 30-minuten demo en ontdek hoe AI Chatbots jouw bedrijf kunnen transformeren met persoonlijke onboarding, maatwerk en een dashboard dat alles inzichtelijk maakt
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

export default AIChatbots;
