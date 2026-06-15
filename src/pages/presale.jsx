import React from 'react';
import presaleBg from '../assets/presalebg.png'; 
import presale1 from '../assets/presale1.png'; // Your custom stage icon asset

export default function Presale() {
  const stages = [
    { name: 'STAGE 01', price: '$ 0.01', isActive: true },
    { name: 'STAGE 02', price: '$ 0.015', isActive: false },
    { name: 'STAGE 03', price: '$ 0.02', isActive: false },
    { name: 'STAGE 04', price: '$ 0.025', isActive: false },
    { name: 'STAGE 05', price: '$ 0.03', isActive: false },
    { name: 'STAGE 06', price: '$ 0.035', isActive: false },
    { name: 'STAGE 07', price: '$ 0.04', isActive: false },
    { name: 'STAGE 08', price: '$ 0.045', isActive: false },
  ];

  return (
    <section 
      id="presale"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-[160px] pb-6 px-4 md:px-10 flex flex-col justify-between overflow-hidden select-none"
      style={{ backgroundImage: `url(${presaleBg})` }}
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* ================= MIDDLE CORE CONTENT ================= */}
      <div className="w-full max-w-[1400px] mx-auto text-center z-10 flex flex-col items-center justify-center flex-1 gap-6 mt-10 lg:mt-20">
        <h1 className="text-white font-black text-4xl md:text-6xl lg:text-8xl tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] my-0">
          JOIN THE PRESALE
        </h1>
        
        <p className="text-white font-black text-lg md:text-2xl lg:text-3xl tracking-widest uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          LIMITED TIME, BIG REWARDS!
        </p>

        <div className="relative group mt-4">
          <div className="absolute inset-0 bg-black rounded-xl translate-x-[3px] translate-y-[4px]" />
          <button className="relative px-10 py-3.5 bg-[#125875] text-white font-black text-sm md:text-base rounded-xl border border-black/30 tracking-wide transition active:translate-x-[2px] active:translate-y-[3px] hover:brightness-110">
            Secure Your Tokens Now
          </button>
        </div>
      </div>

      {/* ================= LOWER ROADMAP TIMELINE RIBBON ================= */}
      <div className="w-full max-w-[1840px] mx-auto z-10 mb-6 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-center min-w-[1300px] lg:min-w-full justify-between gap-1.5 px-4 py-4">
          
          {/* Left Arrow Cap */}
          <div className="h-24 w-12 bg-white/10 border border-white/10 rounded-l-md flex items-center justify-center opacity-40 shrink-0 [clip-path:polygon(0%_0%,_75%_0%,_100%_50%,_75%_100%,_0%_100%,_25%_50%)]" />

          {/* Dynamic Stage Loop */}
          {stages.map((stage) => (
            <div 
              key={stage.name}
              // Fixed: Increased container height to 110px for vertical breathing room
              className={`relative h-[110px] flex-1 flex flex-col items-center justify-center text-center font-black transition-all border border-black shadow-[2px_2px_0px_0px_#000] shrink-0
                ${stage.isActive 
                  ? 'bg-[#9ce4c5] text-black scale-105 z-20' 
                  : 'bg-white text-black'
                }`}
              style={{
                clipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%, 8% 50%)'
              }}
            >
              <span className="text-[10px] md:text-xs tracking-tight text-black/60 font-black mt-1">
                {stage.name}
              </span>
              
              {/* Image Icon Slot Container */}
              <div className="h-8 w-8 my-1 flex items-center justify-center">
                <img 
                  src={presale1} 
                  alt={`${stage.name} Icon`} 
                  // Keeps image scaling balanced inside the block frame
                  className={`h-full w-auto object-contain ${stage.isActive ? 'animate-pulse' : 'opacity-90'}`}
                />
              </div>
              
              <span className="text-xs md:text-sm tracking-wide font-black mb-1">
                {stage.price}
              </span>
            </div>
          ))}

          {/* Right Arrow Cap */}
          <div className="h-24 w-12 bg-white/10 border border-white/10 rounded-r-md flex items-center justify-center opacity-40 shrink-0 [clip-path:polygon(0%_0%,_75%_0%,_100%_50%,_75%_100%,_0%_100%,_10%_50%)]" />

        </div>
      </div>

      {/* Footer block */}
      <div className="w-full text-center text-[10px] text-white/40 font-medium z-10">
        @copyright 2026 all right reserved by Memo
      </div>
    </section>
  );
}