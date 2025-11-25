import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { MenuItem, TranslationSet, Language } from '../types';

interface MenuSectionProps {
  items: MenuItem[];
  currentLang: Language;
  t: TranslationSet;
  onAddToCart: (item: MenuItem) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const MenuSection: React.FC<MenuSectionProps> = ({ items, currentLang, t, onAddToCart }) => {
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(currentLang === 'EN' ? 'en-US' : 'ru-RU').format(price) + ' ₸';
  };

  return (
    <motion.div 
      className="px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
      key={items.length > 0 ? items[0].category : 'empty'} 
    >
      {items.map((item) => (
        <motion.div 
          key={item.id}
          variants={itemAnim}
          className="group relative bg-dark-800 rounded-2xl overflow-hidden border border-white/5 shadow-lg hover:border-gold-500/30 transition-colors"
        >
          <div className="flex p-4 gap-4">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-dark-700">
              <img src={item.image} alt={item.name[currentLang]} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-white text-lg leading-tight mb-1">{item.name[currentLang]}</h4>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{item.description[currentLang]}</p>
              </div>
              
              <div className="flex items-end justify-between mt-2">
                <span className="text-gold-400 font-semibold font-sans">{formatPrice(item.price)}</span>
                
                <button 
                  onClick={() => onAddToCart(item)}
                  className="bg-white/5 hover:bg-gold-500 hover:text-black text-white p-2 rounded-full transition-all duration-300 active:scale-95"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MenuSection;
