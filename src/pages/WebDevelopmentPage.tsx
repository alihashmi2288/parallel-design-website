import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Target, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { NavLink } from 'react-router-dom';

export default function WebDevelopmentPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const processSteps = [
    { title: "Discovery & Planning", desc: "We start by understanding your brand, target audience, and business goals to map out exactly what you need." },
    { title: "Initial UI/UX Sketches", desc: "Developing wireframes and structural prototypes to ensure optimal user journeys and layout hierarchy." },
    { title: "Develop and Code Launch", desc: "Building the digital product with modern, scalable, and responsive web technologies." },
    { title: "Testing & Launch", desc: "Rigorous quality assurance, performance testing, and a smooth deployment to production." }
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
            <span>WEBSITE DEVELOPMENT SERVICE</span>
            <button className="glass-pill flex items-center gap-2 group text-sm self-center mt-2 px-6 py-2 border-secondary/40 text-secondary hover:shadow-[0_0_20px_rgba(89,218,209,0.3)] bg-secondary/10 hover:bg-secondary/20 transition-all cursor-pointer">
              Order Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </h1>
        </motion.div>
      </section>

      {/* 2. INTRO BLOCK */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-on-surface uppercase leading-tight">
            WEB DEVELOPMENT OF <span className="text-primary italic">A PROFESSIONAL WEBSITE FOR YOUR COMPANY</span>
          </h2>
          <p className="text-on-surface/60 font-body text-lg leading-relaxed mb-4">
            Establishing a robust online presence is crucial. Our custom web development services ensure your company stands out, functions flawlessly, and scales securely in a competitive digital space.
          </p>
          <p className="text-on-surface/60 font-body text-lg leading-relaxed">
            We deliver state-of-the-art solutions tailored to your unique operational and branding requirements.
          </p>
        </motion.div>
        <motion.div {...fadeInUp} className="relative glass-edge rounded-2xl overflow-hidden p-8 bg-surface-container/50 hover:bg-surface-container transition-colors flex justify-center items-center">
           <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" 
              alt="Laptop Code" 
              className="w-full max-w-[500px] h-auto object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
           />
        </motion.div>
      </section>

      {/* 3. VALUE PROPOSITION */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32 bg-surface-container-low p-12 rounded-3xl glass-edge">
        <motion.div {...fadeInUp} className="order-2 md:order-1 relative overflow-hidden rounded-2xl h-[500px]">
           <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" 
              alt="Professional Woman" 
              className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105"
              referrerPolicy="no-referrer"
           />
        </motion.div>
        <motion.div {...fadeInUp} className="order-1 md:order-2 px-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8 text-on-surface uppercase">
            OUR SERVICES ARE <span className="text-secondary">THE BEST CHOICE</span> FOR SEVERAL REASONS
          </h2>
          <ul className="space-y-6">
             {[
               "Customized solutions tailored to your specific market requirements.",
               "Uncompromised pixel-perfect quality and high-contrast digital craftsmanship.",
               "Search engine optimized architecture executed from the conceptual stage.",
               "Rigorous end-to-end testing against vulnerabilities and edge cases.",
               "Punctual delivery pipelines ensuring momentum and business continuity.",
               "Affordable pricing schemas intelligently aligned with world-class production."
             ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 hover:-translate-y-1 transition-transform cursor-default">
                   <div className="bg-primary/10 p-1 rounded mt-1">
                     <CheckCircle2 className="text-primary shrink-0" size={16} />
                   </div>
                   <span className="text-on-surface/80 font-body leading-relaxed">{item}</span>
                </li>
             ))}
          </ul>
        </motion.div>
      </section>

      {/* 4. PROCESS GRAPHIC */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase">
             OUR <span className="text-secondary">WEB DEVELOPMENT</span> PROCESS
           </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-[15%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent -z-10" />
          
          {processSteps.map((step, idx) => (
            <motion.div 
               key={idx}
               {...fadeInUp}
               transition={{ duration: 0.5, delay: idx * 0.15 }}
               className="bg-surface-container-low rounded-2xl p-8 glass-edge relative group hover:bg-surface-container-high transition-all flex flex-col items-center text-center hover:-translate-y-2 border border-outline-variant/20 hover:border-primary/50"
            >
               <div className="w-12 h-12 bg-background rounded-full glass-edge flex items-center justify-center mb-6 text-on-surface font-bold text-xl scale-110 group-hover:bg-primary group-hover:text-black transition-colors">
                  {idx + 1}
               </div>
               <h3 className="text-primary font-headline font-bold text-lg mb-4 uppercase">{step.title}</h3>
               <p className="text-on-surface/60 font-body text-sm leading-loose">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. SOLUTIONS WE PROVIDE */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32 flex flex-col items-center">
        <div className="text-center mb-16 max-w-4xl mx-auto">
           <span className="text-secondary font-label uppercase tracking-[0.4em] text-xs mb-4 block">Methodology</span>
           <h2 className="text-4xl md:text-6xl font-headline font-bold uppercase">
             WEB DEVELOPMENT <span className="text-secondary">SOLUTIONS WE PROVIDE</span>
           </h2>
        </div>
        <div className="w-full max-w-3xl space-y-4">
           {[
             { title: "Custom Mobile App Development", desc: "We provide high-performance native and cross-platform applications ensuring seamless user-journeys." },
             { title: "E-Commerce Management", desc: "Secure, scalable storefronts engineered for premium high-conversion consumer flows." },
             { title: "Dedicated Engineering Teams", desc: "Access to elite technical talent integrating directly into your ongoing digital missions." },
             { title: "Maintain & Support Web Applications", desc: "Continuous iterative improvements, monitoring, and white-glove security post-launch." },
             { title: "Corporate Websites and Portfolios", desc: "Authoritative digital canvases highlighting your brand legacy and corporate milestones." }
           ].map((sol, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-xl hover:border-secondary/50 hover:bg-surface-container transition-all group flex items-start gap-4 cursor-default"
             >
                <div className="mt-1 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                   <ChevronRight className="text-secondary" size={18} />
                </div>
                <div>
                  <h3 className="text-on-surface font-headline font-bold mb-2 group-hover:text-secondary transition-colors text-lg uppercase tracking-wider">{sol.title}</h3>
                  <p className="text-on-surface/50 font-body text-sm leading-relaxed">{sol.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 6. BENEFITS & TRUST (Alternating Blocks) */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto space-y-32 mb-32 pt-20 border-t border-outline-variant/10">
         {/* Block 1 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
               <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-secondary uppercase leading-tight">
                 LOW PRICES <span className="text-on-surface">OF SELECTING</span> PARALLEL DESIGNS <span className="text-on-surface">INC</span>
               </h2>
               <p className="text-on-surface/60 font-body leading-relaxed mb-8">
                 Selecting the right agency means receiving premium, enterprise-level products while remaining radically capital-efficient. We optimize infrastructure costs without sacrificing the luxury end-result.
               </p>
               <ul className="space-y-4">
                  {[
                    "Zero hidden fees. Complete retainer transparency.",
                    "High-ROI architectural layouts minimizing tech-debt.",
                    "Dedicated account management at no extra premium."
                  ].map((x, i) => (
                     <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={16} />
                        <span className="text-on-surface/80 text-sm">{x}</span>
                     </li>
                  ))}
               </ul>
            </motion.div>
            <motion.div {...fadeInUp} className="glass-edge rounded-2xl overflow-hidden p-6 bg-surface-container flex justify-center items-center">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="Data Screen" className="rounded-xl w-full h-[400px] object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" referrerPolicy="no-referrer" />
            </motion.div>
         </div>

         {/* Block 2 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="order-2 md:order-1 glass-edge rounded-2xl overflow-hidden bg-surface-container p-6">
               <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" alt="Corporate Architecture" className="w-full h-[450px] object-cover rounded-xl filter grayscale contrast-125" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 md:order-2">
               <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-on-surface uppercase leading-tight">
                 <span className="text-secondary">INDUSTRIES</span> WE SERVE
               </h2>
               <p className="text-on-surface/60 font-body leading-relaxed mb-10">
                 We've delivered authoritative systems across high-stakes domains where quality is strictly non-negotiable. Our aesthetic footprint fits perfectly within legacy sectors demanding modernization.
               </p>
               <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                 {['Real Estate', 'FinTech', 'E-Commerce', 'Tech / SaaS', 'Healthcare', 'Creative Media'].map((ind, i) => (
                    <div key={i} className="flex items-center gap-3 hover:text-primary transition-colors cursor-default">
                      <Target className="text-primary shrink-0" size={18} />
                      <span className="text-on-surface/80 text-sm font-label uppercase tracking-wider">{ind}</span>
                    </div>
                 ))}
               </div>
            </motion.div>
         </div>

         {/* Block 3 */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
               <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 text-on-surface uppercase leading-tight">
                 THE REASON <span className="text-secondary">WHY BUSINESSES TRUST</span> PARALLEL DESIGNS INC
               </h2>
               <p className="text-on-surface/60 font-body leading-relaxed mb-8">
                 Trust is earned through consistent execution, absolute reliability, and a partnership approach that prioritizes your success and timeline over everything else.
               </p>
               <ul className="space-y-4">
                  {[
                    "Proven track record across competitive global markets.",
                    "Obsessive dedication to code architecture and stability.",
                    "Direct communication lines with senior engineering leads."
                  ].map((x, i) => (
                     <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={16} />
                        <span className="text-on-surface/80 text-sm">{x}</span>
                     </li>
                  ))}
               </ul>
            </motion.div>
            <motion.div {...fadeInUp} className="glass-edge rounded-2xl overflow-hidden p-6 bg-surface-container flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop" alt="Handshake" className="rounded-xl w-full h-[400px] object-cover grayscale opacity-90" referrerPolicy="no-referrer" />
            </motion.div>
         </div>
      </section>

      {/* 7. PRICING TABLE */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32 pt-20 border-t border-outline-variant/10">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-lg md:text-2xl font-headline font-bold text-secondary uppercase tracking-[0.3em]">
              OUR PRICING
            </h2>
            <h3 className="text-4xl md:text-7xl font-headline font-bold text-on-surface uppercase text-right leading-[0.9]">
              START WITH <br /> <span className="text-secondary">AFFORDABLE PRICE</span>
            </h3>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { name: "Bronze Package", price: "$99", features: ["1 Page Website", "Basic Design UI", "Contact Form", "Mobile Responsive", "Standard Delivery"] },
             { name: "Silver Package", price: "$150", features: ["3 Page Website", "Premium Design UI", "Contact Form", "Basic SEO Setup", "Mobile Responsive", "Priority Delivery"] },
             { name: "Gold Package", price: "$250", pop: true, features: ["5 Page Website", "Custom UX/UI Layouts", "Advanced Forms", "CMS Integration", "Standard SEO Strategy", "Mobile Responsive", "Express Delivery"] },
             { name: "Platinum Package", price: "$400", features: ["10+ Page Website", "E-Commerce Ready", "Complex API Integrations", "Custom Backend", "Enterprise SEO", "Dedicated Team"] }
           ].map((pkg, idx) => (
              <motion.div 
                 key={idx}
                 {...fadeInUp}
                 transition={{ delay: idx * 0.1 }}
                 className={cn(
                   "p-8 rounded-3xl glass-edge flex flex-col hover:-translate-y-2 transition-transform h-full",
                   pkg.pop ? "bg-surface-container-high border-secondary shadow-[0_0_30px_rgba(89,218,209,0.15)] relative scale-105 z-10" : "bg-surface-container-low"
                 )}
              >
                 {pkg.pop && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Recommended</span>}
                 
                 <h4 className="text-xl font-headline font-bold mb-4 uppercase">{pkg.name}</h4>
                 <div className="text-4xl lg:text-5xl font-headline font-bold text-secondary mb-8 pb-8 border-b border-outline-variant/20">
                    {pkg.price}
                 </div>
                 
                 <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-on-surface/80">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                         {f}
                      </li>
                    ))}
                 </ul>
                 
                 <button className={cn(
                   "w-full py-4 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all",
                   pkg.pop ? "btn-primary hover:shadow-[0_0_30px_rgba(242,202,80,0.5)]" : "border border-outline-variant/30 hover:bg-surface-container text-on-surface hover:border-primary/50"
                 )}>
                   Order Now
                 </button>
              </motion.div>
           ))}
         </div>
      </section>

      {/* 8. TRUST BADGES */}
      <section className="border-y border-outline-variant/20 bg-surface-container-low py-12 mb-32 overflow-hidden flex flex-wrap justify-center gap-8 md:gap-16 px-6">
         {['Forbes', 'Wired', 'The Verge', 'TechCrunch', 'Awwwards'].map((item) => (
            <div key={item} className="h-16 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
               <span className="text-on-surface font-headline text-2xl md:text-3xl font-bold tracking-tighter uppercase">{item}</span>
            </div>
         ))}
      </section>

      {/* 9. FAQ Section */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-32 bg-surface-container p-12 rounded-3xl glass-edge">
         <div className="flex flex-col md:flex-row gap-16 items-start justify-between">
            <h2 className="text-4xl md:text-7xl font-headline font-bold uppercase tracking-tighter w-full md:w-1/3 leading-tight">
               FREQUENTLY <br/>
               <span className="text-secondary opacity-50">QUESTIONS</span>
            </h2>
            <div className="w-full md:w-2/3 space-y-2">
               {[
                 { q: "How long does a website take to build?", a: "Depending on complexity, standard corporate sites span 2 to 4 weeks, while complex applications may scale up to 8 weeks." },
                 { q: "Do you offer post-launch support & retainers?", a: "Yes, we offer premium monthly retainers for performance tracking, analytics, and security maintenance." },
                 { q: "Will my website be mobile-friendly?", a: "Absolutely. 100% of our designs are executed with a rigorous mobile-first responsive philosophy." },
                 { q: "Can I manage the content after launch?", a: "Yes, we integrate industry-leading headless CMS solutions allowing your team seamless editorial control." }
               ].map((faq, i) => (
                  <div key={i} className="border-b border-outline-variant/20 py-6 group cursor-pointer hover:bg-surface-container-high -mx-6 px-6 transition-colors rounded-xl">
                     <h4 className="text-xl md:text-2xl font-headline font-bold mb-3 group-hover:text-primary transition-colors flex justify-between items-center pr-4">
                        {faq.q}
                        <ChevronRight className="text-on-surface/30 group-hover:text-primary transition-transform group-hover:translate-x-2 shrink-0" size={24} />
                     </h4>
                     <p className="text-on-surface/50 font-body text-base leading-relaxed pr-12">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10. CTA FOOTER SECTION */}
      <section className="px-6 md:px-12 max-w-[1920px] mx-auto mb-10">
         <div className="bg-gradient-to-br from-surface-container-highest via-surface-container to-background border border-outline-variant/30 py-24 px-12 rounded-3xl text-center flex flex-col justify-center items-center relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl md:text-7xl font-headline font-bold uppercase mb-8 relative z-10 leading-[0.9]">
              LET'S BUILD THE NEXT BIG <br/> THING <span className="text-secondary">TOGETHER</span>
            </h2>
            <p className="text-on-surface/60 max-w-2xl text-lg mb-12 relative z-10">
              Join our portfolio of luxury brands, technical enterprises, and digital disruptors. Commission an architecture that commands absolute authority.
            </p>
            <div className="relative z-10 flex flex-wrap gap-4 justify-center">
               <NavLink to="/contact" className="btn-primary px-12 py-4 text-sm hover:scale-105 active:scale-95">
                 START YOUR PROJECT
               </NavLink>
               <NavLink to="/portfolio" className="px-12 py-4 border border-outline-variant/30 text-on-surface rounded-lg font-label uppercase tracking-widest text-[0.7rem] font-bold hover:bg-surface-container-high transition-all hover:scale-105 active:scale-95">
                 VIEW PORTFOLIO
               </NavLink>
            </div>
         </div>
      </section>
    </div>
  );
}
