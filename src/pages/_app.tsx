import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import 'aos/dist/aos.css';

// Optional: Add any third-party CSS imports here
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Import AOS dynamically to avoid SSR issues
    const AOS = require('aos');
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
