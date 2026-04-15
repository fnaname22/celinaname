import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Vou perder o controle?",
    a: "Não. Você permanece consciente e no controle durante todo o processo. A hipnose é um estado natural de foco e relaxamento.",
  },
  {
    q: "Quantas sessões preciso?",
    a: "As mudanças são rápidas por acessarmos o inconsciente, mas o plano é individualizado para cada pessoa.",
  },
  {
    q: "Atende online?",
    a: "Sim, com a mesma eficácia do presencial para brasileiros em todo o mundo.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading text-lg font-semibold text-foreground">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-teal shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-foreground/70 leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
