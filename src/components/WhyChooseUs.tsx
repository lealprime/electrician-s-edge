import { ShieldCheck, Zap, DollarSign, Headphones } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Profissionais Qualificados", desc: "Equipe experiente e certificada, pronta para resolver seu problema com eficiência e segurança." },
  { icon: Zap, title: "Atendimento Rápido", desc: "Resposta ágil e suporte imediato para sua necessidade elétrica." },
  { icon: DollarSign, title: "Preço Justo", desc: "Transparência total nos valores, sem surpresas no orçamento." },
  { icon: Headphones, title: "Suporte Completo", desc: "Acompanhamento do início ao fim, com garantia de satisfação." },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-neutral-900">
    <div className="container text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-14">
        Por que escolher <span className="text-primary">nossos serviços</span>?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {reasons.map((r) => (
          <div key={r.title} className="space-y-3 group mx-0 my-0 px-[22px] py-[33px] mr-0 mb-0 mt-0 ml-0 pr-[22px] rounded">
            <div className="flex justify-center">
              <r.icon className="text-primary transition-transform duration-200 group-hover:scale-110" size={36} />
            </div>
            <h3 className="font-display font-semibold text-lg">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
