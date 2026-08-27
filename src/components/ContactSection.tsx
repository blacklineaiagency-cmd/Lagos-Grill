import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, Calendar, Users, CheckCircle2, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const ContactSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [guestsCount, setGuestsCount] = useState('2 Guests');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('7:00 PM');
  const [specialNote, setSpecialNote] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendWhatsAppReservation = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedText = `Hello Lagos Grill! 🍽️

I would like to make a table reservation:
• Name: ${guestName || 'Guest'}
• Party Size: ${guestsCount}
• Date: ${reservationDate || 'Today / Next available'}
• Time: ${reservationTime}
${specialNote ? `• Special Requests: ${specialNote}` : ''}

Please confirm availability for us. Thank you!`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#FAF7F2] text-[#231F1C] relative border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Visit Us or Connect</span>
          </div>

          <h2
            id="contact-section-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#181513] tracking-tight"
          >
            We'd Love to Host You
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Have a question, craving our dishes, or planning a group dinner? Call us directly, visit our Lekki location, or send us a quick message on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Highlight Card */}
            <div
              id="whatsapp-contact-card"
              className="bg-gradient-to-br from-[#181513] to-[#2a2420] text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-stone-800 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-6 h-6 fill-white/20" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Instant WhatsApp Chat</h3>
                  <span className="inline-block text-xs font-medium text-emerald-400">● Usually replies within minutes</span>
                </div>
              </div>

              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Fastest way to check daily chef specials, reserve your table, or request fast takeout pickup.
              </p>

              <a
                id="contact-whatsapp-direct-btn"
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${encodeURIComponent(
                  RESTAURANT_INFO.whatsapp.defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Us on WhatsApp</span>
              </a>
            </div>

            {/* Address & Directions Card */}
            <div
              id="address-info-card"
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-orange-100 text-[#C2410C] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#181513]">Our Location</h4>
                  <p id="contact-full-address" className="text-stone-700 text-sm mt-1 font-medium">
                    {RESTAURANT_INFO.address.street}
                  </p>
                  <p className="text-stone-500 text-xs">
                    {RESTAURANT_INFO.address.area}, {RESTAURANT_INFO.address.city}
                  </p>

                  <a
                    id="contact-get-directions-btn"
                    href="https://maps.google.com/?q=Admiralty+Way+Lekki+Phase+1+Lagos+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#9A3412] mt-3 group"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div
              id="phone-info-card"
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 text-[#D97706] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h4 className="font-serif text-lg font-bold text-[#181513]">Direct Phone Lines</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Tap to call our host desk directly</p>
                  
                  <div className="mt-3 space-y-2">
                    <a
                      id="contact-phone-primary"
                      href={`tel:${RESTAURANT_INFO.phone.primary}`}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-orange-50 border border-stone-200/80 text-stone-800 hover:text-[#C2410C] text-sm font-semibold transition-colors"
                    >
                      <span>{RESTAURANT_INFO.phone.primaryFormatted}</span>
                      <span className="text-xs text-stone-500 font-normal">Primary Line</span>
                    </a>

                    {RESTAURANT_INFO.phone.secondary && (
                      <a
                        id="contact-phone-secondary"
                        href={`tel:${RESTAURANT_INFO.phone.secondary}`}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 hover:bg-orange-50 border border-stone-200/80 text-stone-800 hover:text-[#C2410C] text-sm font-semibold transition-colors"
                      >
                        <span>{RESTAURANT_INFO.phone.secondaryFormatted}</span>
                        <span className="text-xs text-stone-500 font-normal">Backup Line</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div
              id="hours-info-card"
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-stone-100 text-stone-800 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#181513]">Opening Hours</h4>
                <p id="contact-hours-days" className="text-stone-700 text-sm mt-1 font-semibold">
                  {RESTAURANT_INFO.hours.days}
                </p>
                <p id="contact-hours-time" className="text-stone-600 text-xs">
                  {RESTAURANT_INFO.hours.time}
                </p>
                <p className="text-[11px] text-amber-700 font-medium mt-1">
                  *Kitchen takes last orders at {RESTAURANT_INFO.hours.kitchenClose}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Reservation / Inquiry Builder */}
          <div className="lg:col-span-7">
            <div
              id="reservation-builder-card"
              className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-md relative"
            >
              <div className="border-b border-stone-100 pb-5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">Quick Table Reservation</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#181513] mt-1">
                  Book Your Table on WhatsApp
                </h3>
                <p className="text-stone-500 text-sm mt-1">
                  Fill in your details below and we will format a personalized booking request directly into your WhatsApp.
                </p>
              </div>

              {sentSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>WhatsApp opened with your details. Our host team will confirm shortly!</span>
                </div>
              )}

              <form onSubmit={handleSendWhatsAppReservation} className="space-y-4">
                <div>
                  <label htmlFor="res-name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5">
                    Your Name / Contact Person
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    placeholder="e.g. Tunde Adeyemi"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="res-guests" className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-stone-500" />
                      <span>Number of Guests</span>
                    </label>
                    <select
                      id="res-guests"
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="1 Person (Solo)">1 Person (Solo Dining)</option>
                      <option value="2 Guests">2 Guests (Table for 2)</option>
                      <option value="3-4 Guests">3 – 4 Guests (Small Group)</option>
                      <option value="5-8 Guests">5 – 8 Guests (Party)</option>
                      <option value="9+ Guests (Large Party)">9+ Guests (Private/Event)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="res-time" className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-500" />
                      <span>Preferred Time</span>
                    </label>
                    <select
                      id="res-time"
                      value={reservationTime}
                      onChange={(e) => setReservationTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="12:30 PM (Lunch)">12:30 PM (Lunch)</option>
                      <option value="1:30 PM (Lunch)">1:30 PM (Lunch)</option>
                      <option value="3:00 PM (Afternoon)">3:00 PM (Afternoon)</option>
                      <option value="5:30 PM (Early Dinner)">5:30 PM (Early Dinner)</option>
                      <option value="7:00 PM (Dinner)">7:00 PM (Dinner)</option>
                      <option value="8:30 PM (Dinner)">8:30 PM (Dinner)</option>
                      <option value="9:30 PM (Late Night)">9:30 PM (Late Night)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="res-date" className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-500" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="res-notes" className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5">
                    Special Notes / Occasion (Optional)
                  </label>
                  <textarea
                    id="res-notes"
                    rows={2}
                    placeholder="e.g. Birthday dinner, outdoor seating preferred, dietary requests..."
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  id="submit-whatsapp-reservation-btn"
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-lg shadow-green-900/20 hover:shadow-green-900/30 transition-all duration-200 active:scale-98 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Send Reservation Request on WhatsApp</span>
                </button>

                <p className="text-[12px] text-center text-stone-500 mt-2">
                  No payment required online. Reservations are confirmed directly via WhatsApp with our host team.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
