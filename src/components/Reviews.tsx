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

const UnderlineLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <a
    href={href}
    className={`relative inline-block text-primary font-semibold hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${className}`}
  >
    {children}
  </a>
);

const Reviews = () => (
  <section id="avaliacoes" className="py-24">
    <div className="container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
        O que nossos <span className="text-primary">clientes</span> dizem
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:glow-primary"
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
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <UnderlineLink href="https://g.page/r/carloseletrica/review" className="text-sm">
          Ver todas as avaliações no Google →
        </UnderlineLink>
      </div>
    </div>
  </section>
);

export default Reviews;
