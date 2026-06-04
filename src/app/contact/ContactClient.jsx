"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, ArrowRight, Send, Shield, Zap, Globe } from 'lucide-react';
import Reveal, { RevealItem } from '../../components/Reveal';

export default function ContactClient() {
  const searchParams = useSearchParams();
  const datasheetUrl = searchParams.get('datasheet');
  const datasheetName = searchParams.get('product');

  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Scroll to form when arriving with a datasheet request
  useEffect(() => {
    if (datasheetUrl) {
      setTimeout(() => {
        const form = document.getElementById('contact-form');
        if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [datasheetUrl]);

  const triggerDatasheetDownload = () => {
    if (!datasheetUrl) return;
    const link = document.createElement('a');
    link.href = datasheetUrl;
    link.download = '';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: firstName,
      phone,
      email,
      company,
      remark: useCase,
      message,
      website_url: "unityess.ai",
      lead_type: datasheetUrl ? "Unityess-Datasheet-Download" : "Unityess",
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
        setUseCase("");
        setMessage("");
        if (datasheetUrl) {
          triggerDatasheetDownload();
          setStatus({ type: 'success', message: 'Thank you! Your datasheet is downloading.' });
        } else {
          setStatus({ type: 'success', message: 'Query submitted successfully!' });
        }
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 3000);
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
        <div className="absolute -top-15 left-1/4 w-125 h-125 bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-10 right-1/3 w-100 h-100 bg-accent/6 blur-[150px] rounded-full pointer-events-none"></div>
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
              <RevealItem key={item.title} animation="fade-up" className="flex items-center gap-3 bg-linear-to-br from-white to-[#f5f7fa] rounded-xl border border-border p-3.5 hover:border-accent/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
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

      {/* Complaint banner */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pb-4">
          <a
            href="https://service.unityess.cloud/report?brand=unityess"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-linear-to-r from-[rgb(58,88,129)] to-[rgb(48,75,110)] rounded-xl px-5 py-3.5 text-white hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-white/90 shrink-0" />
              <div>
                <p className="text-sm font-bold">Have a service issue?</p>
                <p className="text-xs text-white/75">File a complaint and our support team will get back to you.</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-[rgb(58,88,129)] px-4 py-2 rounded-full whitespace-nowrap group-hover:bg-gray-100 transition-colors">
              File a Complaint <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
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
                    <h3 className="text-base font-bold text-text-primary tracking-tight">
                      {datasheetUrl ? `Download ${datasheetName || 'Datasheet'}` : 'Send us a message'}
                    </h3>
                    <p className="text-xs text-text-tertiary">
                      {datasheetUrl
                        ? 'Share your details below and the datasheet will download automatically.'
                        : "We'll get back to you within 2 business hours."}
                    </p>
                  </div>
                </div>

                <form id="contact-form" onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <label className="text-sm font-semibold text-text-primary">Remarks / Use Case</label>
                    <input type="text" value={useCase} onChange={(e) => setUseCase(e.target.value)} placeholder="e.g. Factory / Office / Hospitality" className="w-full bg-[#f5f7fa] border border-border rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/8 transition-all placeholder:text-text-tertiary" />
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
                      <div className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-accent to-brand-green shrink-0 group-hover:scale-125 transition-transform" />
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
