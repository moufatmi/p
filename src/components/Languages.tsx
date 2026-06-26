import React from 'react';
import { motion } from 'framer-motion';

type Language = {
  flag: string;
  name: string;
  level: string;
  progress: number; // 0-100
  color: string;
};

const languages: Language[] = [
  { flag: '🇲🇦', name: 'Arabic', level: 'Native', progress: 100, color: 'bg-emerald-500' },
  { flag: '🇫🇷', name: 'French', level: 'Fluent', progress: 95, color: 'bg-blue-500' },
  { flag: '🇬🇧', name: 'English', level: 'Professional', progress: 85, color: 'bg-indigo-500' },
  { flag: '🇪🇸', name: 'Spanish', level: 'Intermediate', progress: 45, color: 'bg-amber-500' },
];

const Languages: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-mono text-indigo-600 uppercase tracking-widest mb-4">Global Reach</h2>
          <h3 className="text-3xl font-bold text-gray-900">Languages</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-bold text-gray-900">{lang.name}</span>
                </div>
                <span className="text-xs font-mono text-gray-500 bg-white px-2 py-1 rounded-md border border-gray-200">
                  {lang.level}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15, ease: 'easeOut' }}
                  className={`h-full ${lang.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
