import React from 'react';
import Head from 'next/head';
import { 
  FaHardHat, 
  FaBuilding, 
  FaPencilRuler, 
  FaTools, 
  FaRegLightbulb,
  FaLeaf,
  FaWrench,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import ServicesHero from '../../components/services/ServicesHero';
import ServiceCard from '../../components/services/ServiceCard';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import TestimonialCard from '../../components/services/TestimonialCard';
import Button from '../../components/ui/Button';

const services = [
  { 
    icon: <FaBuilding />, 
    title: 'Design & Build',
    description: 'Complete project delivery from concept to completion. Our integrated approach ensures seamless coordination between design and construction phases, optimizing both aesthetics and functionality.',
    link: '/services/design-build'
  },
  { 
    icon: <FaHardHat />, 
    title: 'Civil Works',
    description: 'Infrastructure development including roads, bridges, water systems, and structural engineering projects. We have the expertise to handle projects of any scale with precision and durability.',
    link: '/services/civil-works'
  },
  { 
    icon: <FaTools />, 
    title: 'Mechanical Works',
    description: 'Installation and maintenance of HVAC, plumbing, electrical systems, and other mechanical components. Our solutions prioritize efficiency, safety, and long-term performance.',
    link: '/services/mechanical-works'
  },
  { 
    icon: <FaPencilRuler />, 
    title: 'Renovation',
    description: 'Transforming existing structures through modernization and upgrades. We breathe new life into aging buildings while preserving their character and enhancing functionality.',
    link: '/services/renovation'
  },
  { 
    icon: <FaWrench />, 
    title: 'Maintenance',
    description: 'Regular and preventative maintenance services to extend the life of your facilities. Our maintenance programs are customized to your specific needs and schedule.',
    link: '/services/maintenance'
  },
  { 
    icon: <FaChartLine />, 
    title: 'Assessments',
    description: 'Comprehensive evaluation of structural integrity, energy efficiency, and system performance. Our detailed assessments provide valuable insights for property owners and managers.',
    link: '/services/assessments'
  },
  { 
    icon: <FaRegLightbulb />, 
    title: 'Consultancy',
    description: 'Expert guidance on construction planning, project management, and technical challenges. Our consultants bring years of experience to help you make informed decisions.',
    link: '/services/consultancy'
  },
  { 
    icon: <FaLeaf />, 
    title: 'Landscaping',
    description: 'Design and implementation of outdoor spaces that enhance property aesthetics and functionality. From gardens to recreational areas, we create beautiful environments.',
    link: '/services/landscaping'
  },
];

const processSteps = [
  {
    title: 'Initial Consultation',
    description: 'We meet with you to understand your vision, requirements, and budget constraints, establishing clear objectives for your project.'
  },
  {
    title: 'Planning & Design',
    description: 'Our team develops detailed plans and designs tailored to your specific needs, ensuring both aesthetic appeal and functional excellence.'
  },
  {
    title: 'Proposal & Agreement',
    description: 'We provide a comprehensive proposal including timeline, budget, and scope of work, with transparent terms and conditions.'
  },
  {
    title: 'Implementation',
    description: 'Our skilled team executes the project with precision and attention to detail, maintaining open communication throughout the process.'
  },
  {
    title: 'Quality Assurance & Handover',
    description: 'We ensure everything meets our high standards before project completion and handover, leaving you with outstanding results.'
  },
];

const coreBenefits = [
  'Experienced team of professionals with specialized expertise',
  'Commitment to quality and attention to detail',
  'Transparent communication throughout the project',
  'Adherence to deadlines and budget constraints',
  'Sustainable and environmentally-conscious approaches',
  'Compliance with all relevant codes and regulations',
  'Cutting-edge technology and innovative solutions',
  'Comprehensive after-service support and warranties'
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Services | Tronraft Africa Limited</title>
        <meta name="description" content="Explore our comprehensive range of construction and consultancy services." />
      </Head>
      
      <ServicesHero
        title="Our Services"
        subtitle="Comprehensive construction and consultancy solutions tailored to meet your specific needs"
        imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      
      {/* Introduction Section */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-primary"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Excellence in Every Project We Undertake
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  At Tronraft Africa Limited, we offer a comprehensive range of construction and consultancy services. Our team of experts is dedicated to delivering exceptional results that exceed your expectations, from initial concept to final implementation.
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                  We combine technical expertise, industry experience, and innovative approaches to address your unique needs and challenges, ensuring successful outcomes for projects of all scales.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    href="/quote" 
                    variant="primary"
                    icon={<FaArrowRight />}
                    glow={true}
                    className="w-full sm:w-auto"
                  >
                    Request a Quote
                  </Button>
                  <Button 
                    href="/contact" 
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Contact Our Team
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="relative p-2 sm:p-3 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg mt-6 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/your-video-id" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section className="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="container-custom px-4 sm:px-6">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">Our Comprehensive Services</h2>
            <div className="h-1 w-16 sm:w-24 bg-secondary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our wide range of specialized services designed to meet your construction and development needs. Each service is delivered with expertise, precision, and dedication to quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="container-custom px-4 sm:px-6">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">Our Service Process</h2>
            <div className="h-1 w-16 sm:w-24 bg-secondary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a structured approach to ensure every project is delivered efficiently, transparently, and with the highest quality standards.
            </p>
          </motion.div>
          
          <ServiceProcess steps={processSteps} />
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="container-custom px-4 sm:px-6">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Why Choose Tronraft Africa</h2>
            <div className="h-1 w-16 sm:w-24 bg-secondary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
              We're committed to delivering excellence across all our services, providing you with numerous advantages when you partner with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <FaHardHat className="text-xl sm:text-2xl text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Expert Team</h3>
              <p className="text-white/80 text-sm sm:text-base">Skilled professionals with extensive experience in diverse construction disciplines.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-xl sm:text-2xl text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Quality Assurance</h3>
              <p className="text-white/80 text-sm sm:text-base">Rigorous standards and meticulous attention to detail in every project we undertake.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <FaRegLightbulb className="text-xl sm:text-2xl text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Innovative Solutions</h3>
              <p className="text-white/80 text-sm sm:text-base">Creative approaches and cutting-edge technologies to address complex challenges.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <FaLeaf className="text-xl sm:text-2xl text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Sustainability Focus</h3>
              <p className="text-white/80 text-sm sm:text-base">Environmentally-conscious practices and materials in all our construction projects.</p>
            </motion.div>
          </div>
          
          <div className="mt-8 sm:mt-12 md:mt-16">
            <ServiceBenefits benefits={coreBenefits} />
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="container-custom px-4 sm:px-6">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">Client Testimonials</h2>
            <div className="h-1 w-16 sm:w-24 bg-secondary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experience working with Tronraft Africa Limited.
            </p>
          </motion.div>
          
          <TestimonialCard 
            quote="Tronraft Africa Limited exceeded our expectations in every aspect of our project. Their attention to detail, professionalism, and ability to deliver on time and within budget made them the ideal partner for our commercial development."
            author="James Kariuki"
            position="Development Director"
            company="Savannah Heights Ltd"
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-10 sm:py-12 md:py-16">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to Start Your Project?
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Contact us today to discuss how we can help bring your construction vision to life with our expertise and professional team.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  href="/quote" 
                  variant="secondary" 
                  size="lg"
                  glow={true}
                  icon={<FaArrowRight />}
                  className="w-full sm:w-auto"
                >
                  Request a Quote
                </Button>
                <Button 
                  href="/contact" 
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-full blur-md"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400/20 rounded-full blur-md"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-3 text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-8.486 8.486l4.243 4.243 4.243-4.243a6 6 0 000-8.486z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>123 Tronraft Road, Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-3 text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <span>+254 123 456 789</span>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-3 text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <span>info@tronraftafrica.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
