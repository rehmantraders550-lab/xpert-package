import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { configuratorOptions } from '../data/content';
import { BagConfiguration } from '../types';
import { generateConfiguratorMessage, createWhatsAppLink } from '../lib/whatsapp';

export default function BagConfigurator() {
  const [config, setConfig] = useState<BagConfiguration>({
    material: configuratorOptions.materials[0].value,
    quality: configuratorOptions.qualities[0].value,
    thickness: configuratorOptions.thicknesses[1].value,
    size: configuratorOptions.sizes[2].value,
    color: configuratorOptions.colors[0].value,
    printing: configuratorOptions.printing[0].value,
  });

  const handleConfigChange = (key: keyof BagConfiguration, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleWhatsAppQuote = () => {
    const message = generateConfiguratorMessage(config);
    window.open(createWhatsAppLink(message), '_blank');
  };

  // Determine preview based on selections
  const previewState = useMemo(() => {
    let baseOpacity = 0.8;
    let bgColor = "rgba(255, 255, 255, 0.2)";
    let borderColor = "rgba(0, 0, 0, 0.1)";

    if (config.color === 'Transparent') {
      bgColor = "rgba(255, 255, 255, 0.1)";
      borderColor = "rgba(0, 0, 0, 0.1)";
      baseOpacity = 0.4;
    } else if (config.color === 'Milky White') {
      bgColor = "rgba(255, 255, 255, 0.9)";
      borderColor = "rgba(0, 0, 0, 0.1)";
      baseOpacity = 0.95;
    } else if (config.color === 'Black') {
      bgColor = "rgba(20, 20, 25, 0.95)";
      borderColor = "rgba(255, 255, 255, 0.1)";
      baseOpacity = 1;
    } else if (config.color === 'Custom') {
      bgColor = "rgba(23, 105, 210, 0.8)";
      borderColor = "rgba(0, 0, 0, 0.2)";
      baseOpacity = 0.9;
    }

    const hasPrint = config.printing !== 'Plain';

    return { bgColor, borderColor, baseOpacity, hasPrint };
  }, [config.color, config.printing]);

  return (
    <section id="configurator" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="text-brand-accent font-medium text-sm tracking-widest mb-4">
            02 / INTERACTIVE CONFIGURATOR
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            Build Your Bag.
          </h2>
          <p className="text-lg text-brand-secondary max-w-2xl">
            Select your requirements and see the specification update instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-brand-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Quality */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary">Quality</label>
                <div className="relative">
                  <select 
                    value={config.quality}
                    onChange={(e) => handleConfigChange('quality', e.target.value)}
                    className="block w-full rounded-md border-gray-300 py-2.5 pl-3 pr-10 text-brand-primary focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent sm:text-sm border appearance-none bg-white"
                  >
                    {configuratorOptions.qualities.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-secondary">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary">Material</label>
                <div className="relative">
                  <select 
                    value={config.material}
                    onChange={(e) => handleConfigChange('material', e.target.value)}
                    className="block w-full rounded-md border-gray-300 py-2.5 pl-3 pr-10 text-brand-primary focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent sm:text-sm border appearance-none bg-gray-50 cursor-not-allowed"
                    disabled
                  >
                    {configuratorOptions.materials.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Thickness */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary">Thickness</label>
                <div className="grid grid-cols-2 gap-2">
                  {configuratorOptions.thicknesses.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleConfigChange('thickness', opt.value)}
                      className={`py-2 px-3 text-sm font-medium border rounded-md transition-colors ${
                        config.thickness === opt.value 
                        ? 'bg-brand-primary text-white border-brand-primary' 
                        : 'bg-white text-brand-secondary border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary">Colour</label>
                <div className="grid grid-cols-2 gap-2">
                  {configuratorOptions.colors.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleConfigChange('color', opt.value)}
                      className={`py-2 px-3 text-sm font-medium border rounded-md transition-colors ${
                        config.color === opt.value 
                        ? 'bg-brand-primary text-white border-brand-primary' 
                        : 'bg-white text-brand-secondary border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary">Size (W × L)</label>
                <div className="relative">
                  <select 
                    value={config.size}
                    onChange={(e) => handleConfigChange('size', e.target.value)}
                    className="block w-full rounded-md border-gray-300 py-2.5 pl-3 pr-10 text-brand-primary focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent sm:text-sm border appearance-none bg-white"
                  >
                    {configuratorOptions.sizes.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-secondary">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Printing */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-primary">Printing</label>
                <div className="relative">
                  <select 
                    value={config.printing}
                    onChange={(e) => handleConfigChange('printing', e.target.value)}
                    className="block w-full rounded-md border-gray-300 py-2.5 pl-3 pr-10 text-brand-primary focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent sm:text-sm border appearance-none bg-white"
                  >
                    {configuratorOptions.printing.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-secondary">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Preview & Summary */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-grow bg-white border border-brand-border rounded-lg shadow-sm overflow-hidden flex flex-col">
              
              {/* Visual Stage */}
              <div className="bg-gray-50 flex-grow relative p-8 flex items-center justify-center min-h-[300px]">
                {/* Background Pattern for transparency check */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                
                {/* Bag Visualizer */}
                <motion.div 
                  className="relative w-48 h-64 sm:w-56 sm:h-72 shadow-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: previewState.bgColor,
                    borderColor: previewState.borderColor,
                    borderWidth: '1px',
                    borderRadius: '4px 4px 12px 12px',
                    opacity: previewState.baseOpacity
                  }}
                  animate={{ scale: [0.98, 1] }}
                  key={config.color + config.printing}
                  transition={{ duration: 0.3 }}
                >
                  {/* Sealing Lines */}
                  <div className="absolute bottom-2 left-2 right-2 border-b-2" style={{ borderColor: previewState.borderColor }}></div>
                  
                  {/* Print Indicator */}
                  {previewState.hasPrint && (
                    <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center rounded-sm" style={{ borderColor: config.color === 'Black' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)' }}>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.color === 'Black' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.3)' }}>Print Area</span>
                    </div>
                  )}
                  
                  {/* Highlight overlay for plastic realism */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 mix-blend-overlay pointer-events-none rounded-[inherit]"></div>
                  <div className="absolute top-0 left-4 bottom-0 w-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 pointer-events-none skew-x-12"></div>
                </motion.div>
              </div>
              
              {/* Summary Bar */}
              <div className="bg-brand-dark p-6 text-white" aria-live="polite">
                <div className="text-[10px] uppercase tracking-widest text-brand-secondary mb-2">Live Specification</div>
                <div className="text-sm font-medium font-display tracking-wide flex flex-wrap items-center gap-2">
                  <span className="text-white">{config.material}</span>
                  <span className="text-brand-secondary">·</span>
                  <span className="text-white">{config.thickness}</span>
                  <span className="text-brand-secondary">·</span>
                  <span className="text-white">{config.size}</span>
                  <span className="text-brand-secondary">·</span>
                  <span className="text-white">{config.color}</span>
                  <span className="text-brand-secondary">·</span>
                  <span className="text-white">{config.printing}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppQuote}
              className="mt-4 w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-sm text-white bg-brand-accent hover:bg-blue-700 transition-colors shadow-sm uppercase tracking-wide"
            >
              Get a Quote on WhatsApp →
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
