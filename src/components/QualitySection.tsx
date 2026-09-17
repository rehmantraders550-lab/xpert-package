import { motion } from 'motion/react';

const principles = [
  {
    title: "Dimensional Accuracy",
    description: "Consistent size and structural integrity according to your precise packaging specification."
  },
  {
    title: "Consistent Thickness",
    description: "Controlled material thickness throughout the production run for reliable performance."
  },
  {
    title: "Strong Sealing",
    description: "Reliable sealing technology engineered to meet specific load and handling requirements."
  },
  {
    title: "Custom Specifications",
    description: "Flexible production configured exactly to the customer's technical and physical requirements."
  }
];

export default function QualitySection() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-5">
            <div className="text-brand-secondary font-medium text-sm tracking-widest mb-4">
              06 / QUALITY
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Built Around<br /> Consistency.
            </h2>
            <p className="text-lg text-brand-secondary max-w-md">
              Quality control is a core manufacturing principle at Xpert Packages. We focus on consistent output for reliable packaging performance.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {principles.map((principle, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-8 h-px bg-brand-accent mb-6"></div>
                  <h3 className="text-lg font-bold font-display tracking-wide mb-3">{principle.title}</h3>
                  <p className="text-sm text-brand-secondary leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
