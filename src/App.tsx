/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#231F1C] font-sans selection:bg-[#C2410C] selection:text-white antialiased">
      {/* 1. Header (Restaurant Name & Navigation) */}
      <Navbar onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section (Headline, Tagline, View Menu Button) */}
        <Hero onOpenReservation={() => setReservationModalOpen(true)} />

        {/* 3. Menu Section (6 Sample Dishes with Name, Description, Naira Price) */}
        <MenuSection />

        {/* 4. About Section (Story & Vibe in 2-3 Sentences) */}
        <AboutSection />

        {/* 5. Contact Section (Address, Phone Number, WhatsApp Link/Builder) */}
        <ContactSection />
      </main>

      {/* 6. Footer (Copyright Text & Information) */}
      <Footer />

      {/* Interactive WhatsApp Reservation & Inquiry Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />
    </div>
  );
}

