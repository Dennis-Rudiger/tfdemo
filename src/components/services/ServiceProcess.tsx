import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ steps }) => {
  return (
    <div className="relative">
      {/* Vertical line for desktop, horizontal for mobile */}
      <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2"></div>
      
      <div className="space-y-8 md:space-y-16 relative">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
          >
            {/* Mobile step indicator - left aligned with content */}
            <div className="flex md:hidden items-center mb-3">
              <motion.div 
                className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-primary relative z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-bold">{index + 1}</span>
              </motion.div>
              <div className="h-0.5 flex-grow ml-3 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            
            {/* Desktop step indicator - centered */}
            <div className="hidden md:block absolute md:static left-0 top-0">
              <motion.div 
                className="mx-auto w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-primary relative z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-bold">{index + 1}</span>
              </motion.div>
            </div>
            
            {/* Content */}
            <motion.div 
              className={`md:w-5/12 p-4 sm:p-5 md:p-6 rounded-lg shadow-md bg-white border border-gray-100 relative ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Arrow pointing to timeline on desktop */}
              <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                index % 2 === 0 ? 'left-full ml-px border-l-8 border-l-white' : 'right-full mr-px border-r-8 border-r-white'
              } border-transparent border-y-8`}></div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2 text-primary">{step.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{step.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProcess;
