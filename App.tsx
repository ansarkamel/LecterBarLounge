import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Gallery from './components/Gallery';
import CategorySwiper from './components/CategorySwiper';
import MenuSection from './components/MenuSection';
import CartModal from './components/CartModal';
import { TRANSLATIONS, MENU_ITEMS, KITCHEN_CATEGORIES, BAR_CATEGORIES } from './constants';
import { Language, MenuItem, CartItem, MenuSection as MenuSectionType } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');
  const [activeSection, setActiveSection] = useState<MenuSectionType>('kitchen');
  const [activeCategory, setActiveCategory] = useState<string>('shisha');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCartButton, setShowCartButton] = useState(false);

  const t = TRANSLATIONS[lang];

  // Determine current category list based on section
  const currentCategories = activeSection === 'kitchen' ? KITCHEN_CATEGORIES : BAR_CATEGORIES;

  // Filter Menu Items
  const filteredItems = useMemo(() => 
    MENU_ITEMS.filter(item => item.category === activeCategory),
  [activeCategory]);

  // Handle Cart Button Visibility
  useEffect(() => {
    setShowCartButton(cart.length > 0);
  }, [cart]);

  // Handle Section Switch
  const switchSection = (section: MenuSectionType) => {
    setActiveSection(section);
    // Reset to first category of the new section
    const newCats = section === 'kitchen' ? KITCHEN_CATEGORIES : BAR_CATEGORIES;
    setActiveCategory(newCats[0]);
  };

  // Cart Operations
  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity + delta) };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const formatPrice = (price: number) => new Intl.NumberFormat(lang === 'EN' ? 'en-US' : 'ru-RU').format(price) + ' ₸';

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 font-sans pb-20">
      
      <Header currentLang={lang} onLanguageChange={setLang} />
      
      <main>
        <Greeting t={t} />

        {/* Section Links (Kitchen / Bar) */}
        <div className="flex justify-center items-center gap-8 mb-8 px-6">
          <button 
            onClick={() => switchSection('kitchen')}
            className={`font-serif text-2xl md:text-3xl transition-all duration-300 ${
              activeSection === 'kitchen' 
                ? 'text-gold-400 border-b-2 border-gold-400 pb-1' 
                : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            {t.kitchen}
          </button>
          <span className="text-gray-700 text-2xl font-serif">/</span>
          <button 
            onClick={() => switchSection('bar')}
            className={`font-serif text-2xl md:text-3xl transition-all duration-300 ${
              activeSection === 'bar' 
                ? 'text-gold-400 border-b-2 border-gold-400 pb-1' 
                : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            {t.bar}
          </button>
        </div>
        
        <CategorySwiper 
          categories={currentCategories}
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory}
          t={t}
        />
        
        <MenuSection 
          items={filteredItems} 
          currentLang={lang}
          t={t}
          onAddToCart={addToCart}
        />

        <div className="mt-12">
            <Gallery title={t.promotions} />
        </div>
      </main>

      {/* Floating Cart Button */}
      <AnimatePresence>
        {showCartButton && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 inset-x-4 z-40 max-w-md mx-auto"
          >
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-full bg-gold-600 text-black font-bold p-4 rounded-xl shadow-2xl shadow-gold-900/20 flex items-center justify-between group active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="bg-black/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-sm">{totalItems}</span>
                </div>
                <span className="uppercase tracking-wider text-sm font-serif">{t.viewCart}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{formatPrice(totalPrice)}</span>
                <ShoppingBag size={18} className="text-black/70" />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <CartModal 
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            t={t}
            currentLang={lang}
            onUpdateQuantity={updateQuantity}
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;