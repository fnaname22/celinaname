import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

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
          "Liberte sua alma da ansiedade com Hipnose Ericksoniana. Hipnoterapia, PNL e Coaching com Celi Naname em São Paulo e online para o mundo.",
      },
      { name: "author", content: "Celi Naname" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "pt-BR" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Celi Naname Hipnoterapia" },
      { property: "og:url", content: "https://celi-soul-liberator.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@hipnosecelinaname" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://celi-soul-liberator.lovable.app/" },
      { rel: "preconnect", href: "https://cdn.gpteng.co" },
      { rel: "dns-prefetch", href: "https://cdn.gpteng.co" },
    ],
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
