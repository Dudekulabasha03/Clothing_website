import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shirt, Baby, Crown, Sparkles } from 'lucide-react';
import { Division } from '../types';

interface DivisionBentoProps {
  onSelectDivision: (division: Division) => void;
}

export const DivisionBento: React.FC<DivisionBentoProps> = ({ onSelectDivision }) => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-200 text-zinc-600 text-[11px] font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Shop by Department
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111] leading-none">
              SHOP BY DIVISION
            </h2>
            <p className="text-zinc-500 text-sm mt-2">
              Tailored fashion for the entire family — under one roof in Tadipatri.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">

          {/* Men — Large tile */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            onClick={() => onSelectDivision('men')}
            className="md:col-span-7 relative h-[420px] rounded-2xl overflow-hidden cursor-pointer group shadow-card hover:shadow-card-hover transition-shadow"
          >
            <img
              src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80"
              alt="Men's Wear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-7 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-black text-[#F5B301] flex items-center gap-1.5">
                  <Shirt className="w-3.5 h-3.5" />
                  MEN'S WEAR
                </span>
                <div className="w-9 h-9 rounded-full bg-white/15 group-hover:bg-[#F5B301] text-white group-hover:text-black flex items-center justify-center backdrop-blur-sm transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Oversized Flannels,<br />Baggy Pants &amp; Jackets
                </h3>
                <p className="text-zinc-300 text-xs mt-2 mb-3">
                  Korean boxy fits, street flannels, parachute cargos &amp; performance tees.
                </p>
                <div className="flex items-center gap-3 text-xs font-bold text-[#F5B301] uppercase tracking-wider">
                  <span>60+ Hot Styles</span>
                  <span>·</span>
                  <span>From ₹400</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Women — Medium tile */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            onClick={() => onSelectDivision('women')}
            className="md:col-span-5 relative h-[420px] rounded-2xl overflow-hidden cursor-pointer group shadow-card hover:shadow-card-hover transition-shadow"
          >
            <img
              src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80"
              alt="Women's Wear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-7 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-black text-pink-400 flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" />
                  WOMEN'S WEAR
                </span>
                <div className="w-9 h-9 rounded-full bg-white/15 group-hover:bg-pink-500 text-white flex items-center justify-center backdrop-blur-sm transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Designer Gowns &amp;<br />Silk Ensembles
                </h3>
                <p className="text-zinc-300 text-xs mt-2 mb-3">
                  Festive Anarkalis, Chanderi silks, metallic waist gowns &amp; Kurtis.
                </p>
                <div className="flex items-center gap-3 text-xs font-bold text-pink-400 uppercase tracking-wider">
                  <span>Trending Maxis</span>
                  <span>·</span>
                  <span>Up to 64% Off</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kids — Full-width tile */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            onClick={() => onSelectDivision('kids')}
            className="md:col-span-12 relative h-[280px] rounded-2xl overflow-hidden cursor-pointer group shadow-card hover:shadow-card-hover transition-shadow"
          >
            <img
              src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1600&q=80"
              alt="Kids Wear"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

            <div className="absolute inset-0 p-8 sm:p-10 flex items-center">
              <div className="max-w-xl space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-black text-[#D1FE17] flex items-center gap-1.5">
                    <Baby className="w-3.5 h-3.5" />
                    KIDS WEAR (BOYS &amp; GIRLS)
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D1FE17]/20 text-[#D1FE17] text-[10px] font-black border border-[#D1FE17]/30">
                    Ages 3–14 Yrs
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  Streetwear Sets, Denim &amp; Princess Dresses
                </h3>
                <p className="text-zinc-300 text-sm">
                  Skin-friendly combed cotton. Fade-resistant colors. Built for active play &amp; celebrations.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-black text-[#D1FE17] uppercase tracking-wider group-hover:gap-3 transition-all">
                  Explore Kids Collection <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
