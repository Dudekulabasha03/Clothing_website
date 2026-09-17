import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { formatINR } from '../lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle search handled externally or via props
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = query.trim()
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.division.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
      )
    : products.slice(0, 4); // show trending if empty

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          className="relative w-full max-w-2xl bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 p-4 sm:p-6 space-y-4"
        >
          {/* Input field */}
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-[#F5B301] absolute left-4" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search baggy shirts, Korean pants, gowns, kids sets..."
              className="w-full py-3.5 pl-12 pr-12 rounded-2xl bg-zinc-900/90 border border-white/10 text-white text-base outline-none focus:border-[#F5B301]"
            />
            {query ? (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <span className="absolute right-4 text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                ESC
              </span>
            )}
          </div>

          {/* Quick suggestions pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-zinc-500 font-mono">Popular:</span>
            {['Baggy Shirts', 'Korean Pants', 'Maxi Gown', 'Flannel', 'Bomber Jacket'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/5 text-zinc-300 hover:text-[#F5B301] hover:border-[#F5B301]/40 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="space-y-2 max-h-[60vh] overflow-y-auto pt-2">
            <div className="text-[11px] font-mono uppercase text-zinc-400 font-bold px-1">
              {query ? `Search Results (${results.length})` : 'Featured Styles'}
            </div>

            {results.length > 0 ? (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="p-3 rounded-2xl bg-zinc-900/50 hover:bg-zinc-800/80 border border-white/5 hover:border-[#F5B301]/40 flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-12 h-14 object-cover rounded-lg bg-zinc-950 shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-[#F5B301] transition-colors">
                        {product.name}
                      </h4>
                      <div className="text-[10px] text-zinc-400 uppercase font-mono">
                        {product.division} • {product.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-white">
                      {formatINR(product.price)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-zinc-500 text-sm">
                No items match "{query}". Try another keyword.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
