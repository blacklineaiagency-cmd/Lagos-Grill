import React from 'react';
import { Utensils, MessageCircle, ChevronDown, Clock, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 bg-[#181513] text-white overflow-hidden"
    >
      {/* Ambient background glow & imagery overlay */}
      <div className="absolute inset-0 z-0 opacity-35 bg-[radial-gradient(#C2410C_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Warm ember gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C2410C]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#D97706]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative background image with rich overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-luminosity scale-105 transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1800&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#181513] via-[#181513]/80 to-[#181513]/70 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top pill badge */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Authentic Flame-Grilled Dining in Lekki, Lagos</span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl"
        >
          Flame-Kissed Nigerian &amp; Continental Classics
        </h1>

        {/* Short Tagline */}
        <p
          id="hero-tagline"
          className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl font-normal leading-relaxed"
        >
          Experience the authentic culinary heartbeat of Lagos. From sizzling charcoal suya platters and rich smoky party jollof to prime ribeye steaks crafted with rich local spices.
        </p>

        {/* Call-to-action buttons */}
        <div
          id="hero-cta-container"
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            id="hero-view-menu-btn"
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C2410C] to-[#D97706] hover:from-[#9A3412] hover:to-[#B45309] text-white font-semibold text-base shadow-lg shadow-orange-950/50 hover:shadow-orange-900/60 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Utensils className="w-5 h-5 text-amber-200" />
            <span>View Our Menu</span>
          </a>

          <button
            id="hero-whatsapp-btn"
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base shadow-lg shadow-green-950/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Reserve Table / WhatsApp</span>
          </button>
        </div>

        {/* Quick Context Chips */}
        <div
          id="hero-meta-chips"
          className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl text-left"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-400 font-medium">Location</p>
              <p className="text-sm font-semibold text-stone-200">Admiralty Way, Lekki 1</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-400 font-medium">Opening Hours</p>
              <p className="text-sm font-semibold text-stone-200">12:00 PM – 11:30 PM Daily</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-stone-400 font-medium">Instant Booking</p>
              <p className="text-sm font-semibold text-stone-200">Fast WhatsApp Response</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#menu"
          className="mt-10 inline-flex flex-col items-center gap-1 text-xs text-stone-400 hover:text-amber-400 transition-colors animate-bounce"
          aria-label="Scroll down to menu"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
};
