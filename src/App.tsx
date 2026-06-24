import { useState, type InputHTMLAttributes, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Droplet,
  Flame,
  HandHeart,
  Heart,
  Leaf,
  Recycle,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Wheat,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { ScrollTop } from "@/components/site/ScrollTop";
import aboutImg from "@/assets/about-press.png";
import benefitsImg from "@/assets/benefits-oil.jpg";
import coconutImg from "@/assets/coconut-oil.png";
import groundnutImg from "@/assets/groundnut-oil.png";
import milletsImg from "@/assets/millets-grid.jpg";
import sesameImg from "@/assets/seasme-oil.png";
import heroImage from "@/assets/vainavi-hero.png";

const WHATSAPP_NUMBER = "918838688395";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

const oils = [
  {
    name: "கடலை எண்ணெய்",
    img: groundnutImg,
    benefits: ["Rich in healthy fats", "Traditional extraction", "Ideal for cooking"],
    prices: [
      { unit: "250ml", price: "₹75", suffix: "/ 250ml" },
      { unit: "500ml", price: "₹150", suffix: "/ 500ml" },
      { unit: "1L", price: "₹280", suffix: "/ L" },
      { unit: "5L", price: "₹1,400", suffix: "/ 5L" },
      { unit: "15kg Tin", price: "₹4,250", suffix: "/ 15kg Tin" },
    ],
  },
  {
    name: "நல்லெண்ணெய்",
    img: sesameImg,
    benefits: ["Rich in antioxidants", "Traditional flavour", "Heart-friendly"],
    prices: [
      { unit: "250ml", price: "₹100", suffix: "/ 250ml" },
      { unit: "500ml", price: "₹200", suffix: "/ 500ml" },
      { unit: "1L", price: "₹380", suffix: "/ L" },
      { unit: "5L", price: "₹1,900", suffix: "/ 5L" },
      { unit: "15kg Tin", price: "₹5,580", suffix: "/ 15kg Tin" },
    ],
  },
  {
    name: "தேங்காய் எண்ணெய்",
    img: coconutImg,
    benefits: ["Rich in MCTs", "Multipurpose use", "Naturally extracted"],
    prices: [
      { unit: "250ml", price: "₹110", suffix: "/ 250ml" },
      { unit: "500ml", price: "₹200", suffix: "/ 500ml" },
      { unit: "1L", price: "₹400", suffix: "/ L" },
      { unit: "5L", price: "₹2,000", suffix: "/ 5L" },
      { unit: "15kg Tin", price: "₹5,775", suffix: "/ 15kg Tin" },
    ],
  },
];

const millets = [
  { name: "வரகு", price: "₹100" },
  { name: "தினை", price: "₹102" },
  { name: "சாமை", price: "₹116" },
  { name: "கம்பு", price: "₹46" },
  { name: "ராகி", price: "₹68" },
  { name: "குதிரைவாலி", price: "₹120" },
  { name: "கருப்பு கவுனி", price: "₹136" },
  { name: "சிவப்பு அரிசி", price: "₹80" },
  { name: "மாப்பிள்ளை சம்பா", price: "₹90" },
  { name: "கைக்குத்தல் அரிசி", price: "₹90" },
];

export default function App() {
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
        <Enquiry />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--beige)] pb-20 pt-28 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 50%), radial-gradient(circle at 80% 70%, color-mix(in oklab, var(--gold) 15%, transparent), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">
            <Leaf size={14} /> Traditional Cold Pressed Goodness
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-[var(--primary-dark)] sm:text-5xl lg:text-6xl">
            Pure Cold-Pressed Oils &
            <span className="block text-primary">Nutritious Traditional Millets</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Bringing farm-fresh nutrition to families through traditional extraction methods and
            wholesome grains.
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center gap-3 rounded-full border border-primary/20 bg-white/85 px-5 py-2.5 text-sm font-semibold text-[var(--primary-dark)] shadow-soft backdrop-blur">
            <span className="inline-flex items-center gap-2 text-primary">
              <ShieldCheck size={18} /> FSSAI Certified
            </span>
            <span className="hidden h-4 w-px bg-primary/20 sm:block" />
            <span>Reg. No. 22426018000375</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Enquire Now <ArrowRight size={16} />
            </a>
            <a href="#products" className="btn-outline">
              Explore Products
            </a>
          </div>
          <div className="mt-7 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: <Leaf size={16} />, text: "100% Natural" },
              { icon: <ShieldCheck size={16} />, text: "Chemical Free" },
              { icon: <Flame size={16} />, text: "Cold Pressed" },
              { icon: <HandHeart size={16} />, text: "Locally Sourced" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </span>
                {item.text}
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
          <div className="float-anim relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(36,70,59,0.45)] ring-1 ring-primary/10">
            <img
              src={heroImage}
              alt="Vainavi Cold Press oils and millets"
              width={1600}
              height={640}
              className="block h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow-card sm:flex">
            <Sparkles size={14} className="text-[var(--gold)]" /> Trusted by 1000+ families
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const features = [
    { icon: <Leaf size={18} />, text: "100% Natural" },
    { icon: <Droplet size={18} />, text: "Cold Pressed" },
    { icon: <Wheat size={18} />, text: "Farm Sourced" },
    { icon: <Heart size={18} />, text: "Nutrient Rich" },
    { icon: <Recycle size={18} />, text: "Sustainable" },
    { icon: <HandHeart size={18} />, text: "Traditional Methods" },
  ];

  return (
    <section id="about" className="section-pad bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div {...fadeUp} className="relative">
          <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-border">
            <img
              src={aboutImg}
              alt="Traditional cold press"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden max-w-[200px] rounded-2xl bg-[var(--primary-dark)] p-5 text-white shadow-card md:block">
            <div className="font-display text-3xl font-bold text-[var(--gold)]">25+</div>
            <div className="mt-1 text-sm text-white/80">Years of traditional craft</div>
          </div>
        </motion.div>
        <motion.div {...fadeUp}>
          <span className="eyebrow">
            <Leaf size={14} /> Our Story
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--primary-dark)] sm:text-4xl">
            ஒவ்வொரு செக்கிலும் உணவுப் பாரம்பரியத்தைப் பாதுகாக்கிறோம்.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            வைனவி கோல்ட் பிரஸ், மரச்செக்கு எண்ணெய்கள் மற்றும் பாரம்பரிய சிறுதானியங்கள் மூலம் நம்
            உணவுப் பாரம்பரியத்தைப் பேணுகிறது.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            இயற்கையான சத்துகளும் உண்மையான சுவையும் நிறைந்த தயாரிப்புகள் மூலம் குடும்பங்களின்
            ஆரோக்கியமான வாழ்வை ஆதரிக்கிறோம்.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-3 rounded-xl bg-[var(--beige)] p-3 transition hover:shadow-soft"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {feature.icon}
                </span>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="section-pad bg-[var(--beige)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Droplet size={14} /> Our Products
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--primary-dark)] sm:text-4xl">
            பாரம்பரிய முறையில் தயாரிக்கப்பட்ட தூய எண்ணெய்கள்
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pure oils and wholesome grains for a healthier lifestyle.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {oils.map((oil, index) => (
            <ProductCard key={oil.name} oil={oil} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ oil, index }: { oil: typeof oils[0]; index: number }) {
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(2); // default to 1L (index 2)

  const selectedPricing = oil.prices[selectedUnitIndex];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      className="flex flex-col overflow-hidden rounded-2xl bg-background shadow-soft ring-1 ring-border transition-shadow hover:shadow-card"
    >
      <div className="aspect-square overflow-hidden bg-[var(--beige)]">
        <img
          src={oil.img}
          alt={oil.name}
          width={768}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-[var(--primary-dark)]">
          {oil.name}
        </h3>
        
        <ul className="mt-4 space-y-2 flex-1">
          {oil.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-2 text-sm text-foreground/80">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" /> {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3 rounded-xl bg-[var(--beige)] p-4 ring-1 ring-primary/10">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-muted-foreground">Quantity</span>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="relative rounded-lg bg-primary/10 ring-1 ring-primary/30"
            >
              <select
                value={selectedUnitIndex}
                onChange={(e) => setSelectedUnitIndex(Number(e.target.value))}
                className="w-full appearance-none bg-transparent py-1.5 pl-3 pr-8 text-sm font-bold text-primary focus:outline-none cursor-pointer"
              >
                {oil.prices.map((p, i) => (
                  <option key={p.unit} value={i}>
                    {p.unit}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </motion.div>
          </div>

          <div className="flex items-baseline justify-between border-t border-primary/10 pt-3">
            <span className="text-sm font-medium text-foreground/80">Price:</span>
            <div className="flex items-baseline gap-1">
              <motion.span 
                key={selectedPricing.price}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-primary"
              >
                {selectedPricing.price}
              </motion.span>
              <span className="text-sm font-medium text-muted-foreground">{selectedPricing.suffix}</span>
            </div>
          </div>
        </div>

        <a href="#contact" className="btn-primary mt-4 w-full">
          Enquire <ArrowRight size={14} />
        </a>
      </div>
    </motion.article>
  );
}

function Millets() {
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...fadeUp} className="mb-10 grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow">
              <Wheat size={14} /> Traditional Millets
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[var(--primary-dark)] sm:text-4xl">
              பாரம்பரிய சிறுதானியங்கள்
            </h2>
          </div>
          <p className="text-muted-foreground">
            Wholesome traditional millets and heritage rice varieties, rich in fiber, protein, and
            minerals. Sourced directly from Tamil Nadu farmers.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-2xl shadow-card ring-1 ring-border"
          >
            <img
              src={milletsImg}
              alt="Assorted traditional millets"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {millets.map((millet, index) => (
              <motion.div
                key={millet.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -3 }}
                className="rounded-xl bg-[var(--beige)] p-4 ring-1 ring-border/60 transition hover:shadow-soft hover:ring-primary/40"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wheat size={16} />
                </div>
                <div className="mt-3 font-display font-semibold text-[var(--primary-dark)]">
                  {millet.name}
                </div>
                <div className="mt-1 text-sm">
                  <span className="font-bold text-primary">{millet.price}</span>
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

function WhyUs() {
  const items = [
    {
      icon: <Leaf size={20} />,
      title: "தூய மூலப்பொருட்கள்",
      desc: "No chemicals or additives in any of our products.",
    },
    {
      icon: <Flame size={20} />,
      title: "பாரம்பரிய முறைகள்",
      desc: "Cold-pressed extraction the way it was always meant to be.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "சத்துக்கள் பாதுகாப்பு",
      desc: "Low-heat processing keeps the goodness intact.",
    },
    {
      icon: <HandHeart size={20} />,
      title: "நம்பகமான தரம்",
      desc: "Fresh, locally sourced, honestly priced.",
    },
  ];

  return (
    <section className="section-pad bg-[var(--beige)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Sparkles size={14} /> Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--primary-dark)] sm:text-4xl">
            ஏன் வைனவி?
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-background p-6 shadow-soft ring-1 ring-border transition hover:shadow-card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {item.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[var(--primary-dark)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const oilBenefits = [
    "Retains nutrients",
    "Better flavour",
    "Chemical free",
    "Natural extraction",
  ];
  const milletBenefits = [
    "Rich in fiber",
    "Supports digestion",
    "Natural nutrition",
    "Traditional superfood",
  ];

  return (
    <section id="benefits" className="section-pad bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div
          {...fadeUp}
          className="order-2 overflow-hidden rounded-2xl shadow-card ring-1 ring-border lg:order-1"
        >
          <img
            src={benefitsImg}
            alt="Cold pressed oil being poured"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-auto w-full"
          />
        </motion.div>
        <motion.div {...fadeUp} className="order-1 space-y-8 lg:order-2">
          <div>
            <span className="eyebrow">
              <Heart size={14} /> Real Benefits
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[var(--primary-dark)] sm:text-4xl">
              Goodness you can taste, nutrition you can feel.
            </h2>
          </div>
          <BenefitBox
            icon={<Droplet size={18} />}
            title="Cold Pressed Oil Benefits"
            items={oilBenefits}
          />
          <BenefitBox icon={<Wheat size={18} />} title="Millet Benefits" items={milletBenefits} />
        </motion.div>
      </div>
    </section>
  );
}

function BenefitBox({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-[var(--beige)] p-6">
      <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
        {icon} {title}
      </h3>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    { quote: "The quality reminds me of traditional homemade oils.", author: "Priya · Chennai" },
    {
      quote: "Fresh millets and excellent service. Truly authentic.",
      author: "Raghav · Coimbatore",
    },
    {
      quote: "Healthy products at honest prices, exactly what we needed.",
      author: "Meena · Madurai",
    },
  ];

  return (
    <section className="section-pad bg-[var(--beige)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Star size={14} /> Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--primary-dark)] sm:text-4xl">
            Loved by Families Across Tamil Nadu
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl bg-background p-7 shadow-soft ring-1 ring-border"
            >
              <div className="flex gap-0.5 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-foreground/85">"{testimonial.quote}"</p>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                - {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Enquiry() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, var(--gold), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            <Send size={14} /> Get In Touch
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            We'd love to hear from you.
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">
            Interested in our products? Drop us a message and we'll get back to you with details,
            pricing, and delivery options.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/85">
            <p>Phone: +91 88386 88395</p>
            <p>Email: sreevainavitraders@gmail.com</p>
            <p>
              Address: 20, Teacher's Colony, Kurumbapalayam, Vedapatti Post, Coimbatore - 641007
            </p>
          </div>
        </motion.div>

        <motion.form
          {...fadeUp}
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const formData = new FormData(form);
            const whatsappMessage = `Hello! I am contacting you through the Vainavi website.

Name: ${formData.get("name")}
Phone: ${formData.get("phone")}
Email: ${formData.get("email")}
Product Interested In: ${formData.get("product")}

Message:
${formData.get("message")}`;

            window.open(
              `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
              "_blank",
            );
            form.reset();
          }}
          className="grid gap-4 rounded-2xl bg-white p-7 text-foreground shadow-card sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your full name" required />
            <Field label="Phone Number" name="phone" type="tel" placeholder="+91" required />
          </div>
          <Field label="Email" name="email" type="email" placeholder="you@example.com" />
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Product Interested In
            </label>
            <select
              name="product"
              required
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <option value="">Select a product</option>
              {oils.map((oil) => (
                <option key={oil.name}>{oil.name}</option>
              ))}
              <option>Traditional Millets</option>
              <option>Other / Bulk</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your enquiry..."
              required
              className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <button type="submit" className="btn-primary mt-2 justify-center">
            <Send size={16} /> Send Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
