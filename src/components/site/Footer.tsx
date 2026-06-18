import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3V14h2.8v8h3.4z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white/90 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-white">VAINAVI</h3>
          <p className="text-xs tracking-[0.25em] text-[var(--gold)] mt-1">COLD PRESS</p>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Traditional cold pressed oils & nutritious millets, brought to you with the goodness of nature.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"
               className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--primary-dark)] transition">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"
               className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--primary-dark)] transition">
              <FacebookIcon />
            </a>
            <a href="https://wa.me/918838688395" target="_blank" rel="noreferrer" aria-label="WhatsApp"
               className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--primary-dark)] transition">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {["Home", "About", "Products", "Benefits", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-[var(--gold)] transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-4">Our Range</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Groundnut Oil</li>
            <li>Sesame Oil</li>
            <li>Coconut Oil</li>
            <li>Traditional Millets</li>
            <li>Heritage Rice</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-[var(--gold)] shrink-0" /> +91 88386 88395</li>
            <li className="flex gap-3"><MessageCircle size={16} className="mt-0.5 text-[var(--gold)] shrink-0" /> WhatsApp Enquiries</li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-[var(--gold)] shrink-0" />  sreevainavitraders@gmail.com</li>
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-[var(--gold)] shrink-0" /> 20, TEACHER'S COLONY, KURUMBAPALAYAM,VEDAPATTI POST, COIMBATORE - 641007</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Vainavi Cold Press. All rights reserved.</p>
        <p>Crafted with care in Tamil Nadu</p>
      </div>
    </footer>
  );
}
