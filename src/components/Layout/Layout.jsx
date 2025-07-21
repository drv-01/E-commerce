import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children, cart }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar cart={cart} />

      {/* Main Content */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
