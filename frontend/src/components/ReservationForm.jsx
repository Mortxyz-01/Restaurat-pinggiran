import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  Utensils, 
  CheckCircle2, 
  X, 
  Info
} from 'lucide-react';

const DEFAULT_TODAY_STR = new Date().toISOString().split('T')[0];

export default function ReservationForm({ preselectedDish, onClearPreselectedDish }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: DEFAULT_TODAY_STR,
    time: '18:30',
    guests: '2',
    seatingArea: 'counter',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBooking, setSuccessBooking] = useState(null);

  const timeSlots = [
    { time: '12:00', session: 'Makan Siang' },
    { time: '13:00', session: 'Makan Siang' },
    { time: '17:30', session: 'Makan Malam 1' },
    { time: '18:30', session: 'Makan Malam 1' },
    { time: '19:45', session: 'Makan Malam 2' },
    { time: '20:45', session: 'Makan Malam 2' },
  ];

  const seatingOptions = [
    { id: 'counter', label: 'Chef Counter (Omakase)', kanji: 'カウンター席', desc: 'Duduk berhadapan langsung dengan keahlian pisau chef utama.' },
    { id: 'tatami', label: 'Private Tatami Room', kanji: '畳個室', desc: 'Ruang privat lesehan beralas tikar tatami alami untuk keintiman.' },
    { id: 'main', label: 'Main Zen Dining Hall', kanji: '一般席', desc: 'Meja makan bernuansa kayu lapang dengan pemandangan taman batu.' },
  ];

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Nama lengkap pemesan wajib diisi';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Nomor WhatsApp / telepon aktif wajib diisi';
    } else if (formData.phone.length < 8) {
      errs.phone = 'Format nomor telepon minimal 8 digit';
    }
    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi untuk konfirmasi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Format alamat email tidak valid';
    }
    if (!formData.date) {
      errs.date = 'Pilih tanggal reservasi';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = 'KMRB-' + Math.floor(1000 + Math.random() * 9000);
      setSuccessBooking({
        code: generatedCode,
        ...formData,
        dish: preselectedDish ? preselectedDish.name : null,
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        date: DEFAULT_TODAY_STR,
        time: '18:30',
        guests: '2',
        seatingArea: 'counter',
        notes: '',
      });
      if (onClearPreselectedDish) {
        onClearPreselectedDish();
      }
    }, 900);
  };

  return (
    <section id="reservasi" className="py-24 relative bg-[#F0ECE4]/30 border-t border-[#E5E0D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="w-6 h-[1px] bg-[#8A9A86]" />
            <span className="text-xs font-serif tracking-[0.25em] text-[#8A9A86] uppercase font-semibold">
              ご予約 • Table Reservation
            </span>
            <span className="w-6 h-[1px] bg-[#8A9A86]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
            Amankan Meja Santap Anda
          </h2>
          <p className="text-sm sm:text-base text-[#1A1A1A]/70 max-w-lg mx-auto leading-relaxed">
            Untuk menjaga mutu kesegaran bahan dan ketenangan bersantap, kami melayani tamu dengan kuota reservasi terbatas setiap sesinya.
          </p>
        </div>

        {preselectedDish && (
          <div className="mb-8 p-4 rounded-xl bg-white border border-[#8A9A86]/50 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <img
                src={preselectedDish.image}
                alt={preselectedDish.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <span className="text-[11px] font-serif text-[#8A9A86] uppercase tracking-wider block">
                  Permintaan Hidangan Khusus:
                </span>
                <span className="text-sm font-serif font-bold text-[#1A1A1A]">
                  {preselectedDish.name} ({preselectedDish.kanji})
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClearPreselectedDish}
              className="text-xs text-[#1A1A1A]/60 hover:text-[#C84B31] p-1 flex items-center gap-1"
              title="Batalkan pilihan hidangan"
            >
              <X className="w-4 h-4" />
              <span>Hapus</span>
            </button>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-[#E5E0D8] p-6 sm:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div className="space-y-4">
              <h3 className="text-sm font-serif uppercase tracking-widest text-[#8A9A86] font-semibold border-b border-[#E5E0D8] pb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>1. Jadwal & Jumlah Tamu</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="res-date" className="text-xs font-medium text-[#1A1A1A]/80">
                    Pilih Tanggal
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    min={DEFAULT_TODAY_STR}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F9F8F6] border border-[#E5E0D8] text-sm text-[#1A1A1A] focus:outline-hidden focus:border-[#8A9A86] focus:ring-1 focus:ring-[#8A9A86]"
                  />
                  {errors.date && <p className="text-[11px] text-[#C84B31]">{errors.date}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="res-time" className="text-xs font-medium text-[#1A1A1A]/80">
                    Jam Sesi Makan
                  </label>
                  <select
                    id="res-time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F9F8F6] border border-[#E5E0D8] text-sm text-[#1A1A1A] focus:outline-hidden focus:border-[#8A9A86] focus:ring-1 focus:ring-[#8A9A86]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot.time} value={slot.time}>
                        {slot.time} WIB ({slot.session})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="res-guests" className="text-xs font-medium text-[#1A1A1A]/80">
                    Jumlah Tamu
                  </label>
                  <select
                    id="res-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F9F8F6] border border-[#E5E0D8] text-sm text-[#1A1A1A] focus:outline-hidden focus:border-[#8A9A86] focus:ring-1 focus:ring-[#8A9A86]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} Orang {num > 4 ? '(Grup)' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-serif uppercase tracking-widest text-[#8A9A86] font-semibold border-b border-[#E5E0D8] pb-2 flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                <span>2. Preferensi Ruangan & Suasana</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {seatingOptions.map((opt) => {
                  const isSelected = formData.seatingArea === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, seatingArea: opt.id })}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#1A1A1A] bg-[#F9F8F6] shadow-xs'
                          : 'border-[#E5E0D8] hover:border-[#8A9A86] bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-serif text-[#8A9A86] font-semibold">
                          {opt.kanji}
                        </span>
                        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#1A1A1A] bg-[#1A1A1A]' : 'border-[#E5E0D8]'
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                      <h4 className="text-sm font-serif font-bold text-[#1A1A1A] mb-1">
                        {opt.label}
                      </h4>
                      <p className="text-[11px] text-[#1A1A1A]/70 leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-serif uppercase tracking-widest text-[#8A9A86] font-semibold border-b border-[#E5E0D8] pb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>3. Data Kontak Pemesan</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="res-name" className="text-xs font-medium text-[#1A1A1A]/80">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="res-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama Anda"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-sm bg-[#F9F8F6] border border-[#E5E0D8] text-sm text-[#1A1A1A] focus:outline-hidden focus:border-[#8A9A86] focus:ring-1 focus:ring-[#8A9A86]"
                    />
                  </div>
                  {errors.name && <p className="text-[11px] text-[#C84B31]">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="res-phone" className="text-xs font-medium text-[#1A1A1A]/80">
                    Nomor WhatsApp / HP *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="res-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Contoh: 081234567890"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-sm bg-[#F9F8F6] border border-[#E5E0D8] text-sm text-[#1A1A1A] focus:outline-hidden focus:border-[#8A9A86] focus:ring-1 focus:ring-[#8A9A86]"
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-[#C84B31]">{errors.phone}</p>}
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="res-email" className="text-xs font-medium text-[#1A1A1A]/80">
                    Alamat Email (Untuk tiket konfirmasi reservasi) *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="res-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alamat@email.com"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-sm bg-[#F9F8F6] border border-[#E5E0D8] text-sm text-[#1A1A1A] focus:outline-hidden focus:border-[#8A9A86] focus:ring-1 focus:ring-[#8A9A86]"
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-[#C84B31]">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="res-notes" className="text-xs font-medium text-[#1A1A1A]/80">
                    Catatan Khusus atau Alergi Makanan (Opsional)
                  </label>
                  <textarea
                    id="res-notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Contoh: Perayaan ulang tahun, tidak mengonsumsi kerang, membutuhkan kursi bayi..."
                    className="w-full p-3 rounded-sm bg-[#F9F8F6] border border-[#E5E0D8] text-sm text-[#1A1A1A] focus:outline-hidden focus:border-[#8A9A86] focus:ring-1 focus:ring-[#8A9A86]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/60">
                <Info className="w-4 h-4 text-[#8A9A86] shrink-0" />
                <span>Konfirmasi instan akan dikirimkan otomatis ke WhatsApp & Email Anda.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1A1A1A] hover:bg-[#2F2F2F] text-white text-sm font-medium tracking-wide rounded-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Memproses Reservasi...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-[#8A9A86]" />
                    <span>Konfirmasi Reservasi Meja</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {successBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccessBooking(null)}
              className="fixed inset-0 bg-[#1A1A1A]/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-[#F9F8F6] rounded-2xl border border-[#E5E0D8] p-6 sm:p-8 shadow-2xl z-10 space-y-6 text-center"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onClick={() => setSuccessBooking(null)}
                className="absolute top-4 right-4 p-2 text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 rounded-full bg-[#8A9A86]/20 text-[#5A6F56] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-widest text-[#8A9A86] font-semibold">
                  ご予約完了 • Reservasi Berhasil
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                  Meja Anda Telah Siap, {successBooking.name}
                </h3>
                <p className="text-xs text-[#1A1A1A]/70">
                  Kode reservasi resmi telah diterbitkan. Simpan kode ini saat tiba di restoran.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E0D8] space-y-3 text-left">
                <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-2">
                  <span className="text-xs text-[#1A1A1A]/60 font-sans">Kode Reservasi:</span>
                  <span className="font-mono text-base font-bold text-[#C84B31] tracking-wider">
                    {successBooking.code}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[#1A1A1A]/50 block">Tanggal & Waktu:</span>
                    <span className="font-medium text-[#1A1A1A]">
                      {successBooking.date}, {successBooking.time} WIB
                    </span>
                  </div>
                  <div>
                    <span className="text-[#1A1A1A]/50 block">Jumlah Tamu:</span>
                    <span className="font-medium text-[#1A1A1A]">
                      {successBooking.guests} Orang
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#1A1A1A]/50 block">Area Meja:</span>
                    <span className="font-medium text-[#1A1A1A]">
                      {seatingOptions.find(o => o.id === successBooking.seatingArea)?.label}
                    </span>
                  </div>
                  {successBooking.dish && (
                    <div className="col-span-2 pt-1 border-t border-[#E5E0D8]">
                      <span className="text-[#1A1A1A]/50 block">Pilihan Hidangan Disiapkan:</span>
                      <span className="font-serif font-semibold text-[#8A9A86]">
                        {successBooking.dish}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setSuccessBooking(null)}
                  className="w-full py-3 bg-[#1A1A1A] hover:bg-[#2F2F2F] text-white text-sm font-medium rounded-sm transition-colors"
                >
                  Selesai & Tutup
                </button>
                <p className="text-[11px] text-[#1A1A1A]/60">
                  Detail reservasi juga telah dikirimkan ke email <span className="font-medium text-[#1A1A1A]">{successBooking.email}</span>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
