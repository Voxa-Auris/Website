import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Diensten from "./pages/Diensten";
import Over from "./pages/Over";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Blog posts
import InboundVoiceAgents from "./pages/blog/InboundVoiceAgents";
import OutboundAIAgents from "./pages/blog/OutboundAIAgents";
import AIChatbots from "./pages/blog/AIChatbots";
import RAGAgents from "./pages/blog/RAGAgents";
import SocialMediaAgents from "./pages/blog/SocialMediaAgents";
import LeadScrapeAgents from "./pages/blog/LeadScrapeAgents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/over" element={<Over />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/inbound-voice-agents" element={<InboundVoiceAgents />} />
          <Route path="/blog/outbound-ai-agents" element={<OutboundAIAgents />} />
          <Route path="/blog/ai-chatbots" element={<AIChatbots />} />
          <Route path="/blog/rag-agents" element={<RAGAgents />} />
          <Route path="/blog/social-media-agents" element={<SocialMediaAgents />} />
          <Route path="/blog/lead-scrape-agents" element={<LeadScrapeAgents />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
