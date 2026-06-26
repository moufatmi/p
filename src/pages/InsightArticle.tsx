import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getInsightBySlug } from '../data/insights';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';

const InsightArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getInsightBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: post.title, text: post.description, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Back link */}
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors text-sm font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Insights
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-mono rounded-md">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-between pb-8 mb-10 border-b border-gray-200">
            <div className="flex items-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg prose-gray max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-gray-900
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-gray-700
              prose-a:text-indigo-600 prose-a:underline prose-a:decoration-indigo-300
              hover:prose-a:decoration-indigo-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer CTA */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Want to discuss this further?</h3>
              <p className="text-gray-600 mb-6">
                I'm always open to conversations about AI, systems thinking, and impactful technology.
              </p>
              <a
                href="mailto:contact@moussab.com"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Start a Conversation
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link to="/" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm font-medium">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default InsightArticle;
