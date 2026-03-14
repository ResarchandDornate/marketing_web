import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, Globe, Lightbulb, Shield, Leaf, Heart, ArrowRight, Linkedin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Pushing the boundaries of energy storage technology with continuous R&D.' },
  { icon: Shield, title: 'Safety First', desc: 'Rigorous safety testing with multi-layer protection in every product.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Recyclable LiFePO4 batteries and eco-friendly manufacturing.' },
  { icon: Heart, title: 'Customer Focus', desc: 'Responsive support, custom solutions, and dedicated project management.' },
];

const milestones = [
  { year: '2018', event: 'UnityESS founded with a vision for accessible energy storage' },
  { year: '2019', event: 'First residential ESS product launched' },
  { year: '2020', event: 'Expanded to commercial & industrial solutions' },
  { year: '2021', event: 'Reached 100+ installations across 20 countries' },
  { year: '2022', event: 'Launched containerized utility-scale BESS' },
  { year: '2023', event: 'Surpassed 1 GWh of total deployed capacity' },
  { year: '2024', event: 'Expanded to 50+ countries with 500+ installations' },
  { year: '2025', event: 'Next-gen product lines with AI-powered BMS' },
];

const certs = ['UL 9540', 'IEC 62619', 'UN38.3', 'CE', 'TUV', 'ISO 9001', 'ISO 14001', 'ISO 45001'];

export default function About() {
  return (
    <div className="bg-bg-deep min-h-screen pt-14">
      {/* Hero */}
      <section className="relative pt-12 pb-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-accent/5 blur-[120px] rounded-full -z-10 opacity-60"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading
            badge="Our Story"
            title="Empowering with clean energy."
            subtitle="UnityESS is a global leader in energy storage solutions, delivering safe, reliable, and scalable systems for a sustainable future."
          />
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading badge="Leadership" title="Meet our director." subtitle="The visionary driving UnityESS forward." />
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start bg-bg-deep rounded-2xl border border-border overflow-hidden">
              <div className="md:w-[280px] shrink-0">
                <img
                  src="/products/Aditya-400x400.jpg"
                  alt="Aditya Goel"
                  className="w-full h-full object-cover md:min-h-[320px]"
                />
              </div>
              <div className="p-6 md:py-8 md:pr-8 md:pl-6">
                <h3 className="text-xl font-bold text-text-primary tracking-tight">Aditya Goel</h3>
                <div className="w-12 h-0.5 bg-brand-orange rounded-full my-3"></div>
                <p className="text-sm font-bold text-brand-green mb-3">Executive Director</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Aditya joined Business after completing his Engineering from IIT Varanasi in 2008, starting his career in the Automobile Trade with the coveted association with Tata Motors Ltd & Fiat India Automobiles in Delhi-NCR. He has first-hand experience of what goes into the 'Building of a Brand' and was interviewed by the Respected Dr. Kevin Frieberg to provide insights for his international publication "NANOVATION: How a Small car is teaching the World to Think Big". A keen follower of the evolving technological trends which are redefining business, and inspired by our Hon'ble Prime Minister Shri Narendra Modi's call to all citizens to 'Leave our Country better than we inherit it', he has embarked upon the mission to promote and establish Solar Energy as an affordable and cost-effective 'Plurality of Power' in the coming decade through Ornate Solar's "Future Energy Solutions"
                </p>
                <a
                  href="https://www.linkedin.com/in/aditya-goel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white hover:bg-brand-blue transition-colors mt-4"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="feat-card !rounded-3xl !p-8 lg:!p-10">
              <div className="w-12 h-12 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center mb-6">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Our Mission</h3>
              <p className="text-base text-text-secondary leading-relaxed">
                To accelerate the global transition to clean energy by providing accessible, safe,
                and high-performance solutions that enable energy independence worldwide.
              </p>
            </div>
            <div className="feat-card !rounded-3xl !p-8 lg:!p-10">
              <div className="w-12 h-12 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center mb-6">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Our Vision</h3>
              <p className="text-base text-text-secondary leading-relaxed">
                A world where clean, reliable energy storage is available to everyone — powering homes,
                businesses, and infrastructure with sustainable technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading badge="Core Values" title="What drives us." subtitle="Our core values guide every decision we make." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="feat-card group">
                <div className="w-12 h-12 rounded-xl bg-bg-deep border border-border flex items-center justify-center mb-5 group-hover:bg-accent/8 group-hover:border-accent/20 transition-all">
                  <v.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">{v.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeading badge="Timeline" title="Our journey." subtitle="From a startup vision to a global leader." />
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
            {milestones.map((m) => (
              <div key={m.year} className="relative flex gap-8 pb-10 last:pb-0 group">
                <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-border group-hover:border-accent flex items-center justify-center shrink-0 transition-colors shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="pt-2">
                  <span className="text-xs text-accent font-bold tracking-widest uppercase">{m.year}</span>
                  <p className="text-base text-text-primary mt-1 font-medium group-hover:text-accent transition-colors">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeading title="Certifications." subtitle="Our products meet international safety and performance standards." />
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {certs.map((c) => (
              <div key={c} className="flex items-center gap-2 px-4 py-2.5 bg-bg-deep rounded-xl border border-border hover:border-accent/30 transition-all shadow-sm">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold tracking-wider text-text-primary uppercase">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { icon: Globe, val: '50+', label: 'Countries Served' },
              { icon: Users, val: '500+', label: 'Installations' },
              { icon: Award, val: '2 GWh', label: 'Deployed Capacity' },
            ].map((s) => (
              <div key={s.label} className="group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center mx-auto mb-5 group-hover:border-accent/30 transition-all shadow-sm">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-4xl font-extrabold text-text-primary mb-2 tracking-tight">{s.val}</div>
                <div className="text-xs text-text-tertiary uppercase tracking-widest font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-text-primary">Partner with <span className="text-brand-green">UnityESS.</span></h2>
          <p className="text-base text-text-secondary mb-8 leading-relaxed">Join our global network of distributors and energy partners to shape the future of power.</p>
          <Link to="/contact" className="btn-pill btn-unity">Get in Touch <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
}
