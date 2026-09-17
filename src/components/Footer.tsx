import React from 'react';
import {
  MapPin,
  Phone,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  Truck,
  RotateCcw,
  CreditCard,
  Star,
  ExternalLink,
  Clock,
  Ruler
} from 'lucide-react';
import { STORE_INFO, TESTIMONIALS } from '../data/products';
import { Division } from '../types';

interface FooterProps {
  onSelectDivision: (division: Division) => void;
  onSelectCategory: (category: string) => void;
  onOpenVisitingCard: () => void;
  onOpenSizeGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectDivision,
  onSelectCategory,
  onOpenSizeGuide,
}) => {
  return (
    <footer className="bg-[#111] text-zinc-400 pt-16 pb-10">

      {/* ── Testimonials ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-white/8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F5B301] block mb-1">Customer Testimonials</span>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            TRUSTED ACROSS TADIPATRI &amp; ANDHRA
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-5 rounded-2xl bg-white/4 border border-white/6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-[#F5B301]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  ✓ Verified
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed italic">"{t.comment}"</p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                <strong className="text-white">{t.name}</strong>
                <span className="text-zinc-500">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trust Pillars ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-white/8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { icon: <Truck className="w-6 h-6 mx-auto mb-2 text-[#F5B301]" />, title: 'Free Delivery', sub: 'On orders above ₹999' },
            { icon: <CreditCard className="w-6 h-6 mx-auto mb-2 text-green-400" />, title: 'Cash on Delivery', sub: 'Pay when you receive' },
            { icon: <RotateCcw className="w-6 h-6 mx-auto mb-2 text-blue-400" />, title: 'Easy Returns', sub: '7-day exchange via WhatsApp' },
            { icon: <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-purple-400" />, title: 'GST Verified', sub: STORE_INFO.gstin },
          ].map((item) => (
            <div key={item.title}>
              {item.icon}
              <p className="text-white font-black text-sm">{item.title}</p>
              <p className="text-zinc-500 text-[11px] mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Footer Links + Map ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-2xl font-black text-white tracking-tight">DIL GARMENTS</span>
              <p className="text-[#F5B301] text-[11px] font-black uppercase tracking-wider mt-0.5">
                Kidswear · Gents Wear · Ladies Wear
              </p>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Tadipatri's premier clothing store offering authentic oversized streetwear, Korean trousers, festive gowns, and kids' fashion under one roof.
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D1FE17]" />
                <span>GSTIN: <strong className="text-white">{STORE_INFO.gstin}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="text-[#F5B301]">Proprietor:</span>
                <strong className="text-white">{STORE_INFO.proprietor}</strong>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className="space-y-3 text-xs">
            <h4 className="text-white font-black uppercase tracking-wider text-[11px]">Shop</h4>
            <ul className="space-y-2">
              {[
                { label: "Men's Streetwear", fn: () => onSelectDivision('men') },
                { label: "Women's Designer Wear", fn: () => onSelectDivision('women') },
                { label: 'Kids Wear', fn: () => onSelectDivision('kids') },
                { label: 'Baggy Shirts @ ₹400', fn: () => onSelectCategory('baggy-shirts') },
                { label: 'Korean Baggy Pants @ ₹400', fn: () => onSelectCategory('baggy-pants') },
                { label: 'Jackets & Hoodies', fn: () => onSelectCategory('jackets') },
              ].map((link) => (
                <li key={link.label}>
                  <button onClick={link.fn} className="hover:text-white transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-3 text-xs">
            <h4 className="text-white font-black uppercase tracking-wider text-[11px]">Help</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Ruler className="w-3 h-3" /> Size Guide
                </button>
              </li>
              <li>
                <a href={`https://wa.me/919848988295?text=${encodeURIComponent('Hi! I want to track my order.')}`}
                  target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <MessageCircle className="w-3 h-3" /> Track Order
                </a>
              </li>
              <li>
                <a href={`https://wa.me/919848988295?text=${encodeURIComponent('Hi! I need help with a return or exchange.')}`}
                  target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <RotateCcw className="w-3 h-3" /> Returns & Exchange
                </a>
              </li>
              <li>
                <a href="tel:9848988295" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Phone className="w-3 h-3" /> Call: 9848988295
                </a>
              </li>
              <li>
                <a href="tel:8341312155" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Phone className="w-3 h-3" /> Call: 8341312155
                </a>
              </li>
            </ul>
          </div>

          {/* Store Info + Hours */}
          <div className="space-y-3 text-xs">
            <h4 className="text-white font-black uppercase tracking-wider text-[11px]">Visit Us</h4>
            <p className="text-zinc-400 leading-relaxed">
              {STORE_INFO.address.line1},<br />
              {STORE_INFO.address.line2},<br />
              <strong className="text-white">{STORE_INFO.address.town}</strong> - {STORE_INFO.address.pincode}<br />
              {STORE_INFO.address.district}, {STORE_INFO.address.state}
            </p>
            <div className="flex items-start gap-1.5 text-zinc-400">
              <Clock className="w-3 h-3 mt-0.5 text-[#F5B301]" />
              <span>Mon–Sun: 9:00 AM – 9:00 PM</span>
            </div>
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#F5B301] hover:underline font-bold"
            >
              <MapPin className="w-3 h-3" />
              Get Directions
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

        {/* ── Google Maps Embed ── */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/8">
          <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/8">
            <MapPin className="w-4 h-4 text-[#F5B301]" />
            <span className="text-white font-bold text-sm">DIL Garments — Tadipatri Store Location</span>
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-[11px] text-zinc-400 hover:text-white flex items-center gap-1"
            >
              Open in Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <iframe
            title="DIL Garments Location — Tadipatri"
            src="https://maps.google.com/maps?q=Markandeya+Swamy+Temple+CB+Road+Tadipatri+515411+Andhra+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="260"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p className="text-zinc-600 text-center sm:text-left">
          © {new Date().getFullYear()} DIL Garments, Tadipatri. GSTIN: {STORE_INFO.gstin}. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4 text-zinc-600 text-[11px]">
          <span>COD Available</span>
          <span>·</span>
          <span>UPI Accepted</span>
          <span>·</span>
          <span>GST Verified Business</span>
          <span>·</span>
          <a href="#admin" className="hover:text-zinc-400 transition-colors">Store Management</a>
        </div>
      </div>
    </footer>
  );
};
