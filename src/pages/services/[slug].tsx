import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeroSection from '../../components/ui/HeroSection';
import { FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { serviceData } from '../../utils/serviceData';
import Button from '../../components/ui/Button';

const ServiceDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  // Show loading state while fetching data
  if (router.isFallback || !slug) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }
  
  // Get service data based on slug
  const service = serviceData[slug as keyof typeof serviceData];
  
  // Handle case when service is not found
  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8 text-gray-600">The service you're looking for doesn't exist or has been moved.</p>
        <Link href="/services" className="btn btn-primary">
          View All Services
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>{service.title} | Tronraft Africa Limited</title>
        <meta name="description" content={service.description} />
      </Head>
      
      {/* Hero Section with service-specific background */}
      <HeroSection 
        title={service.title}
        subtitle={service.description}
        showButtons={false}
        height="small"
        imageUrl={service.image}
      />
      
      {/* Back to Services Link */}
      <div className="bg-gray-100 py-4 w-full">
        <div className="container-custom">
          <Button 
            href="/services" 
            variant="ghost" 
            size="sm"
            icon={<FaArrowLeft />}
            iconPosition="left"
          >
            Back to All Services
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="section bg-white w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
            <div className="lg:col-span-2 w-full" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
              <p className="text-base md:text-lg mb-8 leading-relaxed break-words">
                {service.fullDescription}
              </p>
              
              {/* Process Section */}
              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">Our Process</h2>
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow overflow-hidden">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-700 break-words">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Case Study */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200 w-full" data-aos="fade-up">
                <h2 className="text-2xl font-bold mb-4">Case Study: {service.caseStudyTitle}</h2>
                <p className="text-gray-700 mb-4 break-words">{service.caseStudyDescription}</p>
                <Link 
                  href={`/projects/${service.caseStudyTitle.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-primary font-medium hover:underline flex items-center group"
                >
                  View Project Details 
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* FAQs */}
              <div className="mt-12 w-full" data-aos="fade-up">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 p-6 rounded-lg border border-gray-100 w-full"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <h3 className="text-xl font-bold mb-2 break-words">{faq.question}</h3>
                      <p className="text-gray-700 break-words">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 w-full" data-aos="fade-left">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="break-words">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-4">Contact us today to discuss your project requirements.</p>
                  <div className="space-y-3 w-full">
                    <Button 
                      href="/quote" 
                      variant="primary" 
                      fullWidth={true}
                      glow={true}
                    >
                      Request a Quote
                    </Button>
                    <Button 
                      href="/contact" 
                      variant="outline"
                      fullWidth={true}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="section bg-gray-100 w-full">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Services</h2>
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Make sure cards are constrained to container width */}
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg w-full">
              <h3 className="text-xl font-bold mb-3">Design & Build</h3>
              <p className="text-gray-700 mb-4">Comprehensive solutions from concept to completion.</p>
              <Button 
                href="/services/design-build" 
                variant="ghost"
                size="sm"
                icon={<FaArrowRight />}
              >
                Learn More
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg w-full">
              <h3 className="text-xl font-bold mb-3">Civil Works</h3>
              <p className="text-gray-700 mb-4">Infrastructure development and structural engineering.</p>
              <Button 
                href="/services/civil-works" 
                variant="ghost"
                size="sm"
                icon={<FaArrowRight />}
              >
                Learn More
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg w-full">
              <h3 className="text-xl font-bold mb-3">Consultancy</h3>
              <p className="text-gray-700 mb-4">Expert advice and professional guidance for construction projects.</p>
              <Button 
                href="/services/consultancy" 
                variant="ghost"
                size="sm"
                icon={<FaArrowRight />}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16 w-full">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your {service.title} Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="/quote" 
              variant="secondary" 
              size="lg"
              glow={true}
              icon={<FaArrowRight />}
              pulse={true}
            >
              Request a Quote
            </Button>
            <Button 
              href="/contact" 
              variant="white"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
