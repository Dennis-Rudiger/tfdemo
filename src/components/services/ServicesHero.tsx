import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServicesHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({
  title,
  subtitle,
  imageUrl
}) => {
  return (
    <section className="relative min-h-[45vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={imageUrl} 
          alt="Services" 
          fill 
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAFAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAgEAABBAICAwEAAAAAAAAAAAABAAIDBAUREiETFTFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCW3Ipz6lluW1LbljnorDziQGvY6Noa0fWMGhogHXryfKIiNGll/9k="
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90 z-10"></div>
      
      {/* Animated Shapes - hide small shapes on mobile for cleaner look */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        <motion.div 
          className="absolute -top-10 -right-10 w-40 sm:w-72 h-40 sm:h-72 bg-secondary/10 rounded-full mix-blend-overlay"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.5, 0.7]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 hidden sm:block w-96 h-96 bg-blue-300/20 rounded-full mix-blend-overlay"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.4, 0.6]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-30 text-white px-4 sm:px-6">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">{title}</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
