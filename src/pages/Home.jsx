import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, ChevronRight, BarChart3, Activity, Server, Cpu, Building2, Battery, GridIcon, TrendingDown, Sun, Wifi, Plug, Home as HomeIcon, Factory, Store } from 'lucide-react';
import { products } from '../data/products';

const featuredModels = products.filter(p => ['model-a', 'model-b', 'model-c', 'unity-home'].includes(p.id));

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden selection:bg-brand-green selection:text-white">

      {/* 1. DARK HERO */}
      <section className="relative w-full overflow-hidden bg-[#000000] pt-28 pb-10">
        {/* Radial glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-green/15 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[120px] mix-blend-screen"></div>

        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)]" style={{ backgroundSize: '28px 28px' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          {/* Text — compact centered */}
          <div className="text-center max-w-xl mx-auto animate-fadeInUp mb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 hover:bg-white/10 transition-colors cursor-pointer group">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green"></span>
              </span>
              <span className="text-[11px] font-semibold text-white/80 tracking-wide">UnityOS 3.0 is now available</span>
              <ArrowRight className="w-2.5 h-2.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] tracking-tight mb-3">
              Energy storage, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-green to-brand-blue-light">perfected.</span>
            </h1>

            <p className="text-xs sm:text-sm text-white/50 mb-6 leading-relaxed max-w-md mx-auto">
              Industrial-grade energy nodes with millisecond response. AI-managed, built for absolute reliability.
            </p>

            <div className="flex flex-wrap gap-2.5 justify-center">
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
          </div>

          {/* Product lineup — tight showcase row */}
          <div className="relative flex items-end justify-center gap-3 sm:gap-5 lg:gap-8 animate-fadeIn max-w-3xl mx-auto">
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-brand-green/6 blur-[60px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. LOGOS / METRICS STRIP */}
      <section className="border-b border-black/5 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-extrabold text-brand-blue-dark tracking-tight">99.99%</h3>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-1">Guaranteed Uptime</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-black/10"></div>
          <div>
            <h3 className="text-2xl font-extrabold text-brand-blue-dark tracking-tight">&lt;10ms</h3>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-1">Grid Switchover</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-black/10"></div>
          <div>
            <h3 className="text-2xl font-extrabold text-brand-blue-dark tracking-tight">8,000+</h3>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-1">Deep Cycle Life</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-black/10"></div>
          <div>
            <h3 className="text-2xl font-extrabold text-brand-blue-dark tracking-tight">Tier 1</h3>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mt-1">Global Safety Rating</p>
          </div>
        </div>
      </section>

      {/* 3. HARDWARE COLLECTION GRID */}
      <section className="py-14 sm:py-20 bg-white text-brand-blue-dark relative z-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter leading-[1.1] mb-3">
              Industrial-grade hardware.<br />
              <span className="text-brand-green">Architecturally refined.</span>
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              We don't just build batteries; we forge intelligent energy nodes designed to scale effortlessly from commercial facilities to utility grids.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredModels.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-2xl border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-black/10 transition-all duration-300 flex flex-col h-full ring-1 ring-transparent hover:ring-black/5"
              >
                {/* Clean Image Container with subtle inner shadow */}
                <div className="bg-[#f8f9fa] p-6 h-[220px] flex items-center justify-center relative shadow-[inset_0_-20px_20px_rgba(0,0,0,0.02)] border-b border-black/5">
                  <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/5 transition-colors duration-500"></div>
                  
                  {/* Subtle model badge */}
                  <div className="absolute top-4 left-4 border border-black/10 bg-white/50 backdrop-blur-sm text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded text-text-secondary">
                    Model
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 bg-white">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{product.series}</p>
                  <h3 className="text-base font-extrabold text-brand-blue-dark mb-1 group-hover:text-brand-green transition-colors">{product.name}</h3>
                  <p className="text-xs text-text-secondary mb-1 font-medium leading-relaxed">{product.tagline}</p>
                  <p className="text-[11px] text-brand-blue-dark font-semibold mb-3">{product.specs?.capacity}</p>

                  {/* SaaS-style Action Link */}
                  <div className="mt-auto flex items-center text-[13px] font-bold text-brand-blue group-hover:text-brand-green transition-colors bg-brand-blue/5 group-hover:bg-brand-green/10 py-2.5 px-4 rounded-lg w-full justify-between">
                    <span>Explore System</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 text-[15px] font-bold text-text-secondary hover:text-brand-blue-dark transition-colors px-6 py-3 rounded-full border border-black/10 hover:bg-gray-50 hover:shadow-sm">
              View Entire Hardware Lineup <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. INTELLIGENT TECHNOLOGY */}
      <section className="py-8 sm:py-10 bg-[#062b50] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]" style={{ backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-[-150px] right-[-80px] w-[400px] h-[400px] bg-brand-green/8 rounded-full blur-[120px]"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-brand-green/25 bg-brand-green/8 text-brand-green font-bold text-[10px] uppercase tracking-widest mb-3">
              <Cpu className="w-3 h-3" /> Intelligent Technology
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-[1.15] mb-2">
              Built with <span className="text-brand-green">intelligence</span> at every layer.
            </h2>
            <p className="text-xs text-white/55 leading-relaxed">
              Advanced hardware engineering with AI-powered software for unmatched performance, safety, and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            {[
              { icon: ShieldCheck, title: 'Multi-Layer Safety', desc: 'Cell-level monitoring, thermal management, and automatic fault isolation.', stat: '6-Layer', statLabel: 'Protection' },
              { icon: Activity, title: 'Real-Time BMS', desc: 'AI-powered battery management with millisecond cell balancing and analytics.', stat: '<10ms', statLabel: 'Response' },
              { icon: BarChart3, title: 'Predictive Lifecycle', desc: 'ML models forecast degradation and optimize charging to extend lifespan.', stat: '+25%', statLabel: 'Lifespan' },
            ].map((item) => (
              <div key={item.title} className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/8 hover:bg-white/8 hover:border-brand-green/25 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-brand-green to-brand-blue-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="w-8 h-8 rounded-lg bg-brand-green/10 border border-brand-green/15 flex items-center justify-center mb-3">
                  <item.icon className="w-4 h-4 text-brand-green" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 tracking-tight">{item.title}</h3>
                <p className="text-[11px] text-white/45 leading-relaxed mb-3">{item.desc}</p>
                <div className="pt-2 border-t border-white/8">
                  <span className="text-base font-extrabold text-brand-green">{item.stat}</span>
                  <p className="text-[9px] text-white/35 font-semibold uppercase tracking-wider mt-0.5">{item.statLabel}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-green/8 rounded-xl p-4 sm:p-5 border border-brand-green/15 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">See how UnityOS powers every system.</h3>
              <p className="text-xs text-white/50">Explore our process from design to deployment.</p>
            </div>
            <Link to="/process" className="whitespace-nowrap bg-brand-green text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-brand-green-hover transition-colors shadow-[0_4px_15px_rgba(0,184,83,0.25)]">
              How It Works <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. UPCOMING MANUFACTURING FACILITY */}
      <section className="py-4 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-brand-blue/15 bg-brand-blue/5 text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-3">
                <Building2 className="w-3 h-3" /> Expanding Capacity
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-brand-blue-dark tracking-tight leading-[1.15] mb-2">
                Upcoming UnityESS <span className="text-brand-green">Manufacturing Facility</span>
              </h2>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">
                Currently operating at <span className="font-bold text-brand-blue-dark">1.2 GWh</span> annual capacity, UnityESS is building a fully automated giga-scale facility in Dubai.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {[
                  { val: '5 GWh', label: 'Cell-to-Pack' },
                  { val: '3.5 GWh', label: 'Pack-to-Container' },
                  { val: 'Q3 2026', label: 'Completion' },
                ].map((s) => (
                  <div key={s.label} className="bg-bg-deep rounded-lg px-3 py-1.5 border border-border">
                    <p className="text-xs font-extrabold text-brand-blue-dark">{s.val}</p>
                    <p className="text-[9px] font-bold text-text-tertiary uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-text-tertiary leading-relaxed">
                Strategically located 180 km from Jebel Ali — one of the world's busiest ports — ensuring seamless global logistics.
              </p>
            </div>
            {/* Right — image */}
            <div className="rounded-xl overflow-hidden border border-border max-w-[300px] mx-auto lg:ml-auto">
              
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADVANTAGES OF ENERGY STORAGE */}
      <section className="py-14 sm:py-20 bg-[#fafafa] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue-dark tracking-tighter leading-[1.1] mb-3">
              Advantages of Energy <span className="text-brand-green">Storage Solution</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Battery, title: 'Reliable Backup Power', desc: 'Ensure uninterrupted power supply during grid outages with instant switchover and deep cycle reserves.' },
              { icon: GridIcon, title: 'Grid Stability', desc: 'Stabilize voltage and frequency fluctuations, providing ancillary services that strengthen the entire grid.' },
              { icon: Server, title: 'Scalable Storage', desc: 'Modular architecture allows seamless expansion from kilowatt to megawatt scale as your needs grow.' },
              { icon: TrendingDown, title: 'Reduced Electricity Bills', desc: 'Optimize energy usage with peak shaving and load shifting to dramatically cut operational costs.' },
            ].map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/10 group-hover:border-brand-green/20 transition-colors">
                  <item.icon className="w-5 h-5 text-brand-blue-dark group-hover:text-brand-green transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-brand-blue-dark mb-2 tracking-tight">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE ENERGY STORAGE */}
      <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue-dark tracking-tighter leading-[1.1] mb-3">
              Why Choose Energy <span className="text-brand-green">Storage Solution?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {[
              { icon: Sun, title: 'Capture Surplus Solar Energy', desc: 'Store excess solar generation during peak production hours and deploy it when the sun goes down, maximizing your renewable investment.' },
              { icon: Wifi, title: 'Reduce Grid Dependency', desc: 'Minimize reliance on unstable grid infrastructure and reduce operational downtime with autonomous energy reserves.' },
              { icon: TrendingDown, title: 'Lower Carbon Footprint', desc: 'Decrease carbon emissions and electricity expenses by shifting to stored renewable energy during high-demand periods.' },
              { icon: Plug, title: 'Seamless Power Availability', desc: 'Ensure continuous, uninterrupted power availability during outages with millisecond-fast automatic transfer switching.' },
            ].map((item) => (
              <div key={item.title} className="group flex gap-4 bg-[#fafafa] rounded-2xl p-5 border border-black/5 hover:bg-white hover:shadow-md hover:border-brand-green/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/15 flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:border-brand-green transition-all">
                  <item.icon className="w-4 h-4 text-brand-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-blue-dark mb-1.5 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BESS APPLICATIONS */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue-dark tracking-tighter leading-[1.1] mb-3">
              BESS <span className="text-brand-green">Applications</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Battery, title: 'Large Pack Battery Assembly', desc: 'High-capacity pack assembly for utility and industrial-scale deployments.', img: '/products/261Kwh BESS.96.png' },
              { icon: Factory, title: 'Industrial Outdoor Cabinet', desc: 'Ruggedized outdoor enclosures engineered for harsh environments and remote installations.', img: '/products/modelC.png' },
              { icon: Store, title: 'Commercial Grid Project', desc: 'Grid-tied commercial energy storage for peak management and demand response programs.', img: '/products/modelA.png' },
              { icon: HomeIcon, title: 'Residential Home Storage', desc: 'Compact residential solutions for energy independence and backup power.', img: '/products/Unity-infinity.png' },
            ].map((item) => (
              <Link key={item.title} to="/products" className="group bg-[#fafafa] rounded-2xl overflow-hidden border border-black/5 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block">
                <div className="p-4 h-40 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/5 transition-colors duration-500 rounded-t-2xl"></div>
                  
                </div>
                <div className="px-5 pb-5 text-center">
                  <h3 className="text-sm font-bold text-brand-blue-dark mb-1.5 group-hover:text-brand-green transition-colors">{item.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ULTIMATE CTA */}
      <section className="py-16 bg-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-green/5 blur-[80px] rounded-full -z-10"></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue-dark tracking-tighter mb-3 leading-[1.1]">
            Start building with <span className="text-brand-green">UnityESS.</span>
          </h2>
          <p className="text-sm text-text-secondary font-medium mb-8 max-w-xl mx-auto">
            Speak with our engineering team to architect a solution for your specific load profile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/contact" className="btn-corporate btn-corp-green text-sm !py-3 !px-8 shadow-[0_10px_30px_rgba(0,184,83,0.2)] hover:shadow-[0_15px_40px_rgba(0,184,83,0.3)] hover:-translate-y-1 transition-all">
              Contact Engineering
            </Link>
            <Link to="/products" className="btn-corporate shadow-sm bg-white border border-black/10 text-brand-blue-dark text-sm !py-3 !px-8 hover:bg-gray-50 hover:-translate-y-1 transition-all">
              View Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
