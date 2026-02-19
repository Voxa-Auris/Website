import { motion } from "framer-motion";
import { Phone, Calendar, Brain } from "lucide-react";
import { Button } from "./ui/button";

const AIAgents = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-semibold">Ontmoet onze AI-agent</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Maak kennis met Alexander
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jouw AI die leads opbelt, kwalificeert en afspraken inplant. Elke dag, ook als jij er niet bent.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Agent Icon */}
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-10 h-10 text-secondary" />
                </div>

                {/* Agent Info */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2 text-primary">
                    Alexander
                  </h3>
                  <p className="text-secondary font-semibold mb-4">
                    Outbound Sales Agent
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Belt nieuwe leads op binnen 60 seconden. Stelt de juiste vragen, berekent prijzen en plant direct een afspraak in jouw agenda.
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {[
                    "Lead opvolging binnen 5 min",
                    "24 uur per dag beschikbaar",
                    "Afspraken direct in agenda",
                    "Alles bijgehouden in CRM",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={() => window.open('https://airtable.com/app9GSVUAhLhKwIzt/pagtMd9CNB0XkIpAt/form', '_blank')}
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Laat Alexander je bellen
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
