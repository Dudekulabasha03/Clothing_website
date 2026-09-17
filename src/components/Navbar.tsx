import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Search,
  Heart,
  Package,
  Flame,
  Sparkles,
  Settings,
  Shirt,
  Baby,
  Crown,
  Sun,
  Moon,
  Menu,
  X,
  User,
  Globe,
  MapPin,
  MessageCircle,
  Phone,
  ChevronRight,
  Shield
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO } from '../data/products';
import { Division } from '../types';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  activeDivision: Division;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectDivision: (division: Division) => void;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenTracking: () => void;
  onOpenAdmin: () => void;
  onOpenLogin: () => void;
  onOpenProfile: () => void;
  onScrollToFlat400: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  activeDivision,
  activeCategory,
  onSelectCategory,
  onSelectDivision,
  onOpenCart,
  onOpenSearch,
  onOpenTracking,
  onOpenAdmin,
  onOpenLogin,
  onOpenProfile,
  onScrollToFlat400
}) => {
  const { currentUser } = useAuth();
  const { lang, toggleLang, t } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('dg-theme');
    if (saved === 'dark') { setIsDark(true); document.body.classList.add('dark'); }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent background scrolling when side drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileDrawerOpen]);

  // Support external triggers for opening mobile drawer (e.g. from MobileBottomNav)
  useEffect(() => {
    const handleOpenDrawer = () => setMobileDrawerOpen(true);
    window.addEventListener('open-mobile-menu', handleOpenDrawer);
    return () => window.removeEventListener('open-mobile-menu', handleOpenDrawer);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.toggle('dark', next);
    localStorage.setItem('dg-theme', next ? 'dark' : 'light');
  };

  const navBg = isDark
    ? `bg-[#0a0a0a]/95 border-white/10 text-white`
    : `bg-white/97 border-black/8 text-[#111]`;

  const divisionActive = (div: string) => activeDivision === div;

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-all duration-300 ${navBg} ${scrolled ? 'shadow-sm' : ''}`}>

      {/* ── Marquee Strip ── */}
      <div className={`text-[11px] font-bold border-b overflow-hidden ${isDark ? 'bg-zinc-950 border-white/5 text-zinc-300' : 'bg-[#111] border-white/5 text-zinc-200'}`}>
        <div className="flex animate-marquee whitespace-nowrap gap-16 py-1.5">
          <span className="inline-flex items-center gap-2 font-black text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D1FE17] animate-ping" />
            DIL GARMENTS — TADIPATRI
          </span>
          <span className="text-red-400 font-black inline-flex items-center gap-1.5">
            <Flame className="w-3 h-3 fill-red-400" /> BAGGY SHIRTS &amp; PANTS @ FLAT ₹400 ONLY
          </span>
          <span className="text-[#F5B301] font-bold">FREE SHIPPING ABOVE ₹999 · CASH ON DELIVERY</span>
          <span className="text-zinc-300">
            WHATSAPP: <span className="text-[#25D366] font-black">9848988295 / 8341312155</span>
          </span>
          <span className="inline-flex items-center gap-2 font-black text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D1FE17] animate-ping" />
            DIL GARMENTS — TADIPATRI
          </span>
          <span className="text-red-400 font-black inline-flex items-center gap-1.5">
            <Flame className="w-3 h-3 fill-red-400" /> BAGGY SHIRTS &amp; PANTS @ FLAT ₹400 ONLY
          </span>
          <span className="text-[#F5B301] font-bold">FREE SHIPPING ABOVE ₹999 · CASH ON DELIVERY</span>
          <span className="text-zinc-300">
            WHATSAPP: <span className="text-[#25D366] font-black">9848988295 / 8341312155</span>
          </span>
        </div>
      </div>

      {/* ── Main Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] gap-4">

          {/* Logo */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => { onSelectCategory('all'); onSelectDivision('all'); }}
              className="flex flex-col text-left focus:outline-none group"
            >
              <span className={`text-2xl sm:text-[26px] font-black tracking-tight leading-none ${isDark ? 'text-white' : 'text-[#111]'} group-hover:text-[#F5B301] transition-colors`}>
                DIL GARMENTS
              </span>
              <span className={`text-[9px] tracking-[0.2em] uppercase font-bold mt-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                MEN · WOMEN · KIDS
              </span>
            </button>

            {/* Desktop nav links */}
            <nav className={`hidden lg:flex items-center gap-7 text-[12px] font-extrabold uppercase tracking-widest ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
              {[
                { label: 'Men', div: 'men' as Division, color: 'text-[#111] dark:text-white' },
                { label: 'Women', div: 'women' as Division, color: 'text-pink-500' },
                { label: 'Kids', div: 'kids' as Division, color: 'text-blue-500' },
              ].map(({ label, div, color }) => (
                <button
                  key={div}
                  onClick={() => { onSelectDivision(div); onSelectCategory('all'); }}
                  className={`relative py-2 transition-all hover:text-[#111] dark:hover:text-white ${
                    divisionActive(div) ? `${color}` : ''
                  }`}
                >
                  {label}
                  {divisionActive(div) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5B301] rounded-full" />
                  )}
                </button>
              ))}

              <button
                onClick={onScrollToFlat400}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600 text-white font-black text-[11px] shadow-md hover:bg-red-700 transition-all animate-pulse"
              >
                <Flame className="w-3 h-3 fill-white" />
                FLAT ₹400
              </button>
            </nav>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Dark/Light toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${isDark ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700' : 'bg-[#F5F5F5] text-zinc-600 hover:bg-zinc-200'}`}
              title="Toggle dark/light mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Telugu / English Language Switcher */}
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black transition-all ${
                isDark
                  ? 'bg-zinc-800 text-[#F5B301] hover:bg-zinc-700'
                  : 'bg-zinc-100 text-[#111] hover:bg-zinc-200'
              }`}
              title="Switch Language / భాషను మార్చండి (తెలుగు / English)"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {/* Track */}
            <button
              onClick={onOpenTracking}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all ${
                isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-[#111]'
              }`}
            >
              <Package className="w-4 h-4" />
              Track
            </button>

            {/* User Account / Login */}
            {currentUser ? (
              <button
                onClick={onOpenProfile}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#111] hover:bg-amber-500/20 transition-all"
                title="Your Profile"
              >
                <div className="w-5 h-5 rounded-full bg-[#F5B301] text-black font-black text-[10px] flex items-center justify-center">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:inline text-xs font-bold text-[#111]">{currentUser.name.split(' ')[0]}</span>
              </button>
            ) : (
              <button
                onClick={onOpenLogin}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isDark
                    ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Login</span>
              </button>
            )}

            {/* Search Icon Trigger */}
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-full transition-all ${isDark ? 'text-zinc-300 hover:bg-zinc-800' : 'text-zinc-600 hover:bg-zinc-100'}`}
              title="Search collection (⌘K)"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => onSelectCategory('all')}
              className={`relative p-2 rounded-full transition-all ${isDark ? 'text-zinc-300 hover:text-red-400 hover:bg-zinc-800' : 'text-zinc-500 hover:text-red-500 hover:bg-red-50'}`}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-red-500 text-[10px] font-black text-white flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart / Bag */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#F5B301] hover:text-black transition-all shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#F5B301] text-black text-[10px] font-black flex items-center justify-center group-hover:bg-black group-hover:text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className={`lg:hidden p-2 rounded-full ${isDark ? 'text-zinc-300 hover:bg-zinc-800' : 'text-zinc-600 hover:bg-zinc-100'}`}
              aria-label="Open side menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Category Strip ── */}
      <div className={`border-t ${isDark ? 'border-white/5 bg-[#0a0a0a]' : 'border-black/5 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1.5 py-2 overflow-x-auto no-scrollbar text-[11px] font-extrabold uppercase tracking-wider">
            {[
              { label: 'All', div: 'all' as Division, cat: 'all' },
              { label: "Men's", div: 'men' as Division, cat: 'all', icon: <Shirt className="w-3 h-3" /> },
              { label: "Women's", div: 'women' as Division, cat: 'all', icon: <Crown className="w-3 h-3" /> },
              { label: 'Kids', div: 'kids' as Division, cat: 'all', icon: <Baby className="w-3 h-3" /> },
            ].map(({ label, div, cat, icon }) => {
              const isActive = div === 'all'
                ? activeDivision === 'all' && activeCategory === 'all'
                : activeDivision === div;
              return (
                <button
                  key={div}
                  onClick={() => { onSelectDivision(div); onSelectCategory(cat); }}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#111] text-white shadow-sm'
                      : isDark
                        ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                        : 'text-zinc-500 hover:text-[#111] hover:bg-zinc-100'
                  }`}
                >
                  {icon}
                  {label}
                </button>
              );
            })}

            <button
              onClick={onScrollToFlat400}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-600 text-white font-black whitespace-nowrap hover:bg-red-700 transition-all shadow-sm"
            >
              <Flame className="w-3 h-3 fill-white" />
              Flat ₹400 Drop
            </button>

            {['baggy-shirts', 'baggy-pants', 'jackets'].map((cat) => {
              const labels: Record<string, string> = {
                'baggy-shirts': 'Baggy Shirts',
                'baggy-pants': 'Baggy Pants',
                'jackets': 'Jackets'
              };
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-[#F5B301] text-black font-black'
                      : isDark
                        ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                        : 'text-zinc-500 hover:text-[#111] hover:bg-zinc-100'
                  }`}
                >
                  {labels[cat]}
                </button>
              );
            })}

            <button
              onClick={() => {
                const el = document.getElementById('latest-collection');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                isDark ? 'text-[#D1FE17] hover:bg-zinc-800' : 'text-amber-700 hover:bg-amber-50'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#F5B301]" />
              Latest Drop
            </button>
          </div>
        </div>
      </div>

      {/* ── Animated Slide-over Mobile Side Menu Drawer ── */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Slide-over Drawer Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className={`relative w-[85%] max-w-[340px] h-full shadow-2xl flex flex-col z-10 overflow-hidden ${
                isDark ? 'bg-zinc-950 text-white' : 'bg-white text-[#111]'
              }`}
            >
              {/* Drawer Header */}
              <div className={`p-4 border-b flex items-center justify-between ${
                isDark ? 'border-white/10 bg-zinc-900' : 'border-zinc-100 bg-zinc-50'
              }`}>
                <div>
                  <h3 className="font-black text-lg tracking-tight leading-none text-[#111] dark:text-white">
                    DIL GARMENTS
                  </h3>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-[#F5B301]" /> Tadipatri, AP
                  </p>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className={`p-2 rounded-full transition-colors ${
                    isDark ? 'hover:bg-zinc-800 text-zinc-400' : 'hover:bg-zinc-200 text-zinc-600'
                  }`}
                  aria-label="Close side menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-5 text-sm">

                {/* Account / User Box */}
                {currentUser ? (
                  <div
                    onClick={() => { onOpenProfile(); setMobileDrawerOpen(false); }}
                    className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#F5B301] text-black font-black text-sm flex items-center justify-center shadow-sm">
                        {currentUser.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold text-xs text-[#111] dark:text-white">{currentUser.name}</div>
                        <div className="text-[10px] text-zinc-500">+91 {currentUser.phone}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </div>
                ) : (
                  <button
                    onClick={() => { onOpenLogin(); setMobileDrawerOpen(false); }}
                    className="w-full py-3 px-4 rounded-xl bg-[#111] text-white dark:bg-white dark:text-black font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <User className="w-4 h-4" />
                    <span>Login / Create Account</span>
                  </button>
                )}

                {/* Hot Deals Banner Button */}
                <button
                  onClick={() => { onScrollToFlat400(); setMobileDrawerOpen(false); }}
                  className="w-full p-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-md"
                >
                  <span className="flex items-center gap-2">
                    <Flame className="w-4 h-4 fill-white" />
                    <span>Flat ₹400 Drop Deals</span>
                  </span>
                  <span className="text-[10px] bg-white text-red-600 px-2 py-0.5 rounded-full font-black">HOT</span>
                </button>

                {/* Shop by Division */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-2">
                    Shop by Gender
                  </span>
                  <div className="space-y-1">
                    {[
                      { label: "Men's Streetwear & Shirts", div: 'men' as Division, icon: <Shirt className="w-4 h-4" /> },
                      { label: "Women's Gowns & Kurtis", div: 'women' as Division, icon: <Crown className="w-4 h-4 text-pink-500" /> },
                      { label: "Kids Street & Frock Sets", div: 'kids' as Division, icon: <Baby className="w-4 h-4 text-blue-500" /> },
                    ].map(({ label, div, icon }) => (
                      <button
                        key={div}
                        onClick={() => {
                          onSelectDivision(div);
                          onSelectCategory('all');
                          setMobileDrawerOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition-colors ${
                          activeDivision === div
                            ? 'bg-[#F5B301]/20 text-[#111] dark:text-white border border-[#F5B301]/40'
                            : 'hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          {icon}
                          <span>{label}</span>
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Categories */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-2">
                    Popular Categories
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: 'Baggy Shirts', cat: 'baggy-shirts' },
                      { label: 'Korean Pants', cat: 'baggy-pants' },
                      { label: 'Jackets & Flannels', cat: 'jackets' },
                      { label: 'All Products', cat: 'all' },
                    ].map(({ label, cat }) => (
                      <button
                        key={cat}
                        onClick={() => {
                          onSelectCategory(cat);
                          setMobileDrawerOpen(false);
                        }}
                        className={`p-2.5 rounded-xl text-left text-xs font-bold border transition-colors ${
                          activeCategory === cat
                            ? 'bg-[#111] text-white border-[#111] dark:bg-white dark:text-black'
                            : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Services */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-2">
                    Customer Services
                  </span>
                  <div className="space-y-1">
                    <button
                      onClick={() => { onOpenTracking(); setMobileDrawerOpen(false); }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="flex items-center gap-2.5">
                        <Package className="w-4 h-4 text-emerald-600" />
                        <span>Track My Order</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    </button>

                    <button
                      onClick={() => { toggleLang(); }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="flex items-center gap-2.5">
                        <Globe className="w-4 h-4 text-amber-600" />
                        <span>భాష / Language</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black">
                        {lang === 'en' ? 'తెలుగు' : 'English'}
                      </span>
                    </button>

                    <button
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="flex items-center gap-2.5">
                        {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
                        <span>Theme Mode</span>
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">
                        {isDark ? 'Dark' : 'Light'}
                      </span>
                    </button>

                    {/* Admin Portal Trigger */}
                    <button
                      onClick={() => {
                        onOpenAdmin();
                        setMobileDrawerOpen(false);
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold hover:bg-amber-500/10 text-zinc-500 hover:text-amber-500 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <Shield className="w-4 h-4 text-[#F5B301]" />
                        <span>Admin Portal</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                        Staff
                      </span>
                    </button>
                  </div>
                </div>

                {/* Tadipatri Store Contact Card */}
                <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 space-y-2">
                  <div className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>DIL Garments, Tadipatri Store</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 leading-relaxed">
                    D.No. 3/418, Opp. Markandeya Swamy Temple, C.B. Road, Tadipatri - 515411.
                  </p>
                  <div className="pt-1 flex gap-2">
                    <a
                      href="https://wa.me/919848988295"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-[#25D366] text-white text-[11px] font-black flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                    <a
                      href="tel:9848988295"
                      className="py-2 px-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-[#111] dark:text-white text-[11px] font-bold flex items-center justify-center gap-1"
                    >
                      <Phone className="w-3 h-3" /> Call
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};
