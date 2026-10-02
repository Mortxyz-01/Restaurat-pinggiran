import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, UtensilsCrossed } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import MenuCard from './MenuCard';
import MenuModal from './MenuModal';

export default function MenuSection({ onSelectDishForReservation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.kanji.includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="relative py-20 lg:py-28 bg-[#F0ECE4]/40 border-y border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#8A9A86]" />
              <span className="text-xs font-serif tracking-[0.25em] text-[#8A9A86] uppercase font-semibold">
                お品書き • Menu Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
              Sajian Seni Masakan Artisan
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed">
              Setiap menu diracik dengan cermat mengikuti ritme musim dan prinsip kesegaran bahan pangan murni tanpa pengawet.
            </p>
          </div>

          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari hidangan atau bahan..."
              className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-white border border-[#E5E0D8] text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-hidden focus:border-[#8A9A86] focus:ring-1 focus:ring-[#8A9A86] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
              >
                Hapus
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-sm text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs'
                    : 'bg-white text-[#1A1A1A]/80 border-[#E5E0D8] hover:border-[#8A9A86] hover:bg-[#F9F8F6]'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[11px] font-serif text-[#8A9A86]">{cat.kanji}</span>
              </button>
            );
          })}
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onOpenDetail={(dish) => setSelectedItem(dish)}
                onBookDish={(dish) => {
                  if (onSelectDishForReservation) {
                    onSelectDishForReservation(dish);
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 px-6 text-center rounded-xl bg-white/70 border border-dashed border-[#E5E0D8] flex flex-col items-center justify-center space-y-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#F0ECE4] flex items-center justify-center text-[#8A9A86]">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-semibold text-[#1A1A1A]">
                Tidak Ada Hidangan yang Cocok
              </h3>
              <p className="text-xs text-[#1A1A1A]/60">
                Pencarian "{searchQuery}" pada kategori ini belum tersedia. Silakan coba kata kunci lain atau reset filter.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-medium rounded-sm flex items-center gap-1.5 hover:bg-[#2E2E2E] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#8A9A86]" />
              <span>Reset Semua Filter</span>
            </button>
          </div>
        )}
      </div>

      <MenuModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onSelectForReservation={(dish) => {
          if (onSelectDishForReservation) {
            onSelectDishForReservation(dish);
          }
        }}
      />
    </section>
  );
}
