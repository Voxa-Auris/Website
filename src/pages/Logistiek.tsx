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

const Logistiek = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSplit
        headline="De eerste Planning die nooit pauze neemt."
        subheadline="Jouw chauffeurs krijgen direct antwoord op hun vragen. Onze AI-planner handelt statusupdates, pauzes en vertraging af — 24/7, zonder menselijke tussenkomst."
        challengeTitle="Daag onze Planner uit."
        testInstruction="Bel en zeg: 'Ik ben chauffeur Jan en mijn vrachtwagen staat met pech langs de A16.' Kijk hoe de AI reageert."
        benefits={[
          "24/7 Bereikbaar voor al je chauffeurs",
          "Directe updates in je planningssysteem",
          "Natuurlijke gesprekken, geen robotstem"
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

export default Logistiek;
