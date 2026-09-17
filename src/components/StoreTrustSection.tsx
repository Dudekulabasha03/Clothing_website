import React from 'react';
import { Building2, Truck, MessageCircle, FileCheck, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export const StoreTrustSection: React.FC = () => {
  return (
    <section className="py-12 bg-zinc-50/80 dark:bg-zinc-950/60 border-y border-black/[0.05] dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest mb-2 border border-amber-500/20">
            <Sparkles className="w-3 h-3 text-[#E5A812]" />
            TADIPATRI&#39;S TRUSTED FASHION DESTINATION
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#0A0A0A] dark:text-white tracking-tight">
            Why Customers Love DIL Garments
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Bringing trending Korean street fits &amp; festive grace straight from Tadipatri to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Pillar 1: Tadipatri Store */}
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-amber-200/50 dark:border-amber-700/30">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-black text-sm text-[#0A0A0A] dark:text-white mb-1">
              Visit Tadipatri Showroom
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Opp. Markandeya Swamy Temple, C.B. Road. Walk in, try on any style in our trial rooms &amp; pick up in minutes.
            </p>
          </div>

          {/* Pillar 2: 24h Dispatch */}
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-emerald-200/50 dark:border-emerald-700/30">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-black text-sm text-[#0A0A0A] dark:text-white mb-1">
              24-Hour Express Dispatch
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Every parcel is checked, hand-packed, and shipped within 24 hours across Andhra Pradesh, Telangana &amp; Pan-India.
            </p>
          </div>

          {/* Pillar 3: WhatsApp Support */}
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-green-200/50 dark:border-green-700/30">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-black text-sm text-[#0A0A0A] dark:text-white mb-1">
              Direct WhatsApp Support
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Instant size assistance or photo inquiries directly with proprietor N. Shaiksha Vali at <span className="font-bold text-zinc-700 dark:text-zinc-300">9848988295</span>.
            </p>
          </div>

          {/* Pillar 4: GST Billing */}
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/10 shadow-sm hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-blue-200/50 dark:border-blue-700/30">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-black text-sm text-[#0A0A0A] dark:text-white mb-1">
              100% Genuine with GST Bill
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Registered business under GSTIN <span className="font-mono font-bold text-zinc-700 dark:text-zinc-300">37ELBPS4685D2ZQ</span>. Official tax invoice included with every order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
