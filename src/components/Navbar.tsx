import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Code, Layout, Smartphone, Globe, Search, ShoppingCart, Image, PenTool, Shirt, FileText } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  const secondaryLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Packages', href: '/packages' },
  ];

  const services = [
    { name: 'Website Development', icon: Code, desc: 'High-performance web apps.' },
    { name: 'App Design', icon: Layout, desc: 'Premium editorial designs.' },
    { name: 'App Development', icon: Smartphone, desc: 'Native mobile app solutions.' },
    { name: 'Digital Marketing', icon: Globe, desc: 'Data-driven growth strategies.' },
    { name: 'SEO', icon: Search, desc: 'Search engine optimization.' },
    { name: 'E-commerce', icon: ShoppingCart, desc: 'High-converting storefronts.' },
    { name: 'Illustration', icon: Image, desc: 'Bespoke digital artwork.' },
    { name: 'Logo Design', icon: PenTool, desc: 'Timeless visual brand identities.' },
    { name: 'Merchandise Design', icon: Shirt, desc: 'Physical brand manifestations.' },
    { name: 'Copywriting', icon: FileText, desc: 'Compelling brand narratives.' },
  ];

  const getServiceRoute = (name: string) => {
    switch(name) {
      case 'Website Development': return '/services/website-development';
      case 'App Design': return '/services/app-design';
      case 'App Development': return '/services/app-development';
      default: return `/services#${name.toLowerCase().replace(/[\s/]+/g, '-')}`;
    }
  };

  return (
    <nav className="fixed top-4 left-4 right-4 lg:w-full max-w-[1400px] lg:left-1/2 lg:-translate-x-1/2 z-50 glass-nav border border-outline-variant/20 rounded-full shadow-2xl">
      <div className="flex justify-between items-center px-6 md:px-8 py-3 w-full">
        <NavLink to="/" className="text-2xl font-bold tracking-tighter text-primary font-headline uppercase relative group overflow-hidden flex flex-col justify-center">
          <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-out">Parallel Designs</span>
          <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 text-secondary transition-transform duration-500 ease-out">Parallel Designs</span>
        </NavLink>
        
        <div className="hidden lg:flex items-center space-x-1 font-label uppercase tracking-widest text-[0.70rem] font-bold bg-surface-container-low border border-outline-variant/10 rounded-full p-1.5 shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => cn(
                "px-5 py-2.5 transition-all duration-300 rounded-full hover:text-primary",
                isActive 
                  ? "bg-primary/20 text-primary border border-primary/20 shadow-md" 
                  : "text-on-surface/70"
              )}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mega Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) => cn(
                "px-4 py-2.5 transition-all duration-300 rounded-full hover:text-primary flex items-center gap-1 group",
                isActive ? "bg-primary/20 text-primary border border-primary/20 shadow-md" : "text-on-surface/70"
              )}
            >
              Services
              <ChevronDown size={14} className={cn("transition-transform duration-300 group-hover:rotate-180", isServicesOpen && "rotate-180")} />
            </NavLink>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-surface-container-low rounded-2xl border border-outline-variant/30 shadow-2xl p-6 glass-nav"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, idx) => (
                      <NavLink 
                        key={idx} 
                        to={getServiceRoute(service.name)}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container transition-all duration-300 ease-out group/item focus-visible:outline-none hover:shadow-[0_4px_24px_rgba(var(--primary-rgb),0.05)] hover:-translate-y-0.5 relative overflow-hidden"
                      >
                       <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                       <div className="relative z-10 w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-on-surface/60 group-hover/item:text-primary group-hover/item:bg-primary/10 group-hover/item:scale-110 transition-all duration-300 border border-outline-variant/20 shadow-sm">
                          <service.icon size={20} className="transition-transform group-hover/item:rotate-[-5deg]" />
                       </div>
                       <div className="relative z-10">
                         <h4 className="text-sm font-bold text-on-surface mb-1 group-hover/item:text-primary transition-colors duration-300">{service.name}</h4>
                         <p className="text-xs text-on-surface/50 font-body normal-case tracking-normal group-hover/item:text-on-surface/70 transition-colors duration-300">{service.desc}</p>
                       </div>
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {secondaryLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) => cn(
                "px-5 py-2.5 transition-all duration-300 rounded-full hover:text-primary",
                isActive 
                  ? "bg-primary/20 text-primary border border-primary/20 shadow-md" 
                  : "text-on-surface/70"
              )}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink to="/contact" className="hidden lg:inline-flex px-6 py-3 text-on-surface rounded-full font-label uppercase tracking-widest text-[0.7rem] font-bold hover:text-primary transition-all">
            Client Portal
          </NavLink>
          <NavLink to="/contact" className="btn-primary rounded-full group px-8 hidden sm:flex">
            <span className="relative z-10 text-[0.7rem]">Get Started</span>
            <div className="absolute inset-0 bg-secondary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
