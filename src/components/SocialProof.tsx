import { motion } from "framer-motion";
import { Star, TrendingUp, Users, Zap } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Joris van der Berg",
      company: "VDB Advies",
      role: "Financieel Adviseur",
      quote: "Binnen 2 weken hadden we onze AI-agent live. Nu missen we geen enkele lead meer, zelfs niet buiten kantoortijden. Onze conversie is met 40% gestegen.",
      metric: "+40% conversie",
      icon: TrendingUp
    },
    {
      name: "Lisa Janssen",
      company: "Janssen Recruitment",
      role: "Recruiter",
      quote: "Alexander belt elke kandidaat binnen 60 seconden. Ze zijn verbaasd hoe snel we reageren. Onze time-to-hire is gehalveerd en kandidaten zijn veel enthousiaster.",
      metric: "50% sneller",
      icon: Zap
    },
    {
      name: "Mark Peters",
      company: "Peters & Co Makelaardij",
      role: "Makelaar",
      quote: "Olivia kwalificeert alle bezichtigingsaanvragen voor ons. We besteden nu alleen tijd aan serieuze kopers. Dat scheelt ons 15 uur per week aan telefoontjes.",
      metric: "15u per week bespaard",
      icon: Users
    }
  ];

  const logos = [
    { name: "VDB Advies", width: "120px" },
    { name: "Janssen Recruitment", width: "140px" },
    { name: "Peters & Co", width: "100px" },
    { name: "SmartLead BV", width: "130px" },
    { name: "NextGen Sales", width: "120px" }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Star className="w-4 h-4 fill-primary" />
            <span className="text-sm font-semibold">Vertrouwd door 50+ ondernemers</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">
            Resultaten die
            <span className="text-primary block mt-2">spreken</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ondernemers die Voxa Auris gebruiken missen geen leads meer en groeien sneller
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Metric badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <testimonial.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-primary">{testimonial.metric}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-base text-muted-foreground mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Vertrouwd door deze bedrijven
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                style={{ minWidth: logo.width }}
              >
                <div className="text-sm font-semibold text-center">{logo.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Gemiddelde beoordeling</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">2.500+</div>
            <div className="text-sm text-muted-foreground">Afspraken ingepland</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Tevreden ondernemers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
