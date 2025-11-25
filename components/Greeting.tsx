import React from 'react';
import { motion } from 'framer-motion';
import { TranslationSet } from '../types';

interface GreetingProps {
  t: TranslationSet;
}

const Greeting: React.FC<GreetingProps> = ({ t }) => {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/moth-bg.png" 
          alt="Background" 
          className="w-full h-full object-cover blur-sm opacity-70 scale-105" 
        />
        {/* Gradients for readability and blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-900/60 to-dark-900"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Layer */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-400 mx-auto mb-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        
        <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-4 tracking-wide drop-shadow-xl">
          {t.welcome}
        </h2>
        
        <p className="font-sans text-sm md:text-base text-gray-300 tracking-[0.2em] uppercase drop-shadow-md max-w-md mx-auto">
          {t.subtitle}
        </p>
        
        <div className="w-16 h-0.5 bg-gold-600/80 mx-auto mt-10 shadow-[0_0_15px_rgba(212,175,55,0.8)]"></div>
      </motion.div>
    </section>
  );
};

export default Greeting;