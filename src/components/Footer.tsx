import React from 'react';
import { User, Phone, Mail, MapPin, Linkedin, Download } from 'lucide-react';
import cvFile from '../assets/CV.pdf';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Réalisations', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <User className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-lg sm:text-2xl font-bold">Moussab Fatmi</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              Conseillère en voyages passionnée avec 3 années d'expérience. 
              À la recherche de nouvelles opportunités dans une agence prestigieuse.
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+212 6 98 57 02 82</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>moussabfatmi@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Oujda, Morocco</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-blue-400" />
                <span className="break-all">https://www.linkedin.com/in/moussabfatmi/</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Navigation</h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CV Download */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Mon CV</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4">
              Téléchargez mon CV complet au format PDF.
            </p>
            <a
              href={cvFile}
              download="CV.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Télécharger CV
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
            <div className="text-xs sm:text-sm text-gray-400 mb-2 md:mb-0">
              <p>&copy; 2025 Moussab Fatmi. Portfolio professionnel.</p>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 text-center md:text-right">
              <p>Disponible pour nouvelles opportunités</p>
              <p className="mt-1 text-green-400">
                🟢 Actuellement en recherche active
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;