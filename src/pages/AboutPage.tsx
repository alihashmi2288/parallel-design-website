import { motion } from 'motion/react';

export default function AboutPage() {
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
            The Atelier Philosophy
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-on-surface mb-12">
            WE REJECT THE <br />
            <span className="text-primary italic">ORDINARY.</span>
          </h1>
          <p className="text-on-surface/60 font-body text-xl leading-relaxed max-w-2xl">
            Parallel Designs was founded on the belief that the digital landscape has become too safe, too generic. We exist to restore the sense of wonder and prestige to the web through architectural precision and high-contrast digital craftsmanship.
          </p>
        </motion.div>
      </section>

      <section className="bg-surface-container py-32 px-6 md:px-12">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] rounded-2xl overflow-hidden glass-edge"
          >
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop" 
              alt="Tech Aesthetic" 
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-headline font-bold tracking-tighter mb-6">Our DNA</h2>
              <p className="text-on-surface/60 font-body text-lg leading-relaxed">
                We don't just build websites; we architect digital legacies. Our studio operates as a digital atelier, where every project is treated as a unique commission, crafted with surgical intent and a luxury aesthetic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Precision", desc: "Every pixel is placed with intent. No defaults, no shortcuts." },
                { title: "Contrast", desc: "We embrace the tension between light and shadow, form and function." },
                { title: "Innovation", desc: "Pushing the boundaries of what's possible in the browser." },
                { title: "Legacy", desc: "Building digital experiences that stand the test of time." }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 bg-surface-container-high rounded-xl glass-edge"
                >
                  <h3 className="text-primary font-headline font-bold mb-2 uppercase tracking-widest text-sm">{item.title}</h3>
                  <p className="text-on-surface/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter uppercase">
            The Collective
          </h2>
          <p className="text-on-surface/40 font-label uppercase tracking-widest text-[0.65rem] mt-4">
            A SYMPHONY OF SPECIALISTS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "S. Ali Hashmi", role: "Principal Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2564&auto=format&fit=crop" },
            { name: "Elena Vance", role: "Creative Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2564&auto=format&fit=crop" },
            { name: "Marcus Thorne", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2564&auto=format&fit=crop" },
            { name: "Sofia Chen", role: "Motion Designer", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop" }
          ].map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-none"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-edge mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-headline font-bold text-on-surface">{member.name}</h3>
              <p className="text-primary font-label uppercase tracking-widest text-[0.6rem] mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
