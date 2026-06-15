import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import sidebarimage from '../assets/sidebarimage.png'; // Imported your newly renamed avatar logo asset

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer when route changes (mobile only)
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRESALE', path: '/presale' },
    { name: 'ROADMAP', path: '/roadmap' },
    { name: 'TOKENOMICS', path: '/tokenomics' },
    { name: 'FAQ', path: '/faq' },
    { name: 'HOW TO BUY', path: '/how-to-buy' },
    { name: 'COMMUNITY', path: '/community' },
  ];

  return (
    <>
      {/* =========================================================================
          DESKTOP STYLING & FLOATING CONTAINER (UNTOUCHED FOR WINDOWS SIZE)
         ========================================================================= */}
      <div className="fixed top-[20px] lg:top-[40px] left-0 w-full px-4 md:px-10 z-50 pointer-events-none">
        <nav 
          className="mx-auto w-full max-w-[1840px] h-[64px] lg:h-[88px] rounded-[100px] flex items-center justify-between px-6 lg:px-[57px] border border-white/10 shadow-2xl backdrop-blur-sm pointer-events-auto"
          style={{
            background: 'linear-gradient(180deg, #494948 0%, #272829 100%)'
          }}
        >
          {/* MOBILE BRANDING AVATAR LOGO 
            - Visible only on mobile/tablet viewports (hidden lg:block hidden on desktops)
            - Placed exactly on the left edge as shown in image_be7ec0.png
          */}
          <div className="block lg:hidden shrink-0">
            <img 
              src={sidebarimage} 
              alt="Memo Mascot Avatar" 
              className="w-9 h-9 md:w-11 md:h-11 object-contain rounded-full border border-white/10 shadow-md"
            />
          </div>

          {/* Desktop Navigation Links Menu: Untouched */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-x-8 xl:gap-x-12">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-widest transition-all duration-200 hover:text-[#7ee7c7] ${
                    isActive 
                      ? 'text-[#7ee7c7] drop-shadow-[0_0_10px_rgba(126,231,199,0.4)]' 
                      : 'text-white'
                  }`}
                  style={{ fontFamily: '"New Rocker", system-ui' }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Buy Button: Untouched */}
          <div className="hidden lg:block relative group shrink-0">
            <div className="absolute inset-0 bg-black rounded-xl translate-x-[3px] translate-y-[4px]" />
            <button className="relative px-7 py-2.5 bg-gradient-to-r from-[#4ade80] to-[#2ecc71] text-white font-black text-sm rounded-xl border border-black/20 active:translate-x-[2px] active:translate-y-[3px] transition-all duration-100 hover:brightness-105 tracking-wider">
              BUY NOW
            </button>
          </div>

          {/* Hamburger Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="block lg:hidden text-white focus:outline-none p-1.5 transition-all hover:scale-105 relative z-50"
            aria-label="Toggle Side Drawer Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

        </nav>
      </div>

      {/* =========================================================================
          FIXED RESPONSIVE MOBILE SIDE MENU SLIDER (TARGETS MOBILE PHONES ONLY)
         ========================================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Clickable Backdrop overlay layer (Closes drawer on tap) */}
          <div 
            onClick={() => setIsOpen(false)} 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Side Drawer Wrapper Container Panel */}
          <div 
            className={`absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#2d2e2f] border-l border-white/5 p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ boxShadow: '-5px 0 25px rgba(0,0,0,0.3)' }}
          >
            <div className="w-full flex flex-col gap-8">
              {/* Top Close Button block panel */}
              <div className="w-full flex justify-end items-center">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white p-2 rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-3 w-full">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`w-full py-3 px-6 rounded-full text-center text-base tracking-wider transition-all duration-150 ${
                        isActive 
                          ? 'bg-[#9ce4c5] text-black font-black shadow-[3px_3px_0px_0px_#000] border border-black' 
                          : 'text-white/90 hover:text-white hover:bg-white/10 border border-transparent'
                      }`}
                      style={{ fontFamily: '"New Rocker", system-ui' }}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Lower Action Buy Button Container block */}
            <div className="w-full pt-6">
              <button 
                className="w-full py-3 bg-gradient-to-r from-[#4ade80] to-[#2ecc71] text-white font-black text-base rounded-xl border border-black/30 shadow-[3px_3px_0px_0px_#000] tracking-widest active:translate-y-0.5 transition hover:brightness-105"
                style={{ fontFamily: '"New Rocker", system-ui' }}
                onClick={() => console.log('Buy Now clicked')}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}