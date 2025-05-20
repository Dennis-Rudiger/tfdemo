import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import AOS from 'aos';
import { useViewport } from '../utils/useViewport';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { isMobile } = useViewport();
  
  useEffect(() => {
    // Initialize AOS with mobile-optimized settings
    AOS.init({
      once: true,
      duration: isMobile ? 400 : 800,
      easing: 'ease-out-cubic',
      disable: 'mobile' // Disable AOS on mobile if it's causing layout issues
    });
    
    // Fix for mobile viewport issues
    if (isMobile) {
      // Force layout recalculation by subtly modifying body style
      document.body.style.minHeight = '100vh';
      document.body.style.display = 'flex';
      document.body.style.flexDirection = 'column';
      
      // Fix any 100vh issues on mobile (common problem)
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      // Add listener for orientation changes
      const handleOrientationChange = () => {
        const newVh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${newVh}px`);
      };
      
      window.addEventListener('orientationchange', handleOrientationChange);
      return () => window.removeEventListener('orientationchange', handleOrientationChange);
    }
  }, [isMobile]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
