import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages: Language[] = ['KZ', 'RU', 'EN'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-dark-900/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="flex-1">
        {/* Empty div for flex balance */}
      </div>
      
      <div className="flex-1 flex justify-center">
        <h1 className="font-serif text-3xl font-bold tracking-[0.2em] text-gray-100 hover:text-white transition-colors cursor-default select-none">
          LECTER
        </h1>
      </div>

      <div className="flex-1 flex justify-end relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-xs font-semibold tracking-wider text-gray-300 hover:text-white transition-colors"
        >
          {currentLang}
          <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-8 right-0 bg-dark-800 border border-white/10 rounded-lg shadow-xl overflow-hidden min-w-[60px]"
            >
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    onLanguageChange(lang);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-center py-2 px-3 text-xs font-medium hover:bg-white/5 transition-colors ${
                    currentLang === lang ? 'text-gold-400' : 'text-gray-400'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;