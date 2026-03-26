import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "+500", label: "Serviços Realizados" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "NR-10", label: "Profissional Certificado" },
];

const Stats = () => (
  <section className="relative py-16 bg-[hsl(210,60%,22%)] overflow-hidden">
    {/* Subtle diagonal texture */}
    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmUgeDE9IjAiIHkxPSI0MCIgeDI9IjQwIiB5Mj0iMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]" />
    <div className="container relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center py-6"
          >
            <span className="block font-display text-4xl md:text-5xl font-bold text-primary">{s.value}</span>
            <span className="block text-xs md:text-sm uppercase tracking-widest text-white/70 mt-2">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
