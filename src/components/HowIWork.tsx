import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, BarChart3, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Diagnose',
    description: 'I start by deeply understanding the existing system and identifying the root structural inefficiency — not just the symptoms.',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    icon: PenTool,
    title: 'Architect',
    description: 'I design a solution blueprint informed by legal thinking (rules & governance), systems theory, and real-world constraints.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Code2,
    title: 'Build',
    description: 'Using AI-assisted development tools, I rapidly prototype and iterate. Technology is the tool; the architecture is what matters.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  {
    icon: BarChart3,
    title: 'Measure',
    description: 'Every system I build has a measurable outcome. If you can\'t measure the impact, you didn\'t solve the problem.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  }
];

const HowIWork: React.FC = () => {
  return (
    <section id="how-i-work" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-indigo-600 uppercase tracking-widest mb-4">Methodology</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">How I Work</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every project follows the same disciplined process — from understanding the problem to measuring the results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-red-200 via-blue-200 via-emerald-200 to-purple-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative z-10"
            >
              <div className={`${step.bgColor} ${step.borderColor} border rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300`}>
                {/* Step number */}
                <div className="text-xs font-mono text-gray-400 mb-4">STEP {String(index + 1).padStart(2, '0')}</div>
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} text-white mb-6 shadow-md`}>
                  <step.icon className="w-6 h-6" />
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow between steps (mobile) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4 md:hidden">
                  <ArrowRight className="w-5 h-5 text-gray-300 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
