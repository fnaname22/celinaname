import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoCeli from "@/assets/logo-celi.png";

const navLinks = [
  { label: "Início", href: "/#hero", anchor: true },
  { label: "Hipnose Ericksoniana", href: "/hipnose-ericksoniana", anchor: false },
  { label: "Ansiedade", href: "/terapia-ansiedade", anchor: false },
  { label: "Sobre", href: "/#sobre", anchor: true },
  { label: "FAQ", href: "/#faq", anchor: true },
];

const WHATSAPP_LINK = "https://wa.me/5511973894624?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-2"
          : "bg-navy/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" hash="hero">
          <img
            src={logoCeli}
            alt="Celi Naname Hipnoterapeuta"
            className="h-10 w-auto"
            width={180}
            height={40}
            fetchPriority="high"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) =>
            l.anchor ? (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-primary-foreground/80 hover:text-teal-light transition-colors font-medium"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm text-primary-foreground/80 hover:text-teal-light transition-colors font-medium"
              >
                {l.label}
              </Link>
            )
          )}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-sm !py-2.5 !px-5">
            Agendar sessão
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-t border-teal/20 px-6 py-6 space-y-4">
          {navLinks.map((l) =>
            l.anchor ? (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-primary-foreground/90 hover:text-teal-light transition-colors font-medium"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-primary-foreground/90 hover:text-teal-light transition-colors font-medium"
              >
                {l.label}
              </Link>
            )
          )}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta w-full text-center mt-4">
            Agendar sessão
          </a>
        </div>
      )}
    </header>
  );
}
