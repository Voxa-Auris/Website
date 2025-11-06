import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import AIAgents from "@/components/AIAgents";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <AIAgents />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
