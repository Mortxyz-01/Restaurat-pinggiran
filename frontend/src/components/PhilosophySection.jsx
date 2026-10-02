import { Sparkles, HeartHandshake, Trees } from 'lucide-react';

export default function PhilosophySection() {
  const pillars = [
    {
      kanji: "こだわり",
      romaji: "Kodawari",
      title: "Ketekunan Tanpa Kompromi",
      description: "Pengejaran tiada henti atas kesempurnaan detail, mulai dari pemilihan beras Koshihikari Niigata berbulir utuh hingga dashi rumput laut Rishiri berusia 2 tahun.",
      icon: Sparkles
    },
    {
      kanji: "侘び寂び",
      romaji: "Wabi-Sabi",
      title: "Keindahan Kesederhanaan",
      description: "Menghargai ketidaksempurnaan alami bahan pangan dan kehangatan tembikar keramik tangan buatan pengrajin tembikar Bizen.",
      icon: Trees
    },
    {
      kanji: "おもてなし",
      romaji: "Omotenashi",
      title: "Keramahan Tulus dari Hati",
      description: "Menyambut setiap tamu layaknya sahabat lama dalam suasana ruang makan kayu cemara Hinoki yang tenang dan menyejukkan jiwa.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="filosofi" className="py-24 lg:py-32 relative bg-[#F9F8F6] overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8A9A86]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#8A9A86]" />
            <span className="text-xs font-serif tracking-[0.25em] text-[#8A9A86] uppercase font-semibold">
              理念と空間 • Philosophy & Atmosphere
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight">
            Harmoni Alam, Sentuhan Pengrajin, dan Kenikmatan Murni
          </h2>
          <p className="text-base text-[#1A1A1A]/70 font-sans leading-relaxed">
            Di Komorebi, makan bukan sekadar memenuhi selera, melainkan jeda hening dari keriuhan hari untuk menikmati keindahan rasa yang jujur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5E0D8]">
              <img
                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
                alt="Suasana interior restoran Jepang"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-serif tracking-widest text-[#E5E0D8] uppercase">
                  空間 • Ruang Suasana
                </span>
                <p className="text-lg sm:text-xl font-serif font-medium">
                  Sentuhan kayu Hinoki dan bebatuan alam Kyoto yang menenangkan.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 sm:p-5 rounded-lg shadow-md border border-[#E5E0D8] max-w-xs hidden sm:block">
              <span className="text-[11px] font-serif text-[#8A9A86] uppercase tracking-wider block font-semibold">
                Seni Pisau & Api
              </span>
              <p className="text-xs text-[#1A1A1A]/80 mt-1 italic">
                "Kelezatan sejati hadir saat kita menghormati setiap serat bahan yang diberikan alam."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden border border-[#E5E0D8] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Tembikar dan penyajian meja santap Jepang"
                className="w-full h-52 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-[#1A1A1A]/80 text-[#F9F8F6] text-[10px] px-2.5 py-1 rounded-sm">
                Tembikar Bakar Kayu Bizen
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-[#E5E0D8] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80"
                alt="Persiapan bahan masakan segar oleh chef"
                className="w-full h-52 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-[#1A1A1A]/80 text-[#F9F8F6] text-[10px] px-2.5 py-1 rounded-sm">
                Omakase Counter Seating
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-xl bg-white border border-[#E5E0D8] shadow-2xs hover:border-[#8A9A86]/60 transition-colors space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif text-[#8A9A86] font-semibold">
                    {pillar.kanji}
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-[#F0ECE4] flex items-center justify-center text-[#1A1A1A]">
                    <Icon className="w-4 h-4 text-[#8A9A86]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono tracking-widest text-[#1A1A1A]/50 uppercase block">
                    {pillar.romaji}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
