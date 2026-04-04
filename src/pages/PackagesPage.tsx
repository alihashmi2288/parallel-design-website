import { motion } from 'motion/react';
import Pricing from '../components/Pricing';

export default function PackagesPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-secondary font-label uppercase tracking-[0.4em] text-xs mb-6 block">
            Investment Portfolios
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-on-surface mb-12">
            TIERED <br />
            <span className="text-primary italic">PRESTIGE.</span>
          </h1>
          <p className="text-on-surface/60 font-body text-xl leading-relaxed max-w-2xl">
            We offer transparent investment portfolios designed for brands at every stage of their digital journey. Choose the tier that best aligns with your ambitions.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-[1920px] mx-auto">
        <Pricing />
      </section>

      <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto mt-32 bg-surface-container-low rounded-3xl glass-edge text-center">
        <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-8 leading-tight">
          Custom <span className="text-primary">Commissions?</span>
        </h2>
        <p className="text-on-surface/60 font-body text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Need something beyond our standard portfolios? We offer bespoke digital partnerships for global leaders. Let's discuss your unique requirements.
        </p>
        <button className="btn-primary px-12 py-4">
          Request Bespoke Quote
        </button>
      </section>
    </div>
  );
}
