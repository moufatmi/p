export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string; // Markdown-like content rendered as paragraphs
};

/**
 * ============================================================
 * HOW TO ADD A NEW ARTICLE:
 * ============================================================
 * 1. Copy any existing post object below
 * 2. Change the slug (must be unique, lowercase, hyphens only)
 * 3. Update title, description, date, readTime, tags
 * 4. Write your content using simple HTML or plain text
 * 5. Run `npm run update` to publish
 * ============================================================
 */

export const insights: InsightPost[] = [

  {
    slug: 'how-i-built-ai-for-moroccan-farmers',
    title: 'How I Built an AI Assistant for Moroccan Farmers',
    description: 'The story behind Al-Khabir AI — from identifying the problem in rural Morocco to winning the Territorial Impact award at Ramadan IA hackathon.',
    date: '2025-06-20',
    readTime: '5 min read',
    tags: ['AI', 'Agriculture', 'Morocco', 'Hackathon'],
    content: `
      <h2>The Problem Nobody Was Solving</h2>
      <p>Farmers in rural Morocco face a silent crisis: they lack access to localized, actionable agricultural data. While the world talks about precision agriculture and satellite-guided farming, most Moroccan smallholders still rely on generational knowledge and word-of-mouth.</p>
      <p>I saw this firsthand. The disconnect between available technology and the people who need it most isn't a technology problem — it's a <strong>systems problem</strong>.</p>

      <h2>The Approach: Voice-First, Not Screen-First</h2>
      <p>Most tech solutions assume the user has a smartphone, stable internet, and digital literacy. That assumption fails immediately in rural Morocco. So I flipped the paradigm:</p>
      <ul>
        <li><strong>Voice-activated interface</strong> — no typing, no complex UI</li>
        <li><strong>Darija (Moroccan Arabic) support</strong> — because language shouldn't be a barrier</li>
        <li><strong>Hyper-local data</strong> — weather, soil conditions, and crop advice specific to each region</li>
      </ul>

      <h2>The Result: Ramadan IA Hackathon</h2>
      <p>We entered the Ramadan IA hackathon with this concept and won the <strong>Territorial Impact & Public Utility Award</strong>. But the real validation wasn't the trophy — it was hearing judges say: "This actually solves a real problem."</p>

      <h2>What I Learned</h2>
      <p>Building Al-Khabir AI reinforced my core thesis: <strong>the best technology is invisible</strong>. The farmer doesn't need to understand AI, machine learning, or natural language processing. They just need to ask a question and get a useful answer.</p>
      <p>That's what systems thinking looks like in practice.</p>
    `
  },
  {
    slug: 'what-global-shapers-actually-do',
    title: 'What Global Shapers Actually Do (From the Inside)',
    description: 'A candid look at what it means to be a Curator in the World Economic Forum\'s Global Shapers Community — beyond the LinkedIn badge.',
    date: '2025-06-10',
    readTime: '4 min read',
    tags: ['Leadership', 'WEF', 'Community', 'Global Shapers'],
    content: `
      <h2>Beyond the Badge</h2>
      <p>When people see "Global Shapers Community — World Economic Forum" on a LinkedIn profile, they often think it's just a fancy networking group. I thought the same thing before I joined.</p>
      <p>The reality is far more demanding — and far more rewarding.</p>

      <h2>What a Curator Actually Does</h2>
      <p>As Curator of the Oujda Hub, my job isn't to attend conferences (though that happens). My job is to:</p>
      <ul>
        <li><strong>Identify local problems</strong> that need systemic solutions</li>
        <li><strong>Build and lead a team</strong> of exceptional young people</li>
        <li><strong>Design and execute projects</strong> that create measurable community impact</li>
        <li><strong>Connect local action to global strategy</strong> — bridging the gap between WEF-level thinking and street-level execution</li>
      </ul>

      <h2>The Hardest Part</h2>
      <p>The hardest part isn't the work itself. It's maintaining momentum in a context where resources are limited, infrastructure is imperfect, and the problems are deeply structural. You can't just "move fast and break things" when the things you're trying to fix affect people's livelihoods.</p>

      <h2>Why It Matters for My Tech Work</h2>
      <p>Being a Shaper made me a better engineer. It taught me that technology without context is noise. Every system I build now starts with the question: <strong>"Who is this actually for, and what does their daily reality look like?"</strong></p>
    `
  },
  {
    slug: 'systems-thinking-for-startups',
    title: 'Systems Thinking for Startups: Stop Building Features, Start Building Systems',
    description: 'Why most startups fail not because of bad code, but because of bad architecture — and how systems thinking changes the game.',
    date: '2025-05-28',
    readTime: '6 min read',
    tags: ['Systems Thinking', 'Startups', 'Architecture', 'Strategy'],
    content: `
      <h2>The Feature Trap</h2>
      <p>Most startups I've consulted with share the same problem: they build features, not systems. They add a payment page, then a dashboard, then notifications, then analytics — each one a standalone piece bolted onto the last.</p>
      <p>Six months later, everything is tangled. Adding a simple feature takes weeks. Bugs cascade. The codebase becomes a liability instead of an asset.</p>

      <h2>What Systems Thinking Looks Like in Practice</h2>
      <p>Systems thinking means stepping back before you write a single line of code and asking:</p>
      <ul>
        <li>What are the <strong>entities</strong> in this system? (Users, transactions, content, etc.)</li>
        <li>What are the <strong>relationships</strong> between them?</li>
        <li>What are the <strong>rules</strong> that govern these relationships?</li>
        <li>Where are the <strong>bottlenecks</strong> and single points of failure?</li>
      </ul>
      <p>This is exactly what my legal training taught me. Law is, at its core, a system of rules governing relationships between entities. Sound familiar?</p>

      <h2>A Real Example</h2>
      <p>When I built the Umrah Management System, I didn't start with "what screens do we need?" I started with "what is the lifecycle of a pilgrim's journey, and where do the information flows break down?"</p>
      <p>The result was a database schema that naturally supported every feature we needed — because the architecture was right from the start.</p>

      <h2>The Takeaway</h2>
      <p>If your startup feels like it's drowning in technical debt after just one year, the problem isn't your developers. It's your architecture. <strong>Invest in systems design before you invest in feature development.</strong></p>
    `
  }
];

export const getInsightBySlug = (slug: string): InsightPost | undefined => {
  return insights.find(post => post.slug === slug);
};
