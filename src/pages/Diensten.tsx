import { motion } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Diensten = () => {
  const handleStartRequest = () => {
    window.open('https://airtable.com/app9GSVUAhLhKwIzt/pagtMd9CNB0XkIpAt/form', '_blank');
  };

  const deliverables = [
    "AI voice agent op maat voor jouw bedrijf",
    "Volledig ingesteld CRM systeem",
    "Automatische opvolging van leads",
    "Transcripten en samenvattingen van elk gesprek",
    "Dashboard zodat je altijd weet wat er speelt",
    "Binnen 2 weken live",
  ];

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
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">AI Voice Agent</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              <span className="text-primary">AI Voice Agent</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              De snelste manier om nooit meer een lead te missen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Het probleem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
                <div className="relative">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Het probleem</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Je krijgt een lead binnen. Je bent bezig. Je belt terug na een uur. Te laat. De klant heeft al iemand anders gebeld die wel direct opnam.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* De oplossing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl" />
                <div className="relative">
                  <h2 className="text-2xl font-bold mb-6 text-primary">De oplossing</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Alexander belt elke nieuwe lead op binnen 60 seconden. Hij stelt vragen, kwalificeert en plant een afspraak. Jij hoeft er niks voor te doen.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Wat je krijgt */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />
                <div className="relative">
                  <h2 className="text-2xl font-bold mb-8 text-primary">Wat je krijgt</h2>
                  <ul className="space-y-4">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                size="lg"
                onClick={handleStartRequest}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 glow-gold"
              >
                Plan een kennismaking
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diensten;
