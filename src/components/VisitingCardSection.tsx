import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  MessageCircle, 
  ExternalLink,
  Award,
  Store
} from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const VisitingCardSection: React.FC = () => {
  return (
    <section id="visiting-card" className="py-20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5B301]/10 border border-[#F5B301]/30 text-[#F5B301] text-xs font-mono font-bold uppercase">
            <Store className="w-3.5 h-3.5" />
            <span>Storefront Verification & Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
            OUR TADIPATRI STORE
          </h2>
          <p className="text-zinc-400 text-sm">
            Visit us in person or place direct telephone & WhatsApp orders with proprietor N. Shaiksha Vali.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visiting Card Showcase Image (Spans 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative p-2 sm:p-4 rounded-3xl bg-gradient-to-br from-white/10 via-zinc-900 to-black border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
              {/* Actual Visiting Card Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-white/10">
                <img
                  src="/visiting_card.jpg"
                  alt="DIL Garments Visiting Card - N. Shaiksha Vali Tadipatri"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Card Ribbon Overlay */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 text-xs font-mono text-zinc-300">
                <span className="flex items-center gap-1.5 text-[#D1FE17]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GSTIN VERIFIED: {STORE_INFO.gstin}</span>
                </span>
                <span className="text-zinc-400">
                  Prop: {STORE_INFO.proprietor}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Store Info & Quick Contact Actions (Spans 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-3xl bg-zinc-900/70 border border-white/10 backdrop-blur-md space-y-4">
              <div>
                <span className="text-xs font-mono uppercase text-[#F5B301] font-bold tracking-wider">
                  Physical Store Address
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {STORE_INFO.name}
                </h3>
                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  {STORE_INFO.address.line1},<br />
                  {STORE_INFO.address.line2},<br />
                  <strong className="text-white">{STORE_INFO.address.town} - {STORE_INFO.address.pincode}</strong>,<br />
                  {STORE_INFO.address.district}, {STORE_INFO.address.state}
                </p>
              </div>

              {/* Interactive Directions Link */}
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-[#F5B301] hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Phone Numbers with 1-click dial */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-mono uppercase text-zinc-400 font-bold tracking-wider">
                  Direct Phone Lines:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="tel:9848988295"
                    className="p-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 border border-white/5 text-white text-xs font-mono font-bold flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D1FE17]" />
                    <span>9848988295</span>
                  </a>
                  <a
                    href="tel:8341312155"
                    className="p-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 border border-white/5 text-white text-xs font-mono font-bold flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#F5B301]" />
                    <span>8341312155</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp direct concierge */}
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hello N. Shaiksha Vali garu! I want to inquire about clothing stock at DIL Garments Tadipatri.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,211,102,0.3)] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Chat with N. Shaiksha Vali</span>
              </a>
            </div>

            {/* Operating Hours & Promise */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3 text-xs text-zinc-400">
              <Award className="w-6 h-6 text-[#F5B301] shrink-0" />
              <div>
                <strong className="text-white block">Open 7 Days a Week</strong>
                <span>10:00 AM – 9:30 PM • C.B. Road, Tadipatri</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
