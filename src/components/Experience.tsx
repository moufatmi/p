import React from 'react';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: '2020 - Présent',
      position: 'Conseillère Senior en Voyages',
      company: 'Voyages Prestige International',
      location: 'Paris, France',
      achievements: [
        'Gestion d\'un portefeuille de 200+ clients VIP',
        'Augmentation du CA de 35% sur ma clientèle',
        'Spécialisation voyages de luxe et sur mesure',
        'Formation de 3 nouveaux conseillers juniors'
      ],
      icon: TrendingUp
    },
    {
      period: '2018 - 2020',
      position: 'Conseillère en Voyages',
      company: 'Agence Évasion Monde',
      location: 'Lyon, France',
      achievements: [
        'Développement clientèle entreprises (+40%)',
        'Organisation de 150+ voyages d\'affaires/an',
        'Mise en place processus de suivi client',
        'Taux de satisfaction client: 98%'
      ],
      icon: Users
    },
    {
      period: '2016 - 2018',
      position: 'Assistante Conseillère',
      company: 'Thomas Cook France',
      location: 'Paris, France',
      achievements: [
        'Support clientèle et réservations',
        'Gestion des dossiers complexes',
        'Formation sur les outils GDS',
        'Promotion rapide en 18 mois'
      ],
      icon: Calendar
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un parcours riche et progressif dans l'industrie du voyage
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shadow-lg relative z-10">
                  <exp.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;