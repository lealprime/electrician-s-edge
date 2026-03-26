import { Zap, Instagram, Facebook, Mail } from "lucide-react";

const navLinks = ["Serviços", "Áreas", "Avaliações", "Agendamento"];

const Footer = () => (
  <footer className="border-t border-border bg-secondary py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Logo */}
        <div className="flex items-center gap-2 font-display font-bold text-lg">
          <Zap className="text-primary" size={20} />
          Carlos <span className="text-primary">Elétrica</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 md:justify-center">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Social + Contact */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="mailto:contato@carloseletrica.com" aria-label="E-mail" className="text-muted-foreground hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-xs text-muted-foreground">(11) 99999-9999</p>
          <p className="text-xs text-muted-foreground">contato@carloseletrica.com</p>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-muted-foreground">
        <span>CNPJ: 12.345.678/0001-99 · CREA-SP 000000</span>
        <span>© 2024 Carlos Elétrica. Todos os direitos reservados.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
