import React from 'react';
import { Clock, Tag, User } from 'lucide-react';
import { BlogPost } from '../../types/Blog';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  return (
    <article className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <User size={16} className="text-blue-600" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-blue-600" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          <a href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </a>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-sm text-gray-600 rounded-full"
            >
              <Tag size={14} className="text-blue-600" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard; 