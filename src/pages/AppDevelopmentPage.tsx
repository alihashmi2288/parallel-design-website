import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { NavLink } from 'react-router-dom';

export default function AppDevelopmentPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const processSteps = [
    { title: "Discovery & Planning", desc: "We begin by grasping the vision formatting exactly tailored logic matching your user matrix." },
    { title: "Wireframing & Design", desc: "Mapping UX user journeys and pixel-perfect high-fidelity interface design." },
    { title: "Development", desc: "Constructing scalable code architecture frameworks for performance and velocity." },
    { title: "Testing", desc: "Quality Assurance across mobile devices verifying integrity." },
    { title: "Launch & Support", desc: "Deploying your application to the iOS/Android stores with ongoing premium support." }
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
            <span>APP DEVELOPMENT SERVICES</span>
            <button className="glass-pill flex items-center gap-2 group text-sm self-center mt-2 px-6 py-2 border-secondary/40 text-secondary hover:shadow-[0_0_20px_rgba(89,218,209,0.3)] bg-secondary/10 hover:bg-secondary/20 transition-all cursor-pointer">
              Book a Call 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </h1>
        </motion.div>
      </section>

      {/* 2. INTRO BLOCK: Bringing Ideas to Powerful Mobile Experiences */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-secondary uppercase leading-tight">
            BRINGING IDEAS <br />
            <span className="text-on-surface">TO <span className="text-primary italic">POWERFUL MOBILE</span> EXPERIENCES</span>
          </h2>
          <p className="text-on-surface/60 font-body text-lg leading-relaxed mb-4">
            Parallel Designs creates specialized mobile application development covering iOS and Android requirements to increase integration, deliver conceptual products, and secure individual metrics.
          </p>
          <p className="text-on-surface/60 font-body text-lg leading-relaxed">
            Our expert team constructs authoritative environments utilizing cutting-edge cross-platform solutions so your application is well-positioned for aggressive consumer engagement.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="relative glass-edge rounded-2xl overflow-hidden p-8 bg-surface-container/50 hover:bg-surface-container transition-colors flex justify-center items-center">
           {/* Placeholder for floating phones. A standard app placeholder image works here. */}
           <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop" 
              alt="Mobile App Development" 
              className="w-full max-w-[500px] h-[400px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
              referrerPolicy="no-referrer"
           />
        </motion.div>
      </section>

      {/* 3. REASONS TO PARTNER */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32 bg-surface-container-low p-12 rounded-3xl glass-edge">
        <motion.div {...fadeInUp} className="order-2 md:order-1 relative overflow-hidden rounded-2xl h-[500px]">
           <img 
              src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1200&auto=format&fit=crop" 
              alt="Developer Working" 
              className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
           />
        </motion.div>
        <motion.div {...fadeInUp} className="order-1 md:order-2 px-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8 text-on-surface uppercase">
            REASONS TO <span className="text-secondary">PARTNER</span> WITH PARALLEL DESIGNS
          </h2>
          <p className="text-on-surface/60 font-body text-base leading-relaxed mb-8">
            The distinct mobile ecosystem continues to evolve. Our unified architectural approach grants your software unparalleled technical autonomy. 
          </p>
          <ul className="space-y-4">
             {[
               "Custom-built solutions — We develop applications tailored explicitly to your unique business logic.",
               "Omnichannel deployment — iOS and Android dominance.",
               "Performance frameworks — Fluid technologies matching consumer interaction standards.",
               "Luxury UI/UX Design — Impact-driven visual executions mirroring enterprise aesthetics.",
               "Post-Launch Maintenance — Committed lifecycle care for updates, security scaling, and infrastructure support."
             ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 hover:-translate-y-1 transition-transform cursor-default">
                   <div className="bg-secondary/10 p-1 rounded mt-1">
                     <CheckCircle2 className="text-secondary shrink-0" size={16} />
                   </div>
                   <span className="text-on-surface/80 font-body text-sm leading-relaxed">{item}</span>
                </li>
             ))}
          </ul>
        </motion.div>
      </section>

      {/* 4. OUR APPLICATION DEVELOPMENT SERVICES */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32 max-w-5xl">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">
             OUR <span className="text-secondary">APPLICATION DEVELOPMENT</span> SERVICES
           </h2>
        </div>
        <div className="space-y-6">
           {[
             { title: "iOS Mobile App Development", desc: "Our approach strictly adheres to iOS design philosophy yielding natively performant apps rendering perfectly across Apple ecosystems." },
             { title: "Android App Development", desc: "Deploy seamlessly formatted Android ecosystems capturing large-scale consumer markets with unhindered technical fluidity." },
             { title: "Cross-Platform Development", desc: "Optimize your presence via single-codebase derivations offering cost-efficient architecture without sacrificing quality parameters." },
             { title: "Enterprise Mobile Apps", desc: "High-level internal workforce applications delivering comprehensive process utility integrated with legacy operational endpoints." },
             { title: "UI/UX Design for Apps", desc: "Intuitive mechanics engineered fundamentally around human-centric usage ensuring uncompromised digital experiences." }
           ].map((sol, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface-container border border-outline-variant/20 p-8 rounded-xl hover:border-secondary/50 hover:bg-surface-container-high transition-all group"
             >
                <h3 className="text-on-surface font-headline font-bold mb-3 group-hover:text-secondary transition-colors text-xl uppercase tracking-wider">{sol.title}</h3>
                <p className="text-on-surface/50 font-body text-base leading-relaxed">{sol.desc}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 5. WHERE WE WORK */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <div className="bg-surface-container-low rounded-3xl p-12 glass-edge grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="flex justify-center items-center">
               <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent flex items-center justify-center animate-pulse border border-primary/20 shadow-[0_0_50px_rgba(242,202,80,0.1)]">
                 <Globe className="w-32 h-32 text-primary opacity-50" />
               </div>
            </motion.div>
            <motion.div {...fadeInUp}>
               <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-on-surface uppercase">
                 WHERE <span className="text-secondary">WE WORK</span>
               </h2>
               <p className="text-on-surface/60 font-body mb-6 text-sm">
                 We operate across tier-one tech hubs globally delivering apps to global scale:
               </p>
               <ul className="space-y-4 mb-8">
                 {[
                   "Mobile application development in Dallas, TX",
                   "Mobile app developers in Austin",
                   "Mobile app development in London",
                   "Mobile application development in San Francisco",
                   "Mobile app development company in Houston",
                   "Mobile app development in New Jersey"
                 ].map((loc, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-on-surface/80 hover:text-primary transition-colors cursor-default">
                       <MapPin className="text-secondary shrink-0" size={16} />
                       {loc}
                    </li>
                 ))}
               </ul>
               <p className="text-on-surface/50 font-body text-xs italic">We break demographic boundaries. Our systems are fully equipped to create impact anywhere.</p>
            </motion.div>
        </div>
      </section>

      {/* 6. OUR MOBILE APP DEVELOPMENT PROCESS */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase">
             OUR <span className="text-secondary">MOBILE APP DEVELOPMENT</span> PROCESS
           </h2>
           <p className="text-on-surface/50 mt-4 max-w-2xl mx-auto font-body">We follow a strict pipeline executing your software across robust logical intervals.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 relative max-w-5xl mx-auto">
          {processSteps.map((step, idx) => (
            <motion.div 
               key={idx}
               {...fadeInUp}
               transition={{ duration: 0.5, delay: idx * 0.15 }}
               className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-surface-container rounded-2xl p-8 glass-edge relative group hover:bg-surface-container-high transition-all flex flex-col hover:-translate-y-2 border border-outline-variant/20 hover:border-secondary/50 text-center"
            >
               <h3 className="text-on-surface group-hover:text-secondary transition-colors font-headline font-bold text-lg mb-4 uppercase border-b border-outline-variant/20 pb-4">{step.title}</h3>
               <p className="text-on-surface/60 font-body text-xs leading-loose">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. TRUST BADGES */}
      <section className="border-y border-outline-variant/20 bg-surface-container-highest py-12 mb-32 overflow-hidden flex flex-wrap justify-center gap-8 md:gap-16 px-6">
         {['Forbes', 'Gartner', 'TechCrunch', 'AppFutura', 'Clutch'].map((item) => (
            <div key={item} className="h-16 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
               <span className="text-on-surface font-headline text-2xl md:text-3xl font-bold tracking-tighter uppercase">{item}</span>
            </div>
         ))}
      </section>

      {/* 8. CTA FOOTER SECTION */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-10">
         <div className="bg-gradient-to-br from-surface-container-highest via-surface-container to-background border border-outline-variant/30 py-24 px-12 rounded-3xl text-center flex flex-col justify-center items-center relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold uppercase mb-8 relative z-10 leading-[0.9]">
              EXPAND YOUR BUSINESS WITH <br/> PARALLEL <span className="text-secondary">DESIGNS</span>
            </h2>
            <div className="relative z-10 flex border-t border-outline-variant/20 w-full pt-16 flex-col justify-center items-center mt-12 gap-6">
               <h3 className="text-2xl md:text-4xl font-headline font-bold uppercase text-on-surface">
                 LET'S BUILD THE NEXT BIG <br/> THING <span className="text-secondary">TOGETHER</span>
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

import { SVGProps } from 'react';

// Emulate simple globe component locally if lucide hasn't exported it properly, we just used Globe from lucide which is fine.
const Globe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
)
