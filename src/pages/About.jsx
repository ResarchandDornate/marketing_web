import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, Globe, Lightbulb, Shield, Leaf, Heart, ArrowRight, Linkedin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal, { RevealItem } from '../components/Reveal';

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

const team = [
  { name: 'Dhatresh Patnam', role: 'Team Member', img: '/products/dhatresh patnam.jpg' },
  { name: 'Fateh Brar', role: 'Team Member', img: '/products/fateh brar.jpg' },
  { name: 'Kedar Balasubarmanayam', role: 'Team Member', img: '/products/kedar balasubarmanayam.jpg' },
  { name: 'Vishal Pundir', role: 'Team Member', img: '/products/vishal pundir.png' },
];

const certs = ['UL 9540', 'IEC 62619', 'UN38.3', 'CE', 'TUV', 'ISO 9001', 'ISO 14001', 'ISO 45001'];

export default function About() {
  return (
    <div className="bg-bg-deep min-h-screen pt-14">
      {/* Hero */}
      <section className="relative bg-[#070E1A] pt-15  pb-16 overflow-hidden">
        <div className="absolute top-[-80px] left-1/4 w-[500px] h-[500px] bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-60px] right-1/4 w-[400px] h-[400px] bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <Reveal animation="fade-up" className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest uppercase text-white/50 mb-6">Our Story</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">Empowering with clean energy.</h1>
          <p className="text-base text-white/40 max-w-2xl mx-auto leading-relaxed">UnityESS is a global leader in energy storage solutions, delivering safe, reliable, and scalable systems for a sustainable future.</p>
        </Reveal>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal animation="fade-up">
            <SectionHeading badge="Leadership" title="Meet our leaders." subtitle="The visionaries driving UnityESS forward." />
          </Reveal>

          {/* Aditya Goel */}
          <Reveal animation="fade-right" duration={800} className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start bg-bg-deep rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
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
          </Reveal>

          {/* Raghav Jain */}
          <Reveal animation="fade-left" delay={100} duration={800} className="max-w-4xl mx-auto mt-6">
            <div className="flex flex-col md:flex-row items-start bg-bg-deep rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="md:w-[280px] shrink-0">
                <img
                  src="/products/raghav jain.jpg"
                  alt="Raghav Jain"
                  className="w-full h-full object-cover md:min-h-[320px]"
                />
              </div>
              <div className="p-6 md:py-8 md:pr-8 md:pl-6">
                <h3 className="text-xl font-bold text-text-primary tracking-tight">Raghav Jain</h3>
                <div className="w-12 h-0.5 bg-brand-orange rounded-full my-3"></div>
                <p className="text-sm font-bold text-brand-green mb-3">Co-Founder</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Raghav Jain is an entrepreneur and startup founder based in Delhi, currently serving as the Co-Founder of Inverted, a technology-driven venture. He is an alumnus of Indian Institute of Technology (BHU) and has a background in engineering and technology innovation. His professional focus lies in building products and businesses in the startup ecosystem, with interests in technology, growth, and digital platforms. Through his work, he engages with founders, investors, and operators to develop scalable solutions. Jain is also active in the startup community, contributing to discussions around product building and entrepreneurship.
                </p>
                <a
                  href="https://www.linkedin.com/in/raghav-jain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white hover:bg-brand-blue transition-colors mt-4"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Rahul Raj */}
          <Reveal animation="fade-right" delay={100} duration={800} className="max-w-4xl mx-auto mt-6">
            <div className="flex flex-col md:flex-row items-start bg-bg-deep rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="md:w-[280px] shrink-0">
                <img
                  src="/products/rahul raj.jpg"
                  alt="Rahul Raj"
                  className="w-full h-full object-cover md:min-h-[320px]"
                />
              </div>
              <div className="p-6 md:py-8 md:pr-8 md:pl-6">
                <h3 className="text-xl font-bold text-text-primary tracking-tight">Rahul Raj</h3>
                <div className="w-12 h-0.5 bg-brand-orange rounded-full my-3"></div>
                <p className="text-sm font-bold text-brand-green mb-3">Business Analyst</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Rahul Raj is a professional with experience in business analytics, sales strategy, and marketing analytics, often working at the intersection of data and business decision-making. He has worked as a business analyst and consultant, including roles related to incentive compensation analytics and strategic insights. Alongside his corporate career, he describes himself as an engineer, poet, and energy enthusiast, reflecting a mix of analytical and creative interests. His work typically involves leveraging data to support organizational strategy and performance improvement.
                </p>
                <a
                  href="https://www.linkedin.com/in/rahul-raj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white hover:bg-brand-blue transition-colors mt-4"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal animation="fade-up">
            <SectionHeading badge="Our Team" title="The people behind UnityESS." subtitle="Meet the talented professionals powering our mission." />
          </Reveal>
          <Reveal stagger staggerDelay={150} className="flex flex-wrap justify-center gap-10">
            {team.map((member) => (
              <RevealItem key={member.name} animation="zoom-in" className="group text-center">
                <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-accent/40 transition-all shadow-md">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-text-primary tracking-tight">{member.name}</h4>
                  <p className="text-xs text-text-secondary mt-1">{member.role}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal animation="fade-right">
              <div className="feat-card !rounded-3xl !p-8 lg:!p-10 h-full bg-gradient-to-br from-white to-[#f5f7fa]">
                <div className="w-12 h-12 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center mb-6">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Our Mission</h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  To accelerate the global transition to clean energy by providing accessible, safe,
                  and high-performance solutions that enable energy independence worldwide.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-left" delay={150}>
              <div className="feat-card !rounded-3xl !p-8 lg:!p-10 h-full bg-gradient-to-br from-white to-[#f5f7fa]">
                <div className="w-12 h-12 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center mb-6">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Our Vision</h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  A world where clean, reliable energy storage is available to everyone — powering homes,
                  businesses, and infrastructure with sustainable technology.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal animation="fade-up">
            <SectionHeading badge="Core Values" title="What drives us." subtitle="Our core values guide every decision we make." />
          </Reveal>
          <Reveal stagger staggerDelay={120} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <RevealItem key={v.title} animation="fade-up" className="feat-card group">
                <div className="w-12 h-12 rounded-xl bg-bg-deep border border-border flex items-center justify-center mb-5 group-hover:bg-accent/8 group-hover:border-accent/20 transition-all">
                  <v.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">{v.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal animation="fade-up">
            <SectionHeading badge="Timeline" title="Our journey." subtitle="From a startup vision to a global leader." />
          </Reveal>
          <Reveal stagger staggerDelay={100} className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
            {milestones.map((m) => (
              <RevealItem key={m.year} animation="fade-right" className="relative flex gap-8 pb-10 last:pb-0 group">
                <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-border group-hover:border-accent flex items-center justify-center shrink-0 transition-colors shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="pt-2">
                  <span className="text-xs text-accent font-bold tracking-widest uppercase">{m.year}</span>
                  <p className="text-base text-text-primary mt-1 font-medium group-hover:text-accent transition-colors">{m.event}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#f5f7fa]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal animation="fade-up">
            <SectionHeading title="Certifications." subtitle="Our products meet international safety and performance standards." />
          </Reveal>
          <Reveal stagger staggerDelay={80} className="flex flex-wrap justify-center gap-3 mt-8">
            {certs.map((c) => (
              <RevealItem key={c} animation="zoom-in" className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-border hover:border-accent/30 transition-all shadow-sm">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold tracking-wider text-text-primary uppercase">{c}</span>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 bg-[#070E1A] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="absolute top-[-60px] left-1/3 w-[400px] h-[400px] bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Reveal stagger staggerDelay={200} className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              { icon: Globe, val: '50+', label: 'Countries Served' },
              { icon: Users, val: '500+', label: 'Installations' },
              { icon: Award, val: '2 GWh', label: 'Deployed Capacity' },
            ].map((s) => (
              <RevealItem key={s.label} animation="fade-up" className="group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5 group-hover:border-accent/30 transition-all">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-4xl font-extrabold text-white mb-2 tracking-tight">{s.val}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{s.label}</div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section" animation="zoom-in" className="relative py-20 bg-[#070E1A] overflow-hidden">
        <div className="absolute bottom-[-80px] right-1/3 w-[400px] h-[400px] bg-[#00b853]/8 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">Partner with <span className="bg-gradient-to-r from-[#60a5fa] to-[#00b853] bg-clip-text text-transparent">UnityESS.</span></h2>
          <p className="text-base text-white/50 mb-8 leading-relaxed">Join our global network of distributors and energy partners to shape the future of power.</p>
          <Link to="/contact" className="btn-pill btn-unity">Get in Touch <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </Reveal>
    </div>
  );
}
