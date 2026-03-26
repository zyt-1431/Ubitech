import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, TrendingUp, Star, ChevronRight, Check } from 'lucide-react';
import { products } from '../data/products';

const stats = [
  { label: 'Countries Served', value: '50+', icon: Globe },
  { label: 'Farmers Impacted', value: '1M+', icon: Users },
  { label: 'Products Delivered', value: '25K+', icon: Award },
  { label: 'Efficiency Gain', value: '40%', icon: TrendingUp },
];

const features = [
  { title: 'Precision Agriculture', desc: 'AI-powered technology for optimal crop management' },
  { title: 'Sustainable Farming', desc: 'Reduce chemical usage by up to 60%' },
  { title: 'Smart Automation', desc: 'Autonomous systems that work 24/7' },
  { title: 'Data Analytics', desc: 'Real-time insights for better decisions' },
];

export const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80" alt="Agricultural field" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full mb-8 animate-fade-in">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/95 text-sm font-medium tracking-wide">Leading Agricultural Technology Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in stagger-1 leading-tight tracking-tight">
              Precision Technology for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">Sustainable Agriculture</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-12 animate-fade-in stagger-2 max-w-3xl mx-auto leading-relaxed">
              Empowering farmers worldwide with intelligent drones, autonomous systems, and data-driven insights. Transform your farming operations with Ubitech.
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-fade-in stagger-3">
              <Link to="/products" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30">
                Explore Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-9 h-9 text-green-600" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-6">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Pioneering Agriculture's <span className="text-green-600">Digital Future</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Founded with a mission to revolutionize farming through technology, Ubitech has become a trusted partner for agricultural businesses across the globe. Our integration of XAG and Ubitech products provides farmers with cutting-edge solutions.
            </p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              We believe that sustainable farming and productivity can go hand in hand. Through continuous innovation and commitment to excellence, we help farmers reduce waste, increase yields, and protect the environment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm text-center">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-6">Our Products</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Agricultural Solutions</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Discover our comprehensive range of precision agriculture products designed to transform your farming operations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img src={product.images[0]} alt={product.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${product.brand === 'XAG' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                    {product.brand}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.shortDescription}</p>
                  <div className="flex flex-col items-center gap-3 pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-green-600">¥{product.price.toLocaleString()}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-500">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all text-lg">
              View All Products <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-700 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Farm?</h2>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of farmers already benefiting from precision agriculture technology. Contact us today to learn how Ubitech can help you achieve better yields.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
                Get in Touch
              </Link>
              <Link to="/dealer" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-green-700 transition-all duration-300">
                Become a Dealer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
