import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  image = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image area - horizontal on mobile, vertical on desktop */}
        <div className="md:w-1/3 h-48 sm:h-64 md:h-auto relative">
          <Image 
            src={image} 
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5 sm:p-6 md:p-8 md:w-2/3">
          <FaQuoteLeft className="text-primary/20 text-3xl sm:text-4xl mb-3 sm:mb-4" />
          <p className="text-gray-700 italic mb-4 sm:mb-6 text-sm sm:text-base">{quote}</p>
          <div>
            <p className="font-bold text-base sm:text-lg">{author}</p>
            <p className="text-gray-600 text-sm sm:text-base">{position}, {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
