import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/content';
import { Product } from '../types';
import { createWhatsAppLink } from '../lib/whatsapp';

function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="col-span-1 md:col-span-2 lg:col-span-3 bg-white border border-brand-border rounded-lg overflow-hidden my-4 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-64 md:h-auto relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-8 lg:p-12">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-brand-accent text-sm font-bold tracking-widest">{product.categoryNumber}</span>
              <h3 className="text-2xl font-display font-bold text-brand-primary mt-1">{product.name}</h3>
            </div>
            <button 
              onClick={onClose}
              className="text-brand-secondary hover:text-brand-primary p-2"
            >
              ✕
            </button>
          </div>
          
          <p className="text-brand-secondary mb-8 leading-relaxed">{product.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">Typical Applications</h4>
              <ul className="space-y-2 text-sm text-brand-secondary">
                {product.applications.map((app, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3">Customization</h4>
              <ul className="space-y-2 text-sm text-brand-secondary">
                {product.customizationOptions.map((opt, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-border rounded-full mr-2"></span>
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <button 
            onClick={() => window.open(createWhatsAppLink(`I am interested in exploring options for ${product.name}.`), '_blank')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-sm text-white bg-brand-primary hover:bg-black transition-colors"
          >
            Request Quote for {product.name}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductRange() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Helper to chunk products into rows based on screen size could be done, 
  // but a simpler approach in React is to insert the detail panel right after the row containing the active item.
  // For a simpler and robust implementation, we can render the list, and for the expanded item, render its detail below the grid on mobile, or full width in the grid context.
  
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 max-w-3xl">
          <div className="text-brand-secondary font-medium text-sm tracking-widest mb-4">
            01 / PRODUCT RANGE
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            What We Manufacture.
          </h2>
          <p className="text-lg text-brand-secondary">
            A wide variety of LLDPE bag solutions for different business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <motion.button
                type="button" 
                className={`group cursor-pointer rounded-lg overflow-hidden border transition-colors text-left focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none w-full ${
                  expandedId === product.id ? 'border-brand-primary bg-gray-50' : 'border-brand-border hover:border-gray-400 bg-white'
                }`}
                onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-brand-accent text-xs font-bold tracking-wider">{product.categoryNumber}</span>
                    <span className="text-brand-secondary transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2 font-display">{product.name}</h3>
                  <p className="text-sm text-brand-secondary line-clamp-2">{product.description}</p>
                </div>
              </motion.button>
              
              {/* Render expanded detail inline but spanning full width */}
              <AnimatePresence>
                {expandedId === product.id && (
                  <ProductDetail 
                    product={product} 
                    onClose={() => setExpandedId(null)} 
                  />
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
