import { motion } from "framer-motion";
import bioPhoto from "@/assets/bio-photo.jpg";

const Bio = () => (
  <section className="py-24 bg-secondary">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Sobre o <span className="text-primary">Profissional</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 order-2 md:order-1"
        >
          <p className="text-foreground leading-relaxed">
            Olá, eu sou o <strong>Carlos Silva</strong> — eletricista licenciado com mais de 10 anos
            de experiência atendendo toda a região metropolitana de São Paulo. Fundei a Carlos
            Elétrica com uma missão simples: entregar serviços elétricos honestos e de alta
            qualidade a preços justos.
          </p>
          <p className="text-foreground leading-relaxed">
            Após me formar em Eletrotécnica pelo SENAI e trabalhar em uma das principais empresas
            de instalação elétrica de SP, decidi seguir carreira independente para oferecer a
            cada cliente a atenção personalizada que merece. Cada trabalho recebe meu foco total,
            de um simples reparo a uma instalação completa.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Quando não estou trabalhando, você me encontra em treinamentos de atualização técnica
            ou passando tempo com a família. Acredito em fazer certo da primeira vez — e garanto
            100% de satisfação em cada projeto.
          </p>
        </motion.div>

        {/* Photo right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl max-w-sm">
            <img
              src={bioPhoto}
              alt="Carlos Silva - Eletricista Profissional"
              loading="lazy"
              width={400}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Bio;
