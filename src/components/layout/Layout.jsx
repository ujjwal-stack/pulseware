import React from 'react';
import Navigation from './Navigation';
import Notification from '../common/Notification';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Notification />
    </div>
  );
};

export default Layout;