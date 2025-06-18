import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Agent de Voyage Professionnel
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Sophie <span className="text-blue-600">Martin</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Conseillère en voyages passionnée avec 8+ années d'expérience dans la création d'expériences de voyage exceptionnelles
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1200+</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">45+</div>
                <div className="text-sm text-gray-600">Pays visités</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+33 6 12 34 56 78</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>sophie.martin@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <span>linkedin.com/in/sophie-martin-travel</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                <Download className="h-5 w-5" />
                Télécharger mon CV
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                Me contacter
              </button>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div className="relative">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sophie Martin - Travel Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform rotate-12">
                <div className="text-2xl">✈️</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 transform -rotate-12">
                <div className="text-2xl">🌍</div>
              </div>
              <div className="absolute top-1/2 -right-8 bg-white rounded-xl shadow-lg p-3 transform rotate-6">
                <div className="text-xl">🏖️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;