import React, { useState } from 'react';
import { X, MessageCircle, Calendar, Clock, Users, Flame, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('7:00 PM');
  const [inquiryType, setInquiryType] = useState<'reservation' | 'menu' | 'delivery'>('reservation');
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let message = '';
    if (inquiryType === 'reservation') {
      message = `Hello Lagos Grill! 🍽️\n\nI would like to book a table:\n• Name: ${name || 'Guest'}\n• Party Size: ${guests}\n• Date: ${date || 'Today / Upcoming'}\n• Time: ${time}\n${note ? `• Notes: ${note}\n` : ''}\nPlease let me know if a table is available. Thank you!`;
    } else if (inquiryType === 'delivery') {
      message = `Hello Lagos Grill! 🛵\n\nI'd like to place an order for delivery/pickup in Lagos:\n• Name: ${name || 'Customer'}\n• Items/Notes: ${note || 'Inquiring about today\'s ready menu items'}\n\nPlease share payment details and ETA. Thanks!`;
    } else {
      message = `Hello Lagos Grill! 👋\n\nI have an inquiry about the menu / reservations:\n• Name: ${name || 'Customer'}\n• Question: ${note || 'What are today\'s chef specials?'}`;
    }

    const url = `https://wa.me/${RESTAURANT_INFO.whatsapp.number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      id="reservation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="reservation-modal-content"
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
              <MessageCircle className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">Message Lagos Grill</h3>
              <p className="text-xs text-stone-500">Fast direct WhatsApp connection</p>
            </div>
          </div>
          <button
            id="close-reservation-modal-btn"
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Type Selector */}
        <div className="grid grid-cols-3 gap-2 my-4 p-1 bg-stone-100 rounded-xl">
          <button
            type="button"
            onClick={() => setInquiryType('reservation')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all ${
              inquiryType === 'reservation'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Table Booking
          </button>
          <button
            type="button"
            onClick={() => setInquiryType('delivery')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all ${
              inquiryType === 'delivery'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Takeout / Order
          </button>
          <button
            type="button"
            onClick={() => setInquiryType('menu')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all ${
              inquiryType === 'menu'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            General Inquiry
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Chioma Okafor"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:bg-white"
            />
          </div>

          {inquiryType === 'reservation' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-stone-400" />
                    <span>Guests</span>
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-[#C2410C]"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-4 Guests">3-4 Guests</option>
                    <option value="5-8 Guests">5-8 Guests</option>
                    <option value="9+ Guests">9+ Large Group</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Time</span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-[#C2410C]"
                  >
                    <option value="1:00 PM">1:00 PM (Lunch)</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="7:30 PM">7:30 PM (Prime Dinner)</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:ring-2 focus:ring-[#C2410C]"
                />
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              {inquiryType === 'reservation'
                ? 'Special Request / Seating Preference'
                : inquiryType === 'delivery'
                ? 'Dishes to order & Delivery Address'
                : 'Your Question'}
            </label>
            <textarea
              rows={2}
              placeholder={
                inquiryType === 'reservation'
                  ? 'e.g. Birthday celebration, outdoor booth'
                  : inquiryType === 'delivery'
                  ? 'e.g. 2x Smoky Jollof Croaker + 1 Suya platter to Lekki Phase 1'
                  : 'Ask us anything about our menu or catering...'
              }
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:bg-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-3 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Open in WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
