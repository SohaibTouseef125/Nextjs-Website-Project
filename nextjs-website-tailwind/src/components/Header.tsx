// components/Navbar.tsx
"use client"
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaNpm } from 'react-icons/fa';
import { useState } from 'react';
import { IoLogoVercel } from 'react-icons/io5';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       
          <h1 className="text-white text-2xl font-bold">MyWebsite</h1>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <h2 className="text-white hover:text-gray-200">Home</h2>
          </Link>
          <Link href="/about">
            <h2 className="text-white hover:text-gray-200">About</h2>
          </Link>
          <Link href="/services">
            <h2 className="text-white hover:text-gray-200">Services</h2>
          </Link>
          <Link href="/contact">
            <h2 className="text-white hover:text-gray-200">Contact</h2>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
        <Link href="https://www.linkedin.com/in/sohaib-touseef-12a7b628a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-gray-200" size={20} />
          </Link>
          <Link href="https://github.com/SohaibTouseef125" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-gray-200" size={20} />
          </Link>
          <Link href="https://vercel.com/sohaib-touseefs-projects" target="_blank" rel="noopener noreferrer">
            <IoLogoVercel className="text-white hover:text-gray-200"  size={20} />
          </Link>
          <Link href="https://www.facebook.com/SohaibTouseef" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} className="text-white hover:text-gray-200" />
          </Link>
          <Link href="https://www.instagram.com/sohaibatouseef/" target="_blank" rel="noopener noreferrer">
            <FaInstagram  className="text-white hover:text-gray-200" size={20} />
          </Link>
          <Link href="https://www.npmjs.com/~m6sohaib" target="_blank" rel="noopener noreferrer">
            <FaNpm  className="text-white hover:text-gray-200" size={20} />
          </Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-4">
          <Link href="/">
            <h2 className="text-white block">Home</h2>
          </Link>
          <Link href="/about">
            <h2 className="text-white block">About</h2>
          </Link>
          <Link href="/services">
            <h2 className="text-white block">Services</h2>
          </Link>
          <Link href="/contact">
            <h2 className="text-white block">Contact</h2>
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white hover:text-gray-200" size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white hover:text-gray-200" size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-gray-200" size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-gray-200" size={20} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
