import { motion } from 'motion/react';
import { Palette, Layout, Code, ShieldCheck, Globe, Terminal, Brush, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "Brand Architecture",
    description: "We don't just design logos; we build digital identities that command authority. From typography to color theory, we ensure your brand's voice is heard in the digital space.",
    features: ["Visual Identity Systems", "Brand Guidelines", "Typography & Color Theory", "Digital Strategy"]
  },
  {
    icon: Layout,
    title: "UI/UX Atelier",
    description: "Crafting high-contrast editorial layouts that prioritize visual authority. We focus on the user journey, ensuring every interaction is meaningful and every pixel is placed with intent.",
    features: ["User Experience Design", "Interface Prototyping", "Editorial Layouts", "High-Contrast Visuals"]
  },
  {
    icon: Code,
    title: "Web Engineering",
    description: "Seamless technical execution powered by the latest modern frameworks. We build robust, scalable, and performant web applications that stand the test of time.",
    features: ["React & Next.js Development", "Custom CMS Integration", "Performance Optimization", "Scalable Architecture"]
  },
  {
    icon: ShieldCheck,
    title: "Post-Launch Support",
    description: "White-glove maintenance for high-traffic digital environments. We provide ongoing support to ensure your digital legacy remains secure, up-to-date, and performant.",
    features: ["24/7 Monitoring", "Security Updates", "Performance Audits", "Continuous Improvement"]
  },
  {
    icon: Globe,
    title: "Spatial UI",
    description: "Exploring the boundaries of digital space through 3D and spatial design. We create immersive experiences that transcend the traditional 2D web.",
    features: ["3D Web Experiences", "Spatial Layouts", "Immersive Interactions", "WebGL & Three.js"]
  },
  {
    icon: Zap,
    title: "Motion Identity",
    description: "Bringing your brand to life through intentional motion. We use animation to guide the user's attention and reinforce your brand's personality.",
    features: ["Micro-interactions", "Scroll-triggered Animations", "Dynamic Transitions", "Brand Motion Systems"]
  }
];

export default function ServicesPage() {
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
            Our Expertise
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-on-surface mb-12">
            CRAFTING <br />
            <span className="text-primary italic">DIGITAL LEGACIES.</span>
          </h1>
          <p className="text-on-surface/60 font-body text-xl leading-relaxed max-w-2xl">
            We offer a curated suite of services designed for brands that demand excellence. Our approach combines technical precision with artistic vision to help you dominate your digital landscape.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-12 bg-surface-container rounded-2xl glass-edge hover:bg-surface-container-high transition-all group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-on-primary transition-all">
              <service.icon className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-headline font-bold mb-6">{service.title}</h2>
            <p className="text-on-surface/60 font-body text-sm leading-relaxed mb-10">
              {service.description}
            </p>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-xs font-label uppercase tracking-widest text-on-surface/40">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto mt-32 bg-surface-container-low rounded-3xl glass-edge">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-8 leading-tight">
            Ready to <span className="text-primary">elevate</span> your digital presence?
          </h2>
          <p className="text-on-surface/60 font-body text-lg leading-relaxed mb-12">
            Let's collaborate to build something extraordinary. Our team is ready to bring your vision to life with surgical precision and a luxury aesthetic.
          </p>
          <button className="btn-primary px-12 py-4">
            Start Your Commission
          </button>
        </div>
      </section>
    </div>
  );
}
