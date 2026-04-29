import { createFileRoute, Link } from "@tanstack/react-router";
import StickyHeader from "@/components/StickyHeader";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";

const SITE_URL = "https://celi-soul-liberator.lovable.app";
const URL = `${SITE_URL}/hipnose-ericksoniana`;
const TITLE = "Hipnose Ericksoniana: O que é, Benefícios e Como Funciona | Celi Naname";
const DESCRIPTION =
  "Descubra o que é Hipnose Ericksoniana, como funciona a abordagem de Milton Erickson, seus benefícios terapêuticos e para quem é indicada. Atendimento com Celi Naname.";

const WHATSAPP_LINK =
  "https://wa.me/5511973894624?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20Hipnose%20Ericksoniana";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hipnose Ericksoniana: O que é, Benefícios e Como Funciona",
  description: DESCRIPTION,
  author: { "@type": "Person", name: "Celi Naname" },
  publisher: {
    "@type": "Organization",
    name: "Celi Naname Hipnoterapia",
    logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` },
  },
  mainEntityOfPage: URL,
  inLanguage: "pt-BR",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Hipnose Ericksoniana", item: URL },
  ],
};

export const Route = createFileRoute("/hipnose-ericksoniana")({
  component: HipnoseEricksonianaPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "hipnose ericksoniana, milton erickson, hipnoterapia ericksoniana, hipnose terapêutica, abordagem ericksoniana, hipnose clínica, inconsciente, metáforas terapêuticas",
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

function HipnoseEricksonianaPage() {
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
              Hipnose Ericksoniana: O que é, Benefícios e Como Funciona
            </h1>

            {/* Direct Answer / Featured Snippet */}
            <div className="bg-card border-l-4 border-teal rounded-lg p-6 my-6">
              <p className="text-foreground/90 leading-relaxed text-lg">
                <strong>Hipnose Ericksoniana</strong> é uma abordagem terapêutica desenvolvida pelo psiquiatra Milton H. Erickson que utiliza linguagem indireta, metáforas e sugestões personalizadas para acessar o inconsciente. Promove transformações emocionais profundas, respeitando o tempo, os recursos e a singularidade de cada pessoa.
              </p>
            </div>
          </header>

          <section className="prose-custom space-y-6 text-foreground/80 leading-relaxed">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10">
              Quem foi Milton Erickson e como surgiu a abordagem
            </h2>
            <p>
              Milton H. Erickson (1901–1980) revolucionou a hipnoterapia ao romper com o modelo
              autoritário tradicional. Em vez de comandos diretos, criou uma abordagem
              <strong> permissiva, naturalista e individualizada</strong>, baseada em histórias,
              metáforas e na capacidade natural do cérebro de entrar em transe. Sua técnica deu
              origem à Hipnose Ericksoniana moderna, hoje uma das mais respeitadas no mundo.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10">
              Como funciona uma sessão de Hipnose Ericksoniana
            </h2>
            <p>
              A sessão começa com uma conversa para mapear o objetivo terapêutico. Em seguida, a
              hipnoterapeuta conduz o cliente a um <strong>estado de relaxamento e foco
              ampliado</strong> — o transe hipnótico —, onde o inconsciente fica mais receptivo a
              novas perspectivas. Por meio de metáforas e sugestões personalizadas, são
              ressignificadas crenças limitantes e ativados recursos internos.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6">
              Princípios da abordagem ericksoniana
            </h3>
            <ul className="space-y-3">
              {[
                "Cada pessoa possui os recursos internos necessários para sua mudança.",
                "A linguagem indireta e as metáforas contornam resistências conscientes.",
                "O transe é um estado natural — não há perda de controle.",
                "O processo é colaborativo e respeita o ritmo de cada cliente.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="text-teal shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10">
              Benefícios da Hipnose Ericksoniana
            </h2>
            <ul className="space-y-3">
              {[
                "Alívio rápido e duradouro de ansiedade, estresse e crises de pânico.",
                "Liberação de traumas, medos e bloqueios emocionais.",
                "Mudança de hábitos: tabagismo, compulsão alimentar e dependências.",
                "Aumento da autoestima, autoconfiança e clareza de propósito.",
                "Melhora da qualidade do sono e do bem-estar geral.",
                "Apoio em processos de luto, separações e transições de vida.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="text-teal shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10">
              Para quem é indicada a hipnoterapia ericksoniana
            </h2>
            <p>
              A abordagem é indicada para adultos que enfrentam <strong>ansiedade, estresse
              crônico, fobias, traumas, dificuldades emocionais</strong>, ou que desejam ampliar
              autoconhecimento e desenvolvimento pessoal. Também é uma das ferramentas mais
              eficazes para quem busca uma <Link to="/terapia-ansiedade" className="text-teal underline hover:text-teal-light">terapia para ansiedade</Link> que vá além do alívio sintomático.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mt-6">
              Diferenças entre Hipnose Ericksoniana e hipnose tradicional
            </h3>
            <p>
              A hipnose tradicional usa comandos diretos e autoritários. Já a abordagem
              ericksoniana é <strong>indireta, personalizada e respeitosa</strong>, integrando-se
              naturalmente à PNL e à terapia integrativa. O resultado é um processo mais profundo,
              ético e adaptado a cada história de vida.
            </p>
          </section>

          {/* CTA */}
          <aside className="mt-12 bg-card border border-border rounded-xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              Pronto para começar sua transformação?
            </h2>
            <p className="text-foreground/70 mb-6">
              Agende uma sessão de Hipnose Ericksoniana presencial em São Paulo ou online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Agendar pelo WhatsApp
              </a>
              <Link to="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-teal text-teal font-semibold hover:bg-teal hover:text-white transition-colors">
                Conhecer Celi Naname
              </Link>
            </div>
          </aside>

          <nav aria-label="Conteúdos relacionados" className="mt-10 text-center text-sm text-foreground/70">
            Veja também:{" "}
            <Link to="/terapia-ansiedade" className="text-teal underline hover:text-teal-light">
              Terapia para Ansiedade
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
