import { motion } from "framer-motion";
import { Clock, TrendingUp, Users, Zap } from "lucide-react";

const GoldenWindow = () => {
  const features = [
    {
      icon: Clock,
      title: "De eerste 5 minuten zijn cruciaal",
      description: "Leads die binnen 5 minuten contact krijgen zijn 100x waarschijnlijker om klant te worden."
    },
    {
      icon: TrendingUp,
      title: "Response tijd bepaalt conversie",
      description: "Elk minuut uitstel vermindert je kans op conversie met 10%. Na 30 minuten is 80% van je leads al weg."
    },
    {
      icon: Users,
      title: "Klanten verwachten snelheid",
      description: "78% van de klanten kiest het bedrijf dat als eerste reageert — niet het beste aanbod."
    },
    {
      icon: Zap,
      title: "AI reageert altijd direct",
      description: "Terwijl jij slaapt of in gesprek bent, heeft onze AI al 10 leads gekwalificeerd en 5 afspraken ingepland."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
            Waarom snelheid
            <span className="text-primary block mt-2">alles bepaalt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De meeste bedrijven verliezen leads niet door een slecht product. Ze verliezen ze omdat ze te laat reageren.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 border border-primary/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100x</div>
              <div className="text-sm text-muted-foreground">Hogere kans om de lead te pakken te krijgen</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">78%</div>
              <div className="text-sm text-muted-foreground">Kiest het snelste bedrijf</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Altijd beschikbaar met AI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoldenWindow;
