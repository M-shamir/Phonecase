"use client"
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, MapPin, Phone, Mail, 
  Linkedin, Instagram, Facebook, Twitter, 
  Star, Menu, X 
} from 'lucide-react';

// Custom Hook for Scroll-based Animation
const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());
  

  useEffect(() => {
    const handleScroll = () => {
      // const topOffset = window.scrollY;
      const windowHeight = window.innerHeight;

      document.querySelectorAll('[data-animate]').forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight * 0.75 && !animatedElements.has(element)) {
          element.classList.add('is-visible');
          setAnimatedElements(prev => new Set(prev).add(element));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animatedElements]);
};

// Branches Data
const branches = [
  {
    city: 'Phone Case Calicut',
    address: 'HiLITE Mall Calicut',
    phone: '+91 95262 89928',
    email: 'phonecase@gmail.com'
  },
  {
    city: 'Phone Case Kannur',
    address: 'Secura Centre Kannur',
    phone: '+91 95262 89928',
    email: 'phonecase@gmail.com'
  },
  {
    city: 'My Case',
    address: 'Fort Road Kannur',
    phone: '+91 95262 89928',
    email: 'phonecase@gmail.com'
  }
];

// Social Media Links
const socialLinks = [
  { 
    icon: Linkedin, 
    href: '#', 
    color: 'hover:text-blue-500',
    name: 'LinkedIn'
  },
  { 
    icon: Instagram, 
    href: '#', 
    color: 'hover:text-pink-500',
    name: 'Instagram'
  },
  { 
    icon: Facebook, 
    href: '#', 
    color: 'hover:text-blue-600',
    name: 'Facebook'
  },
  { 
    icon: Twitter, 
    href: '#', 
    color: 'hover:text-cyan-500',
    name: 'Twitter'
  }
];

// User Reviews Data
const userReviews = [
  {
    id: 1,
    name: 'Adhil Khan',
    username: '@adhilkhan',
    rating: 5,
    review: 'Absolutely love my new phone case from Phone Case! The protection is top-notch, and the design is sleek and modern.',
    product: 'Sleek Armor Case',
    image: 'https://www.shutterstock.com/image-photo/handsome-smiling-young-man-portrait-260nw-2066727890.jpg'
  },
  {
    id: 2,
    name: 'Rahul ',
    username: '@rahul_knr',
    rating: 5,
    review: 'The wireless charger is a game-changer. Fast charging, compact design, and looks great on my desk.',
    product: 'Wireless Charger Pro',
    image: 'https://t3.ftcdn.net/jpg/06/11/89/42/360_F_611894278_6sIqAi9Akdrw9aNulK77WHPJJHJFWTV0.jpg'
  },
  {
    id: 3,
    name: 'Mhd Shamir',
    username: '@shamir',
    rating: 5,
    review: 'Best mobile accessories I\'ve ever purchased. Phone Case understands what modern users need.',
    product: 'Power Bank Elite',
    image: 'https://images.unsplash.com/photo-1572957946666-2e386e1e913d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhJTIwbWFufGVufDB8fDB8fHww'
  }
];

// Render Stars Function
const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star 
      key={index} 
      className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`} 
      fill={index < rating ? 'currentColor' : 'transparent'}
    />
  ));
};

export default function Home() {
  // Use custom scroll animation hook
  useScrollAnimation();

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
    <style>{`
     [data-animate] {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      [data-animate].is-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>

    <title>Phone Case - Mobile Cases & Accessories</title>
    <meta name="description" content="Phone Case: Premium Mobile Protection and Style" />

    {/* Navigation */}
    <header 
      className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md"
      data-animate
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 
          className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          data-animate
        >
          Phone Case
        </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#branches" className="text-gray-300 hover:text-white transition-colors">Branches</a>
          <a href="#reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
          <button
  className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full text-white transition-transform hover:scale-105 active:scale-95"
  onClick={() => window.location.href = "tel:79937282822"}
>
  Contact
</button>

        </nav>

        {/* Mobile Navigation Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white transition-transform active:scale-90"
            aria-label="Open Mobile Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 md:hidden animate-fade-in"
            style={{
              transition: 'opacity 0.3s ease-in-out',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            <div className="container mx-auto p-2 flex justify-between items-center">
              <h1 
                className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Phone Case
              </h1>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white transition-transform active:scale-90"
                aria-label="Close Mobile Menu"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-6 mt-12">
              <a
                href="#"
                className="text-lg text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <button
                className="bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-2 rounded-full text-white text-lg transition-transform hover:scale-105 active:scale-95"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section 
        className="container mx-auto px-6 pt-24 min-h-screen flex items-center"
      >
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div 
            className="space-y-6"
            data-animate
          >
            <h2 
              className="text-5xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              data-animate
            >
              Protect Your Device. 
              Elevate Your Style.
            </h2>
            <p 
              className="text-xl text-gray-400 max-w-md"
              data-animate
            >
              Cutting-edge mobile accessories designed for protection, performance, and personal expression.
            </p>
            <button 
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full group transition-transform hover:scale-105 active:scale-95"
              data-animate
            >
              Explore Collection
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div
            className="hidden md:block relative"
            data-animate
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-50"></div>
            <div className="relative">
              <img 
                src="/api/placeholder/500/600" 
                alt="Phone Case Product" 
                className="rounded-2xl relative z-10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="container mx-auto px-6 py-16">
        <h3
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          data-animate
        >
          Our Branches
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={branch.city}
              className={`bg-gray-900 rounded-2xl p-6 space-y-4 border border-gray-800`}
              data-animate
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h4 className="text-2xl font-bold text-white">{branch.city}</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span>{branch.address}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                  <span>{branch.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                  <span>{branch.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* User Reviews Section */}
      <section id="reviews" className="container mx-auto px-6 py-16">
        <h3
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          data-animate
        >
          What Our Users Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {userReviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-gray-900 rounded-2xl p-6 space-y-4 border border-gray-800`}
              data-animate
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-gray-700"
                />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.username}</p>
                </div>
              </div>
              <div className="flex">{renderStars(review.rating)}</div>
              <p className="text-gray-300 italic">"{review.review}"</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Verified Purchase</span>
                <span className="text-sm text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with Social Media */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`text-gray-400 ${social.color} transition-all hover:scale-125 active:scale-90`}
              >
                <social.icon size={32} />
              </a>
            ))}
          </div>
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Phone Case. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}