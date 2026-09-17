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
  Plus
} from 'lucide-react';
import { Product } from '../types';
import { formatINR, createWhatsAppOrderLink } from '../lib/utils';
import { STORE_INFO } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onBuyNow?: (product: Product, size: string, color: string) => void;
}

interface CustomerReview {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

const DEFAULT_REVIEWS: CustomerReview[] = [
  {
    id: 'r1',
    name: 'M. Sai Krishna',
    city: 'Tadipatri, AP',
    rating: 5,
    date: '3 days ago',
    comment: 'Superb quality fabric! Checked fitting at the Tadipatri store opposite Markandeya temple before taking. 100% heavy cotton and neat stitch.',
    verified: true
  },
  {
    id: 'r2',
    name: 'Venkat Reddy',
    city: 'Anantapur',
    rating: 5,
    date: '1 week ago',
    comment: 'The baggy fit is perfect. Exactly the trending streetwear look you see on Instagram/Snitch, but at Tadipatri wholesale prices. Great job!',
    verified: true
  },
  {
    id: 'r3',
    name: 'K. Harish',
    city: 'Kurnool',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Ordered Flat ₹400 drop. Color does not fade after machine washing. Dispatched and delivered fast within Rayalaseema.',
    verified: true
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

  // Reviews state
  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(DEFAULT_REVIEWS);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewCity, setNewReviewCity] = useState('Tadipatri');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

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

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;

    const review: CustomerReview = {
      id: `rev-${Date.now()}`,
      name: newReviewName.trim(),
      city: newReviewCity.trim() || 'Tadipatri',
      rating: newReviewRating,
      date: 'Just now',
      comment: newReviewText.trim(),
      verified: true
    };

    setReviewsList([review, ...reviewsList]);
    setNewReviewName('');
    setNewReviewText('');
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 3000);
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
                        <span className="text-[#F5B301] flex items-center gap-1 font-mono text-[11px] cursor-pointer">
                          <Ruler className="w-3.5 h-3.5" /> Size Guide
                        </span>
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

                {/* Tab 2: Customer Reviews & Ratings */}
                {activeTab === 'reviews' && (
                  <div className="space-y-4">
                    {/* Overall Score Card */}
                    <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-between">
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

                    {/* Write a Review Form */}
                    <form onSubmit={handleAddReview} className="p-3.5 rounded-2xl bg-zinc-900/50 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#F5B301]" /> Write a Review
                        </span>
                        {/* Rating selector */}
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewReviewRating(star)}
                              className="text-zinc-600 hover:text-[#F5B301]"
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

                      <textarea
                        required
                        rows={2}
                        value={newReviewText}
                        onChange={(e) => setNewReviewText(e.target.value)}
                        placeholder="How is the fabric, fit, and comfort? Your feedback helps fellow Tadipatri shoppers!"
                        className="w-full px-3 py-2 rounded-xl bg-zinc-800 border border-white/10 text-xs text-white outline-none focus:border-[#F5B301] resize-none"
                      />

                      <div className="flex items-center justify-between pt-1">
                        {reviewSubmitted ? (
                          <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Thank you! Review posted.
                          </span>
                        ) : (
                          <span className="text-[10px] text-zinc-500">Verified buyer badge will be displayed</span>
                        )}
                        <button
                          type="submit"
                          className="px-4 py-1.5 rounded-xl bg-[#F5B301] text-black font-black text-xs hover:bg-[#ffc117] transition-all flex items-center gap-1"
                        >
                          <Send className="w-3 h-3" /> Post Review
                        </button>
                      </div>
                    </form>

                    {/* Customer Review List */}
                    <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                      {reviewsList.map((rev) => (
                        <div key={rev.id} className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs text-white">{rev.name}</span>
                              <span className="text-[10px] text-zinc-400">({rev.city})</span>
                              {rev.verified && (
                                <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold flex items-center gap-0.5">
                                  <Check className="w-2.5 h-2.5" /> Verified
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-zinc-500">{rev.date}</span>
                          </div>
                          <div className="flex text-[#F5B301]">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <p className="text-xs text-zinc-300 leading-relaxed">{rev.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
    </AnimatePresence>
  );
};
