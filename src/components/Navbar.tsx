import React, { useState, useEffect } from 'react';
import { Flame, MessageCircle, Phone, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'menu', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#181513]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3 text-white'
          : 'bg-[#181513]/85 backdrop-blur-sm py-4 md:py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#C2410C] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C2410C] to-[#9A3412] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Flame className="w-6 h-6 text-amber-200 fill-amber-300/30" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Lagos Grill
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-medium text-amber-400/90 -mt-1">
                Lekki • Lagos
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  activeSection === link.id
                    ? 'text-amber-400 font-semibold'
                    : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-call-button"
              href={`tel:${RESTAURANT_INFO.phone.primary}`}
              className="flex items-center gap-1.5 text-xs font-medium text-stone-200 hover:text-white bg-white/10 hover:bg-white/15 px-3 py-2 rounded-lg border border-white/10 transition-colors"
              title="Call Lagos Grill"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{RESTAURANT_INFO.phone.primaryFormatted}</span>
            </a>

            <button
              id="header-whatsapp-cta"
              onClick={onOpenReservation}
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-whatsapp-btn-header"
              onClick={onOpenReservation}
              className="p-2 rounded-lg bg-[#25D366] text-white"
              aria-label="WhatsApp quick chat"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/10 text-stone-200 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#181513] border-b border-stone-800 px-5 pt-3 pb-6 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#C2410C]/20 text-amber-400 font-semibold'
                    : 'text-stone-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-stone-800 flex flex-col gap-2.5">
              <a
                id="mobile-nav-call"
                href={`tel:${RESTAURANT_INFO.phone.primary}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-800 text-stone-200 text-sm font-medium border border-stone-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {RESTAURANT_INFO.phone.primaryFormatted}</span>
              </a>

              <button
                id="mobile-nav-whatsapp"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white text-sm font-bold shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat or Reserve on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
