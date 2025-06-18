import React from 'react';
import { 
  Globe, 
  Users, 
  Calculator, 
  MessageSquare, 
  Laptop, 
  Award,
  Languages,
  Briefcase
} from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Amadeus NDC', level: 100 },
    { name: 'Amadeus Cryptique', level: 80 },
    { name: 'Création d\'applications web (HTML, CSS, JavaScript)', level: 100 },
    { name: 'PHP & MySQL', level: 80 },
    { name: 'Gestion de bases de données', level: 80 },
    { name: 'Microsoft Excel (niveau avancé)', level: 90 },
    { name: 'Support technique informatique (dépannage logiciels et matériels)', level: 85 },
    { name: 'Connaissances en SEO et optimisation web', level: 70 },
    { name: 'Outils de gestion de projet (Trello, Jira)', level: 60 }
  ];

  const languages = [
    { name: 'Français', level: 'B1', flag: '🇫🇷' },
    { name: 'Anglais', level: 'C1', flag: '🇬🇧' },
    { name: 'Espagnol', level: 'Je suis encore en train d\'apprendre', flag: '🇪🇸' },
    { name: 'Russe', level: 'Je suis encore en train d\'apprendre', flag: '🇷🇺' },
    { name: 'Japonais', level: 'Je suis encore en train d\'apprendre', flag: '🇯🇵' },
    { name: 'Chinois', level: 'Je suis encore en train d\'apprendre', flag: '🇨🇳' }
  ];

  const softSkills = [
    { icon: Users, name: 'Relation Client', description: 'Excellence dans le service et la satisfaction client' },
    { icon: MessageSquare, name: 'Communication', description: 'Capacité à expliquer et conseiller efficacement' },
    { icon: Calculator, name: 'Négociation', description: 'Obtention des meilleurs tarifs et conditions' },
    { icon: Globe, name: 'Connaissance Géographique', description: 'Expertise de 45+ destinations mondiales' },
    { icon: Briefcase, name: 'Gestion de Projet', description: 'Organisation complète de voyages complexes' },
    { icon: Award, name: 'Attention aux Détails', description: 'Précision dans chaque aspect du voyage' }
  ];

  const certifications = [
    { name: 'SQL Certification (DataCamp)', link: 'https://drive.google.com/file/d/1gn7Peg1nLuhVJ-mKAYNBRyMXSj2gcrZP/view?usp=sharing' },
    { name: 'Technical Support', link: 'https://drive.google.com/file/d/1LuzvO8DvZnPvS4FLCk2NtF-IyTVi9UiO/view?usp=sharing' },
    { name: 'Ecommerce Website', link: 'https://drive.google.com/file/d/1O7CSMqh0KmYzkf-iNVR-uLjTtwb7BKn2/view?usp=sharing' }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compétences & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un ensemble complet de compétences techniques et relationnelles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Laptop className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Compétences Techniques</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Languages className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Langues</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium text-gray-700">{lang.name}</span>
                  </div>
                  <span className="text-blue-600 font-semibold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Compétences Relationnelles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <skill.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Certifications & Formations</h3>
            <p className="opacity-90">Formation continue et certifications professionnelles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-200 underline hover:text-blue-100">{cert.name}</a>
                ) : (
                  <span className="text-sm font-medium">{cert.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;