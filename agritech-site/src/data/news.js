export const newsArticles = [
  {
    id: 'xag-p150-max-launch',
    title: 'XAG Launches P150 Max: The Next Generation of Agricultural Drones',
    category: 'company',
    categoryLabel: 'Company News',
    excerpt: 'Introducing the all-new P150 Max agricultural drone with 40kg payload capacity, advanced AI obstacle avoidance, and extended flight time.',
    content: 'XAG Corporation is proud to announce the launch of the P150 Max...',
    image: 'https://images.unsplash.com/photo-1574943320219-5ae8890d1b8b?w=1200&q=80',
    author: 'XAG Marketing Team',
    date: '2026-03-15',
    tags: ['drone', 'launch', 'P150 Max'],
    featured: true,
  },
  {
    id: 'strategic-partnership-2026',
    title: 'AgriTech Global and XAG Announce Strategic Partnership for European Market',
    category: 'company',
    categoryLabel: 'Company News',
    excerpt: 'A landmark partnership to expand precision agriculture solutions across Europe.',
    content: 'In a significant move for the European agricultural technology market...',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80',
    author: 'AgriTech Global',
    date: '2026-03-10',
    tags: ['partnership', 'Europe'],
  },
  {
    id: 'ai-agriculture-trends',
    title: 'The Rise of AI in Agriculture: 2026 Market Analysis',
    category: 'industry',
    categoryLabel: 'Industry News',
    excerpt: 'Artificial intelligence is revolutionizing farming practices worldwide.',
    content: 'The global agricultural AI market is experiencing unprecedented growth...',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80',
    author: 'AgriTech Research Team',
    date: '2026-03-08',
    tags: ['AI', 'market analysis'],
  },
  {
    id: 'eu-sustainable-farming-directive',
    title: 'EU Sustainable Farming Initiative: New Regulations and Opportunities',
    category: 'industry',
    categoryLabel: 'Industry News',
    excerpt: 'Understanding the implications of new EU environmental regulations.',
    content: 'The European Union Sustainable Farming Initiative introduces ambitious targets...',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
    author: 'Policy Analysis Team',
    date: '2026-03-05',
    tags: ['EU regulations', 'sustainable farming'],
  },
  {
    id: 'drone-operation-certification',
    title: 'Agricultural Drone Operation Certification Program Now Available',
    category: 'training',
    categoryLabel: 'Training',
    excerpt: 'New certification program covering all aspects of agricultural drone operation.',
    content: 'AgriTech Global is pleased to announce our comprehensive Agricultural Drone Operation Certification Program...',
    image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=1200&q=80',
    author: 'Training Department',
    date: '2026-03-01',
    tags: ['certification', 'drone training'],
  },
  {
    id: 'technical-support-workshop',
    title: 'Advanced Technical Support Workshop: Diagnostic & Repair Procedures',
    category: 'training',
    categoryLabel: 'Training',
    excerpt: 'Two-day intensive workshop for dealer technicians covering advanced procedures.',
    content: 'Our Advanced Technical Support Workshop is designed for service technicians...',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80',
    author: 'Technical Training Team',
    date: '2026-02-25',
    tags: ['technical training', 'repair'],
  },
];

export const getNewsByCategory = (category) => {
  return newsArticles.filter(a => a.category === category);
};

export const getNewsById = (id) => {
  return newsArticles.find(a => a.id === id);
};

export const getFeaturedNews = () => {
  return newsArticles.find(a => a.featured) || newsArticles[0];
};

export const getLatestNews = (limit = 3) => {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
