import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

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
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"
               className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--primary-dark)] transition">
              <Facebook size={16} />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" aria-label="WhatsApp"
               className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--primary-dark)] transition">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {["Home", "About", "Products", "Benefits", "Blog", "Contact"].map((l) => (
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
            <li>Sesame Oil (Nallennai)</li>
            <li>Coconut Oil</li>
            <li>Traditional Millets</li>
            <li>Heritage Rice</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-[var(--gold)] shrink-0" /> +91 99999 99999</li>
            <li className="flex gap-3"><MessageCircle size={16} className="mt-0.5 text-[var(--gold)] shrink-0" /> WhatsApp Enquiries</li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-[var(--gold)] shrink-0" /> hello@vainavi.in</li>
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-[var(--gold)] shrink-0" /> Tamil Nadu, India</li>
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
