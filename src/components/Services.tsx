import { motion } from "framer-motion";
import { Cable, ShieldCheck, LayoutGrid, Wind, Lightbulb, FileText } from "lucide-react";

const services = [
  { icon: Cable, title: "Instalação Elétrica", desc: "Instalações residenciais e comerciais com material de qualidade e segurança." },
  { icon: ShieldCheck, title: "Manutenção Preventiva", desc: "Prevenção de falhas e curtos-circuitos com inspeções regulares." },
  { icon: LayoutGrid, title: "Troca de Quadro de Distribuição", desc: "Atualização e dimensionamento correto para sua demanda elétrica." },
  { icon: Wind, title: "Instalação de Ar-Condicionado", desc: "Instalação elétrica dedicada para splits e centrais de ar." },
  { icon: Lightbulb, title: "Iluminação e Tomadas", desc: "Projetos de iluminação, instalação de spots, luminárias e tomadas." },
  { icon: FileText, title: "Laudo Elétrico", desc: "Laudos técnicos e certificações de conformidade elétrica." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services = () => (
  <section id="servicos" className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Nossos <span className="text-primary">Serviços</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={cardVariants}
            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:glow-primary"
          >
            <s.icon className="text-primary mb-4" size={28} />
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
