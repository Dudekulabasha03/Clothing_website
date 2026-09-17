import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Clock, ShoppingBag, ArrowRight, Zap } from 'lucide-react';

interface CountdownTimerProps {
  onScrollToFlat400: () => void;
}

function getTimeLeft() {
  // Reset sale every 24 hours at midnight
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = end.getTime() - now.getTime();
  const h = Math.floor(diff / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);
  return { h, m, s };
}

const Digit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-14 h-14 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="text-2xl font-black text-[#F5B301] font-mono tabular-nums absolute"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mt-1">{label}</span>
  </div>
);

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ onScrollToFlat400 }) => {
  const [time, setTime] = useState(getTimeLeft());
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
      setPulse(p => !p);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#111] py-8 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Left: Offer info */}
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-[11px] font-black uppercase tracking-widest mb-2 animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-red-400" />
              Today's Flat ₹400 Drop — Ends Tonight
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Baggy Shirts &amp; Pants <span className="text-[#F5B301]">@ ₹400</span>
            </h3>
            <p className="text-zinc-500 text-xs mt-1">Limited stock. Grab before it's gone!</p>
          </div>

          {/* Center: Countdown clock */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Digit value={time.h} label="HRS" />
              <span className={`text-2xl font-black text-white/60 mb-4 transition-opacity ${pulse ? 'opacity-100' : 'opacity-20'}`}>:</span>
              <Digit value={time.m} label="MIN" />
              <span className={`text-2xl font-black text-white/60 mb-4 transition-opacity ${pulse ? 'opacity-100' : 'opacity-20'}`}>:</span>
              <Digit value={time.s} label="SEC" />
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col items-center sm:items-end gap-2">
            <button
              onClick={onScrollToFlat400}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5B301] text-black font-black text-sm uppercase tracking-wider hover:bg-white transition-all shadow-lg"
            >
              <Zap className="w-4 h-4 fill-black" />
              Shop ₹400 Deals
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-zinc-600 font-mono">Free delivery above ₹999</p>
          </div>

        </div>
      </div>
    </section>
  );
};
