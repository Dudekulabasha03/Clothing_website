import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Ruler, Check, ChevronRight, User, Activity } from 'lucide-react';
import { Product } from '../types';

interface FindMyFitModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onSelectSize: (size: string) => void;
  currentSelectedSize?: string;
}

export const FindMyFitModal: React.FC<FindMyFitModalProps> = ({
  isOpen,
  onClose,
  product,
  onSelectSize,
  currentSelectedSize
}) => {
  // Height in cm (default: 173 cm ~ 5'8")
  const [heightCm, setHeightCm] = useState<number>(173);
  // Weight in kg (default: 68 kg)
  const [weightKg, setWeightKg] = useState<number>(68);
  // Fit preference
  const [fitPreference, setFitPreference] = useState<'oversized' | 'regular' | 'slim'>('oversized');

  // Convert cm to feet and inches string
  const heightFeetInches = useMemo(() => {
    const totalInches = heightCm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
  }, [heightCm]);

  // Determine if product is bottom wear or top wear
  const isBottomWear = useMemo(() => {
    const cat = (product.category || '').toLowerCase();
    return cat.includes('pant') || cat.includes('cargo') || cat.includes('track') || cat.includes('trouser') || cat.includes('jean');
  }, [product.category]);

  const isKids = product.division === 'kids';

  // Smart size calculator
  const recommendation = useMemo(() => {
    const availableSizes = product.sizes && product.sizes.length > 0 ? product.sizes : ['M', 'L', 'XL', 'XXL'];

    if (isKids) {
      let rec = availableSizes[0] || 'M';
      if (heightCm > 140) rec = availableSizes[Math.min(availableSizes.length - 1, 2)] || 'XL';
      else if (heightCm > 125) rec = availableSizes[1] || 'L';
      return {
        size: rec,
        matchScore: 97,
        chestDesc: 'Comfortable stretch fit for active movement',
        recommendationTip: 'True to age size. Size up if child is growing rapidly.'
      };
    }

    if (isBottomWear) {
      // Bottom wear sizing: 30, 32, 34, 36, 38
      let waist = 32;
      if (weightKg < 58) waist = 30;
      else if (weightKg <= 67) waist = 32;
      else if (weightKg <= 78) waist = 34;
      else if (weightKg <= 90) waist = 36;
      else waist = 38;

      // Check if product uses numeric or S/M/L
      const numericCandidate = String(waist);
      let finalSize = availableSizes.find(s => s === numericCandidate) || availableSizes.find(s => s.includes(numericCandidate));

      if (!finalSize) {
        if (waist <= 30) finalSize = availableSizes.find(s => s === 'S' || s === 'M') || availableSizes[0];
        else if (waist <= 32) finalSize = availableSizes.find(s => s === 'M' || s === 'L') || availableSizes[0];
        else if (waist <= 34) finalSize = availableSizes.find(s => s === 'L' || s === 'XL') || availableSizes[0];
        else finalSize = availableSizes.find(s => s === 'XL' || s === 'XXL') || availableSizes[availableSizes.length - 1];
      }

      return {
        size: finalSize || availableSizes[0],
        matchScore: 98,
        chestDesc: `Tailored for ~${waist}" waist with Korean wide-leg parachute drape`,
        recommendationTip: fitPreference === 'oversized'
          ? 'Gives maximum street-style drape without needing a belt.'
          : 'Fits clean around the waist and tapers nicely at sneakers.'
      };
    }

    // Top wear (Shirts, Oversized Tees, Flannels, Gowns)
    let baseIndex = 1; // 0: S, 1: M, 2: L, 3: XL, 4: XXL

    if (weightKg < 58 && heightCm < 168) baseIndex = 0; // S
    else if (weightKg <= 68 && heightCm <= 175) baseIndex = 1; // M
    else if (weightKg <= 78 || heightCm <= 182) baseIndex = 2; // L
    else if (weightKg <= 88 || heightCm <= 188) baseIndex = 3; // XL
    else baseIndex = 4; // XXL

    if (fitPreference === 'oversized') {
      baseIndex = Math.min(4, baseIndex + 1);
    } else if (fitPreference === 'slim') {
      baseIndex = Math.max(0, baseIndex - 1);
    }

    const standardSizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const targetCode = standardSizes[Math.min(baseIndex, standardSizes.length - 1)];

    // Map to actual available sizes for this product
    let finalSize = availableSizes.find(s => s.toUpperCase() === targetCode);
    if (!finalSize) {
      finalSize = availableSizes[Math.min(baseIndex, availableSizes.length - 1)] || availableSizes[0];
    }

    return {
      size: finalSize,
      matchScore: 99,
      chestDesc: fitPreference === 'oversized'
        ? 'Dropped shoulder by ~2.5 inches for the trending boxy Korean silhouette'
        : 'Regular chest fit with comfortable relaxed movement',
      recommendationTip: fitPreference === 'oversized'
        ? `Size ${finalSize} gives you the signature DIL Garments streetwear baggy look without looking oversized in sleeve length.`
        : `Size ${finalSize} gives you a tailored clean fit.`
    };
  }, [heightCm, weightKg, fitPreference, isBottomWear, isKids, product.sizes]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-zinc-950 border border-white/20 rounded-3xl shadow-2xl z-10 overflow-hidden text-white my-8"
        >
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F5B301] to-amber-500 flex items-center justify-center text-black font-black shadow-md shadow-amber-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-white flex items-center gap-2">
                  Find My Fit <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F5B301]/20 text-[#F5B301] font-mono uppercase">Quiz</span>
                </h3>
                <p className="text-[11px] text-zinc-400">
                  AI-assisted sizing tailored for {product.name}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* 1. Height Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-[#F5B301]" /> 1. Your Height
                </label>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-mono font-black text-[#F5B301]">{heightFeetInches}</span>
                  <span className="text-xs text-zinc-400 font-mono">({heightCm} cm)</span>
                </div>
              </div>

              <input
                type="range"
                min="145"
                max="195"
                step="1"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full accent-[#F5B301] cursor-pointer h-2 bg-zinc-800 rounded-lg appearance-none"
              />

              {/* Quick height presets */}
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {[
                  { label: "5'4\" (163cm)", cm: 163 },
                  { label: "5'6\" (168cm)", cm: 168 },
                  { label: "5'8\" (173cm)", cm: 173 },
                  { label: "5'10\" (178cm)", cm: 178 },
                  { label: "6'0\" (183cm)", cm: 183 },
                  { label: "6'2\" (188cm)", cm: 188 },
                ].map((item) => (
                  <button
                    key={item.cm}
                    type="button"
                    onClick={() => setHeightCm(item.cm)}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-mono transition-all whitespace-nowrap border ${
                      Math.abs(heightCm - item.cm) <= 1
                        ? 'bg-[#F5B301] text-black font-black border-[#F5B301]'
                        : 'bg-zinc-900 text-zinc-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {item.label.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Weight Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#F5B301]" /> 2. Your Weight
                </label>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-mono font-black text-[#F5B301]">{weightKg}</span>
                  <span className="text-xs text-zinc-400 font-mono">kg</span>
                </div>
              </div>

              <input
                type="range"
                min="45"
                max="105"
                step="1"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-[#F5B301] cursor-pointer h-2 bg-zinc-800 rounded-lg appearance-none"
              />

              {/* Quick weight presets */}
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {[55, 65, 72, 80, 90, 100].map((kg) => (
                  <button
                    key={kg}
                    type="button"
                    onClick={() => setWeightKg(kg)}
                    className={`px-3 py-1 rounded-xl text-[11px] font-mono transition-all whitespace-nowrap border ${
                      Math.abs(weightKg - kg) <= 2
                        ? 'bg-[#F5B301] text-black font-black border-[#F5B301]'
                        : 'bg-zinc-900 text-zinc-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {kg} kg
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Fit Silhouette Preference */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                3. How do you like your fit?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'oversized' as const, label: 'Oversized', sub: 'Baggy & Trendy', badge: 'Recommended' },
                  { key: 'regular' as const, label: 'Regular', sub: 'Standard Fit', badge: '' },
                  { key: 'slim' as const, label: 'Slim', sub: 'Closer Fit', badge: '' },
                ].map((fit) => (
                  <button
                    key={fit.key}
                    type="button"
                    onClick={() => setFitPreference(fit.key)}
                    className={`p-3 rounded-2xl text-left border transition-all relative ${
                      fitPreference === fit.key
                        ? 'bg-[#F5B301]/15 border-[#F5B301] text-white shadow-sm'
                        : 'bg-zinc-900/80 border-white/10 text-zinc-300 hover:border-white/30'
                    }`}
                  >
                    {fit.badge && (
                      <span className="absolute -top-2 right-2 text-[9px] px-1.5 py-0.2 rounded-full bg-[#F5B301] text-black font-black">
                        {fit.badge}
                      </span>
                    )}
                    <p className="text-xs font-black">{fit.label}</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5">{fit.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Recommendation Output Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-[#F5B301]/40 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">Your Recommended Size</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-black">
                  {recommendation.matchScore}% Match
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-[#F5B301] font-mono tracking-tight">
                  SIZE {recommendation.size}
                </span>
                <span className="text-xs text-zinc-300 font-bold uppercase tracking-wider">
                  ({fitPreference === 'oversized' ? 'Streetwear Drop Fit' : fitPreference === 'regular' ? 'Classic Regular' : 'Fitted Silhouette'})
                </span>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                {recommendation.chestDesc}.
              </p>

              <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 text-[11px] text-zinc-400">
                💡 <span className="text-zinc-300">{recommendation.recommendationTip}</span>
              </div>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-5 border-t border-white/10 bg-zinc-900/60 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectSize(recommendation.size);
                onClose();
              }}
              className="flex-2 py-3 px-5 rounded-xl bg-[#F5B301] text-black font-black text-xs uppercase tracking-wider hover:bg-[#ffc117] transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Check className="w-4 h-4" />
              Apply Size {recommendation.size} to Product
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
