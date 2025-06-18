import React, { useState } from 'react';
import { Menu, X, User, Download } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <User className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Moussab Fatmi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CV Download Button */}
          <button className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
            <Download className="h-4 w-4" />
            Télécharger CV
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-full justify-center">
              <Download className="h-4 w-4" />
              Télécharger CV
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;