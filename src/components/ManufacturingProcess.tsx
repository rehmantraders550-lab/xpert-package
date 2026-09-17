import { motion } from 'motion/react';

const steps = [
  { num: "01", name: "Material", desc: "LLDPE raw material" },
  { num: "02", name: "Film", desc: "Film extrusion" },
  { num: "03", name: "Print", desc: "Custom graphics & branding" },
  { num: "04", name: "Convert", desc: "Cutting & sealing" },
  { num: "05", name: "QC", desc: "Quality check" },
  { num: "06", name: "Dispatch", desc: "Ready for your business" },
];

export default function ManufacturingProcess() {
  return (
    <section className="py-24 bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <div className="text-brand-secondary font-medium text-sm tracking-widest mb-4">
            05 / MANUFACTURING PROCESS
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-primary leading-tight">
            From Raw Material<br/>
            to Finished Bag.
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-border -translate-y-1/2"></div>
          
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-4 text-xs font-bold tracking-widest text-brand-secondary">
                  {step.num}
                </div>
                <div className="w-4 h-4 bg-white border-2 border-brand-accent rounded-full mb-6 relative">
                  <div className="absolute inset-0.5 bg-brand-accent rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-sm font-bold font-display text-brand-primary mb-1 uppercase tracking-wider">{step.name}</h3>
                <p className="text-xs text-brand-secondary text-center max-w-[120px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative border-l border-brand-border ml-4 pl-8 space-y-10">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute -left-[39px] top-1 w-4 h-4 bg-white border-2 border-brand-accent rounded-full"></div>
              <div className="text-xs font-bold tracking-widest text-brand-accent mb-1">
                {step.num} — {step.name}
              </div>
              <p className="text-sm text-brand-secondary">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
