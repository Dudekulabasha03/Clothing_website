import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Sparkles, Check, ArrowRight, Zap, Flame } from 'lucide-react';
import { Product } from '../types';
import { formatINR } from '../lib/utils';
import { useStore } from '../context/StoreContext';

interface ComboBundleSectionProps {
  products: Product[];
  onAddToCart: (product: Product, size: string) => void;
  onOpenProduct: (product: Product) => void;
}

export const ComboBundleSection: React.FC<ComboBundleSectionProps> = ({
  products,
  onAddToCart,
  onOpenProduct
}) => {
  const { comboConfig } = useStore();

  // If combo deal is disabled in admin, hide it
  if (!comboConfig.enabled) return null;

  // Resolve items from comboConfig or fallback to top categories
  const comboShirt = products.find(p => p.id === comboConfig.item1Id) ||
    products.find(p => p.category === 'baggy-shirts') || products[0];
  const comboPant = products.find(p => p.id === comboConfig.item2Id) ||
    products.find(p => p.category === 'baggy-pants') || products[1];

  const [shirtSize, setShirtSize] = useState<string>('L');
  const [pantSize, setPantSize] = useState<string>('32');
  const [added, setAdded] = useState(false);

  if (!comboShirt || !comboPant) return null;

  const originalTotal = comboShirt.price + comboPant.price;
  const bundlePrice = comboConfig.bundlePrice || 750;
  const savings = Math.max(0, originalTotal - bundlePrice);

  const handleAddBundle = () => {
    // Add shirt
    onAddToCart(comboShirt, shirtSize);
    // Add pant
    onAddToCart(comboPant, pantSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="py-16 bg-[#FBFBFB] border-y border-zinc-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-[11px] font-black uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 fill-red-500" />
            {comboConfig.badge || 'Streetwear Bundle Deal'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111]">
            {comboConfig.title || 'COMPLETE THE FIT COMBO'}
          </h2>
          <p className="text-zinc-500 text-sm">
            {comboConfig.description || `Pair an Oversized Baggy Shirt + Korean Baggy Pants for just ₹${bundlePrice}`}
          </p>
        </div>

        {/* Combo Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

            {/* 1. Shirt Preview (Spans 5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div
                onClick={() => onOpenProduct(comboShirt)}
                className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 cursor-pointer shadow-sm mb-3"
              >
                <img
                  src={comboShirt.imageUrl}
                  alt={comboShirt.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#111] text-white text-[10px] font-black uppercase">
                  Item 1: Baggy Shirt
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-black text-xs font-black font-mono shadow-sm">
                  {formatINR(comboShirt.price)}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#111] line-clamp-1">{comboShirt.name}</h3>

              {/* Shirt Size Selector */}
              <div className="mt-3 flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-zinc-400 mr-1">Shirt Size:</span>
                {['S', 'M', 'L', 'XL', 'XXL'].map(sz => (
                  <button
                    key={sz}
                    onClick={() => setShirtSize(sz)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                      shirtSize === sz ? 'bg-[#111] text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* PLUS Icon divider (Spans 2 cols) */}
            <div className="md:col-span-2 flex flex-col items-center justify-center py-2">
              <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-md font-black">
                <Plus className="w-6 h-6 stroke-[3]" />
              </div>
              <span className="text-[11px] font-black text-amber-600 uppercase tracking-wider mt-2">
                MATCH & SAVE
              </span>
            </div>

            {/* 2. Pant Preview (Spans 5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div
                onClick={() => onOpenProduct(comboPant)}
                className="group relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 cursor-pointer shadow-sm mb-3"
              >
                <img
                  src={comboPant.imageUrl}
                  alt={comboPant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#111] text-white text-[10px] font-black uppercase">
                  Item 2: Korean Pants
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-black text-xs font-black font-mono shadow-sm">
                  {formatINR(comboPant.price)}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#111] line-clamp-1">{comboPant.name}</h3>

              {/* Pant Size Selector */}
              <div className="mt-3 flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-zinc-400 mr-1">Pant Waist:</span>
                {['28', '30', '32', '34', '36'].map(sz => (
                  <button
                    key={sz}
                    onClick={() => setPantSize(sz)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                      pantSize === sz ? 'bg-[#111] text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Bundle Footer with Price & 1-Click Buy */}
          <div className="mt-8 pt-6 border-t border-zinc-150 flex flex-col sm:flex-row items-center justify-between gap-4 bg-amber-50/50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-3xl">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs text-zinc-400 font-bold line-through">
                  Regular: {formatINR(originalTotal)}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase">
                  Save {formatINR(savings)}
                </span>
              </div>
              <div className="text-3xl font-black text-[#111] font-mono mt-0.5">
                Combo: <span className="text-red-600">{formatINR(bundlePrice)}</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Includes 1x Shirt ({shirtSize}) + 1x Pants ({pantSize})
              </p>
            </div>

            <button
              onClick={handleAddBundle}
              disabled={added}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-[#111] text-white hover:bg-[#F5B301] hover:text-black'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" /> Both Items Added to Bag!
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current" /> Add Complete Fit to Bag (₹750)
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
