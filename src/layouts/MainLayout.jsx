import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ruriLogo from '../assets/images/logo/RURILogo完成-11.png';

const ComingSoonModal = ({ onClose }) => (
  <div
    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    onClick={onClose}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

    {/* Card */}
    <div
      className="relative bg-white rounded-3xl shadow-2xl px-10 py-12 max-w-sm w-full text-center"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close × */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-2xl font-thin text-gray-300 hover:text-black transition-colors leading-none"
        aria-label="Close"
      >
        ×
      </button>

      {/* Diamond icon */}
      <div className="mx-auto mb-7 w-14 h-14 flex items-center justify-center">
        <div className="w-10 h-10 rotate-45 border-2 border-accent relative flex items-center justify-center">
          <div className="w-2 h-2 bg-accent rotate-0" />
        </div>
      </div>

      <h2 className="font-heading text-3xl font-semibold mb-3 tracking-wide">Coming Soon</h2>

      <p className="text-secondary text-sm leading-relaxed mb-2">
        Events &amp; Shop は現在準備中です。
      </p>
      <p className="text-secondary text-xs leading-relaxed mb-9">
        Events &amp; Shop is currently being prepared.<br />
        Please check back soon.
      </p>

      <button
        onClick={onClose}
        className="w-full bg-black text-white text-xs font-bold tracking-widest uppercase py-3 rounded-full hover:bg-accent transition-colors"
      >
        OK
      </button>
    </div>
  </div>
);

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showComingSoon ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showComingSoon]);

  const navLinkClass = "font-body text-sm tracking-wider uppercase hover:text-accent transition-colors";
  const mobileNavLinkClass = "font-body text-sm tracking-wider uppercase hover:text-accent transition-colors block py-3 border-b border-gray-100";

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome || mobileOpen ? 'bg-white/90 backdrop-blur-md shadow-sm text-black' : 'bg-transparent text-black'
      }`}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <Link to="/" aria-label="Gemlife.world home">
            <img src={ruriLogo} alt="RURI Logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/exhibitions" className={navLinkClass}>Exhibitions</Link>
            <button
              onClick={() => setShowComingSoon(true)}
              className={navLinkClass}
            >
              Events &amp; Shop
            </button>
            <Link to="/journal" className={navLinkClass}>Journal</Link>
            <Link to="/membership" className={navLinkClass}>Login / Join</Link>
          </div>

          {/* Mobile Hamburger */}
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
              onClick={() => { setMobileOpen(false); setShowComingSoon(true); }}
              className={`${mobileNavLinkClass} text-left`}
            >
              Events &amp; Shop
            </button>
            <Link to="/journal" className={mobileNavLinkClass}>Journal</Link>
            <Link to="/membership" className={`${mobileNavLinkClass} border-b-0`}>Login / Join</Link>
          </div>
        </div>
      </nav>

      {showComingSoon && <ComingSoonModal onClose={() => setShowComingSoon(false)} />}
    </>
  );
};

const Footer = () => (
  <footer className="bg-surface border-t border-gray-200 px-6 pt-8 md:pt-14 pb-6 text-black">
    <div className="max-w-[1400px] mx-auto">

      {/* Main grid: brand + 3 link columns */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-gray-200">

        {/* Brand */}
        <div>
          <img src={ruriLogo} alt="RURI Logo" className="h-10 w-auto mb-5 opacity-90" />
          <p className="text-secondary text-sm leading-relaxed max-w-[240px] mb-2">
            宝石をアートとして、その物語と想いを未来へ受け継ぐ。
          </p>
          <p className="text-secondary/60 text-xs leading-relaxed max-w-[240px]">
            Preserving the stories and emotions of gemstones as living art.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-accent text-[10px] font-bold uppercase tracking-[0.22em] mb-5">Explore</h4>
          <ul className="space-y-3">
            <li><Link to="/exhibitions" className="text-secondary hover:text-black text-sm transition-colors">Exhibition</Link></li>
            <li><Link to="/journal" className="text-secondary hover:text-black text-sm transition-colors">Journal</Link></li>
            <li><Link to="/membership" className="text-secondary hover:text-black text-sm transition-colors">Login / Join</Link></li>
          </ul>
        </div>

        {/* Gem Life */}
        <div>
          <h4 className="text-accent text-[10px] font-bold uppercase tracking-[0.22em] mb-5">Gem Life</h4>
          <ul className="space-y-3">
            <li><Link to="/page/gem-life" className="text-secondary hover:text-black text-sm transition-colors">Gem Life</Link></li>
            <li><Link to="/page/who-we-are" className="text-secondary hover:text-black text-sm transition-colors">Who We Are</Link></li>
            <li><Link to="/page/social-engagement" className="text-secondary hover:text-black text-sm transition-colors">Social Engagement</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-accent text-[10px] font-bold uppercase tracking-[0.22em] mb-5">Legal</h4>
          <ul className="space-y-3">
            <li><Link to="/page/terms" className="text-secondary hover:text-black text-sm transition-colors">Terms of Service</Link></li>
            <li><Link to="/page/privacy" className="text-secondary hover:text-black text-sm transition-colors">Privacy Policy</Link></li>
            <li><Link to="/page/contact" className="text-secondary hover:text-black text-sm transition-colors">Contact</Link></li>
            <li><Link to="/page/faq" className="text-secondary hover:text-black text-sm transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-5 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-secondary text-xs">
          &copy; {new Date().getFullYear()} Gemlife.world. All rights reserved.
        </p>
        <p className="text-secondary/50 text-xs tracking-widest uppercase">
          RURI Social Innovation
        </p>
      </div>

    </div>
  </footer>
);

const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-bg text-text transition-colors duration-300">
    <Navigation />
    <main className="flex-1 w-full pt-[72px]">
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;
