import { motion } from "framer-motion";
import { Phone, MessageSquare, Calendar, Brain } from "lucide-react";
import { Button } from "./ui/button";

const agents = [
  {
    name: "Alexander",
    role: "Outbound Sales Agent",
    description: "Alexander belt proactief je leads, kwalificeert ze en plant afspraken in. Hij werkt nooit moe en mist geen enkele kans.",
    features: [
      "Outbound calling",
      "Lead kwalificatie",
      "Agenda-integratie",
      "CRM synchronisatie",
    ],
    icon: Phone,
    color: "secondary",
  },
  {
    name: "Olivia",
    role: "Inbound Support Agent",
    description: "Olivia neemt inkomende oproepen aan, beantwoordt vragen en helpt klanten 24/7. Vriendelijk, professioneel en altijd beschikbaar.",
    features: [
      "24/7 bereikbaarheid",
      "Klantondersteuning",
      "FAQ afhandeling",
      "Doorverwijzing indien nodig",
    ],
    icon: MessageSquare,
    color: "primary",
  },
];

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
            <span className="text-sm font-semibold">Ontmoet onze AI-agents</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Alexander & Olivia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jouw digitale team dat nooit pauze neemt ☕
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Agent Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-${agent.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <agent.icon className={`w-10 h-10 text-${agent.color}`} />
                  </div>
                  
                  {/* Agent Info */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-primary">
                      {agent.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-4">
                      {agent.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {agent.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {agent.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${agent.color}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Button
                    className={`w-full ${
                      agent.name === "Alexander"
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                    onClick={() => window.open('https://airtable.com/app9GSVUAhLhKwIzt/pagtMd9CNB0XkIpAt/form', '_blank')}
                  >
                    {agent.name === "Alexander" ? (
                      <>
                        <Calendar className="mr-2 w-4 h-4" />
                        Laat Alexander bellen
                      </>
                    ) : (
                      <>
                        <Phone className="mr-2 w-4 h-4" />
                        Praat met Olivia
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgents;
