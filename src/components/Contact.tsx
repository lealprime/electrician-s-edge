import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, Clock, CheckCircle } from "lucide-react";

const UnderlineLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <a
    href={href}
    className={`relative inline-block text-muted-foreground hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${className}`}
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
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Agendamento & <span className="text-primary">Contato</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-card border border-border"
          >
            <h3 className="font-display text-xl font-bold mb-6">Agende seu Serviço</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                placeholder="Nome completo"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                required
                type="tel"
                placeholder="Telefone"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="text"
                placeholder="CEP"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                required
                rows={4}
                placeholder="Descrição do problema"
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-display font-bold hover:brightness-110 transition"
              >
                Enviar Agendamento
              </button>

              {sent && (
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20 animate-fade-in">
                  <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                  <p className="text-sm">
                    <strong>Ótimo!</strong> Seu agendamento foi enviado. Em breve entraremos em contato.
                  </p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
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
                  <UnderlineLink href="tel:+5511999999999">(11) 99999-9999</UnderlineLink>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <UnderlineLink href="mailto:contato@carloseletrica.com">contato@carloseletrica.com</UnderlineLink>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram size={18} className="text-primary shrink-0" />
                  <UnderlineLink href="#">@carloseletrica</UnderlineLink>
                </div>
                <div className="flex items-center gap-3">
                  <Facebook size={18} className="text-primary shrink-0" />
                  <UnderlineLink href="#">/carloseletrica</UnderlineLink>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
