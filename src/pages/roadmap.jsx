import React from 'react';
import roadmapBg from '../assets/roadmapbg.png';
import presale1 from '../assets/presale1.png';
import coin from '../assets/coin.png';
import elon from '../assets/elon.png';

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pt-[160px] pb-12 px-4 md:px-10 flex flex-col justify-between overflow-x-hidden select-none"
      style={{ backgroundImage: `url(${roadmapBg})` }}
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Main Structural Layout Arena */}
      <div className="w-full max-w-[1840px] mx-auto z-10 flex-1 relative min-h-[750px] lg:min-h-[900px]">

        {/* =========================================================
            DESKTOP VIEW CONTAINER (Hidden on Mobile/Tablet)
           ========================================================= */}
        <div className="hidden lg:block absolute inset-0 w-full h-full">

          {/* ===== SIGNPOST POLE =====
              Positioned at 46% from left to match screenshot.
              Starts at top ~15%, spans ~65% of container height.
          ===== */}
          <div
            className="absolute z-10"
            style={{
              left: 'calc(46% - 6px)',
              top: '15%',
              width: '14px',
              height: '68%',
              background: '#d4c8a0',
              borderRadius: '7px',
              boxShadow: '3px 0 8px rgba(0,0,0,0.35), inset -2px 0 4px rgba(0,0,0,0.15)',
            }}
          />

          {/* ===== PHASE ARROW SIGNS =====
              Left-pointing signs: right edge aligns to pole (left: calc(46% - signWidth))
              Right-pointing signs: left edge starts at pole (left: 46%)
              Sign width ~170px. So left-pointing signs start at calc(46% - 170px).
          ===== */}

          {/* Phase 1 — Left arrow, sits at top of pole (~25% top) */}
          <div
            className="absolute z-20"
            style={{ right: 'calc(54% + 2px)', top: '24%', transform: 'rotate(-1.5deg)' }}
          >
            <div style={{
              background: 'white',
              border: '2.5px solid #1a1a1a',
              padding: '7px 16px 7px 28px',
              fontWeight: 900,
              fontSize: '17px',
              letterSpacing: '0.03em',
              color: '#111',
              clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 14% 100%, 0% 50%)',
              width: '175px',
              textAlign: 'center',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.25)',
            }}>
              ← Phase 1
            </div>
          </div>

          {/* Phase 2 — Right arrow (~33% top) */}
          <div
            className="absolute z-20"
            style={{ left: '46%', top: '33%', transform: 'rotate(1deg)' }}
          >
            <div style={{
              background: 'white',
              border: '2.5px solid #1a1a1a',
              padding: '7px 28px 7px 16px',
              fontWeight: 900,
              fontSize: '17px',
              letterSpacing: '0.03em',
              color: '#111',
              clipPath: 'polygon(0% 0%, 86% 0%, 100% 50%, 86% 100%, 0% 100%)',
              width: '175px',
              textAlign: 'center',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.25)',
            }}>
              Phase 2 →
            </div>
          </div>

          {/* Phase 3 — Left arrow (~53% top) */}
          <div
            className="absolute z-20"
            style={{ right: 'calc(54% + 2px)', top: '52%', transform: 'rotate(-1deg)' }}
          >
            <div style={{
              background: 'white',
              border: '2.5px solid #1a1a1a',
              padding: '7px 16px 7px 28px',
              fontWeight: 900,
              fontSize: '17px',
              letterSpacing: '0.03em',
              color: '#111',
              clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 14% 100%, 0% 50%)',
              width: '175px',
              textAlign: 'center',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.25)',
            }}>
              ← Phase 3
            </div>
          </div>

          {/* Phase 4 — Right arrow (~63% top) */}
          <div
            className="absolute z-20"
            style={{ left: '46%', top: '63%', transform: 'rotate(1.5deg)' }}
          >
            <div style={{
              background: 'white',
              border: '2.5px solid #1a1a1a',
              padding: '7px 28px 7px 16px',
              fontWeight: 900,
              fontSize: '17px',
              letterSpacing: '0.03em',
              color: '#111',
              clipPath: 'polygon(0% 0%, 86% 0%, 100% 50%, 86% 100%, 0% 100%)',
              width: '175px',
              textAlign: 'center',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.25)',
            }}>
              Phase 4 →
            </div>
          </div>

          {/* ===== CARDS ===== */}

          {/* CARD 1: Public Launch — top-left, aligned far left */}
          <div className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black"
            style={{ top: '5%', left: '4%', width: '300px' }}>
            <div className="flex gap-1 flex-wrap mb-3 text-[9px] font-black tracking-tighter">
              {['DEXTools','Telegram','X.com','Etherscan','X.com','Etherscan','DEXTools','Telegram'].map((tag, i) => (
                <span key={i} className="bg-[#9ce4c5] px-2 py-0.5 rounded border border-black/10">{tag}</span>
              ))}
            </div>
            <h3 className="font-black text-lg my-0">Public Launch</h3>
            <p className="text-xs font-bold text-black/60 mt-1 leading-snug">
              Secure listing on major exchanges, liquidity pools established.
            </p>
            <img src={presale1} alt="Rocket" className="h-5 w-auto object-contain mt-2 ml-auto animate-pulse" />
          </div>

          {/* CARD 2: Presale Launch — left, vertically aligned near Phase 3 sign */}
          <div className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black flex items-center gap-3"
            style={{ top: '57%', left: '4%', width: '300px' }}>
            <div className="w-16 h-16 rounded-full bg-[#e3f4ee] border border-black/10 flex-shrink-0 overflow-hidden flex items-center justify-center">
              <img src={coin} alt="Memo Coin" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-black text-lg my-0">Presale Launch</h3>
              <p className="text-xs font-bold text-black/60 mt-1 leading-snug">Token distribution and community building.</p>
              <img src={presale1} alt="Rocket" className="h-5 w-auto object-contain mt-1 animate-pulse" />
            </div>
          </div>

          {/* CARD 3: Growth — top-right, starts roughly at 60% from left */}
          <div className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black"
            style={{ top: '3%', left: '60%', width: '420px' }}>
            <div className="grid gap-3 mb-3" style={{ gridTemplateColumns: '1fr auto' }}>
              {/* Left: pay/receive + connect wallet */}
              <div className="bg-[#f3a4a4] rounded-xl p-3 border border-black/10 flex flex-col gap-2 text-[11px] font-black">
                <div className="flex justify-between"><span>YOU PAY:</span><span className="underline">100</span></div>
                <div className="flex justify-between"><span>YOU RECEIVE:</span><span>100,000</span></div>
                <button className="w-full mt-1 bg-[#1a1a2e] text-white text-[10px] font-black py-2 rounded-lg tracking-wider hover:bg-[#16213e] transition-colors">
                  Connect Wallet
                </button>
              </div>
              {/* Right: timer + NET */}
              <div className="bg-[#1e1e1e] text-white rounded-xl flex flex-col items-center justify-center py-3 px-3 gap-2 min-w-[130px]">
                <span className="text-sm font-black tracking-widest whitespace-nowrap">05 : 12 : 35 : 17</span>
                <span className="text-[8px] opacity-40 tracking-tighter">DAYS HRS MIN SEC</span>
                <button className="bg-[#9ce4c5] text-black text-[10px] font-black px-5 py-1 rounded-lg tracking-widest hover:bg-[#7dd4b0] transition-colors">
                  NET
                </button>
              </div>
            </div>
            <h3 className="font-black text-lg my-0">Growth</h3>
            <p className="text-xs font-bold text-black/60 mt-1 leading-snug">
              Staking platform release, community rewards programs, NET integration.
            </p>
            <img src={presale1} alt="Rocket" className="h-5 w-auto object-contain mt-1 ml-auto" />
          </div>

          {/* CARD 4: Global Expansion — right side, below Phase 4 sign */}
          <div className="absolute z-20 bg-white border border-black/10 rounded-[20px] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] text-black"
            style={{ top: '68%', left: '47%', width: '310px' }}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-black text-lg my-0">Global Expansion</h3>
              <div className="bg-[#b6ebd4] border border-black/20 text-[9px] font-black px-1.5 py-0.5 rounded text-[#124b6e] whitespace-nowrap ml-2">MEMO MAX</div>
            </div>
            <p className="text-xs font-bold text-black/60 leading-snug">
              Partnerships, governance integration, ecosystem enhancements.
            </p>
            <img src={presale1} alt="Rocket" className="h-5 w-auto object-contain mt-2" />
          </div>

          {/* ELON IMAGE */}
          <div className="absolute pointer-events-none z-10"
            style={{ width: '780px', height: '420px', bottom: '-180px', right: '-220px' }}>
            <img src={elon} alt="Elon Musk Illustration" className="w-full h-full object-contain object-bottom object-right" />
          </div>

          {/* Speech bubble near Elon */}
          <div className="absolute z-30 bg-white border-2 border-black/70 rounded-full px-3 py-1 text-[10px] font-black text-black"
            style={{ bottom: '26%', right: '20%' }}>
            ← PHASE 1
          </div>

        </div>

        {/* =========================================================
            MOBILE & TABLET VIEW CONTAINER (Stacked Vertically)
           ========================================================= */}
        <div className="lg:hidden w-full max-w-[550px] mx-auto flex flex-col gap-6 mt-6">
          <div className="bg-white border border-black/10 rounded-[24px] p-5 text-black shadow-md">
            <span className="text-[10px] font-black text-[#125875] tracking-widest block mb-1">PHASE 01</span>
            <h3 className="font-black text-lg my-0">Public Launch</h3>
            <p className="text-xs font-medium text-black/70 mt-1">Secure listing on major exchanges, liquidity pools established.</p>
          </div>

          <div className="bg-white border border-black/10 rounded-[24px] p-5 text-black shadow-md">
            <span className="text-[10px] font-black text-[#125875] tracking-widest block mb-1">PHASE 02</span>
            <h3 className="font-black text-lg my-0">Growth</h3>
            <p className="text-xs font-medium text-black/70 mt-1">Staking platform release, community rewards programs, NET integration.</p>
          </div>

          <div className="bg-white border border-black/10 rounded-[24px] p-5 text-black shadow-md">
            <span className="text-[10px] font-black text-[#125875] tracking-widest block mb-1">PHASE 03</span>
            <h3 className="font-black text-lg my-0">Presale Launch</h3>
            <p className="text-xs font-medium text-black/70 mt-1">Token distribution and community building.</p>
          </div>

          <div className="bg-white border border-black/10 rounded-[24px] p-5 text-black shadow-md">
            <span className="text-[10px] font-black text-[#125875] tracking-widest block mb-1">PHASE 04</span>
            <h3 className="font-black text-lg my-0">Global Expansion</h3>
            <p className="text-xs font-medium text-black/70 mt-1">Partnerships, governance integration, ecosystem enhancements.</p>
          </div>

          <div className="w-full max-w-[280px] mx-auto mt-4 opacity-90">
            <img src={elon} alt="Elon" className="w-full h-auto object-contain" />
          </div>
        </div>

      </div>

      {/* Footer copyright anchor */}
      <div className="w-full text-center text-[10px] text-white/40 font-medium z-10 mt-12">
        @copyright 2026 all right reserved by Memo
      </div>
    </section>
  );
}