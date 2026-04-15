import consultorioRecepcao from "@/assets/consultorio-recepcao.jpg";
import consultorioSala from "@/assets/consultorio-sala.jpg";
import consultorioSala2 from "@/assets/consultorio-sala2.jpg";
import consultorioCafe from "@/assets/consultorio-cafe.jpg";

const photos = [
  { src: consultorioRecepcao, alt: "Recepção do consultório", label: "Recepção" },
  { src: consultorioSala, alt: "Sala de atendimento", label: "Sala de Atendimento" },
  { src: consultorioSala2, alt: "Ambiente terapêutico", label: "Espaço Acolhedor" },
  { src: consultorioCafe, alt: "Espaço café", label: "Cantinho do Café" },
];

export default function ClinicGallery() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça o Espaço
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Um ambiente pensado para seu conforto e acolhimento
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] border border-border"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-primary-foreground text-sm font-medium">
                {photo.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
