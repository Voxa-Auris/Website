import { motion } from "framer-motion";
import { Check } from "lucide-react";
import LiveDemoWidget from "./LiveDemoWidget";

interface HeroSplitProps {
  headline: string;
  subheadline: string;
  challengeTitle: string;
  testInstruction: string;
  benefits?: string[];
}

const HeroSplit = ({
  headline,
  subheadline,
  challengeTitle,
  testInstruction,
  benefits = [
    "24/7 Bereikbaar",
    "Koppelt met CRM",
    "Klinkt als een mens"
  ]
}: HeroSplitProps) => {
  // Placeholder logo's voor trust indicators
  const placeholderLogos = [
    "Logo 1",
    "Logo 2",
    "Logo 3",
    "Logo 4",
    "Logo 5"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Sales Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight glow-text">
                {headline}
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {subheadline}
              </p>
            </div>

            {/* Benefits - Bullet points */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 border-t border-border/50"
            >
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                Vertrouwd door innovatieve MKB'ers
              </p>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                {placeholderLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="h-12 px-6 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  >
                    <span className="text-xs font-semibold text-muted-foreground">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive Widget */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {challengeTitle}
              </h2>
            </motion.div>

            <LiveDemoWidget testInstruction={testInstruction} />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSplit;
