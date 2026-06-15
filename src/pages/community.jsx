import React from 'react';
import communityBg from '../assets/communitybg.png'; // Going up one level to reach assets directory

export default function Community() {
  return (
    <section 
      id="community" 
      className="w-full min-h-screen bg-black flex flex-col justify-between overflow-hidden select-none"
    >
      
      {/* 1. TOP SPACING BLOCK: Height allowance for absolute-positioned navigation navbar */}
      <div className="h-[180px] md:h-[220px] w-full bg-black shrink-0" />

      {/* 2. CORE BANNER LAYOUT BLOCK: Exact layout from image_2ed39e.png */}
      <div className="w-full bg-gradient-to-b from-[#2b2b2a] to-[#1e1e1e] flex flex-col items-center justify-center py-12 px-6 shrink-0 border-b border-white/5">
        <div className="w-full max-w-[1400px] text-center px-4 space-y-6">
          
          {/* Main Stylized Header Title */}
          <h2 
            className="text-[#f3a4a4] font-black text-3xl md:text-5xl lg:text-[54px] tracking-[0.15em] uppercase my-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            style={{ fontFamily: "var(--heading)" }}
          >
            WHY MEMO TOKEN MATTERS
          </h2>
          
          {/* First Paragraph: Kept as one complete sentence */}
          <p 
            className="text-white font-bold text-sm md:text-xl lg:text-[22px] leading-[1.8] tracking-[0.12em] uppercase max-w-[1250px] mx-auto opacity-95"
            style={{ fontFamily: "var(--sans)" }}
          >
            Inspired by Elon's{" "}
            <span className="text-[#5be35b] font-black tracking-[0.12em]">
              TRAILBLAZER VS. TRADITION
            </span>{" "}
            ethos, this token merges decentralized finance (DeFi) with relentless innovation. Like SpaceX or Tesla, it disrupts outdated systems, empowering individuals to seize control of their financial futures.
          </p>

          {/* Second Paragraph: Kept as one complete unified thought */}
          <p 
            className="text-white font-bold text-sm md:text-xl lg:text-[22px] leading-[1.8] tracking-[0.12em] uppercase max-w-[1250px] mx-auto opacity-95"
            style={{ fontFamily: "var(--sans)" }}
          >
            By uniting a{" "}
            <span className="text-[#3adca2] font-black tracking-[0.12em]">
              GLOBAL COMMUNITY
            </span>{" "}
            of visionaries, it redistributes power from centralized gatekeepers to the people—rewarding boldness and redefining finance's boundaries. Join the mission. Disrupt. Decentralize. Dominate.
          </p>

        </div>
      </div>

      {/* 3. LOWER CONTENT GRAPHIC SECTION: Edge-to-edge true full browser window width background */}
      <div 
        className="w-full flex-1 min-h-[450px] md:min-h-[550px] lg:min-h-[650px] bg-no-repeat bg-top bg-cover relative flex flex-col justify-end pb-4"
        style={{ backgroundImage: `url(${communityBg})` }}
      >
        
        {/* ================= LOWER LAYER MINI FOOTER NAVIGATION ================= */}
        <div className="w-full max-w-[1840px] mx-auto px-6 md:px-10 z-10 flex flex-col md:flex-row items-center justify-between gap-4 pt-10 pb-2 border-t border-white/10 mt-auto bg-gradient-to-t from-black via-black/90 to-transparent">
          
          {/* Bottom Left Navigation Secondary Text Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-black tracking-widest text-white/60 uppercase">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/presale" className="hover:text-white transition">Presale</a>
            <a href="#roadmap" className="hover:text-white transition">Roadmap</a>
            <a href="#tokenomics" className="hover:text-white transition">Tokenomics</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#how-to-buy" className="hover:text-white transition">How to buy</a>
            <a href="/community" className="text-[#7ee7c7]">Community</a>
          </div>

          {/* Central Absolute Locked Copyright String */}
          <div className="text-[10px] text-white/40 font-medium md:absolute md:left-1/2 md:-translate-x-1/2 tracking-wider">
            @copyright 2026 all right reserved by Memo
          </div>

          {/* Bottom Right Minimal Social Icons Row */}
          <div className="flex items-center gap-5 text-white/60 text-base">
            <a href="#telegram" className="hover:text-[#7ee7c7] transition font-black">✈</a>
            <a href="#twitter" className="hover:text-[#7ee7c7] transition font-black">𝕏</a>
            <a href="#discord" className="hover:text-[#7ee7c7] transition font-black">👾</a>
          </div>

        </div>

      </div>

    </section>
  );
}