import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ChevronRight, ArrowRight, Shield, Zap, Battery, Download, Factory, Server, Building2, Sun, Plug, HeartPulse, Camera, Tent, HardHat, Briefcase, Truck, Radio, BarChart3, BatteryCharging, Warehouse, Hospital, Lightbulb, Wind } from 'lucide-react';
import { getProductById, products } from '../data/products';
import Reveal, { RevealItem } from '../components/Reveal';


const appMetaMap = {
  'Emergency backup power': { icon: Zap, caption: 'Instant failover power when the grid goes down — zero downtime, zero compromise.' },
  'Outdoor events & camping': { icon: Tent, caption: 'Rugged, silent energy for off-grid adventures and large-scale outdoor events.' },
  'Construction sites': { icon: HardHat, caption: 'Diesel-free jobsite power — tough enough for the harshest environments.' },
  'Mobile offices': { icon: Briefcase, caption: 'Portable, plug-and-play energy for remote workstations anywhere.' },
  'Film & photography sets': { icon: Camera, caption: 'Silent, clean power that keeps the cameras rolling without interruption.' },
  'Medical equipment backup': { icon: HeartPulse, caption: 'Mission-critical backup for life-saving equipment — reliability you can trust.' },
  'Factories & warehouses': { icon: Factory, caption: 'Eliminate downtime with industrial-grade power that never stops delivering.' },
  'Data centers': { icon: Server, caption: 'Ultra-reliable energy backbone for always-on digital infrastructure.' },
  'Commercial buildings': { icon: Building2, caption: 'Smart energy management that slashes costs and keeps operations seamless.' },
  'EV charging stations': { icon: BatteryCharging, caption: 'High-power charging infrastructure that scales with electric mobility.' },
  'Solar storage': { icon: Sun, caption: 'Capture every ray — store solar energy and deploy it when it matters most.' },
  'Peak load management': { icon: BarChart3, caption: 'Shave peak demand charges and optimize your energy spend intelligently.' },
  'Industrial microgrids': { icon: Radio, caption: 'Self-sufficient energy networks that operate independently from the grid.' },
  'Telecom towers': { icon: Radio, caption: 'Unbreakable power for critical communication infrastructure — 24/7 uptime.' },
  'Mining operations': { icon: HardHat, caption: 'Heavy-duty energy for remote, high-demand extraction operations.' },
  'Grid-scale storage': { icon: Plug, caption: 'Massive energy reserves that stabilize and strengthen the power grid.' },
  'Renewable integration': { icon: Wind, caption: 'Seamlessly bridge solar and wind intermittency with intelligent storage.' },
  'Utility substations': { icon: Zap, caption: 'Grid-hardening energy storage for substations and distribution networks.' },
  'Remote communities': { icon: Lightbulb, caption: 'Reliable, sustainable power for communities beyond the grid\'s reach.' },
  'Hospitals & healthcare': { icon: Hospital, caption: 'Life-critical power continuity for healthcare facilities — no exceptions.' },
  'Outdoor emergency power supply (camping, rescue)': { icon: Tent, caption: 'Rugged, portable energy for off-grid adventures and emergency rescue operations.' },
  'Blackout backup power': { icon: Zap, caption: 'Instant failover power when the grid goes down — keep your home running seamlessly.' },
  'Mobile device charging (phones, cameras, laptops)': { icon: BatteryCharging, caption: 'Quick-charge your devices on the go with QC2.0 USB and AC outlets.' },
  'Grid support & peak shaving/valley filling (5+1 system)': { icon: BarChart3, caption: 'Combine 5 units on a power base for household grid support and peak demand management.' },
  'Household energy storage': { icon: Lightbulb, caption: 'Store solar or off-peak energy for everyday household use — reduce your electricity bills.' },
  'Portable on-the-go power': { icon: Plug, caption: 'Lightweight, plug-and-play power you can take anywhere — indoors or outdoors.' },
};

