import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, RefreshCw, Check, ChevronRight, Minus, Plus } from 'lucide-react';
import { getProductById, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const product = getProductById(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addItem(product);
    openCart();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/products" className="text-gray-500 hover:text-primary">Products</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12">
        <div className="container">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8">
            <ArrowLeft className="w-5 h-5" /> Back to Products
          </button>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white mb-4">
                <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
                <span className={`absolute top-4 left-4 badge ${product.brand === 'XAG' ? 'badge-primary' : 'badge-secondary'}`}>{product.brand}</span>
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button key={index} onClick={() => setSelectedImage(index)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-gray-300'}`}>
                      <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">{product.name}</h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className={`w-5 h-5 ${i <= Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                {product.inStock ? (
                  <span className="flex items-center gap-1 text-green-600"><Check className="w-4 h-4" /> In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </div>

              <p className="text-3xl font-bold text-primary mb-6 text-center">{formatPrice(product.price)}</p>
              <p className="text-gray-600 mb-8 text-center">{product.description}</p>

              <div className="mb-8 text-center">
                <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
                <div className="flex items-center border border-gray-200 rounded-lg w-fit mx-auto">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-gray-50 transition-colors"><Minus className="w-5 h-5" /></button>
                  <input type="number" value={quantity} onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-16 text-center border-x border-gray-200 py-2 focus:outline-none" min="1" />
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50 transition-colors"><Plus className="w-5 h-5" /></button>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button onClick={handleAddToCart} disabled={!product.inStock} className="btn btn-accent flex-1 py-4 text-lg disabled:opacity-50">
                  <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                </button>
                <button onClick={() => setIsWishlisted(!isWishlisted)} className={`btn py-4 px-6 ${isWishlisted ? 'bg-red-50 text-red-500 border border-red-200' : 'btn-secondary'}`}>
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Truck className="w-6 h-6 text-primary" />
                  <div><p className="font-medium text-gray-900">Free Shipping</p><p className="text-sm text-gray-500">On orders over ¥10,000</p></div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                  <div><p className="font-medium text-gray-900">2 Year Warranty</p><p className="text-sm text-gray-500">Full coverage</p></div>
                </div>
                <div className="flex flex-col items-center text-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  <div><p className="font-medium text-gray-900">30-Day Returns</p><p className="text-sm text-gray-500">Money back guarantee</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <div className="flex justify-center gap-8 border-b border-gray-200 mb-8">
            {['overview', 'specs'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 font-medium capitalize transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-gray-500 hover:text-gray-700'}`}>
                {tab}
                {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
              </button>
            ))}
          </div>

          {activeTab === 'overview' && (
            <div className="prose max-w-none text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Overview</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
              <ul className="space-y-2 inline-block text-left">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /><span>Advanced autonomous flight system</span></li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /><span>Precision agriculture capabilities</span></li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /><span>Easy operation and maintenance</span></li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /><span>Comprehensive warranty and support</span></li>
              </ul>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="bg-gray-50 rounded-xl overflow-hidden max-w-2xl mx-auto">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value], index) => (
                      <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{key}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
