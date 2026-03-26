import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Anos de Experiência" },
  { value: 500, prefix: "+", label: "Serviços Realizados" },
  { value: 98, suffix: "%", label: "Clientes Satisfeitos" },
  { value: 0, display: "NR-10", label: "Profissional Certificado" },
];

const CountUp = ({ target, prefix = "", suffix = "", display }: { target: number; prefix?: string; suffix?: string; display?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (display) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, display]);

  return (
    <span ref={ref} className="block font-display text-4xl md:text-5xl font-bold text-primary">
      {display || `${prefix}${count}${suffix}`}
    </span>
  );
};

const Stats = () => (
  <section className="relative py-16 bg-background overflow-hidden border-y border-border">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-6">
            <CountUp target={s.value} prefix={s.prefix} suffix={s.suffix} display={s.display} />
            <span className="block text-xs md:text-sm uppercase tracking-widest text-muted-foreground mt-2">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
