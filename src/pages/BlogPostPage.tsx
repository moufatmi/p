import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Article non trouvé</div>;
  }

  const formattedDate = format(new Date(post.date), 'dd MMMM yyyy', { locale: fr });

  // Add structured data for the blog post
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "image": post.image,
      "author": {
        "@type": "Person",
        "name": post.author,
        "@id": "https://moussabfatmi.me/#person"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Moussab Fatmi Travel Services",
        "@id": "https://moussabfatmi.me/#business"
      },
      "datePublished": post.date,
      "dateModified": post.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://moussabfatmi.me/blog/${post.slug}`
      },
      "keywords": post.tags.join(", ")
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [post]);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
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
            width="1200"
            height="675"
            loading="lazy"
            decoding="async"
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
          return paragraph.trim() && (
            <p key={index} className="text-gray-700 mb-4">
              {paragraph.trim()}
            </p>
          );
        })}
      </div>

      {/* Tags */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/blog?tag=${tag}`}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Tag size={14} className="text-blue-600" />
              {tag}
            </Link>
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
            aria-label="Partager sur Twitter"
          >
            Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#4267B2] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            aria-label="Partager sur Facebook"
          >
            Facebook
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            aria-label="Partager sur LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage; 