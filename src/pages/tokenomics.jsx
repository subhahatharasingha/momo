import React from 'react';
import tokenBg from '../assets/tokenbg.png'; 

export default function Tokenomics() {
  return (
    <section 
      id="tokenomics" 
      className="relative w-full h-screen bg-black pt-[140px] pb-6 px-4 md:px-10 flex flex-col justify-between overflow-hidden select-none"
    >
      
      {/* =========================================================================
          MASTER BOUND CANVAS CONTAINER
          - Keeps background image, vector lines, labels, and dots locked to the exact same space.
         ========================================================================= */}
      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[1280px] h-[680px] hidden lg:block">
        
        {/* 1. YOUR BACKGROUND IMAGE UNTOUCHED BUT INNER-LOCKED */}
        <div 
        className="absolute pointer-events-none z-0 bg-no-repeat"
        style={{ 
          backgroundImage: `url(${tokenBg})`,
          backgroundSize: 'contain', 
          width: '680px',          
          height: '480px',
          top: '40%',                     
          left: '50%',                       
          transform: 'translateX(-50%)',     
          opacity: 1
        }} 
      />

        {/* 2. SVG VECTOR POINTER LINES CANVAS */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1280 680" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Side Pointer Lines */}
          <path 
            d="M 180 210 L 240 230 L 290 290 L 360 310 L 421 367" 
            stroke="#3b9d6e"       
            strokeWidth="3"        
            strokeLinecap="round"   
            strokeLinejoin="round"  
          />
          <path d="M 110 395 L 240 395 L 360 430" stroke="#40c070" strokeWidth="2.5" />
          <path d="M 180 580 L 250 540 L 380 490" stroke="#40c070" strokeWidth="2.5" />

          {/* Right Side Pointer Lines */}
          <path d="M 1100 210 L 1020 270 L 880 340" stroke="#40c070" strokeWidth="2.5" opacity="0.85" />
          <path d="M 1170 395 L 1070 395 L 940 420" stroke="#40c070" strokeWidth="2.5" opacity="0.85" />
          <path d="M 1100 580 L 1030 540 L 900 490" stroke="#40c070" strokeWidth="2.5" opacity="0.85" />
        </svg>

        {/* 3. INTERACTIVES CONTENT OVERLAY (Perfect alignment to the coordinate system) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-20">
          
          {/* ----------- LEFT HAND DATA CARD INTERACTIVES ----------- */}
          
          {/* Left Top Card */}
          <div className="absolute top-[140px] left-[110px] flex flex-col items-start gap-1 pointer-events-auto">
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          {/* Left Top Dot at (180, 210) */}
          <div className="absolute top-[203px] left-[173px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

          {/* Left Center Card */}
          <div className="absolute top-[325px] left-[40px] flex flex-col items-start gap-1 pointer-events-auto">
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          {/* Left Center Dot at (110, 395) */}
          <div className="absolute top-[388px] left-[103px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

          {/* Left Bottom Card */}
          <div className="absolute top-[510px] left-[110px] flex flex-col items-start gap-1 pointer-events-auto">
            <div className="flex items-center gap-1">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          {/* Left Bottom Dot at (180, 580) */}
          <div className="absolute top-[573px] left-[173px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />


          {/* ----------- RIGHT HAND DATA CARD INTERACTIVES ----------- */}

          {/* Right Top Card */}
          <div className="absolute top-[140px] right-[110px] flex flex-col items-end gap-1 pointer-events-auto">
            <div className="flex items-center gap-1 flex-row-reverse">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          {/* Right Top Dot at (1100, 210) */}
          <div className="absolute top-[203px] right-[173px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

          {/* Right Center Card */}
          <div className="absolute top-[325px] right-[40px] flex flex-col items-end gap-1 pointer-events-auto">
            <div className="flex items-center gap-1 flex-row-reverse">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          {/* Right Center Dot at (1170, 395) */}
          <div className="absolute top-[388px] right-[103px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

          {/* Right Bottom Card */}
          <div className="absolute top-[510px] right-[110px] flex flex-col items-end gap-1 pointer-events-auto">
            <div className="flex items-center gap-1 flex-row-reverse">
              <span className="text-white font-black text-xs">20%</span>
              <div className="w-12 h-2.5 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black/90 border-2 border-[#40c070] text-[#40c070] font-black text-[10px] tracking-widest px-3 py-1 rounded lowercase shadow-md">
              public
            </div>
          </div>
          {/* Right Bottom Dot at (1100, 580) */}
          <div className="absolute top-[573px] right-[173px] w-3.5 h-3.5 rounded-full bg-[#40c070] border-2 border-white shadow-md shadow-black" />

        </div>
      </div>

      {/* Background Mask Layer for layout contrast safety */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none z-0" />

      {/* =========================================================
          TOP TITLE CONTROLLER
         ========================================================= */}
      <div className="w-full max-w-[1840px] mx-auto z-30 absolute top-[140px] left-1/2 -translate-x-1/2 pointer-events-none">
        <h1 
          className="text-white font-black text-4xl md:text-6xl lg:text-[72px] tracking-widest uppercase text-center my-0 pointer-events-auto"
          style={{ fontFamily: 'var(--heading)' }}
        >
          TOKENOMICS
        </h1>
      </div>

      {/* =========================================================
          MOBILE VIEWPORT CONTROLLER
         ========================================================= */}
      <div className="lg:hidden w-full max-w-[500px] grid grid-cols-2 gap-4 mt-4 mx-auto px-4 z-30 overflow-y-auto max-h-[calc(100vh-280px)]">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="bg-black/80 border border-[#40c070]/30 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="text-white font-black text-xl">20%</span>
              <div className="w-10 h-3 bg-[#40c070] rounded border border-black" />
            </div>
            <div className="bg-black border-2 border-[#40c070] text-[#40c070] font-black text-xs tracking-widest px-4 py-1 rounded-lg lowercase">
              public
            </div>
          </div>
        ))}
      </div>

      {/* Footer Branding anchor tag */}
      <div className="w-full text-center text-[10px] text-white/40 font-medium z-30 mt-auto">
        @copyright 2026 all right reserved by Memo
      </div>
    </section>
  );
}