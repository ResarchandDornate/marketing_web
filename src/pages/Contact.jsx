import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Clock, Send, Shield, Zap, Globe } from 'lucide-react';
import Reveal, { RevealItem } from '../components/Reveal';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    firstName,
    lastName,
    email,
    company,
    interestedIn,
    message,
  };

  setLoading(true);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwGlQvb8Fj-A1IOHLp-XuP9asuX3ZB9lnkqiNCu3ex44zRZdVzuzn0NUgFd-Q0Yt1qj8g/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setCompany("");
      setInterestedIn("");
      setMessage("");

      e.target.reset();

      alert("Query submitted successfully!");
    } else {
      alert("Submission failed. Please try again.");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Network error occurred.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen">
      {/* Hero — dark */}
      <section className="relative bg-[#070E1A] pt-28 pb-12 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-accent/10 blur-[160px] rounded-full -z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-500/8 blur-[140px] rounded-full -z-0 pointer-events-none"></div>
        <Reveal animation="fade-up" className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-accent bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">Get In Touch</span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-5">Let's power your next project.</h1>
          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">Whether you're evaluating solutions, need a demo, or have a specific question — our team typically responds within 2 hours.</p>
        </Reveal>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal stagger staggerDelay={100} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Mail, title: 'Email', val: 'solutions@unityess.com' },
              { icon: Phone, title: 'Phone', val: '+1 (800) 555-UNITY' },
              { icon: MapPin, title: 'Office', val: 'Energy Innovation Park, CA' },
              { icon: Clock, title: 'Hours', val: 'Mon-Fri, 9am-6pm PST' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up" className="flex items-center gap-3 bg-gradient-to-br from-white to-[#f5f7fa] rounded-xl border border-border p-3.5 hover:border-accent/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-all">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">{item.title}</p>
                  <p className="text-xs font-semibold text-text-primary truncate">{item.val}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Form + Side Info */}
      <section className="py-10 bg-[#f5f7fa]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <Reveal animation="fade-right" duration={800} className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-accent/8 border border-accent/15 flex items-center justify-center">
                    <Send className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary tracking-tight">Send us a message</h3>
                    <p className="text-xs text-text-tertiary">We'll get back to you within 2 business hours.</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">First Name</label>
                    <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Last Name</label>
                    <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Work Email</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@company.com" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Company</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Corp" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Interested In</label>
                    <select value={interestedIn} onChange={(e) => setInterestedIn(e.target.value)} className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all appearance-none cursor-pointer">
                      <option value="">Select a solution...</option>
                      <option value="Industrial BESS Solutions">Industrial BESS Solutions</option>
                      <option value="Commercial Energy Storage">Commercial Energy Storage</option>
                      <option value="Residential Backup Systems">Residential Backup Systems</option>
                      <option value="Distribution Partnership">Distribution Partnership</option>
                      <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Message</label>
                    <textarea rows="3" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project and what you're trying to accomplish..." className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary resize-none"></textarea>
                  </div>
                  <div className="sm:col-span-2 pt-1">
                    <button type="submit" disabled={loading} className="btn-pill btn-unity w-full">
                      {loading ? 'Sending...' : 'Send Message'} {!loading && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>

            {/* Side Info */}
            <div className="lg:col-span-2 space-y-4">
              {/* Why Contact Us */}
              <Reveal animation="fade-left" delay={100}>
                <div className="bg-brand-blue-dark rounded-2xl p-6 text-white">
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
              </Reveal>

              {/* Quick Stats */}
              <Reveal animation="fade-left" delay={200}>
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6">
                  <h4 className="text-sm font-bold text-text-primary mb-4 tracking-tight">By the numbers</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { stat: '500+', label: 'Systems Deployed' },
                      { stat: '30+', label: 'Countries Served' },
                      { stat: '99.9%', label: 'System Uptime' },
                      { stat: '<2hr', label: 'Avg Response Time' },
                    ].map((item) => (
                      <div key={item.label} className="bg-accent/5 rounded-xl p-3 text-center border border-accent/10">
                        <p className="text-lg font-extrabold text-accent">{item.stat}</p>
                        <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-wider mt-0.5">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Trusted note */}
              <Reveal animation="fade-left" delay={300}>
                <div className="bg-accent/5 rounded-2xl border border-accent/15 p-5 text-center">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    <span className="font-bold text-text-primary">Trusted by enterprises worldwide.</span><br />
                    From startups to Fortune 500 — we scale energy solutions to match your ambition.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
