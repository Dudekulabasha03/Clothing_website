import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, Search, Truck, CheckCircle2, Clock, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/products';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({ isOpen, onClose }) => {
  const [orderInput, setOrderInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [searchResult, setSearchResult] = useState<any | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    // Simulate real tracking for DIL Garments
    if (orderInput.trim() || phoneInput.trim()) {
      setSearchResult({
        orderId: orderInput.trim() || `DG-482910`,
        status: 'Out for Delivery / In Transit',
        origin: 'DIL Garments Store, C.B. Road, Tadipatri',
        destination: 'Customer Delivery Address',
        carrier: 'DTDC / Professional Courier Express',
        steps: [
          { label: 'Order Confirmed & Packed', done: true, time: 'Today, 10:30 AM' },
          { label: 'Dispatched from Tadipatri Hub', done: true, time: 'Today, 02:15 PM' },
          { label: 'In Transit to Local Delivery Center', done: true, time: 'Today, 05:40 PM' },
          { label: 'Out for Delivery', done: false, time: 'Expected Tomorrow' }
        ]
      });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 p-6 sm:p-8 space-y-6"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5B301] font-bold">
              <Package className="w-4 h-4" />
              <span>Real-Time Logistics</span>
            </div>
            <h2 className="text-2xl font-extrabold uppercase text-white font-display mt-1">
              Track Your Order
            </h2>
            <p className="text-xs text-zinc-400">
              Enter your DIL Garments Order ID or mobile number to check delivery status.
            </p>
          </div>

          <form onSubmit={handleTrack} className="space-y-4">
            <div>
              <label className="text-xs text-zinc-300 block mb-1">Order ID</label>
              <input
                type="text"
                value={orderInput}
                onChange={(e) => setOrderInput(e.target.value)}
                placeholder="e.g. DG-829104"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm outline-none focus:border-[#F5B301]"
              />
            </div>

            <div>
              <label className="text-xs text-zinc-300 block mb-1">Or Mobile Number</label>
              <input
                type="tel"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder="e.g. 9848988295"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm outline-none focus:border-[#F5B301]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#F5B301] hover:bg-[#ffc117] text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Track Parcel</span>
            </button>
          </form>

          {/* Result Card */}
          {hasSearched && searchResult && (
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div>
                  <span className="text-zinc-400 block text-[10px] font-mono">ORDER NUMBER</span>
                  <span className="text-white font-bold font-mono text-sm">{searchResult.orderId}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px]">
                  {searchResult.status}
                </span>
              </div>

              {/* Progress Steps */}
              <div className="space-y-3 pt-1">
                {searchResult.steps.map((step: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {step.done ? (
                        <CheckCircle2 className="w-4 h-4 text-[#D1FE17]" />
                      ) : (
                        <Clock className="w-4 h-4 text-zinc-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${step.done ? 'text-zinc-200' : 'text-zinc-500'}`}>
                        {step.label}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-mono">{step.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-zinc-400 text-[11px]">
                <span>Carrier: {searchResult.carrier}</span>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello! Please update me on tracking for ${searchResult.orderId}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-bold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" /> WhatsApp Help
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
