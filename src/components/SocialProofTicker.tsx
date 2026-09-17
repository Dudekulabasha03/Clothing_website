import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, CheckCircle2, MapPin } from 'lucide-react';

interface PurchaseEvent {
  name: string;
  city: string;
  item: string;
  price: number;
  timeAgo: string;
  image: string;
}

const RECENT_PURCHASES: PurchaseEvent[] = [
  {
    name: 'Karthik R.',
    city: 'Tadipatri',
    item: 'Korean Double-Pleat Baggy Pants',
    price: 400,
    timeAgo: '2 minutes ago',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Suresh V.',
    city: 'Anantapur',
    item: 'Drop-Shoulder Boxy Flannel Shirt',
    price: 400,
    timeAgo: '7 minutes ago',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Lakshmi P.',
    city: 'Tadipatri',
    item: 'Embroidered Anarkali Festive Gown',
    price: 649,
    timeAgo: '14 minutes ago',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Naveen Kumar',
    city: 'Guntakal',
    item: 'Complete Fit Combo (Shirt + Pants)',
    price: 750,
    timeAgo: '21 minutes ago',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Md. Imran',
    city: 'Kurnool',
    item: 'Oversized Japanese Street Tee',
    price: 399,
    timeAgo: '32 minutes ago',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80',
  },
];

export const SocialProofTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after initial 6 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    // Rotate every 24 seconds (show for 6s, hide for 18s)
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % RECENT_PURCHASES.length);
        setIsVisible(true);
      }, 10000); // 10s gap between toasts
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const current = RECENT_PURCHASES[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-24 left-4 z-40 max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-zinc-200 shadow-xl"
        >
          <div className="flex items-start gap-3">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0">
              <img
                src={current.image}
                alt={current.item}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px]">
                ✓
              </div>
            </div>

            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400">
                <span className="text-green-600 flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Verified Order
                </span>
                <span>·</span>
                <span>{current.timeAgo}</span>
              </div>
              <p className="text-xs font-black text-[#111] line-clamp-1 mt-0.5">
                {current.name} from <span className="text-amber-700">{current.city}</span>
              </p>
              <p className="text-[11px] text-zinc-600 line-clamp-1">
                Purchased <strong className="text-[#111]">{current.item}</strong> (₹{current.price})
              </p>
            </div>

            <button
              onClick={() => { setIsVisible(false); setDismissed(true); }}
              className="p-1 rounded-md text-zinc-400 hover:text-zinc-600"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
