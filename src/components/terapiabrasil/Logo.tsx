import logo from "@/assets/terapiabrasil/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Celi Naname Hipnoterapeuta"
      className={`h-12 md:h-14 w-auto ${className}`}
    />
  );
}
