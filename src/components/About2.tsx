import React from 'react';
import { ExternalLink } from 'lucide-react';

const About2: React.FC = () => {
  const projects = [
    {
      icon: '🌍',
      title: 'Beausejour Voyage',
      subtitle: 'Votre portail complet pour des voyages spirituels et culturels.',
      description: "Plateforme tout-en-un pour mon agence, incluant un site vitrine pour les pèlerinages (Hajj, Omra) et circuits, une offre spéciale « Omra & Turquie », et un blog avec des guides de voyage. L'objectif est d'offrir une expérience sur mesure et sereine, de la réservation à l'accompagnement personnalisé.",
      link: 'https://beausejourvoyage.com',
      image: null,
    },
    {
      icon: '💼',
      title: 'Agence de Voyage – Dashboard de Gestion',
      subtitle: 'Application web professionnelle pour agences de voyage.',
      description: 'Permet de gérer factures, services et performances grâce à deux espaces distincts : Agent et Directeur. Création d’une expérience fluide pour générer, suivre et exporter les factures, tout en offrant un aperçu complet des indicateurs financiers de l’agence.',
      highlights: [
        'Tableau de bord directeur avec métriques clés et rapports exportables',
        'Gestion complète des factures côté agent',
        'Interface moderne et ergonomique adaptée au métier du voyage'
      ],
      link: 'https://project.beausejourvoyage.com',
      image: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mon Espace Créatif
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quelques projets que j'ai eu le plaisir de développer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{project.subtitle}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {project.highlights && (
                  <div className="mb-6 space-y-2">
                    <h4 className="font-semibold text-gray-800">Points forts :</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>
                          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">✅</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-auto"
                >
                  Voir le projet
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About2; 