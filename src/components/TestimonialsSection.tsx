import { Star, Quote } from "lucide-react";
import alessandra from "@/assets/testimonial-alessandra.jpg";
import fabiana from "@/assets/testimonial-fabiana.jpg";
import patricia from "@/assets/testimonial-patricia.jpg";
import VideoGallery from "./VideoGallery";

const testimonials = [
  {
    text: "Bom, não sou muito boa em escrever tudo o que penso mas tentarei o meu melhor. Vi D.Celi durante a pandemia, em uma live com a Nívea Stelmann. Adorei sua conversa, sua calma e sua doçura. Minha experiência foi fantástica! D.Celi sempre presente, simpática, atenciosa e profissional. Ela me ajudou a me colocar em lugares sólidos, onde estou até hoje.",
    name: "Alessandra James",
    photo: alessandra,
  },
  {
    text: "Fazer terapia transformou minha vida! Com o tempo fui aprendendo a me conhecer melhor, entender meus limites e valorizar minhas conquistas. Agradeço de coração à querida Celi por toda ajuda. Sua escuta acolhedora e orientações são fundamentais para meu processo de crescimento e evolução!",
    name: "Fabiana Marcilio",
    photo: fabiana,
  },
  {
    text: "Conhecer a Celi foi um presente! Ela me foi indicada por uma amiga e começamos a terapia on-line. Estamos em países diferentes mas é como se ela estivesse na minha frente. Celi tem me ajudado a me recuperar de um stress pós-traumático e a cuidar melhor da minha auto-estima. Super indico!",
    name: "Patrícia Braga",
    photo: patricia,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vidas Transformadas
          </h2>
          <p className="text-muted-foreground text-lg">O que meus clientes dizem</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow relative flex flex-col"
            >
              <Quote size={32} className="text-teal/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic flex-grow text-sm">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-border pt-4">
              <img
                src={t.photo}
                alt={`Depoimento de ${t.name} sobre hipnoterapia com Celi Naname`}
                className="w-12 h-12 rounded-full object-cover border border-teal/20"
                loading="lazy"
                width={48}
                height={48}
              />
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <VideoGallery />
      </div>
    </section>
  );
}
