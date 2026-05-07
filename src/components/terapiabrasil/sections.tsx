import { useState, useRef, useEffect } from "react";
import celi from "@/assets/terapiabrasil/celi.jpg";

const PLAYLIST = [
  { title: "Respire Fundo", duration: "Faixa 1", src: "/audio/respire-fundo.mp3" },
  { title: "Respire Fundo II", duration: "Faixa 2", src: "/audio/respire-fundo-2.mp3" },
  { title: "Ar Entre as Mãos", duration: "Faixa 3", src: "/audio/ar-entre-as-maos.mp3" },
  { title: "Vaga Lenta", duration: "Faixa 4", src: "/audio/vaga-lenta.mp3" },
];

const CALENDLY = "https://wa.me/5511973894624?text=Ol%C3%A1+Celi%2C+vim+pelo+site+e+gostaria+de+agendar+uma+sess%C3%A3o+de+hipnoterapia.";

export function SocialBar() {
  return (
    <div className="bg-foreground text-background py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs md:text-sm tracking-[0.15em] uppercase">
        <span className="text-primary">✦</span>
        <span>Mais de 500 brasileiros no exterior atendidos</span>
        <span className="text-primary">✦</span>
        <span>Sessões online para qualquer país</span>
        <span className="text-primary">✦</span>
        <span>Resultados desde a primeira sessão</span>
        <span className="text-primary">✦</span>
      </div>
    </div>
  );
}

