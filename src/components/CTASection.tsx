import { motion } from 'motion/react';

export default function CTASection() {
  return (
    <section className="bg-surface-container-low py-32 px-6 md:px-12 text-center overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-8"
        >
          Ready to define your <span className="text-secondary">digital frontier?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-on-surface/60 font-body text-xl mb-12 max-w-2xl mx-auto"
        >
          We partner with ambitious brands to craft premium digital experiences that command attention.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-5 rounded-lg font-label uppercase tracking-widest text-sm font-bold shadow-[0_24px_48px_rgba(242,202,80,0.2)]"
        >
          Start a Project
        </motion.button>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
