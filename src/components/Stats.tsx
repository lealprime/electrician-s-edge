import { useState, useEffect, useRef } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Anos de Experiência" },
  { value: 500, suffix: "+", label: "Serviços Realizados" },
  { value: 98, suffix: "%", label: "Clientes Satisfeitos" },
  { value: 0, suffix: "", label: "Profissional Certificado", display: "NR-10" },
];

const AnimatedNumber = ({ target, suffix, display }: { target: number; suffix: string; display?: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || display) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(interval); }
      setCount(current);
    }, 25);
    return () => clearInterval(interval);
  }, [started, target, display]);

  return (
    <span ref={ref} className="block font-display text-4xl md:text-5xl font-bold text-primary">
      {display ? display : `${count}${suffix}`}
    </span>
  );
};

const Stats = () => (
  <section className="relative py-16 bg-background overflow-hidden border-y border-border font-thin">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-6">
            <AnimatedNumber target={s.value} suffix={s.suffix} display={s.display} />
            <span className="block text-xs md:text-sm uppercase tracking-widest text-muted-foreground mt-2">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
