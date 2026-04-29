import { createFileRoute, Link } from "@tanstack/react-router";
import StickyHeader from "@/components/StickyHeader";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";

const SITE_URL = "https://celi-soul-liberator.lovable.app";
const URL = `${SITE_URL}/terapia-ansiedade`;
const TITLE = "Terapia para Ansiedade com Hipnose: Tratamento Eficaz | Celi Naname";
const DESCRIPTION =
  "Terapia para ansiedade com Hipnose Ericksoniana e PNL. Aprenda como a hipnoterapia trata sintomas de ansiedade, pânico e estresse de forma rápida e duradoura.";

const WHATSAPP_LINK =
  "https://wa.me/5511973894624?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20terapia%20para%20ansiedade";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Terapia para Ansiedade com Hipnose",
  description: DESCRIPTION,
  url: URL,
  inLanguage: "pt-BR",
  about: { "@type": "MedicalCondition", name: "Ansiedade" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Terapia para Ansiedade", item: URL },
  ],
};

export const Route = createFileRoute("/terapia-ansiedade")({
  component: TerapiaAnsiedadePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "terapia para ansiedade, hipnose para ansiedade, tratamento ansiedade, crise de pânico, síndrome do pânico, estresse, hipnoterapia ansiedade, terapia online ansiedade",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(articleJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd) },
    ],
  }),
});

function TerapiaAnsiedadePage() {
  return (
    <>
      <StickyHeader />
      <main className="pt-28 pb-20 bg-background">
        <article className="max-w-3xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <Link to="/" className="text-teal hover:underline inline-flex items-center gap-1">
              <ArrowLeft size={14} /> Voltar para a Home
            </Link>
          </nav>

          <header className="mb-10">
            <div className="accent-line mb-6" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terapia para Ansiedade com Hipnose: Tratamento Rápido e Duradouro
            </h1>

            {/* Direct Answer */}
            <div className="bg-card border-l-4 border-teal rounded-lg p-6 my-6">
              <p className="text-foreground/90 leading-relaxed text-lg">
                A <strong>terapia para ansiedade com hipnose</strong> ajuda a controlar pensamentos
                acelerados, crises de pânico e estresse ao acessar diretamente o inconsciente, onde
                estão guardadas as causas emocionais do problema. Através da Hipnose Ericksoniana e
                PNL, é possível ressignificar gatilhos e reduzir sintomas de forma rápida e
                duradoura.
              </p>
            </div>
          </header>

          <section className="prose-custom space-y-6 text-foreground/80 leading-relaxed">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10">
              Sintomas de ansiedade tratados na hipnoterapia
            </h2>
            <ul className="space-y-3">
              {[
                "Pensamentos acelerados e preocupações constantes.",
                "Crises de pânico, taquicardia e sensação de falta de ar.",
                "Insônia, sono leve ou despertar com aperto no peito.",
                "Tensão muscular, dores de cabeça e desconforto digestivo.",
                "Medo excessivo de situações sociais ou de falhar.",
                "Irritabilidade, choro fácil e cansaço mental persistente.",
                "Procrastinação e sensação de paralisia frente às tarefas.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="text-teal shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10">
              Resultados esperados com a terapia
            </h2>
            <ul className="space-y-3">
              {[
                "Redução significativa da frequência e intensidade das crises.",
                "Mais clareza mental, foco e capacidade de tomar decisões.",
                "Sono profundo e reparador.",
                "Sensação de leveza, autoconfiança e equilíbrio emocional.",
                "Recuperação do prazer em atividades cotidianas e sociais.",
                "Ferramentas práticas para autorregulação no dia a dia.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="text-teal shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10">
              Como funciona a sessão para ansiedade
            </h2>
            <p>
              Cada sessão é planejada para tratar a ansiedade <strong>na raiz</strong>, não apenas
              os sintomas. O processo segue etapas claras:
            </p>
            <ol className="space-y-3 list-decimal pl-5">
              <li>
                <strong>Acolhimento e mapeamento:</strong> conversa inicial para entender gatilhos,
                histórico emocional e objetivos terapêuticos.
              </li>
              <li>
                <strong>Indução hipnótica:</strong> condução a um estado de relaxamento profundo,
                seguro e natural — você permanece consciente o tempo todo.
              </li>
              <li>
                <strong>Trabalho terapêutico:</strong> uso de metáforas, sugestões e ferramentas de
                PNL para ressignificar memórias, crenças e emoções ligadas à ansiedade.
              </li>
              <li>
                <strong>Ancoragem de recursos:</strong> instalação de respostas internas de calma,
                segurança e confiança para situações do cotidiano.
              </li>
              <li>
                <strong>Fechamento e plano:</strong> orientações práticas e exercícios de
                autoaplicação entre as sessões.
              </li>
            </ol>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6">
              Hipnose para ansiedade online funciona?
            </h3>
            <p>
              Sim. O atendimento online tem a mesma eficácia do presencial, com a vantagem do
              conforto e da privacidade do seu ambiente. Conheça também a abordagem usada nas
              sessões na página de{" "}
              <Link to="/hipnose-ericksoniana" className="text-teal underline hover:text-teal-light">
                Hipnose Ericksoniana
              </Link>
              .
            </p>
          </section>

          {/* CTA */}
          <aside className="mt-12 bg-card border border-border rounded-xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              Dê o primeiro passo para viver sem ansiedade
            </h2>
            <p className="text-foreground/70 mb-6">
              Agende sua sessão de terapia para ansiedade com Celi Naname — presencial em São Paulo
              ou online para todo o mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
              <Link to="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-teal text-teal font-semibold hover:bg-teal hover:text-white transition-colors">
                Voltar para a Home
              </Link>
            </div>
          </aside>

          <nav aria-label="Conteúdos relacionados" className="mt-10 text-center text-sm text-foreground/70">
            Veja também:{" "}
            <Link to="/hipnose-ericksoniana" className="text-teal underline hover:text-teal-light">
              Hipnose Ericksoniana
            </Link>{" "}
            ·{" "}
            <Link to="/" className="text-teal underline hover:text-teal-light">
              Página inicial
            </Link>
          </nav>
        </article>
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
}
