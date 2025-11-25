import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GALLERY_IMAGES, TRANSLATIONS } from '../constants';

// We can infer language from context or pass it, but for a simple visual component 
// that might be empty, we can just use a generic approach or pass props if needed.
// Since we are inside App.tsx which has state, let's keep it simple. 
// Ideally should receive translation prop.

const Gallery: React.FC<{ title: string }> = ({ title }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (GALLERY_IMAGES.length === 0) {
      return (
        <section className="mb-8 px-6 text-center">
             <div className="w-16 h-0.5 bg-gold-600/30 mx-auto mb-4"></div>
             <h3 className="font-serif text-xl text-gold-400 tracking-wide uppercase">{title}</h3>
             <p className="text-gray-500 text-sm mt-2">Coming Soon</p>
        </section>
      );
  }

  return (
    <>
      <section className="mb-12">
        <h3 className="text-center font-serif text-lg text-gold-500/80 mb-6 tracking-widest text-xs uppercase">{title}</h3>
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 gap-4 pb-4">
          {GALLERY_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-64 h-40 md:w-80 md:h-52 rounded-xl overflow-hidden snap-center relative cursor-pointer border border-white/5 shadow-lg group"
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt="Promotion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;