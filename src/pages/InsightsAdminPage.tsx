import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Eye, Code2, Copy, Check, Bold, Heading2, List, Type, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsAdminPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [activeTab, setActiveTab] = useState<'write' | 'preview' | 'code'>('write');
  const [copied, setCopied] = useState(false);
  
  // Fake 404 Security Layer
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Auto-generate slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  // Calculate read time (~200 words per minute)
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  // Today's date
  const today = new Date().toISOString().split('T')[0];

  // Insert formatting at cursor
  const insertFormatting = useCallback((before: string, after: string) => {
    const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.substring(start, end);
    const newContent = content.substring(0, start) + before + selected + after + content.substring(end);
    setContent(newContent);
    // Restore focus
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selected.length);
    }, 0);
  }, [content]);

  // Generate the TypeScript code
  const generateCode = () => {
    const tagsArray = tags.split(',').map(t => t.trim()).filter(Boolean);
    const tagsString = tagsArray.map(t => `'${t}'`).join(', ');
    
    return `  {
    slug: '${slug}',
    title: '${title.replace(/'/g, "\\'")}',
    description: '${description.replace(/'/g, "\\'")}',
    date: '${today}',
    readTime: '${readTime} min read',
    tags: [${tagsString}],
    content: \`
${content}
    \`
  },`;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If not unlocked, show a fake 404 page
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 
          className="text-8xl font-bold text-gray-200 cursor-default select-none"
          onDoubleClick={() => setIsUnlocked(true)}
          title="Nothing to see here..."
        >
          404
        </h1>
        <p className="text-gray-500 mt-4 font-mono">Page not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/insights" className="text-gray-400 hover:text-gray-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">New Insight</h1>
                <p className="text-sm text-gray-500">Write, preview, then copy the code into <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">insights.ts</code></p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left: Metadata */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
                <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Article Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="How I Built..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                  />
                  {slug && (
                    <p className="mt-1.5 text-xs text-gray-400 font-mono">/insights/{slug}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="A brief summary for SEO and preview cards..."
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                  <input
                    type="text"
                    value={tags}
                    onChange={e => setTags(e.target.value)}
                    placeholder="AI, Morocco, Leadership (comma separated)"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                  />
                </div>

                {/* Stats */}
                <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-indigo-600">{wordCount}</p>
                    <p className="text-xs text-gray-500">Words</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-indigo-600">{readTime}</p>
                    <p className="text-xs text-gray-500">Min read</p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
                <h3 className="font-bold text-indigo-900 text-sm mb-3">📋 How to Publish</h3>
                <ol className="text-sm text-indigo-800 space-y-2 list-decimal list-inside">
                  <li>Write your article here</li>
                  <li>Go to the <strong>"Code"</strong> tab</li>
                  <li>Click <strong>"Copy Code"</strong></li>
                  <li>Open <code className="bg-indigo-100 px-1 rounded text-xs">src/data/insights.ts</code></li>
                  <li>Paste at the <strong>top</strong> of the array (after the <code className="bg-indigo-100 px-1 rounded text-xs">[</code>)</li>
                  <li>Run <code className="bg-indigo-100 px-1 rounded text-xs">npm run update</code></li>
                </ol>
              </div>
            </div>

            {/* Right: Editor / Preview / Code */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                
                {/* Tab Bar */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('write')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTab === 'write' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Type className="w-4 h-4" />
                    Write
                  </button>
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTab === 'preview' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTab === 'code' ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Code2 className="w-4 h-4" />
                    Code
                  </button>
                </div>

                {/* Write Tab */}
                {activeTab === 'write' && (
                  <div>
                    {/* Toolbar */}
                    <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-100 bg-gray-50">
                      <button
                        onClick={() => insertFormatting('<h2>', '</h2>')}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                        title="Heading"
                      >
                        <Heading2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => insertFormatting('<strong>', '</strong>')}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                        title="Bold"
                      >
                        <Bold className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => insertFormatting('<p>', '</p>')}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                        title="Paragraph"
                      >
                        <Type className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => insertFormatting('<ul>\n        <li>', '</li>\n      </ul>')}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                        title="List"
                      >
                        <List className="w-4 h-4" />
                      </button>
                      <div className="ml-auto text-xs text-gray-400">
                        Use HTML tags for formatting
                      </div>
                    </div>
                    <textarea
                      id="content-editor"
                      value={content}
                      onChange={e => setContent(e.target.value)}
                      placeholder={`      <h2>Your First Section Title</h2>
      <p>Write your paragraph here...</p>

      <h2>Another Section</h2>
      <p>More content...</p>
      <ul>
        <li><strong>Point 1</strong> — explanation</li>
        <li><strong>Point 2</strong> — explanation</li>
      </ul>`}
                      className="w-full px-6 py-4 text-sm font-mono text-gray-800 outline-none resize-none leading-relaxed"
                      style={{ minHeight: '500px' }}
                    />
                  </div>
                )}

                {/* Preview Tab */}
                {activeTab === 'preview' && (
                  <div className="p-8">
                    {title ? (
                      <>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tags.split(',').map(t => t.trim()).filter(Boolean).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-mono rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">{title}</h1>
                        <p className="text-gray-500 text-sm mb-8">{today} · {readTime} min read</p>
                        <div
                          className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4"
                          dangerouslySetInnerHTML={{ __html: content || '<p class="text-gray-400 italic">Start writing to see the preview...</p>' }}
                        />
                      </>
                    ) : (
                      <p className="text-gray-400 text-center py-20">Fill in the title and content to see a preview</p>
                    )}
                  </div>
                )}

                {/* Code Tab */}
                {activeTab === 'code' && (
                  <div className="relative">
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        onClick={handleCopy}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm ${
                          copied
                            ? 'bg-green-600 text-white'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                        }`}
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied!' : 'Copy Code'}
                      </button>
                    </div>
                    <pre className="p-6 text-sm font-mono text-gray-800 overflow-x-auto bg-gray-50" style={{ minHeight: '400px' }}>
                      {title ? generateCode() : '// Fill in the article details to generate the code...'}
                    </pre>
                  </div>
                )}

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InsightsAdminPage;
