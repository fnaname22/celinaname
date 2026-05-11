import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import celiHero from "@/assets/celi-hero.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Celi Naname | Hipnose Ericksoniana e Libertação da Alma" },
      {
        name: "description",
        content:
          "Liberte sua alma da ansiedade com Hipnose Ericksoniana. Atendimento especializado com Celi Naname em São Paulo e online para brasileiros no mundo todo.",
      },
      { name: "author", content: "Celi Naname" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "pt-BR" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Celi Naname Hipnoterapia" },
      { property: "og:title", content: "Celi Naname | Hipnose Ericksoniana e Libertação da Alma" },
      {
        property: "og:description",
        content:
          "Recupere o controle da sua vida através da Hipnose Ericksoniana. Atendimento presencial em São Paulo e online.",
      },
      { property: "og:url", content: "https://celinaname.com.br/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@hipnosecelinaname" },
      { name: "twitter:title", content: "Celi Naname | Hipnose Ericksoniana" },
      {
        name: "twitter:description",
        content: "Liberte sua alma da ansiedade com a força da Hipnose Ericksoniana.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://celinaname.com.br/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap" },
      { rel: "preload", as: "image", href: celiHero },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Celi Naname - Hipnoterapia Ericksoniana",
          "image": "https://celinaname.com.br/assets/logo-celi.png",
          "@id": "https://celinaname.com.br/",
          "url": "https://celinaname.com.br/",
          "telephone": "+5511973894624",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Paulista",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01310-100",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.5614,
            "longitude": -46.6559
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "19:00"
          },
          "sameAs": [
            "https://www.instagram.com/celinaname/",
            "https://wa.me/5511973894624"
          ]
        })
      },
      { src: "https://www.googletagmanager.com/gtag/js?id=AW-18144522110", async: true },
      {
        children: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-18144522110');`
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
