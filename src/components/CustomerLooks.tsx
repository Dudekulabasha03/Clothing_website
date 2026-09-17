import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Star, Heart, MessageCircle, Sparkles, ArrowRight, X, CheckCircle2, MapPin } from 'lucide-react';

interface CustomerLook {
  id: string;
  name: string;
  location: string;
  product: string;
  image: string;
  rating: number;
  caption: string;
  tag: string;
  likes: number;
  verifiedOrder: boolean;
}

const CUSTOMER_LOOKS: CustomerLook[] = [
  {
    id: 'cl-1',
    name: 'Karthik Reddy',
    location: 'Tadipatri',
    product: 'Oversized Boxy Flannel Shirt',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'The baggy flannel drape is 🔥 exactly what I wanted. Bought directly from the Tadipatri showroom opposite Markandeya Swamy temple!',
    tag: 'Baggy Shirt @ ₹400',
    likes: 48,
    verifiedOrder: true,
  },
  {
    id: 'cl-2',
    name: 'Syed Imran',
    location: 'Guntakal',
    product: 'Korean Double-Pleat Baggy Pants',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Korean drape is 💯. Width is perfect for chunky sneakers. Best ₹400 ever spent!',
    tag: 'Baggy Pants @ ₹400',
    likes: 62,
    verifiedOrder: true,
  },
  {
    id: 'cl-3',
    name: 'Sneha Varma',
    location: 'Anantapur',
    product: 'Terracotta Anarkali Maxi Gown',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Wore this to my cousin\'s wedding. So many compliments ✨ Love DIL Garments collection!',
    tag: 'Women\'s Gown',
    likes: 85,
    verifiedOrder: true,
  },
  {
    id: 'cl-4',
    name: 'Ravi Kumar',
    location: 'Dhone',
    product: 'AXIS Heavy Athletic Jersey T-Shirt',
    image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Wore this to college every day this week. Quality fabric, heavyweight drape.',
    tag: 'Men\'s Streetwear',
    likes: 39,
    verifiedOrder: true,
  },
  {
    id: 'cl-5',
    name: 'Fatima Sheikh',
    location: 'Tadipatri',
    product: 'Pure Chanderi Silk Kurti Set',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Silk finish is rich and stitching is top notch. Got it altered right at the showroom 💕',
    tag: 'Women\'s Kurti',
    likes: 71,
    verifiedOrder: true,
  },
  {
    id: 'cl-6',
    name: 'Naveen Goud',
    location: 'Kurnool',
    product: 'Crinkle Nylon Parachute Track Pants',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Parachute fit is exactly like trending Reels. Premium finish for ₹400.',
    tag: 'Baggy Pants @ ₹400',
    likes: 54,
    verifiedOrder: true,
  },
];

interface CustomerLooksProps {
  onShopProduct?: (query: string) => void;
}

