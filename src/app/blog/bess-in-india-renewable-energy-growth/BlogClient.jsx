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
            src="/blog/bess-in-india-renewable-energy-growth-hero.webp"
            alt="BESS in India - Battery Energy Storage Systems for Solving Solar Curtailment and Grid Stability in Rajasthan and India by UnityESS"
            width="900"
            height="300"
            loading="eager"
            fetchPriority="high"
            className="hidden md:block w-full h-57.5 rounded-lg mb-6 object-cover"
          />
          {/* Banner - Mobile */}
          <img
            src="/blog/bess-in-india-renewable-energy-growth-mobile.webp"
            alt="BESS in India - Battery Energy Storage Systems for Solving Solar Curtailment and Grid Stability in Rajasthan and India by UnityESS"
            loading="eager"
            fetchPriority="high"
            className="md:hidden w-full rounded-lg mb-6 object-cover"
          />

          <header>
            <h1 className="text-[22px] md:text-[28px] font-bold text-[#191919] leading-tight mb-2">
              Why BESS Is No Longer Optional for India&apos;s Renewable Energy Growth
            </h1>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-5">
              <time dateTime="2026-04-20">April 20, 2026</time>
              <span>•</span>
              <span>By UnityESS Team</span>
            </div>
          </header>

          <p className="mb-4">
            Rajasthan has long been India&apos;s renewable powerhouse, driven by large scale solar installations across regions like Bhadla Solar Park and Jaisalmer. However, in 2026, the challenge is no longer about adding capacity, it is about effectively integrating that capacity into the grid.
          </p>
          <p className="mb-4">
            This is where <strong>bess in india</strong> is becoming increasingly critical, not just for the state, but as a model for India.
          </p>
          <p className="mb-6">
            BESS in Rajasthan is no longer optional, it is a blueprint for why storage is essential for India&apos;s renewable energy future.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Rajasthan&apos;s Curtailment Crisis: A Warning Signal</h2>
          <p className="mb-3">
            Between January and March 2026, renewable energy curtailment in Rajasthan reached a staggering <strong>11.5 GW cumulatively</strong>. What&apos;s more alarming is how sharply the situation escalated:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li><strong>Jan&ndash;Feb 2026:</strong> ~3.2 GW curtailed</li>
            <li><strong>March 2026 alone:</strong> 8.3 GW curtailed</li>
            <li><strong>Peak solar hours (10:30 AM &ndash; 2:30 PM):</strong> Curtailment reached 30% to 80%</li>
          </ul>
          <p className="mb-4">
            This directly impacted nearly <strong>34 GW of operational solar capacity</strong>, leaving developers unable to dispatch power during peak generation windows.
          </p>
          <p className="mb-4">
            Even more concerning, certain projects reportedly faced near 100% curtailment during midday under T-GNA provisions, especially in March 2026.
          </p>
          <p className="mb-4 font-semibold text-[#191919]">
            This is not a generation problem. It&apos;s a grid flexibility problem.
          </p>

          <figure className="my-6">
            <a
              href="/blog/rajasthan-renewable-curtailment-data-march-2026.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="Open full-size curtailment data table"
            >
              <img
                src="/blog/rajasthan-renewable-curtailment-data-march-2026.webp"
                alt="BESS in India - Rajasthan Renewable Energy Curtailment Data Table for March 2026 Showing Daily Solar and Wind Generation vs Curtailment in MW by UnityESS"
                loading="lazy"
                decoding="async"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-md border border-gray-200 group-hover:shadow-lg transition-shadow"
              />
            </a>
            <figcaption className="text-xs text-gray-500 text-center mt-2 italic">
              Rajasthan Renewable Energy (RE) Curtailment in March 2026 &mdash; Solar and Wind data &middot; Click image to view full size
            </figcaption>
          </figure>

          <p className="mb-4">
            This is not a Rajasthan only issue, it is an early indicator of what other renewable heavy states in India will face.
          </p>
          <p className="mb-6">
            States like Gujarat, Tamil Nadu, and Karnataka are already moving in the same direction in terms of renewable penetration.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">What&apos;s Causing This Massive Curtailment?</h2>
          <p className="mb-4">The current situation is the result of multiple overlapping constraints:</p>

          <h3 className="text-[17px] font-bold text-[#191919] mb-2 mt-6">1. Transmission Congestion</h3>
          <p className="mb-3">Despite the commissioning of high-capacity corridors, evacuation infrastructure is under pressure:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>Grid planners have flagged <strong>~60 GW</strong> of renewable connectivity facing structural constraints</li>
            <li>Even recently commissioned lines are operating near saturation during peak hours</li>
          </ul>
          <p className="mb-6">This reflects a lag between generation growth and transmission readiness.</p>

          <h3 className="text-[17px] font-bold text-[#191919] mb-2 mt-6">2. Demand-Supply Timing Mismatch</h3>
          <p className="mb-3">Solar generation in Rajasthan peaks sharply during midday, while demand typically rises in the evening.</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li><strong>Peak solar output:</strong> late morning to early afternoon</li>
            <li><strong>Peak demand:</strong> evening hours</li>
          </ul>
          <p className="mb-6">This mismatch results in excess daytime generation, which the grid is unable to absorb.</p>

          <h3 className="text-[17px] font-bold text-[#191919] mb-2 mt-6">3. Thermal Generation Inflexibility</h3>
          <p className="mb-3">Coal-based plants continue to operate due to technical and contractual constraints:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li><strong>Minimum stable load:</strong> ~55&ndash;70%</li>
            <li>Limited ramp-down capability</li>
          </ul>
          <p className="mb-6">As a result, even though renewable energy has &ldquo;must-run&rdquo; status, thermal generation is not reduced proportionately, leading to renewable curtailment.</p>

          <h3 className="text-[17px] font-bold text-[#191919] mb-2 mt-6">4. Grid Stability and Voltage Issues</h3>
          <p className="mb-3">High solar injection during low demand periods contributes to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>Voltage rise</li>
            <li>Reactive power imbalances</li>
            <li>Frequency management challenges</li>
          </ul>
          <p className="mb-6">To maintain grid stability, operators are forced to limit renewable dispatch.</p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Economic Impact: Curtailment Is Now a Financial Risk</h2>
          <p className="mb-3">Curtailment is directly affecting project economics:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>Estimated losses exceed <strong>&#8377;250 crore</strong> for ~4 GW curtailed capacity since March 2025</li>
            <li>Reduced revenue realization during peak generation hours</li>
            <li>Increased debt servicing pressure, particularly for smaller developers</li>
          </ul>
          <p className="mb-3">Industry stakeholders have warned that continued curtailment could:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1.5">
            <li>Delay future investments</li>
            <li>Increase financing costs</li>
            <li>Slow progress toward India&apos;s 500 GW renewable energy target</li>
          </ul>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Rajasthan&apos;s Shift Toward Storage Integration</h2>
          <p className="mb-4">Recognizing the urgency, the deployment of BESS in Rajasthan is accelerating.</p>
          <p className="font-semibold text-[#191919] mb-2">Key Developments:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li><strong>Target:</strong> ~6,000 MWh BESS capacity by September 2026</li>
            <li><strong>Draft regulatory framework (2025):</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1.5">
                <li>Storage requirement for high-capacity captive renewable projects</li>
                <li>Provision for ~20% excess energy storage integration</li>
              </ul>
            </li>
          </ul>
          <p className="mb-6">These developments indicate a clear policy and market shift toward storage-backed renewable systems.</p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Why Transmission Expansion Alone Is Not Enough</h2>
          <p className="mb-3">While transmission upgrades are critical, they cannot fully resolve curtailment.</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>Transmission moves energy&mdash;but does not shift it across time</li>
            <li>Solar generation remains concentrated in daytime hours</li>
            <li>Demand patterns remain unchanged</li>
          </ul>
          <p className="mb-3">Even with expanded transmission, midday surplus will persist without storage.</p>
          <p className="mb-6 font-semibold text-[#191919]">
            This is why: Transmission solves capacity constraints. BESS solves temporal imbalance.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">The Strategic Shift: From Capacity Addition to Energy Optimization</h2>
          <p className="mb-3">India&apos;s renewable journey is entering a new phase, with Rajasthan leading the transition:</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#191919]">Phase</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#191919]">Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Phase 1</td>
                  <td className="border border-gray-200 px-4 py-2">Capacity expansion</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Phase 2</td>
                  <td className="border border-gray-200 px-4 py-2">Grid stabilization</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">Phase 3 (current)</td>
                  <td className="border border-gray-200 px-4 py-2 font-semibold">Storage integration</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-3">
            With approximately 34 GW already operational in Rajasthan, further solar additions without storage will increase curtailment, not efficiency.
          </p>
          <p className="mb-6">The same trajectory applies to India as a whole.</p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Why BESS Is the Only Scalable Solution</h2>
          <p className="mb-4">
            <Link href="/" className="text-accent font-bold hover:underline">Battery Energy Storage Systems</Link> directly address the root cause of curtailment: timing mismatch between generation and demand.
          </p>
          <p className="font-semibold text-[#191919] mb-2">What BESS Solves:</p>
          <ul className="list-none pl-0 mb-6 space-y-1.5">
            <li>&#10004; Stores excess solar energy during midday</li>
            <li>&#10004; Releases power during evening peak demand</li>
            <li>&#10004; Reduces dependence on inflexible thermal plants</li>
            <li>&#10004; Stabilizes voltage and grid frequency</li>
            <li>&#10004; Improves transmission utilization (from ~8 hours to ~16 hours)</li>
          </ul>

          {/* CTA */}
          <div className="bg-[rgb(58,88,129)] rounded-lg p-6 text-center mb-8">
            <p className="text-white font-bold text-[16px] mb-3">Setting up solar with BESS in Rajasthan?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[rgb(58,88,129)] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition">
              Talk To Our BESS Experts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">What Happens Next?</h2>
          <p className="mb-3">The next phase of India&apos;s energy transition will depend on how quickly storage is deployed.</p>
          <p className="mb-3">Rajasthan&apos;s experience will serve as a real world benchmark for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>Policy decisions</li>
            <li>Grid planning</li>
            <li>Investment strategies</li>
          </ul>
          <p className="mb-3 font-semibold text-[#191919]">But one thing is already clear:</p>
          <p className="mb-3">Without BESS in Rajasthan, the state&apos;s renewable growth will slow.</p>
          <p className="mb-6">Also without BESS adoption across India, the country&apos;s energy transition will face the same ceiling.</p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Conclusion</h2>
          <p className="mb-3">
            Rajasthan&apos;s renewable sector is at an inflection point. The state has successfully built one of the largest solar ecosystems in the world&mdash;but grid limitations are now holding it back.
          </p>
          <p className="mb-3"><Link href="/" className="text-accent font-bold hover:underline">Battery Energy Storage Systems</Link> are no longer optional because they:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>Protect developer revenues</li>
            <li>Improve grid efficiency</li>
            <li>Enable higher renewable penetration</li>
            <li>Future-proof India&apos;s energy transition</li>
          </ul>
          <p className="mb-3">The situation unfolding in Rajasthan reflects a broader national reality.</p>
          <p className="mb-6">India is now transitioning from renewable capacity expansion to grid optimization.</p>

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
            <Link href="/blog/india-bess-safety-regulations-2026" className="block transition-transform hover:scale-[1.02]">
              <img src="/blog/modular-energy-storage-at-night.webp" alt="India BESS Safety Regulations 2026 - CEA Compliance Framework" className="w-full rounded-lg shadow-sm border border-gray-100" />
            </Link>
            <Link href="/products/model-c" className="block transition-transform hover:scale-[1.02]">
              <img src="/blog/renewable-energy-solutions-at-twilight.webp" alt="UnityESS Model C Utility Scale BESS for Solar Storage" className="w-full rounded-lg shadow-sm border border-gray-100" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
