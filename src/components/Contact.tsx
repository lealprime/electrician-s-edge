import { Phone, Mail, Instagram, Facebook, Clock, MapPin, Zap } from "lucide-react";

const Contact = () => {
  return (
    <section id="agendamento" className="py-24 bg-primary-foreground">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Agendamento & <span className="text-primary">Contato</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Entre em contato conosco para agendar seu serviço ou tirar dúvidas. Estamos prontos para atender você!
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contato Direto - Esquerda */}
          <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="font-display text-xl font-bold mb-6">Contato Direto</h3>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-4 px-5 py-4 rounded-lg border border-border bg-secondary/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:translate-x-[2px]"
              >
                <Phone size={20} className="text-primary shrink-0" />
                <div>
                  <span className="block text-foreground font-medium">(11) 99999-9999</span>
                  <span className="text-muted-foreground text-xs">Ligue ou WhatsApp</span>
                </div>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-5 py-4 rounded-lg border border-border bg-secondary/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:translate-x-[2px]"
              >
                <Zap size={20} className="text-primary shrink-0" />
                <div>
                  <span className="block text-foreground font-medium">WhatsApp Direto</span>
                  <span className="text-muted-foreground text-xs">Resposta rápida</span>
                </div>
              </a>
              <a
                href="mailto:contato@carloseletrica.com"
                className="flex items-center gap-4 px-5 py-4 rounded-lg border border-border bg-secondary/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:translate-x-[2px]"
              >
                <Mail size={20} className="text-primary shrink-0" />
                <div>
                  <span className="block text-foreground font-medium">contato@carloseletrica.com</span>
                  <span className="text-muted-foreground text-xs">Envie um e-mail</span>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-5 py-4 rounded-lg border border-border bg-secondary/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:translate-x-[2px]"
              >
                <Instagram size={20} className="text-primary shrink-0" />
                <div>
                  <span className="block text-foreground font-medium">@carloseletrica</span>
                  <span className="text-muted-foreground text-xs">Siga no Instagram</span>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-5 py-4 rounded-lg border border-border bg-secondary/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:translate-x-[2px]"
              >
                <Facebook size={20} className="text-primary shrink-0" />
                <div>
                  <span className="block text-foreground font-medium">/carloseletrica</span>
                  <span className="text-muted-foreground text-xs">Curta no Facebook</span>
                </div>
              </a>
            </div>
          </div>

          {/* Horários + Localização - Direita */}
          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="text-primary" size={20} /> Horários de Atendimento
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex justify-between items-center py-2 border-b border-border/50">
                  <span>Segunda a Sexta</span>
                  <span className="text-foreground font-medium bg-primary/10 px-3 py-1 rounded-full text-xs">7h às 18h</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-border/50">
                  <span>Sábado</span>
                  <span className="text-foreground font-medium bg-primary/10 px-3 py-1 rounded-full text-xs">8h às 14h</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span>Domingo</span>
                  <span className="text-muted-foreground font-medium bg-destructive/10 px-3 py-1 rounded-full text-xs">Fechado</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-primary" size={20} /> Localização
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Atendemos em toda a Grande São Paulo e região metropolitana. Serviço rápido e deslocamento incluso.
              </p>
              <div className="flex flex-wrap gap-2">
                {["São Paulo", "Guarulhos", "Osasco", "Santo André", "São Bernardo", "Barueri"].map((city) => (
                  <span key={city} className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-muted-foreground">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <p className="text-sm font-medium text-foreground mb-2">Precisa de atendimento urgente?</p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-bold hover:brightness-110 transition"
              >
                <Zap size={18} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
