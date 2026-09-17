import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, ShoppingBag, Eye, Zap, Check, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { formatINR } from '../lib/utils';

interface Flat400SectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onBuyNow?: (product: Product, size: string) => void;
}

export const Flat400Section: React.FC<Flat400SectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onBuyNow
}) => {
  const [subFilter, setSubFilter] = useState<'all' | 'shirts' | 'pants'>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const flat400Items = products.filter(p => p.isFlat400Offer || p.price === 400);
  const displayItems = flat400Items
    .filter(p => {
      if (subFilter === 'shirts') return p.category === 'baggy-shirts';
      if (subFilter === 'pants') return p.category === 'baggy-pants';
      return true;
    })
    .slice(0, 8);

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product, product.sizes[0] || 'L');
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="flat-400" className="py-16 bg-[#111] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
        backgroundSize: '20px 20px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-[11px] font-black uppercase tracking-[0.15em] mb-4 animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-red-400" />
              VIRAL YOUTH DROP · BOYS SPECIAL
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
              BAGGY PANTS &amp;<br />
              <span className="text-[#F5B301]">SHIRTS @ ₹400</span>
            </h2>
            <p className="text-zinc-400 mt-3 text-sm max-w-md">
              Korean drop-shoulder fits, parachute cargos &amp; oversized flannels — all at a crazy flat price!
            </p>
          </div>

          {/* Sub filters */}
          <div className="flex items-center gap-2">
            {[
              { key: 'all', label: `All (${flat400Items.length})` },
              { key: 'shirts', label: 'Shirts ₹400' },
              { key: 'pants', label: 'Pants ₹400' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSubFilter(key as typeof subFilter)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  subFilter === key
                    ? 'bg-[#F5B301] text-black'
                    : 'bg-white/10 text-zinc-300 border border-white/10 hover:bg-white/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {displayItems.map((product, i) => {
            const isAdded = addedId === product.id;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative rounded-2xl bg-[#1a1a1a] border border-white/8 hover:border-[#F5B301]/50 overflow-hidden flex flex-col transition-all"
              >
                {/* Image */}
                <div
                  className="relative aspect-[4/5] overflow-hidden cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Flat ₹400 tag */}
                  <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-2.5">
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-black">
                      <Zap className="w-2.5 h-2.5 fill-white" />
                      FLAT ₹400
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-black/60 text-[#D1FE17] text-[10px] font-mono backdrop-blur-sm">
                      {product.stockCount} left
                    </span>
                  </div>

                  {/* Quick view */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end pb-3 justify-center">
                    <button
                      onClick={(e) => { e.stopPropagation(); onSelectProduct(product); }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-bold text-xs hover:bg-[#F5B301] transition-colors shadow-lg"
                    >
                      <Eye className="w-3 h-3" /> View Fit
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F5B301]">
                    {product.category === 'baggy-shirts' ? "Boy's Baggy Shirt" : 'Korean Baggy Pant'}
                  </span>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-sm font-bold text-white line-clamp-1 cursor-pointer hover:text-[#F5B301] transition-colors"
                  >
                    {product.name}
                  </h3>

                  {/* Size pills */}
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.slice(0, 5).map(s => (
                      <span key={s} className="px-1.5 py-0.5 rounded bg-white/8 text-zinc-400 text-[10px] font-mono">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline justify-between pt-2 border-t border-white/8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-[#D1FE17]">₹400</span>
                      <span className="text-[11px] text-zinc-500 line-through">{formatINR(product.originalPrice)}</span>
                    </div>
                    <span className="text-[10px] font-bold text-red-400">
                      Save {formatINR(product.originalPrice - 400)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleQuickAdd(product)}
                      disabled={isAdded}
                      className={`py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                        isAdded
                          ? 'bg-green-500 text-black'
                          : 'bg-zinc-800 text-white hover:bg-zinc-700'
                      }`}
                    >
                      {isAdded ? (
                        <><Check className="w-3.5 h-3.5" /> Added</>
                      ) : (
                        <><ShoppingBag className="w-3.5 h-3.5" /> Bag</>
                      )}
                    </button>
                    <button
                      onClick={() => onBuyNow ? onBuyNow(product, product.sizes[0] || 'L') : handleQuickAdd(product)}
                      className="py-2.5 rounded-xl bg-[#F5B301] text-black hover:bg-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
                    >
                      <Zap className="w-3.5 h-3.5 fill-black" /> Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All link */}
        <div className="text-center mt-10">
          <button
            onClick={() => {
              const el = document.getElementById('catalog');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#F5B301] text-[#F5B301] font-black text-sm uppercase tracking-wider hover:bg-[#F5B301] hover:text-black transition-all"
          >
            View All {flat400Items.length} Deals
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
