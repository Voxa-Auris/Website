import { motion } from "framer-motion";
import { UserPlus, PhoneCall, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Lead komt binnen",
      description: "Een potentiële klant vult je contactformulier in, belt je nummer, of stuurt een bericht via WhatsApp.",
      highlight: "Via elk kanaal"
    },
    {
      icon: PhoneCall,
      number: "02",
      title: "AI neemt contact op",
      description: "Binnen 1 minuut belt Alexander of chat Olivia met de lead. Ze stellen de juiste vragen en kwalificeren de interesse.",
      highlight: "Binnen 60 seconden"
    },
    {
      icon: Calendar,
      number: "03",
      title: "Afspraak staat ingepland",
      description: "De AI-agent plant direct een afspraak in jouw agenda. Jij krijgt een gekwalificeerde lead die klaar is voor het gesprek.",
      highlight: "Automatisch ingepland"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
            Hoe het
            <span className="text-primary block mt-2">werkt</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Van lead tot afspraak in 3 simpele stappen — volledig geautomatiseerd
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-24 w-0.5 h-32 bg-gradient-to-b from-primary to-transparent -translate-x-1/2" />
              )}

              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left side - odd indexes */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                    <span className="text-sm font-semibold">{step.highlight}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Center - icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/50">
                    <step.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Right side - even indexes */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                  {/* Placeholder for layout balance */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary border-2 border-background flex items-center justify-center text-xs font-bold">A</div>
              <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold">O</div>
            </div>
            <span className="text-sm font-medium">Alexander & Olivia staan klaar om je leads op te volgen</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
