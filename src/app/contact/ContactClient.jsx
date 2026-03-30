"use client";
import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Clock, Send, Shield, Zap, Globe } from 'lucide-react';
import Reveal, { RevealItem } from '../../components/Reveal';

export default function ContactClient() {
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: firstName,
      phone,
      email,
      company,
      message,
      website_url: "unityess.ai",
      lead_type: "Unityess",
    };
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://backoffice-prod.ornatesolar.com/api/";
      const response = await fetch(`${apiUrl}leads/website-lead/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (data.success) {
        setFirstName("");
        setPhone("");
        setEmail("");
        setCompany("");
        setMessage("");
        setStatus({ type: 'success', message: 'Query submitted successfully!' });
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 2000);
      } else {
        setStatus({ type: 'error', message: 'Submission failed. Please try again.' });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ type: 'error', message: 'Network error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero — dark */}
      <section className="relative bg-[rgb(58,88,129)] pt-20 pb-14 overflow-hidden">
        <div className="absolute top-[-60px] left-1/4 w-[500px] h-[500px] bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-40px] right-1/3 w-[400px] h-[400px] bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <Reveal animation="fade-up" className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5   text-xs font-bold tracking-widest uppercase text-white mb-6">Get In Touch</div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">Let's power your next project.</h1>
          <p className="text-sm text-white max-w-2xl mx-auto leading-relaxed">Whether you're evaluating solutions, need a demo, or have a specific question — our team typically responds within 2 hours.</p>
        </Reveal>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal stagger staggerDelay={100} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Mail, title: 'Email', val: 'info@ornatesolar.com' },
              { icon: Phone, title: 'Phone', val: '+91-1800-2026-252' },
              { icon: MapPin, title: 'Office', val: 'A-87, Okhla Phase-II, New Delhi' },
              // { icon: Clock, title: 'Hours', val: 'Mon-Fri, 9am-6pm IST' },
            ].map((item) => (
              <RevealItem key={item.title} animation="fade-up" className="flex items-center gap-3 bg-gradient-to-br from-white to-[#f5f7fa] rounded-xl border border-border p-3.5 hover:border-accent/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-9 h-9 rounded-lg bg-accent/8 border border-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-all">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">{item.title}</p>
                  <p className="text-xs font-semibold text-text-primary">{item.val}</p>
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
                    <label className="text-sm font-semibold text-text-primary">Your Name <span className="text-red-500">*</span></label>
                    <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your name" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-text-primary">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-text-primary">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-text-primary">Organization</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your company name" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-sm font-semibold text-text-primary">Requirement</label>
                    <textarea rows="3" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your energy storage requirements..." className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary resize-none"></textarea>
                  </div>
                  <div className="sm:col-span-2 pt-1">
                    <button type="submit" disabled={loading} className="btn-pill btn-unity w-full">
                      {loading ? 'Sending...' : 'Send Message'} {!loading && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                  {status.message && (
                    <div className={`sm:col-span-2 p-3 rounded-xl text-center text-sm font-semibold transition-all ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
                      }`}>
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </Reveal>

            {/* Side Info */}
            <div className="lg:col-span-2 space-y-4">
              {/* Why Contact Us */}
              <Reveal animation="fade-left" delay={100}>
                <h4 className="text-sm font-bold mb-3 tracking-tight text-text-primary">Why work with UnityESS?</h4>
                <div className="space-y-2.5">
                  {[
                    { icon: Zap, text: 'Custom-engineered solutions for your exact energy needs' },
                    { icon: Shield, text: 'Industry-leading safety with LFP cell technology' },
                    { icon: Globe, text: 'Global deployment with 24/7 remote monitoring' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 px-4 py-3.5 bg-white shadow-sm rounded-xl border border-border hover:border-accent/20 hover:shadow-md transition-all group">
                      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent to-brand-green shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{item.text}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