function getAppMeta(app) {
  if (appMetaMap[app]) return appMetaMap[app];
  return { icon: Zap, caption: 'Engineered for maximum performance and unwavering reliability.' };
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="bg-bg-deep min-h-screen pt-32 text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-2xl bg-white border border-border flex items-center justify-center mx-auto mb-6">
            <Battery className="w-8 h-8 text-text-tertiary" />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">System Not Found</h2>
          <p className="text-base text-text-secondary mb-8">The product you're looking for may have been updated or moved.</p>
          <Link to="/products" className="btn-pill btn-unity">Back to All Systems</Link>
        </div>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-bg-deep min-h-screen pt-14">

      {/* Breadcrumb */}
      <div className="border-b border-border bg-white/80 backdrop-blur-xl sticky top-14 z-20">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-tertiary" />
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-text-tertiary" />
            <span className="text-text-primary font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 bg-accent/3 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — Product image */}
            <Reveal animation="fade-right" duration={800} className="flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* {product.isNew && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase bg-brand-green text-white px-3 py-1.5 rounded-full shadow-md shadow-brand-green/20">
                      New
                    </span>
                  </div>
                )} */}
              </div>
            </Reveal>

            {/* Right — Product info */}
            <Reveal animation="fade-left" delay={200} duration={800}>
              <p className="text-accent font-bold text-[10px] uppercase tracking-widest mb-4">
                {product.series}
              </p>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-[1.08] mb-3">
                {product.name}
              </h1>

              <p className="text-sm text-text-secondary mb-6 leading-relaxed max-w-md">{product.tagline}</p>

              {/* Highlight cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {product.highlights.map((h) => (
                  <div key={h.label} className="bg-gradient-to-br from-white to-[#f5f7fa] px-3 py-3 rounded-xl border border-border text-center shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                    <span className="text-lg font-extrabold text-accent block leading-tight">{h.value}</span>
                    <span className="text-[9px] text-text-tertiary uppercase tracking-widest font-bold mt-0.5 block">{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Short description */}
              <div className="bg-gradient-to-r from-accent/5 to-transparent rounded-xl p-4 border border-border mb-6">
                <p className="text-xs text-text-secondary leading-relaxed italic">
                  &ldquo;{product.shortDesc}&rdquo;
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="btn-pill btn-unity text-sm">
                  Request Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                {product.datasheet ? (
                  <a href={product.datasheet} target="_blank" rel="noopener noreferrer" className="btn-pill btn-unity-outline text-sm flex items-center gap-1">
                    <Download className="w-4 h-4" /> Download Datasheet
                  </a>
                ) : (
                  <button className="btn-pill btn-unity-outline text-sm flex items-center gap-1 cursor-not-allowed opacity-50">
                    <Download className="w-4 h-4" /> Datasheet Unavailable
                  </button>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specs & Features */}
      <section className="py-12 sm:py-16 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Specs */}
            <Reveal animation="fade-right">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Technical Specifications</h2>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden border border-border">
                {Object.entries(product.specs).map(([key, value], i) => {
                  const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
                  return (
                    <div
                      key={key}
                      className={`flex items-center justify-between py-3.5 px-5 hover:bg-accent/5 transition-colors ${
                        i % 2 === 0 ? 'bg-[#f5f7fa]' : 'bg-white'
                      } ${i < Object.entries(product.specs).length - 1 ? 'border-b border-border' : ''}`}
                    >
                      <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">{label}</span>
                      <span className="text-sm text-text-primary font-bold text-right">{value}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* Features */}
            <Reveal animation="fade-left" delay={150}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-brand-green" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Key Features</h2>
              </div>
              <div className="space-y-2.5">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 bg-gradient-to-r from-[#f8f9fa] to-white p-4 rounded-xl border border-border group hover:bg-white hover:border-brand-green/20 hover:shadow-sm transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-green/15 group-hover:bg-brand-green group-hover:border-brand-green transition-all">
                      <Check className="w-3 h-3 text-brand-green group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 sm:py-16 bg-[#f5f7fa]">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal animation="fade-up" className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight mb-2">Applications</h2>
            <p className="text-sm text-text-secondary">Where the {product.name} delivers unstoppable performance</p>
          </Reveal>

          {/* Desktop grid */}
          <Reveal stagger staggerDelay={100} className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {product.applications.map((app) => {
              const { icon: Icon, caption } = getAppMeta(app);
              return (
                <RevealItem key={app} animation="fade-up" className="h-full">
                  <div className="group bg-[rgb(58,88,129)] rounded-2xl border border-white/10 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 shrink-0">{app}</h3>
                    <p className="text-xs text-white/60 leading-relaxed grow">{caption}</p>
                  </div>
                </RevealItem>
              );
            })}
          </Reveal>

          {/* Mobile swipeable carousel */}
          <div className="sm:hidden">
            <AppCarousel applications={product.applications} />
          </div>
        </div>
      </section>

      {/* More Products */}
      <section className="py-10 sm:py-14 bg-[#f0f2f5]">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal animation="fade-up" className="text-center mb-6">
            <h2 className="text-xl font-extrabold text-text-primary tracking-tight mb-1">Explore More Systems</h2>
            <p className="text-xs text-text-secondary">Find the right solution for your needs</p>
          </Reveal>
          <Reveal stagger staggerDelay={80} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {otherProducts.map((p) => (
              <RevealItem key={p.id} animation="fade-up">
                <Link
                  to={`/products/${p.id}`}
                  className="group relative block rounded-2xl overflow-hidden h-[240px] cursor-pointer"
                >
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-200 transition-colors">{p.name}</h3>
                    <p className="text-[8px] text-white/50 font-bold uppercase tracking-widest mt-0.5">{p.series}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section" animation="zoom-in" className="py-14 sm:py-16 bg-[rgb(58,88,129)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px]"></div>
        <div className="absolute -top-25 -right-12.5 w-75 h-75 bg-brand-green/8 rounded-full blur-[100px]"></div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight leading-[1.1]">
            Interested in the <span className="text-brand-blue-light">{product.name}</span>?
          </h2>
          <p className="text-sm text-white mb-8 leading-relaxed max-w-md mx-auto">
            Get in touch for specialized pricing, technical consultation, and custom configuration options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="btn-pill btn-unity text-sm">
              Talk to Engineering <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/products" className="btn-pill text-sm text-white border-1.5 border-white hover:bg-white/10 transition-all">
              How It Works <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* ═══════ Mobile App Carousel ═══════ */
function AppCarousel({ applications }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);
  const total = applications.length;

  const next = useCallback(() => setActive((prev) => (prev + 1) % total), [total]);
  const prev = useCallback(() => setActive((prev) => (prev - 1 + total) % total), [total]);

  // Auto-swipe every 3 seconds
  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  const { icon: Icon, caption } = getAppMeta(applications[active]);

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="bg-[rgb(58,88,129)] rounded-2xl border border-white/10 p-6 min-h-[160px] transition-all duration-300">
        <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base font-bold text-white mb-1">{applications[active]}</h3>
        <p className="text-xs text-white/60 leading-relaxed">{caption}</p>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {applications.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === active ? 'bg-brand-blue-dark w-5' : 'bg-black/15'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
