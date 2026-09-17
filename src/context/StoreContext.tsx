import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Order, HeroSlide, Coupon, ComboDealConfig } from '../types';
import { INITIAL_PRODUCTS, INITIAL_ORDERS } from '../data/products';

export const INITIAL_HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hs-1',
    label: 'MEN',
    heading: 'BAGGY\nSTREETS',
    sub: 'Korean Drop-Shoulder Fits',
    tag: 'NEW SEASON',
    price: '₹400',
    bg: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=90',
    accent: '#F5B301',
    textLight: true,
  },
  {
    id: 'hs-2',
    label: 'WOMEN',
    heading: 'FESTIVE\nELEGANCE',
    sub: 'Anarkali Gowns & Silk Kurtis',
    tag: 'TRENDING NOW',
    price: '₹649',
    bg: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1400&q=90',
    accent: '#ec4899',
    textLight: true,
  },
  {
    id: 'hs-3',
    label: 'KIDS',
    heading: 'JUNIOR\nSTYLE',
    sub: 'Streetwear Sets & Party Frocks',
    tag: 'KIDS SPECIAL',
    price: '₹499',
    bg: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1400&q=90',
    accent: '#3b82f6',
    textLight: true,
  },
];

export const INITIAL_COUPONS: Coupon[] = [
  { id: 'c1', code: 'DIWALI20', discountType: 'percentage', discountValue: 20, minOrderAmount: 500, maxDiscount: 200, isActive: true, usedCount: 12, description: 'Festive special 20% off up to ₹200' },
  { id: 'c2', code: 'FLAT100', discountType: 'fixed', discountValue: 100, minOrderAmount: 600, isActive: true, usedCount: 8, description: '₹100 flat discount on orders ₹600+' },
  { id: 'c3', code: 'NEWUSER50', discountType: 'fixed', discountValue: 50, minOrderAmount: 0, isActive: true, usedCount: 35, description: 'New user welcome offer ₹50 off' },
];

