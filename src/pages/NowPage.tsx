import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Cpu, Rocket } from 'lucide-react';

const NowPage: React.FC = () => {
  // Last updated date — change this manually when you update the page
  const lastUpdated = 'June 2025';

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-gray-500">Last updated: {lastUpdated}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">What I'm Doing Now</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              This is my{' '}
              <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline decoration-indigo-300 hover:decoration-indigo-600 transition-colors">
                /now page
              </a>
              . It's a living snapshot of what occupies my time and mind right now.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            
            {/* Currently Building */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Cpu className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">🔨 Currently Building</h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                  <span><strong>Al-Khabir AI</strong> — Iterating on the voice interface and expanding the agricultural data sources for broader Moroccan coverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                  <span><strong>moussab.com</strong> — Continuously improving this portfolio to reflect my latest work and thinking.</span>
                </li>
              </ul>
            </motion.div>

            {/* Currently Reading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">📚 Currently Reading</h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-emerald-500 rounded-full shrink-0"></span>
                  <span>Update this with what you're currently reading.</span>
                </li>
              </ul>
            </motion.div>

            {/* Focus Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <Rocket className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">🎯 Focus Areas This Quarter</h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-purple-500 rounded-full shrink-0"></span>
                  <span>Expanding the Global Shapers Oujda Hub initiatives and driving the 2025 community action plan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-purple-500 rounded-full shrink-0"></span>
                  <span>Deepening my work with Les Citoyens as Ambassador for the Oriental Region.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-purple-500 rounded-full shrink-0"></span>
                  <span>Preparing workshop content for the next RallyIA session.</span>
                </li>
              </ul>
            </motion.div>

            {/* Location & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">📍 Location & Availability</h2>
              </div>
              <div className="text-gray-700 space-y-2">
                <p><strong>Based in:</strong> Oujda, Morocco</p>
                <p><strong>Open to:</strong> Remote collaboration, consulting, and speaking engagements worldwide.</p>
                <p className="mt-4">
                  <a href="mailto:contact@moussab.com" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
                    Reach out → contact@moussab.com
                  </a>
                </p>
              </div>
            </motion.div>

          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <a href="/" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm font-medium">
              ← Back to Home
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NowPage;
