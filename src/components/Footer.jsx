import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
/////////////changes 
export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/products/unityess-logo.svg" alt="UnityESS" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-sm">
              Building the future of energy storage — intelligent, scalable systems trusted by organizations across 50+ countries.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-bg-deep border border-border flex items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-5">Solutions</h4>
            <ul className="space-y-3">
              {['Portable', 'Residential', 'Commercial', 'Industrial'].map(item => (
                <li key={item}>
                  <Link to="/products" className="text-sm text-text-secondary hover:text-accent transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'How It Works', path: '/process' },
                { name: 'Contact', path: '/contact' },
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-text-secondary hover:text-accent transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>A-87, Okhla Phase – II<br />New Delhi</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91-1800-2026-252</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@ornatesolar.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} UnityESS. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(item => (
              <a key={item} href="#" className="text-xs text-text-tertiary hover:text-text-primary transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
