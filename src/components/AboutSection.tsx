import heroCeli from "@/assets/hero-celi.jpg";
import logoAct from "@/assets/logo-act.png";
import logoOmni from "@/assets/logo-omni.png";
import logoArita from "@/assets/logo-arita.png";
import logoCairo from "@/assets/logo-cristina-cairo.png";
import logoMmi from "@/assets/logo-mmi.png";
import logoRobbins from "@/assets/logo-robbins.png";

const certLogos = [
  { src: logoOmni, alt: "OMNI Hypnosis Training Center" },
  { src: logoAct, alt: "ACT Institute" },
  { src: logoArita, alt: "Arita Treinamentos" },
  { src: logoCairo, alt: "Cristina Cairo" },
  { src: logoMmi, alt: "Millionaire Mind Intensive" },
  { src: logoRobbins, alt: "Tony Robbins" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl" />
            <img
              src={heroCeli}
              alt="Celi Naname"
              className="relative rounded-2xl w-full max-w-md mx-auto shadow-xl"
              width={768}
              height={1024}
              loading="lazy"
            />
          </div>

          <div>
            <div className="gold-line mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              A força por trás da técnica
            </h2>
            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>
                Olá, sou <strong className="text-foreground">Celi Naname</strong>. Como hipnoterapeuta ericksoniana, minha missão é guiar você por trás das dores para lembrar quem você realmente é.
              </p>
              <p>
                Com uma herança ítalo-japonesa, uno em meu atendimento a disciplina e o foco orientais ao acolhimento e empatia da minha descendência italiana.
              </p>
              <p>
                Formada pelas instituições mais renomadas do mundo, como OMNI Hypnosis, ACT Institute e treinamento imersivo com Tony Robbins nos EUA.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-semibold">Formações e Certificações</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
                {certLogos.map((logo, i) => (
                  <div key={i} className="bg-card rounded-lg p-3 flex items-center justify-center h-16 border border-border">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-10 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
