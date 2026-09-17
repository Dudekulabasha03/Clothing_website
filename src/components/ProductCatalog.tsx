import React, { useState, useMemo } from 'react';
import { Sparkles, SlidersHorizontal, ArrowUpDown, Filter, RotateCcw } from 'lucide-react';
import { Product, Division } from '../types';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  activeCategory: string;
  activeDivision: Division;
  searchQuery: string;
  wishlistIds: string[];
  onSelectCategory: (category: string) => void;
  onSelectDivision: (division: Division) => void;
  onClearSearch: () => void;
  onToggleWishlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onBuyNow?: (product: Product, size: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  activeCategory,
  activeDivision,
  searchQuery,
  wishlistIds,
  onSelectCategory,
  onSelectDivision,
  onClearSearch,
  onToggleWishlist,
  onSelectProduct,
  onAddToCart,
  onBuyNow
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<'all' | 'under-400' | '400-750' | '750-plus'>('all');
  const [selectedFit, setSelectedFit] = useState<string>('all');
  const [selectedFabric, setSelectedFabric] = useState<string>('all');

  const SIZE_OPTIONS = ['All', 'S', 'M', 'L', 'XL', 'XXL', '28', '30', '32', '34', '36'];
  const PRICE_OPTIONS = [
    { label: 'All Budgets', value: 'all' as const },
    { label: 'Under ₹400', value: 'under-400' as const },
    { label: '₹400 – ₹750', value: '400-750' as const },
    { label: '₹750+', value: '750-plus' as const },
  ];
  const FIT_OPTIONS = ['All Fits', 'Baggy', 'Oversized', 'Regular', 'Relaxed'];
  const FABRIC_OPTIONS = ['All Fabrics', 'Cotton', 'Flannel', 'Twill', 'Denim', 'Rayon'];

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Search filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesCategory = p.category.toLowerCase().includes(q);
        const matchesDivision = p.division.toLowerCase().includes(q);
        const matchesTags = p.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesCategory && !matchesDivision && !matchesTags) return false;
      }

      // Division filter
      if (activeDivision !== 'all' && p.division !== activeDivision) {
        return false;
      }

      // Category filter
      if (activeCategory === 'best-offers' && !p.isOfferDrop) {
        return false;
      } else if (activeCategory !== 'all' && activeCategory !== 'best-offers' && activeCategory !== 'gents' && activeCategory !== 'kids' && activeCategory !== 'ladies') {
        if (p.category !== activeCategory) return false;
      }

      // Stock filter
      if (onlyInStock && !p.inStock) {
        return false;
      }

      // Size filter
      if (selectedSize !== 'all') {
        const hasSize = p.sizes.some(s => s.trim().toUpperCase() === selectedSize.toUpperCase());
        if (!hasSize) return false;
      }

      // Price range filter
      if (priceRange === 'under-400' && p.price > 400) return false;
      if (priceRange === '400-750' && (p.price < 400 || p.price > 750)) return false;
      if (priceRange === '750-plus' && p.price < 750) return false;

      // Fit filter
      if (selectedFit !== 'all') {
        const fitMatches = (p.fit || '').toLowerCase().includes(selectedFit.toLowerCase()) ||
          p.name.toLowerCase().includes(selectedFit.toLowerCase()) ||
          (p.subtitle || '').toLowerCase().includes(selectedFit.toLowerCase());
        if (!fitMatches) return false;
      }

      // Fabric filter
      if (selectedFabric !== 'all') {
        const fabricMatches = (p.fabric || '').toLowerCase().includes(selectedFabric.toLowerCase()) ||
          p.description.toLowerCase().includes(selectedFabric.toLowerCase());
        if (!fabricMatches) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default order
    });
  }, [products, activeCategory, activeDivision, searchQuery, onlyInStock, selectedSize, priceRange, selectedFit, selectedFabric, sortBy]);


  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 pb-6 border-b border-zinc-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[11px] font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            Curated Apparel Catalog
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111]">
            {activeDivision === 'men'
              ? "Men's Wear Collection"
              : activeDivision === 'kids'
              ? "Kids Wear Collection"
              : activeDivision === 'women'
              ? "Women's Designer Wear"
              : activeDivision === 'gents'
              ? "Men's Wear Collection"
              : activeDivision === 'ladies'
              ? "Women's Designer Wear"
              : activeCategory === 'best-offers'
              ? "Best Festive Offers"
              : "Complete Clothing Catalog"}
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Showing <strong className="text-[#111]">{filteredProducts.length}</strong> styles available in Tadipatri
          </p>
        </div>

        {/* Filter / Sort bar */}
        <div className="flex flex-wrap items-center gap-2">
          {searchQuery && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs text-amber-700">
              <span>Search: "{searchQuery}"</span>
              <button onClick={onClearSearch} className="font-black hover:text-red-600">✕</button>
            </div>
          )}

          {/* In-Stock Toggle */}
          <button
            onClick={() => setOnlyInStock(!onlyInStock)}
            className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
              onlyInStock
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400'
            }`}
          >
            In-Stock Only
          </button>

          {/* Sort */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-zinc-200 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-zinc-700 outline-none cursor-pointer font-semibold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* 📏 Feature 5: Quick "Filter by My Size" Row */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3">
        <span className="text-xs font-black uppercase tracking-wider text-zinc-400 whitespace-nowrap mr-1">
          Filter by Size:
        </span>
        {SIZE_OPTIONS.map((sz) => {
          const isSelected = (sz === 'All' && selectedSize === 'all') || selectedSize === sz;
          return (
            <button
              key={sz}
              onClick={() => setSelectedSize(sz === 'All' ? 'all' : sz)}
              className={`h-7 px-3 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center justify-center ${
                isSelected
                  ? 'bg-[#111] text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {sz}
            </button>
          );
        })}
        {selectedSize !== 'all' && (
          <button
            onClick={() => setSelectedSize('all')}
            className="text-[11px] font-bold text-red-500 hover:underline ml-2 whitespace-nowrap"
          >
            Clear Size (✕)
          </button>
        )}
      </div>

      {/* 💰 Price Range Budget Filter */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3">
        <span className="text-xs font-black uppercase tracking-wider text-zinc-400 whitespace-nowrap mr-1">
          Filter by Budget:
        </span>
        {PRICE_OPTIONS.map((opt) => {
          const isSelected = priceRange === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setPriceRange(opt.value)}
              className={`h-7 px-3.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center justify-center ${
                isSelected
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
        {priceRange !== 'all' && (
          <button
            onClick={() => setPriceRange('all')}
            className="text-[11px] font-bold text-red-500 hover:underline ml-2 whitespace-nowrap"
          >
            Reset Budget (✕)
          </button>
        )}
      </div>

      {/* 🧵 Fit & Fabric Quick Filter Chips */}
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-6 mb-2">
        {/* Fit */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-xs font-black uppercase tracking-wider text-zinc-400 whitespace-nowrap mr-1">
            Fit:
          </span>
          {FIT_OPTIONS.map((fit) => {
            const val = fit === 'All Fits' ? 'all' : fit;
            const isSelected = selectedFit === val;
            return (
              <button
                key={fit}
                onClick={() => setSelectedFit(val)}
                className={`h-6 px-3 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#F5B301] text-black shadow-sm font-black'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {fit}
              </button>
            );
          })}
        </div>

        {/* Fabric */}
        <div className="flex items-center gap-1.5 shrink-0 pl-2 border-l border-zinc-200">
          <span className="text-xs font-black uppercase tracking-wider text-zinc-400 whitespace-nowrap mr-1">
            Fabric:
          </span>
          {FABRIC_OPTIONS.map((fab) => {
            const val = fab === 'All Fabrics' ? 'all' : fab;
            const isSelected = selectedFabric === val;
            return (
              <button
                key={fab}
                onClick={() => setSelectedFabric(val)}
                className={`h-6 px-3 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-zinc-900 text-white shadow-sm font-black'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {fab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              onBuyNow={onBuyNow}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-zinc-50 rounded-2xl border border-zinc-100 space-y-4">
          <Filter className="w-12 h-12 text-zinc-300 mx-auto" />
          <h3 className="text-lg font-bold text-[#111]">No products found</h3>
          <p className="text-sm text-zinc-400 max-w-sm mx-auto">
            Try adjusting your search or filter selections.
          </p>
          <button
            onClick={() => {
              onSelectCategory('all');
              onSelectDivision('all');
              onClearSearch();
            }}
            className="px-6 py-2.5 rounded-full bg-[#111] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#F5B301] hover:text-black transition-colors inline-flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Filters
          </button>
        </div>
      )}
      </div>
    </section>
  );
};

