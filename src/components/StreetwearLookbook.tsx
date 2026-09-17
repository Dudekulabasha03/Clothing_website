import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Eye, Video, Layers } from 'lucide-react';

interface LookbookItem {
  id: string;
  title: string;
  tagline: string;
  division: string;
  image: string;
  pieces: string[];
}

const LOOKS: LookbookItem[] = [
  {
    id: "look-1",
    title: "The Seoul Boxy Streetwear Silhouette",
    tagline: "Oversized Flannel + Korean Double-Pleat Pants",
    division: "Gents Wear",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80",
    pieces: ["Boxy Checked Flannel (₹499)", "Korean Baggy Trousers (₹699)", "Minimal Sneaker"]
  },
  {
    id: "look-2",
    title: "Royal Terracotta Evening Flare",
    tagline: "High-flare maxi gown with statement metallic cinch",
    division: "Ladies Wear",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80",
    pieces: ["Terracotta Maxi Gown (₹899)", "Belt Buckle Accent", "Crepe Flare"]
  },
  {
    id: "look-3",
    title: "Youth Tech-Fleece Co-Ord",
    tagline: "Fleece Zip Hoodie + Tapered Joggers for active days",
    division: "Kids Wear",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=1200&q=80",
    pieces: ["2-Piece Urban Fleece Set (₹699)", "Denim Street Vest (₹749)"]
  }
];

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
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
                    Included in this look:
                  </span>
                  <div className="space-y-2">
                    {currentLook.pieces.map((piece, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-200 bg-zinc-900/80 p-2.5 rounded-xl border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5B301]" />
                        <span>{piece}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#catalog"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5B301] hover:text-white transition-colors"
                >
                  <span>Shop the pieces in catalog</span>
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
