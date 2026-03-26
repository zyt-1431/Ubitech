import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { newsArticles, NewsArticle, formatDate, getFeaturedNews } from '../data/news';

const categories = [
  { id: 'all', label: 'All News' },
  { id: 'company', label: 'Company News' },
  { id: 'industry', label: 'Industry News' },
  { id: 'training', label: 'Training' },
];

export const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const featuredArticle = getFeaturedNews();

  const filteredArticles = newsArticles.filter(
    article => activeCategory === 'all' || article.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Insights</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest agricultural technology news, company announcements,
            and industry insights.
          </p>
        </div>
      </section>

      {activeCategory === 'all' && featuredArticle && (
        <section className="container -mt-8">
          <Link to={`/news/${featuredArticle.id}`} className="block bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 badge badge-accent">Featured</span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center text-center">
                <span className="badge badge-primary mb-4 mx-auto w-fit">{featuredArticle.categoryLabel}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h2>
                <p className="text-gray-600 mb-6 line-clamp-3">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(featuredArticle.date)}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />5 min read</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      <section className="container py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeCategory === cat.id ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link key={article.id} to={`/news/${article.id}`} className="card group animate-fade-in">
              <div className="relative overflow-hidden h-48">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 badge badge-accent">{article.categoryLabel}</span>
              </div>
              <div className="p-6 text-center">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(article.date)}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">{article.excerpt}</p>
                <span className="flex items-center justify-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">Get the latest agricultural technology news and updates delivered to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input type="email" placeholder="Enter your email" className="input max-w-md" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
