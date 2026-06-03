"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Check, ChevronRight, ArrowRight, Shield, Zap, Battery, Download, Factory, Server, Building2, Sun, Plug, HeartPulse, Camera, Tent, HardHat, Briefcase, Truck, Radio, BarChart3, BatteryCharging, Warehouse, Hospital, Lightbulb, Wind, X, Layers, Box, Mountain, Cpu, ShieldCheck } from 'lucide-react';
import { getProductById, products } from '../../../data/products';
import Reveal, { RevealItem } from '../../../components/Reveal';

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

/* ═══════ Model A Variants Datasheet (shown only on Model A detail page) ═══════ */
const modelA4 = {
  name: 'UNITY Model A4',
  series: 'Commercial Series',
  capacity: '261 kWh & 522 kWh',
  image: '/products/unity-model-a4-bess.webp',
  description: 'The UNITYESS Model A4 series is a compact low-voltage C&I energy storage solution operating at 400V AC, available in 261 kWh and 522 kWh configurations with 2-hour and 4-hour charge/discharge durations.',
  detail: 'Designed for flexible commercial applications with liquid-cooled LFP batteries, intelligent BMS, integrated PCS, and advanced safety architecture.',
  variants: ['A4-261-0.5C', 'A4-522-0.25C'],
  specs: {
    ac: {
      'Rated Capacity': '261 kWh / 522 kWh',
      'AC Rated Power': '125 kW',
      'Nominal Voltage (AC)': '400 V',
      'Rated Voltage (AC)': '380 - 420 Vac',
      'Frequency': '49.5 - 50.5 Hz',
      'THDi': '≤ 3%',
      'Power Factor': '1.0 leading - 1.0 lagging',
    },
    dc: {
      'Cell': 'LFP 314 Ah',
      'Battery Pack': '1P52S',
      'Battery Rack': '1P260S',
      'Nominal DC Voltage': '832 V',
      'DC Voltage Range': '754 - 936 V',
      'Cooling Method': 'Liquid Cooled',
    },
    general: {
      'Communication': 'RS485 / CAN / Ethernet',
      'DC RTE': '> 94%',
      'Lifetime': '8,000 cycles',
      'Fire Fighting System': 'Temperature/Smoke Detection, Aerosol, Flooding',
      'Noise': '< 80 dB',
      'Operating Temperature': '-30 to 55 °C',
      'Rating': 'IP54',
      'Dimension (W x D x H)': '1100 x 1320 x 2560 mm',
      'Weight': '2,600 kg',
      'Standard': 'IEC62619, IEC61000, UL9540(A), UN38.3',
    },
  },
};

/* ═══════ Model C Variants (shown only on Model C detail page) ═══════ */
const modelC350 = {
  name: 'UNITY Model C350',
  series: 'Utility Series',
  capacity: '3.44 MWh, 4.30 MWh & 5.16 MWh',
  image: '/products/unity-model-c350-bess.webp',
  description: 'The UNITYESS Model C350 series is a containerized utility-scale energy storage system available in three configurations powered by LFP 350 Ah cells, ideal for high-density renewable integration and grid services.',
  detail: 'Three variants: C350-3440 (3.440 MWh), C350-4300 (4.300 MWh), C350-5161 (5.161 MWh). Liquid-cooled, 2.5 MVA AC rated power, with C4 corrosion rating for harsh environments.',
  variants: ['C350-3440', 'C350-4300', 'C350-5161'],
  specs: {
    ac: {
      'Rated Capacity': '3.440 / 4.300 / 5.161 MWh',
      'AC Rated Power': '2.5 MVA',
      'Nominal Voltage (AC)': '690 V',
      'Rated Voltage (AC)': '655 - 724 Vac',
      'Frequency': '49.5 - 50.5 Hz',
      'THDi': '≤ 3%',
      'Power Factor': '1.0 leading - 1.0 lagging',
    },
    dc: {
      'Cell': 'LFP 350 Ah',
      'Battery Pack': '1P52S',
      'Battery Rack': '8P384S / 10P384S / 12P384S',
      'Nominal DC Voltage': '1331 V',
      'DC Voltage Range': '1100 - 1500 V',
      'Cooling Method': 'Liquid Cooled',
    },
    general: {
      'Communication': 'RS485 / CAN / Ethernet',
      'DC RTE': '> 94%',
      'Lifetime': '8,000 cycles',
      'Fire Fighting System': 'Temperature/Smoke Detection, Aerosol, Flooding, Alarm Bell & Strobe',
      'Operating Temperature': '-30 to 55 °C',
      'Corrosion Rating': 'C4',
      'Dimension (W x D x H)': '6058 x 2436 x 2896 mm',
      'Weight': '40 - 49 tons',
      'Standard': 'IEC62619, IEC61000, UL9540(A), UN38.3',
    },
  },
};

