import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroSection from '../../components/ui/HeroSection';
import { FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaArrowLeft, FaArrowRight, FaBuilding, FaClock } from 'react-icons/fa';
import { projectData } from '../../utils/projectData';

const ProjectDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Show loading state while fetching data
  if (router.isFallback || !slug) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }
  
  // Get project data based on slug
  const project = projectData[slug as keyof typeof projectData];
  
  // Handle case when project is not found
  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8 text-gray-600">The project you're looking for doesn't exist or has been moved.</p>
        <Link href="/projects" className="btn btn-primary">
          View All Projects
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>{project.title} | Tronraft Africa Limited</title>
        <meta name="description" content={project.description} />
      </Head>
      
      {/* Hero Section */}
      <HeroSection 
        title={project.title}
        subtitle={project.description}
        showButtons={false}
        height="small"
        imageUrl={project.mainImage}
      />
      
      {/* Back to Projects Link */}
      <div className="bg-gray-100 py-4">
        <div className="container-custom">
          <Link href="/projects" className="inline-flex items-center text-primary hover:text-secondary">
            <FaArrowLeft className="mr-2" /> Back to All Projects
          </Link>
        </div>
      </div>
      
      {/* Project Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2" data-aos="fade-up">
              {/* Project Gallery */}
              <div className="mb-8 bg-gray-100 h-96 rounded-lg overflow-hidden relative group">
                <Image 
                  src={project.gallery[activeImageIndex]} 
                  alt={`${project.title} - Image ${activeImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Navigation arrows for gallery */}
                {project.gallery.length > 1 && (
                  <>
                    <button 
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setActiveImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))}
                      aria-label="Previous image"
                    >
                      <FaArrowLeft />
                    </button>
                    <button 
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setActiveImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))}
                      aria-label="Next image"
                    >
                      <FaArrowRight />
                    </button>
                  </>
                )}
              </div>
              
              <div className="flex overflow-x-auto space-x-4 mb-8 pb-2 scrollbar-hide">
                {project.gallery.map((image, index) => (
                  <motion.div 
                    key={index} 
                    className={`min-w-[150px] h-24 bg-gray-200 rounded-md flex-shrink-0 relative border-2 cursor-pointer transition-all ${activeImageIndex === index ? 'border-primary' : 'border-transparent'}`}
                    onClick={() => setActiveImageIndex(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image 
                      src={image} 
                      alt={`${project.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </motion.div>
                ))}
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg mb-8 leading-relaxed" data-aos="fade-up">
                {project.fullDescription}
              </p>
              
              {/* Challenges and Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div data-aos="fade-right">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start bg-red-50 p-3 rounded-lg">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div data-aos="fade-left">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start bg-green-50 p-3 rounded-lg">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Results */}
              <div className="mb-12" data-aos="fade-up">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </span>
                  Results & Achievements
                </h3>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center bg-blue-50 p-4 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span>{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Services Used */}
              <div className="mb-12" data-aos="fade-up">
                <h3 className="text-xl font-bold mb-4">Services Utilized</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <Link 
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full transition-colors"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Client Testimonial */}
              {project.testimonial && (
                <motion.div 
                  className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary p-6 rounded-lg mb-8"
                  data-aos="fade-up"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <svg className="text-primary/20 w-12 h-12 absolute top-0 left-0 -mt-2 -ml-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <p className="text-lg italic mb-6 pl-6">{project.testimonial.quote}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3 relative">
                      <Image 
                        src={project.testimonial.image}
                        alt={project.testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{project.testimonial.author}</p>
                      <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1" data-aos="fade-left">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">Project Details</h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="w-10 text-primary flex-shrink-0">
                      <FaCalendarAlt size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Year Completed</p>
                      <p className="text-gray-900 font-medium">{project.year}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 text-primary flex-shrink-0">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Location</p>
                      <p className="text-gray-900 font-medium">{project.location}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 text-primary flex-shrink-0">
                      <FaBuilding size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Client</p>
                      <p className="text-gray-900 font-medium">{project.client}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 text-primary flex-shrink-0">
                      <FaClock size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Duration</p>
                      <p className="text-gray-900 font-medium">{project.duration}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 text-primary flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-500">Category</p>
                      <p className="text-gray-900 font-medium capitalize">{project.category}</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 space-y-4">
                  <Link href="/quote" className="btn btn-primary w-full text-center">
                    Start a Similar Project
                  </Link>
                  <Link href="/contact" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 w-full text-center">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Projects Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(projectData)
              .filter(([slug, data]) => data.category === project.category && data.title !== project.title)
              .slice(0, 3)
              .map(([slug, project]) => (
                <Link href={`/projects/${slug}`} key={slug}>
                  <div 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                    data-aos="fade-up"
                  >
                    <div className="h-48 bg-gray-300 relative overflow-hidden">
                      <Image 
                        src={project.mainImage} 
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-white bg-primary px-3 py-1 rounded-full capitalize">
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-600">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{project.location}</p>
                      <p className="text-gray-700 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/projects" 
              className="btn bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something remarkable together with our expert team
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className="btn bg-secondary hover:bg-opacity-90">
              Request a Quote
            </Link>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-opacity-90">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
