export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  category: 'travel' | 'hajj-umrah' | 'tips' | 'destinations';
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
} 