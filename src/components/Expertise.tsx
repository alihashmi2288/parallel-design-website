import { motion } from 'motion/react';
import { Palette, Layout, Code, ShieldCheck } from 'lucide-react';

const expertises = [
  {
    id: "01",
    icon: Palette,
    title: "Brand Strategy",
    description: "Defining the core essence of your prestigious brand in a digital-first world."
  },
  {
    id: "02",
    icon: Layout,
    title: "UI/UX Atelier",
    description: "Crafting high-contrast editorial layouts that prioritize visual authority."
  },
  {
    id: "03",
    icon: Code,
    title: "Web Engineering",
    description: "Seamless technical execution powered by the latest modern frameworks."
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Post-Launch Support",
    description: "White-glove maintenance for high-traffic digital environments."
  }
];

export default function Expertise() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">
          Expertise <span className="text-secondary">&</span> <span className="text-primary">Craft</span>
        </h2>
        <div className="w-24 h-1 bg-primary mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertises.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-10 bg-surface-container rounded-xl glass-edge hover:bg-surface-container-high transition-all group"
          >
            <div className="text-5xl font-headline font-bold text-on-surface/5 mb-8 group-hover:text-primary/10 transition-colors">
              {item.id}
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-all">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">{item.title}</h3>
            <p className="text-on-surface/40 font-body text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
