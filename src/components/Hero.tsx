import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

    <div className="relative container text-center py-32">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
      >
        Eletricista Profissional
        <br />
        <span className="text-gradient">em São Paulo</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        Instalações, reparos e manutenções elétricas com segurança e agilidade.
      </motion.p>

      <motion.a
        href="#agendamento"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg rounded-lg hover:brightness-110 transition animate-pulse-glow"
      >
        Agendar Agora
      </motion.a>
    </div>
  </section>
);

export default Hero;
