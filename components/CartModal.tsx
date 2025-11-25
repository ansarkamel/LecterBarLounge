import React from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem, TranslationSet } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  t: TranslationSet;
  currentLang: 'EN' | 'RU' | 'KZ';
  onUpdateQuantity: (id: number, delta: number) => void;
}

const CartModal: React.FC<CartModalProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  t, 
  currentLang,
  onUpdateQuantity 
}) => {
  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU').format(price) + ' ₸';

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-lg bg-dark-800 rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] pointer-events-auto sm:m-4 border border-white/10"
      >
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-dark-900/50">
          <h2 className="font-serif text-xl text-gold-400">{t.yourOrder}</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
          {cart.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              {t.cartEmpty}
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white/5 p-3 rounded-xl">
                <div className="w-16 h-16 bg-dark-900 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name[currentLang]} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-white text-sm">{item.name[currentLang]}</h4>
                  <p className="text-gold-500 text-sm font-semibold mt-1">{formatPrice(item.price * item.quantity)}</p>
                </div>

                <div className="flex items-center gap-3 bg-dark-900 rounded-full px-2 py-1 border border-white/5">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    {item.quantity === 1 ? <Trash2 size={14} /> : <Minus size={14} />}
                  </button>
                  <span className="text-sm w-4 text-center font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-dark-900 border-t border-white/5">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 uppercase tracking-widest text-xs">{t.total}</span>
              <span className="text-2xl font-serif text-white">{formatPrice(total)}</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CartModal;