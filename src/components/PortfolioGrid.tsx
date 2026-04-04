import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  year?: string;
  image: string;
  description?: string;
  size: 'large' | 'medium' | 'wide' | 'small';
  hasPlayButton?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Onyx & Ether",
    category: "Branding",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    size: 'large'
  },
  {
    id: 2,
    title: "Lumina Arc",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop",
    size: 'large'
  },
  {
    id: 3,
    title: "Kinetic Essence",
    category: "Motion Graphics",
    description: "Exploring the intersection of industrial precision and fluid digital motion for automotive luxury.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2564&auto=format&fit=crop",
    size: 'wide',
    hasPlayButton: true
  },
  {
    id: 4,
    title: "Mono Type",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop",
    size: 'medium'
  },
  {
    id: 5,
    title: "Prism OS",
    category: "Web Platform",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop",
    size: 'medium'
  }
];

export default function PortfolioGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="px-6 md:px-12 mb-32 max-w-[1920px] mx-auto">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id} 
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className={cn(project.size === 'wide' && "md:col-span-2")}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isWide = project.size === 'wide';
  
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className={cn(
        "group relative overflow-hidden bg-surface-container rounded-2xl glass-edge w-full transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10",
        isWide ? "h-[500px]" : "h-[600px]",
        project.size === 'medium' && "h-[500px]"
      )}
    >
      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.1 }
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full flex justify-between items-end z-10">
        <div className={cn(isWide && "max-w-xl")}>
          <span className="inline-block px-3 py-1 bg-surface-container-low/50 backdrop-blur-md rounded-full text-secondary font-label uppercase tracking-widest text-[0.65rem] mb-4 border border-secondary/20">
            {project.category} {project.year && `• ${project.year}`}
          </span>
          <h3 className={cn(
            "font-headline font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70",
            isWide ? "text-4xl md:text-5xl" : "text-3xl"
          )}>
            {project.title}
          </h3>
          {project.description && (
            <p className="text-on-surface/60 mt-4 font-body leading-relaxed max-w-md hidden md:block">
              {project.description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          {project.hasPlayButton && (
            <span className="font-label text-[0.65rem] uppercase tracking-widest text-primary hidden sm:block">
              View Case Study
            </span>
          )}
          {project.hasPlayButton ? (
            <motion.div whileHover={{ scale: 1.1, rotate: 90 }} transition={{ type: "spring", stiffness: 300 }}>
              <PlayCircle className="w-10 h-10 text-primary drop-shadow-[0_0_15px_rgba(242,202,80,0.5)]" fill="currentColor" />
            </motion.div>
          ) : (
            <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
               <ArrowRight className="w-5 h-5 text-primary group-hover:text-on-primary group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-all pointer-events-none rounded-2xl" />
    </motion.div>
  );
}
