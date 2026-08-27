import React, { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/menuData';
import { MenuItem } from '../types';
import { Flame, MessageCircle, Sparkles, Check, Info } from 'lucide-react';

interface MenuSectionProps {
  onSelectDishForWhatsApp?: (dish: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDishForWhatsApp }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDishModal, setSelectedDishModal] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Featured Dishes' },
    { id: 'nigerian', label: 'Nigerian Favorites' },
    { id: 'grill', label: 'Charcoal Grills' },
    { id: 'continental', label: 'Continental & Steaks' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => {
        if (activeCategory === 'nigerian') return item.category === 'nigerian' || item.category === 'soup';
        if (activeCategory === 'grill') return item.category === 'grill';
        if (activeCategory === 'continental') return item.category === 'continental';
        return true;
      });

  const handleOrderDishWhatsApp = (dish: MenuItem) => {
    const message = encodeURIComponent(
      `Hello Lagos Grill! I would like to inquire about/order the "${dish.name}" (${dish.formattedPrice}). Is it available today?`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${message}`, '_blank');
  };

  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[#FAF7F2] text-[#231F1C] relative border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Signature Selections</span>
          </div>
          
          <h2
            id="menu-section-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#181513] tracking-tight"
          >
            Crafted for the Lagos Palate
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Freshly prepared with authentic native ingredients and seasoned to perfection over natural charcoal. All prices in Nigerian Naira (₦).
          </p>

          {/* Category Filter Pills */}
          <div
            id="menu-filter-tabs"
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`menu-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#181513] text-white shadow-md'
                    : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Sample Dishes Grid */}
        <div
          id="menu-items-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((dish) => (
            <article
              key={dish.id}
              id={`dish-card-${dish.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Dish Image with Badge */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-stone-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Price Tag Badge */}
                <div
                  id={`dish-price-${dish.id}`}
                  className="absolute bottom-3 right-3 bg-[#181513]/95 backdrop-blur-md text-amber-300 font-bold text-base sm:text-lg px-3.5 py-1.5 rounded-xl border border-amber-400/30 shadow-md"
                >
                  {dish.formattedPrice}
                </div>

                {/* Status Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {dish.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#C2410C]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {dish.spicyLevel && dish.spicyLevel >= 2 && (
                    <span
                      className="bg-red-600/90 text-white text-[11px] font-semibold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm"
                      title={`Spiciness level: ${dish.spicyLevel}/3`}
                    >
                      <span>🌶️</span>
                      <span>Spicy</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      id={`dish-name-${dish.id}`}
                      className="font-serif text-lg sm:text-xl font-bold text-[#181513] group-hover:text-[#C2410C] transition-colors leading-snug"
                    >
                      {dish.name}
                    </h3>
                  </div>

                  <p
                    id={`dish-desc-${dish.id}`}
                    className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3"
                  >
                    {dish.description}
                  </p>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3 mt-auto">
                  <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Freshly Prepared
                  </span>

                  <button
                    id={`order-dish-btn-${dish.id}`}
                    onClick={() => handleOrderDishWhatsApp(dish)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366] text-[#128C7E] hover:text-white text-xs font-semibold transition-all duration-200 border border-[#25D366]/30 active:scale-95"
                    title={`Order ${dish.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dietary & Custom Orders Note Banner */}
        <div
          id="menu-footer-banner"
          className="mt-12 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200/70 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-orange-600 text-white shrink-0 shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Special Requests or Large Group Bookings?
              </h4>
              <p className="text-sm text-stone-600 mt-1 max-w-xl">
                Looking for tailored spice levels, custom platters for birthday hangouts, or pre-orders for office lunch meetings? Our kitchen is happy to accommodate.
              </p>
            </div>
          </div>

          <a
            id="menu-custom-order-whatsapp-btn"
            href={`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${encodeURIComponent(
              "Hello Lagos Grill! I would like to inquire about custom orders / private group dining."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#181513] hover:bg-[#2c2724] text-white text-sm font-semibold shadow-md transition-colors w-full md:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat With Chef / Team</span>
          </a>
        </div>

      </div>
    </section>
  );
};
