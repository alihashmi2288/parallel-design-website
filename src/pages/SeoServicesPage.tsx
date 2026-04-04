import { motion } from 'motion/react';
import { CheckCircle2, Target, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { NavLink } from 'react-router-dom';

export default function SeoServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const processSteps = [
    { title: "Research & Audit", desc: "A deep dive into your technical and contextual footprint." },
    { title: "Strategy", desc: "Constructing an aggressive roadmap reaching KPIs." },
    { title: "On-Page Technical", desc: "Executing structural adjustments improving crawl." },
    { title: "Reporting and Growth", desc: "Persistent analytics monitoring metrics weekly." },
    { title: "Link Building", desc: "Procuring high-authority contextual backlinks." },
    { title: "Content / Keywords", desc: "Deploying high-value indexable media." }
  ];

  return (
    <div className="pt-32 pb-20 bg-background text-on-surface">
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto text-center mb-32">
        <motion.div {...fadeInUp}>
          <h2 className="text-xl md:text-2xl font-headline font-bold text-on-surface mb-2 tracking-widest uppercase">
            PARALLEL DESIGNS
          </h2>
          <h1 className="text-4xl md:text-7xl font-headline font-bold text-secondary mb-8 leading-tight flex flex-col justify-center items-center gap-4 relative uppercase">
            <span>SEO SERVICES</span>
            <button className="glass-pill flex items-center gap-2 group text-sm self-center mt-2 px-6 py-2 border-secondary/40 text-secondary hover:shadow-[0_0_20px_rgba(89,218,209,0.3)] bg-secondary/10 hover:bg-secondary/20 transition-all cursor-pointer">
              Book a Call 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </h1>
        </motion.div>
      </section>

      {/* 2. INTRO BLOCK */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 text-secondary uppercase leading-tight">
            SEO SERVICES <br />
            <span className="text-on-surface">AT AFFORDABLE PRICES THAT <span className="text-primary italic">GROW AN ORGANIZATION</span></span>
          </h2>
          <p className="text-on-surface/60 font-body text-lg leading-relaxed mb-4">
            Our specialized SEO campaigns push authoritative ranking metrics. We prioritize long-term index stability translating directly to pipeline conversion values.
          </p>
          <p className="text-on-surface/60 font-body text-lg leading-relaxed">
            From technical crawl compliance to aggressive off-page scaling, our methods are heavily audited to match Google's latest algorithmic conditions.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="relative glass-edge rounded-2xl overflow-hidden p-8 bg-surface-container/50 hover:bg-surface-container transition-colors flex justify-center items-center">
           <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
              alt="SEO Analytics" 
              className="w-full max-w-[500px] h-[400px] object-cover rounded-xl filter contrast-125 saturate-50 hover:saturate-100 transition-all duration-700"
              referrerPolicy="no-referrer"
           />
        </motion.div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 pt-16 border-t border-outline-variant/10">
        <motion.div {...fadeInUp} className="order-2 md:order-1 relative overflow-hidden rounded-2xl h-[500px] bg-surface-container flex items-center justify-center p-8">
           <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" 
              alt="Professional Strategy" 
              className="w-full h-full object-cover grayscale opacity-90 rounded-xl"
              referrerPolicy="no-referrer"
           />
        </motion.div>
        <motion.div {...fadeInUp} className="order-1 md:order-2 px-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8 text-on-surface uppercase leading-tight">
            WHY SHOULD <span className="text-secondary">PARALLEL DESIGNS</span> BE MY SEO COMPANY?
          </h2>
          <p className="text-on-surface/60 font-body text-base leading-relaxed mb-8">
            Choosing Parallel Designs ensures your organic operations are running smoothly without penalties. Our elite digital architects optimize for dominance.
          </p>
          <ul className="space-y-4">
             {[
               "Total radical transparency in reporting.",
               "Unconventional backlink strategies.",
               "Strict alignment with your business metrics.",
               "High-performance technical modifications.",
               "Aggressive indexing across global territories."
             ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                   <div className="bg-primary/10 p-1 rounded mt-1">
                     <CheckCircle2 className="text-primary shrink-0" size={16} />
                   </div>
                   <span className="text-on-surface/80 font-body text-sm leading-relaxed">{item}</span>
                </li>
             ))}
          </ul>
        </motion.div>
      </section>

      {/* 4. CONTENT BLOCKS (Alternating layout for detailed SEO services) */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto space-y-24 mb-32">
         
         {/* Technical SEO */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
               <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-on-surface uppercase">
                 <span className="text-secondary">TECHNICAL SEO</span> SERVICES
               </h2>
               <p className="text-on-surface/60 font-body leading-relaxed mb-6">
                 Engineering robust structural foundations so search engines parse your entity models flawlessly.
               </p>
               <ul className="space-y-3 mb-6">
                  {["Website speed adjustments", "Crawling protocol updates", "Schema JSON schema", "Core Web Vitals tuning"].map((x, i) => (
                     <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-secondary" size={14} />
                        <span className="text-on-surface/80 text-sm font-label uppercase tracking-widest">{x}</span>
                     </li>
                  ))}
               </ul>
               <p className="text-xs text-on-surface/40 italic">We strictly adhere to indexing frameworks mandated by global search authorities.</p>
            </motion.div>
            <motion.div {...fadeInUp} className="glass-edge rounded-2xl overflow-hidden p-6 bg-surface-container-low flex justify-center h-[350px]">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="Technical Data" className="rounded-xl w-full object-cover filter contrast-125 saturate-50" referrerPolicy="no-referrer" />
            </motion.div>
         </div>

         {/* SEO Audit Service */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="order-2 md:order-1 glass-edge rounded-2xl overflow-hidden bg-surface-container-low p-6 h-[350px]">
               <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop" alt="Audit Tools" className="w-full h-full object-cover rounded-xl filter grayscale" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 md:order-2">
               <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-on-surface uppercase">
                 <span className="text-secondary">SEO AUDIT</span> SERVICE
               </h2>
               <p className="text-on-surface/60 font-body leading-relaxed mb-6">
                 Executing deep structural diagnostics to map out historical inefficiencies affecting domain growth.
               </p>
               <ul className="grid grid-cols-2 gap-4">
                 {['Toxicity metrics', 'Penalty recoveries', 'Migration auditing', 'Content mapping'].map((ind, i) => (
                    <div key={i} className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                      <Target className="text-primary shrink-0" size={16} />
                      <span className="text-on-surface/80 text-sm font-label uppercase tracking-wider">{ind}</span>
                    </div>
                 ))}
               </ul>
            </motion.div>
         </div>
         
         {/* Affordable Local SEO */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
               <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-on-surface uppercase">
                 AFFORDABLE <span className="text-secondary">LOCAL SEO</span> SERVICES
               </h2>
               <p className="text-on-surface/60 font-body leading-relaxed mb-6">
                 Capture localized geography utilizing highly configured Google Maps architecture.
               </p>
               <ul className="space-y-3 mb-6">
                  {["GMB Account Creation", "Local Citations Mapping", "GPS Coordinate Aligning"].map((x, i) => (
                     <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-secondary" size={14} />
                        <span className="text-on-surface/80 text-sm font-label uppercase tracking-widest">{x}</span>
                     </li>
                  ))}
               </ul>
            </motion.div>
            <motion.div {...fadeInUp} className="glass-edge rounded-2xl overflow-hidden p-6 bg-surface-container-low flex justify-center h-[350px]">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" alt="Local Map" className="rounded-xl w-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </motion.div>
         </div>

      </section>

      {/* 5. OUR SEO PROCESS */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32 bg-surface-container-lowest pt-16">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase">
             OUR <span className="text-secondary">SEO</span> PROCESS
           </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative max-w-6xl mx-auto">
          {processSteps.map((step, idx) => (
            <motion.div 
               key={idx}
               {...fadeInUp}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-surface-container-low rounded-2xl p-8 glass-edge relative group hover:bg-surface-container transition-all flex flex-col text-left border border-outline-variant/20 hover:border-secondary/50"
            >
               <h3 className="text-on-surface group-hover:text-primary transition-colors font-headline font-bold text-lg mb-4 uppercase">{step.title}</h3>
               <p className="text-on-surface/60 font-body text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. TRUST BADGES */}
      <section className="border-y border-outline-variant/20 bg-surface-container-highest py-12 mb-32 overflow-hidden flex flex-wrap justify-center gap-8 md:gap-16 px-6">
         {['Forbes', 'Gartner', 'TechCrunch', 'AppFutura', 'Clutch'].map((item) => (
            <div key={item} className="h-16 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
               <span className="text-on-surface font-headline text-2xl md:text-3xl font-bold tracking-tighter uppercase">{item}</span>
            </div>
         ))}
      </section>

      {/* 7. CTA FOOTER SECTION */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-10">
         <div className="bg-gradient-to-br from-surface-container-highest via-surface-container to-background border border-outline-variant/30 py-24 px-12 rounded-3xl text-center flex flex-col justify-center items-center relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold uppercase mb-8 relative z-10 leading-[0.9]">
              START RANKING HIGHER <br/> <span className="text-secondary">TODAY</span>
            </h2>
            <div className="relative z-10 flex border-t border-outline-variant/20 w-full pt-16 flex-col justify-center items-center mt-12 gap-6">
               <h3 className="text-2xl md:text-4xl font-headline font-bold uppercase text-on-surface">
                 LET'S BUILD THE NEXT BIG <br/> THING <span className="text-primary">TOGETHER</span>
               </h3>
               <NavLink to="/contact" className="btn-primary px-12 py-4 text-sm mt-4 hover:shadow-[0_0_30px_rgba(242,202,80,0.5)]">
                 START YOUR PROJECT
               </NavLink>
            </div>
         </div>
      </section>

    </div>
  );
}
