import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    content: "Parallel Designs transformed our brand from a startup to a market leader. Their attention to detail is unparalleled.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2564&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "Founder, ArchiBuild",
    content: "The website they built for us isn't just a site; it's a piece of art. Our conversion rates have tripled since launch.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2564&auto=format&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director, Vibe",
    content: "Working with them was a seamless experience. They understood our vision perfectly and executed it flawlessly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2564&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
      <div className="text-center mb-20">
        <span className="text-secondary font-label uppercase tracking-[0.4em] text-xs mb-4 block">
          Client Stories
        </span>
        <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">
          Trusted by <span className="text-primary">Visionaries.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-10 bg-surface-container rounded-2xl glass-edge relative"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
            <p className="text-on-surface/80 font-body italic leading-relaxed mb-10 relative z-10">
              "{t.content}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={t.image} 
                alt={t.name} 
                className="w-12 h-12 rounded-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="font-headline font-bold text-sm">{t.name}</div>
                <div className="text-on-surface/40 text-xs font-label uppercase tracking-widest">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
