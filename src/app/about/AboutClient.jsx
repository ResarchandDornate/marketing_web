"use client";
import Link from 'next/link';
import { Target, Eye, Award, Users, Globe, Lightbulb, Shield, Leaf, Heart, ArrowRight, Linkedin } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';
import Reveal, { RevealItem } from '../../components/Reveal';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Pushing the boundaries of energy storage technology with continuous R&D.' },
  { icon: Shield, title: 'Safety First', desc: 'Rigorous safety testing with multi-layer protection in every product.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Recyclability LiFePO4 batteries and eco-friendly manufacturing.' },
  { icon: Heart, title: 'Customer Focus', desc: 'Responsive support, custom solutions, and dedicated project management.' },
];

const milestones = [
  { year: '2015', event: 'Ornate Agencies diversifies operations into renewable energy sector.' },
  { year: '2017', event: 'Inverted Energy founded by IIT engineers — Li-ion battery R&D begins' },
  { year: '2019', event: 'Rapid scale-up — becomes one of India\'s largest lithium battery companies' },
  { year: '2020', event: 'Ornate Agencies recognized as an AEO-T3 certified organisation for 2020' },
  { year: '2021', event: 'Portfolio expands from 12V to MW-scale battery systems' },
  { year: '2023', event: 'Ornate Agencies R&D lab becomes DSIR-certified by the Government of India' },
  { year: '2024', event: 'Unity ESS launched — integrated BESS platform for C&I, utility & residential' },
  { year: '2025', event: '6.5 GWh manufacturing facility — 1.25 lakh sq. ft., 100km from Delhi' },
];

const team = [
  { name: 'Dhatresh Patnam', role: 'Team Member', img: '/products/dhatresh-patnam-unityess-team.webp' },
  { name: 'Fateh Brar', role: 'Team Member', img: '/products/fateh-brar-unityess-team.webp' },
  { name: 'Kedar Balasubarmanayam', role: 'Team Member', img: '/products/kedar-balasubarmanayam-unityess-team.webp' },
  { name: 'Vishal Pundir', role: 'Team Member', img: '/products/vishal-pundir-unityess-team.webp' },
];

const certs = ['UL 9540', 'IEC 62619', 'UN38.3', 'CE', 'TUV', 'ISO 9001', 'ISO 14001', 'ISO 45001'];

