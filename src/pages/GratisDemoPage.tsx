import { motion } from "framer-motion";
import { Zap, Bot, Phone, Mic, ArrowDown, FileText, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GHL_FORM_URL = "https://YOUR_GHL_FORM_URL_HERE";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const voiceSamples = [
  {
    label: "Installatiebedrijf",
    scenario: "Inkomend gesprek — klant meldt een cv-ketel storing",
    src: "/audio/voice-installatie.mp3",
    delay: 0,
  },
  {
    label: "Makelaardij",
    scenario: "Outbound follow-up — agent belt een bezichtigingsaanvraag terug",
    src: "/audio/voice-makelaardij.mp3",
    delay: 0.1,
  },
  {
    label: "Kliniek / Zorginstelling",
    scenario: "Afsprakenbeheer — rustige professionele toon voor zorgpatiënten",
    src: "/audio/voice-zorg.mp3",
    delay: 0.2,
  },
];

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Vul het formulier in",
    desc: "Je bedrijfsnaam, type bedrijf en telefoonnummer. Klaar in 2 minuten. Geen verplichtingen.",
    delay: 0,
  },
  {
    icon: Bot,
    step: "02",
    title: "Wij bouwen je agent",
    desc: "Volledig automatisch — op basis van jouw gegevens wordt een gepersonaliseerde demo klaargemaakt.",
    delay: 0.15,
  },
  {
    icon: Phone,
    step: "03",
    title: "Jouw AI belt je binnen 5 minuten",
    desc: "Je ervaart precies hoe jouw toekomstige klanten de agent zouden horen. Geen PowerPoint — gewoon het echte product.",
    delay: 0.3,
  },
];

const faqs = [
  {
    question: "Hoe klinkt de demo-call?",
    answer:
      "De AI-agent belt je op met een stem die lijkt op een professionele receptionist. De agent is afgestemd op jouw bedrijfstype en spreekt vloeiend Nederlands. Je hoort precies wat jouw klanten zouden horen.",
  },
  {
    question: "Kan ik de stem aanpassen?",
    answer:
      "Ja. Bij een echte implementatie kies je uit meerdere stemmen — mannelijk, vrouwelijk, formeel of toegankelijk. We passen ook de toon en het script aan op jouw branche.",
  },
  {
    question: "Wat kost een echte implementatie?",
    answer:
      "Dat hangt af van de complexiteit en het gebruik. Na de demo bespreken we vrijblijvend de opties. Er zijn geen verborgen kosten — alles is transparant geprijsd.",
  },
  {
    question: "Werkt dit voor elk type bedrijf?",
    answer:
      "Grotendeels wel. AI voice agents werken het beste voor bedrijven die regelmatig telefonisch contact hebben met klanten: installateurs, makelaars, klinieken, salons, administratiekantoren en meer.",
  },
  {
    question: "Wat heb ik nodig om te starten?",
    answer:
      "Alleen een telefoonnummer en een kort overzicht van wat de agent moet doen. Wij regelen de rest — van stem en script tot integraties.",
  },
];

const GratisDemoPage = () => {
  const scrollToForm = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* 1. Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
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
            <Mic className="w-4 h-4" />
            <span className="text-sm font-semibold">Gratis gepersonaliseerde demo</span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 glow-text leading-tight"
          >
            Hoor hoe het klinkt als jij
            <span className="text-primary block mt-2">geen leads meer mist</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Binnen 5 minuten een gepersonaliseerde demo — volledig automatisch. Jouw AI-agent belt jou op.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 glow-gold"
              onClick={scrollToForm}
            >
              Start mijn gratis demo <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Promise Bar */}
      <section className="py-10 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            {[
              { icon: Zap, stat: "Binnen 5 minuten", label: "jouw demo klaar" },
              { icon: Bot, stat: "Volledig automatisch", label: "geen mens aan te pas" },
              { icon: Phone, stat: "Jouw agent", label: "belt je zelf op" },
            ].map(({ icon: Icon, stat, label }, i) => (
              <motion.div
                key={stat}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-1">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-bold text-lg">{stat}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Voice Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zo klinkt een AI-receptionist
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Luister naar voorbeelden van bedrijven die al gebruik maken van onze agents.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {voiceSamples.map(({ label, scenario, src, delay }) => (
              <motion.div
                key={label}
                {...fadeUp}
                transition={{ duration: 0.8, delay }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mic className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-xs text-muted-foreground">{scenario}</p>
                  </div>
                </div>
                <audio controls className="w-full mt-2">
                  <source src={src} type="audio/mpeg" />
                  Je browser ondersteunt geen audio.
                </audio>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            De echte gepersonaliseerde demo ontvang je als een telefoongesprek — direct op jouw nummer.
          </motion.p>
        </div>
      </section>

      {/* 4. Demo Form */}
      <section id="demo-form" className="py-24 relative overflow-hidden bg-card/20">
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
              Hoor jouw eigen AI-agent —
              <span className="text-primary block mt-1">gratis</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Vul je gegevens in. Binnen 5 minuten word je gebeld door jouw persoonlijke AI-agent.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-primary/30 bg-card/60 backdrop-blur p-2"
          >
            <iframe
              src={GHL_FORM_URL}
              width="100%"
              height="700"
              frameBorder={0}
              className="rounded-xl"
              title="Gratis demo aanvragen"
            />
          </motion.div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            📞 Na het invullen word je binnen 5 minuten gebeld door de AI-agent
          </p>
        </div>
      </section>

      {/* 5. How It Works */}
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
              Geen lange onboarding. Geen technische kennis vereist.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map(({ icon: Icon, step, title, desc, delay }) => (
              <motion.div
                key={step}
                {...fadeUp}
                transition={{ duration: 0.8, delay }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="pt-1">
                  <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">Stap {step}</p>
                  <h3 className="font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-muted-foreground text-lg">
              Alles wat je wilt weten voordat je de demo aanvraagt.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map(({ question, answer }, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-xl px-5 bg-card"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-5">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative text-center max-w-2xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-semibold">Klaar om te starten?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">
              Vraag nu jouw
              <span className="text-primary"> gratis demo</span> aan
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Geen verplichtingen. Geen creditcard. Gewoon jouw eigen AI-agent aan de lijn.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 glow-gold"
              onClick={scrollToForm}
            >
              Start mijn gratis demo <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GratisDemoPage;
