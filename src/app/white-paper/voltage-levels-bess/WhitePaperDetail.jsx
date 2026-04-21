'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WhitePaperDetail() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const isFormValid = firstName.trim() && lastName.trim() && email.trim() && company.trim() && phone.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://backoffice-prod.ornatesolar.com/api/';
      const response = await fetch(`${apiUrl}leads/website-lead/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          phone,
          email,
          company,
          message: 'White Paper Download: Why Voltage Levels Matter in BESS',
          website_url: 'unityess.ai',
          lead_type: 'Unityess-white-paper-01',
        }),
      });
      const data = await response.json();
      if (data.success) {
        setFirstName('');
        setLastName('');
        setEmail('');
        setCompany('');
        setPhone('');
        setStatus({ type: 'success', message: 'Your download will start shortly!' });

        const link = document.createElement('a');
        link.href = '/attachments/UnityESS_Whitepaper_Why Voltage Levels Matter.pdf';
        link.download = 'UnityESS_Whitepaper_Why_Voltage_Levels_Matter.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => setStatus({ type: '', message: '' }), 4000);
      } else {
        setStatus({ type: 'error', message: 'Submission failed. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: 'Network error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-white pt-32 pb-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/white-paper" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[rgb(58,88,129)] transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to White Papers
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            White Paper: Why Voltage Levels Matter in Battery Energy Storage Systems (BESS)
          </h1>

          <p className="text-gray-400 text-sm mt-4">By <span className="text-[rgb(58,88,129)] font-semibold">UnityESS</span></p>

          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            A Practical Framework for Choosing the Right Voltage Levels in Battery Energy Storage System Architecture
          </p>

          <div className="mt-8">
            <a href="#download" className="inline-flex items-center gap-2 bg-[rgb(58,88,129)] text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-[rgb(48,75,110)] transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Sign up for Free Download
            </a>
          </div>
        </div>
      </section>

      {/* Content Section - Tablet + Description side by side */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Tablet mockup */}
          <div className="flex justify-center">
            <div className="relative w-64 h-80 bg-gray-800 rounded-2xl shadow-2xl p-3">
              <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                <img
                  src="/products/unity-model-a-bess.webp"
                  alt="White Paper Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-3 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                  <p className="text-white text-xs font-bold leading-snug">Why Voltage Levels Matter in BESS</p>
                  <p className="text-white/50 text-[10px] mt-1">UnityESS White Paper</p>
                </div>
              </div>
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full" />
            </div>
          </div>

          {/* What's Inside - Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">What&apos;s Inside This Whitepaper?</h2>
            <div className="space-y-4 text-[15px] text-gray-600 leading-[1.8]">
              <p>
                This whitepaper provides a clear understanding of how Battery Energy Storage Systems (BESS) are designed
                and integrated into modern power systems. It focuses on the importance of choosing the right electrical
                configuration and how that decision influences overall system performance, efficiency, and reliability.
              </p>
              <p>
                It walks through different approaches used in real-world projects, explains their practical advantages
                and limitations, and helps readers understand how to select the most suitable setup based on application needs.
              </p>
              <p>
                The paper also offers a forward-looking perspective on how BESS design is evolving, highlighting emerging
                approaches that can improve performance and simplify system architecture.
              </p>
            </div>
            <div className="mt-8">
              <a href="#download" className="inline-flex items-center gap-2 text-sm font-bold text-[rgb(58,88,129)] hover:underline">
                For more insights, download our white paper
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* What's Inside - Section 2 */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">What&apos;s Inside This Whitepaper?</h2>
          <div className="space-y-4 text-[15px] text-gray-600 leading-[1.8]">
            <p>
              This whitepaper explains how Battery Energy Storage Systems (BESS) are designed and connected, and why
              these choices matter for performance and efficiency. It covers different system approaches, their practical
              use cases, and how to choose the right setup.
            </p>
            <p>
              It also highlights how BESS design is evolving with newer, more efficient architectures.
            </p>
          </div>
          <div className="mt-8">
            <a href="#download" className="inline-flex items-center gap-2 text-sm font-bold text-[rgb(58,88,129)] hover:underline">
              Download our whitepaper
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section id="download" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Sign up for free download</h2>
          <p className="text-sm text-gray-500 text-center mb-10">
            White Paper: Why Voltage Levels Matter in Battery Energy Storage Systems
          </p>

          <form className="max-w-2xl mx-auto space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[rgb(58,88,129)] focus:ring-1 focus:ring-[rgb(58,88,129)] transition-colors"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[rgb(58,88,129)] focus:ring-1 focus:ring-[rgb(58,88,129)] transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Company Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[rgb(58,88,129)] focus:ring-1 focus:ring-[rgb(58,88,129)] transition-colors"
              />
              <input
                type="text"
                placeholder="Company Name"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[rgb(58,88,129)] focus:ring-1 focus:ring-[rgb(58,88,129)] transition-colors"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[rgb(58,88,129)] focus:ring-1 focus:ring-[rgb(58,88,129)] transition-colors"
            />
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full font-bold text-sm py-3.5 rounded-lg transition-colors shadow-sm mt-2 ${
                isFormValid && !loading
                  ? 'bg-[rgb(58,88,129)] text-white hover:bg-[rgb(48,75,110)] cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {loading ? 'SUBMITTING...' : 'DOWNLOAD'}
            </button>
            {status.message && (
              <div className={`p-3 rounded-lg text-center text-sm font-semibold ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-700 border border-green-100'
                  : 'bg-red-50 text-red-700 border border-red-100'
              }`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
