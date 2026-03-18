import { Link } from 'react-router-dom';
import { MessageSquare, ClipboardList, Cog, Truck, Wrench, Headphones, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { CommercialFlow, SolarIntegrationFlow, EVChargingFlow } from '../components/EnergyFlowDiagram';
import Reveal, { RevealItem } from '../components/Reveal';

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
        <Reveal animation="fade-up" className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeading
            badge="Our Process"
            title="How it works."
            subtitle="From consultation to commissioning — our streamlined process ensures the perfect solution for your energy needs."
          />
        </Reveal>
      </section>

      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal stagger staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, idx) => (
              <RevealItem key={step.title} animation="fade-up" className="feat-card group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-3xl font-extrabold text-black/5 group-hover:text-accent/10 transition-colors">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How Energy Storage Solution Works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal animation="fade-up">
            <SectionHeading
              title="How Energy Storage Solution Works."
              subtitle="From grid-connected commercial systems to solar-integrated and EV charging solutions."
            />
          </Reveal>
          <div className="space-y-10">
            <Reveal animation="fade-right" duration={800}>
              <div className="bg-white rounded-2xl border border-border p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/5 shrink-0">
                  <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">Commercial & Industrial BESS</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Store excess energy and cut costs in factories and offices by shifting energy use during high-demand periods. Our intelligent energy management system provides real-time monitoring and automated load balancing.</p>
                </div>
                <div className="md:w-3/5 bg-bg-deep rounded-xl p-6">
                  <CommercialFlow />
                </div>
              </div>
            </Reveal>
            <Reveal animation="fade-left" duration={800}>
              <div className="bg-white rounded-2xl border border-border p-8 shadow-sm flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-2/5 shrink-0">
                  <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">Solar Integration</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Maximize solar self-consumption and reduce curtailment by integrating BESS into existing photovoltaic systems. Seamless DC-to-AC conversion with smart inverter technology ensures optimal energy utilization.</p>
                </div>
                <div className="md:w-3/5 bg-bg-deep rounded-xl p-6">
                  <SolarIntegrationFlow />
                </div>
              </div>
            </Reveal>
            <Reveal animation="fade-right" duration={800}>
              <div className="bg-white rounded-2xl border border-border p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/5 shrink-0">
                  <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">EV Charging Systems</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Support EV charging networks by efficiently storing clean energy, reducing peak loads, and enhancing power quality. Smart load controllers manage peak shaving and demand response automatically.</p>
                </div>
                <div className="md:w-3/5 bg-bg-deep rounded-xl p-6">
                  <EVChargingFlow />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal as="section" animation="zoom-in" className="py-20 bg-white border-t border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-text-primary">Ready to get started?</h2>
          <p className="text-base text-text-secondary mb-8 leading-relaxed">Let our engineering experts design a custom energy storage solution tailored to your specific infrastructure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-pill btn-unity">Begin Consultation <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/products" className="btn-pill btn-unity-outline">Explore Products First</Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
