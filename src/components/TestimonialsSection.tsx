import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Depois de anos lutando contra a ansiedade, as sessões com a Celi me transformaram. Finalmente me sinto em paz.",
    name: "Marina S.",
    location: "Canadá",
  },
  {
    text: "Consegui identificar padrões inconscientes que nem sabia que existiam e finalmente destravei minha carreira.",
    name: "Rafael M.",
    location: "Portugal",
  },
  {
    text: "Eu era cética, mas logo na primeira sessão senti uma diferença enorme. Sou uma nova pessoa hoje.",
    name: "Juliana R.",
    location: "EUA",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Vidas Transformadas
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            O que meus clientes dizem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow relative"
            >
              <Quote size={32} className="text-gold/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border aspect-[9/16] max-h-80 flex items-center justify-center"
            >
              <div className="text-center text-muted-foreground/50">
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-xs">Depoimento em vídeo</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
