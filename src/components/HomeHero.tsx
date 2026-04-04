import React, { useRef, Suspense, lazy, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ArrowRight } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBackground = useTransform(scrollYProgress, [0, 1], [0.4, 0]);

  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  
  useEffect(() => {
    const checkViewport = () => setIsDesktop(window.innerWidth >= 1024);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    // Defer the heavy WebGL fetching specifically until after initial paint to protect LCP metrics
    const timer = setTimeout(() => setShouldLoadSpline(true), 250);

    return () => {
      window.removeEventListener('resize', checkViewport);
      clearTimeout(timer);
    };
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <header ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Dynamic Background with Parallax */}
      <motion.div style={{ y: yBackground, opacity: opacityBackground }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop" 
          alt="Space Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Animated Grid/Wavy Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={fadeInUp} className="text-secondary font-label uppercase tracking-[0.4em] text-xs mb-6 inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
               <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
               The Creative Frontier
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-on-surface mb-8">
              <motion.span variants={fadeInUp} className="block text-transparent bg-clip-text bg-gradient-to-r from-on-surface to-on-surface/50">WELCOME TO</motion.span>
              <motion.span variants={fadeInUp} className="block text-primary">PARALLEL</motion.span>
              <motion.span variants={fadeInUp} className="block text-gradient">DESIGNS</motion.span>
            </h1>
            
            <motion.p variants={fadeInUp} className="text-on-surface/60 font-body text-lg leading-relaxed mb-10 max-w-lg">
              We transcend the ordinary through architectural precision and high-contrast digital craftsmanship. Your vision, redefined by the luxury of deep obsidian space.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="btn-primary px-10 group flex items-center gap-2">
                Launch Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-3 border border-outline-variant/30 text-on-surface rounded-lg font-label uppercase tracking-widest text-[0.7rem] font-bold hover:bg-surface-container-high hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                The Atelier
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image/Graphic Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 10, y: 50 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="relative hidden lg:block perspective-[1000px]"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass-edge shadow-2xl transition-transform duration-700 hover:rotate-y-12 h-[600px] w-full bg-surface-container/20">
              
              {/* Maintain spinning loader until WebGL engine has fully parsed and rasterized the 3D geometry */}
              {(!splineLoaded && isDesktop) && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface-container/30 rounded-2xl backrop-blur-sm border border-primary/10 z-20 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full border-b-2 border-primary animate-spin" />
                </div>
              )}

              {(isDesktop && shouldLoadSpline) && (
                <Suspense fallback={null}>
                  <div 
                    className="absolute inset-x-0 top-0 -bottom-16 transition-opacity duration-1000 ease-out"
                    style={{ opacity: splineLoaded ? 1 : 0 }}
                  >
                    <Spline 
                      scene="https://prod.spline.design/0ETCm6-H5ZyTeaS5/scene.splinecode" 
                      onLoad={() => setSplineLoaded(true)}
                    />
                  </div>
                </Suspense>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay pointer-events-none" />
            </div>
            
            {/* Decorative Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -inset-10 bg-primary/20 blur-[100px] z-0 rounded-full" 
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
