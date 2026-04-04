import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "A standard website project usually takes between 4 to 8 weeks, depending on the complexity and scope of the requirements."
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes, we provide various maintenance packages to ensure your digital assets stay secure, updated, and performing at their best."
  },
  {
    question: "What is your design process?",
    answer: "Our process is highly collaborative, involving discovery, strategy, design, development, and rigorous testing phases."
  },
  {
    question: "Can you help with branding as well?",
    answer: "Absolutely. We offer full brand identity services, including logo design, typography, color palettes, and brand guidelines."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto border-t border-surface-container-low">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-1">
          <span className="text-secondary font-label uppercase tracking-[0.4em] text-xs mb-4 block">
            Common Inquiries
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-6">
            Frequently Asked <span className="text-primary">Questions.</span>
          </h2>
          <p className="text-on-surface/60 font-body">
            Everything you need to know about working with Parallel Designs.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="bg-surface-container rounded-xl glass-edge overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left hover:bg-surface-container-high transition-all"
              >
                <span className="font-headline font-bold text-lg">{faq.question}</span>
                {activeIndex === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 pt-0 text-on-surface/60 font-body leading-relaxed border-t border-surface-container-low">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
