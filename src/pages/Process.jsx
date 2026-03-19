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
    <div className="min-h-screen">
      {/* Hero — dark */}
      <section className="relative bg-[#070E1A] pt-20 pb-14 overflow-hidden">
        <div className="absolute top-[-60px] left-1/4 w-[500px] h-[500px] bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-40px] right-1/4 w-[400px] h-[400px] bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <Reveal animation="fade-up" className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Our Process</div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">How it works.</h1>
          <p className="text-sm text-white/40 max-w-2xl mx-auto leading-relaxed">From consultation to commissioning — our streamlined process ensures the perfect solution for your energy needs.</p>
        </Reveal>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal stagger staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, idx) => (
              <RevealItem key={step.title} animation="fade-up" className="relative group bg-white rounded-2xl border border-border p-6 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="absolute top-3 right-4 text-5xl font-extrabold text-accent/5 group-hover:text-accent/10 transition-colors select-none pointer-events-none">0{idx + 1}</span>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-11 h-11 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* How Energy Storage Solution Works */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal animation="fade-up">
            <SectionHeading
              title="How Energy Storage Solution Works."
              subtitle="From grid-connected commercial systems to solar-integrated and EV charging solutions."
            />
          </Reveal>
          <div className="space-y-10">
            <Reveal animation="fade-right" duration={800}>
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/5 shrink-0">
                  <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">Commercial & Industrial BESS</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Store excess energy and cut costs in factories and offices by shifting energy use during high-demand periods. Our intelligent energy management system provides real-time monitoring and automated load balancing.</p>
                </div>
                <div className="md:w-3/5 bg-[#f5f7fa] rounded-xl p-6">
                  <CommercialFlow />
                </div>
              </div>
            </Reveal>
            <Reveal animation="fade-left" duration={800}>
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-2/5 shrink-0">
                  <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">Solar Integration</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Maximize solar self-consumption and reduce curtailment by integrating BESS into existing photovoltaic systems. Seamless DC-to-AC conversion with smart inverter technology ensures optimal energy utilization.</p>
                </div>
                <div className="md:w-3/5 bg-[#f5f7fa] rounded-xl p-6">
                  <SolarIntegrationFlow />
                </div>
              </div>
            </Reveal>
            <Reveal animation="fade-right" duration={800}>
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/5 shrink-0">
                  <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">EV Charging Systems</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">Support EV charging networks by efficiently storing clean energy, reducing peak loads, and enhancing power quality. Smart load controllers manage peak shaving and demand response automatically.</p>
                </div>
                <div className="md:w-3/5 bg-[#f5f7fa] rounded-xl p-6">
                  <EVChargingFlow />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <Reveal as="section" animation="zoom-in" className="relative py-20 bg-[#070E1A] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">Ready to <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">get started</span>?</h2>
          <p className="text-base text-white/50 mb-8 leading-relaxed">Let our engineering experts design a custom energy storage solution tailored to your specific infrastructure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-pill btn-unity">Begin Consultation <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/products" className="btn-pill bg-transparent text-white/60 border border-white/15 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">Explore Products First</Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
