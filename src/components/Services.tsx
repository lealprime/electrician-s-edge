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

const Services = () => (
  <section id="servicos" className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Nossos <span className="text-primary">Serviços</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:glow-primary"
          >
            <s.icon className="text-primary mb-4" size={28} />
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
