import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Atom, Code2 } from 'lucide-react';

const TheThesis: React.FC = () => {
  const principles = [
    {
      icon: Scale,
      title: 'Law & Structure',
      description: "My background in law taught me to see the world as a complex network of rules and relationships. I don't just write code; I design systems that govern how data, users, and processes interact efficiently."
    },

    {
      icon: Code2,
      title: 'AI & Execution',
      description: 'Ideas are cheap. I use modern AI-assisted development tools to rapidly prototype, re-factor, and deploy functional solutions. Technology is the hammer; systems thinking is the blueprint.'
    }
  ];

  return (
    <section id="thesis" className="py-24 bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-indigo-600 uppercase tracking-widest mb-4">The Thesis</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Most people build technology for technology's sake. <br />
              <span className="text-gray-500">I build to re-engineer flawed systems.</span>
            </h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                My journey isn't typical. I didn't start with a computer science degree. I started with a DEUG in Law and a deep immersion in community leadership and civic engagement.
              </p>
              <p>
                This non-linear path gave me an unfair advantage: I approach every challenge—whether it's managing an agency, formulating a strategic roadmap for a sports professional, or writing a database schema—with the exact same question: <strong>Where is the structural inefficiency, and how do we re-engineer it?</strong>
              </p>
              <p>
                I leverage modern AI tools not as shortcuts, but as amplifiers for structured, deep work.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start p-6 rounded-lg bg-gray-50 border border-gray-100 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="shrink-0 p-3 rounded-full bg-white border border-gray-200 text-indigo-600 shadow-sm">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheThesis;
