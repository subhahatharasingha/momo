import React from 'react';

export default function PresaleCard() {
  const timerData = [
    { val: '05', label: 'DAYS' },
    { val: '12', label: 'HOURS' },
    { val: '35', label: 'MINUTES' },
    { val: '17', label: 'SECONDS' }
  ];

  return (
    /* FIXED SIZE: Changed max-w-[440px] to max-w-[390px] so it stays identical on all pages */
    <div className="w-full max-w-[390px] bg-[#9ce4c5] border-2 border-black rounded-[32px] p-5 md:p-6 shadow-[4px_4px_0px_0px_#000] text-center flex flex-col gap-4 text-black select-none">
      <span className="text-xs font-black tracking-wider uppercase block">
        GRAB IT NOW BEFORE THE COST GOES UP!
      </span>

      {/* Timer Blocks */}
      <div className="flex items-center justify-between my-2 px-1">
        {timerData.map((time, i) => (
          <div key={time.label} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div className="w-full bg-[#5984c3] text-white font-black text-xl py-2 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] text-center">
                {time.val}
              </div>
              <span className="text-[9px] font-black mt-1 text-black/70 tracking-tight">{time.label}</span>
            </div>
            {i < 3 && (
              <span className="font-black text-xl text-black mx-2 mb-4 self-center">:</span>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs font-black text-black/80">Until Next Price Increase</p>

      {/* Progress Bar Container */}
      <div className="w-full mt-1">
        <div className="w-full bg-white border border-black h-5 rounded-full overflow-hidden p-[2px]">
          <div className="bg-[#124b6e] h-full rounded-full w-[65%]" />
        </div>
        <div className="flex justify-between items-center text-[10px] font-black mt-1 px-1">
          <span>USDT RAISED :</span>
          <span>$124,218,435</span>
        </div>
      </div>

      {/* Swap Rate Details */}
      <div className="text-xs font-black space-y-1 my-1">
        <p>You purchased: <span className="underline">100,000,000 $GMF</span></p>
        <p>1 $GMF = $ 0.01</p>
      </div>

      {/* Crypto Select Token Bar */}
      <button className="w-full bg-[#162a35] text-white font-black py-2.5 rounded-xl border border-black shadow-[2px_2px_0px_0px_#000] tracking-wider text-sm transition hover:brightness-110">
        ETH
      </button>

      {/* Inputs Block */}
      <div className="grid grid-cols-2 gap-3 text-left">
        <div>
          <label className="text-[10px] font-black block mb-1">YOU PAY</label>
          <input type="text" defaultValue="100" className="w-full bg-[#b6ebd4] border border-black rounded-xl p-2 font-black text-sm focus:outline-none" />
        </div>
        <div>
          <label className="text-[10px] font-black block mb-1">YOU RECEIVE</label>
          <div className="relative">
            <input type="text" defaultValue="100,000" className="w-full bg-[#b6ebd4] border border-black rounded-xl p-2 pr-12 font-black text-sm focus:outline-none" />
            <span className="absolute right-3 top-2.5 text-[10px] font-black text-black/50">$GMF</span>
          </div>
        </div>
      </div>

      {/* Action Call Button */}
      <button className="w-full bg-[#125875] text-white font-black py-3 rounded-xl border border-black shadow-[3px_3px_0px_0px_#000] mt-2 transition hover:brightness-110 text-sm tracking-wide">
        Connect Wallet
      </button>
    </div>
  );
}