export default function AboutClient() {
  return (
    <div className="bg-bg-deep min-h-screen pt-8">
      {/* Hero */}
      <section className="relative bg-[rgb(58,88,129)] pt-15 pb-14 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-125 h-125 bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-15 right-1/4 w-100 h-100 bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <Reveal animation="fade-up" className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full  text-xs font-bold tracking-widest uppercase text-white mb-6">Our Story</div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">Empowering with clean energy.</h1>
          <p className="text-sm text-white max-w-2xl mx-auto leading-relaxed">UnityESS is a global leader in energy storage solutions, delivering safe, reliable, and scalable systems for a sustainable future.</p>
        </Reveal>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal animation="fade-up">
            <SectionHeading title="Meet our leaders." subtitle="The visionaries driving UnityESS forward." />
          </Reveal>

          {/* Aditya Goel */}
          <Reveal animation="fade-right" duration={800} className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start bg-bg-deep rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="md:w-70 shrink-0">
                <img
                  src="/products/aditya-goel-unityess-executive-director.webp"
                  alt="Aditya Goel"
                  className="w-full h-full object-cover md:min-h-80"
                />
              </div>
              <div className="p-6 md:py-8 md:pr-8 md:pl-6">
                <h3 className="text-lg font-bold text-text-primary tracking-tight">Aditya Goel</h3>
                <div className="w-12 h-0.5 bg-brand-orange rounded-full my-3"></div>
                <p className="text-sm font-bold text-brand-green mb-3">Executive Director</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Aditya joined Business after completing his Engineering from IIT Varanasi in 2008, starting his career in the Automobile Trade with the coveted association with Tata Motors Ltd & Fiat India Automobiles in Delhi-NCR.

                  A keen follower of the evolving technological trends which are redefining business, he founded Ornate Solar in 2014 - Future Energy Solutions in 2015, which has annual turnover of over 500 crores and is dedicated to creating innovative solar solutions.

                  Following his passion to be part of India's journey in Energy Independence, he co-founded Inverted Energy Pvt Ltd in 2018 which is amongst the most respected Lithium battery manufacturing companies in India. He is also among the founding members of ClenHedge Verde Pvt Ltd which does Captive and Open Access Projects.
                </p>
                <a
                  href="https://www.linkedin.com/in/aditya-goel-7184368?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
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
              <div className="md:w-70 shrink-0">
                <img
                  src="/products/raghav-jain-unityess-co-founder.webp"
                  alt="Raghav Jain"
                  className="w-full h-full object-cover md:min-h-80"
                />
              </div>
              <div className="p-6 md:py-8 md:pr-8 md:pl-6">
                <h3 className="text-lg font-bold text-text-primary tracking-tight">Raghav Jain</h3>
                <div className="w-12 h-0.5 bg-brand-orange rounded-full my-3"></div>
                <p className="text-sm font-bold text-brand-green mb-3">Co-Founder</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Raghav Jain is an entrepreneur and startup founder based in Delhi, currently serving as the Co-Founder of Inverted, a technology-driven venture. He is an alumnus of Indian Institute of Technology (BHU) and has a background in engineering and technology innovation. His professional focus lies in building products and businesses in the startup ecosystem, with interests in technology, growth, and digital platforms. Through his work, he engages with founders, investors, and operators to develop scalable solutions. Jain is also active in the startup community, contributing to discussions around product building and entrepreneurship.
                </p>
                <a
                  href="https://www.linkedin.com/in/raghavjain1?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
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
              <div className="md:w-70 shrink-0">
                <img
                  src="/products/rahul-raj-unityess-business-analyst.webp"
                  alt="Rahul Raj"
                  className="w-full h-full object-cover md:min-h-80"
                />
              </div>
              <div className="p-6 md:py-8 md:pr-8 md:pl-6">
                <h3 className="text-lg font-bold text-text-primary tracking-tight">Rahul Raj</h3>
                <div className="w-12 h-0.5 bg-brand-orange rounded-full my-3"></div>
                <p className="text-sm font-bold text-brand-green mb-3">Business Analyst</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Rahul Raj is a professional with experience in business analytics, sales strategy, and marketing analytics, often working at the intersection of data and business decision-making. He has worked as a business analyst and consultant, including roles related to incentive compensation analytics and strategic insights. Alongside his corporate career, he describes himself as an engineer, poet, and energy enthusiast, reflecting a mix of analytical and creative interests. His work typically involves leveraging data to support organizational strategy and performance improvement.
                </p>
                <a
                  href="https://www.linkedin.com/in/rajrahul?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
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
      <section className="py-10 bg-[#f5f7fa]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal animation="fade-up" className="text-center mb-8">
            <p className="text-[18px] font-bold text-brand-blue-dark uppercase tracking-widest mb-1">Our Team</p>
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">The people behind UnityESS.</h2>
          </Reveal>
          <Reveal stagger staggerDelay={150} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {team.map((member) => (
              <RevealItem key={member.name} animation="zoom-in" className="group text-center">
                <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] h-full flex flex-col items-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3 rounded-full overflow-hidden border-2 border-border group-hover:border-accent/40 transition-all shadow-md">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-text-primary tracking-tight">{member.name}</h4>
                  <p className="text-xs text-text-secondary mt-1">{member.role}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Reveal animation="fade-right">
              <div className="rounded-xl border border-border p-5 h-full bg-bg-deep">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <Target className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary">Our Mission</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  To accelerate the global transition to clean energy by providing accessible, safe,
                  and high-performance solutions that enable energy independence worldwide.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-left" delay={150}>
              <div className="rounded-xl border border-border p-5 h-full bg-bg-deep">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary">Our Vision</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  A world where clean, reliable energy storage is available to everyone — powering homes,
                  businesses, and infrastructure with sustainable technology.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#f5f7fa] rounded-2xl border border-border shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row overflow-hidden">
            {/* Left Content */}
            <Reveal animation="fade-right" className="lg:w-[55%] p-6 sm:p-8 lg:pr-10 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full  text-[13px] font-bold tracking-widest uppercase text-brand-blue">
                  Innovation Lab
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-blue tracking-tight leading-tight">
                  Research & Development
                </h2>
                <div className="space-y-3">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    At Ornate, we dream of leading India one step closer to a sustainable future! In 2022, our in-house Research and Development facility received certification by the Department of Scientific and Industrial Research (DSIR), Government of India.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    We are collaborating closely with esteemed institutions such as <span className="text-text-primary">IIT-Delhi, IIT-BHU, FIIT & MAIT</span>, to build efficient, reliable, and cutting-edge solutions that solve the challenges of traditional electricity systems.
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-border/60">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <img
                      src="/products/dsir-logo.webp"
                      alt="DSIR Logo"
                      className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all opacity-80"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div>
                      <p className="text-[11px] font-extrabold text-text-primary uppercase tracking-wider">India's First Solar R&D Centre</p>
                      <p className="text-[11px] text-text-secondary mt-0.5 leading-relaxed">
                        Recognised by the Department of Scientific & Industrial Research (DSIR), Ministry of Science and Technology, Govt. of India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Image */}
            <Reveal animation="zoom-in" delay={200} className="lg:w-[45%] relative min-h-70">
              <img
                src="/products/unityess-research-and-development-lab.webp"
                alt="Research and Development Lab"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-l from-black/5 to-transparent pointer-events-none"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#e4e6eb]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal animation="fade-up">
            <SectionHeading badge="" title="What drives us." subtitle="Our core values guide every decision we make." />
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
      <section className="py-16 bg-[#f0f4f8] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Reveal animation="fade-up" className="text-center mb-12">
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.25em] mb-3">Our Evolution</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">From Battery Startup to Integrated BESS Platform</h2>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            {/* Center line - desktop */}
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-accent/30 to-transparent"></div>
            {/* Left line - mobile */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-accent/30 to-transparent"></div>

            <div className="space-y-6 md:space-y-0">
              {milestones.map((m, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <Reveal key={m.year} animation={isLeft ? "fade-right" : "fade-left"} delay={idx * 80} className="relative">
                    <div className={`flex items-start md:items-center ${isLeft ? '' : 'md:flex-row-reverse'}`}>

                      {/* Dot */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-20">
                        <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(0,119,182,0.3)] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                        </div>
                      </div>

                      {/* Card */}
                      <div className={`w-full md:w-[calc(50%-32px)] pl-14 md:pl-0 ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}>
                        <div className="relative bg-white border border-border/60 rounded-2xl p-5 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group">
                          {/* Connector line to dot */}
                          <div className={`hidden md:block absolute top-1/2 -translate-y-px ${isLeft ? '-right-8 w-8' : '-left-8 w-8'} h-px bg-accent/20`}></div>

                          <div className={`flex items-center gap-3 mb-2 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wide">{m.year}</span>
                          </div>
                          <p className={`text-[13px] text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors ${isLeft ? '' : 'md:text-right'}`}>{m.event}</p>
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="hidden md:block w-[calc(50%+32px)]"></div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <Reveal as="section" animation="zoom-in" className="relative py-20 bg-[rgb(58,88,129)] overflow-hidden">
        <div className="absolute -bottom-20 right-1/3 w-100 h-100 bg-[#00b853]/8 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">Partner with <span className=" text-brand-blue-light">UnityESS.</span></h2>
          <p className="text-sm text-white mb-8 leading-relaxed">Join our global network of distributors and energy partners to shape the future of power.</p>
          <Link href="/contact" className="btn-pill btn-unity">Get in Touch <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </Reveal>
    </div>
  );
}
