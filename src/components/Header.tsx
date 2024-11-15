import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/20 backdrop-blur-lg rounded-full px-8 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Sreeharsha Muttamatam
        </Link>

        {/* Hamburger Menu Button for Mobile and Tablet */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-primary transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-primary transition-colors">HOME</a>
          <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
          <a href="#skills" className="hover:text-primary transition-colors">SKILLS</a>
          <a href="#experience" className="hover:text-primary transition-colors">EXPERIENCE</a>
          <a href="#projects" className="hover:text-primary transition-colors">PROJECTS</a>
          <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:text-primary transition-colors"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Toggled by Hamburger Button) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black/30 backdrop-blur-sm py-4 px-6 rounded-lg shadow-lg">
          <nav className="space-y-4">
            <a href="#home" className="block text-white hover:text-primary transition-colors">HOME</a>
            <a href="#about" className="block text-white hover:text-primary transition-colors">ABOUT</a>
            <a href="#skills" className="block text-white hover:text-primary transition-colors">SKILLS</a>
            <a href="#experience" className="block text-white hover:text-primary transition-colors">EXPERIENCE</a>
            <a href="#projects" className="block text-white hover:text-primary transition-colors">PROJECTS</a>
            <a href="#contact" className="block text-white hover:text-primary transition-colors">CONTACT</a>

            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-white hover:text-primary transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Header;
