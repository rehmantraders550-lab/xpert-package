import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createWhatsAppLink } from '../lib/whatsapp';

const productVisuals = [
  { id: 'clear', label: 'Clear', image: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&q=80&w=1200' },
  { id: 'white', label: 'White', image: 'https://images.unsplash.com/photo-1605600659873-d808a1d85f26?auto=format&fit=crop&q=80&w=1200' },
  { id: 'black', label: 'Black', image: 'https://images.unsplash.com/photo-1577702312572-5bb9328a9f15?auto=format&fit=crop&q=80&w=1200' },
  { id: 'printed', label: 'Printed', image: 'https://images.unsplash.com/photo-1587324438673-56c80a221295?auto=format&fit=crop&q=80&w=1200' },
];

const capabilities = [
  "CUSTOM SIZES & THICKNESSES",
  "HIGH-QUALITY LLDPE MATERIAL",
  "CUSTOM PRINTING",
  "FLEXIBLE PRODUCTION"
];

export default function Hero() {
  const [activeVisual, setActiveVisual] = useState(productVisuals[0]);

  const handleWhatsApp = () => {
    const link = createWhatsAppLink("Hello Xpert Packages, I am interested in your LLDPE bags and would like to get a quote.");
    window.open(link, '_blank');
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 text-brand-accent font-medium text-xs uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-brand-accent"></span>
                <span>LLDPE BAGS MANUFACTURER</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-primary mb-6 leading-[1.1]">
                Flexible Packaging,<br />
                <span className="text-brand-secondary">Made to Your Specification.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-brand-secondary mb-10 max-w-lg leading-relaxed">
                Xpert Packages is an industrial flexible-packaging manufacturer specializing in mass production of LLDPE bags made to customer specifications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#products"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-white bg-brand-accent hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Explore Products →
                </a>
                <button 
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center px-8 py-4 border border-brand-border text-base font-medium rounded-sm text-brand-primary bg-white hover:bg-gray-50 transition-colors shadow-sm"
                >
                  WhatsApp · Get a Quote
                </button>
              </div>
              
              {/* Technical Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-brand-border">
                {capabilities.map((cap, i) => (
                  <div key={i} className="text-[10px] sm:text-xs font-semibold text-brand-secondary uppercase tracking-wider leading-tight">
                    {cap}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right Visuals */}
          <motion.div 
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden bg-white shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeVisual.id}
                src={activeVisual.image}
                alt={`LLDPE Bag - ${activeVisual.label}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            
            {/* Visual Selector */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-gray-100">
              {productVisuals.map((visual) => (
                <button
                  key={visual.id}
                  onClick={() => setActiveVisual(visual)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeVisual.id === visual.id
                      ? 'bg-brand-primary text-white'
                      : 'text-brand-secondary hover:text-brand-primary hover:bg-gray-100'
                  }`}
                >
                  {visual.label}
                </button>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