const modelC587 = {
  name: 'UNITY Model C587',
  series: 'Utility Series',
  capacity: '4.69 MWh, 5.47 MWh & 6.23 MWh',
  image: '/products/unity-model-c587-bess.webp',
  description: 'The UNITYESS Model C587 series is a high-density containerized utility-scale energy storage system available in three configurations powered by LFP 587 Ah cells, delivering the highest capacity in the Model C lineup.',
  detail: 'Three variants: C587-4690 (4.690 MWh), C587-5470 (5.470 MWh), C587-6230 (6.230 MWh). Liquid-cooled, 2.5 MVA AC rated power, with C4 corrosion rating for harsh environments.',
  variants: ['C587-4690', 'C587-5470', 'C587-6230'],
  specs: {
    ac: {
      'Rated Capacity': '4.690 / 5.470 / 6.230 MWh',
      'AC Rated Power': '2.5 MVA',
      'Nominal Voltage (AC)': '690 V',
      'Rated Voltage (AC)': '655 - 724 Vac',
      'Frequency': '49.5 - 50.5 Hz',
      'THDi': '≤ 3%',
      'Power Factor': '1.0 leading - 1.0 lagging',
    },
    dc: {
      'Cell': 'LFP 587 Ah',
      'Battery Pack': '1P52S',
      'Battery Rack': '8P384S / 10P384S / 12P384S',
      'Nominal DC Voltage': '1331 V',
      'DC Voltage Range': '1100 - 1500 V',
      'Cooling Method': 'Liquid Cooled',
    },
    general: {
      'Communication': 'RS485 / CAN / Ethernet',
      'DC RTE': '> 94%',
      'Lifetime': '8,000 cycles',
      'Fire Fighting System': 'Temperature/Smoke Detection, Aerosol, Flooding, Alarm Bell & Strobe',
      'Operating Temperature': '-30 to 55 °C',
      'Corrosion Rating': 'C4',
      'Dimension (W x D x H)': '6058 x 2436 x 2896 mm',
      'Weight': '40 - 49 tons',
      'Standard': 'IEC62619, IEC61000, UL9540(A), UN38.3',
    },
  },
};

