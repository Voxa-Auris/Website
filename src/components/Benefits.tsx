import { motion } from "framer-motion";
import { Zap, Target, Heart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Snelheid",
    description: "Klanten krijgen direct antwoord. Geen wachtrijen, geen voicemail, geen gemiste kansen.",
  },
  {
    icon: Target,
    title: "Efficiëntie",
    description: "Leads worden automatisch gekwalificeerd en afspraken direct ingepland in je agenda.",
  },
  {
    icon: Heart,
    title: "Persoonlijkheid",
    description: "Onze AI's klinken menselijk, begrijpen context en passen hun toon aan jouw merk.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Waarom Voxa Auris?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-automatisering die werkt terwijl jij groeit
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
