import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
const CTASection = () => {
  return <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: "1s"
    }} />
      
      <div className="container mx-auto px-4 relative">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Klaar om te starten?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Laat je eerste lead niet
            <span className="text-primary block mt-2">meer ontsnappen</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Laat je gegevens achter — onze AI-agent legt binnen 1 minuut contact.
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Probeer Voxa Auris vandaag nog en ervaar hoe AI jouw klanten sneller bedient dan ooit tevoren.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 glow-gold group" onClick={() => window.open('https://airtable.com/app9GSVUAhLhKwIzt/pagtMd9CNB0XkIpAt/form', '_blank')}>
              Ontvang binnen 1 minuut contact →
            </Button>
          </div>
          
          <div className="flex flex-col gap-2 mt-8 text-sm text-muted-foreground">
            <p>• Project op maat samengesteld</p>
            <p>• Binnen 1 minuut eerste contact</p>
            <p>• Volledig geautomatiseerd én persoonlijk opvolgsysteem</p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CTASection;