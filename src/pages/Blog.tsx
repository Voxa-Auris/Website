import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Placeholder blog posts - kan later worden vervangen met echte content
const blogPosts = [
  {
    title: "Coming Soon",
    excerpt: "Binnenkort delen we hier inzichten over AI-automatisering, voice agents en hoe je leads effectiever opvolgt.",
    date: "Binnenkort",
    author: "Voxa Auris Team",
    category: "AI & Automatisering",
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

                    {/* CTA - Disabled for now */}
                    <Button
                      variant="outline"
                      className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                      disabled
                    >
                      Lees meer
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Coming Soon Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="p-8 rounded-2xl bg-card border border-border max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Meer content volgt binnenkort
                </h3>
                <p className="text-muted-foreground mb-6">
                  We werken aan waardevolle content over AI-automatisering, best practices en praktijkvoorbeelden.
                  Schrijf je in voor onze nieuwsbrief om op de hoogte te blijven.
                </p>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => window.open('https://airtable.com/app9GSVUAhLhKwIzt/pagtMd9CNB0XkIpAt/form', '_blank')}
                >
                  Blijf op de hoogte
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
