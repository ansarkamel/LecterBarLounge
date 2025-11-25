import React, { useRef, useEffect } from 'react';
import { TranslationSet } from '../types';

interface CategorySwiperProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  t: TranslationSet;
}

const CategorySwiper: React.FC<CategorySwiperProps> = ({ categories, activeCategory, onSelectCategory, t }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  // Center selected category on change
  useEffect(() => {
    if (scrollContainer.current) {
        const activeEl = document.getElementById(`cat-${activeCategory}`);
        if (activeEl) {
            const container = scrollContainer.current;
            const scrollLeft = activeEl.offsetLeft - (container.offsetWidth / 2) + (activeEl.offsetWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-16 z-40 bg-dark-900/95 backdrop-blur-sm py-4 border-b border-white/5 mb-8 transition-all duration-500">
      <div 
        ref={scrollContainer}
        className="flex overflow-x-auto no-scrollbar px-6 gap-6"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            id={`cat-${cat}`}
            onClick={() => onSelectCategory(cat)}
            className={`flex-shrink-0 text-sm tracking-wider uppercase font-sans pb-1 transition-all duration-300 border-b-2 whitespace-nowrap ${
              activeCategory === cat 
                ? 'text-gold-400 border-gold-400 font-semibold' 
                : 'text-gray-500 border-transparent hover:text-gray-300'
            }`}
          >
            {t.categories[cat] || cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySwiper;