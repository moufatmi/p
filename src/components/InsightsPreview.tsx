import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { insights } from '../data/insights';
import { ArrowRight, Clock } from 'lucide-react';

const InsightsPreview: React.FC = () => {
  // Show only the latest 3 posts
  const latestPosts = insights.slice(0, 3);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-sm font-mono text-indigo-600 uppercase tracking-widest mb-4">Insights</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Thinking</h3>
          </div>
          <Link
            to="/insights"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors text-sm"
          >
            View all insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/insights/${post.slug}`}
                className="group block bg-gray-50 rounded-2xl border border-gray-100 p-6 h-full hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-white text-indigo-600 text-xs font-mono rounded border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="text-xs text-indigo-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;
