import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Eerste klanten <span className="text-primary">live</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We bouwen nu onze eerste case studies op. Resultaten volgen snel.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