interface StoreContextType {
  products: Product[];
  orders: Order[];
  heroSlides: HeroSlide[];
  coupons: Coupon[];
  comboConfig: ComboDealConfig;
  updateComboConfig: (config: Partial<ComboDealConfig>) => void;
  addProduct: (product: Omit<Product, 'id'>) => Product;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  toggleLatestCollection: (id: string) => void;
  toggleFlat400Offer: (id: string) => void;
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  addHeroSlide: (slide: Omit<HeroSlide, 'id'>) => void;
  updateHeroSlide: (slide: HeroSlide) => void;
  deleteHeroSlide: (id: string) => void;
  addCoupon: (coupon: Coupon) => void;
  toggleCoupon: (id: string) => void;
  deleteCoupon: (id: string) => void;
  applyCoupon: (code: string, subtotal: number) => { valid: boolean; discount: number; message: string; coupon?: Coupon };
  resetToDefaults: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const PRODUCTS_STORAGE_KEY = 'dilgarments_products_v2';
const ORDERS_STORAGE_KEY = 'dilgarments_orders_v2';
const HERO_STORAGE_KEY = 'dilgarments_hero_v1';
const COUPONS_STORAGE_KEY = 'dilgarments_coupons_v1';
const COMBO_STORAGE_KEY = 'dilgarments_combo_v1';

const DEFAULT_COMBO_CONFIG: ComboDealConfig = {
  title: 'COMPLETE THE FIT COMBO',
  badge: 'Streetwear Bundle Deal',
  description: 'Pair an Oversized Baggy Shirt + Korean Baggy Pants for just ₹750 (Save ₹50 extra!)',
  bundlePrice: 750,
  item1Id: 'dg-bs-001',
  item2Id: 'dg-bp-001',
  enabled: true
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) { console.error(e); }
    return INITIAL_PRODUCTS;
  });

  const [comboConfig, setComboConfig] = useState<ComboDealConfig>(() => {
    try {
      const saved = localStorage.getItem(COMBO_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) { console.error(e); }
    return DEFAULT_COMBO_CONFIG;
  });

  const updateComboConfig = (updates: Partial<ComboDealConfig>) => {
    setComboConfig(prev => {
      const next = { ...prev, ...updates };
      try { localStorage.setItem(COMBO_STORAGE_KEY, JSON.stringify(next)); } catch (e) { console.error(e); }
      return next;
    });
  };

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) { console.error(e); }
    return INITIAL_ORDERS;
  });

  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(() => {
    try {
      const saved = localStorage.getItem(HERO_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) { console.error(e); }
    return INITIAL_HERO_SLIDES;
  });

  const [coupons, setCoupons] = useState<Coupon[]>(() => {
    try {
      const saved = localStorage.getItem(COUPONS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) { console.error(e); }
    return INITIAL_COUPONS;
  });

  // Sync to localStorage
  useEffect(() => {
    try { localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products)); } catch (e) { console.error(e); }
  }, [products]);

  useEffect(() => {
    try { localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders)); } catch (e) { console.error(e); }
  }, [orders]);

  useEffect(() => {
    try { localStorage.setItem(HERO_STORAGE_KEY, JSON.stringify(heroSlides)); } catch (e) { console.error(e); }
  }, [heroSlides]);

  useEffect(() => {
    try { localStorage.setItem(COUPONS_STORAGE_KEY, JSON.stringify(coupons)); } catch (e) { console.error(e); }
  }, [coupons]);

  const addProduct = (newProdData: Omit<Product, 'id'>): Product => {
    const newProduct: Product = {
      ...newProdData,
      id: `dg-custom-${Date.now()}`
    };
    setProducts(prev => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const toggleLatestCollection = (id: string) => {
    setProducts(prev => prev.map(p => 
      p.id === id ? { ...p, isLatestCollection: !p.isLatestCollection } : p
    ));
  };

  const toggleFlat400Offer = (id: string) => {
    setProducts(prev => prev.map(p => 
      p.id === id ? { ...p, isFlat400Offer: !p.isFlat400Offer } : p
    ));
  };

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  // Hero slide actions
  const addHeroSlide = (slide: Omit<HeroSlide, 'id'>) => {
    const newSlide: HeroSlide = { ...slide, id: `hs-${Date.now()}` };
    setHeroSlides(prev => [...prev, newSlide]);
  };

  const updateHeroSlide = (updated: HeroSlide) => {
    setHeroSlides(prev => prev.map(s => s.id === updated.id ? updated : s));
  };

  const deleteHeroSlide = (id: string) => {
    setHeroSlides(prev => prev.filter(s => s.id !== id));
  };

  // Coupon actions
  const addCoupon = (coupon: Coupon) => {
    setCoupons(prev => [...prev, coupon]);
  };

  const toggleCoupon = (id: string) => {
    setCoupons(prev => prev.map(c => c.id === id ? { ...c, isActive: !c.isActive } : c));
  };

  const deleteCoupon = (id: string) => {
    setCoupons(prev => prev.filter(c => c.id !== id));
  };

  const applyCoupon = (code: string, subtotal: number): { valid: boolean; discount: number; message: string; coupon?: Coupon } => {
    const clean = code.trim().toUpperCase();
    const found = coupons.find(c => c.code === clean);
    if (!found) return { valid: false, discount: 0, message: 'Invalid coupon code.' };
    if (!found.isActive) return { valid: false, discount: 0, message: 'This coupon is no longer active.' };
    if (subtotal < found.minOrderAmount) {
      return { valid: false, discount: 0, message: `Min. order amount for ${found.code} is ₹${found.minOrderAmount}` };
    }

    let discount = 0;
    if (found.discountType === 'percentage') {
      discount = Math.round((subtotal * found.discountValue) / 100);
      if (found.maxDiscount && discount > found.maxDiscount) {
        discount = found.maxDiscount;
      }
    } else {
      discount = found.discountValue;
    }

    // Never exceed subtotal
    discount = Math.min(discount, subtotal);

    return { valid: true, discount, message: `🎉 Coupon ${found.code} applied: Save ₹${discount}!`, coupon: found };
  };

  const resetToDefaults = () => {
    setProducts(INITIAL_PRODUCTS);
    setOrders(INITIAL_ORDERS);
    setHeroSlides(INITIAL_HERO_SLIDES);
    setCoupons(INITIAL_COUPONS);
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    localStorage.removeItem(ORDERS_STORAGE_KEY);
    localStorage.removeItem(HERO_STORAGE_KEY);
    localStorage.removeItem(COUPONS_STORAGE_KEY);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        orders,
        heroSlides,
        coupons,
        comboConfig,
        updateComboConfig,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleLatestCollection,
        toggleFlat400Offer,
        addOrder,
        updateOrderStatus,
        addHeroSlide,
        updateHeroSlide,
        deleteHeroSlide,
        addCoupon,
        toggleCoupon,
        deleteCoupon,
        applyCoupon,
        resetToDefaults
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
