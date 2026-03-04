import { motion } from "framer-motion";
import { PhoneOff, Calendar, CheckCircle, Wrench, Zap, Clock, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GHL_FORM_URL = "GHL_FORM_URL_HERE";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Installatiebedrijven = () => {
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
            <Wrench className="w-4 h-4" />
            <span className="text-sm font-semibold">Speciaal voor installatiebedrijven</span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 glow-text leading-tight"
          >
            Mis jij ook gesprekken
            <span className="text-primary block mt-2">terwijl je op het dak staat?</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Elke gemiste oproep is een gemiste offerte. Onze AI voice agent pakt de telefoon op — altijd. Ook als jij op locatie bent.
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
              Bel mij terug met een demo <ArrowDown className="ml-2 w-5 h-5" />
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
              Installateurs verliezen dagelijks klanten door bereikbaarheidsproblemen die volledig op te lossen zijn.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: PhoneOff,
                title: "Gemiste oproepen op locatie",
                desc: "Je staat op een dak of onder een cv-ketel — de telefoon gaat, maar je kunt hem niet opnemen. De klant belt door naar de concurrent.",
                delay: 0,
              },
              {
                icon: Zap,
                title: "Klanten gaan naar de concurrent",
                desc: "Iemand die nu belt, wil nu geholpen worden. Geen voicemail, geen terugbellen. Ze bellen gewoon het volgende bedrijf in Google.",
                delay: 0.15,
              },
              {
                icon: Calendar,
                title: "Geen tijd voor offertes & opvolging",
                desc: "Na een lange werkdag wil je niet nog uren achter de telefoon zitten. Leads die je niet opvolgt, zijn leads die je kwijtraakt.",
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
              Geen lange onboarding. Geen technische kennis vereist. Jij vult een formulier in — wij bellen jou terug.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Vul het formulier in",
                desc: "Naam, telefoonnummer en je bedrijfstype. Duurt 2 minuten. Geen verplichtingen.",
                delay: 0,
              },
              {
                step: "02",
                title: "Onze voice agent belt jou terug",
                desc: "Je ervaart exact hoe jouw toekomstige klanten de agent zouden horen. Dit is de demo — geen PowerPoint, gewoon het echte product.",
                delay: 0.15,
              },
              {
                step: "03",
                title: "Jij beslist of je live wilt gaan",
                desc: "Ben je enthousiast? Dan bespreken we de implementatie. Geen druk, geen verborgen kosten.",
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
              Afgestemd op installatiebedrijven — van loodgieters tot elektriciens.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "24/7 bereikbaar",
                desc: "Neemt de telefoon op buiten kantooruren, in het weekend en tijdens vakanties.",
                delay: 0,
              },
              {
                icon: Wrench,
                title: "Vraagt naar het probleem",
                desc: "Cv-ketel kapot? Lekkage? Elektra storing? De agent vraagt direct door en verzamelt alle relevante info.",
                delay: 0.1,
              },
              {
                icon: Calendar,
                title: "Plant afspraken in",
                desc: "Koppelt aan jouw agenda en plant direct een afspraak in — zonder dat jij iets hoeft te doen.",
                delay: 0.2,
              },
              {
                icon: CheckCircle,
                title: "Kwalificeert leads",
                desc: "Filtert serieuze aanvragen eruit zodat jij alleen belt met mensen die écht klant worden.",
                delay: 0.3,
              },
              {
                icon: Zap,
                title: "Geeft samenvattingen",
                desc: "Na elk gesprek ontvang jij een samenvatting met het probleem, contactgegevens en urgentie.",
                delay: 0.4,
              },
              {
                icon: PhoneOff,
                title: "Geen gemiste kansen meer",
                desc: "Elke beller krijgt direct een professioneel antwoord — ook als jij op locatie bezig bent.",
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
              Bel mij terug —
              <span className="text-primary block mt-1">ik wil het zelf horen</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Vul hieronder je gegevens in. Onze voice agent belt je binnen enkele minuten terug. Geen verkoopgesprek — jij ervaart gewoon het product.
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
            Werkt het formulier niet?{" "}
            <a href={GHL_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Open het hier →
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Installatiebedrijven;
