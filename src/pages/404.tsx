import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, the page you requested could not be found. Please check the URL or navigate back to the homepage.
        </p>
        <Link href="/" className="btn btn-primary">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
