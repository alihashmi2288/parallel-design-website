import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[90] w-14 h-14 bg-gradient-to-br from-secondary to-secondary-container rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(89,218,209,0.4)] text-on-secondary hover:shadow-[0_0_30px_rgba(89,218,209,0.7)] transition-all"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Dropdown/Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-8 z-[100] w-80 sm:w-96 bg-surface-container-low rounded-2xl border border-outline-variant/30 shadow-2xl overflow-hidden glass-nav"
          >
            {/* Header */}
            <div className="bg-surface-container rounded-t-2xl p-4 flex justify-between items-center border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30 text-primary">
                    <MessageSquare size={18} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-surface-container" />
                </div>
                <div>
                  <h4 className="text-on-surface font-headline font-bold text-sm">Parallel Support</h4>
                  <p className="text-on-surface/50 text-xs font-body">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-on-surface/50 hover:text-on-surface transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-4 font-body text-sm bg-surface">
              <div className="bg-surface-container-high rounded-2xl rounded-tl-sm p-3 max-w-[85%] self-start border border-outline-variant/10">
                <p className="text-on-surface">Hello! Ready to elevate your digital presence? How can we help you today?</p>
              </div>
            </div>

            {/* Input Footer */}
            <div className="p-4 bg-surface-container border-t border-outline-variant/20">
              <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="w-full bg-surface-container-high border border-outline-variant/50 rounded-full py-3 px-4 pr-12 text-on-surface placeholder:text-on-surface/40 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 font-body text-sm transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-full flex items-center justify-center transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
