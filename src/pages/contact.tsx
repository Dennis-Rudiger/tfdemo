import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroSection from '../components/ui/HeroSection';
import GoogleMap from '../components/ui/GoogleMap';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Define office coordinates - this would be the actual location of Tronraft
  const officeCoordinates = {
    lat: -1.292066, // Nairobi coordinates as a placeholder
    lng: 36.821945
  };

  // Google Maps API key - replace with your actual API key
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY";
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <>
      <Head>
        <title>Contact Us | Tronraft Africa Limited</title>
        <meta 
          name="description" 
          content="Get in touch with Tronraft Africa Limited. We're here to answer your questions and provide the construction and consultancy services you need." 
        />
      </Head>
      
      <HeroSection
        title="Contact Us"
        subtitle="Let's start a conversation about your construction needs"
        showButtons={false}
        height="small"
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      />
      
      {/* Contact Information Cards */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Office Location */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-b-4 border-primary"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary mx-auto">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-center mb-3">Visit Us</h3>
              <p className="text-gray-600 text-center">123 Tronraft Road, Nairobi, Kenya</p>
              <div className="mt-4 text-center">
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${officeCoordinates.lat},${officeCoordinates.lng}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-secondary font-medium inline-flex items-center"
                >
                  View on Map
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Phone */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-b-4 border-secondary"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary mx-auto">
                <FaPhoneAlt size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-center mb-3">Call Us</h3>
              <p className="text-gray-600 text-center">+254 123 456 789</p>
              <p className="text-gray-600 text-center">+254 987 654 321</p>
              <div className="mt-4 text-center">
                <a 
                  href="tel:+254123456789" 
                  className="text-primary hover:text-secondary font-medium"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
            
            {/* Email */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-b-4 border-blue-500"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-500 mx-auto">
                <FaEnvelope size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-center mb-3">Email Us</h3>
              <p className="text-gray-600 text-center">info@tronraftafrica.com</p>
              <p className="text-gray-600 text-center">support@tronraftafrica.com</p>
              <div className="mt-4 text-center">
                <a 
                  href="mailto:info@tronraftafrica.com" 
                  className="text-primary hover:text-secondary font-medium"
                >
                  Email Now
                </a>
              </div>
            </motion.div>
            
            {/* WhatsApp */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-b-4 border-green-500"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 mx-auto">
                <FaWhatsapp size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-center mb-3">WhatsApp Us</h3>
              <p className="text-gray-600 text-center">+254 123 456 789</p>
              <p className="text-gray-600 text-center">Quick responses during business hours</p>
              <div className="mt-4 text-center">
                <a 
                  href="https://wa.me/254123456789?text=Hello,%20I'd%20like%20to%20inquire%20about%20your%20services." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 font-medium flex items-center justify-center"
                >
                  Chat Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Google Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Find Us</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <GoogleMap 
              apiKey={GOOGLE_MAPS_API_KEY}
              center={officeCoordinates}
              zoom={15}
              markerPosition={officeCoordinates}
              height="500px"
            />
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="font-heading font-bold text-xl mb-4">Need Directions?</h3>
            <p className="text-gray-600 mb-4">Visit us at our headquarters located at 123 Tronraft Road, Nairobi, Kenya.</p>
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${officeCoordinates.lat},${officeCoordinates.lng}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary inline-flex items-center"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-xl p-8 md:p-10"
            >
              <h2 className="font-heading font-bold text-3xl mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you shortly</p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="johndoe@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="+254 123 456 789"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Project Inquiry"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea 
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Please provide details about your project or inquiry..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mt-8 flex flex-col md:flex-row gap-4 items-center">
                    <button 
                      type="submit" 
                      className={`w-full md:w-auto py-4 px-6 rounded-lg font-medium text-white bg-primary hover:bg-primary-dark transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block animate-spin mr-2">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </span>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                    
                    <a 
                      href="https://wa.me/254123456789?text=Hello,%20I'd%20like%20to%20inquire%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto flex items-center justify-center py-4 px-6 rounded-lg font-medium text-white bg-green-500 hover:bg-green-600 transition-colors"
                    >
                      <FaWhatsapp className="mr-2" /> WhatsApp Us
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
            
            {/* Additional Information */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Business Hours Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary">
                    <FaClock size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-xl">Business Hours</h3>
                </div>
                <div className="space-y-2 pl-16">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Public Holidays:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
              
              {/* FAQ Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h3 className="font-heading font-bold text-xl mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">How do I request a quote?</h4>
                    <p className="text-gray-600">You can request a quote by filling out our contact form, calling us directly, or using the "Request a Quote" button on our website.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">What areas do you serve?</h4>
                    <p className="text-gray-600">We operate throughout Kenya and across East Africa. Contact us to discuss your project location.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">How quickly can you respond to inquiries?</h4>
                    <p className="text-gray-600">We typically respond to all inquiries within 24 business hours. For urgent matters, please call us directly.</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-primary text-white rounded-xl p-8">
                <h3 className="font-heading font-bold text-xl mb-4">Connect With Us</h3>
                <p className="mb-6">Follow us on social media for the latest updates, projects, and industry insights.</p>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
                  >
                    <FaFacebookF className="mr-3 text-xl" /> Facebook
                  </a>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
                  >
                    <FaTwitter className="mr-3 text-xl" /> Twitter
                  </a>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
                  >
                    <FaInstagram className="mr-3 text-xl" /> Instagram
                  </a>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
                  >
                    <FaLinkedin className="mr-3 text-xl" /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you bring your construction vision to reality with our expertise and professional team.
          </p>
          <a 
            href="/quote" 
            className="inline-block py-4 px-8 bg-secondary hover:bg-opacity-90 text-white font-medium rounded-lg shadow-lg transform transition-transform hover:-translate-y-1"
          >
            Request a Quote
          </a>
        </div>
      </section>
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="+254123456789"
        message="Hello, I'd like to inquire about Tronraft Africa's services."
        pulseAnimation={true}
      />
    </>
  );
};

export default ContactPage;
