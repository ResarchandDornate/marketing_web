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
      <section className="relative w-full overflow-hidden pt-32 pb-28 min-h-screen flex items-center bg-[#020B18]">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img src="/products/1001.jpeg" alt="" className="w-full h-full object-cover opacity-80 object-right" />
        </div>
        {/* Left side dark for text, right side shows image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B18] from-30% via-[#020B18]/60 via-50% to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020B18] via-transparent to-[#020B18]/40"></div>
        {/* Animated energy pulse rings */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px]">
          <div className="absolute inset-0 rounded-full border border-cyan-400/10 animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-8 rounded-full border border-cyan-400/8 animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          <div className="absolute inset-16 rounded-full border border-cyan-400/5 animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        </div>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-cyan-400/40 rounded-full top-[20%] left-[15%] animate-float" style={{ animationDuration: '6s' }}></div>
          <div className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full top-[40%] left-[70%] animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
          <div className="absolute w-1 h-1 bg-cyan-300/30 rounded-full top-[60%] left-[25%] animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
          <div className="absolute w-2 h-2 bg-blue-500/20 rounded-full top-[30%] left-[80%] animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
          <div className="absolute w-1 h-1 bg-cyan-400/25 rounded-full top-[75%] left-[60%] animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }}></div>
        </div>
        {/* Scanning line animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-scan-line"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <Reveal animation="fade-up" duration={800}>
             
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.08] tracking-tight mb-4">
                Solar peaks at noon <br /> Demands peaks at dusk
              </h1>
              <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                The gap between them is where Unity lives
              </p>
              <p className="text-sm text-white/50 mb-8 leading-relaxed max-w-lg">
                India's own BESS, built to deliver safe, sustainable and reliable energy.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-500/25"
                >
                  Start Building <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3 rounded-full font-bold text-sm hover:bg-white/15 backdrop-blur-sm transition-all"
                >
                  Explore UnityESS
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020B18] to-transparent"></div>
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
                  className="group bg-white rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-all duration-400 flex flex-col h-full border border-black/6"
                >
                  {/* Image */}
                  <div className="bg-[#f5f7fa] p-4 h-44 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1 border-t border-black/4">
                    <p className="text-[9px] font-semibold text-accent uppercase tracking-[0.12em] mb-1">{product.series}</p>
                    <h3 className="text-sm font-bold text-text-primary mb-0.5 group-hover:text-accent transition-colors">{product.name}</h3>
                    <p className="text-[11px] text-text-secondary mb-2.5 leading-relaxed line-clamp-2">{product.tagline}</p>

                    {/* Specs */}
                    <div className="flex gap-1.5 mb-3">
                      {product.highlights?.slice(0, 2).map((h) => (
                        <div key={h.label} className="flex-1 bg-[#f5f7fa] rounded-md px-2 py-1.5 text-center">
                          <p className="text-xs font-bold text-text-primary leading-tight">{h.value}</p>
                          <p className="text-[7px] font-semibold text-text-tertiary uppercase tracking-wider">{h.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto flex items-center justify-between text-xs font-semibold text-accent group-hover:text-white bg-accent/5 group-hover:bg-accent py-2 px-3 rounded-lg transition-all duration-300">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
              { icon: ShieldCheck, title: '3-Tiered BMS', subtitle: 'Advanced Battery Management Architecture', desc: 'Built with module-level, rack-level, and system-level protection to ensure real-time monitoring, thermal control, and fault isolation.', tag: 'Multi-Level Intelligence', img: '/products/pict1.jpeg' },
              { icon: Activity, title: '314Ah LFP Cells', subtitle: 'High-Reliability Battery Core', desc: 'Powered by premium 314Ah LFP cells engineered for long cycle life, enhanced thermal stability, and consistent output.', tag: 'Engineered for Longevity', img: '/products/pict2.jpeg' },
              { icon: Sun, title: 'Solar & Grid Ready', subtitle: 'Seamless Clean Energy Integration', desc: 'Integrate effortlessly with solar PV systems and grid infrastructure for reliable storage, peak shaving, and backup.', tag: 'Flexible Energy Deployment', img: '/products/pict3.jpeg' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up">
                <div className="group bg-white rounded-xl overflow-hidden border border-black/5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400 h-full">
                  {/* Image */}
                  <div className="h-52 bg-[#f0f3f7] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,98,151,0.04)_0%,transparent_70%)]"></div>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-md bg-accent/8 flex items-center justify-center">
                        <item.icon className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <h3 className="text-sm font-bold text-text-primary tracking-tight">{item.title}</h3>
                    </div>
                    <p className="text-[10px] font-semibold text-accent mb-1.5">{item.subtitle}</p>
                    <p className="text-[11px] text-text-secondary leading-relaxed mb-3">{item.desc}</p>
                    <div className="pt-2 border-t border-black/4">
                      <span className="text-[9px] font-bold text-accent/60 uppercase tracking-widest">{item.tag}</span>
                    </div>
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
    img: '/products/261Kwh BESS.96.png',
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
    img: '/products/modelC.png',
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
    img: '/products/modelB.png',
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
    <section className="py-16 sm:py-24 bg-[#070E1A] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-brand-blue-dark/12 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-accent/8 blur-[180px] rounded-full"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <Reveal animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-[11px] font-bold text-[#60a5fa]/50 uppercase tracking-[0.2em] mb-3">Why Energy Storage</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.08]">
                Intelligent, Powerful and<br />
                <span className="bg-gradient-to-r from-[#60a5fa] to-[#00b853] bg-clip-text text-transparent">Built for India</span>
              </h2>
            </div>
            <Link to="/products" className="text-xs font-bold text-white/30 border border-white/10 rounded-full px-5 py-2.5 hover:text-white hover:border-white/25 transition-all whitespace-nowrap self-start sm:self-auto">
              View full specs <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </Link>
          </div>
        </Reveal>

        {/* Tab pills — top */}
        <div className="flex flex-wrap gap-2 mb-10">
          {advantageTabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 border ${
                active === i
                  ? 'bg-white text-[#070E1A] border-white shadow-[0_0_25px_rgba(255,255,255,0.12)]'
                  : 'bg-white/[0.03] text-white/40 border-white/8 hover:text-white/70 hover:border-white/15 hover:bg-white/[0.05]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Main content card — compact */}
        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — Product image */}
            <div className="relative flex items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.06)_0%,transparent_60%)]"></div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
              <img
                key={tab.id}
                src={tab.img}
                alt={tab.title}
                className="max-h-48 sm:max-h-56 w-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-fadeIn"
              />
            </div>

            {/* Right — Content */}
            <div className="p-6 sm:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/[0.06]">
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight leading-tight">{tab.title}</h3>
              <p className="text-xs text-white/35 leading-relaxed mb-4">{tab.desc}</p>

              {/* Feature bullets */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                {tab.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#60a5fa] shrink-0"></div>
                    <span className="text-[11px] text-white/45 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex gap-2">
                {tab.stats.map((s) => (
                  <div key={s.label} className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-2 text-center">
                    <p className="text-base font-extrabold text-white leading-tight">{s.val}</p>
                    <p className="text-[8px] font-bold text-white/25 uppercase tracking-widest mt-0.5">{s.label}</p>
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
