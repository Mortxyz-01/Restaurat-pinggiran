import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Beranda', href: '#beranda', kanji: 'ホーム' },
    { name: 'Menu Pilihan', href: '#menu', kanji: 'お品書き' },
    { name: 'Filosofi & Bahan', href: '#filosofi', kanji: 'こだわり' },
    { name: 'Lokasi & Kontak', href: '#kontak', kanji: '店舗案内' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F8F6]/95 backdrop-blur-md border-b border-[#E5E0D8] shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#beranda"
            className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A9A86] rounded-sm p-1"
          >
            <div className="w-9 h-9 rounded-sm bg-[#C84B31] flex items-center justify-center text-white font-serif font-bold text-base shadow-xs group-hover:bg-[#B33F27] transition-colors">
              木
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif tracking-wider font-semibold text-[#1A1A1A]">
                KOMOREBI
              </span>
              <span className="text-[10px] tracking-widest text-[#1A1A1A]/60 font-sans uppercase -mt-0.5">
                木漏れ日 • Japanese Dining
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors relative py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A9A86] rounded-xs group"
              >
                <span className="flex items-center gap-1.5">
                  <span>{link.name}</span>
                  <span className="text-[10px] text-[#8A9A86] font-serif opacity-70 group-hover:opacity-100 transition-opacity">
                    {link.kanji}
                  </span>
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8A9A86] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+622157982233"
              className="text-xs text-[#1A1A1A]/70 hover:text-[#1A1A1A] flex items-center gap-1.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A9A86] px-2 py-1 rounded-sm"
              title="Hubungi restoran"
            >
              <Phone className="w-3.5 h-3.5 text-[#8A9A86]" />
              <span>(021) 5798-2233</span>
            </a>
            <a
              href="#reservasi"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#F9F8F6] hover:bg-[#2E2E2E] active:scale-98 transition-all px-4 py-2.5 rounded-sm text-sm font-medium tracking-wide shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A9A86] focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4 text-[#8A9A86]" />
              <span>Reservasi Meja</span>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <a
              href="#reservasi"
              className="px-3 py-2 bg-[#1A1A1A] text-[#F9F8F6] text-xs font-medium rounded-sm flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5 text-[#8A9A86]" />
              <span>Reservasi</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-sm text-[#1A1A1A] hover:bg-[#E5E0D8]/50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A9A86]"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] bg-[#1A1A1A]/40 backdrop-blur-xs z-30 md:hidden"
              aria-hidden="true"
            />
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#F9F8F6] border-b border-[#E5E0D8] shadow-md px-6 py-6 md:hidden z-40"
              aria-label="Navigasi Menu Mobile"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-medium text-[#1A1A1A] border-b border-[#E5E0D8]/60 hover:text-[#8A9A86] transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#8A9A86] font-serif">{link.kanji}</span>
                  </a>
                ))}
                
                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href="#reservasi"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 bg-[#1A1A1A] text-white text-center font-medium rounded-sm flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#8A9A86]" />
                    <span>Buat Reservasi Meja</span>
                  </a>
                  <a
                    href="tel:+622157982233"
                    className="text-xs text-center text-[#1A1A1A]/70 py-1"
                  >
                    Telepon Langsung: (021) 5798-2233
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
