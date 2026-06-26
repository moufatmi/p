import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Cpu, Users, Wrench } from 'lucide-react';

type Stat = {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
};

const stats: Stat[] = [
  { icon: Cpu, value: 4, suffix: '+', label: 'Systems Engineered', color: 'text-blue-600' },
  { icon: Trophy, value: 1, suffix: '', label: 'Hackathon Award', color: 'text-yellow-600' },
  { icon: Users, value: 2, suffix: '', label: 'Leadership Roles', color: 'text-emerald-600' },
  { icon: Wrench, value: 5, suffix: '+', label: 'Workshops Led', color: 'text-purple-600' },
];

const CountUp: React.FC<{ target: number; suffix: string; inView: boolean }> = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

const ImpactNumbers: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
              className="text-center"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gray-50 border border-gray-100 ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-2`}>
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
