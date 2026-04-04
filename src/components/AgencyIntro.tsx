import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Compass, Zap } from 'lucide-react';

export default function AgencyIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Parallax Image Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative aspect-square rounded-2xl overflow-hidden glass-edge flex items-center justify-center bg-surface-container-low"
        >
          <motion.div style={{ y: imgY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
             <img 
               src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
               alt="Abstract structure"
               className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
             />
          </motion.div>

          <div className="text-center p-12 relative z-10 mix-blend-difference">
            <h3 className="text-5xl font-headline font-bold text-white mb-4 uppercase tracking-tighter mix-blend-overlay">
              Agency <br /> Work
            </h3>
            <p className="text-secondary font-label uppercase tracking-[0.3em] text-xs font-bold">
              The Digital Atelier
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/5 z-0" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-8 leading-tight"
          >
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container italic">We Are</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-on-surface/60 font-body text-lg leading-relaxed mb-12 max-w-xl"
          >
            Parallel Designs is a high-end digital atelier dedicated to crafting prestige online experiences. We reject the generic, opting instead for intentional asymmetry and editorial precision that commands attention.
          </motion.p>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all text-primary">
                <Compass size={24} />
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface mb-1 text-xl group-hover:text-primary transition-colors">Curated Excellence</h4>
                <p className="text-on-surface/50 text-sm">Every pixel is placed with surgical intent and luxury aesthetic.</p>
              </div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="flex gap-4 group"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0 border border-secondary/20 group-hover:bg-secondary group-hover:text-on-secondary transition-all text-secondary">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface mb-1 text-xl group-hover:text-secondary transition-colors">Structural Integrity</h4>
                <p className="text-on-surface/50 text-sm">Code that matches the sophistication of the visual layer.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
