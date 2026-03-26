import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Fernanda Oliveira",
    stars: 5,
    text: "Excelente profissional! Resolveu o problema elétrico da minha casa em poucas horas. Super atencioso e pontual.",
  },
  {
    name: "Ricardo Mendes",
    stars: 5,
    text: "Carlos trocou todo o quadro de distribuição do meu escritório. Trabalho limpo, organizado e com garantia. Recomendo!",
  },
  {
    name: "Ana Paula Costa",
    stars: 4,
    text: "Ótimo atendimento. Instalou o ar-condicionado rapidamente e explicou tudo sobre a parte elétrica. Voltarei a contratar.",
  },
];

const Reviews = () => (
  <section id="avaliacoes" className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
      >
        O que nossos <span className="text-primary">clientes</span> dizem
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary">
                {r.name[0]}
              </div>
              <div>
                <p className="font-semibold text-sm">{r.name}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
