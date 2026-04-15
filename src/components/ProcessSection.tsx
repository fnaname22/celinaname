import { MessageCircle, Headphones, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Conexão",
    description: "Primeiro contato via WhatsApp para entendermos seu momento atual.",
  },
  {
    icon: Headphones,
    step: "02",
    title: "Sessão Experimental",
    description: "Você vivencia o estado de foco e relaxamento profundo da hipnose na prática.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Programa Personalizado",
    description: "Desenvolvemos um plano focado na sua libertação e resultados rápidos.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full border border-teal" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full border border-teal" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Como funciona o tratamento?
          </h2>
          <p className="text-primary-foreground/60 text-lg">O caminho da transformação em 3 passos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="relative w-20 h-20 rounded-full bg-teal/10 border-2 border-teal/30 flex items-center justify-center mx-auto mb-6">
                <s.icon size={32} className="text-teal" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-3">{s.title}</h3>
              <p className="text-primary-foreground/60 leading-relaxed max-w-xs mx-auto">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
