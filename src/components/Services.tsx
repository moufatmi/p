import React from 'react';
import { Plane, Hotel, MapPin, Shield, Calendar, Headphones } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: 'Voyages Sur Mesure',
      description: 'Itinéraires personnalisés selon vos envies, budget et style de voyage',
      features: ['Consultation personnalisée', 'Itinéraire détaillé', 'Support 24/7']
    },
    {
      icon: Hotel,
      title: 'Réservations Premium',
      description: 'Hôtels de charme, resorts de luxe et hébergements authentiques',
      features: ['Sélection exclusive', 'Tarifs préférentiels', 'Surclassements']
    },
    {
      icon: MapPin,
      title: 'Guides Locaux',
      description: 'Expériences authentiques avec des guides locaux expérimentés',
      features: ['Guides certifiés', 'Expériences privées', 'Culture locale']
    },
    {
      icon: Shield,
      title: 'Assurance Voyage',
      description: 'Protection complète pour voyager l\'esprit tranquille',
      features: ['Couverture médicale', 'Annulation', 'Rapatriement']
    },
    {
      icon: Calendar,
      title: 'Planification Complète',
      description: 'Organisation de A à Z de votre voyage pour une expérience sans stress',
      features: ['Planning détaillé', 'Réservations', 'Documentation']
    },
    {
      icon: Headphones,
      title: 'Support Continu',
      description: 'Assistance avant, pendant et après votre voyage',
      features: ['Support 24/7', 'Assistance urgence', 'Suivi post-voyage']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services d'Excellence
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Un accompagnement personnalisé à chaque étape de votre voyage pour une expérience inoubliable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                {service.description}
              </p>
              
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 bg-gradient-to-r from-sky-500 to-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
            Prêt à Vivre Votre Aventure ?
          </h3>
          <p className="text-base sm:text-xl mb-4 sm:mb-8 opacity-90">
            Contactez-moi dès aujourd'hui pour une consultation gratuite et personnalisée
          </p>
          <button className="bg-white text-sky-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Consultation Gratuite
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;