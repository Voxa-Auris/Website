import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight glow-text">
            "Meer afspraken. Minder gemiste kansen. Geen extra personeel nodig."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
