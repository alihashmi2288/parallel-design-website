import { motion } from 'motion/react';
import { Code, Layout, Smartphone, Globe, Search, ShoppingCart, Image, PenTool, Shirt, FileText } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Seamless technical execution powered by modern frameworks. We build robust, scalable, and performant web applications that stand the test of time.",
    features: ["React & Next.js", "Custom CMS Integration", "Performance Setup", "Scalable Architecture"]
  },
  {
    icon: Layout,
    title: "App Design",
    description: "Crafting high-contrast editorial layouts that prioritize visual authority. We focus on the user journey, ensuring every interaction is meaningful.",
    features: ["User Experience Design", "Interface Prototyping", "Editorial Layouts", "High-Contrast Visuals"]
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile solutions built for speed and engagement. Your brand in the palm of your users' hands.",
    features: ["iOS & Android SDKs", "React Native", "Real-time Sync", "App Store Optimization"]
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Results-driven campaigns that conquer the digital landscape. We use data to drive decisions and maximize your return on investment.",
    features: ["Campaign Strategy", "Performance Ads", "Analytics & Tracking", "Social Media Growth"]
  },
  {
    icon: Search,
    title: "SEO",
    description: "Data-driven ranking strategies built to dominate search results. We optimize technical infrastructure and content for maximum visibility.",
    features: ["Technical SEO Audits", "Keyword Dominance", "On-Page Optimization", "Link Building Strategy"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "High-converting online storefronts optimized for sales and performance. We build digital retail experiences that turn visitors into loyal customers.",
    features: ["Headless Commerce", "Payment Integrations", "Inventory Syncing", "Conversion Optimization"]
  },
  {
    icon: Image,
    title: "Illustration",
    description: "Bespoke digital artwork and graphics that tell your brand's unique story. From subtle iconography to complex visual narratives.",
    features: ["Custom Artwork", "Iconography Systems", "Digital Painting", "Vector Art"]
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "We don't just design logos; we build timeless visual brand identities from typography to color theory that command authority.",
    features: ["Visual Identity Systems", "Brand Guidelines", "Typography Selection", "Logo Marks & Types"]
  },
  {
    icon: Shirt,
    title: "Merchandise Design",
    description: "Physical manifestations of your brand. We design apparel and accessories that your audience will actually want to wear and use.",
    features: ["Apparel Graphics", "Packaging Design", "Promo Materials", "Print-Ready Files"]
  },
  {
    icon: FileText,
    title: "Copywriting",
    description: "Compelling brand narratives that resonate with your target audience. We craft messaging that converts interest into action.",
    features: ["Brand Voice Creation", "Website Copy", "Ad Campaigns", "Technical Writing"]
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
