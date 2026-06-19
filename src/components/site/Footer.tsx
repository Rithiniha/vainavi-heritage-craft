import type { SVGProps } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3V14h2.8v8h3.4z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] pb-8 pt-16 text-white/90">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-display text-2xl font-bold text-white">VAINAVI</h3>
          <p className="mt-1 text-xs tracking-[0.25em] text-[var(--gold)]">COLD PRESS</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Traditional cold pressed oils and nutritious millets, brought to you with the goodness
            of nature.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[var(--gold)] hover:text-[var(--primary-dark)]"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[var(--gold)] hover:text-[var(--primary-dark)]"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://wa.me/918838688395"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[var(--gold)] hover:text-[var(--primary-dark)]"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {["Home", "About", "Products", "Benefits", "Contact"].map((label) => (
              <li key={label}>
                <a href={`#${label.toLowerCase()}`} className="transition hover:text-[var(--gold)]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg text-white">Our Range</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Groundnut Oil</li>
            <li>Sesame Oil</li>
            <li>Coconut Oil</li>
            <li>Traditional Millets</li>
            <li>Heritage Rice</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> +91 88386 88395
            </li>
            <li className="flex gap-3">
              <MessageCircle size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> WhatsApp
              Enquiries
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" />{" "}
              sreevainavitraders@gmail.com
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" /> 20, Teacher's
              Colony, Kurumbapalayam, Vedapatti Post, Coimbatore - 641007
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 pt-6 text-xs text-white/50 md:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} Vainavi Cold Press. All rights reserved.</p>
        <p>Crafted with care in Tamil Nadu</p>
      </div>
    </footer>
  );
}
