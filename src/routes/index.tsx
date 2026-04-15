import { createFileRoute } from "@tanstack/react-router";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ClinicGallery from "@/components/ClinicGallery";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Celi Naname | Hipnose Clínica Ericksoniana em São Paulo" },
      {
        name: "description",
        content: "Liberte-se da ansiedade com Hipnose Clínica. Atendimento presencial em SP e online para brasileiros no mundo. Agende sua sessão com Celi Naname.",
      },
      { property: "og:title", content: "Celi Naname | Hipnose Clínica Ericksoniana" },
      { property: "og:description", content: "Recupere o controle da sua vida com hipnoterapia integrativa. Atendimento online e presencial." },
    ],
  }),
});

function Index() {
  return (
    <>
      <StickyHeader />
      <HeroSection />
      <TestimonialsSection />
      <SpecialtiesSection />
      <ProcessSection />
      <AboutSection />
      <ClinicGallery />
      <FaqSection />
      <FooterSection />
      <WhatsAppButton />
    </>
  );
}
