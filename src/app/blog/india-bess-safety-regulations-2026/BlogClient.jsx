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
            src="/blog/india-bess-safety-regulations-2026-hero.webp"
            alt="India BESS Safety Regulations 2026 by CEA - Chapter XA Rules, Mandatory Fire Audit & April 2027 Compliance Framework for Battery Energy Storage Systems"
            width="900"
            height="300"
            loading="eager"
            fetchPriority="high"
            className="hidden md:block w-full h-57.5 rounded-lg mb-6 object-cover"
          />
          {/* Banner - Mobile */}
          <img
            src="/blog/india-bess-safety-regulations-2026-mobile.webp"
            alt="India BESS Safety Regulations 2026 by CEA - Chapter XA Rules, Mandatory Fire Audit & April 2027 Compliance Framework for Battery Energy Storage Systems"
            loading="eager"
            fetchPriority="high"
            className="md:hidden w-full rounded-lg mb-6 object-cover"
          />

          <header>
            <h1 className="text-[22px] md:text-[28px] font-bold text-[#191919] leading-tight mb-2">
              India&apos;s BESS Safety Regulations 2026: Key Rules, Fire Audit Mandate & What Changes from April 2027
            </h1>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-5">
              <time dateTime="2026-04-10">April 10, 2026</time>
              <span>•</span>
              <span>By UnityESS Team</span>
            </div>
          </header>

          <p className="mb-4">
            India has introduced a comprehensive safety framework for <strong>Battery Energy Storage Systems (BESS)</strong> through the latest amendment issued by the Central Electricity Authority. The regulation was notified on <strong>27 March 2026</strong> in the Gazette of India and will come into force from <strong>1 April 2027</strong>.
          </p>
          <p className="mb-6">
            This amendment inserts a new <strong>Chapter XA</strong> into the existing Measures relating to Safety and Electric Supply Regulations, 2023, specifically addressing BESS installations. It establishes clear technical and safety requirements covering design, operation, fire protection, and compliance.
          </p>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6 shadow-sm">
            <iframe
              src="https://www.youtube.com/embed/cVpjnq02sXI"
              title="India BESS Safety Regulations 2026 Explained"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Background: Why These Regulations Were Introduced</h2>
          <p className="mb-4">
            India&apos;s growing renewable energy capacity has increased the need for grid-scale energy storage. As BESS deployments expand, safety risks—particularly those related to thermal runaway, fire hazards, and system failures—have become more critical.
          </p>
          <p className="mb-6">
            The 2026 amendment addresses this gap by introducing a structured framework that aligns safety requirements with the scale and complexity of modern battery storage systems. It also brings India&apos;s regulatory approach closer to globally accepted safety practices.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Applicability and Timeline</h2>
          <p className="mb-3">The regulation follows a defined timeline and scope:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>Draft issued for public consultation: <strong>20 June 2025</strong></li>
            <li>Final notification: <strong>27 March 2026</strong></li>
            <li>Effective date: <strong>1 April 2027</strong></li>
          </ul>
          <p className="mb-6">
            The provisions under Chapter XA apply to BESS installations connected at voltage levels exceeding <strong>650V</strong>. Installations at 650V and below are not covered under the detailed Chapter XA requirements but must comply with applicable standards, as specified under <strong>Regulation 122(N)</strong>.
          </p>

          {/* CTA */}
          <div className="bg-[rgb(58,88,129)] rounded-lg p-6 text-center mb-8">
            <p className="text-white font-bold text-[16px] mb-3">Need a BESS that meets India&apos;s 2026 safety standards?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[rgb(58,88,129)] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition">
              Talk to Our Experts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Structure of Chapter XA</h2>
          <p className="mb-3">
            Chapter XA introduces <strong>Regulations 122(A) to 122(N)</strong>. These provisions do not replace earlier safety requirements but operate in addition to the existing regulations.
          </p>
          <p className="font-semibold text-[#191919] mb-2">The chapter covers:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>general system design and safety principles</li>
            <li>equipment layout and installation requirements</li>
            <li>hazard detection and suppression systems</li>
            <li>site-level security and emergency measures</li>
            <li>compliance verification through audits</li>
          </ul>
          <p className="mb-6">This creates a complete safety framework across the lifecycle of a BESS project.</p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Two-Fault Tolerance Requirement</h2>
          <p className="mb-3">
            A key provision under <strong>Regulation 122(B)</strong> is the requirement for <strong>two-fault tolerance</strong>.
          </p>
          <p className="mb-3">
            This means a BESS must be designed to remain safe—even in the event of two independent faults occurring simultaneously or sequentially. These conditions include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>overcharge or over-discharge</li>
            <li>short circuit</li>
            <li>operation outside specified temperature limits</li>
          </ul>
          <p className="mb-6">
            This is a design-level requirement and requires redundancy in protection systems across different layers of the BESS architecture.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Battery Management System (BMS) Requirements</h2>
          <p className="mb-3">The amendment defines specific expectations from the Battery Management System.</p>
          <p className="font-semibold text-[#191919] mb-2">The BMS must:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>monitor voltage and temperature at cell and module levels</li>
            <li>detect thermal runaway conditions</li>
            <li>monitor current at the rack level</li>
            <li>trigger audio-visual alarms when limits are exceeded</li>
          </ul>
          <p className="mb-6">
            If operating parameters go beyond OEM-specified limits, the system must automatically stop charging and discharging. This ensures immediate response without manual intervention.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Fire Detection and Suppression</h2>
          <p className="mb-3">
            Under <strong>Regulation 122(F)</strong>, fire safety systems are mandatory for all applicable BESS installations.
          </p>
          <p className="font-semibold text-[#191919] mb-2">Each container must include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>detection systems for smoke, heat, gas, and flame</li>
            <li>an automatic fire suppression system compliant with relevant standards</li>
          </ul>
          <p className="mb-6">
            These systems must also be protected from environmental damage and unauthorised access while remaining accessible for maintenance.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Ventilation, Cooling and Explosion Protection</h2>
          <p className="mb-3">Thermal and environmental control is addressed through multiple provisions.</p>
          <p className="font-semibold text-[#191919] mb-2">BESS installations must include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>ventilation and HVAC systems designed as per relevant standards</li>
            <li>automatic shutdown in case of ventilation failure</li>
            <li>measures to prevent accumulation of flammable gases</li>
          </ul>
          <p className="mb-6">
            Battery containers must also incorporate explosion protection features, including forced ventilation and controlled airflow systems.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Equipment Layout and Site Safety</h2>
          <p className="mb-3">The regulation also specifies requirements for installation and site-level safety.</p>
          <p className="font-semibold text-[#191919] mb-2">These include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>minimum spacing between BESS units and nearby structures (based on battery chemistry)</li>
            <li>containment systems for electrolyte spills (where applicable)</li>
            <li>emergency lighting and safety signage</li>
          </ul>
          <p className="mb-6">
            In addition, site security measures such as perimeter fencing (minimum 1.8 metres), surveillance systems, and intrusion detection are mandatory.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Emergency Shutdown and Earthing</h2>
          <p className="font-semibold text-[#191919] mb-2">BESS installations must be equipped with:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>automatic shutdown mechanisms triggered by safety anomalies</li>
            <li>manual emergency stop systems at accessible locations</li>
          </ul>
          <p className="mb-6">
            All equipment must comply with earthing requirements as per applicable standards, without exception.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Mandatory Third-Party Fire Safety Audit</h2>
          <p className="mb-3">
            One of the most important compliance requirements is introduced under <strong>Regulation 122(M)</strong>.
          </p>
          <p className="mb-3">
            Every BESS installation must undergo an <strong>independent third-party fire safety audit</strong> within three months from the date of commencement of the regulations (1 April 2027).
          </p>
          <p className="mb-3">
            The audit report must be submitted to the Electrical Inspector at the time of inspection.
          </p>
          <p className="mb-6">
            Additionally, the regulation mandates that fire safety authorities be trained for BESS-related risks, with guidelines to be issued by the relevant agencies.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Applicability for Systems ≤650V</h2>
          <p className="mb-3">
            Installations operating at 650V or below are covered under <strong>Regulation 122(N)</strong>.
          </p>
          <p className="mb-6">
            While they are exempt from the detailed provisions of Chapter XA, they must still comply with relevant applicable standards based on their voltage class.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Relevant Standards to Be Issued Separately</h2>
          <p className="mb-3">
            The regulation frequently refers to compliance with &ldquo;relevant standards,&rdquo; but these are not listed within the amendment itself.
          </p>
          <p className="mb-3">
            Under <strong>Regulation 137</strong>, the Central Electricity Authority will issue a separate list of applicable standards within three months of the regulations coming into force, i.e., by approximately <strong>July 2027</strong>.
          </p>
          <p className="mb-6">
            Until then, industry practice is expected to align with established IEC and Indian Standards.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Impact on Industry Stakeholders</h2>
          <p className="mb-3">The amendment introduces clear responsibilities across the value chain.</p>
          <p className="mb-3">
            <strong>Developers and EPC companies</strong> must incorporate safety requirements at the design stage, particularly for two-fault tolerance and fire protection systems.
          </p>
          <p className="mb-3">
            <strong>OEMs</strong> must ensure that their equipment, including PCS and BMS, is compatible with the specific battery chemistry and meets the monitoring and protection requirements defined in the regulation.
          </p>
          <p className="mb-6">
            <strong>Existing BESS installations</strong> will also need to comply with the fire audit requirement within the specified timeline, making early assessment and preparation important.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Conclusion</h2>
          <p className="mb-3">
            The <strong>BESS Safety Regulations 2026</strong> mark a significant step in formalising energy storage safety in India. By introducing structured design requirements, mandatory fire protection systems, and independent safety audits, the regulation establishes a clear compliance framework for the industry.
          </p>
          <p className="mb-6">
            As BESS deployments continue to grow, these regulations ensure that expansion is supported by robust safety standards, operational reliability, and regulatory clarity.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">About UnityESS</h2>
          <p className="mb-3">
            <Link href="/" className="text-accent font-bold hover:underline">UnityESS</Link> is a next generation energy storage system in India, developed by <a href="https://ornatesolar.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Ornate Solar </a> in collaboration with Inverted Energy. Our BESS solutions are engineered to align with India&apos;s evolving safety regulations, including the requirements introduced under Chapter XA of the 2026 amendment.
          </p>
          <p>
            For guidance on compliance, fire safety audits, or selecting a regulation-ready BESS, call us at{' '}
            <a href="tel:18002026252" className="text-accent font-semibold hover:underline">1800 2026 252</a>{' '}
            to discuss your project.
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
            <Link href="/blog/unityess-energy-storage-system-india" className="block transition-transform hover:scale-[1.02]">
              <img src="/blog/modular-energy-storage-at-night.webp" alt="UnityESS BESS - India's Reliable Battery Energy Storage System" className="w-full rounded-lg shadow-sm border border-gray-100" />
            </Link>
            <Link href="/products/model-c" className="block transition-transform hover:scale-[1.02]">
              <img src="/blog/renewable-energy-solutions-at-twilight.webp" alt="UnityESS Model C Utility Scale BESS - Compliant with India Safety Regulations" className="w-full rounded-lg shadow-sm border border-gray-100" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
