import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

const NavLink = ({ to, children, active, className = '' }) => (
  <Link
    to={to}
    className={`relative group font-body text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
      active ? 'text-accent' : 'text-black hover:text-accent'
    } ${className}`}
  >
    {children}
    {/* Sliding underline */}
    <span
      className={`absolute -bottom-[3px] left-0 h-[1.5px] bg-accent transition-all duration-300 ${
        active ? 'w-full' : 'w-0 group-hover:w-full'
      }`}
    />
  </Link>
);

const NavButton = ({ onClick, children, className = '' }) => (
  <button
    onClick={onClick}
    className={`relative group font-body text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 text-black hover:text-accent ${className}`}
  >
    {children}
    <span className="absolute -bottom-[3px] left-0 h-[1.5px] bg-accent transition-all duration-300 w-0 group-hover:w-full" />
  </button>
);

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const isHome = location.pathname === '/';
  const isOpaque = scrolled || !isHome || mobileOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = showComingSoon || mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showComingSoon, mobileOpen]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const mobileItemBase =
    'font-body text-[11px] tracking-[0.18em] uppercase py-4 border-b border-gray-100 flex items-center justify-between transition-colors duration-200';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isOpaque
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        {/* Top accent line — only when opaque */}
        <div
          className={`absolute top-0 left-0 w-full h-[2px] bg-accent transition-opacity duration-500 ${
            isOpaque ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-[18px] flex justify-end items-center">

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/exhibitions" active={isActive('/exhibitions')}>Exhibitions</NavLink>
            <NavButton onClick={() => setShowComingSoon(true)}>Events &amp; Shop</NavButton>
            <NavLink to="/journal" active={isActive('/journal')}>Journal</NavLink>

            {/* Login / Join — pill CTA */}
            <Link
              to="/membership"
              className={`ml-2 font-body text-[11px] tracking-[0.18em] uppercase px-5 py-[9px] rounded-full border transition-all duration-300 ${
                isActive('/membership')
                  ? 'bg-accent border-accent text-white'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              Login / Join
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-black transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-black transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-black transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out bg-white border-t border-gray-100 ${
            mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col">
            {[
              { label: 'Home', to: '/' },
              { label: 'Exhibitions', to: '/exhibitions' },
              { label: 'Journal', to: '/journal' },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`${mobileItemBase} ${
                  isActive(to) ? 'text-accent' : 'text-black hover:text-accent'
                }`}
              >
                {label}
                {isActive(to) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </Link>
            ))}

            <button
              onClick={() => { setMobileOpen(false); setShowComingSoon(true); }}
              className={`${mobileItemBase} text-left text-black hover:text-accent`}
            >
              Events &amp; Shop
              <span className="text-[9px] tracking-widest uppercase text-accent/70 font-bold">Soon</span>
            </button>

            <Link
              to="/membership"
              className="mt-5 w-full text-center font-body text-[11px] tracking-[0.18em] uppercase px-5 py-3 rounded-full bg-black text-white hover:bg-accent transition-colors duration-300"
            >
              Login / Join
            </Link>
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
            <li><Link to="/" className="text-secondary hover:text-black text-sm transition-colors">Home</Link></li>
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
