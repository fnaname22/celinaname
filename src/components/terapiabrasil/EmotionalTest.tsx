import { useState } from "react";

const QUESTIONS = [
  "Você sente solidão frequentemente?",
  "Tem dificuldade para dormir ou desligar a mente?",
  "Sente ansiedade sobre o futuro?",
  "Tem se sentido emocionalmente esgotado(a)?",
  "Sente que perdeu sua identidade após mudar de país?",
  "Tem dificuldade em manter relacionamentos saudáveis?",
  "Você sente saudade excessiva do Brasil?",
  "Sente que precisa ser forte o tempo todo?",
  "Tem crises emocionais que esconde dos outros?",
  "Sente dificuldade para experimentar felicidade genuína?",
];

const RESULTS = [
  { max: 5, label: "Leve", color: "oklch(0.82 0.13 90)", text: "Você está se saindo bem, mas sua mente merece atenção antes que o peso aumente. Uma sessão pode fortalecer ainda mais seu equilíbrio emocional." },
  { max: 10, label: "Moderado", color: "oklch(0.72 0.16 60)", text: "Sua mente está carregando mais do que deveria. Você não precisa resolver isso sozinho(a) — a hipnoterapia pode trazer alívio rápido e duradouro." },
  { max: 15, label: "Alto", color: "oklch(0.62 0.2 35)", text: "Seu emocional está sobrecarregado e pedindo ajuda. É hora de agir. Celi Naname pode te guiar para um novo patamar de equilíbrio e paz." },
  { max: 20, label: "Crítico", color: "oklch(0.5 0.22 25)", text: "Você está em um momento muito delicado. Essa dor merece cuidado urgente e acolhimento profissional. Dê esse passo agora — você merece se sentir bem." },
];

const COUNTRIES = ["Estados Unidos", "Portugal", "Reino Unido", "Irlanda", "Canadá", "Alemanha", "Espanha", "Itália", "França", "Suíça", "Holanda", "Japão", "Austrália", "Outro"];

export function EmotionalTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const total = answers.reduce((a, b) => a + b, 0);
  const result = RESULTS.find(r => total <= r.max)!;

  function answer(value: number) {
    const next = [...answers, value];
    setAnswers(next);
    if (next.length < QUESTIONS.length) setStep(step + 1);
  }

  function reset() {
    setAnswers([]); setStep(0); setSubmitted(false);
  }

  const finished = answers.length === QUESTIONS.length;

  return (
    <section id="teste" className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="gold-divider mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Descubra como está sua saúde emocional vivendo no exterior
          </h2>
          <p className="text-muted-foreground text-lg">
            Responda 10 perguntas e receba uma análise gratuita do seu momento emocional atual.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          {!finished ? (
            <>
              <div className="flex justify-between items-center mb-2 text-xs tracking-widest uppercase text-muted-foreground">
                <span>Pergunta {step + 1} de {QUESTIONS.length}</span>
                <span>{Math.round(((step) / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="h-[2px] bg-border rounded-full overflow-hidden mb-10">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${((step) / QUESTIONS.length) * 100}%` }} />
              </div>

              <div key={step} className="fade-up">
                <h3 className="font-serif text-2xl md:text-3xl text-center min-h-[5rem] flex items-center justify-center mb-10">
                  {QUESTIONS[step]}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button onClick={() => answer(2)} className="btn-outline-gold">Sim</button>
                  <button onClick={() => answer(1)} className="btn-outline-gold">Às vezes</button>
                  <button onClick={() => answer(0)} className="btn-outline-gold">Não</button>
                </div>
              </div>
            </>
          ) : !submitted ? (
            <div className="fade-up text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full" style={{ background: result.color }} />
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Nível {result.label}</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-6">Sua análise emocional</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">{result.text}</p>

              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="text-left space-y-4 max-w-md mx-auto">
                <input required placeholder="Nome completo" className="w-full px-5 py-4 rounded-full bg-background border border-border focus:border-primary outline-none" />
                <input required placeholder="WhatsApp (com DDI)" className="w-full px-5 py-4 rounded-full bg-background border border-border focus:border-primary outline-none" />
                <input required type="email" placeholder="E-mail" className="w-full px-5 py-4 rounded-full bg-background border border-border focus:border-primary outline-none" />
                <select required defaultValue="" className="w-full px-5 py-4 rounded-full bg-background border border-border focus:border-primary outline-none">
                  <option value="" disabled>País onde mora</option>
                  {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                </select>
                <button type="submit" className="btn-gold w-full">Receber minha meditação gratuita</button>
              </form>
            </div>
          ) : (
            <div className="fade-up text-center py-8">
              <div className="gold-divider mb-6" />
              <h3 className="font-serif text-3xl md:text-4xl mb-4">Pronto. Seu presente está a caminho.</h3>
              <p className="text-muted-foreground mb-8">Verifique seu e-mail nos próximos minutos. Enquanto isso, ouça a meditação abaixo.</p>
              <button onClick={reset} className="btn-outline-gold">Refazer teste</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
