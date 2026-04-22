import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
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
      { title: "LV Store — Camisas de Futebol Premium" },
      { name: "description", content: "As melhores camisas de futebol do Brasil e do mundo." },
      { name: "author", content: "LV Store" },
      { property: "og:title", content: "LV Store — Camisas de Futebol Premium" },
      { property: "og:description", content: "As melhores camisas de futebol do Brasil e do mundo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      // Clickjacking protection
      { httpEquiv: "X-Frame-Options", content: "DENY" },
      // Prevent MIME sniffing
      { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
      // Referrer policy
      { name: "referrer", content: "strict-origin-when-cross-origin" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
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
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()` }} />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
