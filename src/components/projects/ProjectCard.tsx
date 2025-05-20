import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    year: string;
    location: string;
  };
  variant?: 'default' | 'featured' | 'minimal';
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  variant = 'default',
  index = 0 
}) => {
  // Different card styles based on variant
  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="featured-project-card group relative overflow-hidden rounded-xl shadow-xl hover-lift"
      >
        <div className="aspect-[16/9] w-full relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
          <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-medium uppercase tracking-wider rounded-full mb-3">
            {project.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
          
          <div className="flex items-center text-white/80 text-sm mb-4">
            <span className="mr-6">{project.year}</span>
            <span>{project.location}</span>
          </div>
          
          <p className="text-white/90 mb-6 max-w-xl line-clamp-2 md:line-clamp-none">
            {project.description}
          </p>
          
          <Link 
            href={`/projects/${project.id}`} 
            className="inline-flex items-center text-secondary hover:text-white transition-colors group-hover:underline"
          >
            View Project Details <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    );
  }
  
  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="minimal-project-card relative overflow-hidden rounded-lg shadow-md group hover-lift"
      >
        <Link href={`/projects/${project.id}`} className="block h-full">
          <div className="absolute inset-0 z-10">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          
          <div className="relative z-20 h-full flex flex-col justify-end p-5 text-white">
            <h3 className="text-lg font-bold mb-1 group-hover:text-secondary transition-colors">{project.title}</h3>
            <span className="text-xs text-white/80">{project.category}</span>
          </div>
        </Link>
      </motion.div>
    );
  }
  
  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="default-project-card overflow-hidden rounded-xl bg-white shadow-lg group hover-lift h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-64 md:h-72">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-medium uppercase tracking-wider rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 text-sm">{project.year}</span>
          <span className="text-gray-600 text-sm">{project.location}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        <Link 
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-primary hover:text-secondary transition-colors"
        >
          View Details <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
