import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Missie",
    description: "Wij maken AI-technologie toegankelijk voor ondernemers, zodat ze sneller groeien zonder meer personeel aan te nemen.",
  },
  {
    icon: Lightbulb,
    title: "Visie",
    description: "Een wereld waarin elke ondernemer 24/7 bereikbaar is en geen enkele klant meer hoeft te wachten op antwoord.",
  },
  {
    icon: Users,
    title: "Team",
    description: "Experts in AI, voice technology en business automation die passie hebben voor innovatie en klantsucces.",
  },
  {
    icon: Rocket,
    title: "Resultaat",
    description: "Snellere responstijden, hogere conversies en tevreden klanten — dat is waar wij voor staan.",
  },
];

const Over = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero + Verhaal */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-10 glow-text text-center">
              Waarom ik <span className="text-primary">dit bouw</span>
            </h1>

            {/* Foto placeholder */}
            <div className="flex justify-center mb-10">
              <div className="w-32 h-32 rounded-2xl bg-card border border-primary/30 flex items-center justify-center text-muted-foreground text-sm text-center px-4">
                [FOTO MICK]
              </div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ik had een autodetailing bedrijf. In een paar maanden kreeg ik 70 leads binnen via advertenties. Ik was trots.
              </p>
              <p>
                Maar aan het einde van de maand had ik nul nieuwe klanten.
              </p>
              <p>
                Niet omdat het product slecht was. Niet omdat de prijs niet klopte. Maar omdat ik leads te laat terugbelde. Soms een uur later, soms de volgende ochtend. Dan was de klant al ergens anders.
              </p>
              <p>
                Dat frustreerde me genoeg om te zoeken naar een oplossing. Ik vond geen systeem dat dit probleem echt oploste voor gewone MKB bedrijven.
              </p>
              <p className="font-semibold text-foreground">
                Dus bouwde ik het zelf.
              </p>
              <p>
                Voxa Auris zorgt dat leads binnen 60 seconden worden opgebeld, gekwalificeerd en ingepland. Zodat jij je kunt focussen op het werk zelf, niet op het najagen van mensen die al verder zijn gegaan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Waar we voor staan
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {value.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Over;
