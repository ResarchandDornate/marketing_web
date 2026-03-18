import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, ChevronRight, BarChart3, Activity, Server, Building2, Battery, GridIcon, TrendingDown, Sun, Wifi, Plug, Home as HomeIcon, Factory, Store } from 'lucide-react';
import { products } from '../data/products';
import Reveal, { RevealItem } from '../components/Reveal';

const featuredIds = ['model-a', 'model-a2', 'model-b', 'model-c'];
const featuredModels = featuredIds.map(id => products.find(p => p.id === id)).filter(Boolean);

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden selection:bg-brand-green selection:text-white">

      {/* 1. DARK HERO */}
      <section className="relative w-full overflow-hidden pt-28 pb-14 bg-[#020B18]">
        {/* Scenic background */}
        <div className="absolute inset-0">
          <img src="/hero-bg3.svg" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#020B18]/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left — Text */}
            <Reveal animation="fade-up" duration={800}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                Solar peaks at noon <br /> Demands peaks at dusk.
              </h1>
                  <span className="text-2xl font-bold text-brand-blue-dark">The gap between them is where Unity lives</span>
              <p className="text-xs sm:text-sm text-white/50 mb-6 leading-relaxed max-w-md">
                India's own BESS , built to deliver safe ,sustainable and reliable energy.
              </p>

              <div className="flex flex-wrap gap-2.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1.5 bg-white text-black px-5 py-2.5 rounded-full font-bold text-xs hover:scale-105 active:scale-95 transition-transform"
                >
                  Start Building <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-1.5 bg-white/5 text-white border border-white/10 px-5 py-2.5 rounded-full font-bold text-xs hover:bg-white/10 transition-colors"
                >
                  Explore UnityESS
                </Link>
              </div>
            </Reveal>

            {/* Right — Two product images merged */}
            <Reveal animation="fade-left" delay={300} duration={900}>
              <div className="relative flex items-end justify-center -space-x-8 sm:-space-x-12">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-white/3 blur-[60px] rounded-full"></div>

                <div className="relative z-10 flex items-end justify-center animate-float" style={{ animationDelay: '0s' }}>
                  <img src="/products/modelA.png" className="h-64 sm:h-80 lg:h-96 w-auto object-contain drop-shadow-[0_0_30px_rgba(0,107,166,0.2)] hover:scale-105 transition-transform duration-500" alt="Unity Model A" />
                </div>

                <div className="relative z-20 flex items-end justify-center animate-float" style={{ animationDelay: '0.8s' }}>
                  <img src="/products/261Kwh BESS.96.png" className="h-80 sm:h-96 lg:h-112 w-auto object-contain drop-shadow-[0_0_30px_rgba(0,107,166,0.2)] hover:scale-105 transition-transform duration-500" alt="261kWh BESS System" />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 2. LOGOS / METRICS STRIP */}
      <Reveal as="section" animation="fade-up" duration={600} className="border-b border-black/5 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          <div>
            <h3 className="text-4xl font-extrabold text-brand-blue-dark tracking-tight">99.99%</h3>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mt-1">Guaranteed Uptime</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-black/10"></div>
          <div>
            <h3 className="text-4xl font-extrabold text-brand-blue-dark tracking-tight">&lt;10ms</h3>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mt-1">Grid Switchover</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-black/10"></div>
          <div>
            <h3 className="text-4xl font-extrabold text-brand-blue-dark tracking-tight">27/4</h3>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mt-1">Monitoring </p>
          </div>
          <div className="hidden md:block w-px h-10 bg-black/10"></div>
          <div>
            <h3 className="text-4xl font-extrabold text-brand-blue-dark tracking-tight">Tier 1</h3>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mt-1">Global Safety Rating</p>
          </div>
        </div>
      </Reveal>

      {/* 3. HARDWARE COLLECTION GRID */}
      <section className="py-14 sm:py-20 bg-white text-brand-blue-dark relative z-20">
        <div className="max-w-7xl mx-auto px-6">

          <Reveal animation="fade-up" className="mb-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter leading-[1.1] mb-3">
              Industrial-grade hardware.<br />
              <span className="text-gray-700">Architecturally refined.</span>
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              We build smart, reliable energy storage systems that grow with your needs — from commercial sites to utility-scale projects
            </p>
          </Reveal>

          <Reveal stagger staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredModels.map((product) => (
              <RevealItem key={product.id} animation="fade-up">
                <Link
                  to={`/products/${product.id}`}
                  className="group relative bg-gradient-to-b from-[#f0f4f8] to-white rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full border border-black/5"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue-dark via-accent to-brand-blue-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

                  {/* Image area */}
                  <div className="relative p-6 pt-8 pb-4 h-56 flex items-center justify-center">
                    {/* Subtle radial glow behind product */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,98,151,0.04)_0%,transparent_70%)] group-hover:bg-[radial-gradient(ellipse_at_center,rgba(0,98,151,0.08)_0%,transparent_70%)] transition-all duration-500"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out relative z-10 drop-shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 pt-3 flex flex-col flex-1 border-t border-black/5 bg-white">
                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.15em] mb-1.5">{product.series}</p>
                    <h3 className="text-lg font-extrabold text-brand-blue-dark mb-1 group-hover:text-accent transition-colors tracking-tight">{product.name}</h3>
                    <p className="text-xs text-text-secondary mb-3 leading-relaxed">{product.tagline}</p>

                    {/* Key specs row */}
                    <div className="flex gap-2 mb-4">
                      {product.highlights?.slice(0, 2).map((h) => (
                        <div key={h.label} className="flex-1 bg-[#f4f7fa] rounded-lg px-3 py-2 text-center border border-black/3">
                          <p className="text-sm font-extrabold text-brand-blue-dark leading-tight">{h.value}</p>
                          <p className="text-[8px] font-bold text-text-tertiary uppercase tracking-wider mt-0.5">{h.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex items-center justify-between text-[13px] font-bold text-white bg-brand-blue-dark group-hover:bg-accent py-3 px-4 rounded-xl transition-all duration-300">
                      <span>Explore System</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal animation="fade-up" delay={200} className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 text-[15px] font-bold text-text-secondary hover:text-brand-blue-dark transition-colors px-6 py-3 rounded-full border border-black/10 hover:bg-gray-50 hover:shadow-sm">
              View Entire Hardware Lineup <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. INTELLIGENT TECHNOLOGY */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal animation="fade-up" className="text-center max-w-xl mx-auto mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight leading-[1.15] mb-2">
              Built with <span className="text-brand-blue-dark">intelligence</span> at every layer.
            </h2>
            <p className="text-xs text-text-secondary leading-relaxed">
              Advanced hardware engineering with AI-powered software for unmatched performance, safety, and longevity.
            </p>
          </Reveal>

          <Reveal stagger staggerDelay={150} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {[
              { icon: ShieldCheck, title: '3-Tiered BMS', subtitle: 'Advanced Battery Management Architecture', desc: 'Built with module-level, rack-level, and system-level protection to ensure real-time monitoring, thermal control, and fault isolation for maximum safety and performance.', tag: 'Multi-Level Intelligence' },
              { icon: Activity, title: '314Ah LFP Cells', subtitle: 'High-Reliability Battery Core', desc: 'Powered by premium 314Ah Lithium Iron Phosphate (LFP) cells engineered for long cycle life, enhanced thermal stability, and consistent high-performance output.', tag: 'Engineered for Longevity' },
              { icon: Sun, title: 'Solar & Grid Ready', subtitle: 'Seamless Clean Energy Integration', desc: 'Designed to integrate effortlessly with solar PV systems and grid infrastructure, enabling reliable energy storage, peak shaving, and backup power.', tag: 'Flexible Energy Deployment' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up">
                <div className="group bg-[#f8f9fa] rounded-xl p-5 border border-black/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue-dark/8 flex items-center justify-center mb-3">
                    <item.icon className="w-4 h-4 text-brand-blue-dark" />
                  </div>
                  <h3 className="text-base font-extrabold text-gray-800 mb-0.5 tracking-tight">{item.title}</h3>
                  <p className="text-[11px] font-semibold text-brand-blue-dark mb-2">{item.subtitle}</p>
                  <p className="text-[11px] text-text-secondary leading-relaxed mb-3">{item.desc}</p>
                  <div className="pt-2 border-t border-black/5">
                    <span className="text-[10px] font-bold text-brand-blue-dark/70 uppercase tracking-widest">{item.tag}</span>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal animation="fade-up" delay={100}>
            <div className="bg-[#f8f9fa] rounded-xl p-4 border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-gray-800 tracking-tight">UnityESS can power your system.</h3>
                <p className="text-xs text-text-secondary">Explore our process from design to deployment.</p>
              </div>
              <Link to="/process" className="whitespace-nowrap bg-brand-blue-dark text-white px-5 py-2.5 rounded-full font-bold text-xs hover:opacity-90 transition-opacity">
                How It Works <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. UPCOMING MANUFACTURING FACILITY */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <Reveal animation="fade-right" duration={800}>
              <div className="py-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-brand-blue/15 bg-brand-blue/5 text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-3">
                  <Building2 className="w-3 h-3" /> Our Infrastructure
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-brand-blue-dark tracking-tight leading-[1.15] mb-2">
                   UnityESS <span className="text-gray-700">Manufacturing Facility</span>
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-700 tracking-tighter leading-[1.1] mb-3">
              BESS <span className="text-brand-blue-dark">Applications</span>
            </h2>
          </Reveal>
          <Reveal stagger staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Large Pack Battery Assembly', desc: 'High-capacity pack assembly for utility and industrial-scale deployments.', img: '/products/app-battery-assembly.jpg' },
              { title: 'Industrial Outdoor Cabinet', desc: 'Ruggedized outdoor enclosures engineered for harsh environments and remote installations.', img: '/products/app-industrial-outdoor.jpg' },
              { title: 'Commercial Grid Project', desc: 'Grid-tied commercial energy storage for peak management and demand response programs.', img: '/products/app-commercial-grid.jpg' },
              { title: 'Residential Home Storage', desc: 'Compact residential solutions for energy independence and backup power.', img: '/products/app-residential-home.jpg' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up">
                <Link to="/products" className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block h-full">
                  <div className="h-44 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="px-5 py-4 text-center">
                    <h3 className="text-sm font-bold text-brand-blue-dark mb-1.5 group-hover:text-gray-700 transition-colors">{item.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 10. ULTIMATE CTA */}
      <Reveal as="section" animation="zoom-in" className="py-16 bg-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-brand-green/5 blur-[80px] rounded-full -z-10"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-700 tracking-tighter mb-3 leading-[1.1]">
            Start building with <span className="text-brand-blue-dark">UnityESS.</span>
          </h2>
          <p className="text-sm text-text-secondary font-medium mb-8 max-w-xl mx-auto">
            Speak with our engineering team to architect a solution for your specific load profile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="btn-corporate btn-corp-green text-sm py-3! px-8! shadow-[0_10px_30px_rgba(0,184,83,0.2)] hover:shadow-[0_15px_40px_rgba(0,184,83,0.3)] hover:-translate-y-1 transition-all">
              Contact Engineering
            </Link>
            <Link to="/products" className="btn-corporate shadow-sm bg-white border border-black/10 text-brand-blue-dark text-sm py-3! px-8! hover:bg-gray-50 hover:-translate-y-1 transition-all">
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
    img: '/products/modelA.png',
    stat: '8,000+',
    statLabel: 'Deep Cycle Life',
  },
  {
    id: 'grid',
    label: 'Grid Stability',
    title: 'Grid Stability & Independence',
    desc: 'Stabilize voltage and frequency fluctuations while reducing reliance on unstable grid infrastructure. Autonomous energy reserves ensure operational continuity.',
    img: '/products/261Kwh BESS.96.png',
    stat: '<10ms',
    statLabel: 'Grid Switchover',
  },
  {
    id: 'scale',
    label: 'Scalability',
    title: 'Scalable & Future-Ready',
    desc: 'Modular architecture allows seamless expansion from kilowatt to megawatt scale. Millisecond-fast automatic transfer switching ensures zero downtime during scaling.',
    img: '/products/modelC.png',
    stat: '6.25 MWh',
    statLabel: 'Max Capacity',
  },
  {
    id: 'cost',
    label: 'Lower Costs',
    title: 'Lower Costs & Carbon Footprint',
    desc: 'Optimize energy usage with peak shaving and load shifting, dramatically cutting operational costs while reducing carbon emissions through stored renewable energy.',
    img: '/products/modelB.png',
    stat: '>94%',
    statLabel: 'Round-Trip Efficiency',
  },
];

function AdvantagesSection() {
  const [active, setActive] = useState(0);
  const tab = advantageTabs[active];

  return (
    <section className="py-16 sm:py-24 bg-[#070E1A] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue-dark/15 blur-[180px] rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 blur-[150px] rounded-full translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <Reveal animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-bold text-brand-blue-light/60 uppercase tracking-[0.2em] mb-2">Why BESS</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.08]">
                Intelligent, Powerful and<br />
                <span className="text-brand-blue-light">Built for India</span>
              </h2>
            </div>
            <Link to="/products" className="text-xs font-bold text-white/30 border border-white/10 rounded-full px-5 py-2.5 hover:text-white hover:border-white/30 transition-all whitespace-nowrap">
              View full specs <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </Link>
          </div>
        </Reveal>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[380px]">
          {/* Left — Product image */}
          <div className="relative flex items-center justify-center py-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,98,151,0.08)_0%,transparent_70%)]"></div>
            {/* Reflection surface */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <img
              key={tab.id}
              src={tab.img}
              alt={tab.title}
              className="max-h-72 sm:max-h-80 w-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-fadeIn"
            />
          </div>

          {/* Right — Tab content */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight">{tab.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed max-w-md">{tab.desc}</p>
            </div>

            {/* Stat highlight */}
            <div className="inline-flex items-baseline gap-3 bg-white/5 border border-white/8 rounded-xl px-5 py-3 mb-8">
              <span className="text-3xl font-extrabold text-brand-blue-light">{tab.stat}</span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{tab.statLabel}</span>
            </div>
          </div>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {advantageTabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                active === i
                  ? 'bg-white text-[#070E1A] border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                  : 'bg-transparent text-white/40 border-white/10 hover:text-white/70 hover:border-white/20'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
