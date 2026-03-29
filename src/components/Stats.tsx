const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "+500", label: "Serviços Realizados" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "NR-10", label: "Profissional Certificado" },
];

const Stats = () => (
  <section className="relative py-16 bg-background overflow-hidden border-y border-border">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-6">
            <span className="block font-display text-4xl md:text-5xl font-bold text-primary">
              {s.value}
            </span>
            <span className="block text-xs md:text-sm uppercase tracking-widest text-muted-foreground mt-2">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
