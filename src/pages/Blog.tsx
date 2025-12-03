import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Blog posts
const blogPosts = [
  {
    title: "Inbound Voice Agents - De Slimme AI-Receptioniste die Nooit een Klant Mist",
    excerpt: "In een wereld waar klanten direct antwoord verwachten, kan één gemiste oproep het verschil betekenen tussen een nieuwe klant en een verloren kans. De Inbound Voice Agent verandert dat volledig.",
    date: "2 december 2025",
    author: "Voxa Auris Team",
    category: "AI Voice Agents",
    slug: "inbound-voice-agents",
  },
  {
    title: "Outbound AI Agents - Nooit Meer een Lead Missen binnen de Golden 5-Minuten Window",
    excerpt: "Iedere ondernemer kent het: een nieuwe lead vult een contactformulier in, en tegen de tijd dat je belt, heeft de concurrent al gereageerd. Dat is precies waar de Outbound AI Agents het verschil maken.",
    date: "2 december 2025",
    author: "Voxa Auris Team",
    category: "AI Voice Agents",
    slug: "outbound-ai-agents",
  },
  {
    title: "AI Chatbots voor Bedrijven - 17 Krachtige Use Cases en Implementatietips",
    excerpt: "Voor ondernemers die sneller willen groeien en tegelijk support-kosten willen verlagen, zijn AI Chatbots een slimme, schaalbare oplossing. Ze reageren direct, 24/7, in jouw tone of voice.",
    date: "2 december 2025",
    author: "Voxa Auris Team",
    category: "AI Chatbots",
    slug: "ai-chatbots",
  },
  {
    title: "RAG Agents - De Slimste AI die Altijd Juiste Antwoorden Geeft",
    excerpt: "AI kan geweldig zijn - tot het onzin gaat verzinnen. RAG Agents combineren taalintelligentie met jouw eigen bedrijfsdata. Zo krijg je AI die actuele, correcte en merkveilige antwoorden geeft.",
    date: "2 december 2025",
    author: "Voxa Auris Team",
    category: "AI Technologie",
    slug: "rag-agents",
  },
  {
    title: "Social Media Agents - De AI Marketingassistent die 24/7 Post, Plant en Reageert",
    excerpt: "Consistent posten op social media is belangrijk - maar in de praktijk schiet het er vaak bij in. De Social Media Agents van Voxa Auris zorgen ervoor dat je merk altijd actief en zichtbaar blijft.",
    date: "2 december 2025",
    author: "Voxa Auris Team",
    category: "Marketing Automatisering",
    slug: "social-media-agents",
  },
  {
    title: "Lead Scrape Agents - De Slimme AI die Nieuwe Leads Zoekt, Verrijkt en Doorstuurt",
    excerpt: "Iedere ondernemer wil meer leads - maar niemand heeft tijd om ze handmatig te zoeken. Lead Scrape Agents vinden, filteren en verrijken automatisch nieuwe leads die passen bij jouw doelgroep.",
    date: "2 december 2025",
    author: "Voxa Auris Team",
    category: "Lead Generatie",
    slug: "lead-scrape-agents",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
              Voxa Auris <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Inzichten over AI-automatisering, voice agents en moderne lead-opvolging
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative flex-1">
                      {/* Category */}
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                        {post.category}
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link to={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                      >
                        Lees meer
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
