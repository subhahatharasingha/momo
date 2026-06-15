import React from 'react';
import aboutBg from '../assets/aboutbg.png'; 

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen bg-black flex flex-col justify-between overflow-hidden select-none">
      
      {/* 1. TOP SPACING BLOCK: Leave empty space for the absolute floating navbar */}
      <div className="h-[200px] md:h-[140px] w-full bg-black shrink-0" />

      {/* 2. CORE DESCRIPTION BANNER */}
      <div className="w-full bg-black flex items-center justify-center py-6 md:py-0 md:h-[291px] px-6 shrink-0 border-b border-white/5">
        <div className="w-full max-w-[1400px] text-center px-4">
          
          {/* FIXED STEP: Added style rules here to activate the "New Rocker" font setup */}
          <p 
            className="text-white text-xl md:text-3xl lg:text-[30px] leading-relaxed md:leading-[1.4] tracking-wider max-w-[1300px] mx-auto"
            style={{ fontFamily: '"New Rocker", system-ui' }}
          >
            
            {/* Highlight 1: Pinkish Pill */}
            <span 
              className="inline-block bg-[#f3a4a4] text-black px-3 py-0.5 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] mx-1 md:mx-2 text-lg md:text-2xl lg:text-[26px] align-middle "
              style={{ fontFamily: '"New Rocker", system-ui' }}
            >
              MEMO
            </span>
            is more than just a token – it’s a revolution inspired by the 
            
            {/* Highlight 2: Cyan Pill */}
            <span 
              className="inline-block bg-[#9ce4c5] text-black px-3 py-0.5 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] mx-1 md:mx-2 text-lg md:text-2xl lg:text-[26px] align-middle "
              style={{ fontFamily: '"New Rocker", system-ui' }}
            >
              INNOVATION
            </span>
            of visionaries. Our mission is to build a decentralized financial system that 
            
            {/* Highlight 3: Blue Pill */}
            <span 
              className="inline-block bg-[#8ebef3] text-black px-3 py-0.5 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] mx-1 md:mx-2 text-lg md:text-2xl lg:text-[26px] align-middle "
              style={{ fontFamily: '"New Rocker", system-ui' }}
            >
              ACCELERATES
            </span>
            progress for everyone, no matter their background or resources.
          </p>
        </div>
      </div>

      {/* 3. LOWER ARTWORK SECTOR */}
      <div 
        className="w-full flex-1 min-h-[450px] md:min-h-[550px] lg:min-h-[650px] bg-no-repeat bg-top bg-cover relative flex flex-col justify-end pb-6"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        
        {/* Dynamic bottom overlay shadow to ground the image */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        {/* Footer copyright anchor aligned nicely onto the base border */}
        <div className="w-full text-center text-[10px] text-white/40 font-medium z-10 mt-auto">
          @copyright 2026 all right reserved by Memo
        </div>

      </div>

    </section>
  );
}