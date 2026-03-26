import { motion } from "framer-motion";
import { Zap, Wrench, Star, ClipboardCheck } from "lucide-react";

const stats = [
  { icon: Zap, value: "10+", label: "Anos de Experiência" },
  { icon: Wrench, value: "+500", label: "Serviços Realizados" },
  { icon: Star, value: "4.9", label: "Avaliação Média" },
  { icon: ClipboardCheck, value: "NR-10", label: "Profissional Certificado" },
];

const Stats = () => (
  <section className="py-20 bg-secondary">
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border"
        >
          <s.icon className="text-primary mb-3" size={32} />
          <span className="font-display text-3xl font-bold">{s.value}</span>
          <span className="text-sm text-muted-foreground mt-1">{s.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Stats;
