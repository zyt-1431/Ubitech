import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      { label: 'XAG P150 Max', path: '/products/xag-p150-max' },
      { label: 'Ubitech AF305', path: '/products/ubitech-af305' },
      { label: 'Taurus80E', path: '/products/ubitech-taurus80e' },
      { label: 'Aries300N', path: '/products/ubitech-aries300n' },
      { label: 'Accessories', path: '/products?category=accessory' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/#about' },
      { label: 'News', path: '/news' },
      { label: 'Careers', path: '/contact#careers' },
      { label: 'Become a Dealer', path: '/dealer' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Warranty', path: '/contact#warranty' },
      { label: 'Technical Support', path: '/contact#support' },
      { label: 'Training', path: '/news?category=training' },
    ],
  },
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <Link to="/" className="flex items-center justify-center gap-3 mb-6">
          <img src="/images/logo.png" alt="Ubitech" className="h-14 w-auto" />
          <span className="text-2xl font-bold text-white">Ubitech</span>
        </Link>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Pioneering the future of agriculture through innovative precision technology.
          We empower farmers worldwide with intelligent solutions for sustainable growth.
        </p>
        <div className="space-y-3 mb-10">
          <a href="mailto:info@ubitech.com" className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            info@ubitech.com
          </a>
          <a href="tel:+31201234567" className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
            +31 20 123 4567
          </a>
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>Rotterdam Port District<br />The Netherlands, 3011 AB</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">Follow Us</span>
              <div className="flex items-center gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Ubitech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
