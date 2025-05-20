import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return router.pathname === path || 
           (path !== '/' && router.pathname.startsWith(path));
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-white ${isScrolled ? 'shadow-lg' : ''} sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <div className="relative">
            {/* Replace with your logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-2">
                TA
              </div>
              <span className="text-xl font-bold text-primary">Tronraft Africa</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`${isActive(link.path) ? 'nav-link-active' : 'nav-link'}`}
            >
              <motion.span
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <Link href="/quote" className="btn btn-secondary">
              Request a Quote
            </Link>
          </motion.div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-dark p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`py-2 ${isActive(link.path) ? 'nav-link-active' : 'nav-link'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/quote" 
                className="btn btn-secondary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
