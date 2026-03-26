export const products = [
  {
    id: 'xag-p150-max',
    name: 'P150 Max',
    category: 'xag',
    brand: 'XAG',
    price: 45999,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1574943320219-5ae8890d1b8b?w=800&q=80',
      'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&q=80',
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80',
    ],
    description: 'The XAG P150 Max is a flagship agricultural drone designed for large-scale precision farming operations. With its advanced autonomous flight system, ultra-large payload capacity, and intelligent spraying technology, it delivers unmatched efficiency for crop protection, seeding, and precision agriculture applications.',
    shortDescription: 'Flagship agricultural drone for large-scale precision farming',
    specs: {
      'Dimensions': '2570 × 2570 × 840 mm (unfolded)',
      'Takeoff Weight': '58 kg',
      'Max Payload': '40 kg',
      'Flight Time': '12-25 min (depending on payload)',
      'Spray Width': '7-9 meters',
      'RTK Positioning': '±2 cm accuracy',
      'Battery': '29000mAh LiPo',
      'Max Speed': '15 m/s',
    },
    inStock: true,
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 'xag-battery-pack',
    name: 'Intelligent Battery Pack',
    category: 'accessory',
    brand: 'XAG',
    price: 8999,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    ],
    description: 'High-capacity intelligent battery pack with advanced thermal management and quick-swap design.',
    shortDescription: 'High-capacity smart battery for extended operations',
    specs: {
      'Capacity': '29000mAh',
      'Voltage': '44.4V',
      'Weight': '13.5 kg',
      'Charging Time': '20-30 min',
      'Cycle Life': '500+ cycles',
    },
    inStock: true,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 'xag-remote-controller',
    name: 'Smart Remote Controller',
    category: 'accessory',
    brand: 'XAG',
    price: 4599,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&q=80',
    ],
    description: 'Ergonomic remote controller with 7-inch HD display and long-range communication.',
    shortDescription: 'Ergonomic controller with HD display',
    specs: {
      'Display': '7-inch HD touchscreen',
      'Battery Life': '8 hours',
      'Transmission Range': '15 km',
    },
    inStock: true,
    rating: 4.6,
    reviews: 67,
  },
  {
    id: 'xag-spray-system',
    name: 'Precision Spray System',
    category: 'accessory',
    brand: 'XAG',
    price: 12999,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    description: 'Advanced variable-rate spraying system with ultra-low volume technology.',
    shortDescription: 'Variable-rate spray with precision droplet control',
    specs: {
      'Spray Width': '4-12 meters',
      'Flow Rate': '0.5-8 L/min',
      'Droplet Size': '80-400 μm',
    },
    inStock: true,
    rating: 4.9,
    reviews: 45,
  },
  {
    id: 'ubitech-af305',
    name: 'AF305 Auto Navigation System',
    category: 'ubitech',
    brand: 'Ubitech',
    price: 28999,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    ],
    description: 'Universal autonomous driving retrofit system that transforms conventional agricultural vehicles.',
    shortDescription: 'Retrofit autonomous driving system for farm vehicles',
    specs: {
      'Navigation': 'RTK-GPS, ±2cm accuracy',
      'Speed Range': '0.5-12 km/h',
      'Slope Tolerance': 'Up to 35°',
    },
    inStock: true,
    rating: 4.7,
    reviews: 73,
  },
  {
    id: 'ubitech-taurus80e',
    name: 'Taurus80E Robotic Lawn Mower',
    category: 'ubitech',
    brand: 'Ubitech',
    price: 15999,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80',
    ],
    description: 'Professional-grade robotic lawn mower for large residential and commercial properties.',
    shortDescription: 'AI-powered robotic mower for large properties',
    specs: {
      'Cutting Area': 'Up to 8000 m²',
      'Cutting Height': '20-60 mm',
      'Battery Life': '4-6 hours',
      'Noise Level': '<58 dB',
    },
    inStock: true,
    rating: 4.5,
    reviews: 92,
  },
  {
    id: 'ubitech-aries300n',
    name: 'Aries300N Smart Sprayer',
    category: 'ubitech',
    brand: 'Ubitech',
    price: 32999,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1595239876976-89045a3d8c8e?w=800&q=80',
    ],
    description: 'Precision smart sprayer with AI plant recognition technology.',
    shortDescription: 'Precision sprayer with plant recognition',
    specs: {
      'Tank Capacity': '300L',
      'Spray Width': '3-6 meters',
      'Recognition': 'AI plant detection',
    },
    inStock: true,
    rating: 4.8,
    reviews: 56,
  },
];

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};

export const formatPrice = (price, currency = 'CNY') => {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(price);
};
