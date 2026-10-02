import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import PhilosophySection from './components/PhilosophySection';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

export default function App() {
  const [preselectedDish, setPreselectedDish] = useState(null);

  const handleSelectDishForReservation = (dish) => {
    setPreselectedDish(dish);
    const reservationElement = document.getElementById('reservasi');
    if (reservationElement) {
      reservationElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearPreselectedDish = () => {
    setPreselectedDish(null);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] selection:bg-[#8A9A86]/30 selection:text-[#1A1A1A] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <Hero />

        <MenuSection
          onSelectDishForReservation={handleSelectDishForReservation}
        />

        <PhilosophySection />

        <ReservationForm
          preselectedDish={preselectedDish}
          onClearPreselectedDish={handleClearPreselectedDish}
        />
      </main>

      <Footer />
    </div>
  );
}
