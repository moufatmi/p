import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Globe, Sparkles } from 'lucide-react';

type VisitorType = {
  icon: React.ElementType;
  label: string;
  description: string;
  targetId: string;
  color: string;
};

const visitors: VisitorType[] = [
  {
    icon: Briefcase,
    label: "I'm a Recruiter",
    description: 'See my skills, projects, and impact',
    targetId: 'impact',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Users,
    label: "I'm a Startup Founder",
    description: 'Discover how I audit and build systems',
    targetId: 'thesis',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Globe,
    label: "I'm from an NGO / Organization",
    description: 'Explore my community leadership work',
    targetId: 'global-footprint',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Sparkles,
    label: "I'm Just Curious",
    description: 'Try the hidden terminal Easter egg',
    targetId: 'terminal-hint',
    color: 'from-amber-500 to-orange-500'
  }
];

const VisitorRouter: React.FC = () => {
  const handleClick = (targetId: string) => {
    if (targetId === 'terminal-hint') {
      // Find and click the terminal button
      const terminalBtn = document.querySelector('[aria-label="Open terminal"]') as HTMLButtonElement;
      if (terminalBtn) terminalBtn.click();
      return;
    }
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Who are you?</h2>
          <p className="text-gray-500">I'll take you exactly where you need to go.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visitors.map((visitor, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleClick(visitor.targetId)}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${visitor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${visitor.color} text-white mb-4 shadow-md`}>
                <visitor.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">{visitor.label}</h3>
              <p className="text-xs text-gray-500">{visitor.description}</p>
              
              {/* Arrow indicator */}
              <div className="mt-4 text-gray-400 group-hover:text-gray-700 transition-colors text-xs font-medium">
                Take me there →
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitorRouter;
