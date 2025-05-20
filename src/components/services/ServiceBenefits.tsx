import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

interface ServiceBenefitsProps {
  benefits: string[];
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ benefits }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
      {benefits.map((benefit, index) => (
        <motion.div 
          key={index}
          className="flex items-start bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true, margin: "-20px" }}
        >
          <div className="text-secondary mr-3 flex-shrink-0 mt-0.5">
            <FaCheckCircle size={18} />
          </div>
          <p className="text-gray-700 text-sm sm:text-base">{benefit}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceBenefits;
