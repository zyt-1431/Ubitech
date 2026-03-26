import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, Star, ShoppingCart, X } from 'lucide-react';
import { products, Product, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = [
  { id: 'all', label: 'All Products', brand: null },
  { id: 'xag', label: 'XAG', brand: 'XAG' },
  { id: 'ubitech', label: 'Ubitech', brand: 'Ubitech' },
  { id: 'accessory', label: 'Accessories', brand: null },
];

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const { addItem, openCart } = useCart();

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (categoryParam !== 'all') filtered = filtered.filter(p => p.category === categoryParam);
    switch (sortBy) {
      case 'price-low': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-high': filtered.sort((a, b) => b.price - a.price); break;
      case 'rating': filtered.sort((a, b) => b.rating - a.rating); break;
      default: filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    return filtered;
  }, [categoryParam, sortBy]);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === 'all') setSearchParams({});
    else setSearchParams({ category: categoryId });
  };

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-100">
        <div className="container py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of precision agriculture solutions, including
            XAG agricultural drones, Ubitech autonomous systems, and high-quality accessories.
          </p>
        </div>
      </section>

      <div className="container py-8">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${categoryParam === cat.id ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-primary">
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <div className="hidden md:flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary/10 text-primary' : 'text-gray-500'}`}>
                <Grid className="w-5 h-5" />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary/10 text-primary' : 'text-gray-500'}`}>
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-6 text-center">Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}</p>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <X className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <button onClick={() => handleCategoryChange('all')} className="btn btn-primary">View All Products</button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="card group animate-fade-in">
                <div className="relative overflow-hidden">
                  <img src={product.images[0]} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-4 left-4 badge ${product.brand === 'XAG' ? 'badge-primary' : 'badge-secondary'}`}>{product.brand}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                    <button onClick={e => handleAddToCart(product, e)} disabled={!product.inStock} className="btn btn-accent py-2 px-4 text-sm flex items-center gap-2 disabled:opacity-50">
                      <ShoppingCart className="w-4 h-4" /> Add
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
