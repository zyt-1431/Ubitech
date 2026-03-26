import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
  {
    title: 'Products',
    path: '/products',
    children: [
      { title: 'XAG Products', path: '/products?category=xag', brand: 'XAG' },
      { title: 'Ubitech Products', path: '/products?category=ubitech', brand: 'Ubitech' },
      { title: 'Accessories', path: '/products?category=accessory' },
    ],
  },
  { title: 'News', path: '/news' },
  { title: 'Dealer', path: '/dealer' },
  { title: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const { toggleCart, itemCount } = useCart();
  const { isAuthenticated, user, setShowAuthModal, setAuthMode, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Ubitech" className="h-12 w-auto" />
              <span className="text-2xl font-bold" style={{ color: '#1a4a3a' }}>Ubitech</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <div key={link.title} className="relative">
                  {link.children ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.title ? null : link.title)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${isActive(link.path) ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}
                    >
                      {link.title}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.title ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link to={link.path} className={`px-4 py-2 rounded-lg font-medium transition-colors ${isActive(link.path) ? 'text-primary bg-primary/5' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}`}>
                      {link.title}
                    </Link>
                  )}

                  {link.children && openDropdown === link.title && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-scale-in">
                      {link.children.map(child => (
                        <Link key={child.title} to={child.path} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
                          {child.brand && (
                            <span className={`text-xs font-bold px-2 py-1 rounded ${child.brand === 'XAG' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                              {child.brand}
                            </span>
                          )}
                          <span className="text-gray-700">{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button onClick={toggleCart} className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{user?.name.charAt(0).toUpperCase()}</span>
                    </div>
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-medium text-gray-900 truncate">{user?.name}</p>
                      <p className="text-sm text-gray-500 truncate">{user?.email}</p>
                    </div>
                    <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">My Account</Link>
                    <button onClick={logout} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Sign Out</button>
                  </div>
                </div>
              ) : (
                <button onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                  <User className="w-5 h-5" />
                  Sign In
                </button>
              )}

              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-[72px] left-0 right-0 bg-white shadow-xl animate-slide-in-right">
            <nav className="max-w-7xl mx-auto px-6 py-4">
              {navLinks.map(link => (
                <div key={link.title}>
                  {link.children ? (
                    <>
                      <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase">{link.title}</p>
                      {link.children.map(child => (
                        <Link key={child.title} to={child.path} className="block px-8 py-3 text-gray-700 hover:bg-gray-50">{child.title}</Link>
                      ))}
                    </>
                  ) : (
                    <Link to={link.path} className={`block px-4 py-3 font-medium ${isActive(link.path) ? 'text-primary bg-primary/5' : 'text-gray-700'}`}>
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
              {!isAuthenticated && (
                <div className="mt-4 pt-4 border-t border-gray-200 px-4">
                  <button onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} className="w-full btn btn-primary">Sign In</button>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}

      <div className="h-[72px]" />
    </>
  );
};
