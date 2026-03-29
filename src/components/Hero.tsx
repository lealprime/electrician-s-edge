import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

    <div className="relative container py-32">
      <div className="max-w-2xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-bold tracking-wider uppercase border border-primary/30 mb-6">
          Licenciado & Certificado
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Eletricista Profissional
          <br />
          <span className="text-gradient">em São Paulo</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
          Instalações, reparos e manutenções elétricas com segurança e agilidade.
          <br />
          Atendimento rápido, preço justo e garantia de serviço.
        </p>

        <a
          href="#agendamento"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg rounded-lg hover:brightness-110 transition"
        >
          Agendar Agora
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
