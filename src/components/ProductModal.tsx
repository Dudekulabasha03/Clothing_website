import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Star, 
  ShoppingBag, 
  MessageCircle, 
  Check, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Ruler,
  Share2,
  Zap,
  ThumbsUp,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  Eye,
  Flame,
  ZoomIn,
  ZoomOut,
  Plus,
  Camera,
  Upload,
  Image as ImageIcon,
  Filter
} from 'lucide-react';
import { Product, ProductReview } from '../types';
import { formatINR, createWhatsAppOrderLink } from '../lib/utils';
import { STORE_INFO } from '../data/products';
import { FindMyFitModal } from './FindMyFitModal';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onBuyNow?: (product: Product, size: string, color: string) => void;
}

const REVIEWS_STORAGE_KEY = 'dilgarments_reviews_v2';

const SAMPLE_PHOTO_PRESETS = [
  { label: 'Green Checked Flannel Fit', url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80' },
  { label: 'Korean Baggy Cargo Fit', url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80' },
  { label: 'Drop-Shoulder Streetwear Fit', url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' },
  { label: 'Anarkali Festive Gown Fit', url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80' },
];

const DEFAULT_REVIEWS: ProductReview[] = [
  {
    id: 'r1',
    name: 'M. Sai Krishna',
    city: 'Tadipatri, AP',
    rating: 5,
    date: '2 days ago',
    comment: 'Superb quality fabric! Checked fitting at the Tadipatri showroom opposite Markandeya temple before taking. Heavy cotton, clean drop-shoulder cut, and neat stitching.',
    photoUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulVotes: 14,
    sizePurchased: 'L',
    fitFeedback: 'Perfect oversized',
    height: "5'9\"",
    weight: '72kg'
  },
  {
    id: 'r2',
    name: 'Venkat Reddy',
    city: 'Anantapur',
    rating: 5,
    date: '5 days ago',
    comment: 'The baggy fit is 10/10. Exactly the trending streetwear silhouette you see on Snitch & Instagram, but at genuine Tadipatri prices. Parachute pockets look rugged.',
    photoUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulVotes: 9,
    sizePurchased: '32',
    fitFeedback: 'True to size',
    height: "5'11\"",
    weight: '68kg'
  },
  {
    id: 'r3',
    name: 'Anusha P.',
    city: 'Kadapa',
    rating: 5,
    date: '1 week ago',
    comment: 'Ordered for festive occasion. The flare and fabric softness exceeded expectations. Fast delivery across Rayalaseema too!',
    photoUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulVotes: 7,
    sizePurchased: 'M',
    fitFeedback: 'True to size',
    height: "5'4\"",
    weight: '56kg'
  },
  {
    id: 'r4',
    name: 'K. Harish',
    city: 'Kurnool',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Bought during the Flat ₹400 drop. Color didn\'t bleed or shrink after 3 machine washes. Very satisfied with DIL Garments.',
    photoUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    verified: true,
    helpfulVotes: 11,
    sizePurchased: 'XL',
    fitFeedback: 'Runs slightly loose',
    height: "6'0\"",
    weight: '82kg'
  }
];

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState<string>(product.imageUrl);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'reviews'>('details');

  // Reviews state with localStorage persistence
  const [reviewsList, setReviewsList] = useState<ProductReview[]>(() => {
    try {
      const saved = localStorage.getItem(REVIEWS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_REVIEWS;
  });

  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewCity, setNewReviewCity] = useState('Tadipatri');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewPhoto, setNewReviewPhoto] = useState('');
  const [newReviewSize, setNewReviewSize] = useState(product.sizes[0] || 'M');
  const [newReviewFit, setNewReviewFit] = useState<'Runs small' | 'True to size' | 'Runs slightly loose' | 'Perfect oversized'>('Perfect oversized');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [filterPhotosOnly, setFilterPhotosOnly] = useState(false);
  const [selectedPhotoPreview, setSelectedPhotoPreview] = useState<{ url: string; name: string; city: string; comment: string; size?: string } | null>(null);

  // Find My Fit Modal State
  const [isFindMyFitOpen, setIsFindMyFitOpen] = useState(false);

  // 🔍 Interactive Fabric Zoom State
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  // 📍 Pincode Delivery & Tadipatri Pickup Checker State
  const [pincode, setPincode] = useState('515411');
  const [pincodeResult, setPincodeResult] = useState<{
    type: 'pickup' | 'express-ap' | 'standard';
    city: string;
    timeline: string;
    badge: string;
  } | null>({
    type: 'pickup',
    city: 'Tadipatri (Local Showroom)',
    timeline: '⚡ Same-Day Pickup (Ready in 2h) or Free Doorstep Delivery today',
    badge: 'Tadipatri Local Hub'
  });

  const checkPincode = (code: string) => {
    const clean = code.trim();
    if (clean.length < 6) {
      setPincodeResult(null);
      return;
    }
    if (clean === '515411' || clean.startsWith('5154')) {
      setPincodeResult({
        type: 'pickup',
        city: 'Tadipatri & Surroundings',
        timeline: '⚡ Same-Day Store Pickup (Ready in 2h) or Delivery Today',
        badge: 'Tadipatri Local Store Hub'
      });
    } else if (clean.startsWith('515') || clean.startsWith('518') || clean.startsWith('516') || clean.startsWith('517')) {
      setPincodeResult({
        type: 'express-ap',
        city: 'Rayalaseema (Anantapur / Kurnool / Kadapa)',
        timeline: '🚚 Express 24–36h Dispatch via Direct AP Bus & Courier',
        badge: 'Express Rayalaseema'
      });
    } else if (clean.startsWith('50') || clean.startsWith('52') || clean.startsWith('53')) {
      setPincodeResult({
        type: 'express-ap',
        city: 'AP & Telangana (Hyderabad / Vijayawada / Vizag)',
        timeline: '📦 Fast 1–2 Days Delivery across AP & TS',
        badge: 'Express AP/TS'
      });
    } else {
      setPincodeResult({
        type: 'standard',
        city: 'All-India Standard',
        timeline: '📦 3–4 Days Delivery via Bluedart / Delhivery / Speed Post',
        badge: 'Pan-India Insured'
      });
    }
  };

  const handleMouseMoveZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNowClick = () => {
    if (onBuyNow) {
      onBuyNow(product, selectedSize, selectedColor);
      onClose();
    } else {
      handleAdd();
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setNewReviewPhoto(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleHelpfulVote = (id: string) => {
    setReviewsList(prev => {
      const updated = prev.map(r => r.id === id ? { ...r, helpfulVotes: (r.helpfulVotes || 0) + 1 } : r);
      try {
        localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;

    const review: ProductReview = {
      id: `rev-${Date.now()}`,
      productId: product.id,
      name: newReviewName.trim(),
      city: newReviewCity.trim() || 'Tadipatri',
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewText.trim(),
      photoUrl: newReviewPhoto.trim() || undefined,
      verified: true,
      helpfulVotes: 1,
      sizePurchased: newReviewSize,
      fitFeedback: newReviewFit,
    };

    const updated = [review, ...reviewsList];
    setReviewsList(updated);
    try {
      localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(updated));
    } catch {}

    setNewReviewName('');
    setNewReviewText('');
    setNewReviewPhoto('');
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 3500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window (21st.dev style glass card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-zinc-300 hover:text-white hover:bg-black transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {/* Gallery Column */}
            <div className="space-y-4">
              <div 
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 cursor-crosshair group select-none"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMoveZoom}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={selectedImage}
                  alt={product.name}
                  className={`w-full h-full object-cover object-center transition-transform duration-150 ${
                    isZoomed ? 'scale-150 origin-center' : 'scale-100'
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`
                        }
                      : undefined
                  }
                />

                {/* Offer pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-red-600 text-white text-xs font-black uppercase shadow-lg">
                  {product.discountPercentage}% OFF
                </div>

                {/* Fabric zoom tip */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1.5 border border-white/15 opacity-80 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3 h-3 text-[#F5B301]" />
                  <span>{isZoomed ? 'Pinch/Drag or Click to Reset' : 'Hover / Tap to Zoom Fabric'}</span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {product.galleryImages.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === img
                          ? 'border-[#F5B301] scale-105'
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Guarantee badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center gap-2.5 text-xs text-zinc-300">
                  <Truck className="w-4 h-4 text-[#D1FE17]" />
                  <span>Dispatched in 24 Hrs</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center gap-2.5 text-xs text-zinc-300">
                  <RotateCcw className="w-4 h-4 text-[#F5B301]" />
                  <span>7-Day Easy Exchange</span>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Division tag */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#D1FE17] font-bold uppercase tracking-wider">
                    {product.division} • {product.category}
                  </span>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className="flex items-center gap-1.5 text-[#F5B301] hover:underline"
                  >
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold text-white">{product.rating}</span>
                    <span className="text-zinc-400">({reviewsList.length} reviews)</span>
                  </button>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase text-white font-display">
                  {product.name}
                </h1>
                <p className="text-sm text-zinc-400 font-normal">
                  {product.subtitle}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 p-4 rounded-2xl bg-zinc-900/80 border border-white/10">
                  <span className="text-3xl font-black text-white font-mono">
                    {formatINR(product.price)}
                  </span>
                  <span className="text-sm text-zinc-500 line-through font-mono">
                    {formatINR(product.originalPrice)}
                  </span>
                  <span className="ml-auto px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
                    Save {formatINR(product.originalPrice - product.price)}
                  </span>
                </div>

                {/* ⚡ Urgency & Live Viewers Banner */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-red-950/40 via-zinc-900 to-amber-950/30 border border-red-500/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-red-400 font-bold">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span>Only {product.stockCount || 3} left in stock!</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400 font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#F5B301]" />
                    <span>14 people viewing now</span>
                  </div>
                </div>

                {/* 📍 Pincode Delivery & Store Pickup Estimator */}
                <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-zinc-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-500" /> Check Delivery &amp; Store Pickup
                    </span>
                    <span className="text-[10px] text-zinc-400">AP / TS / All India</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        setPincode(val);
                        if (val.length === 6) checkPincode(val);
                      }}
                      placeholder="Enter 6-digit Pincode (e.g. 515411)"
                      className="flex-1 px-3.5 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white placeholder-zinc-500 font-mono outline-none focus:border-[#F5B301]"
                    />
                    <button
                      type="button"
                      onClick={() => checkPincode(pincode)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-[#F5B301] hover:text-black text-white text-xs font-bold transition-colors"
                    >
                      Check
                    </button>
                  </div>

                  {pincodeResult && (
                    <div className={`p-2.5 rounded-xl border text-xs space-y-0.5 ${
                      pincodeResult.type === 'pickup'
                        ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                        : 'bg-zinc-800/80 border-white/10 text-zinc-300'
                    }`}>
                      <div className="flex items-center justify-between font-bold">
                        <span>📍 {pincodeResult.city}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 font-mono text-[#F5B301]">
                          {pincodeResult.badge}
                        </span>
                      </div>
                      <p className="text-[11px] opacity-90 leading-snug">{pincodeResult.timeline}</p>
                    </div>
                  )}
                </div>

                {/* Tab Switcher: Details vs Reviews */}
                <div className="flex border-b border-white/10 gap-4 text-xs font-bold uppercase tracking-wider">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-2.5 border-b-2 transition-all ${
                      activeTab === 'details'
                        ? 'border-[#F5B301] text-[#F5B301]'
                        : 'border-transparent text-zinc-400 hover:text-white'
                    }`}
                  >
                    Details &amp; Size
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-2.5 border-b-2 transition-all flex items-center gap-1.5 ${
                      activeTab === 'reviews'
                        ? 'border-[#F5B301] text-[#F5B301]'
                        : 'border-transparent text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Star className="w-3.5 h-3.5 fill-[#F5B301]" />
                    <span>Customer Reviews ({reviewsList.length})</span>
                  </button>
                </div>

                {/* Tab 1: Product Details */}
                {activeTab === 'details' && (
                  <div className="space-y-4">
                    {/* Color selection */}
                    {product.colors.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                          Colorway: <span className="text-[#F5B301]">{selectedColor}</span>
                        </span>
                        <div className="flex items-center gap-2">
                          {product.colors.map((c) => (
                            <button
                              key={c.name}
                              onClick={() => setSelectedColor(c.name)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-2 transition-all ${
                                selectedColor === c.name
                                  ? 'bg-white text-black border-white font-bold'
                                  : 'bg-zinc-900 text-zinc-300 border-white/10 hover:border-white/30'
                              }`}
                            >
                              <span 
                                className="w-3 h-3 rounded-full border border-black/20" 
                                style={{ backgroundColor: c.hex }} 
                              />
                              <span>{c.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Size Selector */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-zinc-300 uppercase tracking-wider">
                          Select Size
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setIsFindMyFitOpen(true)}
                            className="text-black bg-[#F5B301] hover:bg-[#ffc117] px-2.5 py-0.5 rounded-full flex items-center gap-1 font-black text-[10px] uppercase tracking-wider shadow-sm transition-all animate-pulse"
                          >
                            <Sparkles className="w-3 h-3" /> Find My Fit (Quiz)
                          </button>
                          <span className="text-zinc-400 hover:text-white flex items-center gap-1 font-mono text-[11px] cursor-pointer">
                            <Ruler className="w-3.5 h-3.5" /> Size Guide
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`py-2.5 rounded-xl text-sm font-mono font-bold transition-all border ${
                              selectedSize === size
                                ? 'bg-[#F5B301] text-black border-[#F5B301] shadow-[0_0_15px_rgba(245,179,1,0.3)]'
                                : 'bg-zinc-900 text-zinc-200 border-white/10 hover:border-white/30'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Description & Specs */}
                    <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-zinc-300">
                      <p>{product.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-zinc-400 pt-1">
                        {product.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                      <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono text-zinc-400">
                        <div><strong>Fabric:</strong> {product.fabric}</div>
                        <div><strong>Fit:</strong> {product.fit}</div>
                      </div>

                      {/* 🛍️ Frequently Bought Together / Complete The Look */}
                      <div className="mt-3 p-3 rounded-2xl bg-zinc-900 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#F5B301] uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" /> Frequently Bought Together
                          </span>
                          <span className="text-[10px] font-mono bg-red-600/20 text-red-400 px-2 py-0.5 rounded-full font-bold">
                            Save Flat ₹100
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-800 border border-white/10 shrink-0">
                            <img
                              src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=300&q=80"
                              alt="Streetwear Pants"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-white truncate">Relaxed Baggy Korean Cargo Pants</p>
                            <p className="text-[11px] font-mono text-zinc-400">Combo Special: <span className="text-white font-bold">₹400</span> <span className="line-through text-zinc-600">₹1,499</span></p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              onAddToCart({
                                id: 'dg-bundle-cargo',
                                name: 'Relaxed Baggy Korean Cargo Pants',
                                subtitle: 'Heavy twill cotton 6-pocket cargo',
                                category: 'cargos',
                                division: 'men',
                                price: 400,
                                originalPrice: 1499,
                                discountPercentage: 73,
                                imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=300&q=80',
                                galleryImages: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=300&q=80'],
                                sizes: ['30', '32', '34'],
                                colors: [{ name: 'Olive Green', hex: '#4A5320' }],
                                inStock: true,
                                stockCount: 12,
                                isTrending: true,
                                isOfferDrop: true,
                                isNewArrival: true,
                                isLatestCollection: true,
                                isFlat400Offer: true,
                                rating: 4.9,
                                reviewsCount: 42,
                                description: 'Heavy twill baggy cargo with deep utility pockets.',
                                features: ['6 Pockets', 'Drawstring Cuff'],
                                fabric: 'Heavy Twill Cotton',
                                fit: 'Relaxed Baggy Fit',
                                care: 'Machine wash cold',
                                tags: ['cargo', 'streetwear', 'men']
                              }, '32', 'Olive Green');
                              handleAdd();
                            }}
                            className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#F5B301] text-black font-black text-xs transition-colors shrink-0 flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" /> Add Pair
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Customer Reviews & Real Fit Checks */}
                {activeTab === 'reviews' && (() => {
                  const photosCount = reviewsList.filter(r => !!r.photoUrl).length;
                  const displayedReviews = filterPhotosOnly 
                    ? reviewsList.filter(r => !!r.photoUrl)
                    : reviewsList;

                  return (
                    <div className="space-y-4">
                      {/* Overall Score & Photo Filter Card */}
                      <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-black text-white font-mono">4.9</span>
                              <span className="text-xs text-zinc-400">/ 5.0</span>
                            </div>
                            <div className="flex text-[#F5B301] mt-0.5">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-current" />
                              ))}
                            </div>
                            <span className="text-[10px] text-zinc-400">Based on verified store &amp; online orders</span>
                          </div>

                          <div className="text-right text-[11px] text-zinc-300 space-y-0.5">
                            <div className="flex items-center gap-1.5">
                              <span>5★</span>
                              <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="w-[88%] h-full bg-[#F5B301]" />
                              </div>
                              <span>88%</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span>4★</span>
                              <div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="w-[12%] h-full bg-[#F5B301]" />
                              </div>
                              <span>12%</span>
                            </div>
                          </div>
                        </div>

                        {/* Filter Bar: All vs With Photos */}
                        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                          <button
                            type="button"
                            onClick={() => setFilterPhotosOnly(false)}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                              !filterPhotosOnly
                                ? 'bg-white text-black'
                                : 'bg-zinc-800 text-zinc-400 hover:text-white'
                            }`}
                          >
                            All Reviews ({reviewsList.length})
                          </button>
                          <button
                            type="button"
                            onClick={() => setFilterPhotosOnly(true)}
                            className={`px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                              filterPhotosOnly
                                ? 'bg-[#F5B301] text-black shadow-sm'
                                : 'bg-zinc-800 text-zinc-400 hover:text-white'
                            }`}
                          >
                            <Camera className="w-3.5 h-3.5" />
                            <span>Fit Photos ({photosCount})</span>
                          </button>
                        </div>
                      </div>

                      {/* Write a Review Form with Photo Upload */}
                      <form onSubmit={handleAddReview} className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#F5B301]" /> Leave a Review &amp; Fit Photo
                          </span>
                          {/* Rating selector */}
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setNewReviewRating(star)}
                                className="text-zinc-600 hover:text-[#F5B301] transition-colors"
                              >
                                <Star className={`w-4 h-4 ${star <= newReviewRating ? 'fill-[#F5B301] text-[#F5B301]' : ''}`} />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            required
                            value={newReviewName}
                            onChange={(e) => setNewReviewName(e.target.value)}
                            placeholder="Your Name (e.g. Ramesh)"
                            className="px-3 py-2 rounded-xl bg-zinc-800 border border-white/10 text-xs text-white outline-none focus:border-[#F5B301]"
                          />
                          <input
                            type="text"
                            value={newReviewCity}
                            onChange={(e) => setNewReviewCity(e.target.value)}
                            placeholder="City (e.g. Tadipatri)"
                            className="px-3 py-2 rounded-xl bg-zinc-800 border border-white/10 text-xs text-white outline-none focus:border-[#F5B301]"
                          />
                        </div>

                        {/* Size & Fit Row */}
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] text-zinc-400 block mb-1 font-bold">Size you bought:</label>
                            <select
                              value={newReviewSize}
                              onChange={(e) => setNewReviewSize(e.target.value)}
                              className="w-full px-2.5 py-1.5 rounded-xl bg-zinc-800 border border-white/10 text-xs text-white outline-none focus:border-[#F5B301]"
                            >
                              {product.sizes.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="text-[10px] text-zinc-400 block mb-1 font-bold">How did it fit?</label>
                            <select
                              value={newReviewFit}
                              onChange={(e) => setNewReviewFit(e.target.value as any)}
                              className="w-full px-2.5 py-1.5 rounded-xl bg-zinc-800 border border-white/10 text-xs text-white outline-none focus:border-[#F5B301]"
                            >
                              <option value="Perfect oversized">Perfect oversized</option>
                              <option value="True to size">True to size</option>
                              <option value="Runs slightly loose">Runs slightly loose</option>
                              <option value="Runs small">Runs small</option>
                            </select>
                          </div>
                        </div>

                        <textarea
                          required
                          rows={2}
                          value={newReviewText}
                          onChange={(e) => setNewReviewText(e.target.value)}
                          placeholder="How is the fabric, fit, and comfort? Your review helps fellow Tadipatri shoppers!"
                          className="w-full px-3 py-2 rounded-xl bg-zinc-800 border border-white/10 text-xs text-white outline-none focus:border-[#F5B301] resize-none"
                        />

                        {/* Photo Upload Section */}
                        <div className="space-y-2 pt-1">
                          <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 block">
                            Attach Fit Photo / Mirror Selfie (Optional)
                          </label>
                          <div className="flex flex-wrap items-center gap-2">
                            <label className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-dashed border-white/20 text-xs text-zinc-300 hover:text-white cursor-pointer transition-colors">
                              <Camera className="w-3.5 h-3.5 text-[#F5B301]" />
                              <span>{newReviewPhoto ? 'Change Photo' : 'Upload Mirror Selfie'}</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                                className="hidden"
                              />
                            </label>

                            {/* Preset Buttons */}
                            <div className="flex items-center gap-1">
                              {SAMPLE_PHOTO_PRESETS.slice(0, 2).map((preset) => (
                                <button
                                  key={preset.label}
                                  type="button"
                                  onClick={() => setNewReviewPhoto(preset.url)}
                                  className="px-2 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-[10px] text-zinc-400 hover:text-zinc-200"
                                >
                                  {preset.label.split(' ')[0]} Look
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Photo Preview Thumbnail */}
                          {newReviewPhoto && (
                            <div className="relative inline-block mt-2">
                              <img
                                src={newReviewPhoto}
                                alt="Fit Preview"
                                className="w-20 h-24 object-cover rounded-xl border-2 border-[#F5B301]"
                              />
                              <button
                                type="button"
                                onClick={() => setNewReviewPhoto('')}
                                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                          {reviewSubmitted ? (
                            <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Thank you! Review &amp; Photo posted.
                            </span>
                          ) : (
                            <span className="text-[10px] text-zinc-500">Verified Buyer badge will be awarded</span>
                          )}
                          <button
                            type="submit"
                            className="px-4 py-2 rounded-xl bg-[#F5B301] text-black font-black text-xs hover:bg-[#ffc117] transition-all flex items-center gap-1.5 shadow-md"
                          >
                            <Send className="w-3 h-3" /> Post Review
                          </button>
                        </div>
                      </form>

                      {/* Customer Review List with Photos */}
                      <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                        {displayedReviews.length === 0 ? (
                          <p className="text-center py-6 text-xs text-zinc-500">No photo reviews yet. Be the first to post a fit photo!</p>
                        ) : (
                          displayedReviews.map((rev) => (
                            <div key={rev.id} className="p-3.5 rounded-2xl bg-zinc-900/70 border border-white/5 space-y-2.5">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-full bg-[#F5B301] text-black font-black text-xs flex items-center justify-center">
                                    {rev.name.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-1.5">
                                      <span className="font-bold text-xs text-white">{rev.name}</span>
                                      <span className="text-[10px] text-zinc-400">· {rev.city}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                      {rev.verified && (
                                        <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold flex items-center gap-0.5">
                                          <Check className="w-2.5 h-2.5" /> Verified Buyer
                                        </span>
                                      )}
                                      {rev.sizePurchased && (
                                        <span className="px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300 text-[9px] font-mono">
                                          Size: {rev.sizePurchased}
                                        </span>
                                      )}
                                      {rev.fitFeedback && (
                                        <span className="px-1.5 py-0.2 rounded bg-[#F5B301]/15 text-[#F5B301] text-[9px] font-semibold">
                                          {rev.fitFeedback}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <span className="text-[10px] text-zinc-500 shrink-0">{rev.date}</span>
                              </div>

                              <div className="flex text-[#F5B301]">
                                {[...Array(rev.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                              </div>

                              <p className="text-xs text-zinc-300 leading-relaxed">{rev.comment}</p>

                              {/* Customer Fit Photo Thumbnail */}
                              {rev.photoUrl && (
                                <div className="pt-1">
                                  <div
                                    onClick={() => setSelectedPhotoPreview({
                                      url: rev.photoUrl!,
                                      name: rev.name,
                                      city: rev.city,
                                      comment: rev.comment,
                                      size: rev.sizePurchased
                                    })}
                                    className="relative inline-block group cursor-pointer"
                                  >
                                    <img
                                      src={rev.photoUrl}
                                      alt={`${rev.name}'s Fit`}
                                      className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-xl border border-white/20 group-hover:border-[#F5B301] transition-all group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                                      <span className="text-[10px] font-black text-white bg-black/70 px-2 py-0.5 rounded-full flex items-center gap-1">
                                        <ZoomIn className="w-3 h-3 text-[#F5B301]" /> View Fit
                                      </span>
                                    </div>
                                    <span className="absolute bottom-1 right-1 px-1.5 py-0.2 rounded bg-black/80 text-[8px] font-bold text-zinc-300 flex items-center gap-1">
                                      <Camera className="w-2.5 h-2.5 text-[#F5B301]" /> Fit Check
                                    </span>
                                  </div>
                                </div>
                              )}

                              {/* Helpful Vote */}
                              <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px] text-zinc-400">
                                <span>Was this fit check helpful?</span>
                                <button
                                  type="button"
                                  onClick={() => handleHelpfulVote(rev.id)}
                                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-800/80 hover:bg-[#F5B301]/20 hover:text-[#F5B301] text-zinc-300 transition-colors"
                                >
                                  <ThumbsUp className="w-3 h-3" />
                                  <span>Helpful ({rev.helpfulVotes || 0})</span>
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Bottom Action CTAs (Buy Now + Add to Bag + WhatsApp) */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  {/* 1. Add to Bag */}
                  <button
                    onClick={handleAdd}
                    disabled={isAdded}
                    className={`py-3.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border transition-all ${
                      isAdded
                        ? 'bg-emerald-500 border-emerald-500 text-white'
                        : 'bg-zinc-900 border-white/15 text-white hover:bg-zinc-800'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>In Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>

                  {/* 2. ⚡ Buy Now (Instant 1-click checkout!) */}
                  <button
                    onClick={handleBuyNowClick}
                    className="py-3.5 px-3 rounded-xl bg-[#F5B301] hover:bg-[#ffc117] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(245,179,1,0.3)] transition-all"
                  >
                    <Zap className="w-4 h-4 fill-black" />
                    <span>Buy Now ({selectedSize})</span>
                  </button>

                  {/* 3. WhatsApp Order */}
                  <a
                    href={createWhatsAppOrderLink(STORE_INFO.whatsappNumber, product.name, product.price, selectedSize, selectedColor)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(37,211,102,0.25)] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <p className="text-[11px] text-center text-zinc-500">
                  ⚡ 1-Click Instant Checkout • COD &amp; Instant UPI • Tadipatri Store Pickup Available
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 📏 AI-Assisted Find My Fit Quiz Modal */}
      <FindMyFitModal
        isOpen={isFindMyFitOpen}
        onClose={() => setIsFindMyFitOpen(false)}
        product={product}
        onSelectSize={(size) => setSelectedSize(size)}
        currentSelectedSize={selectedSize}
      />

      {/* 📷 Customer Fit Photo Lightbox Modal */}
      {selectedPhotoPreview && (
        <div 
          onClick={() => setSelectedPhotoPreview(null)}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedPhotoPreview(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Close fit check"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[3/4] bg-black">
              <img
                src={selectedPhotoPreview.url}
                alt={`${selectedPhotoPreview.name}'s Fit Check`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-black text-sm">{selectedPhotoPreview.name}</span>
                  <span className="text-xs text-zinc-400">· {selectedPhotoPreview.city}</span>
                </div>
                {selectedPhotoPreview.size && (
                  <span className="text-[11px] font-mono text-[#F5B301] mb-1 font-bold">
                    Wearing Size: {selectedPhotoPreview.size}
                  </span>
                )}
                <p className="text-xs text-zinc-200 leading-relaxed italic">
                  "{selectedPhotoPreview.comment}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
