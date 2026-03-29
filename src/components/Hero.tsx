import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image - right side */}
    <img
      src={heroBg}
      alt=""
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* Dark gradient overlay - stronger on left for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

    <div className="relative container py-32">
      <div className="max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-bold tracking-wider uppercase border border-primary/30 mb-6"
        >
          Licenciado & Certificado
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Eletricista Profissional
          <br />
          <span className="text-gradient">em São Paulo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl"
        >
          Instalações, reparos e manutenções elétricas com segurança e agilidade.
          <br />
          Atendimento rápido, preço justo e garantia de serviço.
        </motion.p>

        <motion.a
          href="#agendamento"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg rounded-lg hover:brightness-110 transition"
        >
          Agendar Agora
          <ArrowRight size={20} />
        </motion.a>
      </div>
    </div>
  </section>
);

export default Hero;
