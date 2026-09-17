import React, { useState, useEffect } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CountdownTimer } from './components/CountdownTimer';
import { Flat400Section } from './components/Flat400Section';
import { ComboBundleSection } from './components/ComboBundleSection';
import { LatestCollectionSection } from './components/LatestCollectionSection';
import { DivisionBento } from './components/DivisionBento';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { CustomerLooks } from './components/CustomerLooks';
import { StreetwearLookbook } from './components/StreetwearLookbook';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { NotifyMeModal } from './components/NotifyMeModal';
import { LoginModal } from './components/LoginModal';
import { UserProfileModal } from './components/UserProfileModal';
import { SocialProofTicker } from './components/SocialProofTicker';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { StoreTrustSection } from './components/StoreTrustSection';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AdminPage } from './components/AdminPage';
import { Product, CartItem, Division } from './types';

function MainStorefront() {
  const { products, addOrder } = useStore();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeDivision, setActiveDivision] = useState<Division>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([products[0]?.id, products[1]?.id].filter(Boolean));

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [sizeGuideCategory, setSizeGuideCategory] = useState<string | undefined>(undefined);
  const [notifyProduct, setNotifyProduct] = useState<Product | null>(null);
  const [notifySize, setNotifySize] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Discreet Admin URL / Hash Listener (#admin or ?admin=true)
  useEffect(() => {
    const checkAdminRoute = () => {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setIsAdminOpen(true);
      }
    };
    checkAdminRoute();
    window.addEventListener('hashchange', checkAdminRoute);
    return () => window.removeEventListener('hashchange', checkAdminRoute);
  }, []);

  const handleBackFromAdmin = () => {
    setIsAdminOpen(false);
    if (window.location.hash === '#admin') {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const openSizeGuide = (category?: string) => {
    setSizeGuideCategory(category);
    setIsSizeGuideOpen(true);
  };

  // Cart operations
  const handleAddToCart = (product: Product, size: string, color?: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        product,
        selectedSize: size,
        selectedColor: color || product.colors[0]?.name || 'Standard',
        quantity: 1
      }];
    });
    showToast(`✅ Added ${product.name} (${size}) to Bag!`);
  };

  const handleUpdateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId, size);
      return;
    }
    setCartItems(prev => prev.map(item =>
      item.product.id === productId && item.selectedSize === size
        ? { ...item, quantity }
        : item
    ));
  };

  const handleRemoveFromCart = (productId: string, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.selectedSize === size)));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds(prev => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed from Wishlist`);
        return prev.filter(id => id !== product.id);
      } else {
        showToast(`❤️ Saved ${product.name} to Wishlist`);
        return [...prev, product.id];
      }
    });
  };

  // ⚡ Buy Now Instant 1-Click Checkout
  const handleBuyNow = (product: Product, size: string, color?: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev;
      }
      return [...prev, {
        product,
        selectedSize: size,
        selectedColor: color || product.colors[0]?.name || 'Standard',
        quantity: 1
      }];
    });
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleScrollToFlat400 = () => {
    const el = document.getElementById('flat-400');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // If Admin view is active, render AdminPage
  if (isAdminOpen) {
    return <AdminPage onBackToStore={handleBackFromAdmin} />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] dark:bg-[#080808] text-[#0A0A0A] dark:text-[#F4F4F5] flex flex-col pb-16 md:pb-0 selection:bg-[#E5A812] selection:text-black transition-colors duration-200">

      {/* ── Toast Notification ── */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] px-5 py-2.5 rounded-full bg-[#111] text-white text-xs font-bold shadow-xl backdrop-blur-md animate-bounce whitespace-nowrap">
          {toastMessage}
        </div>
      )}

      {/* ── Navbar ── */}
      <Navbar
        cartCount={cartItems.reduce((sum, it) => sum + it.quantity, 0)}
        wishlistCount={wishlistIds.length}
        activeDivision={activeDivision}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => { setActiveCategory(cat); handleScrollToCatalog(); }}
        onSelectDivision={(div) => { setActiveDivision(div); handleScrollToCatalog(); }}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onScrollToFlat400={handleScrollToFlat400}
      />

      <main className="flex-1">
        {/* 1. Hero Slider with Top Search Bar */}
        <HeroSection
          onShopNow={handleScrollToCatalog}
          onExploreMen={() => { setActiveDivision('men'); handleScrollToCatalog(); }}
          onExploreWomen={() => { setActiveDivision('women'); handleScrollToCatalog(); }}
          onExploreKids={() => { setActiveDivision('kids'); handleScrollToCatalog(); }}
          onScrollToFlat400={handleScrollToFlat400}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* 2. ⏱️ Countdown Timer — creates urgency! */}
        <CountdownTimer onScrollToFlat400={handleScrollToFlat400} />

        {/* 3. Flat ₹400 Attraction Section */}
        <Flat400Section
          products={products}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
          onBuyNow={(p, size) => handleBuyNow(p, size)}
        />

        {/* 3b. 🛍️ Feature 3: Combo Deals — Flat ₹750 Complete Fit */}
        <ComboBundleSection
          products={products}
          onAddToCart={handleAddToCart}
          onOpenProduct={(p) => setSelectedProduct(p)}
        />

        {/* 4. Latest Collection (Admin-controlled) */}
        <LatestCollectionSection
          products={products}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
          onViewAllCatalog={handleScrollToCatalog}
        />

        {/* 5. Division Bento (Men / Women / Kids) */}
        <DivisionBento
          onSelectDivision={(div) => { setActiveDivision(div); handleScrollToCatalog(); }}
        />

        {/* 6. Complete Catalog with Filters */}
        <ProductCatalog
          products={products}
          activeCategory={activeCategory}
          activeDivision={activeDivision}
          searchQuery={searchQuery}
          wishlistIds={wishlistIds}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          onSelectDivision={(div) => setActiveDivision(div)}
          onClearSearch={() => setSearchQuery('')}
          onToggleWishlist={handleToggleWishlist}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
          onBuyNow={(p, size) => handleBuyNow(p, size)}
        />

        {/* 7. 📸 Customer Looks — Social Proof Gallery */}
        <CustomerLooks />

        {/* 8. Streetwear Lookbook */}
        <StreetwearLookbook />
      </main>

      {/* ── 4-Pillar Store Trust Section (Tadipatri Local Verification) ── */}
      <StoreTrustSection />

      {/* ── Footer (with Google Maps + Size Guide link) ── */}
      <Footer
        onSelectDivision={(div) => { setActiveDivision(div); handleScrollToCatalog(); }}
        onSelectCategory={(cat) => { setActiveCategory(cat); handleScrollToCatalog(); }}
        onOpenVisitingCard={() => {}}
        onOpenSizeGuide={() => openSizeGuide()}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* ── Modals & Drawers ── */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={(p, size, color) => handleBuyNow(p, size, color)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onClearCart={() => setCartItems([])}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <OrderTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
      />

      {/* 📏 Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={sizeGuideCategory}
      />

      {/* 🔔 Notify Me Modal */}
      <NotifyMeModal
        isOpen={!!notifyProduct}
        product={notifyProduct}
        selectedSize={notifySize}
        onClose={() => { setNotifyProduct(null); setNotifySize(''); }}
      />

      {/* 🔐 Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* 👤 User Profile Modal */}
      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* 🔔 Social Proof Live Purchase Ticker */}
      <SocialProofTicker />

      {/* 💬 WhatsApp Chat Greeting Bubble */}
      <FloatingWhatsApp />

      {/* 📱 Sticky Mobile Bottom Navigation Dock */}
      <MobileBottomNav
        cartCount={cartItems.reduce((sum, it) => sum + it.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onHome={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCategories={() => {
          window.dispatchEvent(new CustomEvent('open-mobile-menu'));
        }}
        onScrollToFlat400={handleScrollToFlat400}
        onOpenWishlist={() => {
          handleScrollToCatalog();
        }}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <StoreProvider>
          <MainStorefront />
        </StoreProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
