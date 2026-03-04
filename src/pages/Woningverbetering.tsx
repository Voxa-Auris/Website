import { motion } from "framer-motion";
import { Home, Calendar, CheckCircle, MessageSquare, Zap, Clock, ArrowDown, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GHL_FORM_URL = "GHL_FORM_URL_HERE";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Woningverbetering = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* 1. Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 relative text-center max-w-4xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8"
          >
            <Home className="w-4 h-4" />
            <span className="text-sm font-semibold">Speciaal voor kozijnen, dakkapellen &amp; woningverbetering</span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 glow-text leading-tight"
          >
            Terwijl jij je offerte nog aan het uitrekenen bent,
            <span className="text-primary block mt-2">heeft de concurrent al gebeld.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Klanten vragen 3-5 offertes aan. Wie als eerste belt, wint de opdracht. Jouw AI voice agent neemt binnen seconden contact op — automatisch, 24/7.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 glow-gold"
              onClick={() => {
                document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Vraag gratis demo aan <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Pain Points */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Herken jij dit?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Woningverbetering bedrijven verliezen dagelijks opdrachten aan concurrenten die simpelweg sneller reageren.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Home,
                title: "3-5 offertes per klant",
                desc: "De gemiddelde woningverbeteraar vraagt meerdere offertes aan. De kans dat ze bij jou blijven hangt af van wie het snelst reageert.",
                delay: 0,
              },
              {
                icon: Clock,
                title: "Leads verlopen terwijl jij werkt",
                desc: "Op een dakkapel-installatie kun je niet bellen. Ondertussen heeft de concurrent al contact opgenomen en een afspraak ingepland.",
                delay: 0.15,
              },
              {
                icon: Zap,
                title: "Handmatige opvolging kost uren",
                desc: "Terugbellen, kwalificeren, inplannen: dat zijn uren per week die je niet hebt — en leads die je verliest.",
                delay: 0.3,
              },
            ].map(({ icon: Icon, title, desc, delay }) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ duration: 0.8, delay }}
                className="rounded-2xl border border-primary/30 bg-card p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Hoe het werkt */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hoe het werkt
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Van offerte-aanvraag tot warme afspraak — volledig automatisch.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Klant vraagt offerte aan",
                desc: "Via jouw website of formulier. Binnen seconden pakt de AI voice agent de lead op.",
                delay: 0,
              },
              {
                step: "02",
                title: "AI belt direct terug",
                desc: "Stelt de juiste vragen (type kozijn, maat, materiaal, urgentie), kwalificeert de lead en plant een afspraak in jouw agenda.",
                delay: 0.15,
              },
              {
                step: "03",
                title: "Jij krijgt een warme afspraak",
                desc: "Geen koude lead meer. De klant is al gesproken, geïnteresseerd en ingepland. Jij hoeft alleen nog op te draven.",
                delay: 0.3,
              },
            ].map(({ step, title, desc, delay }) => (
              <motion.div
                key={step}
                {...fadeUp}
                transition={{ duration: 0.8, delay }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{step}</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Wat de voice agent doet */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wat de voice agent doet voor jou
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Afgestemd op kozijnen, dakkapellen, verandas, zonnepanelen en thuisbatterijen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Razendsnel opvolgen",
                desc: "Reageert binnen seconden op elke nieuwe lead, ook 's avonds en in het weekend.",
                delay: 0,
              },
              {
                icon: MessageSquare,
                title: "Stelt de juiste vragen",
                desc: "Type product, afmeting, urgentie, budget — alles wat jij nodig hebt voor een goede offerte.",
                delay: 0.1,
              },
              {
                icon: Calendar,
                title: "Plant afspraken automatisch in",
                desc: "Koppelt aan jouw agenda en boekt het tijdslot direct.",
                delay: 0.2,
              },
              {
                icon: CheckCircle,
                title: "Kwalificeert leads",
                desc: "Filtert serieuze klanten van prijskijkers, zodat jij je tijd investeert waar het telt.",
                delay: 0.3,
              },
              {
                icon: Home,
                title: "Geen concurrent heeft de kans",
                desc: "Omdat de klant al contact heeft gehad, is de drempel om elders te zoeken veel hoger.",
                delay: 0.4,
              },
              {
                icon: LayoutDashboard,
                title: "Volledig overzicht in dashboard",
                desc: "Gesprekken, aanvragen en afspraken inzichtelijk via jouw Supabase dashboard.",
                delay: 0.5,
              },
            ].map(({ icon: Icon, title, desc, delay }) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ duration: 0.8, delay }}
                className="rounded-2xl border border-primary/30 bg-card p-5 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Demo CTA + Form */}
      <section id="demo-form" className="py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 relative max-w-2xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">
              Ervaar het zelf —
              <span className="text-primary block mt-1">laat je terugbellen</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Vul je gegevens in en onze AI belt jou terug met een live demo. Vrijblijvend, binnen 2 minuten.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-primary/30 bg-card/60 backdrop-blur p-2"
          >
            <iframe
              src={GHL_FORM_URL}
              className="w-full h-[700px] border-0 bg-transparent rounded-2xl"
              title="Demo aanvragen"
            />
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Na invullen ontvang je automatisch een telefoontje van onze AI voice agent.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Woningverbetering;
