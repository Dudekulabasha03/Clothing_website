export type Division = 'all' | 'men' | 'women' | 'kids' | 'gents' | 'ladies';

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: string;
  division: 'men' | 'women' | 'kids' | 'gents' | 'ladies';
  price: number;
  originalPrice: number;
  discountPercentage: number;
  imageUrl: string;
  galleryImages: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  stockCount: number;
  isTrending: boolean;
  isOfferDrop: boolean;
  isNewArrival: boolean;
  isLatestCollection: boolean;
  isFlat400Offer: boolean;
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
  fabric: string;
  fit: string;
  care: string;
  tags: string[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface SavedAddress {
  id: string;
  label: string; // 'Home', 'Work', etc.
  fullName: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  isDefault: boolean;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  city: string;
  email?: string;
  savedAddresses: SavedAddress[];
  createdAt: string;
  isAdmin?: boolean;
}

export interface Order {
  id: string;
  userId?: string;       // linked to user if logged in
  customerName: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: 'cod' | 'upi' | 'whatsapp';
  status: 'pending' | 'confirmed' | 'dispatched' | 'delivered' | 'cancelled';
  couponCode?: string;
  discountAmount?: number;
  createdAt: string;
  statusHistory?: { status: string; timestamp: string; note?: string }[];
}

export interface Coupon {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;   // e.g. 20 = 20% off or ₹20 off
  minOrderAmount: number;
  maxDiscount?: number;    // cap for percentage coupons
  isActive: boolean;
  usedCount: number;
  expiresAt?: string;      // ISO date string
  description: string;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  proprietor: string;
  phones: string[];
  gstin: string;
  address: {
    line1: string;
    line2: string;
    town: string;
    pincode: string;
    district: string;
    state: string;
  };
  mapsUrl: string;
  whatsappNumber: string;
}

export interface DailyStat {
  date: string;
  revenue: number;
  orders: number;
}

export interface HeroSlide {
  id: string;
  label: string;
  heading: string;
  sub: string;
  tag: string;
  price: string;
  bg: string;
  accent: string;
  textLight?: boolean;
}

export interface ComboDealConfig {
  title: string;
  badge: string;
  description: string;
  bundlePrice: number;
  item1Id: string;
  item2Id: string;
  enabled: boolean;
}

export interface ProductReview {
  id: string;
  productId?: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  photoUrl?: string;
  verified: boolean;
  helpfulVotes: number;
  sizePurchased?: string;
  fitFeedback?: 'Runs small' | 'True to size' | 'Runs slightly loose' | 'Perfect oversized';
  height?: string;
  weight?: string;
}

