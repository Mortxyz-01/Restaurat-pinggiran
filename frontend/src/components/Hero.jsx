import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Calendar, Clock } from 'lucide-react';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#F9F8F6] pointer-events-none" />
      
      <div 
        className="absolute top-24 right-6 sm:right-12 lg:right-24 text-[120px] sm:text-[180px] lg:text-[240px] font-serif text-[#1A1A1A]/3 select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        木漏日
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-[#8A9A86]" />
              <span className="text-xs sm:text-sm font-serif tracking-[0.25em] text-[#8A9A86] uppercase font-semibold">
                こだわり • Kodawari Crafts
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E5E0D8]/60 text-[#1A1A1A]/80 font-sans">
                Authentic Omakase & Kaiseki
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-sm font-serif text-[#8A9A86] tracking-widest">
                静寂と本物の味覚
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] leading-[1.18] tracking-tight">
                Keheningan Zen, <br />
                <span className="italic font-normal text-[#1A1A1A]/90">Kemurnian Rasa Jepang.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#1A1A1A]/75 font-sans leading-relaxed max-w-2xl"
            >
              Terinspirasi dari keindahan sinar mentari yang menyusup di celah pepohonan (<em>Komorebi</em>). Kami menghidangkan seni kuliner Jepang dengan dedikasi bahan musiman segar dari Toyosu dan dashi artisan Kyoto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-[#E5E0D8]"
            >
              <div className="flex flex-col">
                <span className="text-xs text-[#8A9A86] font-serif font-semibold">旬 • Shun</span>
                <span className="text-xs text-[#1A1A1A]/80 font-medium">Bahan Musiman Segar</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-[#8A9A86] font-serif font-semibold">炭火 • Sumibi</span>
                <span className="text-xs text-[#1A1A1A]/80 font-medium">Panggangan Arang Kishu</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col">
                <span className="text-xs text-[#8A9A86] font-serif font-semibold">おもてなし</span>
                <span className="text-xs text-[#1A1A1A]/80 font-medium">Keramahan Omotenashi</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#menu"
                className="inline-flex items-center gap-2.5 bg-[#1A1A1A] text-[#F9F8F6] hover:bg-[#2F2F2F] active:scale-98 transition-all px-6 py-3.5 rounded-sm text-sm font-medium tracking-wide shadow-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A9A86]"
              >
                <Utensils className="w-4 h-4 text-[#8A9A86]" />
                <span>Lihat Menu Pilihan</span>
              </a>

              <a
                href="#reservasi"
                className="inline-flex items-center gap-2.5 bg-transparent border border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#E5E0D8]/40 active:scale-98 transition-all px-6 py-3.5 rounded-sm text-sm font-medium tracking-wide focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A9A86]"
              >
                <Calendar className="w-4 h-4 text-[#C84B31]" />
                <span>Reservasi Meja</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/60 pl-2">
                <Clock className="w-3.5 h-3.5 text-[#8A9A86]" />
                <span>Sesi Makan: 11:30 & 17:30</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-[#F0ECE4]/90 to-[#E5E0D8]/40 border border-[#E5E0D8] p-3 shadow-sm">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C84B31]" />
                <span className="text-[11px] font-serif tracking-widest text-[#1A1A1A]/70 uppercase">
                  茶碗 • O-Chawan 3D
                </span>
              </div>

              <Hero3D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
