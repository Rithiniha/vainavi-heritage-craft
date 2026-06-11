import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Leaf, Wheat, Heart, Recycle, HandHeart,
  Flame, Droplet, CheckCircle2, Star, ArrowRight, MessageCircle, Send,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollTop } from "@/components/site/ScrollTop";
import heroAsset from "@/assets/vainavi-hero.asset.json";
import groundnutImg from "@/assets/groundnut-oil.jpg";
import sesameImg from "@/assets/sesame-oil.jpg";
import coconutImg from "@/assets/coconut-oil.jpg";
import milletsImg from "@/assets/millets-grid.jpg";
import aboutImg from "@/assets/about-press.jpg";
import benefitsImg from "@/assets/benefits-oil.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vainavi Cold Press — Pure Wood Pressed Oils & Traditional Millets" },
      { name: "description", content: "Premium wood pressed oils and nutritious millets from Tamil Nadu. Traditional extraction, 100% natural, chemical free. Enquire today." },
      { property: "og:title", content: "Vainavi Cold Press — Goodness of Nature, Pressed to Perfection" },
      { property: "og:description", content: "Pure cold-pressed oils & traditional millets for a healthy you and a better tomorrow." },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/919999999999?text=Hello%20Vainavi%2C%20I%27d%20like%20to%20enquire";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Millets />
        <WhyUs />
        <Benefits />
        <Testimonials />
        <Blog />
        <Enquiry />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-32 pb-20 overflow-hidden bg-[var(--beige)]">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 50%), radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--gold) 15%, transparent), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow"><Leaf size={14} /> Traditional Wood Pressed Goodness</span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--primary-dark)] leading-[1.05]">
            Pure Cold-Pressed Oils &
            <span className="block text-primary"> Nutritious Traditional Millets</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Bringing farm-fresh nutrition to families through traditional extraction methods and wholesome grains.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Enquire Now <ArrowRight size={16} /></a>
            <a href="#products" className="btn-outline">Explore Products</a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {[
              { i: <Leaf size={16} />, t: "100% Natural" },
              { i: <ShieldCheck size={16} />, t: "Chemical Free" },
              { i: <Flame size={16} />, t: "Wood Pressed" },
              { i: <HandHeart size={16} />, t: "Locally Sourced" },
            ].map((x) => (
              <div key={x.t} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary">{x.i}</span>
                {x.t}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(36,70,59,0.45)] ring-1 ring-primary/10 float-anim">
            <img
              src={heroAsset.url}
              alt="Vainavi Cold Press — Pure cold pressed oils and millets"
              width={1600}
              height={640}
              className="w-full h-auto block"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden sm:flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-card text-sm font-medium text-primary">
            <Sparkles size={14} className="text-[var(--gold)]" /> Trusted by 1000+ families
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
function About() {
  const features = [
    { i: <Leaf size={18} />, t: "100% Natural" },
    { i: <Droplet size={18} />, t: "Wood Pressed" },
    { i: <Wheat size={18} />, t: "Farm Sourced" },
    { i: <Heart size={18} />, t: "Nutrient Rich" },
    { i: <Recycle size={18} />, t: "Sustainable" },
    { i: <HandHeart size={18} />, t: "Traditional Methods" },
  ];
  return (
    <section id="about" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-card ring-1 ring-border">
            <img src={aboutImg} alt="Traditional wood press" width={1024} height={1024} loading="lazy" className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -right-4 bg-[var(--primary-dark)] text-white rounded-2xl p-5 max-w-[200px] shadow-card hidden md:block">
            <div className="text-3xl font-display font-bold text-[var(--gold)]">25+</div>
            <div className="text-sm mt-1 text-white/80">Years of traditional craft</div>
          </div>
        </motion.div>
        <motion.div {...fadeUp}>
          <span className="eyebrow"><Leaf size={14} /> Our Story</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--primary-dark)]">
            Preserving food wisdom, one pressing at a time.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Vainavi Cold Press is dedicated to preserving traditional food wisdom through wood-pressed oils and naturally grown millets.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our products are prepared using age-old methods that retain nutrients, flavor, and authenticity while supporting healthy living for modern families.
          </p>
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {features.map((f) => (
              <div key={f.t} className="flex items-center gap-3 bg-[var(--beige)] rounded-xl p-3 hover:shadow-soft transition">
                <span className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">{f.i}</span>
                <span className="text-sm font-medium">{f.t}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- PRODUCTS ----------------------------- */
const OILS = [
  { name: "Groundnut Oil", price: "₹280", unit: "/L", img: groundnutImg, b: ["Rich in healthy fats", "Traditional extraction", "Ideal for cooking"] },
  { name: "Sesame Oil (Nallennai)", price: "₹360", unit: "/L", img: sesameImg, b: ["Rich in antioxidants", "Traditional flavour", "Heart-friendly"] },
  { name: "Coconut Oil", price: "₹380", unit: "/L", img: coconutImg, b: ["Rich in MCTs", "Multipurpose use", "Naturally extracted"] },
];

function Products() {
  return (
    <section id="products" className="section-pad bg-[var(--beige)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <span className="eyebrow"><Droplet size={14} /> Our Products</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--primary-dark)]">Pure Oils, Pressed the Traditional Way</h2>
          <p className="mt-4 text-muted-foreground">Pure oils and wholesome grains for a healthier lifestyle.</p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-7">
          {OILS.map((o, i) => (
            <motion.article
              key={o.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-background rounded-2xl overflow-hidden ring-1 ring-border shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="aspect-square overflow-hidden bg-[var(--beige)]">
                <img src={o.img} alt={o.name} width={768} height={768} loading="lazy"
                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-[var(--primary-dark)]">{o.name}</h3>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">{o.price}</span>
                  <span className="text-sm text-muted-foreground">{o.unit}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {o.b.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary mt-6 w-full">Enquire <ArrowRight size={14} /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- MILLETS ----------------------------- */
const MILLETS = [
  { name: "Varagu", price: "₹100" },
  { name: "Thinai", price: "₹102" },
  { name: "Samai", price: "₹116" },
  { name: "Kambu", price: "₹46" },
  { name: "Ragi", price: "₹68" },
  { name: "Kuthiraivali", price: "₹120" },
  { name: "Karuppu Kavuni", price: "₹136" },
  { name: "Sivappu Arisi", price: "₹80" },
  { name: "Mapillai Samba", price: "₹90" },
  { name: "Kaikuthal Arisi", price: "₹90" },
];

function Millets() {
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...fadeUp} className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-end mb-10">
          <div>
            <span className="eyebrow"><Wheat size={14} /> Traditional Millets</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--primary-dark)]">
              Heritage grains, naturally grown.
            </h2>
          </div>
          <p className="text-muted-foreground">
            Wholesome traditional millets and heritage rice varieties — rich in fiber, protein, and minerals. Sourced directly from Tamil Nadu farmers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden shadow-card ring-1 ring-border">
            <img src={milletsImg} alt="Assorted traditional millets" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {MILLETS.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -3 }}
                className="bg-[var(--beige)] rounded-xl p-4 ring-1 ring-border/60 hover:ring-primary/40 hover:shadow-soft transition"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
                  <Wheat size={16} />
                </div>
                <div className="mt-3 font-display font-semibold text-[var(--primary-dark)]">{m.name}</div>
                <div className="mt-1 text-sm">
                  <span className="font-bold text-primary">{m.price}</span>
                  <span className="text-muted-foreground">/kg</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHY US ----------------------------- */
function WhyUs() {
  const items = [
    { i: <Leaf size={20} />, t: "Pure Ingredients", d: "No chemicals or additives in any of our products." },
    { i: <Flame size={20} />, t: "Traditional Methods", d: "Wood-pressed extraction the way it was always meant to be." },
    { i: <ShieldCheck size={20} />, t: "Nutrient Preservation", d: "Low-heat processing keeps the goodness intact." },
    { i: <HandHeart size={20} />, t: "Trusted Quality", d: "Fresh, locally sourced, honestly priced." },
  ];
  return (
    <section className="section-pad bg-[var(--beige)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <span className="eyebrow"><Sparkles size={14} /> Why Choose Us</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--primary-dark)]">Why Families Trust Vainavi</h2>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((x, i) => (
            <motion.div
              key={x.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl p-6 ring-1 ring-border shadow-soft hover:shadow-card transition"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center">{x.i}</div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[var(--primary-dark)]">{x.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- BENEFITS ----------------------------- */
function Benefits() {
  const oilB = ["Retains nutrients", "Better flavour", "Chemical free", "Natural extraction"];
  const milletB = ["Rich in fiber", "Supports digestion", "Natural nutrition", "Traditional superfood"];
  return (
    <section id="benefits" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp} className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-card ring-1 ring-border">
          <img src={benefitsImg} alt="Cold pressed oil being poured" width={1024} height={1024} loading="lazy" className="w-full h-auto" />
        </motion.div>
        <motion.div {...fadeUp} className="order-1 lg:order-2 space-y-8">
          <div>
            <span className="eyebrow"><Heart size={14} /> Real Benefits</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--primary-dark)]">Goodness you can taste, nutrition you can feel.</h2>
          </div>
          <div className="bg-[var(--beige)] rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold text-primary flex items-center gap-2"><Droplet size={18} /> Cold Pressed Oil Benefits</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2">
              {oilB.map((b) => (
                <li key={b} className="flex gap-2 text-sm"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />{b}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--beige)] rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold text-primary flex items-center gap-2"><Wheat size={18} /> Millet Benefits</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2">
              {milletB.map((b) => (
                <li key={b} className="flex gap-2 text-sm"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />{b}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- TESTIMONIALS ----------------------------- */
function Testimonials() {
  const t = [
    { q: "The quality reminds me of traditional homemade oils.", a: "Priya · Chennai" },
    { q: "Fresh millets and excellent service. Truly authentic.", a: "Raghav · Coimbatore" },
    { q: "Healthy products at honest prices — exactly what we needed.", a: "Meena · Madurai" },
  ];
  return (
    <section className="section-pad bg-[var(--beige)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <span className="eyebrow"><Star size={14} /> Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--primary-dark)]">Loved by Families Across Tamil Nadu</h2>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {t.map((x, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-background rounded-2xl p-7 ring-1 ring-border shadow-soft"
            >
              <div className="flex gap-0.5 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">"{x.q}"</p>
              <p className="mt-4 text-sm font-medium text-muted-foreground">— {x.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- BLOG ----------------------------- */
function Blog() {
  const posts = [
    { t: "Benefits of Cold Pressed Oils", e: "How traditional extraction preserves nutrients you can actually taste.", c: "from-amber-100 to-amber-200" },
    { t: "Why Millets Are Returning to Indian Kitchens", e: "A look at the heritage grains making a comeback for good reason.", c: "from-emerald-100 to-emerald-200" },
    { t: "How to Choose the Right Cooking Oil", e: "A simple guide to picking oils that match your cooking and health goals.", c: "from-yellow-100 to-yellow-200" },
  ];
  return (
    <section id="blog" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow"><Leaf size={14} /> Journal</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[var(--primary-dark)]">Latest Insights</h2>
          </div>
          <a href="#contact" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight size={16} />
          </a>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <motion.article
              key={p.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-background rounded-2xl overflow-hidden ring-1 ring-border shadow-soft hover:shadow-card transition"
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${p.c} flex items-center justify-center`}>
                <Leaf size={48} className="text-[var(--primary-dark)]/40" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-[var(--primary-dark)]">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.e}</p>
                <button className="mt-5 text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ENQUIRY ----------------------------- */
function Enquiry() {
  return (
    <section id="contact" className="section-pad bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, var(--gold), transparent 50%)" }} />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gold)] bg-white/10 px-3 py-1.5 rounded-full">
            <MessageCircle size={14} /> Get In Touch
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold leading-tight">We'd love to hear from you.</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Interested in our products? Drop us a message or reach out on WhatsApp — we'll get back to you with details, pricing, and delivery options.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/85">
            <p>📞 +91 99999 99999</p>
            <p>✉️ hello@vainavi.in</p>
            <p>📍 Tamil Nadu, India</p>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-gold mt-8">
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </motion.div>

        <motion.form
          {...fadeUp}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! We'll be in touch shortly.");
            (e.target as HTMLFormElement).reset();
          }}
          className="bg-white text-foreground rounded-2xl p-7 sm:p-8 shadow-card grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your full name" required />
            <Field label="Phone Number" name="phone" type="tel" placeholder="+91" required />
          </div>
          <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Product Interested In</label>
            <select name="product" required
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
              <option value="">Select a product</option>
              <option>Groundnut Oil</option>
              <option>Sesame Oil (Nallennai)</option>
              <option>Coconut Oil</option>
              <option>Millets</option>
              <option>Other / Bulk</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Message</label>
            <textarea name="message" rows={4} placeholder="Tell us about your enquiry..." required
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
          </div>
          <button type="submit" className="btn-primary mt-2 justify-center">
            <Send size={16} /> Send Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
