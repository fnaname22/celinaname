import { createFileRoute } from "@tanstack/react-router";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import TopicClusterSection from "@/components/TopicClusterSection";
import ClinicGallery from "@/components/ClinicGallery";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import celiHero from "@/assets/celi-hero.png";

const SITE_URL = "https://celi-soul-liberator.lovable.app";
const OG_IMAGE = `${SITE_URL}${celiHero}`;

const TITLE = "Celi Naname | Hipnose Ericksoniana e Libertação da Alma";
const DESCRIPTION =
  "Liberte sua alma da ansiedade com Hipnose Ericksoniana, PNL e Coaching. Atendimento presencial em São Paulo e online com Celi Naname. Agende sua sessão.";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  name: "Celi Naname - Hipnoterapia",
  image: OG_IMAGE,
  url: SITE_URL,
  telephone: "+55-11-97389-4624",
  priceRange: "$$",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alameda Jaú, 1767 - Térreo",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "01420-002",
    addressCountry: "BR",
  },
  sameAs: ["https://instagram.com/hipnosecelinaname", "https://instagram.com/celinaname"],
  areaServed: ["São Paulo", "Brasil", "Mundo"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vou perder o controle durante a hipnose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Você permanece consciente e no controle durante todo o processo. A hipnose é um estado natural de foco e relaxamento profundo.",
      },
    },
    {
      "@type": "Question",
      name: "Quantas sessões de hipnoterapia preciso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As mudanças costumam ser rápidas porque acessamos o inconsciente diretamente. O plano é individualizado para cada pessoa.",
      },
    },
    {
      "@type": "Question",
      name: "A hipnose online funciona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O atendimento online tem a mesma eficácia do presencial e atende brasileiros em todo o mundo.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "hipnose, hipnoterapia, hipnose ericksoniana, libertação da alma, ansiedade, PNL, coaching, terapia integrativa, São Paulo, hipnose online, bem-estar emocional, Celi Naname" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Celi Naname - Hipnoterapeuta" },
      { property: "og:url", content: SITE_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <SpecialtiesSection />
        <ProcessSection />
        <AboutSection />
        <ClinicGallery />
        <TopicClusterSection />
        <FaqSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
}
