import React from 'react';
import bgImage from '../assets/bgimage.png'; 
import logo from '../assets/logo.png'; 
import PresaleCard from '../components/PresaleCard';

export default function Home() {
  return (
    <section 
      id="home"
      className="relative w-full min-h-screen bg-black pt-[150px] pb-12 px-4 md:px-10 overflow-hidden flex flex-col justify-between"
    >
      
      {/* =========================================================================
          BACKGROUND IMAGE — MOBILE: zoomed in to focus on the man
         ========================================================================= */}
      <div 
        className="absolute top-[105px] left-0 w-full h-[calc(100%-110px)] pointer-events-none z-0 lg:hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: '440%',          /* zoom level — increase to zoom more */
          backgroundPosition: 'center 5%', /* vertical focus — lower % = higher on image */
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* =========================================================================
          BACKGROUND IMAGE — DESKTOP: original contain / no stretch
         ========================================================================= */}
      <div 
        className="absolute top-[105px] left-0 w-full h-[calc(100%-110px)] bg-contain bg-center bg-no-repeat pointer-events-none z-0 hidden lg:block"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* =========================================================================
          MOBILE LAYOUT (visible only on mobile, hidden on lg+)
         ========================================================================= */}
      <div className="flex flex-col items-center w-full z-10 relative lg:hidden gap-0">

        {/* Logo */}
        <div className="w-full flex justify-center mb-2">
          <img 
            src={logo} 
            alt="Memo Branding Logo" 
            className="w-28 h-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" 
          />
        </div>

        {/* Heading */}
        <h1 className="text-white font-black text-3xl text-center leading-[1.1] tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-4">
          Launch tokens, Set milestones<br/>
          Earn revenue
        </h1>

        {/* PresaleCard */}
        <div className="w-full flex justify-center z-10 mb-6">
          <PresaleCard />
        </div>

        {/* Info Card with Buttons */}
        <div className="w-full max-w-[350px] bg-white border-2 border-black rounded-[24px] py-10 px-6 shadow-[3px_3px_0px_0px_#000] text-black flex flex-col gap-4">
          <p className="font-bold text-sm text-center leading-snug">
            Join the MEMO revolution today. Don't miss your chance to secure tokens before the public launch!
          </p>
          
          <div className="flex flex-col gap-4 w-full">
            <button className="w-full bg-[#494948] text-white font-black py-3 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] text-xs tracking-wider transition hover:bg-[#333]">
              Join the presale Now
            </button>
            <button className="w-full bg-[#494948] text-white font-black py-3 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] text-xs tracking-wider transition hover:bg-[#333]">
              Learn More About Memo
            </button>
          </div>
        </div>

      </div>

      {/* =========================================================================
          DESKTOP LAYOUT (hidden on mobile, visible on lg+)
         ========================================================================= */}
      <div className="hidden lg:grid w-full max-w-[1840px] mx-auto grid-cols-12 gap-8 items-start mt-12 z-10 relative">
        
        {/* ================= LEFT COLUMN: LOGO AND REUSABLE CARD ================= */}
        <div className="lg:col-span-4 w-full flex flex-col items-start gap-4">
          
          {/* Brand Vector Logo Overlay */}
          <div className="w-full max-w-[440px] flex justify-start pl-2 -mt-20 mb-1 z-20">
            <img 
              src={logo} 
              alt="Memo Branding Logo" 
              className="w-40 h-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]" 
            />
          </div>

          {/* Reusable Presale Component Call */}
          <div 
            className="relative w-full flex justify-start z-10"
            style={{
              top: '-85px',
              left: '135px'
            }}
          >
            <PresaleCard />
          </div>

        </div>

        {/* ================= CENTER COLUMN: SPACER FOR BACKGROUND ART ================= */}
        <div className="lg:col-span-4 w-full flex flex-col items-center justify-center pt-12">
        </div>

        {/* ================= RIGHT COLUMN: HEADINGS & INFO CARD ================= */}
        <div className="lg:col-span-4 w-full flex flex-col items-end justify-center gap-6 text-right">
          
          <h1 className="text-white font-black text-5xl lg:text-6xl leading-[1.1] tracking-wide max-w-[500px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Launch tokens,<br/>
            Set milestones,<br/>
            Earn revenue
          </h1>

          <div className="w-full max-w-[350px] bg-white border-2 border-black rounded-[24px] py-16 px-6 shadow-[3px_3px_0px_0px_#000] text-black flex flex-col gap-4">
            <p className="font-bold text-sm md:text-base leading-snug">
              Join the MEMO revolution today. Don't miss your chance to secure tokens before the public launch!
            </p>
            
            <div className="flex flex-col gap-6 w-full">
              <button className="w-full bg-[#494948] text-white font-black py-3 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] text-xs tracking-wider transition hover:bg-[#333]">
                Join the presale Now
              </button>
              <button className="w-full bg-[#494948] text-white font-black py-3 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] text-xs tracking-wider transition hover:bg-[#333]">
                Learn More About Memo
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Footer copyright block */}
      <div className="w-full text-center text-[10px] text-white/40 font-medium mt-12 z-10">
        @copyright 2026 all right reserved by Memo
      </div>
    </section>
  );
}