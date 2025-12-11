import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSplit from "@/components/HeroSplit";
import GoldenWindow from "@/components/GoldenWindow";

const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Benefits = lazy(() => import("@/components/Benefits"));
const AIAgents = lazy(() => import("@/components/AIAgents"));
const SocialProof = lazy(() => import("@/components/SocialProof"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Vastgoed = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSplit
        headline="Verkoop huizen terwijl je slaapt."
        subheadline="Onze AI-assistent plant bezichtigingen in, beantwoordt vragen over woningen en kwalificeert kopers — zelfs om 22:00 's avonds of in het weekend."
        challengeTitle="Probeer een bezichtiging te plannen."
        testInstruction="Bel en zeg: 'Ik heb interesse in de woning op de Kerkstraat 12. Kan ik morgen komen kijken?' Kijk hoe de AI dit afhandelt."
        benefits={[
          "24/7 Bereikbaar voor potentiële kopers",
          "Automatische bezichtigingen plannen",
          "Professioneel en vriendelijk contact"
        ]}
      />
      <GoldenWindow />
      <Suspense fallback={<div className="min-h-screen" />}>
        <HowItWorks />
        <Benefits />
        <AIAgents />
        <SocialProof />
        <CTASection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Vastgoed;
