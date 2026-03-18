import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, ChevronRight, BarChart3, Activity, Server, Building2, Battery, GridIcon, TrendingDown, Sun, Wifi, Plug, Home as HomeIcon, Factory, Store } from 'lucide-react';
import { products } from '../data/products';
import Reveal, { RevealItem } from '../components/Reveal';

const featuredIds = ['unity-infinity', 'model-a', 'unity-home', 'model-c'];
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

              <p className="text-xs sm:text-sm text-white/50 mb-6 leading-relaxed max-w-md">
                Industrial-grade energy nodes with millisecond response. AI-managed, built for absolute reliability.
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
            <h3 className="text-4xl font-extrabold text-brand-blue-dark tracking-tight">8,000+</h3>
            <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mt-1">Deep Cycle Life</p>
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
              We don't just build batteries; we forge intelligent energy nodes designed to scale effortlessly from commercial facilities to utility grids.
            </p>
          </Reveal>

          <Reveal stagger staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredModels.map((product) => (
              <RevealItem key={product.id} animation="fade-up">
                <Link
                  to={`/products/${product.id}`}
                  className="group bg-white rounded-2xl border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-black/10 transition-all duration-300 flex flex-col h-full ring-1 ring-transparent hover:ring-black/5"
                >
                  {/* Clean Image Container with subtle inner shadow */}
                  <div className="bg-[#f8f9fa] p-6 h-55 flex items-center justify-center relative shadow-[inset_0_-20px_20px_rgba(0,0,0,0.02)] border-b border-black/5">
                    <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/5 transition-colors duration-500"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out relative z-10 drop-shadow-xl"
                    />
                    {/* Subtle model badge */}
                    <div className="absolute top-4 left-4 border border-black/10 bg-white/50 backdrop-blur-sm text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded text-text-secondary">
                      Model
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1 bg-white">
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{product.series}</p>
                    <h3 className="text-base font-extrabold text-brand-blue-dark mb-1 group-hover:text-gray-700 transition-colors">{product.name}</h3>
                    <p className="text-xs text-text-secondary mb-1 font-medium leading-relaxed">{product.tagline}</p>
                    <p className="text-[11px] text-brand-blue-dark font-semibold mb-3">{product.specs?.capacity}</p>

                    {/* SaaS-style Action Link */}
                    <div className="mt-auto flex items-center text-[13px] font-bold text-brand-blue group-hover:text-gray-700 transition-colors bg-brand-blue/5 group-hover:bg-brand-green/10 py-2.5 px-4 rounded-lg w-full justify-between">
                      <span>Explore System</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
              { icon: ShieldCheck, title: 'Multi-Layer Safety', desc: 'Cell-level monitoring, thermal management, and automatic fault isolation.', stat: '6-Layer', statLabel: 'Protection' },
              { icon: Activity, title: 'Real-Time BMS', desc: 'AI-powered battery management with millisecond cell balancing and analytics.', stat: '<10ms', statLabel: 'Response' },
              { icon: BarChart3, title: 'Predictive Lifecycle', desc: 'ML models forecast degradation and optimize charging to extend lifespan.', stat: '+25%', statLabel: 'Lifespan' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up">
                <div className="group bg-[#f8f9fa] rounded-xl p-5 border border-black/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue-dark/8 flex items-center justify-center mb-3">
                    <item.icon className="w-4 h-4 text-brand-blue-dark" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-[11px] text-text-secondary leading-relaxed mb-3">{item.desc}</p>
                  <div className="pt-2 border-t border-black/5">
                    <span className="text-lg font-extrabold text-brand-blue-dark">{item.stat}</span>
                    <p className="text-[9px] text-text-tertiary font-semibold uppercase tracking-wider mt-0.5">{item.statLabel}</p>
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
                  Currently operating at <span className="font-bold text-brand-blue-dark">6.5 GWh</span> annual capacity, UnityESS is building a fully automated giga-scale facility in Dubai.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[
                    { val: '6.5 GWh', label: 'Annual Production Capacity' },

                  ].map((s) => (
                    <div key={s.label} className="bg-bg-deep rounded-lg px-3 py-1.5 border border-border">
                      <p className="text-xl font-extrabold text-brand-blue-dark">{s.val}</p>
                      <p className="text-[9px] font-bold text-text-tertiary uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-text-tertiary leading-relaxed">
                  Strategically located 100 km from Delhi in Ghiloth — one of the world's busiest ports — ensuring seamless global logistics.
                </p>
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

      {/* 6. ADVANTAGES OF ENERGY STORAGE */}
      <section className="py-14 sm:py-20 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-700 tracking-tighter leading-[1.1] mb-3">
              Advantages of Energy <span className="text-brand-blue-dark">Storage System</span>
            </h2>
          </Reveal>
          <Reveal stagger staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Battery, title: 'Reliable Backup Power', desc: 'Ensure uninterrupted power supply during grid outages with instant switchover and deep cycle reserves.' },
              { icon: GridIcon, title: 'Grid Stability', desc: 'Stabilize voltage and frequency fluctuations, providing ancillary services that strengthen the entire grid.' },
              { icon: Server, title: 'Scalablity', desc: 'Modular architecture allows seamless expansion from kilowatt to megawatt scale as your needs grow.' },
              { icon: TrendingDown, title: 'Reduced Electricity Bills', desc: 'Optimize energy usage with peak shaving and load shifting to dramatically cut operational costs.' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up">
                <div className="group bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/10 group-hover:border-brand-green/20 transition-colors">
                    <item.icon className="w-5 h-5 text-brand-blue-dark group-hover:text-gray-700 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-brand-blue-dark mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 7. WHY CHOOSE ENERGY STORAGE */}
      <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-brand-green/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-700 tracking-tighter leading-[1.1] mb-3">
              Why Choose Energy <span className="text-brand-blue-dark">Storage Solution?</span>
            </h2>
          </Reveal>
          <Reveal stagger staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Sun, title: 'Capture Surplus Solar Energy', desc: 'Store excess solar generation during peak production hours and deploy it when the sun goes down, maximizing your renewable investment.' },
              { icon: Wifi, title: 'Reduce Grid Dependency', desc: 'Minimize reliance on unstable grid infrastructure and reduce operational downtime with autonomous energy reserves.' },
              { icon: TrendingDown, title: 'Lower Carbon Footprint', desc: 'Decrease carbon emissions and electricity expenses by shifting to stored renewable energy during high-demand periods.' },
              { icon: Plug, title: 'Seamless Power Availability', desc: 'Ensure continuous, uninterrupted power availability during outages with millisecond-fast automatic transfer switching.' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up">
                <div className="group flex gap-4 bg-[#fafafa] rounded-2xl p-5 border border-black/5 hover:bg-white hover:shadow-md hover:border-brand-green/15 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/15 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:border-brand-green transition-all">
                    <item.icon className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-blue-dark mb-1.5 tracking-tight">{item.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 9. BESS APPLICATIONS */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-700 tracking-tighter leading-[1.1] mb-3">
              BESS <span className="text-brand-blue-dark">Applications</span>
            </h2>
          </Reveal>
          <Reveal stagger staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Battery, title: 'Large Pack Battery Assembly', desc: 'High-capacity pack assembly for utility and industrial-scale deployments.', img: '/products/261Kwh BESS.96.png' },
              { icon: Factory, title: 'Industrial Outdoor Cabinet', desc: 'Ruggedized outdoor enclosures engineered for harsh environments and remote installations.', img: '/products/modelC.png' },
              { icon: Store, title: 'Commercial Grid Project', desc: 'Grid-tied commercial energy storage for peak management and demand response programs.', img: '/products/modelA.png' },
              { icon: HomeIcon, title: 'Residential Home Storage', desc: 'Compact residential solutions for energy independence and backup power.', img: '/products/Unity-infinity.png' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up">
                <Link to="/products" className="group bg-[#fafafa] rounded-2xl overflow-hidden border border-black/5 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block h-full">
                  <div className="p-4 h-40 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/5 transition-colors duration-500 rounded-t-2xl"></div>
                    <img src={item.img} alt={item.title} className="max-h-32 w-auto object-contain relative z-10 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="px-5 pb-5 text-center">
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
