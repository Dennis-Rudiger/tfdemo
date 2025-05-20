import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  setActiveCategory
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all ${
          activeCategory === 'all'
            ? 'bg-primary text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => setActiveCategory('all')}
      >
        All Projects
      </motion.button>
      
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all ${
            activeCategory === category
              ? 'bg-primary text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;
