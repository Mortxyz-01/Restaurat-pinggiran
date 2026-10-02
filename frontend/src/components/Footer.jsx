import { MapPin, Clock, Phone, Mail, ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="bg-[#1A1A1A] text-[#F9F8F6] pt-16 pb-12 border-t border-[#2E2E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#333333]">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#C84B31] flex items-center justify-center text-white font-serif font-bold text-sm">
                木
              </div>
              <span className="text-2xl font-serif tracking-wider font-semibold text-white">
                KOMOREBI
              </span>
            </div>
            <p className="text-xs text-[#E5E0D8]/70 leading-relaxed max-w-sm font-sans">
              Restoran Jepang kontemporer yang merayakan esensi kesederhanaan bahan musiman, teknik panggangan arang Binchotan, dan filosofi Wabi-Sabi.
            </p>
            <div className="text-[11px] text-[#8A9A86] font-serif pt-1">
              木漏れ日 • Keindahan Cahaya di Antara Celah Ranting
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-serif tracking-widest text-[#8A9A86] font-semibold flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Jam Operasional</span>
            </h4>
            <div className="space-y-2 text-xs text-[#E5E0D8]/80 font-sans">
              <div>
                <span className="text-white font-medium block">Selasa hingga Minggu</span>
                <span className="text-[#E5E0D8]/60 block">Sesi Siang: 11:30 - 14:30 WIB</span>
                <span className="text-[#E5E0D8]/60 block">Sesi Malam: 17:30 - 22:00 WIB</span>
              </div>
              <div className="pt-1">
                <span className="text-[#C84B31] font-medium block">Senin Tutup</span>
                <span className="text-[11px] text-[#E5E0D8]/50 block">Pemilahan bahan segar pasar ikan</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-serif tracking-widest text-[#8A9A86] font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Lokasi & Kontak</span>
            </h4>
            <div className="space-y-2 text-xs text-[#E5E0D8]/80 font-sans">
              <p className="leading-relaxed">
                Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan 12190
              </p>
              <div className="pt-1 space-y-1">
                <a
                  href="tel:+622157982233"
                  className="flex items-center gap-1.5 hover:text-[#8A9A86] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#8A9A86]" />
                  <span>(021) 5798-2233</span>
                </a>
                <a
                  href="mailto:reservasi@komorebi.id"
                  className="flex items-center gap-1.5 hover:text-[#8A9A86] transition-colors"
                >
                  <Mail className="w-3 h-3 text-[#8A9A86]" />
                  <span>reservasi@komorebi.id</span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-serif tracking-widest text-[#8A9A86] font-semibold">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs text-[#E5E0D8]/70">
              <li>
                <a href="#beranda" className="hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Menu Pilihan</a>
              </li>
              <li>
                <a href="#filosofi" className="hover:text-white transition-colors">Filosofi & Ruang</a>
              </li>
              <li>
                <a href="#reservasi" className="hover:text-white transition-colors">Reservasi Meja</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5E0D8]/50">
          <p>© {CURRENT_YEAR} Komorebi Japanese Dining. Seluruh hak cipta dilindungi.</p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#E5E0D8]/70 hover:text-white transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#8A9A86] px-2 py-1 rounded-sm"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#8A9A86]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
