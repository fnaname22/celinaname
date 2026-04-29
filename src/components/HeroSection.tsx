import celiHero from "@/assets/celi-hero.png";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511973894624?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o";

export default function HeroSection() {
  return (
    <section id="hero" className="relative lg:min-h-screen flex flex-col lg:block lg:items-center bg-navy overflow-hidden">
      {/* Desktop: photo on right */}
      <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent z-10" />
        <img
          src={celiHero}
          alt="Celi Naname, hipnoterapeuta em São Paulo - Hipnose Ericksoniana"
          className="w-full h-full object-cover object-top"
          width={600}
          height={800}
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 pb-10 lg:py-40 w-full">
        <div className="max-w-2xl">
          <div className="accent-line mb-8" />
          <p className="text-teal font-medium text-sm tracking-widest uppercase mb-4">
            Hipnose Ericksoniana
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Liberte-se da ansiedade com a força da{" "}
            <span className="text-teal italic">Hipnose.</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Recupere o controle da sua vida através de uma abordagem integrativa que acessa a raiz das suas dores emocionais. Atendimento especializado com Celi Naname.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-lg">
            Agendar minha sessão agora
            <ArrowRight size={20} />
          </a>

          <div className="mt-16 flex items-center gap-8 text-primary-foreground/50 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal" />
              <span>Online & Presencial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal" />
              <span>Brasileiros no exterior</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: photo below content (in flow, no overlap) */}
      <div className="lg:hidden relative w-full h-80 z-10">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-navy to-transparent z-10" />
        <img
          src={celiHero}
          alt="Celi Naname, hipnoterapeuta"
          className="w-full h-full object-cover object-top"
          width={600}
          height={800}
          decoding="async"
        />
      </div>
    </section>
  );
}
