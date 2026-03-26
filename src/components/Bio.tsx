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

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden border border-border"
        >
          <img
            src={bioPhoto}
            alt="Carlos Silva - Eletricista Profissional"
            loading="lazy"
            width={640}
            height={800}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h3 className="font-display text-2xl font-bold">Carlos Silva</h3>
          <p className="text-muted-foreground leading-relaxed">
            Com mais de 10 anos de experiência no mercado elétrico, Carlos é formado
            em Eletrotécnica pelo SENAI e possui certificação NR-10 (Segurança em
            Instalações e Serviços em Eletricidade). Registrado no CREA-SP, atua em
            projetos residenciais e comerciais em toda a região metropolitana de São Paulo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Sua missão é oferecer um serviço elétrico de alta qualidade, com transparência,
            pontualidade e preço justo. Cada cliente é tratado com atenção personalizada,
            garantindo soluções seguras e duradouras.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["CREA-SP", "NR-10", "SENAI", "10+ Anos"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Bio;
