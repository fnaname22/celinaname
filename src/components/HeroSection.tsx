import heroCeli from "@/assets/hero-celi.jpg";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/30 to-navy opacity-90" />
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy z-10" />
        <img
          src={heroCeli}
          alt="Celi Naname - Hipnoterapeuta"
          className="w-full h-full object-cover object-top"
          width={768}
          height={1024}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          <div className="gold-line mb-8" />
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
            Hipnose Clínica Ericksoniana
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Liberte-se da ansiedade com a força da{" "}
            <span className="text-gold italic">Hipnose Clínica.</span>
          </h1>
          <p className="text-primary-foreground/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Recupere o controle da sua vida através de uma abordagem integrativa que acessa a raiz das suas dores emocionais. Atendimento especializado com Celi Naname.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg">
              Agendar minha sessão agora
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-primary-foreground/50 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>Online & Presencial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>Brasileiros no exterior</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-72 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent z-10" />
        <img
          src={heroCeli}
          alt="Celi Naname"
          className="w-full h-full object-cover object-top"
          width={768}
          height={1024}
        />
      </div>
    </section>
  );
}
