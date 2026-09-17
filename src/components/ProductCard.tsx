import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Star, MessageCircle, Zap } from 'lucide-react';
import { Product } from '../types';
import { formatINR, createWhatsAppOrderLink } from '../lib/utils';
import { STORE_INFO } from '../data/products';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onBuyNow?: (product: Product, size: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct,
  onAddToCart,
  onBuyNow
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [isHovered, setIsHovered] = useState(false);

  const divisionLabel = product.division === 'men' ? 'Men'
    : product.division === 'women' ? 'Women'
    : product.division === 'kids' ? 'Kids'
    : product.division === 'gents' ? 'Men'
    : 'Women';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.38 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="product-card group relative flex flex-col"
    >
      {/* ── Image ── */}
      <div
        className="relative aspect-[3/4] overflow-hidden cursor-pointer bg-gray-50"
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={isHovered && product.galleryImages[1] ? product.galleryImages[1] : product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isFlat400Offer && (
            <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-black uppercase tracking-wide">
              FLAT ₹400
            </span>
          )}
          {!product.isFlat400Offer && (
            <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-black uppercase tracking-wide">
              -{product.discountPercentage}%
            </span>
          )}
          {product.isTrending && (
            <span className="px-2 py-0.5 rounded-md bg-[#111] text-[#F5B301] text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 fill-[#F5B301]" /> HOT
            </span>
          )}
          {product.isNewArrival && !product.isTrending && (
            <span className="px-2 py-0.5 rounded-md bg-white border border-black/10 text-black text-[10px] font-black uppercase tracking-wider">
              NEW
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product); }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all shadow-sm ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white text-zinc-500 hover:text-red-500'
          }`}
          title="Add to Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* WhatsApp Share Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const text = `Check out "${product.name}" at DIL Garments, Tadipatri for ₹${product.price}! ${window.location.origin}`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
          }}
          className="absolute top-12 right-3 p-2 rounded-full bg-white text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
          title="Share with Friends on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </button>

        {/* Quick View overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.stopPropagation(); onSelectProduct(product); }}
            className="w-full py-3 bg-[#111] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#F5B301] hover:text-black transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* ── Info ── */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Category + Rating */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            {divisionLabel} · {product.category.replace('-', ' ')}
          </span>
          <div className="flex items-center gap-0.5 text-[#F5B301]">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-[11px] font-bold text-zinc-700">{product.rating}</span>
            <span className="text-[10px] text-zinc-400">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Name */}
        <h3
          onClick={() => onSelectProduct(product)}
          className="text-sm font-bold text-[#111] line-clamp-1 cursor-pointer hover:text-[#F5B301] transition-colors leading-tight"
        >
          {product.name}
        </h3>

        {/* Fabric & Quality guarantee badge */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] font-bold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
            {product.fabric || '100% Cotton'}
          </span>
          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
            {product.fit || 'Korean Fit'}
          </span>
        </div>

        {/* Size chips */}
        <div className="flex flex-wrap gap-1 mt-1">
          {product.sizes.slice(0, 5).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-all ${
                selectedSize === size
                  ? 'bg-[#111] text-white border-[#111]'
                  : 'bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline justify-between mt-auto pt-2 border-t border-zinc-100">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-[#111]">{formatINR(product.price)}</span>
            <span className="text-xs text-zinc-400 line-through">{formatINR(product.originalPrice)}</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            In Stock
          </span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onAddToCart(product, selectedSize)}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-[#111] font-bold text-xs uppercase tracking-wider transition-all"
            title="Add to Shopping Bag"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
          <button
            onClick={() => onBuyNow ? onBuyNow(product, selectedSize) : onAddToCart(product, selectedSize)}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F5B301] hover:bg-[#ffbe1a] text-black font-black text-xs uppercase tracking-wider transition-all shadow-sm"
            title="Instant 1-Click Checkout"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};
