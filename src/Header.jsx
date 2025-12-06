import React, { useState } from 'react';
import QUAY from './assets/quay-white.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>

      {/* TOP NAVBAR - FIXED */}
      <nav className="fixed top-0 left-0 right-0 z-9999 bg-black bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Hamburger ALWAYS visible */}
          <button
            className="text-3xl text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <img src={QUAY} alt="" className="h-10 object-contain" />
          </div>

          {/* Desktop button */}
         <div className="hidden md:flex">
  <button className="text-white px-4 py-2 border font-semibold border-white text-sm hover:border-black
                     hover:text-black hover:bg-white hover:font-semibold transition duration-300">
    MAKE A QUAY RESERVATION
  </button>
</div>


        </div>
      </nav>

      {/* Push content down */}
      <div className="h-[14vh]"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-3/4 bg-white p-10 mt-8 z-9998">
          <div className="flex flex-col space-y-6 text-3xl">
            <a href="/" onClick={() => setIsMenuOpen(false)}>HOME</a>
            <a href="/menu" onClick={() => setIsMenuOpen(false)}>MENU</a>
            <a href="/order" onClick={() => setIsMenuOpen(false)}>ORDER</a>
            <a href="/reservation" onClick={() => setIsMenuOpen(false)}>RESERVATION</a>
            <a href="/success" onClick={() => setIsMenuOpen(false)}>SUCCESS</a>
          </div>
        </div>
      )}

    </div>
  );
};

export default Header;