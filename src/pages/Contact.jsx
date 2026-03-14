import { Mail, Phone, MapPin, ArrowRight, Clock, Send, Shield, Zap, Globe } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  return (
    <div className="bg-bg-deep min-h-screen pt-14">
      {/* Hero */}
      <section className="relative pt-10 pb-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-100 bg-accent/5 blur-[120px] rounded-full -z-10 opacity-40"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading
            badge="Get In Touch"
            title="Let's power your next project."
            subtitle="Whether you're evaluating solutions, need a demo, or have a specific question — our team typically responds within 2 hours."
          />
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-4">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Mail, title: 'Email', val: 'solutions@unityess.com' },
              { icon: Phone, title: 'Phone', val: '+1 (800) 555-UNITY' },
              { icon: MapPin, title: 'Office', val: 'Energy Innovation Park, CA' },
              { icon: Clock, title: 'Hours', val: 'Mon-Fri, 9am-6pm PST' },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 bg-white rounded-xl border border-border p-3.5 hover:border-accent/30 hover:shadow-sm transition-all group">
                <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-all">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">{item.title}</p>
                  <p className="text-xs font-semibold text-text-primary truncate">{item.val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Side Info */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <Send className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary tracking-tight">Send us a message</h3>
                    <p className="text-xs text-text-tertiary">We'll get back to you within 2 business hours.</p>
                  </div>
                </div>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-bg-deep border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-bg-deep border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Work Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-bg-deep border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Company</label>
                    <input type="text" placeholder="Acme Corp" className="w-full bg-bg-deep border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Interested In</label>
                    <select className="w-full bg-bg-deep border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all appearance-none cursor-pointer">
                      <option>Select a solution...</option>
                      <option>Industrial BESS Solutions</option>
                      <option>Commercial Energy Storage</option>
                      <option>Residential Backup Systems</option>
                      <option>Distribution Partnership</option>
                      <option>Custom Enterprise Solution</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Message</label>
                    <textarea rows="3" placeholder="Tell us about your project and what you're trying to accomplish..." className="w-full bg-bg-deep border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary resize-none"></textarea>
                  </div>
                  <div className="sm:col-span-2 pt-1">
                    <button type="button" className="btn-pill btn-unity w-full">
                      Send Message <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Side Info */}
            <div className="lg:col-span-2 space-y-4">
              {/* Why Contact Us */}
              <div className="bg-[#062b50] rounded-2xl p-6 text-white">
                <h4 className="text-sm font-bold mb-4 tracking-tight">Why work with UnityESS?</h4>
                <div className="space-y-3">
                  {[
                    { icon: Zap, text: 'Custom-engineered solutions for your exact energy needs' },
                    { icon: Shield, text: 'Industry-leading safety with LFP cell technology' },
                    { icon: Globe, text: 'Global deployment with 24/7 remote monitoring' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-3.5 h-3.5 text-white/80" />
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl border border-border p-6">
                <h4 className="text-sm font-bold text-text-primary mb-4 tracking-tight">By the numbers</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { stat: '500+', label: 'Systems Deployed' },
                    { stat: '30+', label: 'Countries Served' },
                    { stat: '99.9%', label: 'System Uptime' },
                    { stat: '<2hr', label: 'Avg Response Time' },
                  ].map((item) => (
                    <div key={item.label} className="bg-bg-deep rounded-xl p-3 text-center">
                      <p className="text-lg font-extrabold text-accent">{item.stat}</p>
                      <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trusted note */}
              <div className="bg-accent/5 rounded-2xl border border-accent/15 p-5 text-center">
                <p className="text-xs text-text-secondary leading-relaxed">
                  <span className="font-bold text-text-primary">Trusted by enterprises worldwide.</span><br />
                  From startups to Fortune 500 — we scale energy solutions to match your ambition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