const modelC314 = {
  name: 'UNITY Model C314',
  series: 'Utility Series',
  capacity: '3.34 MWh, 4.18 MWh & 5.02 MWh',
  image: '/products/unity-model-c-series-bess.webp',
  description: 'The UNITYESS Model C314 series is a containerized utility-scale energy storage system available in three configurations powered by LFP 314 Ah cells, ideal for grid services and large-scale renewable integration.',
  detail: 'Three variants: C314-3340 (3.340 MWh), C314-4180 (4.180 MWh), C314-5016 (5.016 MWh). Liquid-cooled, 2.5 MVA AC rated power, with C4 corrosion rating for harsh environments.',
  variants: ['C314-3340', 'C314-4180', 'C314-5016'],
  specs: {
    ac: {
      'Rated Capacity': '3.340 / 4.180 / 5.016 MWh',
      'AC Rated Power': '2.5 MVA',
      'Nominal Voltage (AC)': '690 V',
      'Rated Voltage (AC)': '655 - 724 Vac',
      'Frequency': '49.5 - 50.5 Hz',
      'THDi': '≤ 3%',
      'Power Factor': '1.0 leading - 1.0 lagging',
    },
    dc: {
      'Cell': 'LFP 314 Ah',
      'Battery Pack': '1P52S',
      'Battery Rack': '8P384S / 10P384S / 12P384S',
      'Nominal DC Voltage': '1331 V',
      'DC Voltage Range': '1100 - 1500 V',
      'Cooling Method': 'Liquid Cooled',
    },
    general: {
      'Communication': 'RS485 / CAN / Ethernet',
      'DC RTE': '> 94%',
      'Lifetime': '8,000 cycles',
      'Fire Fighting System': 'Temperature/Smoke Detection, Aerosol, Flooding, Alarm Bell & Strobe',
      'Operating Temperature': '-30 to 55 °C',
      'Corrosion Rating': 'C4',
      'Dimension (W x D x H)': '6058 x 2436 x 2896 mm',
      'Weight': '40 - 49 tons',
      'Standard': 'IEC62619, IEC61000, UL9540(A), UN38.3',
    },
  },
};

const modelA6 = {
  name: 'UNITY Model A6/A8',
  series: 'Commercial Series',
  capacity: '418 kWh & 836 kWh',
  image: '/products/unity-model-a6-bess.webp?v=2',
  description: 'The UNITYESS Model A6 series is a medium-voltage C&I energy storage solution operating at 690V AC/800V AC, available in 418 kWh and 836 kWh configurations with 2-hour and 4-hour charge/discharge durations.',
  detail: 'Built for high-performance industrial applications with efficient liquid cooling, scalable battery architecture, and integrated fire protection systems.',
  variants: ['A6-418-0.5C', 'A6-836-0.25C'],
  specs: {
    ac: {
      'Rated Capacity': '418 kWh / 836 kWh',
      'AC Rated Power': '215 kW',
      'Nominal Voltage (AC)': '690 V',
      'Rated Voltage (AC)': '655 - 724 Vac',
      'Frequency': '49.5 - 50.5 Hz',
      'THDi': '≤ 3%',
      'Power Factor': '1.0 leading - 1.0 lagging',
    },
    dc: {
      'Cell': 'LFP 314 Ah',
      'Battery Pack': '1P52S',
      'Battery Rack': '1P416S / 2P416S',
      'Nominal DC Voltage': '1331 V',
      'DC Voltage Range': '1100 - 1500 V',
      'Cooling Method': 'Liquid Cooled',
    },
    general: {
      'Communication': 'RS485 / CAN / Ethernet',
      'DC RTE': '> 88%',
      'Lifetime': '8,000 cycles',
      'Fire Fighting System': 'Temperature/Smoke Detection, Aerosol, Flooding',
      'Noise': '< 80 dB',
      'Operating Temperature': '-30 to 55 °C',
      'Rating': 'IP54',
      'Dimension (W x D x H)': '1690 x 1350 x 2400 mm / 3400 x 1350 x 2400 mm',
      'Weight': '3,800 kg / 6,600 kg',
      'Standard': 'IEC62619, IEC61000, UL9540(A), UN38.3',
    },
  },
};

