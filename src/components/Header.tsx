import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './ui/utils';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith('/#')) {
      // If we are already on home, scroll to section
      if (location.pathname === '/') {
        const element = document.querySelector(path.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home then scroll (this requires a hash aware scroll on mount in Home, 
        // but for now simpler is navigate to /)
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(path.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  const scrollToContact = () => {
    handleNavClick('/#contact');
  };

  const navItems = [
    { label: 'Fabrics', path: '/fabrics' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'Embroidery', path: '/services/embroidery' },
    { label: 'Printing', path: '/services/screen-printing' },
    { label: 'Designing', path: '/services/designing' },
    { label: 'About', path: '/#about' }
  ];

  return (
    <header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className={cn(
        "max-w-6xl mx-auto rounded-2xl border transition-all duration-300",
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      )}>
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-2xl font-bold tracking-tighter text-white">DUSKYN</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={scrollToContact}
              className="bg-white text-black hover:bg-gray-200 transition-colors rounded-full px-6"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className="py-3 px-4 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4 pb-2">
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-xl"
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
