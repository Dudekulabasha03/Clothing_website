import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Star, Heart, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

interface CustomerLook {
  id: string;
  name: string;
  location: string;
  product: string;
  image: string;
  rating: number;
  caption: string;
  tag: string;
}

const CUSTOMER_LOOKS: CustomerLook[] = [
  {
    id: 'cl-1',
    name: 'Karthik Reddy',
    location: 'Tadipatri',
    product: 'Oversized Boxy Flannel Shirt',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'The baggy flannel drape is 🔥 exactly what I wanted. Street fit is real!',
    tag: 'Baggy Shirt @ ₹400',
  },
  {
    id: 'cl-2',
    name: 'Syed Imran',
    location: 'Guntakal',
    product: 'Korean Double-Pleat Baggy Pants',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Korean drape is 💯. Width is perfect. Best ₹400 ever spent!',
    tag: 'Baggy Pants @ ₹400',
  },
  {
    id: 'cl-3',
    name: 'Sneha Varma',
    location: 'Anantapur',
    product: 'Terracotta Anarkali Maxi Gown',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Wore this to my cousin\'s wedding. So many compliments ✨ Love DIL Garments!',
    tag: 'Women\'s Gown',
  },
  {
    id: 'cl-4',
    name: 'Ravi Kumar',
    location: 'Dhone',
    product: 'AXIS Heavy Diamond Athletic Jersey',
    image: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Wore this to college every day this week. Quality material, great fit.',
    tag: 'Men\'s Streetwear',
  },
  {
    id: 'cl-5',
    name: 'Fatima Sheikh',
    location: 'Tadipatri',
    product: 'Pure Chanderi Silk Kurti Set',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Silk quality is amazing. Very satisfied with my order from Dil Garments 💕',
    tag: 'Women\'s Kurti',
  },
  {
    id: 'cl-6',
    name: 'Naveen Goud',
    location: 'Kurnool',
    product: 'Crinkle Nylon Parachute Track Pants',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    caption: 'Parachute fit is exactly like I saw online. Material is top quality for ₹400.',
    tag: 'Baggy Pants @ ₹400',
  },
];

export const CustomerLooks: React.FC = () => {
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const toggleLike = (id: string) => {
    setLiked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
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

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {CUSTOMER_LOOKS.map((look, i) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-shadow"
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
                  onClick={() => toggleLike(look.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-transform active:scale-90"
                >
                  <Heart
                    className={`w-3.5 h-3.5 transition-colors ${liked.has(look.id) ? 'fill-red-500 text-red-500' : 'text-zinc-500'}`}
                  />
                </button>

                {/* Bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                  <div className="flex text-[#F5B301] mb-1">
                    {Array.from({ length: look.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
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
                  <p className="text-xs font-bold text-[#111]">{look.name}</p>
                  <p className="text-[10px] text-zinc-400">{look.location}</p>
                </div>
                <a
                  href={`https://wa.me/919848988295?text=${encodeURIComponent(`Hi! I saw ${look.name}'s look for "${look.product}" and I want the same!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] text-[10px] font-bold hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle className="w-3 h-3" />
                  Get This Look
                </a>
              </div>
            </motion.div>
          ))}
        </div>

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
