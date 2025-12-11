import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, PhoneCall } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface LiveDemoWidgetProps {
  testInstruction: string;
}

const LiveDemoWidget = ({ testInstruction }: LiveDemoWidgetProps) => {
  const [activeTab, setActiveTab] = useState("call");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full"
    >
      <div className="relative rounded-2xl bg-white/90 dark:bg-card/90 backdrop-blur-xl border-2 border-primary/20 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(17,180,235,0.25)] transition-all duration-300">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50 rounded-t-2xl p-2">
            <TabsTrigger
              value="call"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl font-semibold text-base transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Ik bel zelf
            </TabsTrigger>
            <TabsTrigger
              value="callback"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl font-semibold text-base transition-all"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Bel mij nu
            </TabsTrigger>
          </TabsList>

          <TabsContent value="call" className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Test de AI direct
              </h3>
              <p className="text-muted-foreground">
                Bel dit nummer en praat direct met onze AI. Probeer hem te onderbreken, stel lastige vragen!
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-2xl md:text-3xl font-bold py-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href="tel:+31762057076">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                  076-205 70 76
                </a>
              </Button>

              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Beschikbaar 24/7
              </p>
            </div>

            <div className="relative rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 p-6">
              <div className="absolute -top-3 left-4 bg-background px-3">
                <span className="text-sm font-semibold text-primary">Opdracht voor jou:</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {testInstruction}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="callback" className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Bel mij nu
              </h3>
              <p className="text-muted-foreground">
                Vul je nummer in en onze AI belt jou binnen 10 seconden op voor een rollenspel.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden">
              {/* Placeholder voor Airtable formulier - wordt later vervangen */}
              <div
                style={{
                  minHeight: '400px',
                  background: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.75rem',
                  border: '2px dashed #d1d5db'
                }}
                className="dark:bg-muted/50 dark:border-muted-foreground/20"
              >
                <p className="text-muted-foreground text-center px-4">
                  Airtable formulier komt hier
                  <br />
                  <span className="text-xs">(iframe embed)</span>
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default LiveDemoWidget;
