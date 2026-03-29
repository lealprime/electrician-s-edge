import { useRef, useState, FormEvent } from "react";
import { Phone, Mail, Instagram, Facebook, Clock, CheckCircle } from "lucide-react";

const HoverLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <a
    href={href}
    className={`inline-block text-muted-foreground transition-all duration-200 hover:translate-x-[2px] hover:text-primary ${className}`}
  >
    {children}
  </a>
);

const Contact = () => {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="agendamento" className="py-24">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
          Agendamento & <span className="text-primary">Contato</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="font-display text-xl font-bold mb-6">Agende seu Serviço</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Nome completo" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input required type="tel" placeholder="Telefone" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input type="text" placeholder="CEP" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <textarea required rows={4} placeholder="Descrição do problema" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-display font-bold hover:brightness-110 transition">
                Enviar Agendamento
              </button>

              {sent && (
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                  <p className="text-sm">
                    <strong>Ótimo!</strong> Seu agendamento foi enviado. Em breve entraremos em contato.
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="text-primary" size={20} /> Horários de Atendimento
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between"><span>Segunda a Sexta</span><span className="text-foreground font-medium">7h às 18h</span></li>
                <li className="flex justify-between"><span>Sábado</span><span className="text-foreground font-medium">8h às 14h</span></li>
                <li className="flex justify-between"><span>Domingo</span><span className="text-foreground font-medium">Fechado</span></li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-display text-xl font-bold mb-4">Contato Direto</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <HoverLink href="tel:+5511999999999">(11) 99999-9999</HoverLink>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <HoverLink href="mailto:contato@carloseletrica.com">contato@carloseletrica.com</HoverLink>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram size={18} className="text-primary shrink-0" />
                  <HoverLink href="#">@carloseletrica</HoverLink>
                </div>
                <div className="flex items-center gap-3">
                  <Facebook size={18} className="text-primary shrink-0" />
                  <HoverLink href="#">/carloseletrica</HoverLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
