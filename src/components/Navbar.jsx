"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setResourcesOpen(false);
    setMobileResourcesOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const isLight = scrolled || !isHome;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/process', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ];

  const resourceLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/white-paper', label: 'White Paper' },
  ];

  const isResourceActive = resourceLinks.some((r) => pathname.startsWith(r.href));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isLight
        ? 'bg-white/90 backdrop-blur-xl border-black/5 shadow-sm py-3'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0 group">
            <img
              src="/products/unityess-logo.svg"
              alt="UnityESS"
              className={`h-6 sm:h-7 w-auto transition-all duration-500 ${isLight ? '' : 'brightness-0 invert'}`}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[14px] font-semibold tracking-wide transition-all duration-300 rounded-full ${isLight ? 'text-text-secondary hover:text-brand-blue-dark hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/10'} ${pathname === link.href && (isLight ? 'bg-black/5 text-brand-blue-dark font-bold' : 'bg-white/20 text-white font-bold')}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Resources dropdown */}
            <div
              ref={resourcesRef}
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <span
                className={`flex items-center gap-1 px-4 py-2 text-[14px] font-semibold tracking-wide transition-all duration-300 rounded-full cursor-default ${isLight ? 'text-text-secondary hover:text-brand-blue-dark hover:bg-black/5' : 'text-white/80 hover:text-white hover:bg-white/10'} ${isResourceActive && (isLight ? 'bg-black/5 text-brand-blue-dark font-bold' : 'bg-white/20 text-white font-bold')}`}
              >
                Resources
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
              </span>

              {resourcesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="w-44 bg-white rounded-xl shadow-lg border border-black/5 py-2 animate-fadeIn">
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${pathname.startsWith(link.href)
                          ? 'text-brand-blue-dark bg-brand-blue/5'
                          : 'text-text-secondary hover:text-brand-blue-dark hover:bg-gray-50'
                          }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:block ml-4 text-right">
            <Link href="/contact" className={`text-[13px] font-bold px-6 py-2.5 rounded-full transition-all shadow-sm border ${isLight ? 'bg-brand-blue-dark text-white hover:bg-brand-blue hover:shadow-md border-transparent' : 'bg-white text-brand-blue-dark hover:bg-white/90 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.3)]'}`}>
              Get A Quote
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 transition-colors ${isLight ? 'text-brand-blue-dark' : 'text-white'}`}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-t border-black/5 animate-fadeIn shadow-2xl py-6 px-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 text-base font-bold tracking-tight rounded-xl transition-all ${pathname === link.href ? 'bg-brand-blue/5 text-brand-blue-dark' : 'text-text-secondary hover:bg-gray-50 hover:text-brand-blue-dark'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Resources accordion */}
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className={`flex items-center justify-between py-3 px-4 text-base font-bold tracking-tight rounded-xl transition-all ${isResourceActive ? 'bg-brand-blue/5 text-brand-blue-dark' : 'text-text-secondary hover:bg-gray-50 hover:text-brand-blue-dark'}`}
            >
              Resources
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileResourcesOpen && (
              <div className="ml-4 flex flex-col gap-1">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2.5 px-4 text-sm font-semibold rounded-lg transition-all ${pathname.startsWith(link.href) ? 'bg-brand-blue/5 text-brand-blue-dark' : 'text-text-secondary hover:bg-gray-50 hover:text-brand-blue-dark'}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/contact" className="mt-4 block text-center bg-brand-blue-dark text-white hover:bg-brand-blue py-3 rounded-xl font-bold transition-colors">
              Get A Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
