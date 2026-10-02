import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, AlertCircle, Coffee, Calendar, Flame } from 'lucide-react';

export default function MenuModal({ item, onClose, onSelectForReservation }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/60 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#F9F8F6] rounded-xl border border-[#E5E0D8] shadow-2xl overflow-hidden z-10 my-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-dish-title"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#1A1A1A]/70 hover:bg-[#1A1A1A] text-white transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A9A86]"
            aria-label="Tutup jendela detail hidangan"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#E5E0D8]">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-sm font-serif text-[#F0ECE4] tracking-widest font-semibold block">
                  {item.kanji}
                </span>
                <h3 id="modal-dish-title" className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {item.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#E5E0D8] block">Harga Saji</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Rp {item.price.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-sm text-xs font-medium bg-[#8A9A86]/15 text-[#5A6F56] border border-[#8A9A86]/30"
                >
                  {tag}
                </span>
              ))}
              <span className="px-2.5 py-1 rounded-sm text-xs text-[#1A1A1A]/70 bg-[#E5E0D8]/60 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#C84B31]" />
                {item.calories}
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-serif tracking-widest text-[#8A9A86] font-semibold">
                Deskripsi Hidangan
              </h4>
              <p className="text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#F0ECE4]/60 border border-[#E5E0D8] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-serif font-semibold text-[#1A1A1A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#8A9A86]" />
                  <span>Catatan Chef</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">{item.chefNote}</p>
              </div>

              <div className="p-4 rounded-lg bg-[#F0ECE4]/60 border border-[#E5E0D8] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-serif font-semibold text-[#1A1A1A]">
                  <Coffee className="w-3.5 h-3.5 text-[#8A9A86]" />
                  <span>Rekomendasi Pendamping</span>
                </div>
                <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">{item.pairing}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/70 pt-2 border-t border-[#E5E0D8]">
              <AlertCircle className="w-4 h-4 text-[#C84B31] shrink-0" />
              <span>Alergen Utama: {item.allergens}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#E5E0D8]">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-sm border border-[#1A1A1A]/20 text-sm font-medium text-[#1A1A1A] hover:bg-[#E5E0D8]/40 transition-colors"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onSelectForReservation) onSelectForReservation(item);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-sm bg-[#1A1A1A] hover:bg-[#2F2F2F] text-white text-sm font-medium flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#8A9A86]" />
                <span>Reservasi & Cicipi Hidangan Ini</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
