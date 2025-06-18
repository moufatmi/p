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
        </div>

        <div className="relative mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔹 Expérience Professionnelle Complète :</h3>
          <div className="space-y-8">
            {/* Beausejour Voyage Agent & Support */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-1">🔸 Agent de voyage & Support technique – Beausejour Voyage</h4>
              <div className="text-gray-500 mb-2">📍 Oujda, Maroc | 📅 2023</div>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Accueil et accompagnement des clients dans le choix de leurs destinations et services touristiques.</li>
                <li>Création de programmes de voyage sur mesure, réservation de vols, hébergements et activités.</li>
                <li>Gestion des dossiers clients, suivi personnalisé et assistance avant et pendant le voyage.</li>
                <li>💻 Responsable du support technique interne : assistance aux agents de voyage en cas de problèmes techniques liés aux logiciels, imprimantes, ou outils de réservation.</li>
                <li>Participation à l'amélioration des processus digitaux au sein de l'agence.</li>
              </ul>
            </div>
            {/* Beausejour Voyage Web Dev */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-1">🔸 Développeur Web – Projet interne Beausejour Voyage</h4>
              <div className="text-gray-500 mb-2">📍 Oujda, Maroc | 📅 2024</div>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Conception et développement d'un système web dédié à la gestion et au suivi des factures des clients pour les agents de voyage.</li>
                <li>Réalisation d'une interface intuitive permettant l'enregistrement, la consultation et le classement efficace des factures quotidiennes.</li>
                <li>Utilisation des technologies HTML, CSS, JavaScript, et PHP/MySQL pour offrir une solution complète et adaptée aux besoins spécifiques de l'agence.</li>
                <li>Amélioration de la productivité administrative grâce à l'automatisation de tâches répétitives.</li>
              </ul>
            </div>
            {/* Assistant administratif */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-1">🔸 Assistant administratif – Entreprise d'importation et distribution de bois</h4>
              <div className="text-gray-500 mb-2">📍 Oujda, Maroc | 📅 Été 2020 (5 mois)</div>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Organisation et classement des factures papier et numériques.</li>
                <li>Saisie des données financières dans Excel pour le suivi des opérations.</li>
                <li>Soutien administratif général pour faciliter la gestion quotidienne.</li>
              </ul>
            </div>
            {/* Technicien vendeur */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-semibold mb-1">🔸 Technicien vendeur – Magasin de réparation et vente d'appareils électroniques</h4>
              <div className="text-gray-500 mb-2">📍 Oujda, Maroc | 📅 2018 (1 an)</div>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Réparation et maintenance d'ordinateurs et téléphones mobiles.</li>
                <li>Conseil et vente d'équipements électroniques aux clients.</li>
                <li>Gestion des stocks et suivi des commandes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;