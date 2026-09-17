import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ShoppingBag, Clock, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/products';

const QUICK_REPLIES = [
  { label: '👕 Baggy Shirts @ ₹400', msg: 'Hi! I want to see Baggy Shirts at Flat ₹400 offer.' },
  { label: '👖 Korean Pants @ ₹400', msg: 'Hi! I want to see Korean Baggy Pants at Flat ₹400.' },
  { label: '👗 Women\'s Gowns', msg: 'Hi! I am interested in Ladies Designer Gowns & Kurtis.' },
  { label: '👶 Kids Wear', msg: 'Hi! I want to see Kids Wear collection for boys & girls.' },
  { label: '📦 Track My Order', msg: 'Hi! I want to track my order. Please help.' },
  { label: '📏 Size Help', msg: 'Hi! I need help with sizing before I order.' },
];

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Auto-show greeting bubble after 4 seconds
  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  // Auto-hide bubble after 12 seconds
  useEffect(() => {
    if (!showBubble) return;
    const timer = setTimeout(() => {
      if (!isOpen) setShowBubble(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, [showBubble, isOpen]);

  const handleQuickReply = (msg: string) => {
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      {/* ── Chat Popup Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="w-80 rounded-2xl overflow-hidden shadow-2xl border border-black/10"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm">
                  DG
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">N. Shaiksha Vali</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <p className="text-green-100 text-[11px]">Online · DIL Garments, Tadipatri</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-[#ECE5DD] px-4 py-4 space-y-3">
              {/* Store message bubble */}
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[10px] font-black flex-shrink-0 mt-0.5">
                  DG
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm px-3.5 py-2.5 shadow-sm max-w-[220px]">
                  <p className="text-[#111] text-xs leading-relaxed">
                    👋 <strong>Hi there!</strong> Welcome to <strong>DIL Garments</strong>!<br /><br />
                    I'm <strong>N. Shaiksha Vali</strong>. How can I help you today?<br /><br />
                    🔥 <span className="text-red-600 font-bold">Baggy Shirts & Pants @ ₹400</span> available now!
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-1 text-right">Now · WhatsApp</p>
                </div>
              </div>

              {/* Quick reply chips */}
              <div className="space-y-1.5 pl-9">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Quick Replies:</p>
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => handleQuickReply(qr.msg)}
                    className="flex w-full items-center gap-2 px-3 py-2 rounded-xl bg-white text-[#111] text-xs font-semibold shadow-sm hover:bg-[#25D366] hover:text-white transition-all text-left"
                  >
                    <Send className="w-3 h-3 flex-shrink-0" />
                    {qr.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white px-4 py-3 flex items-center gap-2 border-t border-zinc-100">
              <div className="flex-1 bg-zinc-100 rounded-full px-3 py-2 text-xs text-zinc-400">
                Type a message...
              </div>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#25D366] text-white hover:bg-green-600 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Auto-Greeting Bubble ── */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="flex items-end gap-2"
          >
            {/* Dismiss button */}
            <button
              onClick={() => { setShowBubble(false); setDismissed(true); }}
              className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center mb-1 hover:bg-zinc-300 transition-colors"
            >
              <X className="w-3 h-3 text-zinc-600" />
            </button>
            <button
              onClick={() => { setIsOpen(true); setShowBubble(false); }}
              className="max-w-[240px] bg-white rounded-2xl rounded-br-sm px-4 py-3 shadow-xl border border-zinc-100 text-left hover:shadow-2xl transition-shadow"
            >
              <p className="text-xs font-bold text-[#111] mb-1">👋 Hello from DIL Garments!</p>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                🔥 <span className="text-red-600 font-semibold">Baggy Shirts & Pants @ ₹400!</span><br />
                Tap to chat with us on WhatsApp.
              </p>
              <div className="flex items-center gap-1 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                <span className="text-[10px] text-[#25D366] font-bold">Online Now</span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating WhatsApp Button ── */}
      <motion.button
        onClick={() => { setIsOpen(!isOpen); setShowBubble(false); }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.5)] flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7 fill-white" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Unread dot */}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-black flex items-center justify-center border-2 border-white">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
};
