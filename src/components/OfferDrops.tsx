import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, ShoppingBag, Eye, Zap, Check } from 'lucide-react';
import { Product } from '../types';
import { formatINR } from '../lib/utils';

interface OfferDropsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const OfferDrops: React.FC<OfferDropsProps> = ({
  products,
  onSelectProduct,
  onAddToCart
}) => {
  // Flash sale countdown timer (e.g. 5 hours left)
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 19
  });

  const [addedItem, setAddedItem] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const offerProducts = products.filter(p => p.isOfferDrop).slice(0, 4);

  const handleQuickAdd = (product: Product, defaultSize: string) => {
    onAddToCart(product, defaultSize);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black via-zinc-950 to-[#0c0c0c] border-y border-white/5 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#F5B301]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Countdown */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5 fill-red-400 animate-bounce" />
              <span>Limited Time Drop</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
              TODAY'S OFFER DROPS
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Deepest discounts on hero checked flannels, parachute pants & designer gowns.
            </p>
          </div>

          {/* Countdown Clock (21st.dev style glass badge) */}
          <div className="flex items-center gap-2 bg-zinc-900/90 border border-white/10 px-4 py-2.5 rounded-xl shadow-lg">
            <Clock className="w-4 h-4 text-[#F5B301] animate-pulse" />
            <span className="text-xs font-mono uppercase text-zinc-400">Ends In:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-sm text-white">
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[#F5B301]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[#F5B301]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[#F5B301]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerProducts.map((product) => {
            const isAdded = addedItem === product.id;

            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-[#F5B301]/60 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-sm transition-colors"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-red-600 text-white text-[11px] font-extrabold uppercase tracking-wide shadow-md">
                    {product.discountPercentage}% OFF
                  </div>

                  {/* Stock counter pill */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[#D1FE17] text-[10px] font-mono font-semibold border border-white/10">
                    ⚡ Only {product.stockCount} left
                  </div>

                  {/* Quick View Button on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs flex items-center gap-2 hover:bg-[#F5B301] transition-colors shadow-2xl"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#F5B301] font-semibold tracking-wider">
                      {product.division === 'gents' ? "Men's Collection" : product.division === 'kids' ? "Kidswear" : "Ladies Gown"}
                    </div>
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="text-sm font-bold text-white line-clamp-1 mt-0.5 hover:text-[#F5B301] cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>
                  </div>

                  {/* Price & Savings */}
                  <div className="flex items-baseline justify-between pt-1 border-t border-white/5">
                    <div>
                      <span className="text-lg font-extrabold text-white font-mono">
                        {formatINR(product.price)}
                      </span>
                      <span className="text-xs text-zinc-500 line-through ml-2 font-mono">
                        {formatINR(product.originalPrice)}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#D1FE17]">
                      Save {formatINR(product.originalPrice - product.price)}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleQuickAdd(product, product.sizes[0] || 'M')}
                    disabled={isAdded}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-[#25D366] text-black'
                        : 'bg-zinc-800 hover:bg-[#F5B301] text-zinc-200 hover:text-black'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Grab Deal ({product.sizes[0] || 'M'})</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