export const CustomerLooks: React.FC<CustomerLooksProps> = ({ onShopProduct }) => {
  const [liked, setLiked] = useState<Set<string>>(new Set());
  const [activeCity, setActiveCity] = useState<string>('All');
  const [selectedLook, setSelectedLook] = useState<CustomerLook | null>(null);

  const CITIES = ['All', 'Tadipatri', 'Anantapur', 'Kurnool', 'Guntakal', 'Dhone'];

  const toggleLike = (id: string) => {
    setLiked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filteredLooks = activeCity === 'All'
    ? CUSTOMER_LOOKS
    : CUSTOMER_LOOKS.filter(l => l.location.toLowerCase() === activeCity.toLowerCase());

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-[11px] font-black uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              Real Customers, Real Looks
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#111] leading-none">
              CUSTOMER LOOKS
            </h2>
            <p className="text-zinc-500 text-sm mt-2">From streets of Tadipatri to your screen 📸</p>
          </div>

          <a
            href={`https://wa.me/919848988295?text=${encodeURIComponent('Hi! I want to share my DIL Garments look and get featured on your website!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#F5B301] hover:text-black transition-all"
          >
            <Camera className="w-3.5 h-3.5" />
            Share Your Look
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Town / City Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider whitespace-nowrap mr-1">
            Browse by City:
          </span>
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`h-7 px-3.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeCity === city
                  ? 'bg-[#111] text-white shadow-sm'
                  : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400'
              }`}
            >
              {city !== 'All' && <MapPin className="w-3 h-3 text-red-500" />}
              <span>{city}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {filteredLooks.map((look, i) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-all cursor-pointer border border-zinc-200/60"
              onClick={() => setSelectedLook(look)}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={look.image}
                  alt={`${look.name} wearing ${look.product}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Tag overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black text-[#111] shadow-sm">
                    {look.tag}
                  </span>
                </div>
                {/* Like */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleLike(look.id); }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-transform active:scale-90 flex items-center gap-1"
                >
                  <Heart
                    className={`w-3.5 h-3.5 transition-colors ${liked.has(look.id) ? 'fill-red-500 text-red-500' : 'text-zinc-500'}`}
                  />
                  <span className="text-[10px] font-bold text-zinc-700">
                    {look.likes + (liked.has(look.id) ? 1 : 0)}
                  </span>
                </button>

                {/* Bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3.5 sm:p-4">
                  <div className="flex text-[#F5B301] mb-1">
                    {Array.from({ length: look.rating }).map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-white text-[11px] font-semibold leading-tight line-clamp-2 italic">
                    "{look.caption}"
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#111] flex items-center gap-1">
                    <span>{look.name}</span>
                    {look.verifiedOrder && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 fill-emerald-100" />
                    )}
                  </p>
                  <p className="text-[10px] text-zinc-400 flex items-center gap-0.5">
                    <MapPin className="w-2.5 h-2.5 text-zinc-400" /> {look.location}
                  </p>
                </div>
                <a
                  href={`https://wa.me/919848988295?text=${encodeURIComponent(`Hi! I saw ${look.name}'s look for "${look.product}" from ${look.location} and I want the same!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] text-[10px] font-bold hover:bg-[#25D366] hover:text-white transition-all shrink-0"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Order Fit</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔍 Lightbox Pop-up Modal when clicking a Customer Look */}
        <AnimatePresence>
          {selectedLook && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
                onClick={() => setSelectedLook(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 p-6 text-white space-y-4"
              >
                <button
                  onClick={() => setSelectedLook(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white hover:bg-black transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
                  <img
                    src={selectedLook.image}
                    alt={selectedLook.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-black font-black text-xs shadow-md">
                    {selectedLook.tag}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-black text-base flex items-center gap-1.5">
                        <span>{selectedLook.name}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          ✓ Verified Buyer
                        </span>
                      </h4>
                      <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-red-500" /> {selectedLook.location}, AP
                      </p>
                    </div>
                    <div className="flex text-[#F5B301]">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed italic bg-zinc-900 p-3 rounded-xl border border-white/5">
                    "{selectedLook.caption}"
                  </p>

                  <div className="pt-2 flex gap-3">
                    <a
                      href={`https://wa.me/919848988295?text=${encodeURIComponent(`Hi N. Shaiksha Vali! I want to order the exact outfit worn by ${selectedLook.name} (${selectedLook.product}). Please check size availability.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl bg-[#25D366] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 fill-black" />
                      Order Outfit on WhatsApp
                    </a>
                    <a
                      href="#catalog"
                      onClick={() => {
                        setSelectedLook(null);
                        if (onShopProduct) onShopProduct(selectedLook.product);
                      }}
                      className="px-4 py-3 rounded-xl bg-white text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#F5B301] transition-colors"
                    >
                      <span>Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* CTA Banner */}
        <div className="mt-10 rounded-2xl bg-[#111] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[#F5B301] text-xs font-black uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 inline mr-1" />
              Want to be featured here?
            </p>
            <h3 className="text-white text-xl font-black">Share your DIL Garments look!</h3>
            <p className="text-zinc-500 text-xs mt-1">
              WhatsApp us your photo wearing our clothes &amp; get featured on the website!
            </p>
          </div>
          <a
            href={`https://wa.me/919848988295?text=${encodeURIComponent('Hi! I want to share my DIL Garments look and get featured on your website!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-black text-sm hover:bg-green-500 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Your Photo
          </a>
        </div>
      </div>
    </section>
  );
};
