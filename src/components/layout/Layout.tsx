import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useViewport } from '../../utils/useViewport';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isMobile } = useViewport();
  
  return (
    <>
      <Head>
        <title>Tronraft Africa Limited</title>
        <meta name="description" content="Tronraft Africa Limited - Construction and Engineering Experts" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={`flex flex-col min-h-screen ${isMobile ? 'mobile-layout' : ''}`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
