import { useState, useCallback } from "react";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Áreas", href: "#areas" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Contato", href: "#agendamento" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 font-display font-bold text-xl"
        >
          <Zap className="text-primary" size={24} />
          <span>Carlos <span className="text-primary">Elétrica</span></span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-[2px] hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                handleClick(e, l.href);
                setOpen(false);
              }}
              className="block px-6 py-3 text-muted-foreground transition-all duration-200 hover:translate-x-[2px] hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
