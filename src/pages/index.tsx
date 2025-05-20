import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import ServicesGrid from '../components/home/ServicesGrid';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import ClientsMarquee from '../components/home/ClientsMarquee';
import { clientsData } from '../utils/data';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section with enhanced styling */}
      <HeroSection 
        title="Building Africa's Future"
        subtitle="Your trusted partner in construction and infrastructure development, delivering excellence across East Africa."
        showButtons={true}
        imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        height="large"
        overlayStyle="gradient"
        imageAnimation={true}
      />

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container-custom">
          <SectionTitle 
            title="Our Services" 
            subtitle="We offer a comprehensive range of construction and consultancy services tailored to meet your specific needs"
            centered={true}
          />
          
          <ServicesGrid />
          
          <div className="text-center mt-8 md:mt-12">
            <Link 
              href="/services" 
              className="btn btn-primary text-sm md:text-base"
              data-aos="fade-up"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div 
              className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden"
              data-aos="fade-right"
            >
              {/* About image using placeholder */}
              <Image 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="About Tronraft Africa"
                fill
                className="object-cover"
              />
            </div>
            <div 
              className="md:w-1/2"
              data-aos="fade-left"
            >
              <SectionTitle 
                title="Empower Africa, Empower You" 
                subtitle=""
              />
              <p className="mb-4 md:mb-6 text-base md:text-lg">
                At Tronraft Africa Limited, we believe in building more than just structures – we're building the future of Africa through quality construction, consultancy and job creation.
              </p>
              <p className="mb-6 md:mb-8 text-sm md:text-base">
                With years of experience and a dedicated team of professionals, we deliver projects that stand the test of time while empowering local communities.
              </p>
              <Link 
                href="/about" 
                className="btn btn-primary inline-flex items-center text-sm md:text-base"
              >
                Learn More About Us
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Project" 
            subtitle="Discover our signature work that exemplifies our commitment to excellence"
            centered={true}
          />
          
          <div className="relative rounded-lg overflow-hidden" data-aos="zoom-in">
            <div className="h-64 sm:h-80 md:h-96 relative">
              <Image 
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                alt="Featured Project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8">
                <div className="text-white">
                  <span className="inline-block px-2 py-1 bg-secondary rounded-full text-xs md:text-sm font-medium mb-2">
                    Commercial
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Jamii Business Center</h3>
                  <p className="mb-4 text-xs md:text-sm text-gray-200 max-w-xl">
                    A state-of-the-art office complex with retail spaces and underground parking facilities in Mombasa, Kenya.
                  </p>
                  <Link 
                    href="/projects/jamii-business-center" 
                    className="inline-flex items-center text-white text-sm font-medium group"
                  >
                    View Project Details
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 text-center">
            <Link 
              href="/projects" 
              className="btn btn-primary text-sm md:text-base"
              data-aos="fade-up"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="What Our Clients Say" 
            centered={true}
          />
          
          <div className="mt-8 md:mt-12" data-aos="fade-up">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary text-white py-10 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              className="text-center p-3 md:p-6"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">200+</div>
              <p className="text-sm md:text-base text-gray-100">Projects Completed</p>
            </div>
            <div 
              className="text-center p-3 md:p-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">15+</div>
              <p className="text-sm md:text-base text-gray-100">Years Experience</p>
            </div>
            <div 
              className="text-center p-3 md:p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">50+</div>
              <p className="text-sm md:text-base text-gray-100">Expert Team Members</p>
            </div>
            <div 
              className="text-center p-3 md:p-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">98%</div>
              <p className="text-sm md:text-base text-gray-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients/Partners Section */}
      <section className="section bg-gray-50 py-10 md:py-16">
        <div className="container-custom">
          <SectionTitle 
            title="Our Trusted Partners" 
            subtitle="We're proud to collaborate with these industry-leading organizations"
            centered={true}
          />
          
          <div className="mt-6 md:mt-8" data-aos="fade-up">
            <ClientsMarquee 
              clients={clientsData}
              speed={40}
              pauseOnHover={true}
            />
          </div>
          
          <div className="mt-6 md:mt-8 text-center">
            <Link href="/about#partners" className="text-primary hover:text-secondary flex items-center justify-center gap-2 font-medium text-sm">
              Learn more about our partnerships
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with upgraded buttons */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-10 md:py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Start Your Project?</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's work together to bring your construction vision to life with our expert team
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button 
                href="/quote" 
                variant="secondary" 
                size="lg" 
                icon={<FaArrowRight />} 
                glow={true}
                pulse={true}
              >
                Request a Quote
              </Button>
              <Button 
                href="/contact" 
                variant="white" 
                size="lg"
                icon={<FaEnvelope />}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