function DatasheetModal({ product, onClose }) {
  const [mounted, setMounted] = useState(false);

  // Lock body scroll while modal is open + close on ESC
  useEffect(() => {
    setMounted(true);
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!mounted) return null;

  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      style={{ zIndex: 9999 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col modal-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        <div className="overflow-y-auto modal-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 md:p-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-sm h-auto object-contain rounded-xl"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-center bg-white">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-3">
                {product.series}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-1">
                {product.name}
              </h2>
              {product.capacity && (
                <p className="text-base font-semibold text-[rgb(58,88,129)] mb-3">
                  {product.capacity}
                </p>
              )}
              {product.description && (
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {product.description}
                </p>
              )}
              {product.detail && (
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {product.detail}
                </p>
              )}
              {product.tagline && !product.description && (
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {product.tagline}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mb-5">
                {product.variants.map((v) => (
                  <span
                    key={v}
                    className="text-xs font-bold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/15"
                  >
                    {v}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-[rgb(58,88,129)] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[rgb(48,75,110)] transition-colors w-fit"
              >
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="px-6 md:px-8 pb-8 pt-2">
            <h3 className="text-lg font-bold text-gray-900 mb-5 mt-2 pb-2 border-b border-gray-200">
              Technical Specifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">AC Side</p>
                <dl className="space-y-3">
                  {Object.entries(product.specs.ac).slice(0, 3).map(([k, v]) => (
                    <div key={k} className="text-sm">
                      <dt className="text-gray-500 mb-1">{k}</dt>
                      <dd className="font-semibold text-gray-900">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">DC Side</p>
                <dl className="space-y-3">
                  {Object.entries(product.specs.dc).slice(0, 3).map(([k, v]) => (
                    <div key={k} className="text-sm">
                      <dt className="text-gray-500 mb-1">{k}</dt>
                      <dd className="font-semibold text-gray-900">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">General Parameters</p>
                <dl className="space-y-3">
                  {Object.entries(product.specs.general).slice(0, 3).map(([k, v]) => (
                    <div key={k} className="text-sm">
                      <dt className="text-gray-500 mb-1">{k}</dt>
                      <dd className="font-semibold text-gray-900">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* CTA Bar - shown after datasheet inside scroll area */}
            <div className="mt-8 rounded-xl bg-linear-to-r from-[rgb(58,88,129)] to-[rgb(48,75,110)] px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-white font-medium text-center sm:text-left">
                Need full specs, custom configurations?
              </p>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-white text-[rgb(58,88,129)] text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap shadow-sm shrink-0"
              >
                Contact Us for Datasheets <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

/* ═══════ Mobile App Carousel ═══════ */
function AppCarousel({ applications }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);
  const total = applications.length;

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

  const { icon: Icon, caption } = getAppMeta(applications[active]);

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="bg-[rgb(58,88,129)] rounded-2xl border border-white/10 p-6 min-h-40 transition-all duration-300">
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

export default function ProductDetailClient() {
  const { id } = useParams();
  const product = getProductById(id);
  const [activeVariant, setActiveVariant] = useState(null);

  if (!product) {
    return (
      <div className="bg-bg-deep min-h-screen pt-32 text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-2xl bg-white border border-border flex items-center justify-center mx-auto mb-6">
            <Battery className="w-8 h-8 text-text-tertiary" />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-4">System Not Found</h2>
          <p className="text-base text-text-secondary mb-8">The product you're looking for may have been updated or moved.</p>
          <Link href="/products" className="btn-pill btn-unity">Back to All Systems</Link>
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
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-tertiary" />
            <Link href="/products" className="hover:text-accent transition-colors">Products</Link>
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
                  <div key={h.label} className="bg-linear-to-br from-white to-[#f5f7fa] px-3 py-3 rounded-xl border border-border text-center shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                    <span className="text-lg font-extrabold text-accent block leading-tight">{h.value}</span>
                    <span className="text-[9px] text-text-tertiary uppercase tracking-widest font-bold mt-0.5 block">{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Short description */}
              <div className="bg-linear-to-r from-accent/5 to-transparent rounded-xl p-4 border border-border mb-6">
                <p className="text-xs text-text-secondary leading-relaxed italic">
                  &ldquo;{product.shortDesc}&rdquo;
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-pill btn-unity text-sm">
                  Request Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                {product.datasheet ? (
                  <Link
                    href={`/contact?datasheet=${encodeURIComponent(product.datasheet)}&product=${encodeURIComponent(product.name)}`}
                    className="btn-pill btn-unity-outline text-sm flex items-center gap-1"
                  >
                    <Download className="w-4 h-4" /> Download Datasheet
                  </Link>
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

      {/* Features */}
      <section className="py-12 sm:py-16 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-6">

          {/* Model A4 / A6 Variant Cards — only shown on Model A detail page (before Key Features) */}
          {product.id === 'model-a' && (
            <Reveal animation="fade-up" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <Battery className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Other Variants</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[modelA4, modelA6].map((variant) => (
                  <button
                    key={variant.name}
                    type="button"
                    onClick={() => setActiveVariant(variant)}
                    className="group w-full bg-white rounded-2xl border border-border p-4 sm:p-5 hover:shadow-lg hover:border-accent/30 transition-all duration-300 text-left flex flex-col sm:flex-row gap-5 items-center"
                  >
                    <div className="relative w-full sm:w-56 h-56 rounded-xl overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 shrink-0">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-1.5">
                        {variant.series}
                      </p>
                      <h3 className="text-lg font-extrabold text-text-primary tracking-tight mb-1 group-hover:text-accent transition-colors">
                        {variant.name}
                      </h3>
                      {variant.capacity && (
                        <p className="text-sm font-semibold text-accent mb-2">{variant.capacity}</p>
                      )}
                      <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-3">
                        {variant.description || variant.tagline}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent">
                        View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          {/* Model C Variant Cards — only shown on Model C detail page (before Key Features) */}
          {product.id === 'model-c' && (
            <Reveal animation="fade-up" className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <Battery className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Other Variants</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[modelC314, modelC350, modelC587].map((variant) => (
                  <button
                    key={variant.name}
                    type="button"
                    onClick={() => setActiveVariant(variant)}
                    className="group w-full bg-white rounded-2xl border border-border p-4 sm:p-5 hover:shadow-lg hover:border-accent/30 transition-all duration-300 text-left flex flex-col sm:flex-row gap-5 items-center"
                  >
                    <div className="relative w-full sm:w-56 h-56 rounded-xl overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 shrink-0">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-1.5">
                        {variant.series}
                      </p>
                      <h3 className="text-lg font-extrabold text-text-primary tracking-tight mb-1 group-hover:text-accent transition-colors">
                        {variant.name}
                      </h3>
                      <p className="text-sm font-semibold text-accent mb-2">{variant.capacity}</p>
                      <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-3">
                        {variant.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent">
                        View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          <Reveal animation="fade-up">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-brand-green/8 border border-brand-green/15 flex items-center justify-center">
                <Shield className="w-4 h-4 text-brand-green" />
              </div>
              <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Key Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-linear-to-r from-[#f8f9fa] to-white p-4 rounded-xl border border-border group hover:bg-white hover:border-brand-green/20 hover:shadow-sm transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-green/15 group-hover:bg-brand-green group-hover:border-brand-green transition-all">
                    <Check className="w-3 h-3 text-brand-green group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Design Highlights — only shown on Model A detail page */}
          {product.id === 'model-a' && (
            <Reveal animation="fade-up" className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Engineered for Performance &amp; Safety</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left — image */}
                <div className="lg:col-span-7">
                  <img
                    src="/products/unity-model-a-engineered.webp"
                    alt="UNITY Model A engineering highlights"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Right — feature list */}
                <div className="lg:col-span-5">
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Layers, text: 'Normalized, high-protection grade construction design' },
                      { icon: Box, text: 'Batteries are designed to be completely self-contained' },
                      { icon: Mountain, text: 'Suitable for installations and use in a variety of environments' },
                      { icon: Cpu, text: 'Advanced BMS control for maximum DC output efficiency' },
                      { icon: ShieldCheck, text: 'Separate space for batteries & electrics enhances fire safety' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
                        </div>
                        <p className="text-sm text-text-primary leading-snug font-medium pt-1.5">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* About Unity Model A — only shown on Model A detail page */}
          {product.id === 'model-a' && (
            <Reveal animation="fade-up" className="mt-12 max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <Battery className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">About Unity Model A</h2>
              </div>
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>
                  Unity Model A is a compact and reliable energy storage system made for commercial and industrial use. It comes with advanced battery technology, smart BMS, efficient cooling, and built-in fire safety for smooth and safe performance.
                </p>
                <p>
                  The system has separate battery and electrical sections, which helps improve safety, cooling, and overall reliability. Its outdoor cabinet design makes it suitable for different environments and weather conditions.
                </p>
                <p>
                  Unity Model A is easy to install and maintain, making it a practical solution for backup power, peak load management, and renewable energy support. It is designed for businesses looking for a safe, efficient, and scalable energy storage solution.
                </p>
              </div>
            </Reveal>
          )}

          {/* Design Highlights — only shown on Model C detail page */}
          {product.id === 'model-c' && (
            <Reveal animation="fade-up" className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">Engineered for Utility-Scale Deployment</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left — image */}
                <div className="lg:col-span-7">
                  <img
                    src="/products/unity-model-c-engineered.webp"
                    alt="UNITY Model C utility-scale containerized BESS"
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Right — feature list */}
                <div className="lg:col-span-5">
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Layers, text: 'Intelligent Liquid Cooling System balances temp. & extends battery life' },
                      { icon: Box, text: 'High expansion flexibility upto 6.25 MWh with Modular design' },
                      { icon: Mountain, text: 'Suitable for installation and use in a variety of environments' },
                      { icon: ShieldCheck, text: 'BMS, fire protection system, real-time monitoring system' },
                      { icon: Cpu, text: 'Intelligent control, cloud monitoring & EMS integration for anti-backflow function and battery status management' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
                        </div>
                        <p className="text-sm text-text-primary leading-snug font-medium pt-1.5">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* About Unity Model C — only shown on Model C detail page */}
          {product.id === 'model-c' && (
            <Reveal animation="fade-up" className="mt-12 max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                  <Battery className="w-4 h-4 text-accent" />
                </div>
                <h2 className="text-xl font-extrabold text-text-primary tracking-tight">About Unity Model C</h2>
              </div>
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>
                  Unity Model C is a fully integrated and containerized energy storage solution designed for utility and large-scale renewable energy projects. Each container includes batteries, PCS, intelligent cooling, thermal management, and advanced fire protection systems, creating a safe, reliable, and ready-to-use setup.
                </p>
                <p>
                  Built with a modular and transportable design, Unity Model C allows quick installation, easy scalability, and smooth operation. Its high-protection outdoor structure ensures dependable performance in different environmental conditions while keeping maintenance simple.
                </p>
                <p>
                  With support for grid stabilization, peak load management, renewable energy integration, frequency regulation, and backup power, Unity Model C is an ideal solution for modern energy infrastructure and large solar projects requiring high performance, safety, and flexibility.
                </p>
              </div>
            </Reveal>
          )}
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
                  href={`/products/${p.id}`}
                  className="group relative block rounded-2xl overflow-hidden h-60 cursor-pointer"
                >
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
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
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[28px_28px]"></div>
        <div className="absolute -top-25 -right-12.5 w-75 h-75 bg-brand-green/8 rounded-full blur-[100px]"></div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight leading-[1.1]">
            Interested in the <span className="text-brand-blue-light">{product.name}</span>?
          </h2>
          <p className="text-sm text-white mb-8 leading-relaxed max-w-md mx-auto">
            Get in touch for specialized pricing, technical consultation, and custom configuration options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="btn-pill btn-unity text-sm">
              Talk to Engineering <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="btn-pill text-sm text-white border-1.5 border-white hover:bg-white/10 transition-all">
              How It Works <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Model A Variant Datasheet Modal */}
      {activeVariant && <DatasheetModal product={activeVariant} onClose={() => setActiveVariant(null)} />}
    </div>
  );
}
