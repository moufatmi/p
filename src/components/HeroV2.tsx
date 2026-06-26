import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const HeroV2: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 text-gray-900 overflow-hidden pt-20">
      {/* Soft Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6 uppercase">
                Moussab Fatmi
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900">
                Systems Thinker. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  AI Builder.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
            >
              I build AI-powered systems that solve real problems in Africa and the Arab World — informed by law, community leadership, and deep structural thinking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#thesis"
                className="group flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-indigo-200 font-semibold text-sm sm:text-base hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
              >
                Read The Thesis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#impact"
                className="group flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl shadow-sm font-semibold text-sm sm:text-base hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300"
              >
                <Terminal className="w-4 h-4 text-gray-400" />
                Explore Impact
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Decorative background blobs behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-float blur-xl opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-[70%_30%_30%_70%/70%_70%_30%_30%] animate-float-slow blur-xl opacity-30 mix-blend-multiply"></div>
              
              {/* Profile Image Container */}
              <div className="absolute inset-2 bg-white rounded-full p-2 shadow-2xl overflow-hidden border border-gray-100 z-10">
                <img 
                  src="/src/assets/profile 2.jpg" 
                  alt="Moussab Fatmi" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -bottom-4 -left-8 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100 animate-float-fast flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-800">Global Shaper (WEF)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-800">Ambassador, Les Citoyens</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-800">Winner, Ramadan IA</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroV2;
