import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinkClass = "font-body text-sm tracking-wider uppercase hover:text-accent transition-colors";
  const mobileNavLinkClass = "font-body text-sm tracking-wider uppercase hover:text-accent transition-colors block py-3 border-b border-gray-100";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled || !isHome || mobileOpen ? 'bg-white/90 backdrop-blur-md shadow-sm text-black' : 'bg-transparent text-black'
    }`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="font-heading text-xl md:text-2xl font-bold tracking-[0.1em] uppercase">
          GEMLIFE.WORLD
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/exhibitions" className={navLinkClass}>Exhibitions</Link>
          <button 
            onClick={() => alert("Events & Shop coming soon!")}
            className={navLinkClass}
          >
            Events & Shop
          </button>
          <Link to="/journal" className={navLinkClass}>Journal</Link>
          <Link to="/membership" className={navLinkClass}>Login / Join</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-black transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-black transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-black transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${
        mobileOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'
      }`}>
        <div className="px-6 py-4 flex flex-col">
          <Link to="/exhibitions" className={mobileNavLinkClass}>Exhibitions</Link>
          <button 
            onClick={() => alert("Events & Shop coming soon!")}
            className={`${mobileNavLinkClass} text-left`}
          >
            Events & Shop
          </button>
          <Link to="/journal" className={mobileNavLinkClass}>Journal</Link>
          <Link to="/membership" className={`${mobileNavLinkClass} border-b-0`}>Login / Join</Link>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-surface border-t border-gray-200 py-16 px-8 text-black">
    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="flex flex-col gap-4">
        <h2 className="font-heading text-xl uppercase tracking-[0.1em]">Gemlife.world</h2>
        <p className="text-secondary text-sm max-w-[300px]">
          Preserving the stories and emotions of gemstones as art.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-16">
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-sm text-accent uppercase tracking-wider font-bold">Explore</h3>
          <Link to="/exhibitions" className="text-secondary hover:text-black transition-colors text-sm">Exhibition</Link>
          <a href="#" className="text-secondary hover:text-black transition-colors text-sm">Event</a>
          <a href="#" className="text-secondary hover:text-black transition-colors text-sm">Journal</a>
          <a href="#" className="text-secondary hover:text-black transition-colors text-sm">Stories</a>
          <Link to="/membership" className="text-secondary hover:text-black transition-colors text-sm">Membership</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-sm text-accent uppercase tracking-wider font-bold">Gem Life</h3>
          <Link to="/page/gem-life" className="text-secondary hover:text-black transition-colors text-sm">Gem Life</Link>
          <Link to="/page/who-we-are" className="text-secondary hover:text-black transition-colors text-sm">Who We Are</Link>
          <Link to="/page/social-engagement" className="text-secondary hover:text-black transition-colors text-sm">Social Engagement</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-sm text-accent uppercase tracking-wider font-bold">Legal</h3>
          <Link to="/page/terms" className="text-secondary hover:text-black transition-colors text-sm">Terms</Link>
          <Link to="/page/privacy" className="text-secondary hover:text-black transition-colors text-sm">Privacy Policy</Link>
          <Link to="/page/contact" className="text-secondary hover:text-black transition-colors text-sm">Contact</Link>
          <Link to="/page/faq" className="text-secondary hover:text-black transition-colors text-sm">FAQ</Link>
        </div>
      </div>
    </div>
    <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-gray-200 text-center text-secondary text-xs">
      &copy; {new Date().getFullYear()} Gemlife.world. All rights reserved.
    </div>
  </footer>
);

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-bg text-text transition-colors duration-300">
      <Navigation />
      <main className="flex-1 w-full pt-[72px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
