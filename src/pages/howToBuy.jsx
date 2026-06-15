import React from 'react';
import PresaleCard from '../components/PresaleCard'; // Imported your reusable component

// Import sequential imagery matching your renamed assets file naming format
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

export default function HowToBuy() {
  const stepsData = [
    { num: '1.', title: 'Create a crypto wallet', img: img1 },
    { num: '2.', title: 'Fund your wallet with eth/usdt', img: img2 },
    { num: '3.', title: 'Connect to the memo', img: img3 },
    { num: '4.', title: 'Buy memo', img: img4 }
  ];

  return (
    <section 
      id="how-to-buy" 
      className="relative w-full min-h-screen bg-gradient-to-b from-[#222222] to-[#3a3a3a] pt-[160px] pb-12 px-4 md:px-10 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Core Split Master Grid Layout Wrapper Container */}
      <div className="w-full max-w-[1840px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start z-10 flex-1">
        
        {/* ================= LEFT SIDE BLOCK: HEADER AND 2x2 STEP CARDS ================= */}
        <div className="w-full lg:col-span-8 flex flex-col gap-8">
          
          {/* Main Big Heading */}
          <h1 
            className="text-[#f3a4a4] font-black text-3xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-wider uppercase my-0 text-left max-w-[700px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            style={{ fontFamily: 'var(--heading)' }}
          >
            HOW TO PARTICIPATE <br />
            IN THE PRESALE
          </h1>

          {/* 2x2 Step Card Dynamic Layout Framework */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {stepsData.map((step) => (
              <div 
                key={step.num}
                className="w-full bg-white border border-black/10 rounded-[24px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] flex flex-col gap-4 text-black transition transform hover:-translate-y-1"
              >
                {/* Step Index String Title Header Row */}
                <h3 className="font-black text-lg md:text-xl tracking-tight my-0 flex items-center gap-1.5">
                  <span>{step.num}</span>
                  <span className="capitalize">{step.title}</span>
                </h3>

                {/* Styled Crop Container Image Graphic Holder */}
                <div className="w-full h-[140px] md:h-[160px] rounded-[20px] overflow-hidden border border-black/5 shadow-inner">
                  <img 
                    src={step.img} 
                    alt={`Presale Step Layout Graphic ${step.num}`} 
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= RIGHT SIDE BLOCK: CORE TOKEN PRESALE SWAP CARD ================= */}
        <div className="w-full lg:col-span-4 flex justify-center lg:justify-end mt-8 lg:mt-0">
          
          {/* =========================================================================
              EXCLUSIVELY POSITION THE PRESALE CARD HERE
              - Change the 'top' pixel value to push the card down or pull it up.
              - Change the 'left' pixel value to tweak horizontal alignment independently.
             ========================================================================= */}
          <div 
            className="relative w-full flex justify-center lg:justify-end z-10"
            style={{
              top: '40px',   // Increase this value to push the card down, or use negative numbers to pull it up
              left: '0px'    // Tweak horizontal alignment
            }}
          >
            <PresaleCard />
          </div>

        </div>

      </div>

      {/* Ground Footer Base Line String Section */}
      <div className="w-full text-center text-[10px] text-white/40 font-medium z-10 mt-12">
        @copyright 2026 all right reserved by Memo
      </div>
    </section>
  );
}