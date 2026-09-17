import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryImages } from '../data/content';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="text-brand-secondary font-medium text-sm tracking-widest mb-4">
            07 / PRODUCT GALLERY
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            See Our Products in Action.
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {galleryImages.map((image, i) => (
            <motion.div 
              key={image.id}
              className={`relative cursor-pointer overflow-hidden group bg-gray-100 ${
                i === 0 ? 'col-span-2 md:col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Controls */}
            <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-center z-10">
              <div className="text-white/70 text-sm font-medium tracking-widest uppercase">
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="text-white/70 hover:text-white p-2 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>

            {/* Image */}
            <div className="w-full max-w-5xl max-h-[85vh] px-12 relative flex flex-col items-center">
              <img 
                src={galleryImages[lightboxIndex].url} 
                alt={galleryImages[lightboxIndex].title}
                className="max-w-full max-h-[80vh] object-contain select-none"
              />
              <p className="mt-4 text-white text-lg font-display tracking-wide">
                {galleryImages[lightboxIndex].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
