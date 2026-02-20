import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GoldenWindow from "@/components/GoldenWindow";

// Lazy load below-the-fold components for better performance
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Benefits = lazy(() => import("@/components/Benefits"));
const AIAgents = lazy(() => import("@/components/AIAgents"));
// const SocialProof = lazy(() => import("@/components/SocialProof")); // Tijdelijk uitgeschakeld
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <GoldenWindow />
      <Suspense fallback={<div className="min-h-screen" />}>
        <HowItWorks />
        <Benefits />
        <AIAgents />
        {/* <SocialProof /> Tijdelijk verborgen - nog geen klanten */}
        <CTASection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
