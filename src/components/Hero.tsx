import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Hero() {
  const filters = ['All Projects', 'Branding', 'Web', 'Motion'];

  return (
    <header className="px-6 md:px-12 mb-20 max-w-[1920px] mx-auto pt-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-secondary font-label uppercase tracking-[0.4em] text-xs mb-4 block">
            Archive 2024
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-on-surface">
            Curated <br /> 
            <span className="text-primary">Digital Artefacts.</span>
          </h1>
        </motion.div>

        <div className="flex flex-wrap gap-4 font-label text-[0.65rem] uppercase tracking-widest">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={cn(
                "px-6 py-3 transition-all",
                i === 0 
                  ? "border border-outline-variant/30 text-primary bg-surface-container-high" 
                  : "text-on-surface/60 hover:text-secondary"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
