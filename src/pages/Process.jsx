import { Link } from 'react-router-dom';
import { MessageSquare, ClipboardList, Cog, Truck, Wrench, Headphones, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const steps = [
  { icon: MessageSquare, title: 'Consultation', desc: 'Share your energy requirements, site conditions, and goals. Our experts analyze your needs.' },
  { icon: ClipboardList, title: 'System Design', desc: 'Custom system architecture, component sizing, and integration planning tailored to you.' },
  { icon: Cog, title: 'Manufacturing', desc: 'Precision cell matching & assembly with rigorous quality control at every stage.' },
  { icon: Truck, title: 'Delivery', desc: 'Safe, insured global shipping with real-time tracking. Systems arrive ready to install.' },
  { icon: Wrench, title: 'Installation', desc: 'Professional installation by certified technicians with full system commissioning.' },
  { icon: Headphones, title: 'Ongoing Support', desc: '24/7 remote monitoring, predictive maintenance alerts, and firmware updates.' },
];

export default function Process() {
  return (
    <div className="bg-bg-deep min-h-screen pt-14">
      <section className="relative pt-12 pb-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-100 bg-accent/5 blur-[120px] rounded-full -z-10 opacity-30"></div>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeading
            badge="Our Process"
            title="How it works."
            subtitle="From consultation to commissioning — our streamlined process ensures the perfect solution for your energy needs."
          />
        </div>
      </section>

      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, idx) => (
              <div key={step.title} className="feat-card group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-3xl font-extrabold text-black/5 group-hover:text-accent/10 transition-colors">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Energy Storage Solution Works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            title="How Energy Storage Solution Works."
            subtitle="From grid-connected commercial systems to solar-integrated and EV charging solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Commercial & Industrial Battery Energy Storage Solution', desc: 'Store excess energy and cut costs in factories, offices and manufacturing units by shifting energy use during high-demand periods.', img: '/products/how-works1.jpeg' },
              { title: 'Industrial & Commercial Optical Integration', desc: 'Maximize solar self-consumption and reduce curtailment by integrating battery energy storage solution into existing photovoltaic systems.', img: '/products/how-works2.png' },
              { title: 'Optical Energy Storage & Charging Systems', desc: 'Support EV charging networks by efficiently storing clean energy, reducing peak loads, and enhancing power quality.', img: '/products/how-work3.png' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-bold text-text-primary mb-2 tracking-tight">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">{item.desc}</p>
                <img src={item.img} alt={item.title} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-text-primary">Ready to get started?</h2>
          <p className="text-base text-text-secondary mb-8 leading-relaxed">Let our engineering experts design a custom energy storage solution tailored to your specific infrastructure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-pill btn-unity">Begin Consultation <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/products" className="btn-pill btn-unity-outline">Explore Products First</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
