import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/terapiabrasil/hero.jpg";
import { Header, StickyMobileCTA } from "@/components/terapiabrasil/Header";
import { EmotionalTest } from "@/components/terapiabrasil/EmotionalTest";
import {
  SocialBar, Meditation, About, Benefits, Testimonials,
  HowItWorks, FAQSection, FinalCTA, Footer, FloatingWhatsApp,
} from "@/components/terapiabrasil/sections";

export const Route = createFileRoute("/terapiabrasil")({
  head: () => ({
    title: "Celi Naname — Hipnoterapia Online para Brasileiros no Exterior",
    meta: [
      { name: "description", content: "Recupere equilíbrio emocional, autoestima e paz interior com sessões online de hipnoterapia. Para brasileiros vivendo fora do Brasil." },
      { property: "og:title", content: "Celi Naname — Hipnoterapia para Brasileiros no Exterior" },
      { property: "og:description", content: "Sessões online de hipnoterapia para brasileiros no exterior. Faça o teste emocional gratuito." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Terapiabrasil,
});

const CALENDLY = "https://wa.me/5511973894624?text=Ol%C3%A1+Celi%2C+vim+pelo+site+e+gostaria+de+agendar+uma+sess%C3%A3o+de+hipnoterapia.";

function Terapiabrasil() {
  return (
    <>
      <style>{`
        .terapiabrasil-page {
          --radius: 0.5rem;
          --background: oklch(0.972 0.011 80);
          --foreground: oklch(0.245 0.025 50);
          --card: oklch(1 0 0);
          --card-foreground: var(--foreground);
          --popover: oklch(1 0 0);
          --popover-foreground: var(--foreground);
          --primary: oklch(0.66 0.10 195);
          --primary-foreground: oklch(1 0 0);
          --secondary: oklch(0.92 0.012 75);
          --secondary-foreground: var(--foreground);
          --muted: oklch(0.92 0.012 75);
          --muted-foreground: oklch(0.45 0.02 60);
          --accent: oklch(0.92 0.012 75);
          --accent-foreground: var(--foreground);
          --destructive: oklch(0.55 0.2 27);
          --destructive-foreground: oklch(0.99 0 0);
          --border: oklch(0.88 0.018 75);
          --input: oklch(0.88 0.018 75);
          --ring: oklch(0.72 0.09 80);

          --gold: oklch(0.66 0.10 195);
          --gold-soft: oklch(0.82 0.07 195);
          --cream: oklch(0.96 0.014 200);

          background-color: var(--background);
          color: var(--foreground);
          font-family: 'Manrope', 'Inter', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .terapiabrasil-page h1, 
        .terapiabrasil-page h2, 
        .terapiabrasil-page h3, 
        .terapiabrasil-page h4 { 
          font-family: 'Manrope', system-ui, sans-serif; 
          font-weight: 700; 
          letter-spacing: -0.02em; 
        }

        .terapiabrasil-page .font-serif { 
          font-family: 'Cormorant Garamond', Georgia, serif !important; 
          font-weight: 400; 
          font-style: italic; 
          letter-spacing: 0; 
        }

        .terapiabrasil-page .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold) 50%, transparent);
        }

        .terapiabrasil-page .gold-divider {
          width: 60px; height: 1px; background: var(--gold); display: inline-block;
        }

        .terapiabrasil-page .btn-gold {
          background: var(--gold);
          color: #ffffff;
          padding: 1rem 2rem;
          border-radius: 999px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.8rem;
          display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
          transition: all .3s ease;
          border: 1px solid var(--gold);
          cursor: pointer;
        }

        .terapiabrasil-page .btn-gold:hover { 
          background: transparent; 
          color: var(--foreground); 
        }

        .terapiabrasil-page .btn-outline-gold {
          background: transparent;
          color: var(--foreground);
          padding: 1rem 2rem;
          border-radius: 999px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.8rem;
          display: inline-flex; align-items: center; justify-content: center; gap: .5rem;
          border: 1px solid var(--gold);
          transition: all .3s ease;
          cursor: pointer;
        }

        .terapiabrasil-page .btn-outline-gold:hover { 
          background: var(--gold); 
          color: #ffffff; 
        }

        .terapiabrasil-page .fade-up { animation: fadeUp .9s ease both; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(20px);} to {opacity:1; transform:none;} }
        @keyframes pulseRing { 0%,100%{ opacity:.4;} 50%{ opacity:1;} }
        .terapiabrasil-page .pulse-ring { animation: pulseRing 2s ease-in-out infinite; }
      `}</style>
      <div className="terapiabrasil-page min-h-screen overflow-x-hidden">
        <Header />

        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-[100svh] flex items-center">
          <div className="absolute inset-0 -z-10">
            <img src={hero} alt="" width={1536} height={1024} className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center fade-up">
            <span className="gold-divider mb-6" />
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Hipnoterapia Online · Brasileiros no Exterior</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.05] mb-8 max-w-4xl mx-auto">
              Você saiu do Brasil… mas as dores emocionais vieram junto?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Descubra como brasileiros que vivem no exterior estão recuperando equilíbrio emocional, autoestima e paz interior através da hipnoterapia online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#teste" className="btn-gold">Fazer o teste emocional gratuito</a>
              <a href={CALENDLY} target="_blank" rel="noopener" className="btn-outline-gold">Agendar sessão online</a>
            </div>
          </div>
        </section>

        <SocialBar />
        <EmotionalTest />
        <Meditation />
        <About />
        <Benefits />
        <Testimonials />
        <HowItWorks />
        <FAQSection />
        <FinalCTA />
        <Footer />

        <FloatingWhatsApp />
        <StickyMobileCTA />
      </div>
    </>
  );
}
