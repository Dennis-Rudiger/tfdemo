import React from 'react';
import Link from 'next/link';
import { 
  FaHardHat, 
  FaBuilding, 
  FaPencilRuler, 
  FaTools, 
  FaRegLightbulb,
  FaLeaf,
  FaWrench,
  FaChartLine,
  FaArrowRight
} from 'react-icons/fa';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

interface ServicesGridProps {
  showAll?: boolean;
  className?: string;
}

const allServices: Service[] = [
  { 
    icon: <FaBuilding className="text-5xl text-primary mb-4" />, 
    title: 'Design & Build',
    description: 'Comprehensive solutions from concept to completion',
    link: '/services/design-build'
  },
  { 
    icon: <FaHardHat className="text-5xl text-primary mb-4" />, 
    title: 'Civil Works',
    description: 'Infrastructure development and structural engineering',
    link: '/services/civil-works'
  },
  { 
    icon: <FaTools className="text-5xl text-primary mb-4" />, 
    title: 'Mechanical Works',
    description: 'Advanced systems installation and maintenance',
    link: '/services/mechanical-works'
  },
  { 
    icon: <FaPencilRuler className="text-5xl text-primary mb-4" />, 
    title: 'Renovation',
    description: 'Modernizing and upgrading existing structures',
    link: '/services/renovation'
  },
  { 
    icon: <FaWrench className="text-5xl text-primary mb-4" />, 
    title: 'Maintenance',
    description: 'Regular upkeep and repairs for optimal performance',
    link: '/services/maintenance'
  },
  { 
    icon: <FaChartLine className="text-5xl text-primary mb-4" />, 
    title: 'Assessments',
    description: 'Thorough evaluation of structures and systems',
    link: '/services/assessments'
  },
  { 
    icon: <FaRegLightbulb className="text-5xl text-primary mb-4" />, 
    title: 'Consultancy',
    description: 'Expert advice and professional guidance',
    link: '/services/consultancy'
  },
  { 
    icon: <FaLeaf className="text-5xl text-primary mb-4" />, 
    title: 'Landscaping',
    description: 'Creating beautiful and functional outdoor spaces',
    link: '/services/landscaping'
  },
];

const ServicesGrid: React.FC<ServicesGridProps> = ({ showAll = false, className = "" }) => {
  // If not showing all, just show the first 6 services
  const displayedServices = showAll ? allServices : allServices.slice(0, 6);
  
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ${className}`}>
      {displayedServices.map((service, index) => (
        <div 
          key={index} 
          className="service-card"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-primary/10 rounded-full mb-3 transform transition-transform duration-500 hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
            <p className="mb-4 text-gray-600 text-sm md:text-base">{service.description}</p>
            <Link 
              href={service.link} 
              className="flex items-center text-primary text-sm font-medium hover:text-secondary group"
            >
              Learn More 
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
