import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    setSent(true);
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

            {sent ? (
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                <p className="text-sm">
                  <strong>Ótimo!</strong> Seu agendamento foi enviado. Em breve entraremos em contato.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
              </form>
            )}
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
                <a href="tel:+5511999999999" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" /> (11) 99999-9999
                </a>
                <a href="mailto:contato@carloseletrica.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} className="text-primary" /> contato@carloseletrica.com
                </a>
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={18} className="text-primary" /> @carloseletrica
                </a>
                <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={18} className="text-primary" /> /carloseletrica
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
