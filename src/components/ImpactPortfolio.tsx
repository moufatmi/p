import React from 'react';
import { motion } from 'framer-motion';
import { Database, Sprout, ShoppingCart, Briefcase } from 'lucide-react';

const ImpactPortfolio: React.FC = () => {
  const projects = [
    {
      id: 'alkhabir',
      icon: Sprout,
      title: 'Al-Khabir AI',
      problem: 'Farmers in Morocco lack accessible, localized agricultural data to make informed decisions.',
      solution: 'Developed a voice-activated agri-tech solution providing targeted, hyper-local intelligence directly to farmers.',
      impact: 'Democratizing data access for rural communities without requiring high tech-literacy.',
      award: '🏆 Winner: Territorial Impact & Public Utility (Ramadan IA Hackathon)',
      tags: ['AI Integration', 'Agri-Tech', 'Voice UI']
    },
    {
      id: 'umrah',
      icon: Database,
      title: 'Umrah Management System',
      problem: 'Administrative chaos and inefficient tracking in a high-volume travel agency.',
      solution: 'Re-engineered the entire workflow. Built a system with optimized database schemas, automated document generation, and tracking modules.',
      impact: 'Drastically reduced manual data entry and human error, saving hours of administrative work weekly.',
      tags: ['Database Optimization', 'Automation', 'Full Stack']
    },
    {
      id: 'atlas',
      icon: ShoppingCart,
      title: 'Atlas Source',
      problem: 'Moroccan artisans struggle to reach international markets efficiently.',
      solution: 'Established an international e-commerce setup on eCRATER focused on Moroccan handicrafts, heavily optimizing for digital SEO.',
      impact: 'Bridged the gap between local craftsmanship and global demand through targeted digital presence.',
      tags: ['E-Commerce', 'SEO Strategy', 'Global Market']
    },
    {
      id: 'sports',
      icon: Briefcase,
      title: 'Strategic Portfolio Architecture',
      problem: 'A competitive football coach/player lacked a structured professional roadmap and digital scouting presence.',
      solution: 'Acted as strategic manager: designed a professional training roadmap, career scouting strategies, and a digital growth portfolio.',
      impact: 'Elevated their professional positioning from local talent to a structured, scoutable asset.',
      tags: ['Strategic Management', 'Roadmapping', 'Consulting']
    }
  ];

  return (
    <section id="impact" className="py-24 bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-emerald-600 uppercase tracking-widest mb-4">Impact Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Problems solved. Systems built.</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I don't just list technologies I know. I showcase the inefficiencies I've encountered and the solutions I've engineered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-100 blur-2xl rounded-full group-hover:bg-emerald-200 transition-all duration-300"></div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-gray-50 rounded-xl text-emerald-600 border border-gray-200 shadow-sm">
                  <project.icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">{project.title}</h4>
              </div>

              <div className="space-y-4 relative z-10">
                <div>
                  <span className="text-xs font-mono text-gray-500 uppercase block mb-1">The Problem</span>
                  <p className="text-gray-700">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-500 uppercase block mb-1">The Engineering</span>
                  <p className="text-gray-700">{project.solution}</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg mt-4">
                  <span className="text-xs font-mono text-emerald-600 uppercase block mb-1">The Impact</span>
                  <p className="text-emerald-800 font-medium">{project.impact}</p>
                </div>
                {project.award && (
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg mt-4 inline-block">
                    <p className="text-yellow-800 text-sm font-bold">{project.award}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactPortfolio;
