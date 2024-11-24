"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaNpm } from "react-icons/fa";
import { useState } from "react";
import "./../app/style/header.css"
import { IoLogoVercel } from "react-icons/io5";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">MyWebsite</h1>

        <div className="navbar-links">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/services">
            <p>Services</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>

        <div className="navbar-social">
          <Link href="https://www.linkedin.com/in/sohaib-touseef-12a7b628a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </Link>
          <Link href="https://github.com/SohaibTouseef125" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </Link>
          <Link href="https://vercel.com/sohaib-touseefs-projects" target="_blank" rel="noopener noreferrer">
            <IoLogoVercel  size={20} />
          </Link>
          <Link href="https://www.facebook.com/SohaibTouseef" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </Link>
          <Link href="https://www.instagram.com/sohaibatouseef/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://www.npmjs.com/~m6sohaib" target="_blank" rel="noopener noreferrer">
            <FaNpm size={20} />
          </Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <button
          className="mobile-menu-btn"
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
        <div className="mobile-menu">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/services">
            <p>Services</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
          <div className="navbar-social">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </Link>
            <Link href="https://www.facebook.com/SohaibTouseef" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
