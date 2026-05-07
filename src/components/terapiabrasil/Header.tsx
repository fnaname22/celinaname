import { Logo } from "./Logo";

const CALENDLY = "https://calendly.com/fernandonaname";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-primary shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Logo />
        <a href={CALENDLY} target="_blank" rel="noopener" className="hidden md:inline-flex items-center justify-center bg-white text-primary font-semibold tracking-wide px-6 py-3 rounded-full text-xs uppercase hover:bg-white/90 transition-colors">
          Agendar Sessão
        </a>
      </div>
    </header>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-background/95 backdrop-blur border-t border-border">
      <a href={CALENDLY} target="_blank" rel="noopener" className="btn-gold w-full">
        Agendar Sessão Online
      </a>
    </div>
  );
}
