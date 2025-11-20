import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2, Copy, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ProbeerSocialAgent = () => {
  const [posts, setPosts] = useState("");
  const [onderwerp, setOnderwerp] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedPost, setGeneratedPost] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    // Validatie
    if (!posts.trim() || !onderwerp.trim()) {
      toast({
        title: "Vul alle velden in",
        description: "Je moet minimaal 1 post en een onderwerp invullen.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setGeneratedPost("");

    try {
      const response = await fetch('https://n8n.voxa-auris.com/webhook/d993ba82-f29a-4176-98b3-5e0cbac6052e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          posts: posts,
          onderwerp: onderwerp,
        }),
      });

      if (!response.ok) {
        throw new Error('Netwerkfout: ' + response.status);
      }

      const data = await response.json();

      // Probeer verschillende response formats
      const generatedText = data.output || data.post || data.result || data.message || JSON.stringify(data);

      setGeneratedPost(generatedText);

      toast({
        title: "Post gegenereerd! 🎉",
        description: "Je nieuwe LinkedIn post is klaar.",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Er ging iets mis",
        description: "Probeer het opnieuw of neem contact met ons op.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPost);
    setCopied(true);
    toast({
      title: "Gekopieerd! 📋",
      description: "Je LinkedIn post staat nu in je klembord.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

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
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold glow-text">
                Social Media <span className="text-primary">Agent</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-4">
              Probeer onze AI die LinkedIn posts schrijft in jouw unieke stijl
            </p>
            <p className="text-sm text-muted-foreground/70">
              💡 Tip: Kopieer 5-10 van je eerdere LinkedIn posts, plak ze hieronder, en zie hoe de AI jouw schrijfstijl leert
            </p>
          </motion.div>

          {/* Main Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl" />

              <div className="relative space-y-6">
                {/* Posts Input */}
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    1. Plak je eerdere LinkedIn posts
                  </label>
                  <p className="text-sm text-muted-foreground mb-3">
                    Kopieer 5-10 van je eerdere posts (gescheiden door een lege regel). De AI analyseert je schrijfstijl.
                  </p>
                  <Textarea
                    placeholder="Voorbeeld:&#10;&#10;Post 1: Afgelopen week lanceerden we een nieuwe feature...&#10;&#10;Post 2: Interessante les geleerd over AI automation...&#10;&#10;Post 3: Waarom snelheid zo belangrijk is in sales..."
                    value={posts}
                    onChange={(e) => setPosts(e.target.value)}
                    className="min-h-[300px] resize-y font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    {posts.split('\n\n').filter(p => p.trim()).length} posts gedetecteerd
                  </p>
                </div>

                {/* Topic Input */}
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    2. Over welk onderwerp wil je een nieuwe post?
                  </label>
                  <Input
                    placeholder="Bijv: AI automatisering in sales, de golden window, LinkedIn strategie..."
                    value={onderwerp}
                    onChange={(e) => setOnderwerp(e.target.value)}
                    className="text-base"
                  />
                </div>

                {/* Generate Button */}
                <Button
                  size="lg"
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      AI analyseert je schrijfstijl...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Genereer LinkedIn Post
                    </>
                  )}
                </Button>

                {/* Generated Output */}
                {generatedPost && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6" />
                        Je nieuwe LinkedIn post
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                        className="gap-2"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            Gekopieerd!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Kopieer
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="relative p-6 rounded-xl bg-background border border-border">
                      <div className="absolute top-4 right-4 text-xs text-muted-foreground">
                        {generatedPost.length} karakters
                      </div>
                      <div className="prose prose-invert max-w-none">
                        <p className="whitespace-pre-wrap leading-relaxed">
                          {generatedPost}
                        </p>
                      </div>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                      💡 Tip: Je kunt de post nog aanpassen voordat je hem plaatst op LinkedIn
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* CTA Section */}
            {generatedPost && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 text-center p-8 rounded-2xl bg-card border border-primary/50"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Wil je dit volledig automatiseren?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Onze Social Media Agent kan automatisch posts plannen, schrijven én plaatsen op al je kanalen.
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open('https://airtable.com/appYourFormId/shrYourFormId', '_blank')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Plan een demo
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Hoe werkt het?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Analyseer</h3>
                <p className="text-sm text-muted-foreground">
                  De AI leest je eerdere posts en leert je schrijfstijl, tone-of-voice en onderwerpen kennen
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Genereer</h3>
                <p className="text-sm text-muted-foreground">
                  Op basis van je onderwerp schrijft de AI een nieuwe post die klinkt alsof jij het zelf schreef
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Publiceer</h3>
                <p className="text-sm text-muted-foreground">
                  Kopieer de post en plaats hem op LinkedIn, of laat onze volledige agent het automatiseren
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProbeerSocialAgent;
