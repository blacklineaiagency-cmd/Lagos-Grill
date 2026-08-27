import React from 'react';
import { Flame, Award, Users, Heart, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#181513] text-white relative overflow-hidden"
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C2410C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-stone-900 aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                  alt="Lagos Grill Kitchen and Atmosphere"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <p className="text-xs uppercase tracking-widest font-semibold text-amber-400">Our Promise</p>
                  <p className="font-serif text-lg font-bold mt-0.5">Authentic Charcoal Flavor, Every Single Day</p>
                </div>
              </div>

              {/* Offset Accent Card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-gradient-to-br from-[#C2410C] to-[#9A3412] text-white p-5 rounded-2xl shadow-xl border border-orange-400/30 items-center gap-3.5 max-w-xs">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Flame className="w-6 h-6 text-amber-200" />
                </div>
                <div>
                  <span className="block text-xl font-bold font-serif">100% Real Charcoal</span>
                  <span className="text-xs text-stone-200">No shortcuts, pure open-flame cooking.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 3 Sentences Context */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story &amp; Vibe</span>
            </div>

            <h2
              id="about-section-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Where Lagosian Heritage Meets Contemporary Grill Craft
            </h2>

            {/* 2-3 Sentences Story (Requested in requirements) */}
            <div className="mt-6 space-y-4 text-stone-300 text-base sm:text-lg leading-relaxed">
              <p id="about-story-p1" className="text-stone-200 font-medium">
                Born from a deep passion for authentic Nigerian culinary heritage and open-flame mastery, Lagos Grill brings together the warmth of smoky native spices and the refined precision of continental grill dining.
              </p>
              <p id="about-story-p2">
                Situated in the energetic heart of Lekki Phase 1, our space is designed for lively dinner conversations, after-work unwind sessions, and unforgettable weekend feasts with friends and family.
              </p>
              <p id="about-story-p3" className="text-stone-400 text-sm sm:text-base">
                Whether you're craving our legendary smoky party jollof with grilled croaker or a succulent charcoal-seared prime ribeye, every dish is prepared to order with fresh local ingredients and heartfelt hospitality.
              </p>
            </div>

            {/* 3 Pillars / Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">Natural Charcoal</h3>
                <p className="text-xs text-stone-400 mt-1 leading-normal">
                  Authentic firewood &amp; coal searing for that signature smoky depth.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">Locally Sourced</h3>
                <p className="text-xs text-stone-400 mt-1 leading-normal">
                  Fresh coastal seafood, northern beef cuts, and organic market spices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">Vibrant Atmosphere</h3>
                <p className="text-xs text-stone-400 mt-1 leading-normal">
                  A warm, welcoming sanctuary for food lovers and young professionals.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
