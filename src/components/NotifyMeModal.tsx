import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Check, Send } from 'lucide-react';
import { Product } from '../types';

interface NotifyMeModalProps {
  isOpen: boolean;
  product: Product | null;
  selectedSize: string;
  onClose: () => void;
}

export const NotifyMeModal: React.FC<NotifyMeModalProps> = ({
  isOpen,
  product,
  selectedSize,
  onClose,
}) => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length < 10) {
      setError('Enter a valid 10-digit WhatsApp number');
      return;
    }
    setError('');
    setSubmitted(true);

    // Open WhatsApp to the store notifying them
    const msg = `Hi! I'm interested in "${product?.name}" in size ${selectedSize} but it's out of stock. Please notify me on ${phone} when it's restocked. Thanks!`;
    setTimeout(() => {
      window.open(`https://wa.me/919848988295?text=${encodeURIComponent(msg)}`, '_blank');
    }, 800);
  };

  const handleClose = () => {
    setSubmitted(false);
    setPhone('');
    setError('');
    onClose();
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="bg-[#111] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F5B301] flex items-center justify-center">
                  <Bell className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Notify Me When Restocked</p>
                  <p className="text-zinc-400 text-[11px]">We'll WhatsApp you instantly!</p>
                </div>
              </div>
              <button onClick={handleClose} className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-5">
              {!submitted ? (
                <>
                  {/* Product info */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-100 mb-5">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-black text-[#111] line-clamp-1">{product.name}</p>
                      <p className="text-[11px] text-zinc-500 mt-0.5">Size: <strong className="text-[#111]">{selectedSize}</strong></p>
                      <p className="text-[11px] text-red-500 font-bold mt-0.5">Currently Out of Stock</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1.5">
                        Your WhatsApp Number
                      </label>
                      <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden focus-within:border-[#25D366] transition-colors">
                        <span className="px-3 py-2.5 bg-zinc-50 border-r border-zinc-200 text-sm font-bold text-zinc-600">+91</span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="9848988295"
                          maxLength={10}
                          className="flex-1 px-3 py-2.5 text-sm text-[#111] outline-none bg-white"
                        />
                      </div>
                      {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-black text-sm hover:bg-green-600 transition-colors"
                    >
                      <Bell className="w-4 h-4" />
                      Notify Me via WhatsApp
                    </button>
                  </form>

                  <p className="text-[10px] text-zinc-400 text-center mt-3">
                    We'll send you a WhatsApp message the moment this item is back in stock. No spam, ever.
                  </p>
                </>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-base font-black text-[#111]">You're on the list! 🎉</h3>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                    We'll WhatsApp you at <strong className="text-[#111]">{phone}</strong> the moment <strong className="text-[#111]">{product.name}</strong> (Size: {selectedSize}) is back in stock!
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full bg-[#111] text-white font-bold text-xs hover:bg-[#F5B301] hover:text-black transition-all"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