export function Meditation() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) a.play().catch(() => setPlaying(false));
    else a.pause();
  }, [playing, current]);

  const select = (i: number) => {
    if (i === current) {
      setPlaying(p => !p);
    } else {
      setCurrent(i);
      setPlaying(true);
    }
  };

  return (
    <section id="audios" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="gold-divider mb-6" />
        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Áudios terapêuticos exclusivos
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Uma playlist criada para brasileiros no exterior aliviarem a ansiedade, a saudade e o cansaço emocional. Ouça aqui ou baixe para o seu celular e escute quando precisar.
        </p>

        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2 text-center">Tocando agora</p>
          <h3 className="font-serif text-2xl md:text-3xl mb-6 text-center">"{PLAYLIST[current].title}"</h3>

          <audio
            ref={audioRef}
            src={PLAYLIST[current].src}
            onEnded={() => {
              if (current < PLAYLIST.length - 1) setCurrent(current + 1);
              else setPlaying(false);
            }}
            controls
            className="w-full mb-8"
          />

          <ul className="space-y-2">
            {PLAYLIST.map((track, i) => (
              <li
                key={track.src}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                  i === current ? "border-primary bg-primary/5" : "border-border hover:bg-secondary/40"
                }`}
              >
                <button
                  onClick={() => select(i)}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0"
                  aria-label={`Tocar ${track.title}`}
                >
                  {i === current && playing ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{track.title}</p>
                  <p className="text-xs text-muted-foreground">{track.duration}</p>
                </div>
                <a
                  href={track.src}
                  download
                  className="text-xs tracking-widest uppercase text-primary hover:underline shrink-0"
                  aria-label={`Baixar ${track.title}`}
                >
                  Baixar
                </a>
              </li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground text-center mt-6 leading-relaxed">
            💡 No celular: toque em <strong>Baixar</strong> para salvar no seu aparelho e ouvir offline, mesmo sem internet.
          </p>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={celi}
            alt="Celi Naname, hipnoterapeuta"
            width={1024}
            height={1280}
            loading="lazy"
            className="rounded-2xl w-full object-cover aspect-[4/5]"
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary rounded-2xl -z-0 hidden md:block" />
        </div>
        <div>
          <span className="gold-divider mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Olá, sou Celi Naname.</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>Há anos ajudo brasileiros no exterior a superarem dores emocionais profundas que muitas vezes não têm palavras — aquela sensação de estar perdido(a) entre dois mundos, sem saber onde pertencer.</p>
            <p>Com herança ítalo-japonesa, uno em meu atendimento a disciplina e o foco orientais ao acolhimento e empatia mediterrâneos. Formada pelas instituições mais renomadas do mundo, como OMNI Hypnosis, ACT Institute e com treinamento imersivo com Tony Robbins nos EUA.</p>
            <p>Atendo online para qualquer país, com a mesma presença, cuidado e profundidade de uma sessão presencial.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["OMNI Hypnosis", "ACT Institute", "IBC Coaching", "Tony Robbins UPW", "Cristina Cairo"].map(s => (
              <span key={s} className="text-xs tracking-widest uppercase border border-primary/40 text-foreground px-4 py-2 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  { icon: "🌬️", title: "Controle da Ansiedade", desc: "Pare de viver em modo alerta e recupere a leveza." },
  { icon: "💪", title: "Fortalecimento Emocional", desc: "Desenvolva resiliência para os desafios do exterior." },
  { icon: "✨", title: "Autoestima Elevada", desc: "Reconecte-se com seu valor e sua identidade." },
  { icon: "❤️", title: "Relacionamentos Saudáveis", desc: "Vínculos mais leves e comunicação mais clara." },
  { icon: "⚖️", title: "Equilíbrio Mental", desc: "Mente organizada, decisões mais seguras." },
  { icon: "🔓", title: "Libertação de Crenças", desc: "Solte os padrões que te impedem de avançar." },
  { icon: "☮️", title: "Paz Interior", desc: "Sinta-se bem consigo mesmo(a), onde quer que esteja." },
  { icon: "🌿", title: "Reconexão Pessoal", desc: "Redescubra quem você é além das circunstâncias." },
];

export function Benefits() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="gold-divider mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif">O que muda depois das sessões com a Celi</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-background p-8 hover:bg-secondary/40 transition-colors">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-serif text-xl mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Alessandra James", city: "Jacksonville, EUA", flag: "🇺🇸", text: "Fazer terapia transformou minha vida. Aprendi a me conhecer melhor, entender meus limites e valorizar minhas conquistas. Agradeço de coração à querida Celi por toda ajuda." },
  { name: "Patrícia Braga", city: "Mafra, Portugal", flag: "🇵🇹", text: "Conhecer a Celi foi um presente. Estamos em países diferentes mas é como se ela estivesse na minha frente. Celi tem me ajudado a me recuperar de um stress pós-traumático e a cuidar melhor da minha auto-estima." },
  { name: "Marcos T.", city: "Dublin, Irlanda", flag: "🇮🇪", text: "Achei que estava bem, mas por dentro estava me apagando. As sessões com a Celi me devolveram a clareza e a vontade de estar aqui." },
  { name: "Juliana R.", city: "Toronto, Canadá", flag: "🇨🇦", text: "Vivia em piloto automático, sem conseguir sentir nada de verdade. Hoje me reconheço novamente." },
  { name: "Fernanda M.", city: "Tóquio, Japão", flag: "🇯🇵", text: "A solidão aqui era silenciosa e pesada. A Celi me ensinou a me tornar minha própria companhia." },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="gold-divider mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif">Brasileiros no exterior que já transformaram sua vida emocional</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <figure key={t.name} className="bg-card border border-border rounded-2xl p-8 flex flex-col">
              <svg width="32" height="24" viewBox="0 0 32 24" className="text-primary mb-4 fill-current opacity-60">
                <path d="M0 24V12C0 5.4 5.4 0 12 0v4c-4.4 0-8 3.6-8 8h8v12H0zm20 0V12c0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h8v12H20z"/>
              </svg>
              <blockquote className="text-foreground/90 leading-relaxed flex-1">"{t.text}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-serif text-lg">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.city} {t.flag}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Faça o teste", d: "Gratuito e revelador." },
  { n: "02", t: "Receba a meditação", d: "Áudio exclusivo via e-mail." },
  { n: "03", t: "Agende a sessão", d: "Online, qualquer país, qualquer horário." },
  { n: "04", t: "Transforme sua vida", d: "Resultados desde o primeiro encontro." },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="gold-divider mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif">Sua transformação começa em 4 passos simples</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-10 relative">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-primary/30" />
          {STEPS.map(s => (
            <div key={s.n} className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-background border border-primary text-primary font-serif text-lg flex items-center justify-center mx-auto mb-6 relative z-10">
                {s.n}
              </div>
              <h3 className="font-serif text-xl mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  { q: "A hipnose online funciona igual à presencial?", a: "Sim. O estado terapêutico da hipnose independe da distância física. Centenas de brasileiros no exterior já comprovaram resultados expressivos em sessões online com a Celi." },
  { q: "Preciso ter experiência com hipnose ou meditação?", a: "Não. Qualquer pessoa pode se beneficiar — você só precisa estar aberto(a) ao processo." },
  { q: "Quanto tempo dura uma sessão?", a: "Cada sessão tem duração aproximada de 60 a 90 minutos, realizada por videochamada." },
  { q: "Em quantas sessões vejo resultado?", a: "Muitos clientes relatam mudanças já na primeira sessão. Um programa completo é personalizado conforme suas necessidades." },
  { q: "Em qual horário posso agendar?", a: "O agendamento é feito diretamente pelo Calendly, com horários disponíveis para diferentes fusos horários." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="gold-divider mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif">Suas dúvidas mais comuns</h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {FAQ.map((f, i) => (
            <div key={i}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center text-left py-6 gap-4">
                <span className="font-serif text-xl">{f.q}</span>
                <span className="text-primary text-2xl font-light shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p className="pb-6 text-muted-foreground leading-relaxed fade-up">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--cream), var(--gold-soft))" }}>
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <span className="gold-divider mb-6" />
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Você não precisa enfrentar tudo sozinho(a)</h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed">
          Sua mente emocional também precisa de cuidado, acolhimento e direção. Dê esse passo agora — a transformação começa com uma decisão.
        </p>
        <a href={CALENDLY} target="_blank" rel="noopener" className="btn-gold !py-5 !px-10 !text-sm">
          Agendar minha sessão online
        </a>
        <p className="mt-6 text-sm text-foreground/70">🔒 Sessão 100% online · Qualquer país · Qualquer fuso horário</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <div className="flex flex-col leading-none mb-3">
            <span className="font-serif text-2xl tracking-[0.3em] text-background">CELI</span>
            <span className="font-serif text-[0.65rem] tracking-[0.4em] text-primary mt-1">NANAME</span>
          </div>
          <p className="italic text-background/60">Hipnose Ericksoniana & Libertação da Alma</p>
        </div>
        <div className="space-y-2">
          <p className="uppercase tracking-widest text-xs text-primary mb-3">Contato</p>
          <p>Instagram: <a href="https://instagram.com/celinaname" className="hover:text-primary">@celinaname</a></p>
          <p>WhatsApp: <a href="https://wa.me/5511973894624" className="hover:text-primary">+55 11 97389-4624</a></p>
          <p><a href="https://celinaname.com.br" className="hover:text-primary">celinaname.com.br</a></p>
        </div>
        <div className="space-y-2">
          <p className="uppercase tracking-widest text-xs text-primary mb-3">Legal</p>
          <p><a href="#" className="hover:text-primary">Política de Privacidade</a></p>
          <p><a href="#" className="hover:text-primary">Termos de Uso</a></p>
          <p className="text-background/50 mt-6 text-xs">© 2025 Celi Naname. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511973894624"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed bottom-20 md:bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.512 5.26l-.999 3.648 3.976-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
    </a>
  );
}
