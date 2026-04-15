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
          {/* Banner */}
          <img
            src="/blog/unityess-smart-energy-storage-system-india-hero.webp"
            alt="UnityESS Smart Energy Storage System in India - Reliable BESS Solution by Ornate Solar and Inverted Energy"
            width="900"
            height="300"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-57.5 rounded-lg mb-6 object-cover"
          />

          <header>
            <h1 className="text-[22px] md:text-[28px] font-bold text-[#191919] leading-tight mb-2">
              Introducing UnityESS Smart Energy Storage System in India
            </h1>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-5">
              <time dateTime="2025-04-03">April 3, 2025</time>
              <span>•</span>
              <span>By UnityESS Team</span>
              {/* <span>•</span>
                  <span>8 min read</span> */}
            </div>
          </header>

          <p className="mb-4">
            India's renewable energy capacity is growing rapidly, but energy availability remains uneven. Solar power is generated during the day, while electricity demand peaks in the evening. This creates a clear need for a reliable <strong>energy storage system in India</strong>.
          </p>
          <p className="mb-6">
            UnityESS solves this problem by storing excess energy and delivering it when required. It helps improve energy reliability, reduce electricity costs, and maximize the use of renewable energy.
          </p>

          {/* Video */}
          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              src="https://www.youtube.com/embed/px3OlRxXRFo"
              title="UnityESS Energy Storage System in India - How BESS Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">What Is UnityESS (Energy Storage System – ESS)</h2>
          <p className="mb-4">
            UnityESS is a <strong>energy storage system (BESS) in India</strong> developed by <a href="https://ornatesolar.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Ornate Solar</a> in collaboration with Inverted Energy. It is designed to store solar energy and supply it during peak demand, outages, or non-generation hours.
          </p>
          <p className="font-semibold text-[#191919] mb-2">Key Components:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1.5">
            <li>LFP (Lithium Iron Phosphate) batteries for safety and long lifecycle</li>
            <li>Power Conversion System (PCS) for efficient energy flow</li>
            <li>Thermal management and fire safety systems</li>
            <li>Energy Management System (EMS) for intelligent control</li>
          </ul>
          <p className="mb-8">
            UnityESS converts intermittent renewable energy into a stable and controllable power source.
          </p>

          {/* CTA */}
          <div className="bg-[rgb(58,88,129)] rounded-lg p-6 text-center mb-8">
            <p className="text-white font-bold text-[16px] mb-3">Looking for a reliable energy storage system in India?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[rgb(58,88,129)] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-gray-100 transition">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">UnityESS Product Range (Energy Storage Systems in India)</h2>
          <p className="mb-6">
            UnityESS offers multiple models designed for different use cases across commercial, industrial, and utility-scale applications.
          </p>

          {/* Model A + Image */}
          <div className="flex flex-col gap-5 mb-8">
            <div>
              <h3 className="text-[17px] font-bold text-[#191919] mb-2">Model A – Commercial & Industrial Energy Storage System</h3>
              <p className="mb-3">
                Model A is a compact <Link href="/products/model-a" className="text-accent font-bold hover:underline">C&I energy storage system in India</Link> designed for small to mid-sized businesses. It supports backup power, solar integration, and electricity cost optimization.
              </p>
              <p className="font-semibold text-[#191919] mb-1">Best suited for:</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>Offices and commercial buildings</li>
                <li>Retail outlets and small industries</li>
                <li>Businesses with high peak-hour electricity tariffs</li>
              </ul>
              <p className="font-semibold text-[#191919] mb-1">Key benefits:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Reduces electricity bills through peak shaving</li>
                <li>Improves rooftop solar utilization</li>
                <li>Ensures uninterrupted operations during outages</li>
              </ul>
            </div>
            <div className="w-full flex justify-start">
              <Link href="/products/model-a" className="w-full max-w-125 block transition-transform hover:scale-[1.02]">
                <img src="/blog/unityess-model-a-commercial-industrial-energy-storage-system.webp" alt="UnityESS Model A - Commercial and Industrial Energy Storage System in India for Offices and Businesses" className="w-full h-auto rounded-lg object-contain shadow-sm border border-gray-100" />
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* Model B + Image */}
          <div className="flex flex-col gap-5 mb-8">
            <div>
              <h3 className="text-[17px] font-bold text-[#191919] mb-2">Model B – Hybrid Battery Energy Storage System (BESS)</h3>
              <p className="mb-3">
                Model B is a <Link href="/products/model-b" className="text-accent font-bold hover:underline">hybrid battery energy storage system in India</Link> designed for larger commercial and industrial facilities. It supports capacities from 261 kWh to 1 MWh+ and enables direct solar integration.
              </p>
              <p className="font-semibold text-[#191919] mb-1">Best suited for:</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>Manufacturing units and factories</li>
                <li>Warehouses and logistics hubs</li>
                <li>High energy consumption facilities</li>
              </ul>
              <p className="font-semibold text-[#191919] mb-1">Key benefits:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Peak load management and demand charge reduction</li>
                <li>Higher efficiency through DC coupling</li>
                <li>Better utilization of large solar installations</li>
              </ul>
            </div>
            <div className="w-full flex justify-start">
              <Link href="/products/model-b" className="w-full max-w-125 block transition-transform hover:scale-[1.02]">
                <img src="/blog/unityess-model-b-hybrid-battery-energy-storage-system.webp" alt="UnityESS Model B - Hybrid Battery Energy Storage System BESS in India for Industries and Factories" className="w-full h-auto rounded-lg object-contain shadow-sm border border-gray-100" />
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* Model C + Image */}
          <div className="flex flex-col gap-5 mb-8">
            <div>
              <h3 className="text-[17px] font-bold text-[#191919] mb-2">Model C – Utility-Scale Energy Storage System</h3>
              <p className="mb-3">
                Model C is a containerized <Link href="/products/model-c" className="text-accent font-bold hover:underline">utility-scale energy storage system in India</Link>, designed for large infrastructure and renewable energy projects. It supports scalable deployment up to 6.25 MWh.
              </p>
              <p className="font-semibold text-[#191919] mb-1">Best suited for:</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>Solar and wind power plants</li>
                <li>Renewable energy parks</li>
                <li>Grid-scale and microgrid projects</li>
              </ul>
              <p className="font-semibold text-[#191919] mb-1">Key benefits:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Grid stabilization and frequency regulation</li>
                <li>Reliable large-scale energy storage</li>
                <li>Supports renewable energy integration</li>
              </ul>
            </div>
            <div className="w-full flex justify-start">
              <Link href="/products/model-c" className="w-full max-w-125 block transition-transform hover:scale-[1.02]">
                <img src="/blog/unityess-model-c-utility-scale-energy-storage-system.webp" alt="UnityESS Model C - Utility Scale Energy Storage System in India for Solar and Wind Power Plants" className="w-full h-auto rounded-lg object-contain shadow-sm border border-gray-100" />
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          {/* Unity Infinity + Image */}
          <div className="flex flex-col gap-5 mb-8">
            <div>
              <h3 className="text-[17px] font-bold text-[#191919] mb-2">Unity Infinity – Portable Energy Storage System</h3>
              <p className="mb-3">
                <Link href="/products/unity-infinity" className="text-accent font-bold hover:underline">Unity Infinity</Link> is a 5 kWh portable energy storage system in India designed for flexible and everyday use. It works in both on-grid and off-grid environments.
              </p>
              <p className="font-semibold text-[#191919] mb-1">Best suited for:</p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>Residential backup power</li>
                <li>Portable solution for everyday energy needs</li>
                <li>Small businesses and shops</li>
              </ul>
              <p className="font-semibold text-[#191919] mb-1">Key benefits:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Easy to deploy and move</li>
                <li>Reliable backup during power cuts</li>
                <li>Supports decentralized energy usage</li>
              </ul>
            </div>
            <div className="w-full flex justify-start">
              <Link href="/products/unity-infinity" className="w-full max-w-125 block transition-transform hover:scale-[1.02]">
                <img src="/blog/unityess-bess-product-overview.webp" alt="Unity Infinity - 5 kWh Portable Energy Storage System in India for Residential and Small Business Use" className="w-full h-auto rounded-lg object-contain shadow-sm border border-gray-100" />
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Made in India and Built for Indian Conditions</h2>
          <p className="mb-3">
            UnityESS is developed in India through the combined expertise of <a href="https://ornatesolar.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Ornate Solar</a> and Inverted Energy. With strong manufacturing capabilities, advanced research, and global certifications, the system reflects high engineering standards.
          </p>
          <p className="mb-6">
            More importantly, it is designed specifically for Indian conditions, including high temperatures and grid variability. This ensures consistent performance and long term reliability across applications.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Unity EMS (Energy Management System)</h2>
          <p className="mb-3">
            The Unity Energy Management System (EMS) provides intelligent control and real-time monitoring.
          </p>
          <p className="font-semibold text-[#191919] mb-1">Key functions:</p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Optimizes charging and discharging cycles</li>
            <li>Reduces electricity costs through peak shifting</li>
            <li>Provides instant backup during outages</li>
            <li>Enables real-time monitoring and alerts</li>
          </ul>
          <p className="mb-6">Unity EMS improves overall system efficiency and reliability.</p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">Conclusion</h2>
          <p className="mb-3">
            <Link href="/" className="text-accent font-bold hover:underline">UnityESS</Link> is a scalable and reliable energy storage system in India designed for multiple applications:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><strong>Model A</strong> → Commercial and small industrial use</li>
            <li><strong>Model B</strong> → Large-scale industrial energy management</li>
            <li><strong>Model C</strong> → Utility-scale and grid applications</li>
            <li><strong>Unity Infinity</strong> → Portable and residential use</li>
          </ul>
          <p className="mb-6">
            It enables efficient energy storage, better renewable utilization, and consistent power availability.
          </p>

          <hr className="my-6 border-gray-200" />

          <h2 className="text-[20px] font-bold text-[#191919] mb-3 mt-8">About UnityESS</h2>
          <p className="mb-3">
            UnityESS is a next generation energy storage system in India, developed by <a href="https://ornatesolar.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">Ornate Solar</a> in collaboration with Inverted Energy. It is designed to deliver reliable, intelligent, and scalable energy storage solutions for modern power needs.
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
          {/* Contact Form - scrolls with page */}
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
            <Link href="/products/model-b" className="block transition-transform hover:scale-[1.02]">
              <img src="/blog/modular-energy-storage-at-night.webp" alt="UnityESS Model B Hybrid BESS - Battery Energy Storage System Manufacturer in India" className="w-full rounded-lg shadow-sm border border-gray-100" />
            </Link>
            <Link href="/products/model-a" className="block transition-transform hover:scale-[1.02]">
              <img src="/blog/renewable-energy-solutions-at-twilight.webp" alt="UnityESS Model A Commercial Energy Storage System - C&I BESS Solution in India" className="w-full rounded-lg shadow-sm border border-gray-100" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
