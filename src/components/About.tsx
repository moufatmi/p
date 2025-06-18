import React from 'react';
import { Award, Globe, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  const qualities = [
    {
      icon: Globe,
      title: 'Expertise Internationale',
      description: 'Connaissance approfondie de 45+ destinations à travers le monde'
    },
    {
      icon: Heart,
      title: 'Passion du Service',
      description: 'Dévouement total à la satisfaction client et à l\'excellence'
    },
    {
      icon: Target,
      title: 'Approche Personnalisée',
      description: 'Chaque voyage est unique et adapté aux besoins spécifiques'
    },
    {
      icon: Award,
      title: 'Professionnalisme',
      description: 'Certifications reconnues et formation continue'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            À Propos de Moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionnée de voyages depuis toujours, j'ai transformé ma passion en expertise professionnelle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Mon Parcours Professionnel
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Diplômée en Tourisme et Hôtellerie de l'Université Paris-Sorbonne, j'ai débuté ma carrière 
                il y a 8 ans avec une passion dévorante pour la découverte du monde et le service client.
              </p>
              <p>
                Au fil des années, j'ai développé une expertise particulière dans l'organisation de voyages 
                sur mesure, les destinations exotiques et les voyages d'affaires. Ma connaissance approfondie 
                des cultures locales et des meilleures pratiques de l'industrie me permet de créer des 
                expériences vraiment exceptionnelles.
              </p>
              <p>
                Mon objectif est de rejoindre une agence de voyage prestigieuse où je pourrai mettre à profit 
                mon expérience et ma passion pour offrir un service d'excellence à une clientèle exigeante.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Travel planning"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">8+</div>
              <div className="text-sm">Années d'expérience</div>
            </div>
          </div>
        </div>

        {/* Qualities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <quality.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{quality.title}</h4>
              <p className="text-gray-600 text-sm">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;