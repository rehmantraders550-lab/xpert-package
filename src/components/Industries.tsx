import { motion } from 'motion/react';
import { industriesData } from '../data/content';

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="text-brand-secondary font-medium text-sm tracking-widest mb-4">
            04 / INDUSTRIES
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Packaging for Every Kind of Business.
          </h2>
          <p className="text-lg text-brand-secondary">
            Our LLDPE bags serve diverse commercial and industrial packaging applications with tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {industriesData.map((industry, i) => (
            <motion.a 
              href="#products"
              key={industry.id}
              className="group relative overflow-hidden rounded-lg aspect-square sm:aspect-[4/3] bg-gray-200 cursor-pointer block focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:outline-none"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img 
                src={industry.image} 
                alt={`${industry.name} Packaging`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-display font-bold text-lg md:text-xl tracking-wide">{industry.name}</h3>
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
