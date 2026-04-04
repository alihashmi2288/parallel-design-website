import { motion } from 'motion/react';
import { Palette, Globe, Smartphone, Search, Megaphone, BarChart } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: "Branding",
    description: "Crafting unique visual identities that resonate with your audience and define your brand's essence."
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Building high-performance, responsive websites that combine stunning design with seamless functionality."
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Creating intuitive mobile applications that provide exceptional user experiences across all platforms."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Enhancing your online visibility and driving organic traffic through strategic search engine optimization."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Developing comprehensive marketing strategies to grow your brand and reach your target audience."
  },
  {
    icon: BarChart,
    title: "UX/UI Research",
    description: "Conducting deep user research to inform design decisions and create interfaces that users love."
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
      <div className="mb-20">
        <span className="text-secondary font-label uppercase tracking-[0.4em] text-xs mb-4 block">
          Our Expertise
        </span>
        <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">
          Comprehensive <span className="text-primary">Digital Solutions.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-10 bg-surface-container rounded-xl glass-edge hover:bg-surface-container-high transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-all">
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">{service.title}</h3>
            <p className="text-on-surface/60 font-body leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
