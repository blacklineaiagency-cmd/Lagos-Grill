import React from 'react';
import { Flame, Phone, MapPin, MessageCircle, Instagram, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#12100E] text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C2410C] to-[#9A3412] flex items-center justify-center shadow-md">
                <Flame className="w-6 h-6 text-amber-200" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Lagos Grill
              </span>
            </div>
            
            <p className="text-stone-400 text-sm leading-relaxed">
              Authentic firewood-infused Nigerian delicacies and flame-grilled continental favorites in Lekki, Lagos.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#25D366] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+2348023456789"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#C2410C] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Featured Menu (6 Dishes)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Our Story &amp; Kitchen
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact &amp; Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-amber-400">
              Dining Hours
            </h4>
            <div className="space-y-2 text-sm text-stone-400">
              <p className="text-white font-medium">Monday – Sunday</p>
              <p>12:00 PM – 11:30 PM</p>
              <p className="text-xs text-stone-500 pt-1">
                Kitchen last call: 10:45 PM
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Dine-In &amp; Takeout</span>
              </div>
            </div>
          </div>

          {/* Location & Direct Line */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 tracking-wide uppercase text-xs text-amber-400">
              Find Us
            </h4>
            <div className="space-y-2.5 text-sm text-stone-400">
              <p className="text-stone-300">
                {RESTAURANT_INFO.address.full}
              </p>
              <p className="pt-1">
                <span className="text-xs text-stone-500 block">Reservations &amp; Orders:</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.primary}`}
                  className="text-amber-400 hover:underline font-semibold"
                >
                  {RESTAURANT_INFO.phone.primaryFormatted}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p id="footer-copyright">
            © {currentYear} Lagos Grill. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with pride for Lagos food lovers.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
