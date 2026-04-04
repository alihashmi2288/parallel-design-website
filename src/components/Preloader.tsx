import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
          }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Background Wavy Elements */}
          <motion.div 
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0 flex items-center justify-center opacity-20"
          >
            <div className="w-[150vw] h-[150vw] rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[100vw] h-[100vw] rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]" />
          </motion.div>

          {/* Logo Reveal */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-xl border border-primary/30 flex items-center justify-center relative overflow-hidden mb-4 bg-surface-container-low shadow-[0_0_30px_rgba(242,202,80,0.2)]">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                 <span className="text-primary font-headline text-2xl font-bold">P</span>
              </div>
              <h2 className="text-2xl font-bold tracking-widest text-on-surface font-headline uppercase flex">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  PARALLEL
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-primary ml-2"
                >
                  DESIGNS
                </motion.span>
              </h2>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-48 h-1 bg-surface-container-high rounded-full overflow-hidden mt-4 relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.8, ease: "circOut" }}
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary w-full h-full"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-4 text-xs font-label uppercase tracking-widest text-primary/70"
            >
              Initializing Space
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
