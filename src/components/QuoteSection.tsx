import React, { useState } from 'react';
import { configuratorOptions, products } from '../data/content';
import { generateQuoteFormMessage, createWhatsAppLink } from '../lib/whatsapp';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    bagType: products[0].name,
    size: '',
    thickness: '',
    quantity: '',
    printing: configuratorOptions.printing[0].value,
    specialRequirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateQuoteFormMessage(formData);
    window.open(createWhatsAppLink(message), '_blank');
  };

  return (
    <section id="quote" className="py-24 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 lg:gap-24">
        
        <div className="md:w-5/12">
          <div className="sticky top-32">
            <div className="text-brand-accent font-medium text-sm tracking-widest mb-4">
              08 / REQUEST A QUOTE
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Need a Specific Bag?
            </h2>
            <p className="text-lg text-brand-secondary">
              Tell us what you need and get in touch with our team for a quotation. We respond promptly via WhatsApp.
            </p>
          </div>
        </div>

        <div className="md:w-7/12">
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-brand-border">
            <div className="space-y-6">
              
              <div>
                <label htmlFor="bagType" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">Bag Type *</label>
                <select 
                  id="bagType"
                  name="bagType"
                  value={formData.bagType}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-gray-300 py-3 pl-4 pr-10 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent border appearance-none bg-white"
                >
                  {products.map(p => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="size" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">Size (W × L) *</label>
                  <input 
                    type="text"
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 14 × 24 inches"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent border bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="thickness" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">Thickness (Optional)</label>
                  <input 
                    type="text"
                    id="thickness"
                    name="thickness"
                    value={formData.thickness}
                    onChange={handleChange}
                    placeholder="e.g. 80 μm"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent border bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">Quantity *</label>
                  <input 
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 10,000 pcs"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent border bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="printing" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">Printing *</label>
                  <select 
                    id="printing"
                    name="printing"
                    value={formData.printing}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-3 pl-4 pr-10 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent border appearance-none bg-white"
                  >
                    {configuratorOptions.printing.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialRequirements" className="block text-xs font-bold uppercase tracking-wider text-brand-primary mb-2">Special Requirements (Optional)</label>
                <textarea 
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 text-brand-primary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent border bg-white resize-none"
                  placeholder="Any specific features, materials, or delivery requirements..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-sm text-white bg-brand-primary hover:bg-black transition-colors shadow-sm uppercase tracking-wide"
                >
                  Send Specification → WhatsApp
                </button>
              </div>
              
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
