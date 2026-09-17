import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Star, Zap, TrendingUp, Search } from 'lucide-react';

import { useStore } from '../context/StoreContext';

interface HeroSectionProps {
  onShopNow: () => void;
  onExploreMen: () => void;
  onExploreWomen: () => void;
  onExploreKids: () => void;
  onScrollToFlat400: () => void;
  onOpenSearch?: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    label: 'MEN',
    heading: 'BAGGY\nSTREETS',
    sub: 'Korean Drop-Shoulder Fits',
    tag: 'NEW SEASON',
    price: '₹400',
    bg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=90',
    accent: '#F5B301',
    textLight: true,
  },
  {
    id: 2,
    label: 'WOMEN',
    heading: 'FESTIVE\nELEGANCE',
    sub: 'Anarkali Gowns & Silk Kurtis',
    tag: 'TRENDING NOW',
    price: '₹649',
    bg: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1400&q=90',
    accent: '#ec4899',
    textLight: true,
  },
  {
    id: 3,
    label: 'KIDS',
    heading: 'JUNIOR\nSTYLE',
    sub: 'Streetwear Sets & Party Frocks',
    tag: 'KIDS SPECIAL',
    price: '₹499',
    bg: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1400&q=90',
    accent: '#3b82f6',
    textLight: true,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopNow,
  onExploreMen,
  onExploreWomen,
  onExploreKids,
  onScrollToFlat400,
  onOpenSearch,
}) => {
  const { heroSlides } = useStore();
  const slides = (heroSlides && heroSlides.length > 0) ? heroSlides : HERO_SLIDES;
  const [activeSlide, setActiveSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide] || slides[0];
  const handlers = [onExploreMen, onExploreWomen, onExploreKids];

  return (
    <section className="relative w-full">
      {/* ── Search Bar Section (Above Hero Carousel) ── */}
      <div className="bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-[#0a0a0a] border-b border-black/[0.06] dark:border-white/10 py-3 sm:py-3.5 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div
            onClick={onOpenSearch}
            className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#F5B301] transition-all cursor-pointer group"
          >
            <Search className="w-4 h-4 text-[#F5B301] group-hover:scale-110 transition-transform shrink-0" />
            <span className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors flex-1 truncate font-medium">
              Search baggy shirts, Korean pants, festive gowns, kids sets...
            </span>
            <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border border-zinc-200 dark:border-zinc-700">
              ⌘K
            </kbd>
          </div>

          {/* Quick Trending Keyword Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-2 px-1 overflow-x-auto no-scrollbar text-[11px]">
            <span className="text-zinc-400 shrink-0 text-[10px] font-bold uppercase tracking-wider">Popular:</span>
            {['Baggy Shirts @ ₹400', 'Korean Pants', 'Oversized Flannels', 'Anarkali Gowns', 'Combos Flat ₹750'].map((tag) => (
              <button
                key={tag}
                onClick={onOpenSearch}
                className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-[#F5B301] hover:text-black font-semibold whitespace-nowrap transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Hero Banner ── */}
      <div className="relative h-[82vh] min-h-[540px] max-h-[780px] overflow-hidden">
        {/* Background image */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={s.bg}
              alt={s.label}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay — bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            {/* Left gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-14 sm:pb-20">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-black tracking-[0.15em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D1FE17] animate-ping" />
              {slide.tag}
            </div>

            {/* Main heading */}
            <h1 className="text-[clamp(3rem,9vw,7rem)] font-black leading-[0.9] tracking-[-0.04em] text-white hero-text-shadow whitespace-pre-line mb-4">
              {slide.heading}
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-medium mb-2">{slide.sub}</p>
            <p className="text-2xl font-black text-[#F5B301] mb-8">
              Starting @ {slide.price}
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => { handlers[activeSlide](); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#111] text-sm font-black uppercase tracking-wider hover:bg-[#F5B301] transition-all shadow-lg"
              >
                SHOP {slide.label}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onScrollToFlat400}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-red-600 text-white text-sm font-black uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg animate-pulse"
              >
                <Flame className="w-4 h-4 fill-white" />
                FLAT ₹400 DEALS
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`rounded-full transition-all ${i === activeSlide ? 'w-6 h-2 bg-[#F5B301]' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        {/* Division Quick Links (Myntra style right panel) */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 hidden lg:flex flex-col gap-3">
          {[
            { label: 'MEN', fn: onExploreMen, color: '#F5B301' },
            { label: 'WOMEN', fn: onExploreWomen, color: '#ec4899' },
            { label: 'KIDS', fn: onExploreKids, color: '#3b82f6' },
          ].map(({ label, fn, color }) => (
            <button
              key={label}
              onClick={fn}
              style={{ borderColor: color }}
              className="px-4 py-2 rounded-full border-2 bg-black/40 backdrop-blur-sm text-white text-[11px] font-black tracking-widest hover:bg-white hover:text-[#111] transition-all"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Trust / Stats Bar ── */}
      <div className="bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { icon: <Flame className="w-5 h-5 fill-red-400 text-red-400 mx-auto mb-1" />, label: 'Flat ₹400', sub: 'Baggy Deals' },
            { icon: <Star className="w-5 h-5 fill-[#F5B301] text-[#F5B301] mx-auto mb-1" />, label: '4.9★ Rated', sub: 'By 500+ Customers' },
            { icon: <Zap className="w-5 h-5 fill-[#D1FE17] text-[#D1FE17] mx-auto mb-1" />, label: 'Same-Day', sub: 'WhatsApp Orders' },
            { icon: <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />, label: '105+ Styles', sub: 'Men, Women & Kids' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              {item.icon}
              <span className="text-sm font-black">{item.label}</span>
              <span className="text-[11px] text-zinc-400">{item.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Flat ₹400 Attraction Banner ── */}
      <div
        onClick={onScrollToFlat400}
        className="cursor-pointer bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white py-6 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-red-200 mb-1">
              <Flame className="w-3.5 h-3.5 fill-red-200" /> BOYS VIRAL ATTRACTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
              BAGGY SHIRTS &amp; PANTS @ FLAT <span className="text-[#FFE234]">₹400</span>
            </h2>
            <p className="text-sm text-white/80 mt-1">Street-ready Korean fits · Drop-shoulder boxy cuts · All sizes</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="text-4xl font-black text-[#FFE234]">₹400</div>
              <div className="text-[10px] tracking-widest text-white/70">FLAT PRICE</div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onScrollToFlat400(); }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-red-700 font-black text-sm uppercase tracking-wider hover:bg-[#FFE234] transition-all shadow-lg"
            >
              SHOP NOW <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
