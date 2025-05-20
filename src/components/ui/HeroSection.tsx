import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import { FaArrowRight } from 'react-icons/fa';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  showButtons?: boolean;
  imageUrl?: string;
  align?: 'left' | 'center';
  height?: 'small' | 'medium' | 'large';
  overlayStyle?: 'gradient' | 'dark' | 'light' | 'pattern';
  imageAnimation?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  showButtons = true, 
  imageUrl = '/images/hero-bg.jpg',
  align = 'center',
  height = 'medium',
  overlayStyle = 'gradient',
  imageAnimation = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Load animation handling
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getHeightClass = () => {
    switch(height) {
      case 'small': return 'min-h-[30vh] md:min-h-[40vh]';
      case 'large': return 'min-h-[60vh] md:min-h-[80vh]';
      default: return 'min-h-[50vh] md:min-h-[60vh]';
    }
  };

  // Get overlay style class
  const getOverlayClass = () => {
    switch(overlayStyle) {
      case 'dark': return 'bg-black/60';
      case 'light': return 'bg-white/30';
      case 'pattern': return 'bg-primary/50 pattern-overlay';
      default: return 'bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80';
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={`hero-section relative flex items-center justify-center overflow-hidden w-full ${getHeightClass()}`}>
      {/* Background image with zoom effect */}
      <div className={`absolute inset-0 w-full h-full ${imageAnimation ? 'hero-image-container' : ''}`}>
        <Image 
          src={imageUrl} 
          alt="Hero background"
          fill
          className={`object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ${imageAnimation ? 'hero-image-zoom' : ''}`}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAJAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABBEFEiEGByIxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAE/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAAxESIf/aAAwDAQACEQMRAD8ArlF0/o+ii97je3epXsUbSCFY9p3YGBk4+nAqrSFWwZrCS3f39L//2Q=="
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>

      {/* Dynamic overlay based on style */}
      <div className={`absolute inset-0 ${getOverlayClass()}`}></div>
      
      {/* Accent shapes for visual interest - constrained width */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-secondary/10 rounded-bl-full transform -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-24 bg-blue-300/10 rounded-tr-full transform translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
      
      <div className="container-custom relative z-10 w-full">
        <motion.div 
          className={`max-w-4xl mx-auto hero-content ${align === 'center' ? 'text-center' : 'text-left'}`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className={`font-bold mb-4 md:mb-6 text-shadow-sm ${align === 'center' ? '' : 'max-w-2xl'}`}
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-shadow-sm max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}
          
          {showButtons && (
            <motion.div 
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 ${align === 'center' ? 'justify-center' : ''}`}
              variants={itemVariants}
            >
              <Button 
                href="/quote" 
                variant="secondary" 
                icon={<FaArrowRight />} 
                glow={true}
              >
                Request a Quote
              </Button>
              <Button 
                href="/contact" 
                variant="white"
              >
                Contact Us
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative element - bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-5 md:h-10"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V120H0V27.35a600.21 600.21 0 00321.39 29.09z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
