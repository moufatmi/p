import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Cpu, Mic, ArrowUpRight } from 'lucide-react';

const Collaborate: React.FC = () => {
  const pathways = [
    {
      icon: Handshake,
      title: 'Strategic Partnership',
      target: 'For Global Organizations & NGOs',
      description: "Looking for a curator or strategic partner to bridge high-level policy with ground-level socio-economic execution? Let's align our objectives.",
      action: 'Initiate Dialogue',
      link: 'mailto:contact@moussab.com?subject=Strategic Partnership'
    },
    {
      icon: Cpu,
      title: 'AI & Systems Consulting',
      target: 'For Startups & Enterprise',
      description: 'Is your current operational system chaotic? I audit structural inefficiencies and build AI-assisted tools to streamline your workflows.',
      action: 'Request Audit',
      link: 'mailto:contact@moussab.com?subject=Systems Audit Request'
    },
    {
      icon: Mic,
      title: 'Speaking & Workshops',
      target: 'For Conferences & Hubs',
      description: 'I conduct hands-on workshops on AI integration, problem formulation, and the philosophy of technology for future scenarios.',
      action: 'Book a Session',
      link: 'mailto:contact@moussab.com?subject=Workshop Inquiry'
    }
  ];

  return (
    <section id="collaborate" className="py-24 bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-indigo-600 uppercase tracking-widest mb-4">Let's Build Together</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Collaboration Pathways</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I don't just take on "gigs". I partner with organizations and individuals who want to re-engineer their systems for massive impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-white text-indigo-600 border border-gray-200 shadow-sm group-hover:scale-110 transition-transform">
                <path.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-2 text-gray-900">{path.title}</h4>
              <span className="text-xs font-mono text-indigo-600 uppercase tracking-wider mb-4 block">{path.target}</span>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {path.description}
              </p>

              <a
                href={path.link}
                className="mt-auto inline-flex items-center justify-between w-full p-4 rounded-lg bg-white text-gray-800 hover:bg-indigo-600 hover:text-white transition-colors border border-gray-200 group-hover:border-indigo-500 font-medium shadow-sm"
              >
                {path.action}
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/moussabfatmi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors font-medium">
              LinkedIn
            </a>
            <a href="https://github.com/moufatmi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors font-medium">
              GitHub
            </a>
            <a href="mailto:contact@moussab.com" className="text-gray-500 hover:text-indigo-600 transition-colors font-medium">
              Email
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Moussab Fatmi | مصعب فاطمي. All systems operational.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
