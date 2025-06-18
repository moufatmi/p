import React from 'react';
import { Award, Globe, Heart, Target } from 'lucide-react';
import profileImg from '../assets/profile 2.jpg';
import dashboardImg from '../assets/dashboard.jpg';

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
              <p>Salut ! Moi c'est Moussab Fatmi — un passionné de tech, de voyage et d'innovation.</p>
              <p>Depuis mon enfance, je suis fasciné par le monde du digital. J'aime créer des solutions simples à des problèmes réels. Récemment, j'ai conçu une plateforme web dédiée aux agences de voyage, pour faciliter la gestion des factures au quotidien — un projet né de mon expérience directe dans le secteur.</p>
              <p>En parallèle, je poursuis mes études en Droit civil à l'université, tout en continuant à explorer le monde du code, du design web et de la stratégie digitale. Mon super-pouvoir ? Savoir comment attirer les touristes et les aider à découvrir des lieux incroyables, à travers une approche créative et ciblée.</p>
              <p>Je suis toujours prêt à relever de nouveaux défis, apprendre, collaborer, et construire des choses qui comptent.</p>
            </div>
          </div>
          <div>
            <img
              src={dashboardImg}
              alt="Dashboard screenshot"
              className="rounded-2xl shadow-lg w-full max-w-[800px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;