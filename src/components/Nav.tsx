import React, { useState } from 'react';
import logo from '../assets/logo-text.png';
import { FiMenu } from 'react-icons/fi';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-4">
      
      <nav className="relative flex items-center justify-between max-w-7xl mx-auto my-6">
        
        {/* Hamburger - Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          
          <FiMenu />
        </button>
        
        <img
          src={logo}
          alt="Logo"
          className="w-32 md:w-auto absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        />
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          
          <li>Home</li> <li>Technologies</li> <li>Projects</li> <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Buttons */}
        <div className="flex items-center">
          
          <button className="text-sm md:text-base"> Sign in </button>
          <button className="bg-[#D91B7E] rounded-full px-4 py-2 ml-2 text-white text-sm md:text-base">
            Sign Up
          </button>{' '}
        </div>
      </nav>{' '}
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 text-center pb-4">
          
          <li>Home</li> <li>Technologies</li> <li>Projects</li> <li>About</li>{' '}
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
