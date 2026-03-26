import { Zap, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary py-16">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + description */}
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg mb-4">
            <Zap className="text-primary" size={20} />
            Carlos <span className="text-primary">Elétrica</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Referência em serviços elétricos residenciais e comerciais. Compromisso com qualidade, segurança e satisfação total dos nossos clientes.
          </p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"><Facebook size={18} /></a>
            <a href="mailto:contato@carloseletrica.com" aria-label="E-mail" className="w-9 h-9 rounded-md bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"><Mail size={18} /></a>
          </div>
        </div>

        {/* Menu Rápido */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5">Menu Rápido</h4>
          <ul className="space-y-3">
            {[
              { label: "Início", href: "#" },
              { label: "Serviços", href: "#servicos" },
              { label: "Avaliações", href: "#avaliacoes" },
              { label: "Contato", href: "#agendamento" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5">Serviços</h4>
          <ul className="space-y-3">
            {["Instalação Elétrica", "Manutenção Preventiva", "Iluminação e Tomadas"].map((s) => (
              <li key={s}>
                <a href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              São Paulo, SP
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary shrink-0" />
              (11) 99999-9999
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary shrink-0" />
              contato@carloseletrica.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-muted-foreground">
        <span>© 2026 <span className="text-primary font-semibold">Carlos Elétrica</span>. Todos os direitos reservados.</span>
        <span>CREA/SP #000000 · Licenciado e Certificado</span>
      </div>
    </div>
  </footer>
);

export default Footer;
