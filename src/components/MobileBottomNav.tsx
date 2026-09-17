import React from 'react';
import { Home, Grid, Flame, Heart, ShoppingBag } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  wishlistCount: number;
  onHome: () => void;
  onOpenCategories: () => void;
  onScrollToFlat400: () => void;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  wishlistCount,
  onHome,
  onOpenCategories,
  onScrollToFlat400,
  onOpenWishlist,
  onOpenCart,
}) => {
  return (
    <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0c0c0c]/95 backdrop-blur-xl border-t border-black/[0.08] dark:border-white/10 px-2 py-1.5 shadow-[0_-6px_25px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-around">
        {/* Home */}
        <button
          onClick={onHome}
          className="flex flex-col items-center justify-center py-1 px-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Home</span>
        </button>

        {/* Categories / Side Menu */}
        <button
          onClick={onOpenCategories}
          className="flex flex-col items-center justify-center py-1 px-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Categories</span>
        </button>

        {/* Flat 400 Hot Drop */}
        <button
          onClick={onScrollToFlat400}
          className="flex flex-col items-center justify-center py-1 px-3 text-red-600 dark:text-red-400 font-black relative"
        >
          <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md -mt-3.5 border-2 border-white dark:border-zinc-900 animate-pulse">
            <Flame className="w-4 h-4 fill-white" />
          </div>
          <span className="text-[10px] font-black mt-0.5">₹400 Drop</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={onOpenWishlist}
          className="flex flex-col items-center justify-center py-1 px-2 text-zinc-600 dark:text-zinc-400 hover:text-red-500 transition-colors relative"
        >
          <div className="relative">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-black flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold mt-0.5">Wishlist</span>
        </button>

        {/* Bag */}
        <button
          onClick={onOpenCart}
          className="flex flex-col items-center justify-center py-1 px-2 text-zinc-800 dark:text-zinc-200 hover:text-[#E5A812] transition-colors relative"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-[#E5A812] text-black text-[9px] font-black flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold mt-0.5">Bag</span>
        </button>
      </div>
    </nav>
  );
};
