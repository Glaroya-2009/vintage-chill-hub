
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cannabis, User, Coffee, BookOpen, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

type NavLinkProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
  current: boolean;
};

const NavLink = ({ to, label, icon, current }: NavLinkProps) => (
  <Link
    to={to}
    className={cn(
      "flex items-center px-4 py-3 rounded-lg transition-all",
      "hover:text-vintage-orange hover:bg-white/30",
      current ? "bg-white/40 text-vintage-orange" : "text-vintage-brown"
    )}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </Link>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: <Cannabis className="h-5 w-5" /> },
    { path: '/profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
    { path: '/hobbies', label: 'Hobbies', icon: <Coffee className="h-5 w-5" /> },
    { path: '/about', label: 'About', icon: <BookOpen className="h-5 w-5" /> },
    { path: '/contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 py-4 transition-all duration-300",
          scrolled ? "bg-vintage-cream/90 backdrop-blur-md shadow-md" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <Cannabis className="h-8 w-8 text-vintage-green" />
            <h1 className="text-xl font-groovy font-bold text-vintage-brown">Gabriel's Vibe</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-vintage-orange bg-white/40"
                    : "text-vintage-brown hover:text-vintage-orange hover:bg-white/30"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-vintage-brown"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-6 px-4 bg-vintage-cream/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-vintage-orange bg-white/40"
                      : "text-vintage-brown hover:text-vintage-orange hover:bg-white/20"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span className="ml-3">{link.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow py-6 px-4 md:py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-vintage-brown text-vintage-cream py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-groovy text-lg">Gabriel Laroya</p>
              <p className="text-sm opacity-75">San Beda College Alabang</p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm opacity-75">© {new Date().getFullYear()} Vintage Vibes</p>
              <p className="text-xs opacity-50">Designed with ☮ and ♥</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
