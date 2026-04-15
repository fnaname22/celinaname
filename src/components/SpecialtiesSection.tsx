import { Brain, Target, Sparkles, Heart, Eye, Coins } from "lucide-react";

const specialties = [
  {
    icon: Brain,
    title: "Hipnose",
    description: "Uma jornada de autoconhecimento conectando você ao seu inconsciente para cura real.",
  },
  {
    icon: Target,
    title: "PNL",
    subtitle: "Programação Neurolinguística",
    description: "Reprogramação de crenças limitantes para alcançar seus objetivos.",
  },
  {
    icon: Sparkles,
    title: "Master Coaching",
    description: "Foco em alta performance e clareza para tomadas de decisão.",
  },
  {
    icon: Heart,
    title: "EFT e Barras de Access",
    description: "Técnicas complementares para alívio imediato de bloqueios emocionais.",
  },
  {
    icon: Eye,
    title: "Psicanálise & Fisiognomia",
    subtitle: "Cristina Cairo · Formação Especializada",
    description: "Integra o inconsciente à leitura corporal simbólica para revelar o que a fala ancora em silêncio.",
  },
  {
    icon: Coins,
    title: "Liberdade Financeira",
    subtitle: "Curso de Educação Financeira",
    description: "Educação voltada ao equilíbrio financeiro e desenvolvimento de uma mentalidade próspera.",
  },
];

export default function SpecialtiesSection() {
  return (
    <section id="especialidades" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Minha Abordagem
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Técnicas integradas para resultados profundos e duradouros
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((s, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl p-8 border border-border hover:border-teal/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                <s.icon size={28} className="text-teal" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{s.title}</h3>
              {s.subtitle && <p className="text-xs text-muted-foreground mb-3">{s.subtitle}</p>}
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
