import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Centro", "Zona Norte", "Zona Sul", "Zona Leste", "Zona Oeste", "Grande ABC",
  "Guarulhos", "Osasco", "Taboão da Serra", "Barueri", "Cotia", "Carapicuíba",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, rotate: -2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Areas = () => (
  <section id="areas" className="py-24 bg-secondary">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Áreas de <span className="text-primary">Atendimento</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {areas.map((a) => (
          <motion.div
            key={a}
            variants={itemVariants}
            className="group flex items-center gap-3 px-5 py-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:glow-primary cursor-default"
          >
            <MapPin className="text-primary shrink-0" size={18} />
            <span className="text-sm font-medium">{a}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Areas;
