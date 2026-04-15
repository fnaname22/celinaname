import celiAbout from "@/assets/celi-about.jpg";
import celiJacket from "@/assets/celi-jacket.jpg";
import celiOffice from "@/assets/celi-office.jpg";
import logoAct from "@/assets/logo-act.png";
import logoOmni from "@/assets/logo-omni.png";
import logoArita from "@/assets/logo-arita.png";
import logoCairo from "@/assets/logo-cristina-cairo.png";
import logoMmi from "@/assets/logo-mmi.png";
import logoIbc from "@/assets/logo-ibc.png";
import logoUpw from "@/assets/logo-upw.png";
import logoRobbins from "@/assets/logo-robbins.png";

const certLogos = [
  { src: logoOmni, alt: "OMNI Hypnosis Training Center" },
  { src: logoAct, alt: "ACT Institute" },
  { src: logoIbc, alt: "Instituto Brasileiro de Coaching" },
  { src: logoArita, alt: "Arita Treinamentos" },
  { src: logoCairo, alt: "Cristina Cairo" },
  { src: logoMmi, alt: "Millionaire Mind Intensive" },
  { src: logoUpw, alt: "Tony Robbins UPW" },
  { src: logoRobbins, alt: "Tony Robbins" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={celiAbout}
                  alt="Celi Naname com certificações"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <img
                  src={celiOffice}
                  alt="Celi no consultório"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="relative rounded-xl overflow-hidden aspect-[3/5]">
                <img
                  src={celiJacket}
                  alt="Celi Naname"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="accent-line mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
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
              <div className="grid grid-cols-4 gap-3 items-center">
                {certLogos.map((logo, i) => (
                  <div key={i} className="bg-card rounded-lg p-2.5 flex items-center justify-center h-14 border border-border">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-9 max-w-full object-contain"
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
