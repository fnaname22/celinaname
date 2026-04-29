import { Link } from "@tanstack/react-router";
import { Brain, HeartPulse, ArrowRight } from "lucide-react";

const topics = [
  {
    to: "/hipnose-ericksoniana" as const,
    icon: Brain,
    title: "Hipnose Ericksoniana",
    desc: "Entenda a abordagem de Milton Erickson, como funciona o transe terapêutico e os benefícios para sua transformação emocional.",
    cta: "Ler guia completo",
  },
  {
    to: "/terapia-ansiedade" as const,
    icon: HeartPulse,
    title: "Terapia para Ansiedade",
    desc: "Como a hipnose trata sintomas de ansiedade, crises de pânico e estresse na raiz, com resultados rápidos e duradouros.",
    cta: "Conhecer o tratamento",
  },
];

export default function TopicClusterSection() {
  return (
    <section id="conteudos" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conteúdos para aprofundar
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Guias completos sobre os principais temas trabalhados nas sessões.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                className="group bg-card border border-border rounded-xl p-8 hover:border-teal transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  {t.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">{t.desc}</p>
                <span className="inline-flex items-center gap-2 text-teal font-semibold group-hover:gap-3 transition-all">
                  {t.cta} <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
