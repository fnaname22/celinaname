import { MapPin, Clock, Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o";

export default function FooterSection() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding pb-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Pronta para sua <span className="text-teal italic">transformação?</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-8 max-w-lg mx-auto">
            Dê o primeiro passo e agende sua sessão experimental agora.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg">
            Agendar minha sessão agora
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 pt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-primary-foreground/60">
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-teal shrink-0 mt-0.5" />
            <p>Alameda Jaú, N°1767 - Térreo<br />Jardim Paulista, São Paulo - SP</p>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={18} className="text-teal shrink-0 mt-0.5" />
            <p>Segundas e Terças (Online)<br />Quartas a Sextas (Presencial)</p>
          </div>
          <div className="flex items-start gap-3">
            <Instagram size={18} className="text-teal shrink-0 mt-0.5" />
            <p>@celinaname</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2026 Celi Naname. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
