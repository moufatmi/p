import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

type Testimonial = {
  text: string;
  author: string;
  role: string;
  relationship: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Moussab doesn't just build software — he rethinks the entire system. His approach to the Umrah management project saved us weeks of work.",
    author: 'Add Real Name',
    role: 'Add Real Role',
    relationship: 'Project Collaboration'
  },
  {
    text: "His leadership at the Oujda Hub brought a new level of energy and strategic clarity. He connects the dots between tech and community impact like no one else.",
    author: 'Add Real Name',
    role: 'Add Real Role',
    relationship: 'Global Shapers'
  },
  {
    text: "During Ramadan IA, Moussab's team stood out because they didn't just build a prototype — they built something that actually solves a real problem for farmers.",
    author: 'Add Real Name',
    role: 'Add Real Role',
    relationship: 'Hackathon Judge / Peer'
  }
];

const TestimonialsV2: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-indigo-600 uppercase tracking-widest mb-4">Social Proof</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">What People Say</h3>
          <p className="text-gray-500 max-w-xl mx-auto">
            Replace these with real quotes from colleagues, mentors, or clients you've worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-indigo-600 p-2 rounded-lg shadow-md">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4 mb-8 italic">
                "{t.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <span className="inline-block mt-3 text-xs font-mono text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                  {t.relationship}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2;
