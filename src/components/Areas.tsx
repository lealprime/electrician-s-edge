import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Centro", "Zona Norte", "Zona Sul", "Zona Leste", "Zona Oeste", "Grande ABC",
  "Guarulhos", "Osasco", "Taboão da Serra", "Barueri", "Cotia", "Carapicuíba",
];

const Areas = () => (
  <section id="areas" className="py-24 bg-secondary">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Áreas de <span className="text-primary">Atendimento</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {areas.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-2 p-4 rounded-lg bg-card border border-border"
          >
            <MapPin className="text-primary shrink-0" size={18} />
            <span className="text-sm font-medium">{a}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Areas;
