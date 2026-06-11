import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP = "https://wa.me/919999999999?text=Hello%20Vainavi%2C%20I%27d%20like%20to%20enquire";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navText = scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white";
  const logoText = scrolled ? "text-primary" : "text-white";
  const subText = scrolled ? "text-muted-foreground" : "text-white/70";
  const iconBtn = scrolled ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur shadow-[0_2px_20px_-10px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex flex-col leading-none">
          <span className={`font-display text-2xl font-bold tracking-tight transition-colors ${logoText}`}>
            VAINAVI
          </span>
          <span className={`text-[10px] font-semibold tracking-[0.25em] mt-0.5 transition-colors ${subText}`}>
            COLD PRESS
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${navText}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:scale-105 transition-transform"
          >
            <MessageCircle size={18} />
          </a>
          <a href="#contact" className="btn-primary">Enquire Now</a>
        </div>

        <button
          className={`lg:hidden p-2 transition-colors ${iconBtn}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-5 py-4 space-y-3">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-foreground/80 hover:text-primary py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3 border-t border-border">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-outline flex-1">
              WhatsApp
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary flex-1">
              Enquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
