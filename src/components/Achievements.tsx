import React from 'react';
import { Trophy, Star, TrendingUp, Users, Award, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Meilleure Conseillère 2023',
      description: 'Prix de la meilleure performance commerciale chez Voyages Prestige International',
      year: '2023',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Star,
      title: 'Excellence Client',
      description: 'Taux de satisfaction client de 98% maintenu sur 3 années consécutives',
      year: '2021-2023',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Croissance Exceptionnelle',
      description: 'Augmentation du chiffre d\'affaires de 35% sur mon portefeuille client',
      year: '2022',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Users,
      title: 'Formatrice Certifiée',
      description: 'Formation et mentorat de 8 nouveaux conseillers en voyages',
      year: '2020-2023',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const stats = [
    { number: '1200+', label: 'Clients Satisfaits', icon: Users },
    { number: '45+', label: 'Pays Visités', icon: Target },
    { number: '98%', label: 'Taux Satisfaction', icon: Star },
    { number: '€2.5M+', label: 'CA Généré', icon: TrendingUp }
  ];

  const testimonials = [
    {
      text: "Sophie est une professionnelle exceptionnelle. Son attention aux détails et sa connaissance approfondie des destinations font d'elle une conseillère hors pair.",
      author: "Marie Dubois",
      position: "Directrice, Voyages Prestige International"
    },
    {
      text: "Grâce à Sophie, notre département voyages d'affaires a connu une croissance remarquable. Sa capacité à gérer les clients exigeants est impressionnante.",
      author: "Jean-Pierre Martin",
      position: "Manager, Agence Évasion Monde"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Réalisations & Reconnaissances
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des résultats concrets et une reconnaissance professionnelle
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="h-8 w-8 text-white" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                  {achievement.year}
                </span>
              </div>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Recommandations Professionnelles
            </h3>
            <p className="text-gray-600">Ce que disent mes anciens managers</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-6 relative">
                  <div className="text-4xl text-blue-200 absolute top-2 left-4">"</div>
                  <p className="text-gray-700 italic mb-4 relative z-10 pl-6">
                    {testimonial.text}
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
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

export default Achievements;