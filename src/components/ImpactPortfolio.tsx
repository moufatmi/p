import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShoppingCart, Briefcase, Compass, ExternalLink, Gamepad2 } from 'lucide-react';

const ImpactPortfolio: React.FC = () => {
  const projects = [
    {
      id: 'hexagon',
      icon: Gamepad2,
      title: '0 Hexagon Studio',
      subtitle: 'Live Social Entertainment Platform',
      category: 'Entrepreneurship & Product Engineering',
      role: 'Founder & Full-Stack Systems Builder',
      meta: 'Oujda, Morocco | Aug 2026 – Present',
      problem: 'Founded and engineered a live social deduction entertainment experience (Mafia/Murder Mystery events) designed to transition into a recurring gaming community and tournament model.',
      solution: 'Designed and deployed a high-converting single-page booking engine (Next.js, Tailwind CSS, Supabase) with real-time seat availability tracking, automated capacity limits, seamless WhatsApp confirmation flow, and a dedicated admin dashboard for manifest tracking, attendee validation, and CSV export.',
      impact: 'Directed brand identity, print asset production (tickets, staff passes), and on-ground logistics while structuring an ecosystem transition path towards custom game IP (Hexagon Originals), corporate team-building events, and player memberships.',
      liveUrl: 'https://mafia.moussab.com',
      liveUrlText: 'Visit Hexagon Platform',
      badge: '🔥 Live Venture',
      tags: ['Entrepreneurship', 'Product Engineering', 'Next.js', 'Supabase', 'Admin Dashboard', 'Live Operations']
    },
    {
      id: 'safir',
      icon: Compass,
      title: 'Al-Safir (السفير)',
      subtitle: 'Hajj & Umrah Agency SaaS Platform',
      category: 'Product Engineering & B2B SaaS',
      problem: 'Moroccan travel agencies face extreme operational friction during peak seasons: passport expiration tracking, room accommodation math, flight PNR margins, and offline field headcount in Mecca/Medina.',
      solution: 'Architected & built an end-to-end B2B SaaS platform featuring an offline-first PWA for field guides, automated room assignment algorithms, unified family financial ledgers, and automated passport alert systems.',
      impact: 'Digitized end-to-end agency workflows, saving 480+ operational hours per season and eliminating critical document expiration oversights.',
      liveUrl: 'https://safir.moussab.com',
      liveUrlText: 'Visit Safir Platform',
      badge: '🚀 Live Production SaaS',
      tags: ['B2B SaaS', 'PWA (Offline-First)', 'TravelTech', 'Automation', 'Systems Design']
    },
    {
      id: 'alkhabir',
      icon: Sprout,
      title: 'Al-Khabir AI',
      subtitle: 'Voice-First Agri-Tech Intelligence',
      category: 'Civic Tech & AI Engineering',
      problem: 'Farmers in rural Morocco lack accessible, localized agricultural data to make informed crop and weather decisions.',
      solution: 'Developed a voice-activated Darija-supported agri-tech solution providing targeted, hyper-local intelligence directly to farmers.',
      impact: 'Democratizing data access for rural communities without requiring high tech-literacy.',
      award: '🏆 Winner: Territorial Impact & Public Utility (Ramadan IA Hackathon)',
      tags: ['AI Integration', 'Agri-Tech', 'Voice UI', 'Darija NLP']
    },
    {
      id: 'atlas',
      icon: ShoppingCart,
      title: 'Atlas Source',
      subtitle: 'E-Commerce & Digital Export',
      category: 'Digital Systems & Commerce',
      problem: 'Moroccan artisans struggle to reach international markets efficiently and capture global value.',
      solution: 'Established an international e-commerce setup focused on Moroccan handicrafts, heavily optimizing for digital SEO and cross-border logistics.',
      impact: 'Bridged the gap between local craftsmanship and global demand through targeted digital presence.',
      tags: ['E-Commerce', 'SEO Strategy', 'Global Market']
    },
    {
      id: 'sports',
      icon: Briefcase,
      title: 'Strategic Talent Positioning',
      subtitle: 'Professional Roadmapping & Systems',
      category: 'Strategic Management & Systems',
      problem: 'Competitive sports talent lacking structured professional roadmaps and digital scouting presence.',
      solution: 'Acted as strategic manager: designed professional training roadmaps, career scouting strategies, and digital growth portfolios.',
      impact: 'Elevated professional positioning from local talent to a structured, scoutable asset.',
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
            I don't just list technologies I know. I showcase the real-world inefficiencies I've encountered and the complete systems I've engineered.
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
              className={`group relative bg-white border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                project.liveUrl ? 'border-indigo-200 hover:border-indigo-400 ring-1 ring-indigo-100' : 'border-gray-200 hover:border-emerald-300'
              }`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 blur-2xl rounded-full transition-all duration-300 ${
                project.liveUrl ? 'bg-indigo-100 group-hover:bg-indigo-200' : 'bg-emerald-100 group-hover:bg-emerald-200'
              }`}></div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl border shadow-sm ${
                      project.liveUrl || project.id === 'hexagon' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-gray-50 text-emerald-600 border-gray-200'
                    }`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      {project.category && (
                        <span className="text-[11px] font-mono text-indigo-600 uppercase font-semibold block tracking-wider mb-0.5">
                          {project.category}
                        </span>
                      )}
                      <h4 className="text-2xl font-bold text-gray-900">{project.title}</h4>
                      {project.subtitle && (
                        <p className="text-xs font-mono text-gray-500">{project.subtitle}</p>
                      )}
                      {project.meta && (
                        <p className="text-[11px] text-gray-400 font-mono mt-0.5">{project.meta}</p>
                      )}
                    </div>
                  </div>

                  {project.badge && (
                    <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold rounded-full shadow-xs shrink-0">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-4 relative z-10">
                  <div>
                    <span className="text-xs font-mono text-gray-500 uppercase block mb-1">The Problem</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-500 uppercase block mb-1">The Engineering</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg mt-4">
                    <span className="text-xs font-mono text-emerald-600 uppercase block mb-1">The Impact</span>
                    <p className="text-emerald-800 font-medium text-sm">{project.impact}</p>
                  </div>

                  {project.award && (
                    <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg mt-4 inline-block">
                      <p className="text-amber-800 text-xs font-bold">{project.award}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 relative z-10 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-mono text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-indigo-100 hover:-translate-y-0.5 shrink-0"
                  >
                    <span>{project.liveUrlText || `Visit ${project.title}`}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactPortfolio;
