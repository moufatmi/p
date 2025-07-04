import React, { useState } from 'react';
import { Menu, X, User, Download } from 'lucide-react';
import cvFile from '../assets/CV.pdf';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Réalisations', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo and Name */}
          <a href="#home" className="flex items-center space-x-2" aria-label="Retour à l'accueil">
            <User className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" aria-hidden="true" />
            <span className="text-lg sm:text-2xl font-bold text-gray-900">Moussab Fatmi</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 sm:space-x-8" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm sm:text-base"
                aria-current={item.href === '#home' ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CV Download Button */}
          <a
            href={cvFile}
            download="CV_Moussab_Fatmi.pdf"
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            aria-label="Télécharger mon CV au format PDF"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Télécharger CV
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`md:hidden bg-white border-t ${isMenuOpen ? '' : 'hidden'}`}
        role="navigation"
        aria-label="Menu mobile"
      >
        <nav className="px-2 sm:px-4 py-4 space-y-2 sm:space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base sm:text-lg px-2 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
              aria-current={item.href === '#home' ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
          <a
            href={cvFile}
            download="CV_Moussab_Fatmi.pdf"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 w-full justify-center text-base sm:text-lg"
            aria-label="Télécharger mon CV au format PDF"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Télécharger CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;