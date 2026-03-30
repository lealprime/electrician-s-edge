import { MapPin } from "lucide-react";

const areas = [
  "Centro", "Zona Norte", "Zona Sul", "Zona Leste", "Zona Oeste", "Grande ABC",
  "Guarulhos", "Osasco", "Taboão da Serra", "Barueri", "Cotia", "Carapicuíba",
];

const Areas = () => (
  <section id="areas" className="py-24 bg-zinc-900">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
        Áreas de <span className="text-primary">Atendimento</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {areas.map((a) => (
          <div
            key={a}
            className="group flex items-center gap-3 px-5 py-4 rounded-lg bg-card border border-border cursor-default transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20"
          >
            <MapPin className="text-primary shrink-0" size={18} />
            <span className="text-sm font-medium">{a}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Areas;
