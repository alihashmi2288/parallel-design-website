import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
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
            The Inquire
          </span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-on-surface mb-12">
            START YOUR <br />
            <span className="text-primary italic">COMMISSION.</span>
          </h1>
          <p className="text-on-surface/60 font-body text-xl leading-relaxed max-w-2xl">
            We are currently accepting new commissions for the upcoming quarter. Let's discuss how we can architect your digital legacy together.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Email</h3>
                <p className="text-on-surface/60 font-body">atelier@parallel.design</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Studio</h3>
                <p className="text-on-surface/60 font-body">Digital First. Global Presence.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Phone</h3>
                <p className="text-on-surface/60 font-body">+1 (555) 000-0000</p>
              </div>
            </div>
          </div>

          <div className="p-10 bg-surface-container rounded-2xl glass-edge">
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-6">Office Hours</h3>
            <div className="space-y-4 text-sm font-body text-on-surface/60">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>09:00 - 18:00 EST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>By Appointment</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 bg-surface-container rounded-2xl glass-edge"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface/40">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-6 py-4 text-on-surface focus:outline-none focus:border-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface/40">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-6 py-4 text-on-surface focus:outline-none focus:border-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-widest text-on-surface/40">Subject</label>
              <select className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-6 py-4 text-on-surface focus:outline-none focus:border-primary transition-all appearance-none">
                <option>New Project Inquiry</option>
                <option>Partnership Proposal</option>
                <option>Career Opportunity</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label uppercase tracking-widest text-on-surface/40">Message</label>
              <textarea 
                rows={6}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-6 py-4 text-on-surface focus:outline-none focus:border-primary transition-all resize-none"
                placeholder="Tell us about your digital ambitions..."
              />
            </div>
            <button className="btn-primary w-full py-5 flex items-center justify-center gap-3">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
