import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import AIBall from "./AIBall";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]" />
      
      {/* AI Ball */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-32 pointer-events-none">
        <AIBall color="#11b4eb" accent="#f4dd8d" followSpeed={0.1} pulseSpeed={2} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jouw bedrijf,
            <span className="text-primary block mt-2">altijd bereikbaar</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI-agents die je klanten 24/7 te woord staan, leads kwalificeren en afspraken inplannen — zelfs wanneer jij slaapt.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 glow-gold group"
              onClick={() => window.open('https://airtable.com/app9GSVUAhLhKwIzt/pagtMd9CNB0XkIpAt/form', '_blank')}
            >
              <Phone className="mr-2 group-hover:rotate-12 transition-transform" />
              Praat met Olivia
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6 group"
              onClick={() => window.open('https://airtable.com/app9GSVUAhLhKwIzt/pagtMd9CNB0XkIpAt/form', '_blank')}
            >
              <Calendar className="mr-2 group-hover:scale-110 transition-transform" />
              Laat Alexander je bellen
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-sm text-muted-foreground mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            🤖 AI-aangedreven • ⚡ Binnen 2 weken operationeel • 📞 Geen wachttijd voor leads
          </motion.p>
        </motion.div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
