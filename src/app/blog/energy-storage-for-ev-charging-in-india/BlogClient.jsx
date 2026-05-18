"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Send } from 'lucide-react';

export default function BlogClient() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://backoffice-prod.ornatesolar.com/api/";
      const response = await fetch(`${apiUrl}leads/website-lead/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          website_url: "unityess.ai",
          lead_type: "Unityess",
        }),
      });
      const data = await response.json();
      if (data.success) {
        setFormData({ name: '', phone: '', email: '', message: '' });
        setStatus({ type: 'success', message: 'Submitted successfully!' });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
      } else {
        setStatus({ type: 'error', message: 'Submission failed. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="max-w-271 mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <article className="lg:w-2/3 text-[15px] text-[#333] leading-[1.8]">
          {/* Banner - Desktop */}
          <img
            src="/blog/energy-storage-for-ev-charging-in-india-hero.webp"
            alt="Energy Storage for EV Charging in India - UnityESS BESS Solution Powering Electric Vehicle Fast Charging Stations and Reducing Grid Dependency"
            width="900"
            height="300"
            loading="eager"
            fetchPriority="high"
            className="hidden md:block w-full h-57.5 rounded-lg mb-6 object-cover"
          />
          {/* Banner - Mobile */}
          <img
            src="/blog/energy-storage-for-ev-charging-in-india-mobile.webp?v=2"
            alt="Energy Storage for EV Charging in India - UnityESS Battery Energy Storage System Powering Scalable EV Fast Charging Infrastructure"
            loading="eager"
            fetchPriority="high"
            className="md:hidden w-full rounded-lg mb-6 object-cover"
          />

          <header>
            <h1 className="text-[22px] md:text-[28px] font-bold text-[#191919] leading-tight mb-2">
              Powering the Future of EV Charging Stations in India with UnityESS
            </h1>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-5">
              <time dateTime="2026-05-18">May 18, 2026</time>
              <span>•</span>
              <span>By UnityESS Team</span>
            </div>
          </header>

          <p className="mb-4">
            India&apos;s electric mobility transition is accelerating, but the biggest barrier to scalable EV charging infrastructure is not charger availability but power delivery efficiency and grid limitations.
          </p>
          <p className="mb-4">
            Most EV charging stations, especially fast charging hubs, face a <strong>structural constraint</strong>. The electrical grid cannot consistently support sudden high load charging demand without expensive upgrades or stability risks.
          </p>
          <p className="mb-4">
            This is where energy storage for EV charging in India is becoming a critical infrastructure layer. Instead of relying only on real time grid supply, charging stations are now integrating <Link href="/" className="text-accent font-bold hover:underline">Battery Energy Storage Systems</Link> to store energy and deploy it dynamically based on demand.
          </p>
          <p className="mb-6">
            <Link href="/" className="text-accent font-bold hover:underline">UnityESS</Link> is designed for this shift, offering scalable intelligent energy storage systems that enable reliable cost efficient and high-performance<strong>  EV charging infrastructure</strong> across India.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">The Core Challenge in EV Charging Infrastructure</h2>
          <p className="mb-4">
            At a surface level, EV charging appears simple. Install chargers, connect grid power, and operate. However, real world deployment quickly reveals structural limitations that directly affect scalability and profitability.
          </p>
          <p className="mb-3">Charging stations face three recurring challenges:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>High peak demand charges that increase operating costs significantly</li>
            <li>Limited support for multiple fast chargers operating simultaneously</li>
            <li>Grid instability in high demand or semi urban locations</li>
          </ul>
          <p className="mb-4">
            These challenges are amplified in fast charging networks where power demand spikes sharply over short durations. Without energy buffering, every charging session directly impacts the grid, making expansion both expensive and complex.
          </p>
          <p className="mb-6">
            This is why energy storage for EV charging in India is no longer an optional enhancement but a <strong>core infrastructure requirement</strong>.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">How Energy Storage Redefines EV Charging Networks</h2>
          <p className="mb-4">
            <a href="https://ornatesolar.com/unity-ess" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Energy storage system</a> transforms how EV charging stations interact with the grid. Instead of <strong>drawing high power instantly during peak charging</strong>, energy is stored in advance and deployed dynamically based on demand conditions.
          </p>
          <p className="mb-4">
            This creates a <strong>more controlled and predictable energy system</strong> where charging demand is decoupled from real time grid limitations.
          </p>
          <p className="mb-3">In practical terms, the system works in a structured cycle:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>Energy is stored during low demand or lower tariff periods</li>
            <li>Energy is discharged during peak EV charging activity</li>
            <li>Grid stress is reduced while station output remains stable</li>
          </ul>
          <p className="mb-6">
            This model is particularly important for India, where EV adoption is accelerating faster than grid expansion timelines.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">How UnityESS Enables Scalable Charging Infrastructure</h2>
          <p className="mb-4">
            <Link href="/" className="text-accent font-bold hover:underline">UnityESS</Link> is built as a commercial grade energy storage platform designed specifically for high load environments like EV charging stations. It focuses on continuous optimization rather than simple backup power.
          </p>
          <p className="mb-3">The system delivers value through three core capabilities:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><strong>Peak demand optimization</strong> where stored energy reduces grid dependency during high load periods, directly lowering electricity costs.</li>
            <li><strong>Fast charging enablement</strong> where high power DC chargers can operate without requiring immediate grid upgrades, accelerating infrastructure deployment.</li>
            <li><strong>Load balancing intelligence</strong> where energy flow is dynamically distributed between grid input, storage, and charging demand for maximum efficiency.</li>
          </ol>
          <p className="mb-6">
            Together, these capabilities allow operators to design charging stations that are not restricted by local grid capacity.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Key Applications of UnityESS in EV Charging Ecosystem</h2>
          <p className="mb-4">
            The role of <strong>energy storage for EV charging in India</strong> varies depending on deployment type, and UnityESS is designed to support multiple infrastructure models.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              In highway EV charging stations, the requirement is uninterrupted high-power availability. UnityESS ensures multiple fast chargers can operate simultaneously without dependency on grid expansion along highway corridors.
            </li>
            <li>
              In urban commercial EV charging stations, cost efficiency becomes the priority. Energy storage helps reduce peak electricity tariffs while optimizing limited installation space in malls, parking hubs, and business districts.
            </li>
            <li>
              In fleet charging depots, predictability is essential. UnityESS supports scheduled charging cycles for electric buses and logistics fleets, enabling operators to manage energy costs more effectively across large vehicle volumes.
            </li>
            <li>
              In renewable integrated EV charging stations, particularly solar supported systems, UnityESS stores excess generated energy and deploys it during peak demand periods, improving both sustainability and cost efficiency.
            </li>
          </ul>

          {/* CTA */}
          <div className="bg-[rgb(58,88,129)] rounded-lg p-6 text-center mb-8">
            <p className="text-white font-bold text-[16px] mb-3">Planning an EV charging station in India?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[rgb(58,88,129)] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition">
              Talk to Our EV Charging Experts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Commercial Advantages for Charging Operators</h2>
          <p className="mb-4">
            From a business perspective, EV charging infrastructure is ultimately a margin driven model where profitability depends on controlling energy cost and maximizing utilization.
          </p>
          <p className="mb-3">UnityESS supports operators in improving commercial performance through:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>Reduction in peak demand charges and operational electricity costs</li>
            <li>Improved charger uptime and utilization rates</li>
            <li>Reduced dependency on expensive grid upgrades</li>
            <li>Faster deployment of high-capacity charging stations</li>
            <li>Better long-term return on infrastructure investment</li>
          </ul>
          <p className="mb-6">
            These advantages directly improve revenue per charging location and enable faster scaling of charging networks in competitive markets.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">The Future of EV Charging in India</h2>
          <p className="mb-4">
            India is moving toward a hybrid energy infrastructure model where grid power, energy storage, and renewable energy systems work together. In this structure, the grid provides baseline supply, energy storage manages demand fluctuations, and renewable energy supports long term sustainability goals.
          </p>
          <p className="mb-4">
            Within this evolving model, <strong>energy storage for EV charging in India</strong> becomes the central scaling layer that enables infrastructure expansion without proportional grid dependency.
          </p>
          <p className="mb-4">
            UnityESS is aligned with this transition by offering modular, intelligent storage systems designed for real world operating conditions where demand variability and infrastructure limitations coexist.
          </p>
          <p className="mb-6">
            <strong>Also Read:</strong>{' '}
            <Link href="/blog/bess-in-india-renewable-energy-growth" className="text-accent font-bold hover:underline">
              Why BESS Is No Longer Optional for India&apos;s Renewable Energy Growth
            </Link>
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Conclusion</h2>
          <p className="mb-4">
            The evolution of <strong>EV charging infrastructure in India</strong> is no longer defined only by the number of charging stations being deployed, but by the intelligence and efficiency of the energy systems powering them.
          </p>
          <p className="mb-4">
            Without energy storage, charging networks face rising <strong>operational costs, grid dependency constraints, and limited scalability </strong>. With energy storage for EV charging in India, operators gain control over cost structure, energy flow, and infrastructure expansion.
          </p>
          <p className="mb-4">
            UnityESS enables this transition through intelligent, scalable, and commercially optimized energy storage solutions designed specifically for EV charging applications.
          </p>
          <p className="mb-6">
            The future of EV charging stations in India will be shaped not just by charging hardware, but by the energy intelligence systems that make large scale deployment viable.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">About UnityESS</h2>
          <p className="mb-3">
            <Link href="/" className="text-accent font-bold hover:underline">UnityESS</Link> is a next generation energy storage system in India, developed by <a href="https://ornatesolar.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Ornate Solar</a> in collaboration with Inverted Energy. It is designed to deliver reliable, intelligent, and scalable energy storage solutions for modern power needs.
          </p>
          <p className="mb-3">
            By combining solar expertise with advanced battery technology, UnityESS provides a complete solution that ensures energy reliability, cost optimization, and energy independence.
          </p>
          <p className="mb-3">
            From commercial and industrial applications to utility scale and residential use, UnityESS enables smarter energy usage through intelligent management and robust design.
          </p>
          <p>
            If you are looking for reliable energy storage solution, call us at{' '}
            <a href="tel:18002026252" className="text-accent font-semibold hover:underline">1800 2026 252</a>{' '}
            to discuss your options.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-6 lg:sticky lg:top-28 self-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-border">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-8 h-8 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center">
                <Send className="w-3.5 h-3.5 text-accent" />
              </div>
              <h3 className="text-[15px] font-bold text-text-primary">Get a Free Quote</h3>
            </div>
            <p className="text-xs text-text-tertiary mb-4 ml-10.5">Talk to our energy experts</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-text-primary mb-1 block">Name <span className="text-red-500">*</span></label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-3.5 py-2 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
              </div>
              <div>
                <label className="text-xs font-semibold text-text-primary mb-1 block">Phone <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-3.5 py-2 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
              </div>
              <div>
                <label className="text-xs font-semibold text-text-primary mb-1 block">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-3.5 py-2 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
              </div>
              <div>
                <label className="text-xs font-semibold text-text-primary mb-1 block">Requirement</label>
                <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Tell us about your needs..." className="w-full bg-[#f5f7fa] border border-border rounded-xl px-3.5 py-2 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary resize-none" />
              </div>
              <button type="submit" disabled={loading} className="btn-pill btn-unity w-full text-sm">
                {loading ? 'Sending...' : 'Submit'} {!loading && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
              {status.message && (
                <p className={`text-xs font-semibold text-center py-2 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* Sidebar Images */}
          <div className="space-y-5 mt-6 mb-4">
            <Link href="/blog/bess-in-india-renewable-energy-growth" className="block transition-transform hover:scale-[1.02]">
              <img src="/blog/bess-in-india-renewable-energy-growth-card.webp" alt="BESS in India for Renewable Energy Growth" className="w-full rounded-lg shadow-sm border border-gray-100" />
            </Link>
            <Link href="/products/model-c" className="block transition-transform hover:scale-[1.02]">
              <img src="/blog/renewable-energy-solutions-at-twilight.webp" alt="UnityESS Model C Utility Scale BESS for EV Charging Infrastructure" className="w-full rounded-lg shadow-sm border border-gray-100" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
