import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { insights } from '../data/insights';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const InsightsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Insights</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Thoughts on AI, systems thinking, community leadership, and building technology that actually matters.
            </p>
          </div>

          {/* Articles List */}
          <div className="space-y-8">
            {insights.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/insights/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-mono rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-indigo-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link to="/" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm font-medium">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InsightsPage;
