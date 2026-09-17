import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Eye, Video, Layers, MessageCircle, ShoppingBag, Zap, Check } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface LookbookItem {
  id: string;
  title: string;
  tagline: string;
  division: string;
  image: string;
  comboPrice: number;
  originalPrice: number;
  pieces: { name: string; price: number; tag: string }[];
}

const LOOKS: LookbookItem[] = [
  {
    id: "look-1",
    title: "The Seoul Boxy Streetwear Silhouette",
    tagline: "Oversized Flannel + Korean Double-Pleat Pants. Styled for effortless street drape in Tadipatri.",
    division: "Gents Streetwear",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80",
    comboPrice: 750,
    originalPrice: 1999,
    pieces: [
      { name: "Boxy Checked Flannel Shirt", price: 400, tag: "Flat ₹400 Drop" },
      { name: "Korean Baggy Pleated Trousers", price: 400, tag: "Heavy Twill" },
      { name: "Minimal Streetwear Sneaker Match", price: 0, tag: "Styling Tip" }
    ]
  },
  {
    id: "look-2",
    title: "Royal Terracotta Evening Flare",
    tagline: "High-flare maxi gown with statement metallic cinch. Perfect for family weddings & temple festivals.",
    division: "Ladies Designer Wear",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80",
    comboPrice: 899,
    originalPrice: 2499,
    pieces: [
      { name: "Terracotta Anarkali Maxi Gown", price: 899, tag: "Crepe Silk Flare" },
      { name: "Metallic Cinch Accent Belt", price: 0, tag: "Included Accessory" },
      { name: "Matching Dupatta Set", price: 0, tag: "Full Ensemble" }
    ]
  },
  {
    id: "look-3",
    title: "Junior Street-Fleece Co-Ord",
    tagline: "Heavy fleece zip hoodie + tapered cargo joggers for boys & girls on festive outings.",
    division: "Kids Wear Special",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=1200&q=80",
    comboPrice: 699,
    originalPrice: 1699,
    pieces: [
      { name: "2-Piece Urban Street Fleece Co-Ord", price: 699, tag: "Cotton Rich" },
      { name: "Denim Utility Street Vest", price: 0, tag: "Layering Piece" }
    ]
  }
];

interface StreetwearLookbookProps {
  onShopCategory?: (category: string) => void;
}

export const StreetwearLookbook: React.FC = () => {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const currentLook = LOOKS[activeLookIndex];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D1FE17]/10 border border-[#D1FE17]/30 text-[#D1FE17] text-xs font-mono font-bold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Lookbook 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-display">
              STYLE IN MOTION
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Curated outfits styled from the DIL Garments Tadipatri showroom.
            </p>
          </div>

          {/* Lookbook switchers */}
          <div className="flex items-center gap-2">
            {LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => setActiveLookIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                  activeLookIndex === idx
                    ? 'bg-[#F5B301] text-black shadow-[0_0_15px_rgba(245,179,1,0.4)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                Look 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Look Showcase */}
        <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Visual Image Display (Spans 7 cols) */}
            <div className="lg:col-span-7 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentLook.id}
                  src={currentLook.image}
                  alt={currentLook.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black" />
            </div>

            {/* Look Details (Spans 5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-zinc-950/90 backdrop-blur-md">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-white/5 text-[#D1FE17] border border-[#D1FE17]/30 text-xs font-mono font-semibold uppercase">
                  {currentLook.division}
                </span>

                <h3 className="text-3xl font-extrabold uppercase text-white font-display">
                  {currentLook.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {currentLook.tagline}
                </p>

                {/* Outfit Pieces breakdown */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
                    <span>Styled Outfit Pieces:</span>
                    <span className="text-[#F5B301]">Complete Set</span>
                  </div>
                  <div className="space-y-2">
                    {currentLook.pieces.map((piece, i) => (
                      <div key={i} className="flex items-center justify-between text-xs text-zinc-200 bg-zinc-900/90 p-2.5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F5B301]" />
                          <span className="font-medium">{piece.name}</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 font-mono text-zinc-300">
                          {piece.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Combo Deal Banner */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-emerald-500/10 border border-[#F5B301]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-[#F5B301] block">Curated Combo Special</span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black font-mono text-white">₹{currentLook.comboPrice}</span>
                      <span className="text-xs text-zinc-500 line-through font-mono">₹{currentLook.originalPrice}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                    Save ₹{currentLook.originalPrice - currentLook.comboPrice}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919848988295?text=${encodeURIComponent(`Namaste! I want to order the complete styled look "${currentLook.title}" (${currentLook.division}) for ₹${currentLook.comboPrice}. Please reserve my sizes!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#22c35e] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Order Bundle on WhatsApp</span>
                </a>

                <a
                  href="#catalog"
                  className="py-3.5 px-4 rounded-xl bg-white hover:bg-[#F5B301] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Browse Pieces</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
