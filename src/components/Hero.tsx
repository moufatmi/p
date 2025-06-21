import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Download } from 'lucide-react';
import profileImg from '../assets/profile 2.jpg';
import cvFile from '../assets/CV.pdf';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100"
      aria-label="Introduction"
    >
      {/* Background Pattern - decorative */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <header className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4" role="text">
                Agent de Voyage
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Moussab <span className="text-blue-600">Fatmi</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Conseiller en voyages passionné avec 3 ans d'expérience dans la création d'expériences de voyage exceptionnelles. Désormais, je propose également des services spécialisés pour le Hajj et la Omra.
              </p>
            </header>

            {/* Contact Info */}
            <address className="space-y-3 mb-8 not-italic">
              <a href="tel:+212698570282" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <span>+212 6 98 57 02 82</span>
              </a>
              <a href="mailto:moussabfatmi@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <span>moussabfatmi@gmail.com</span>
              </a>
              <p className="flex items-center gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <span>Oujda, Morocco</span>
              </p>
              <a 
                href="https://www.linkedin.com/in/moussabfatmi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <span>linkedin.com/in/moussabfatmi</span>
              </a>
            </address>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Actions principales">
              <a
                href={cvFile}
                download="CV_Moussab_Fatmi.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                aria-label="Télécharger mon CV au format PDF"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Télécharger mon CV
              </a>
              <a
                href="https://www.facebook.com/moussabfatmi"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
                aria-label="Me contacter sur Facebook"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="relative">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={profileImg}
                  alt="Moussab Fatmi - Photo de profil"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform rotate-12 animate-float-fast" aria-hidden="true">
                <span className="text-2xl" role="presentation">✈️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-12 animate-float-slow" aria-hidden="true">
                <span className="text-2xl" role="presentation">🌍</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white rounded-xl shadow-lg p-3 transform rotate-6 animate-float" aria-hidden="true">
                <span className="text-xl" role="presentation">🏖️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;