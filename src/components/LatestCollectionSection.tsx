import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { Product } from '../types';
import { formatINR } from '../lib/utils';

interface LatestCollectionSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onViewAllCatalog: () => void;
}

export const LatestCollectionSection: React.FC<LatestCollectionSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onViewAllCatalog
}) => {
  const latestItems = products.filter(p => p.isLatestCollection);

  return (
    <section id="latest-collection" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-zinc-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-[11px] font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Admin Curated Front-Page Drop
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#111] leading-none">
              LATEST COLLECTION
            </h2>
            <p className="text-zinc-500 text-sm mt-2">
              Hand-picked new arrivals &amp; trending fits across Men, Women &amp; Kids.
            </p>
          </div>

          <button
            onClick={onViewAllCatalog}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#111] text-[#111] font-black text-xs uppercase tracking-wider hover:bg-[#111] hover:text-white transition-all"
          >
            View Full Catalog ({products.length})
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {latestItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {latestItems.slice(0, 8).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -5 }}
                onClick={() => onSelectProduct(product)}
                className="product-card group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2 py-0.5 rounded-md bg-[#111] text-white text-[10px] font-black uppercase tracking-wider">
                      New Drop
                    </span>
                    {product.isFlat400Offer && (
                      <span className="px-2 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-bold uppercase">
                        ₹400 Deal
                      </span>
                    )}
                  </div>
                  {/* Rating */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                    <Star className="w-3 h-3 fill-[#F5B301] text-[#F5B301]" />
                    <span className="text-[11px] font-bold text-[#111]">{product.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    {product.division} · {product.category.replace('-', ' ')}
                  </div>
                  <h3 className="text-sm font-bold text-[#111] line-clamp-1 group-hover:text-[#F5B301] transition-colors">
                    {product.name}
                  </h3>
                  <div className="pt-2 border-t border-zinc-100 flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-black text-[#111]">{formatINR(product.price)}</span>
                      <span className="text-xs text-zinc-400 line-through">{formatINR(product.originalPrice)}</span>
                    </div>
                    <span className="text-[10px] font-black text-red-600">{product.discountPercentage}% OFF</span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); onAddToCart(product, product.sizes[0] || 'M'); }}
                    className="w-full py-2 rounded-lg bg-[#111] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F5B301] hover:text-black transition-all mt-1"
                  >
                    Add to Bag
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-50 rounded-2xl border border-zinc-200 text-zinc-400 text-sm">
            <Sparkles className="w-8 h-8 mx-auto mb-3 text-zinc-300" />
            No items marked as "Latest Collection" yet.<br />
            Go to <strong className="text-[#111]">Admin Portal</strong> → Add Products → check "Latest Collection".
          </div>
        )}
      </div>
    </section>
  );
};
