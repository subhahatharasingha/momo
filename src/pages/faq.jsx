import React, { useState } from 'react';
import faqBg from '../assets/faqbg.png';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "WHER CAN I GET MEMO NFTS?",
      answer: "THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE. THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE."
    },
    {
      question: "WHAT MAKE MEMO COIN UNIQUE?",
      answer: "THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE. THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE."
    },
    {
      question: "HOW CAN I PARTICIPATE IN AIRDROPS?",
      answer: "THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE. THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE."
    },
    {
      question: "IS THERE A PARSALE FOR MEMO COIN?",
      answer: "THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE. THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE."
    },
    {
      question: "WHAT'S THE TUTRE OF MEMO COIN?",
      answer: "THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE. THIS IS A SHORT EXPLANATION. MAKE IT SHORT AND CLEAR TO KEEP STUDENTS ATTENTIVE."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative w-full min-h-screen bg-black bg-cover bg-center bg-no-repeat pt-[160px] pb-12 px-4 md:px-10 flex flex-col justify-between overflow-hidden select-none"
      style={{ backgroundImage: `url(${faqBg})` }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[1840px] mx-auto z-10 flex flex-col items-center justify-center flex-1 gap-12">
        
        {/* Title Header */}
        <h1 
          className="text-white font-black text-5xl md:text-7xl lg:text-[80px] tracking-widest uppercase my-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: 'var(--heading)' }}
        >
          FAQ
        </h1>

        {/* Horizontal Slider Wrapper Layout */}
        <div className="w-full overflow-x-auto flex gap-6 pb-6 pt-2 px-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
          
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            // The 3rd card (index 2) is always pink
            const isPinkCard = index === 2;

            return (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                // Fixed: Explicit pixel widths & heights mapped directly from Figma parameters
                className={`w-[308px] h-[353px] border-2 border-black rounded-[20px] p-6 shadow-[4px_4px_0px_0px_#000] cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between snap-start shrink-0 ${
                  isPinkCard 
                    ? 'bg-[#db9393] text-black' 
                    : 'bg-white text-black'
                }`}
              >
                {/* Question Text */}
                <h3 
                  className="font-black text-lg md:text-xl lg:text-[22px] leading-tight tracking-wide uppercase text-center my-0"
                  style={{ fontFamily: 'var(--heading)' }}
                >
                  {item.question}
                </h3>

                {/* Accordion Expandable Answer Area */}
                <div className={`overflow-hidden transition-all duration-300 flex-1 flex flex-col justify-center ${
                  isOpen ? 'max-h-[180px] opacity-100 my-2' : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                  <p 
                    className="text-[11px] lg:text-xs font-black leading-relaxed tracking-wider text-center max-w-full uppercase opacity-90 line-clamp-6"
                    style={{ fontFamily: 'var(--sans)' }}
                  >
                    {item.answer}
                  </p>
                </div>

                {/* Arrow Selector Toggle */}
                <div className="w-full flex justify-center mt-auto pt-2">
                  <span className={`text-xl lg:text-2xl font-black transition-transform duration-300 transform ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}>
                    ▼
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Footer copyright block */}
      <div className="w-full text-center text-[10px] text-white/40 font-medium z-10 mt-12">
        @copyright 2026 all right reserved by Memo
      </div>
    </section>
  );
}