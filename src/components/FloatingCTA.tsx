import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down past the hero section (approx 600px)
      // Hide it if we reach the quote section at the bottom
      const scrollPosition = window.scrollY;
      const quoteSection = document.getElementById('quote');
      
      let shouldShow = scrollPosition > 600;

      if (quoteSection) {
        const quoteSectionTop = quoteSection.getBoundingClientRect().top + window.scrollY;
        // If we are near the quote section, hide the floating CTA
        if (scrollPosition > quoteSectionTop - window.innerHeight + 200) {
          shouldShow = false;
        }
      }

      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-40 hidden sm:block"
        >
          <a
            href="#quote"
            className="flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-full text-white bg-brand-primary hover:bg-black transition-colors shadow-xl"
          >
            Get a Quote
          </a>
        </motion.div>
      )}
      
      {/* Mobile version, sits at bottom center */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 left-4 right-4 z-40 sm:hidden"
        >
          <a
            href="#quote"
            className="flex items-center justify-center w-full px-6 py-3.5 border border-transparent text-sm font-bold rounded-md text-white bg-brand-primary hover:bg-black transition-colors shadow-xl"
          >
            Get a Quote
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
