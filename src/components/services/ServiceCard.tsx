import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 w-full ${
        isHovered ? 'shadow-xl scale-[1.02]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Accent Corner - with proper containment */}
      <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 overflow-hidden">
        <div className="absolute transform rotate-45 bg-gradient-to-r from-primary to-primary-dark w-16 sm:w-24 h-16 sm:h-24 -top-8 sm:-top-12 -right-8 sm:-right-12"></div>
      </div>
      
      <div className="p-5 sm:p-6 md:p-8 overflow-hidden">
        {/* Icon with animated background */}
        <div className="relative mb-4 sm:mb-6">
          <div className={`absolute inset-0 bg-primary/5 rounded-full transform transition-all duration-300 ${
            isHovered ? 'scale-125' : 'scale-100'
          }`}></div>
          <div className="flex items-center justify-center p-3 sm:p-4 relative z-10">
            <div className="text-primary text-3xl sm:text-4xl">{icon}</div>
          </div>
        </div>
        
        {/* Content - with text wrapping */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors break-words">{title}</h3>
        <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base line-clamp-3 break-words">{description}</p>
        
        <Link 
          href={link}
          className="inline-flex items-center text-primary font-medium group-hover:text-secondary transition-colors text-sm sm:text-base"
        >
          Learn more 
          <span className={`ml-2 transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`}>
            <FaArrowRight />
          </span>
        </Link>
      </div>
      
      {/* Bottom Border Animation */}
      <div 
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
          isHovered ? 'w-full' : 'w-0'
        }`}
      ></div>
    </motion.div>
  );
};

export default ServiceCard;
