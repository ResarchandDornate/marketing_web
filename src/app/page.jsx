"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, ChevronRight, Activity, Building2, Sun, TrendingDown, BarChart3, PlugZap, Radio } from 'lucide-react';
import { products } from '../data/products';
import Reveal, { RevealItem } from '../components/Reveal';

const featuredIds = ['model-a', 'model-b', 'model-c', 'unity-infinity'];
const featuredModels = featuredIds.map(id => products.find(p => p.id === id)).filter(Boolean);

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden selection:bg-brand-green selection:text-white">

      {/* 1. HERO */}
      <section className="relative w-full overflow-hidden pt-20 pb-10 sm:pt-32 sm:pb-28 min-h-[50vh] sm:min-h-screen flex items-end sm:items-center bg-white">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img src="/products/image.png" alt="" className="w-full h-full object-cover object-center sm:object-right animate-hero-zoom" />
        </div>
        {/* Overlays removed to reduce dark theme on image */}

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 w-full">
          <div className="max-w-2xl">
            <Reveal animation="fade-up" duration={800}>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-[1.12] tracking-tight mb-3 sm:mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
                Solar Peaks at Noon <br /> Demands Peaks at Dusk
              </h1>
              <p className="text-base sm:text-2xl font-bold text-white mb-2 sm:mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                The gap between them is where Unity lives
              </p>
              <p className="text-sm sm:text-sm text-white/90 font-medium mb-6 sm:mb-8 leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                India's own BESS, built to deliver safe, sustainable and reliable energy.
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <Link
                  href="/contact"
                  className="btn-pill btn-unity text-xs sm:text-sm"
                >
                  Start Building <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="btn-pill text-xs sm:text-sm text-white border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all"
                >
                  Explore UnityESS
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

      </section>

      {/* 2. LOGOS / METRICS STRIP */}
      <Reveal as="section" animation="fade-up" duration={600} className="border-b border-black/5 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-center">
          <div className="bg-white rounded-xl p-3 sm:p-0 sm:bg-transparent border border-border sm:border-0">
            <h3 className="text-lg sm:text-2xl font-extrabold text-brand-blue-dark tracking-tight">99.99%</h3>
            <p className="text-[10px] sm:text-sm font-semibold text-text-secondary uppercase tracking-wider mt-0.5">System Uptime</p>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-0 sm:bg-transparent border border-border sm:border-0">
            <h3 className="text-lg sm:text-2xl font-extrabold text-brand-blue-dark tracking-tight">&lt;10ms</h3>
            <p className="text-[10px] sm:text-sm font-semibold text-text-secondary uppercase tracking-wider mt-0.5">Switchover Speed</p>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-0 sm:bg-transparent border border-border sm:border-0">
            <h3 className="text-lg sm:text-2xl font-extrabold text-brand-blue-dark tracking-tight">24/7</h3>
            <p className="text-[10px] sm:text-sm font-semibold text-text-secondary uppercase tracking-wider mt-0.5">Live Monitoring</p>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-0 sm:bg-transparent border border-border sm:border-0">
            <h3 className="text-lg sm:text-2xl font-extrabold text-brand-blue-dark tracking-tight">Tier 1</h3>
            <p className="text-[10px] sm:text-sm font-semibold text-text-secondary uppercase tracking-wider mt-0.5">Safety Certified</p>
          </div>
        </div>
      </Reveal>

      {/* 3. HARDWARE COLLECTION GRID */}
      <section className="py-14 sm:py-20 bg-white text-brand-blue-dark relative z-20">
        <div className="max-w-7xl mx-auto px-6">

          <Reveal animation="fade-up" className="mb-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tighter leading-[1.1] mb-3">
              Industrial-grade hardware.<br />
              <span className="text-gray-700">Architecturally refined.</span>
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              We build smart, reliable energy storage systems that grow with your needs — from commercial sites to utility-scale projects
            </p>
          </Reveal>

          {/* Desktop grid */}
          <Reveal stagger staggerDelay={120} className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredModels.map((product) => (
              <RevealItem key={product.id} animation="fade-up">
                <Link
                  href={`/products/${product.id}`}
                  className="group relative block rounded-2xl overflow-hidden h-[320px] sm:h-[360px] cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <p className="text-[9px] font-bold text-white uppercase tracking-[0.15em] mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">{product.series}</p>
                    <h3 className="text-lg font-bold text-white mb-1 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">{product.name}</h3>
                    <p className="text-sm text-white/90 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">{product.highlights?.[0]?.value} {product.highlights?.[0]?.label}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </Reveal>

          {/* Mobile swipeable carousel */}
          <div className="sm:hidden">
            <ProductCarousel products={featuredModels} />
          </div>

          <Reveal animation="fade-up" delay={200} className="mt-10 text-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 text-[15px] font-bold text-text-secondary hover:text-brand-blue-dark transition-colors px-6 py-3 rounded-full border border-black/10 hover:bg-gray-50 hover:shadow-sm">
              View Entire Hardware Lineup <ArrowRight className="w-3 h-3s" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. INTELLIGENT TECHNOLOGY */}
      <section className="pt-2 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal animation="fade-up" className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight leading-[1.15] mb-2">
              Built with <span className="text-brand-blue-dark">intelligence</span> at every layer.
            </h2>

          </Reveal>

          <Reveal stagger staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {[
              { icon: ShieldCheck, title: '3-Tiered BMS', subtitle: 'Advanced Battery Management Architecture', desc: 'Built with module-level, rack-level, and system-level protection to ensure real-time monitoring, thermal control, and fault isolation.', tag: 'Multi-Level Intelligence' },
              { icon: Activity, title: '314Ah LFP Cells', subtitle: 'High-Reliability Battery Core', desc: 'Powered by premium 314Ah LFP cells engineered for long cycle life, enhanced thermal stability, and consistent output.', tag: 'Engineered for Longevity' },
              { icon: Sun, title: 'Solar & Grid Ready', subtitle: 'Seamless Clean Energy Integration', desc: 'Integrate effortlessly with solar PV systems and grid infrastructure for reliable storage, peak shaving, and backup.', tag: 'Flexible Energy Deployment' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up">
                <div className="group bg-[rgb(58,88,129)] rounded-2xl border border-white/10 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm font-semibold text-white mb-2">{item.subtitle}</p>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">{item.desc}</p>
                  <div className="pt-3 border-t border-white/15">
                    <span className="text-[9px] font-bold text-white/70 uppercase tracking-widest">{item.tag}</span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal animation="fade-up" delay={100}>
            <div className="bg-[#f8f9fa] rounded-xl p-4 border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-gray-800 tracking-tight">UnityESS can power your system.</h3>
                <p className="text-sm text-text-secondary">Explore our process from design to deployment.</p>
              </div>
              <Link href="/process" className="whitespace-nowrap bg-brand-blue-dark text-white px-5 py-2.5 rounded-full font-bold text-xs hover:opacity-90 transition-opacity">
                How It Works <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. UPCOMING MANUFACTURING FACILITY */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left — text */}
            <Reveal animation="fade-right" duration={800}>
              <div>
                <p className="flex items-center gap-1.5 text-[16px] font-bold text-text-tertiary uppercase tracking-widest mb-2"><Building2 className="w-5.5 h-5.5 text-accent" />Our Infrastructure</p>
                <h2 className="text-lg font-extrabold text-brand-blue-dark tracking-tight leading-[1.15] mb-2">
                  UnityESS <span className="text-gray-700">Manufacturing Facility</span>
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  UnityESS currently operates with an annual manufacturing
                  capacity of +1 GWh and is developing an upcoming, fully
                  automated giga-scale manufacturing facility in Ghilot,
                  Alwar district, Rajasthan.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    { val: '6.5 GWh', label: 'Annual Production Capacity' },

                  ].map((s) => (
                    <div key={s.label} className="bg-bg-deep rounded-lg px-5 py-2.5 border border-border">
                      <p className="text-xl font-extrabold text-brand-blue-dark">{s.val}</p>
                      <p className="text-[12px] font-bold text-text-tertiary uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>
            {/* Right — image */}
            <Reveal animation="fade-left" delay={200} duration={800}>
              <div className="rounded-xl overflow-hidden border border-border mx-auto lg:ml-auto">
                <img src="/products/infrastructure.jpeg" alt="UnityESS Manufacturing Facility" className="w-full h-auto object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. ADVANTAGES — TABBED DARK SECTION */}
      <AdvantagesSection />

      {/* 7. BESS APPLICATIONS */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl font-extrabold text-gray-700 tracking-tighter leading-[1.1] mb-3">
              BESS <span className="text-brand-blue-dark">Applications</span>
            </h2>
          </Reveal>
          <Reveal stagger staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: TrendingDown, title: 'Peak Load Shifting & Backup Power', desc: 'Reduce peak demand charges by storing energy during off-peak hours and deploying it during high-demand periods for uninterrupted backup.' },
              { icon: BarChart3, title: 'Peak & Valley Price Arbitrage', desc: 'Capitalize on electricity price fluctuations — charge when rates are low and discharge when prices peak to maximize savings.' },
              { icon: PlugZap, title: 'Intelligent Charging of EVs', desc: 'Smart energy management for EV charging infrastructure — balance grid load while delivering fast, reliable vehicle charging.' },
              { icon: Radio, title: 'Grid Scale Integration & Support', desc: 'Stabilize the grid with large-scale energy storage that provides frequency regulation, voltage support, and renewable smoothing.' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up">
                <div className="group bg-white rounded-2xl overflow-hidden border border-border hover:bg-brand-blue-dark hover:shadow-lg hover:-translate-y-1 hover:border-brand-blue-dark transition-all duration-300 block h-full p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-brand-blue-dark/10 group-hover:bg-white/20 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-all">
                    <item.icon className="w-7 h-7 text-brand-blue-dark group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-brand-blue-dark group-hover:text-white mb-2 leading-snug transition-colors">{item.title}</h3>
                  <p className="text-sm text-text-secondary group-hover:text-white/70 leading-relaxed transition-colors">{item.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 10. ULTIMATE CTA */}
      <Reveal as="section" animation="zoom-in" className="py-16 bg-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-brand-green/5 blur-[80px] rounded-full -z-10"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl font-extrabold text-gray-700 tracking-tighter mb-3 leading-[1.1]">
            Start building with <span className="text-brand-blue-dark">UnityESS.</span>
          </h2>
          <p className="text-sm text-text-secondary font-medium mb-8 max-w-xl mx-auto">
            Speak with our engineering team to architect a solution for your specific load profile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="btn-corporate bg-brand-blue-dark text-white text-sm py-3! px-8! shadow-[0_10px_30px_rgba(0,184,83,0.2)]  hover:-translate-y-1 transition-all">
              Contact Engineering
            </Link>
            <Link href="/products" className="btn-corporate shadow-sm bg-white border border-black/10 text-brand-blue-dark text-sm py-3! px-8! hover:bg-gray-50 hover:-translate-y-1 transition-all">
              View Products
            </Link>
          </div>
        </div>
      </Reveal>

    </div>
  );
}

/* ═══════ Tabbed Advantages Section ═══════ */
const advantageTabs = [
  {
    id: 'solar',
    label: 'Solar Capture',
    title: 'Solar Energy Capture & Backup',
    desc: 'Store excess solar generation during peak production hours and deploy stored energy during outages — with instant switchover and deep cycle reserves for uninterrupted power.',
    img: '/products/pict1.jpeg',
    features: ['Instant switchover during grid outages', 'Deep cycle reserves for 8,000+ cycles', 'Peak shaving & load shifting', 'Seamless solar integration'],
    stats: [
      { val: '8,000+', label: 'Cycle Life' },
      { val: '314Ah', label: 'LFP Cells' },
      { val: 'IP54', label: 'Protection' },
    ],
  },
  {
    id: 'grid',
    label: 'Grid Stability',
    title: 'Grid Stability & Independence',
    desc: 'Stabilize voltage and frequency fluctuations while reducing reliance on unstable grid infrastructure. Autonomous energy reserves ensure operational continuity around the clock.',
    img: '/products/pict2.jpeg',
    features: ['Voltage & frequency regulation', 'Autonomous energy reserves', '<10ms grid switchover', '24/7 real-time monitoring'],
    stats: [
      { val: '<10ms', label: 'Switchover' },
      { val: '99.99%', label: 'Uptime' },
      { val: '3-Tier', label: 'BMS' },
    ],
  },
  {
    id: 'scale',
    label: 'Scalability',
    title: 'Scalable & Future-Ready',
    desc: 'Modular architecture allows seamless expansion from kilowatt to megawatt scale. Millisecond-fast automatic transfer switching ensures zero downtime during scaling.',
    img: '/products/pict3.jpeg',
    features: ['kW to MW seamless expansion', '20ft containerized form factor', 'Plug-and-operate deployment', 'C4 corrosion resistance'],
    stats: [
      { val: '6.25', label: 'MWh Max' },
      { val: '2.5 MW', label: 'AC Power' },
      { val: '20ft', label: 'Container' },
    ],
  },
  {
    id: 'cost',
    label: 'Lower Costs',
    title: 'Lower Costs & Carbon Footprint',
    desc: 'Optimize energy usage with peak shaving and load shifting, dramatically cutting operational costs while reducing carbon emissions through stored renewable energy.',
    img: '/products/product B.jpeg',
    features: ['Peak shaving & demand response', '>94% round-trip efficiency', 'Diesel generator replacement', 'Multiple revenue streams'],
    stats: [
      { val: '>94%', label: 'RTE' },
      { val: '522kWh', label: 'Hybrid' },
      { val: '300kW', label: 'Max PV' },
    ],
  },
];

function AdvantagesSection() {
  const [active, setActive] = useState(0);
  const tab = advantageTabs[active];

  return (
    <section className="py-10 sm:py-14 bg-[rgb(58,88,129)] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-brand-blue-dark/12 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-accent/8 blur-[180px] rounded-full"></div>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <Reveal animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <p className="text-[13px] font-bold text-white uppercase tracking-[0.2em] mb-2">Why Energy Storage</p>
              <h2 className="text-2xl font-extrabold text-white tracking-tight leading-[1.1]">
                Intelligent, Powerful and<br />
                <span className="text-brand-blue-light mt-2">Built for India</span>
              </h2>
            </div>
            <Link href="/products" className="text-[10px] font-bold text-white border border-white rounded-full px-4 py-2 hover:text-white hover:border-white/25 transition-all whitespace-nowrap self-start sm:self-auto">
              View full specs <ArrowRight className="w-3 h-3 inline ml-1" />
            </Link>
          </div>
        </Reveal>

        {/* Tab pills — smaller */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {advantageTabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-300 border ${active === i
                ? 'bg-white text-[#070E1A] border-white shadow-[0_0_25px_rgba(255,255,255,0.12)]'
                : 'bg-white/[0.03] text-white/40 border-white/8 hover:text-white/70 hover:border-white/15 hover:bg-white/[0.05]'
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Main content card — compact */}
        <div className="rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left — Product image (bigger, cover style) */}
            <div className="relative lg:col-span-3 min-h-[280px] sm:min-h-[340px]">
              <img
                key={tab.id}
                src={tab.img}
                alt={tab.title}
                className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
              />
            </div>

            {/* Right — Content */}
            <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-center bg-[#152238]">
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight leading-tight">{tab.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">{tab.desc}</p>

              {/* Feature bullets */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                {tab.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] shrink-0"></div>
                    <span className="text-sm text-white/60 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex gap-2.5">
                {tab.stats.map((s) => (
                  <div key={s.label} className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2 text-center">
                    <p className="text-base font-extrabold text-white leading-tight">{s.val}</p>
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════ Mobile Product Carousel ═══════ */
function ProductCarousel({ products }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);
  const total = products.length;

  const next = useCallback(() => setActive((prev) => (prev + 1) % total), [total]);
  const prev = useCallback(() => setActive((prev) => (prev - 1 + total) % total), [total]);

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

  const product = products[active];

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <Link
        href={`/products/${product.id}`}
        className="relative block rounded-2xl overflow-hidden h-[480px] cursor-pointer"
      >
        <img
          key={product.id}
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center animate-fadeIn brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 from-5% via-transparent via-50% to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <p className="text-[11px] font-bold text-cyan-300 uppercase tracking-[0.15em] mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">{product.series}</p>
          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">{product.name}</h3>
          <p className="text-base text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">{product.highlights?.[0]?.value} {product.highlights?.[0]?.label}</p>
        </div>
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </Link>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-brand-blue-dark w-5' : 'bg-black/15'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
