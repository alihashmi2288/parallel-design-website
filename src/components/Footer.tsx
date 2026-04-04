import { Globe, Terminal, Brush } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full py-20 px-6 md:px-12 border-t border-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1920px] mx-auto">
        <div className="col-span-1">
          <div className="text-xl font-bold text-primary mb-4 font-headline uppercase">Parallel Designs</div>
          <p className="text-on-surface/60 font-body text-sm leading-relaxed mb-6">
            Architecting the future of the luxury web through editorial precision and surgical design.
          </p>
        </div>

        <div>
          <h4 className="text-on-surface font-label uppercase tracking-widest text-xs mb-6">Quick Links</h4>
          <ul className="space-y-4 font-body text-sm">
            <li><a href="#" className="text-on-surface/60 hover:text-secondary transition-all">About Our Atelier</a></li>
            <li><a href="#" className="text-on-surface/60 hover:text-secondary transition-all">Case Studies</a></li>
            <li><a href="#" className="text-on-surface/60 hover:text-secondary transition-all">The Process</a></li>
            <li><a href="#" className="text-on-surface/60 hover:text-secondary transition-all">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-label uppercase tracking-widest text-xs mb-6">Services</h4>
          <ul className="space-y-4 font-body text-sm">
            <li><a href="#" className="text-on-surface/60 hover:text-secondary transition-all">Brand Architecture</a></li>
            <li><a href="#" className="text-on-surface/60 hover:text-secondary transition-all">Digital Editorial</a></li>
            <li><a href="#" className="text-on-surface/60 hover:text-secondary transition-all">Spatial UI</a></li>
            <li><a href="#" className="text-on-surface/60 hover:text-secondary transition-all">Motion Identity</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-label uppercase tracking-widest text-xs mb-6">Location</h4>
          <ul className="space-y-4 font-body text-sm text-on-surface/60">
            <li>Digital First.</li>
            <li>Global Presence.</li>
            <li>Inquiries: atelier@parallel.design</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface/60 font-body text-sm">
          © 2024 Parallel Designs. Crafted for the digital atelier.
        </p>
        <div className="flex gap-8 font-label text-[0.65rem] uppercase tracking-widest text-on-surface/40">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
