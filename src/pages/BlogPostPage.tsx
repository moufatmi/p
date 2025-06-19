import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Clock, Calendar, User, Tag, ChevronLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types/Blog';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <a
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 mr-1 transition-transform group-hover:-translate-x-1" />
          Retour aux articles
        </a>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <User size={16} className="text-blue-600" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} className="text-blue-600" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-blue-600" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {paragraph.replace('##', '').trim()}
                </h2>
              );
            }
            if (paragraph.startsWith('-')) {
              return (
                <li key={index} className="text-gray-700 mb-2">
                  {paragraph.replace('-', '').trim()}
                </li>
              );
            }
            return (
              <p key={index} className="text-gray-700 mb-4">
                {paragraph.trim()}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
              >
                <Tag size={14} className="text-blue-600" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Partager</h3>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#4267B2] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage; 