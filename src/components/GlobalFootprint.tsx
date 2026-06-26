import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Lightbulb } from 'lucide-react';

const GlobalFootprint: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 shadow-sm">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-sm font-mono text-blue-600 uppercase tracking-widest">Global Shapers</h2>
                  <h3 className="text-xl font-bold text-gray-900">World Economic Forum</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 shadow-sm">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-sm font-mono text-emerald-600 uppercase tracking-widest">Les Citoyens</h2>
                  <h3 className="text-xl font-bold text-gray-900">Ambassador, Oriental Region</h3>
                </div>
              </div>
            </div>
            
            <h4 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Community Leadership & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Socio-Economic Impact
              </span>
            </h4>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My work extends far beyond code. As a Curator for the World Economic Forum's Oujda Hub and the Oriental Region Ambassador for the "Les Citoyens" association, I manage and drive community-driven socio-economic initiatives, translating high-level strategies into ground-level impact.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-lg">Curator, WEF Oujda Hub</h5>
                  <p className="text-gray-600">Leading a team of exceptional youth to drive dialogue, action, and change at the local level while connecting with a global network.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-lg">Ambassador, Les Citoyens</h5>
                  <p className="text-gray-600">Representing the Oriental region to foster civic engagement, youth empowerment, and community building initiatives across Morocco.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <Lightbulb className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-lg">Mentorship & Workshops (RallyIA)</h5>
                  <p className="text-gray-600">Experienced in leading hands-on workshops like RallyIA Future Lab, mentoring teams on problem formulation and AI integration for future scenarios.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="aspect-square sm:aspect-video lg:aspect-square relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 z-10 mix-blend-overlay"></div>
              
              {/* Abstract Representation of Global Network */}
              <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 border border-blue-400/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border border-indigo-400/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-8 border border-purple-400/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-blue-600" />
                  
                  {/* Nodes */}
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="absolute bottom-4 right-8 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-white to-transparent z-20">
                <blockquote className="text-xl font-medium text-gray-800 border-l-2 border-blue-600 pl-4 italic">
                  "Shaping the future through local action and global perspective."
                </blockquote>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
