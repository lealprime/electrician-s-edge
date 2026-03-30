import { useRef, useState, FormEvent } from "react";
import { Phone, Mail, Instagram, Facebook, Clock, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;

    const formData = new FormData(form);
    setLoading(true);

    try {
      const { error } = await supabase.from("agendamentos").insert({
        nome: formData.get("nome") as string,
        telefone: formData.get("telefone") as string,
        email: (formData.get("email") as string) || null,
        cep: (formData.get("cep") as string) || null,
        descricao: formData.get("descricao") as string,
        status: "pendente",
      });

      if (error) throw error;

      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("Erro ao enviar agendamento:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="agendamento" className="py-24 bg-primary-foreground">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-14">
          Agendamento & <span className="text-primary">Contato</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="font-display text-xl font-bold mb-6">Agende seu Serviço</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input name="nome" required type="text" placeholder="Nome completo" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input name="telefone" required type="tel" placeholder="Telefone" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input name="email" type="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input name="cep" type="text" placeholder="CEP" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <textarea name="descricao" required rows={4} placeholder="Descrição do problema" className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-display font-bold hover:brightness-110 transition disabled:opacity-50">
                {loading ? "Enviando..." : "Enviar Agendamento"}
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
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-secondary/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:translate-x-[2px]"
                >
                  <Phone size={18} className="text-primary shrink-0" />
                  <span className="text-muted-foreground">(11) 99999-9999</span>
                </a>
                <a
                  href="mailto:contato@carloseletrica.com"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-secondary/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:translate-x-[2px]"
                >
                  <Mail size={18} className="text-primary shrink-0" />
                  <span className="text-muted-foreground">contato@carloseletrica.com</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-secondary/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:translate-x-[2px]"
                >
                  <Instagram size={18} className="text-primary shrink-0" />
                  <span className="text-muted-foreground">@carloseletrica</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-secondary/50 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:translate-x-[2px]"
                >
                  <Facebook size={18} className="text-primary shrink-0" />
                  <span className="text-muted-foreground">/carloseletrica</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
