import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  ShieldCheck,
  Tag
} from 'lucide-react';
import { CartItem } from '../types';
import { formatINR } from '../lib/utils';
import { useStore } from '../context/StoreContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, quantity: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onProceedCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout
}) => {
  const { applyCoupon } = useStore();
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState<{ valid: boolean; text: string } | null>(null);

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const freeShippingThreshold = 999;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput, subtotal);
    if (res.valid) {
      setAppliedCoupon(res.coupon?.code || couponInput);
      setAppliedDiscount(res.discount);
      setCouponMsg({ valid: true, text: res.message });
    } else {
      setCouponMsg({ valid: false, text: res.message });
    }
  };

  const handleApplyCode = (code: string) => {
    const res = applyCoupon(code, subtotal);
    if (res.valid) {
      setAppliedCoupon(code);
      setAppliedDiscount(res.discount);
      setCouponMsg({ valid: true, text: res.message });
    } else {
      setCouponMsg({ valid: false, text: res.message });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-zinc-950 border-l border-white/10 text-white flex flex-col justify-between shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#F5B301]" />
                  <h2 className="text-lg font-bold font-display uppercase tracking-wide">
                    Your Shopping Bag ({items.length})
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="px-6 py-3 bg-zinc-900/70 border-b border-white/5">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Truck className="w-3.5 h-3.5 text-[#D1FE17]" />
                    {remainingForFreeShipping === 0 ? (
                      <strong className="text-[#D1FE17]">🎉 You unlocked FREE Shipping!</strong>
                    ) : (
                      <span>Add <strong className="text-white">{formatINR(remainingForFreeShipping)}</strong> more for Free Delivery</span>
                    )}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400">
                    {Math.round(progressToFreeShipping)}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#F5B301] to-[#D1FE17] rounded-full transition-all duration-500"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <ShoppingBag className="w-12 h-12 text-zinc-700 mx-auto" />
                    <p className="text-zinc-400 text-sm">Your shopping bag is currently empty.</p>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl bg-[#F5B301] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div 
                      key={`${item.product.id}-${item.selectedSize}`}
                      className="p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5 flex gap-3.5 items-center"
                    >
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-18 h-22 object-cover rounded-xl bg-zinc-950 shrink-0"
                      />
                      <div className="flex-1 min-w-0 space-y-1">
                        <h4 className="text-xs font-bold text-white line-clamp-1">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
                          <span>Size: <strong className="text-zinc-200">{item.selectedSize}</strong></span>
                          <span>•</span>
                          <span className="text-[#F5B301] font-bold">{formatINR(item.product.price)}</span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 pt-1">
                          <div className="flex items-center rounded-lg bg-zinc-800 border border-white/10 overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                              className="p-1 hover:bg-zinc-700 text-zinc-300"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-mono font-bold text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                              className="p-1 hover:bg-zinc-700 text-zinc-300"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                            className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors ml-auto"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-zinc-950 space-y-4">
                  {/* Live Coupon Input */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => { setCouponInput(e.target.value.toUpperCase()); setCouponMsg(null); }}
                        placeholder="Coupon code (e.g. FLAT100)"
                        className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs uppercase font-mono outline-none focus:border-[#F5B301]"
                      />
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="px-4 py-2 rounded-xl bg-[#F5B301] text-black font-black text-xs uppercase hover:bg-white transition-colors"
                      >
                        Apply
                      </button>
                    </div>

                    {/* Quick Available Coupons Chips */}
                    {!appliedCoupon && (
                      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                        <span className="text-[10px] text-zinc-500 font-bold">Try:</span>
                        {['FLAT100', 'DIWALI20', 'NEWUSER50'].map(code => (
                          <button
                            key={code}
                            type="button"
                            onClick={() => { setCouponInput(code); handleApplyCode(code); }}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-[#F5B301] hover:bg-white/10"
                          >
                            {code}
                          </button>
                        ))}
                      </div>
                    )}

                    {couponMsg && (
                      <p className={`text-[11px] font-bold ${couponMsg.valid ? 'text-green-400' : 'text-red-400'}`}>
                        {couponMsg.text}
                      </p>
                    )}
                  </div>

                  {/* Subtotal breakdown */}
                  <div className="space-y-1.5 text-sm">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span>Subtotal</span>
                      <span className="font-mono text-white font-bold">{formatINR(subtotal)}</span>
                    </div>

                    {appliedDiscount > 0 && (
                      <div className="flex items-center justify-between text-green-400 text-xs font-bold">
                        <span>Coupon Discount ({appliedCoupon})</span>
                        <span className="font-mono">- {formatINR(appliedDiscount)}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-zinc-400 text-xs">
                      <span>Shipping</span>
                      <span className="text-[#D1FE17] font-semibold">
                        {remainingForFreeShipping === 0 ? 'FREE' : '₹49'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-base pt-2 border-t border-white/10 font-bold">
                      <span className="text-white">Total Amount</span>
                      <span className="font-mono text-[#F5B301] text-lg">
                        {formatINR(Math.max(0, subtotal - appliedDiscount + (remainingForFreeShipping === 0 ? 0 : 49)))}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => {
                      onClose();
                      onProceedCheckout();
                    }}
                    className="w-full py-4 rounded-xl bg-[#F5B301] hover:bg-[#ffc117] text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,179,1,0.3)] transition-all"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Cash on Delivery & WhatsApp Confirmation Available</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
