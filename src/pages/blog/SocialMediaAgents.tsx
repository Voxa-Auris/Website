import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Phone, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SocialMediaAgents = () => {
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
              <span className="text-foreground">Social Media Agents</span>
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
                Marketing Automatisering
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Social Media Agents: De AI Marketingassistent die 24/7 Post, Plant en Reageert
            </h1>

            {/* Lead */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              Iedere ondernemer weet het: consistent posten op social media is belangrijk - maar in de praktijk schiet het er vaak bij in. Je bent druk met klanten, projecten of sales, en ineens is je Instagram een maand stil. Dat is precies het probleem dat de Social Media Agents van Voxa Auris oplossen.
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
                Deze AI-assistenten zorgen ervoor dat je merk altijd actief en zichtbaar blijft, zonder dat jij uren per week kwijt bent aan planning, schrijven of reageren. Ze combineren slimme data-analyse met creatieve copy en doen precies wat jij nodig hebt: posten, plannen, reageren en rapporteren.
              </p>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Wat is een Social Media Agent van Voxa Auris?</h2>
              <p>
                Een Social Media Agent is een AI-marketingassistent die taken uitvoert op jouw social mediakanalen - van contentcreatie tot interactie. Hij werkt volledig op maat, volgens jouw merkstem en strategie, en communiceert alsof het een echte medewerker is.
              </p>
              <p>
                Of je nu actief bent op Instagram, LinkedIn, TikTok, X (Twitter) of Facebook - de agent begrijpt de dynamiek van elk platform.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Waarom AI voor social media niet langer optioneel is</h3>
              <p>Social media draait om snelheid, timing en relevantie. Maar algoritmes veranderen continu en het is onmogelijk om 24/7 aanwezig te zijn. AI helpt om:</p>
              <ul className="space-y-2 my-6">
                <li>Altijd op tijd te posten</li>
                <li>Trends sneller te spotten</li>
                <li>Reageren op volgers zonder vertraging</li>
                <li>En data te gebruiken voor betere beslissingen</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">De combinatie van creativiteit en data-analyse</h3>
              <p>
                De AI-agent van Voxa Auris gebruikt data om te bepalen wanneer, wat en hoe je moet posten. Maar de teksten en visuals worden gecreëerd in jouw tone of voice - herkenbaar, menselijk en merkconsistent.
              </p>

              {/* CTA Block 1 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <Share2 className="mx-auto h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Blijf altijd zichtbaar zonder extra werk</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek hoe Social Media Agents jouw merk 24/7 actief houden
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
              <h2 className="text-3xl font-bold mt-12 mb-6">Hoe een Social Media Agent werkt</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Contentcreatie met AI: van idee tot post</h3>
              <p>
                De agent analyseert je contentkalender, trends en doelgroepgedrag. Hij stelt thema's voor, schrijft bijschriften, bedenkt hashtags en kiest bijpassende visuals.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Automatische planning en publicatie</h3>
              <p>
                Na goedkeuring plant hij alles automatisch via de Voxa Auris Dashboard-integratie met Meta, LinkedIn en TikTok.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Engagement monitoring en reacties</h3>
              <p>
                AI reageert direct op comments of DM's met gepersonaliseerde antwoorden. Bij complexe vragen schakelt hij automatisch door naar een medewerker.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Rapportage en optimalisatie via het dashboard</h3>
              <p>Je ziet in één overzicht:</p>
              <ul className="space-y-2 my-6">
                <li>Welke posts het best presteren</li>
                <li>Op welke tijden je volgers het meest actief zijn</li>
                <li>Hoe je engagementscore zich ontwikkelt</li>
              </ul>

              {/* Section 3 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">De voordelen van Social Media Agents voor ondernemers</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Consistentie zonder stress</h3>
              <p>De AI houdt jouw accounts actief - elke week, zonder uitstel of inspiratiegebrek.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Meer interactie met minder tijd</h3>
              <p>Dankzij realtime reacties en gepersonaliseerde antwoorden blijven volgers betrokken.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Betere timing en doelgroepsegmentatie</h3>
              <p>De agent leert wanneer jouw doelgroep online is en past de postmomenten daarop aan.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Bespaar uren op planning en rapportage</h3>
              <p>Geen handmatig inplannen meer. Geen spreadsheets. Alles wordt automatisch gerapporteerd.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. Maatwerk per platform en merkstijl</h3>
              <p>LinkedIn krijgt een andere toon dan Instagram - de AI herkent dat verschil.</p>

              {/* CTA Block 2 */}
              <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Schaal je social media zonder extra medewerkers</h3>
                  <p className="text-muted-foreground mb-6">
                    Ontdek hoe je met AI consistent blijft posten en groeien
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
              <h2 className="text-3xl font-bold mt-12 mb-6">Integraties met je bestaande tools</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Koppelingen met Meta, LinkedIn, TikTok en X</h3>
              <p>De Social Media Agents koppelen met officiële API's, zodat jij veilig kunt posten zonder risico op blokkades.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Samenwerking met je marketing- of salesflows</h3>
              <p>De AI kan leads doorsturen vanuit reacties of DM's naar je CRM of Outbound Agent.</p>

              {/* Section 5 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">AI en menselijke creativiteit: de perfecte balans</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Tone of voice-behoud</h3>
              <p>
                Elke merk heeft zijn eigen stijl - en dat behouden we. Of je nu zakelijk bent of speels, de AI past zich aan op je tone of voice.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">AI als aanvulling, niet vervanging</h3>
              <p>AI doet het repetitieve werk, zodat jouw team zich kan focussen op strategie, storytelling en community.</p>

              {/* Section 6 */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Voor welke sectoren zijn Social Media Agents ideaal?</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">Dienstverlening en MKB</h3>
              <p>Lokale zichtbaarheid verhogen zonder extra personeelskosten.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">E-commerce en retail</h3>
              <p>Productlanceringen, reviews, seizoensacties - allemaal automatisch gepost.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Events, hospitality en personal brands</h3>
              <p>Altijd promotie, nooit te laat, altijd in lijn met je agenda.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Agencies en marketingbureaus</h3>
              <p>Schaal social media management zonder extra medewerkers.</p>

              {/* FAQ */}
              <h2 className="text-3xl font-bold mt-12 mb-6">FAQ: Social Media Agents</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4">1. Kunnen jullie ook posts automatisch publiceren?</h3>
              <p>Ja, de AI kan posts genereren en publiceren via veilige API-integraties.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Klinken de teksten niet te "AI-achtig"?</h3>
              <p>Nee - we trainen op jouw tone of voice. Menselijk, herkenbaar en creatief.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Kan ik goedkeuring geven voor publicatie?</h3>
              <p>Zeker. Je bepaalt zelf of posts automatisch of handmatig live gaan.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">4. Werkt dit met elk platform?</h3>
              <p>Ja, o.a. Meta, TikTok, LinkedIn, X en Pinterest.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">5. Kan de AI ook ad copy schrijven?</h3>
              <p>Ja, inclusief A/B-testen van varianten en CTA's.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">6. Hoe veilig is dit?</h3>
              <p>De API's zijn officieel, en alles is AVG-conform.</p>

              {/* Conclusie */}
              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusie: Social media op autopilot met een menselijke touch</h2>
              <p>
                De Social Media Agents van Voxa Auris nemen het drukke, repetitieve werk over en houden jouw merk 24/7 actief. Ze posten, plannen, reageren en analyseren - volledig afgestemd op jouw merkstem. Zo houd jij tijd over voor groei, strategie en echte interactie.
              </p>

              {/* Final CTA */}
              <div className="not-prose my-12 p-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold mb-6">Ontdek hoe jij geen enkele lead meer mist</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Plan een 15-min demo en ontdek hoe jouw merk altijd zichtbaar blijft zonder extra werk
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

export default SocialMediaAgents;
