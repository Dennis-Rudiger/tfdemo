import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp,
  FaArrowRight,
  FaPhoneAlt
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    setIsSubscribed(true);
    setEmail("");
    // Reset subscription status after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-dark text-white relative w-full">
      {/* Decorative top edge - prevent overflow */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-1/2 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 lg:h-12">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Scroll to top button */}
      <div className="container-custom relative">
        <motion.button 
          onClick={scrollToTop}
          className="absolute -top-5 right-5 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300"
          aria-label="Scroll to top"
          whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp />
        </motion.button>
      </div>
      
      {/* Quick contact bar */}
      <div className="bg-primary-dark/30 py-4 border-b border-blue-700/30 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="tel:+254123456789" className="flex items-center text-white hover:text-secondary transition-colors">
                <FaPhoneAlt className="mr-2" /> +254 123 456 789
              </a>
              <a href="mailto:info@tronraftafrica.com" className="flex items-center text-white hover:text-secondary transition-colors">
                <FaEnvelope className="mr-2" /> info@tronraftafrica.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="0">
            <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2 flex items-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary font-bold mr-2">
                TA
              </div>
              Tronraft Africa
            </h3>
            <p className="mb-6">Your Satisfaction is Our Destiny</p>
            <p className="mb-6 text-blue-100">At Tronraft Africa Limited, we believe in building more than just structures – we're building the future of Africa through quality construction, consultancy and job creation.</p>
            <div className="flex space-x-4 mt-6 md:hidden">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-secondary transition-colors inline-block py-1 group"
                >
                  <span className="flex items-center">
                    <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transform transition-all duration-300">
                      <FaArrowRight size={12} />
                    </span>
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-secondary transition-colors inline-block py-1 group"
                >
                  <span className="flex items-center">
                    <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transform transition">
                      <FaArrowRight size={12} />
                    </span>
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="hover:text-secondary transition-colors inline-block py-1 group"
                >
                  <span className="flex items-center">
                    <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transform transition">
                      <FaArrowRight size={12} />
                    </span>
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="hover:text-secondary transition-colors inline-block py-1 group"
                >
                  <span className="flex items-center">
                    <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transform transition">
                      <FaArrowRight size={12} />
                    </span>
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="hover:text-secondary transition-colors inline-block py-1 group"
                >
                  <span className="flex items-center">
                    <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transform transition">
                      <FaArrowRight size={12} />
                    </span>
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/quote" 
                  className="hover:text-secondary transition-colors inline-block py-1 group"
                >
                  <span className="flex items-center">
                    <span className="text-secondary mr-2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transform transition">
                      <FaArrowRight size={12} />
                    </span>
                    Request Quote
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">Stay Updated</h3>
            <p className="mb-4 text-blue-100">Subscribe to our newsletter to receive updates about our projects, services, and industry insights.</p>
            
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex flex-col space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full p-3 pr-10 rounded bg-white/10 border border-blue-400/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200">
                    <FaEnvelope />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="bg-secondary hover:bg-opacity-90 text-white py-3 px-4 rounded w-full transition-colors"
                >
                  Subscribe
                </button>
                {isSubscribed && (
                  <p className="text-green-300 text-sm">
                    Thank you for subscribing!
                  </p>
                )}
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-4 border-b border-blue-400 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3 text-secondary flex-shrink-0 bg-blue-400/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>
                <span>123 Tronraft Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-secondary flex-shrink-0 bg-blue-400/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <FaPhone />
                </div>
                <a href="tel:+254123456789" className="hover:text-secondary transition-colors">+254 123 456 789</a>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-secondary flex-shrink-0 bg-blue-400/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <a href="mailto:info@tronraftafrica.com" className="hover:text-secondary transition-colors">info@tronraftafrica.com</a>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-secondary flex-shrink-0 bg-blue-400/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <FaClock />
                </div>
                <span>Mon-Fri: 8am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-blue-700/30 mt-12 pt-8 text-center">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Tronraft Africa Limited. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-blue-200">
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-secondary transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
      
      {/* Decorative wave at bottom - prevent overflow */}
      <div className="bg-primary-dark h-6 relative overflow-hidden w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-12 rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#1C4E80" opacity=".5"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#1C4E80"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
