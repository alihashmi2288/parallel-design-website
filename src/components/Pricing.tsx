import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const plans = [
  {
    name: "ESSENTIAL",
    price: "80",
    description: "Basic entry into the digital atelier ecosystem.",
    features: ["Basic Atelier Access", "Editorial Components", "Custom 3D Assets", "Priority Engineering"],
    highlight: false,
    buttonText: "SELECT"
  },
  {
    name: "THE STUDIO",
    price: "150",
    description: "Our most popular tier for ambitious brands.",
    features: ["Unlimited Atelier Access", "Premium Editorial Systems", "Standard Motion Design", "Full Digital Concierge"],
    highlight: true,
    buttonText: "BEGIN ATELIER",
    badge: "RECOMMENDED"
  },
  {
    name: "THE SOVEREIGN",
    price: "350",
    description: "The ultimate digital partnership for global leaders.",
    features: ["Dedicated Digital Architect", "Custom 3D & Spatial Design", "Priority 24/7 Engineering", "Concierge Maintenance"],
    highlight: false,
    buttonText: "CONNECT"
  }
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto border-t border-surface-container-low">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter uppercase">
          INVEST IN PRESTIGE
        </h2>
        <p className="text-on-surface/40 font-label uppercase tracking-widest text-[0.65rem] mt-4">
          TIERED INVESTMENT PORTFOLIOS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "p-10 rounded-2xl glass-edge flex flex-col relative",
              plan.highlight ? "bg-surface-container-high border-primary/30 py-16 z-10" : "bg-surface-container"
            )}
          >
            {plan.badge && (
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 rounded font-label text-[0.6rem] font-bold tracking-widest">
                {plan.badge}
              </div>
            )}
            <h3 className="text-xs font-label font-bold text-primary tracking-widest mb-4">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-6xl font-headline font-bold text-on-surface">
                ${plan.price}
              </span>
              <span className="text-on-surface/40 text-sm">/ monthly</span>
            </div>
            
            <ul className="space-y-6 mb-12">
              {plan.features.map((feature, idx) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-body">
                  <Check className={cn(
                    "w-4 h-4",
                    idx < 2 ? "text-secondary" : "text-on-surface/20"
                  )} />
                  <span className={cn(idx < 2 ? "text-on-surface" : "text-on-surface/40")}>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={cn(
              "w-full py-4 rounded-lg font-label uppercase tracking-widest text-xs font-bold transition-all",
              plan.highlight 
                ? "bg-primary text-on-primary hover:shadow-[0_0_20px_rgba(242,202,80,0.3)]" 
                : "border border-outline-variant/30 text-on-surface hover:bg-surface-container-highest"
            )}>
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
