import { Eye, ArrowUpRight } from 'lucide-react';

export default function MenuCard({ item, onOpenDetail, onBookDish }) {
  return (
    <article className="group relative flex flex-col bg-white rounded-xl border border-[#E5E0D8] overflow-hidden shadow-xs hover:shadow-md hover:border-[#8A9A86]/50 transition-all duration-300">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#E5E0D8]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 right-3 bg-[#F9F8F6]/95 backdrop-blur-xs px-2.5 py-1 rounded-sm border border-[#E5E0D8] shadow-xs">
          <span className="text-xs font-serif text-[#1A1A1A] font-semibold tracking-wider">
            {item.kanji}
          </span>
        </div>

        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-3 left-3 bg-[#1A1A1A]/85 text-[#F9F8F6] text-[10px] tracking-wider px-2 py-0.5 rounded-sm uppercase font-sans">
            {item.tags[0]}
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          <button
            type="button"
            onClick={() => onOpenDetail(item)}
            className="px-4 py-2 bg-[#F9F8F6] text-[#1A1A1A] text-xs font-medium rounded-sm shadow-md hover:bg-white flex items-center gap-1.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8A9A86] transform translate-y-2 group-hover:translate-y-0 transition-transform"
          >
            <Eye className="w-3.5 h-3.5 text-[#8A9A86]" />
            <span>Lihat Detail Hidangan</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-serif font-bold text-[#1A1A1A] leading-snug group-hover:text-[#5A6F56] transition-colors">
            {item.name}
          </h3>
        </div>

        <p className="text-xs text-[#1A1A1A]/70 line-clamp-2 leading-relaxed flex-1">
          {item.description}
        </p>

        <div className="pt-3 border-t border-[#E5E0D8]/70 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base font-serif font-bold text-[#1A1A1A]">
              Rp {item.price.toLocaleString('id-ID')}
            </span>
            <span className="text-[11px] text-[#1A1A1A]/50 font-sans">
              ¥{item.priceJpy.toLocaleString('ja-JP')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenDetail(item)}
              className="p-2 rounded-sm border border-[#E5E0D8] text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-[#F0ECE4] transition-colors"
              title="Informasi alergen & penyajian"
              aria-label={`Lihat informasi ${item.name}`}
            >
              <Eye className="w-4 h-4 text-[#8A9A86]" />
            </button>
            <button
              type="button"
              onClick={() => onBookDish(item)}
              className="px-3 py-1.5 rounded-sm bg-[#1A1A1A] text-white text-xs font-medium hover:bg-[#2F2F2F] transition-colors flex items-center gap-1 shadow-2xs"
            >
              <span>Reservasi</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8A9A86]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
