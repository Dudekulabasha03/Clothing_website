import React, { useState, useMemo } from 'react';
import {
  PlusCircle, Package, ShoppingBag, Trash2, ArrowLeft,
  Sparkles, Flame, CheckCircle2, Clock, Truck, Home,
  TrendingUp, Tag, Users, AlertTriangle, Send, MessageCircle,
  BarChart2, Shield, LogOut, Eye, Edit3, CheckSquare, Square,
  X, Check, Copy, ToggleLeft, ToggleRight, DollarSign, Percent,
  RefreshCw, Bell, Star, Zap, ChevronDown, ChevronUp, Printer, Upload, Image as ImageIcon,
  Download, FileSpreadsheet
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { useAuth } from '../context/AuthContext';
import { Product, Division, Order, Coupon } from '../types';
import { formatINR } from '../lib/utils';
import { STORE_INFO } from '../data/products';
import { InvoiceModal } from './InvoiceModal';

interface AdminPageProps {
  onBackToStore: () => void;
}

const SAMPLE_IMAGE_PRESETS = [
  { label: 'Green Checked Flannel', url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80' },
  { label: 'Korean Baggy Pants', url: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80' },
  { label: 'Parachute Track Pants', url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80' },
  { label: 'Drop-Shoulder Tee', url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
  { label: 'Oversized Denim Shirt', url: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80' },
  { label: 'Bomber Jacket', url: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80' },
  { label: 'Terracotta Maxi Gown', url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80' },
  { label: 'Chanderi Kurti Set', url: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80' },
  { label: 'Kids Streetwear Set', url: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80' },
];

// ── Admin Login Wall ────────────────────────────────────────────────────
const AdminLoginWall: React.FC<{ onLogin: (pw: string) => boolean; onBack: () => void }> = ({ onLogin, onBack }) => {
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!onLogin(pw)) setError('Incorrect password. Try again.');
  };

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-[#111] px-6 py-5 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#F5B301] flex items-center justify-center mx-auto mb-3">
            <Shield className="w-7 h-7 text-black" />
          </div>
          <h1 className="text-white font-black text-xl">Admin Portal</h1>
          <p className="text-zinc-400 text-xs mt-1">DIL Garments — Restricted Access</p>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div>
            <label className="text-xs font-bold text-zinc-700 block mb-1.5">Admin Password</label>
            <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden focus-within:border-[#111] transition-colors">
              <input
                type={showPw ? 'text' : 'password'}
                value={pw}
                onChange={e => { setPw(e.target.value); setError(''); }}
                placeholder="Enter admin password"
                className="flex-1 px-4 py-3 text-sm text-[#111] outline-none bg-white"
              />
              <button type="button" onClick={() => setShowPw(!showPw)} className="px-3 text-zinc-400">
                <Eye className="w-4 h-4" />
              </button>
            </div>
            {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
          </div>
          <button type="submit" className="w-full py-3 rounded-xl bg-[#111] text-white font-black text-sm hover:bg-[#F5B301] hover:text-black transition-all flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" /> Access Admin Panel
          </button>
          <button type="button" onClick={onBack} className="w-full py-2 text-xs text-zinc-400 hover:text-[#111] transition-colors">
            ← Back to Store
          </button>
          <p className="text-[10px] text-zinc-300 text-center">Default password: DILG@ADMIN2025</p>
        </form>
      </div>
    </div>
  );
};

// ── Mini Bar Chart ──────────────────────────────────────────────────────
const MiniBarChart: React.FC<{ data: number[]; labels: string[]; color?: string }> = ({ data, labels, color = '#F5B301' }) => {
  const max = Math.max(...data, 1);
  return (
    <div className="flex items-end gap-1 h-16">
      {data.map((val, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t transition-all"
            style={{ height: `${(val / max) * 52}px`, backgroundColor: color, minHeight: val > 0 ? '4px' : '2px', opacity: val > 0 ? 1 : 0.2 }}
          />
          <span className="text-[8px] text-zinc-400 leading-none">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
};

// ── Main Admin Page ─────────────────────────────────────────────────────
export const AdminPage: React.FC<AdminPageProps> = ({ onBackToStore }) => {
  const {
    products, orders, heroSlides, addProduct, updateProduct, deleteProduct,
    toggleLatestCollection, toggleFlat400Offer, updateOrderStatus,
    addHeroSlide, deleteHeroSlide, resetToDefaults
  } = useStore();
  const { isAdminAuthenticated, loginAdmin, logoutAdmin, allUsers } = useAuth();

  const [activeTab, setActiveTab] = useState<'dashboard' | 'add' | 'inventory' | 'orders' | 'coupons' | 'banners' | 'broadcast'>('dashboard');
  const [selectedProductIds, setSelectedProductIds] = useState<Set<string>>(new Set());

  // Add product form
  const [name, setName] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [division, setDivision] = useState<'men' | 'women' | 'kids'>('men');
  const [category, setCategory] = useState('baggy-shirts');
  const [price, setPrice] = useState('400');
  const [originalPrice, setOriginalPrice] = useState('1299');
  const [imageUrl, setImageUrl] = useState('');
  const [sizes, setSizes] = useState('M,L,XL,XXL');
  const [fabric, setFabric] = useState('100% Combed Cotton');
  const [description, setDescription] = useState('');
  const [stockCount, setStockCount] = useState('20');
  const [cbLatest, setCbLatest] = useState(true);
  const [cbFlat400, setCbFlat400] = useState(false);
  const [cbTrending, setCbTrending] = useState(false);
  const [cbInStock, setCbInStock] = useState(true);
  const [addSuccess, setAddSuccess] = useState('');

  // Front Display Banners Form
  const [bannerHeading, setBannerHeading] = useState('');
  const [bannerSub, setBannerSub] = useState('');
  const [bannerTag, setBannerTag] = useState('FEATURED DROP');
  const [bannerPrice, setBannerPrice] = useState('₹400');
  const [bannerLabel, setBannerLabel] = useState('MEN');
  const [bannerBg, setBannerBg] = useState('');
  const [bannerSuccess, setBannerSuccess] = useState('');

  // Coupons
  const [coupons, setCoupons] = useState<Coupon[]>([
    { id: 'c1', code: 'DIWALI20', discountType: 'percentage', discountValue: 20, minOrderAmount: 500, maxDiscount: 200, isActive: true, usedCount: 12, description: 'Diwali special 20% off' },
    { id: 'c2', code: 'FLAT100', discountType: 'fixed', discountValue: 100, minOrderAmount: 600, isActive: true, usedCount: 8, description: '₹100 flat discount' },
    { id: 'c3', code: 'NEWUSER50', discountType: 'fixed', discountValue: 50, minOrderAmount: 0, isActive: true, usedCount: 35, description: 'New user welcome offer' },
  ]);
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponType, setNewCouponType] = useState<'percentage' | 'fixed'>('percentage');
  const [newCouponValue, setNewCouponValue] = useState('');
  const [newCouponMin, setNewCouponMin] = useState('');
  const [newCouponDesc, setNewCouponDesc] = useState('');

  // Broadcast
  const [broadcastMsg, setBroadcastMsg] = useState('');
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = useState<Order | null>(null);

  // ── Admin Auth Gate ──
  if (!isAdminAuthenticated) {
    return <AdminLoginWall onLogin={loginAdmin} onBack={onBackToStore} />;
  }

  // ── Dashboard Analytics ──
  const totalRevenue = orders.reduce((s, o) => s + o.totalAmount, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'pending').length;
  const deliveredOrders = orders.filter(o => o.status === 'delivered').length;
  const lowStockProducts = products.filter(p => p.stockCount < 5);
  const totalCustomers = allUsers.length;

  // Weekly chart (dummy fill since all orders are "today")
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekRevenue = [2400, 3100, 1800, 4200, 3800, 5600, totalRevenue];
  const weekOrders = [3, 4, 2, 6, 5, 8, totalOrders];

  // Best sellers by division
  const menCount = products.filter(p => p.division === 'men').length;
  const womenCount = products.filter(p => p.division === 'women').length;
  const kidsCount = products.filter(p => p.division === 'kids').length;

  // ── Feature 4: 📊 CSV Export Functions for Accounting & GST ──
  const exportOrdersToCSV = () => {
    if (orders.length === 0) {
      alert("No orders available to export.");
      return;
    }

    const headers = [
      'Order ID',
      'Date & Time',
      'Customer Name',
      'Phone Number',
      'Delivery Type',
      'Address',
      'City',
      'Pincode',
      'Payment Method',
      'Order Status',
      'Total Amount (INR)',
      'Items Summary'
    ];

    const rows = orders.map(o => {
      const itemsSummary = o.items
        .map(it => `${it.product.name} [Size: ${it.selectedSize}, Qty: ${it.quantity}]`)
        .join('; ');

      const deliveryType = o.address.includes('STORE PICKUP') ? 'Store Pickup' : 'Home Delivery';

      return [
        `"${o.id}"`,
        `"${o.createdAt}"`,
        `"${o.customerName.replace(/"/g, '""')}"`,
        `"${o.phone}"`,
        `"${deliveryType}"`,
        `"${o.address.replace(/"/g, '""')}"`,
        `"${o.city.replace(/"/g, '""')}"`,
        `"${o.pincode}"`,
        `"${o.paymentMethod.toUpperCase()}"`,
        `"${o.status.toUpperCase()}"`,
        o.totalAmount,
        `"${itemsSummary.replace(/"/g, '""')}"`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DIL_Garments_Orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportInventoryToCSV = () => {
    if (products.length === 0) {
      alert("No products in inventory to export.");
      return;
    }

    const headers = [
      'Product ID',
      'Name',
      'Division',
      'Category',
      'Price (INR)',
      'Original Price (INR)',
      'Fabric',
      'Fit',
      'Available Sizes',
      'Stock Count',
      'In Stock',
      'Flat 400 Offer',
      'Latest Collection'
    ];

    const rows = products.map(p => {
      return [
        `"${p.id}"`,
        `"${p.name.replace(/"/g, '""')}"`,
        `"${p.division.toUpperCase()}"`,
        `"${p.category}"`,
        p.price,
        p.originalPrice,
        `"${(p.fabric || '100% Cotton').replace(/"/g, '""')}"`,
        `"${(p.fit || 'Regular').replace(/"/g, '""')}"`,
        `"${p.sizes.join(', ')}"`,
        p.stockCount,
        p.inStock ? 'YES' : 'NO',
        p.isFlat400Offer ? 'YES' : 'NO',
        p.isLatestCollection ? 'YES' : 'NO'
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `DIL_Garments_Inventory_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ── Bulk Actions ──
  const toggleSelectProduct = (id: string) => {
    setSelectedProductIds(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const bulkAction = (action: 'latest' | 'flat400' | 'delete') => {
    if (selectedProductIds.size === 0) return;
    selectedProductIds.forEach(id => {
      const p = products.find(pr => pr.id === id);
      if (!p) return;
      if (action === 'latest' && !p.isLatestCollection) toggleLatestCollection(id);
      if (action === 'flat400' && !p.isFlat400Offer) toggleFlat400Offer(id);
      if (action === 'delete') deleteProduct(id);
    });
    setSelectedProductIds(new Set());
  };

  // ── Add Product ──
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const pr = parseFloat(price);
    const op = parseFloat(originalPrice);
    const newProduct: Omit<Product, 'id'> = {
      name, subtitle, division, category,
      price: pr, originalPrice: op,
      discountPercentage: Math.round(((op - pr) / op) * 100),
      imageUrl: imageUrl || SAMPLE_IMAGE_PRESETS[0].url,
      galleryImages: [imageUrl || SAMPLE_IMAGE_PRESETS[0].url],
      sizes: sizes.split(',').map(s => s.trim()).filter(Boolean),
      colors: [{ name: 'Standard', hex: '#111111' }],
      inStock: cbInStock,
      stockCount: parseInt(stockCount) || 20,
      isTrending: cbTrending,
      isOfferDrop: cbFlat400,
      isNewArrival: true,
      isLatestCollection: cbLatest,
      isFlat400Offer: cbFlat400,
      rating: 4.8,
      reviewsCount: 0,
      description: description || `Premium ${name} from DIL Garments, Tadipatri.`,
      features: ['Quality Fabric', 'Comfortable Fit'],
      fabric,
      fit: 'Regular Fit',
      care: 'Machine wash cold',
      tags: [category, division],
    };
    addProduct(newProduct as Product);
    setAddSuccess(`✅ "${name}" added successfully!`);
    setName(''); setSubtitle(''); setPrice('400'); setOriginalPrice('1299');
    setImageUrl(''); setSizes('M,L,XL,XXL'); setDescription('');
    setTimeout(() => setAddSuccess(''), 3000);
  };

  // ── Add Coupon ──
  const handleAddCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCouponCode.trim() || !newCouponValue) return;
    const newCoupon: Coupon = {
      id: `c-${Date.now()}`,
      code: newCouponCode.toUpperCase().trim(),
      discountType: newCouponType,
      discountValue: parseFloat(newCouponValue),
      minOrderAmount: parseFloat(newCouponMin) || 0,
      isActive: true,
      usedCount: 0,
      description: newCouponDesc || `${newCouponCode} discount`,
    };
    setCoupons(prev => [...prev, newCoupon]);
    setNewCouponCode(''); setNewCouponValue(''); setNewCouponMin(''); setNewCouponDesc('');
  };

  const statusFlow: Record<string, string> = {
    pending: 'confirmed', confirmed: 'dispatched', dispatched: 'delivered', delivered: 'delivered'
  };

  const sendWhatsAppUpdate = (order: Order, newStatus: string) => {
    const msg = `Hi ${order.customerName}! 🛍️ Your DIL Garments order *#${order.id}* status has been updated to: *${newStatus.toUpperCase()}*. Thank you for shopping with us! — N. Shaiksha Vali, DIL Garments`;
    window.open(`https://wa.me/91${order.phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Image file upload helper (reads device photo to base64 DataURL)
  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setter(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddHeroSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bannerHeading.trim() || !bannerBg.trim()) return;
    addHeroSlide({
      label: bannerLabel,
      heading: bannerHeading.toUpperCase(),
      sub: bannerSub || 'New Collection',
      tag: bannerTag || 'FEATURED DROP',
      price: bannerPrice || '₹400',
      bg: bannerBg,
      accent: bannerLabel === 'MEN' ? '#F5B301' : bannerLabel === 'WOMEN' ? '#ec4899' : '#3b82f6',
      textLight: true
    });
    setBannerSuccess('✅ Front Display Banner added successfully!');
    setBannerHeading(''); setBannerSub(''); setBannerBg('');
    setTimeout(() => setBannerSuccess(''), 3000);
  };

  const TABS = [
    { key: 'dashboard', label: 'Dashboard', icon: <BarChart2 className="w-4 h-4" /> },
    { key: 'banners', label: `Front Display (${heroSlides?.length || 0})`, icon: <ImageIcon className="w-4 h-4" /> },
    { key: 'add', label: 'Add Product', icon: <PlusCircle className="w-4 h-4" /> },
    { key: 'inventory', label: `Inventory (${products.length})`, icon: <Package className="w-4 h-4" /> },
    { key: 'orders', label: `Orders (${orders.length})`, icon: <ShoppingBag className="w-4 h-4" /> },
    { key: 'coupons', label: 'Coupons', icon: <Tag className="w-4 h-4" /> },
    { key: 'broadcast', label: 'Broadcast', icon: <Send className="w-4 h-4" /> },
  ] as const;

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    confirmed: 'bg-blue-100 text-blue-700 border-blue-200',
    dispatched: 'bg-purple-100 text-purple-700 border-purple-200',
    delivered: 'bg-green-100 text-green-700 border-green-200',
    cancelled: 'bg-red-100 text-red-700 border-red-200',
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      {/* ── Top Bar ── */}
      <div className="sticky top-0 z-40 bg-[#111] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button onClick={onBackToStore}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#F5B301] flex items-center justify-center">
                <Shield className="w-4 h-4 text-black" />
              </div>
              <span className="text-white font-black text-sm">DIL Garments Admin</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Low stock alert */}
            {lowStockProducts.length > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-[11px] font-bold animate-pulse">
                <AlertTriangle className="w-3 h-3" />
                {lowStockProducts.length} Low Stock
              </div>
            )}
            <button onClick={() => { logoutAdmin(); onBackToStore(); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white text-xs font-bold transition-all">
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="max-w-7xl mx-auto px-4 flex gap-0.5 overflow-x-auto no-scrollbar">
          {TABS.map(tab => (
            <button key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-bold whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab.key
                  ? 'text-[#F5B301] border-[#F5B301]'
                  : 'text-zinc-500 border-transparent hover:text-zinc-300'
              }`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* ════════════ DASHBOARD ════════════ */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Revenue', value: formatINR(totalRevenue), icon: <DollarSign className="w-5 h-5 text-green-600" />, bg: 'bg-green-50', sub: `${totalOrders} orders` },
                { label: 'Total Orders', value: totalOrders, icon: <ShoppingBag className="w-5 h-5 text-blue-600" />, bg: 'bg-blue-50', sub: `${pendingOrders} pending` },
                { label: 'Products', value: products.length, icon: <Package className="w-5 h-5 text-purple-600" />, bg: 'bg-purple-50', sub: `${lowStockProducts.length} low stock` },
                { label: 'Customers', value: totalCustomers, icon: <Users className="w-5 h-5 text-amber-600" />, bg: 'bg-amber-50', sub: 'registered users' },
              ].map(kpi => (
                <div key={kpi.label} className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${kpi.bg} flex items-center justify-center mb-3`}>{kpi.icon}</div>
                  <p className="text-2xl font-black text-[#111]">{kpi.value}</p>
                  <p className="text-xs font-bold text-zinc-500 mt-0.5">{kpi.label}</p>
                  <p className="text-[10px] text-zinc-400 mt-1">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm">
                <p className="text-xs font-black text-zinc-500 uppercase tracking-wider mb-4">Weekly Revenue (₹)</p>
                <MiniBarChart data={weekRevenue} labels={weekDays} color="#F5B301" />
              </div>
              <div className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm">
                <p className="text-xs font-black text-zinc-500 uppercase tracking-wider mb-4">Weekly Orders</p>
                <MiniBarChart data={weekOrders} labels={weekDays} color="#111111" />
              </div>
            </div>

            {/* Inventory Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm">
                <p className="text-xs font-black text-zinc-500 uppercase tracking-wider mb-4">Stock by Division</p>
                {[
                  { label: "Men's", count: menCount, total: products.length, color: 'bg-amber-400' },
                  { label: "Women's", count: womenCount, total: products.length, color: 'bg-pink-400' },
                  { label: 'Kids', count: kidsCount, total: products.length, color: 'bg-blue-400' },
                ].map(d => (
                  <div key={d.label} className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-bold text-[#111]">{d.label}</span>
                      <span className="text-zinc-400">{d.count} products</span>
                    </div>
                    <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                      <div className={`h-full ${d.color} rounded-full`} style={{ width: `${(d.count / d.total) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Low Stock Alert */}
              <div className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <p className="text-xs font-black text-red-500 uppercase tracking-wider">Low Stock Alert ({lowStockProducts.length})</p>
                </div>
                {lowStockProducts.length === 0 ? (
                  <p className="text-sm text-zinc-400 text-center py-4">All products well-stocked! ✅</p>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {lowStockProducts.map(p => (
                      <div key={p.id} className="flex items-center gap-3 p-2 rounded-lg bg-red-50 border border-red-100">
                        <img src={p.imageUrl} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#111] line-clamp-1">{p.name}</p>
                          <p className="text-[10px] text-red-500 font-bold">Only {p.stockCount} left!</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm">
              <p className="text-xs font-black text-zinc-500 uppercase tracking-wider mb-4">Recent Orders</p>
              {orders.length === 0 ? (
                <p className="text-sm text-zinc-400 text-center py-4">No orders yet.</p>
              ) : (
                <div className="space-y-3">
                  {orders.slice(0, 5).map(order => (
                    <div key={order.id} className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors">
                      <div>
                        <p className="text-xs font-black text-[#111]">#{order.id} — {order.customerName}</p>
                        <p className="text-[10px] text-zinc-400">{order.phone} · {order.items.length} item(s)</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-[#111]">{formatINR(order.totalAmount)}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border capitalize ${statusColors[order.status] || ''}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ════════════ FRONT DISPLAY BANNERS ════════════ */}
        {activeTab === 'banners' && (
          <div className="space-y-6 max-w-4xl">
            {/* Form to Upload New Front Banner */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
                <h2 className="text-base font-black text-[#111] flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-[#F5B301]" /> Add Front Display Banner / Photo
                </h2>
                <span className="text-xs text-zinc-400 font-bold">Display on Storefront Hero</span>
              </div>
              <form onSubmit={handleAddHeroSlide} className="px-6 py-5 space-y-4">
                {bannerSuccess && (
                  <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs font-bold flex items-center gap-2">
                    <Check className="w-4 h-4" /> {bannerSuccess}
                  </div>
                )}

                {/* Upload from device or URL */}
                <div>
                  <label className="text-xs font-bold text-zinc-700 block mb-1.5">Banner Photo (Upload or Paste URL) *</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <label className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl border-2 border-dashed border-zinc-300 text-zinc-600 font-bold text-xs cursor-pointer hover:border-[#111] hover:text-[#111] transition-colors">
                      <Upload className="w-4 h-4 text-[#F5B301]" />
                      <span>{bannerBg ? 'Change Photo from Device' : '📁 Upload Photo from Computer / Phone'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageFileUpload(e, setBannerBg)}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="text"
                      value={bannerBg}
                      onChange={(e) => setBannerBg(e.target.value)}
                      placeholder="Or paste image URL directly..."
                      className="flex-1 px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111]"
                    />
                  </div>
                  {bannerBg && (
                    <div className="mt-3 relative w-full h-44 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                      <img src={bannerBg} alt="Banner Preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                        <div className="text-white">
                          <span className="text-[10px] font-black uppercase text-[#F5B301]">{bannerLabel} · {bannerTag}</span>
                          <p className="text-lg font-black">{bannerHeading || 'BANNER HEADING'}</p>
                          <p className="text-xs text-zinc-300">{bannerSub || 'Subtitle preview'}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Division / Target *</label>
                    <select
                      value={bannerLabel}
                      onChange={(e) => setBannerLabel(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none bg-white font-bold"
                    >
                      <option value="MEN">MEN (Streetwear / Baggy)</option>
                      <option value="WOMEN">WOMEN (Gowns / Kurtis)</option>
                      <option value="KIDS">KIDS (Sets & Frocks)</option>
                      <option value="OFFER">SPECIAL FLAT ₹400 OFFER</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Main Headline *</label>
                    <input
                      required
                      value={bannerHeading}
                      onChange={(e) => setBannerHeading(e.target.value)}
                      placeholder="e.g. BAGGY STREETS"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] font-bold uppercase"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Subtitle</label>
                    <input
                      value={bannerSub}
                      onChange={(e) => setBannerSub(e.target.value)}
                      placeholder="e.g. Korean Drop-Shoulder Fits"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Offer Tag / Price</label>
                    <div className="flex gap-2">
                      <input
                        value={bannerTag}
                        onChange={(e) => setBannerTag(e.target.value)}
                        placeholder="Tag (e.g. NEW SEASON)"
                        className="w-2/3 px-3.5 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111]"
                      />
                      <input
                        value={bannerPrice}
                        onChange={(e) => setBannerPrice(e.target.value)}
                        placeholder="₹400"
                        className="w-1/3 px-3 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] font-bold outline-none focus:border-[#111]"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#111] text-white font-black text-sm uppercase tracking-wider hover:bg-[#F5B301] hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <PlusCircle className="w-5 h-5" /> Save Banner to Front Page
                </button>
              </form>
            </div>

            {/* Currently Active Front Display Banners */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 space-y-4">
              <h3 className="text-sm font-black text-[#111] uppercase tracking-wider">
                Currently Active Front Display Banners ({heroSlides?.length || 0})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {heroSlides?.map((slide) => (
                  <div key={slide.id} className="relative rounded-2xl overflow-hidden border border-zinc-200 group">
                    <img src={slide.bg} alt={slide.label} className="w-full h-44 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3.5 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="px-2 py-0.5 rounded-full bg-[#F5B301] text-black text-[10px] font-black">
                          {slide.label}
                        </span>
                        <button
                          onClick={() => deleteHeroSlide(String(slide.id))}
                          className="p-1.5 rounded-full bg-red-600/80 text-white hover:bg-red-600 transition-colors"
                          title="Remove from front page"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-white">
                        <p className="font-black text-sm leading-tight">{slide.heading}</p>
                        <p className="text-[11px] text-zinc-300 mt-0.5">{slide.sub}</p>
                        <span className="text-xs font-mono font-black text-[#F5B301]">{slide.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ════════════ ADD PRODUCT ════════════ */}
        {activeTab === 'add' && (
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-100">
                <h2 className="text-base font-black text-[#111] flex items-center gap-2">
                  <PlusCircle className="w-5 h-5 text-[#F5B301]" /> Add New Product
                </h2>
              </div>
              <form onSubmit={handleAddProduct} className="px-6 py-5 space-y-4">
                {addSuccess && (
                  <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs font-bold flex items-center gap-2">
                    <Check className="w-4 h-4" /> {addSuccess}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Product Name *</label>
                    <input required value={name} onChange={e => setName(e.target.value)}
                      placeholder="Oversized Boxy Checked Flannel Shirt"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Division</label>
                    <select value={division} onChange={e => setDivision(e.target.value as 'men'|'women'|'kids')}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] bg-white">
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      <option value="kids">Kids</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] bg-white">
                      <option value="baggy-shirts">Baggy Shirts</option>
                      <option value="baggy-pants">Baggy Pants</option>
                      <option value="jackets">Jackets & Hoodies</option>
                      <option value="dresses">Dresses & Gowns</option>
                      <option value="kurtis">Kurtis</option>
                      <option value="kids-sets">Kids Sets</option>
                      <option value="t-shirts">T-Shirts</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Sale Price (₹) *</label>
                    <input required type="number" value={price} onChange={e => setPrice(e.target.value)}
                      placeholder="400"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Original Price (₹)</label>
                    <input type="number" value={originalPrice} onChange={e => setOriginalPrice(e.target.value)}
                      placeholder="1299"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Stock Count</label>
                    <input type="number" value={stockCount} onChange={e => setStockCount(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Sizes (comma-separated)</label>
                    <input value={sizes} onChange={e => setSizes(e.target.value)}
                      placeholder="M,L,XL,XXL"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-700 block mb-1.5">Fabric</label>
                  <input value={fabric} onChange={e => setFabric(e.target.value)} placeholder="100% Combed Cotton"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                </div>

                {/* Image presets & Device Upload */}
                <div>
                  <label className="text-xs font-bold text-zinc-700 block mb-2">Product Image (Upload or Pick Preset) *</label>
                  
                  {/* Upload from Phone or PC */}
                  <div className="mb-3 p-3 rounded-xl bg-zinc-50 border-2 border-dashed border-zinc-300 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-zinc-700">
                      <Upload className="w-4 h-4 text-[#F5B301]" />
                      <span className="font-bold">Upload Photo from Phone / PC</span>
                    </div>
                    <label className="px-3 py-1.5 rounded-lg bg-[#111] text-white text-xs font-bold cursor-pointer hover:bg-[#F5B301] hover:text-black transition-colors">
                      Choose Photo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageFileUpload(e, setImageUrl)}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {SAMPLE_IMAGE_PRESETS.map(preset => (
                      <button key={preset.url} type="button"
                        onClick={() => setImageUrl(preset.url)}
                        className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all ${imageUrl === preset.url ? 'border-[#F5B301] shadow-lg' : 'border-transparent hover:border-zinc-200'}`}>
                        <img src={preset.url} alt={preset.label} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-[9px] font-bold p-1 text-center leading-tight">
                          {preset.label}
                        </div>
                        {imageUrl === preset.url && (
                          <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#F5B301] flex items-center justify-center">
                            <Check className="w-3 h-3 text-black" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <input value={imageUrl} onChange={e => setImageUrl(e.target.value)}
                    placeholder="Or paste image URL..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-700 block mb-1.5">Description</label>
                  <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3}
                    placeholder="Premium quality product from DIL Garments, Tadipatri..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors resize-none" />
                </div>

                {/* Checkboxes */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-3">
                  <p className="text-xs font-black text-zinc-600 uppercase tracking-wider">Display Options</p>
                  {[
                    { label: '✨ Show in Latest Collection (Front Page)', val: cbLatest, set: setCbLatest },
                    { label: '🔥 Flat ₹400 Baggy Deal', val: cbFlat400, set: setCbFlat400 },
                    { label: '⚡ Mark as Trending', val: cbTrending, set: setCbTrending },
                    { label: '✅ Currently In Stock', val: cbInStock, set: setCbInStock },
                  ].map(cb => (
                    <label key={cb.label} className="flex items-center gap-3 cursor-pointer">
                      <div onClick={() => cb.set(!cb.val)}
                        className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-all ${cb.val ? 'bg-[#111] border-[#111]' : 'border-zinc-300'}`}>
                        {cb.val && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm text-zinc-700 font-semibold">{cb.label}</span>
                    </label>
                  ))}
                </div>

                <button type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#111] text-white font-black text-sm hover:bg-[#F5B301] hover:text-black transition-all flex items-center justify-center gap-2">
                  <PlusCircle className="w-5 h-5" /> Add to Catalog
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ════════════ INVENTORY ════════════ */}
        {activeTab === 'inventory' && (
          <div className="space-y-4">
            {/* Inventory Toolbar with 📊 CSV Export */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
              <div>
                <h3 className="text-sm font-black text-[#111] uppercase tracking-wider">Inventory Catalog ({products.length})</h3>
                <p className="text-xs text-zinc-500">Manage products, stock levels, and export for business accounting.</p>
              </div>
              <button
                type="button"
                onClick={exportInventoryToCSV}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-sm shrink-0"
                title="Download inventory data as CSV for Excel / Google Sheets"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Export Inventory (CSV)</span>
              </button>
            </div>

            {/* Bulk action bar */}
            {selectedProductIds.size > 0 && (
              <div className="flex items-center gap-3 p-3 bg-[#111] rounded-xl text-white text-sm">
                <span className="font-bold">{selectedProductIds.size} selected</span>
                <button onClick={() => bulkAction('latest')} className="px-3 py-1.5 rounded-lg bg-[#F5B301] text-black font-bold text-xs hover:bg-white transition-all">Mark Latest</button>
                <button onClick={() => bulkAction('flat400')} className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-all">Mark ₹400</button>
                <button onClick={() => bulkAction('delete')} className="px-3 py-1.5 rounded-lg bg-red-900/50 text-red-400 font-bold text-xs hover:bg-red-600 hover:text-white transition-all">Delete</button>
                <button onClick={() => setSelectedProductIds(new Set())} className="ml-auto text-zinc-400 hover:text-white"><X className="w-4 h-4" /></button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map(product => (
                <div key={product.id}
                  className={`bg-white rounded-2xl border-2 overflow-hidden transition-all ${selectedProductIds.has(product.id) ? 'border-[#F5B301]' : 'border-zinc-100'}`}>
                  <div className="relative">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-36 object-cover" />
                    <button
                      onClick={() => toggleSelectProduct(product.id)}
                      className={`absolute top-2 left-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedProductIds.has(product.id) ? 'bg-[#F5B301] border-[#F5B301]' : 'bg-white/90 border-zinc-300'
                      }`}>
                      {selectedProductIds.has(product.id) && <Check className="w-3 h-3 text-black" />}
                    </button>
                    {product.stockCount < 5 && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black flex items-center gap-1">
                        <AlertTriangle className="w-2.5 h-2.5" /> {product.stockCount} left
                      </div>
                    )}
                  </div>

                  <div className="p-3 space-y-2">
                    <p className="text-sm font-bold text-[#111] line-clamp-1">{product.name}</p>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-zinc-400 capitalize">{product.division} · {product.category}</span>
                      <span className="font-black text-[#111]">{formatINR(product.price)}</span>
                    </div>

                    {/* Stock Counter Quick Adjuster */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-zinc-50 border border-zinc-100 text-xs">
                      <span className="text-zinc-500 font-bold">Stock Qty:</span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            const newCount = Math.max(0, product.stockCount - 1);
                            updateProduct({ ...product, stockCount: newCount, inStock: newCount > 0 });
                          }}
                          className="w-6 h-6 rounded-lg bg-zinc-200 hover:bg-zinc-300 font-black flex items-center justify-center text-xs text-[#111]"
                        >
                          -
                        </button>
                        <span className={`w-8 text-center font-black ${product.stockCount < 5 ? 'text-red-600' : 'text-[#111]'}`}>
                          {product.stockCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            const newCount = product.stockCount + 5;
                            updateProduct({ ...product, stockCount: newCount, inStock: true });
                          }}
                          className="w-6 h-6 rounded-lg bg-zinc-200 hover:bg-zinc-300 font-black flex items-center justify-center text-xs text-[#111]"
                          title="Add +5 units"
                        >
                          +5
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      <button onClick={() => toggleLatestCollection(product.id)}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${product.isLatestCollection ? 'bg-[#111] text-[#F5B301]' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}>
                        ✨ Latest
                      </button>
                      <button onClick={() => toggleFlat400Offer(product.id)}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${product.isFlat400Offer ? 'bg-red-600 text-white' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}>
                        🔥 ₹400
                      </button>
                      <button
                        onClick={() => {
                          const nextInStock = !product.inStock;
                          updateProduct({
                            ...product,
                            inStock: nextInStock,
                            stockCount: nextInStock && product.stockCount === 0 ? 10 : product.stockCount
                          });
                        }}
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${product.inStock ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                      >
                        {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                      </button>
                    </div>

                    <button onClick={() => deleteProduct(product.id)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-bold text-red-500 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
                      <Trash2 className="w-3 h-3" /> Remove Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════ ORDERS ════════════ */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {/* Orders Toolbar with 📊 CSV Export */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
              <div>
                <h3 className="text-sm font-black text-[#111] uppercase tracking-wider">All Customer Orders ({orders.length})</h3>
                <p className="text-xs text-zinc-500">Track fulfillment status, Tadipatri store pickups, and export for GST filing.</p>
              </div>
              <button
                type="button"
                onClick={exportOrdersToCSV}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-sm shrink-0"
                title="Download orders data as CSV for Excel / GST filing"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Export Orders to Excel (CSV)</span>
              </button>
            </div>
            {orders.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-zinc-100">
                <ShoppingBag className="w-12 h-12 text-zinc-200 mx-auto mb-3" />
                <p className="text-zinc-400">No orders yet.</p>
              </div>
            ) : (
              orders.map(order => (
                <div key={order.id} className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4 border-b border-zinc-50 gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-[#111]">#{order.id}</span>
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border capitalize ${statusColors[order.status] || ''}`}>{order.status}</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {order.customerName} · +91 {order.phone} · {order.city} {order.pincode}
                      </p>
                      <p className="text-[10px] text-zinc-400">{order.createdAt} · {order.paymentMethod.toUpperCase()}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-lg font-black text-[#111]">{formatINR(order.totalAmount)}</span>
                      {order.status !== 'delivered' && order.status !== 'cancelled' && (
                        <button
                          onClick={() => {
                            const next = statusFlow[order.status] || 'confirmed';
                            updateOrderStatus(order.id, next as Order['status']);
                            sendWhatsAppUpdate(order, next);
                          }}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#111] text-white text-xs font-bold hover:bg-[#F5B301] hover:text-black transition-all"
                        >
                          <Truck className="w-3.5 h-3.5" />
                          Mark {statusFlow[order.status] || 'Confirmed'}
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedInvoiceOrder(order)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-100 text-zinc-700 text-xs font-bold hover:bg-[#111] hover:text-white transition-all border border-zinc-200"
                        title="Print Official GST Invoice & Dispatch Label"
                      >
                        <Printer className="w-3.5 h-3.5" /> Invoice
                      </button>
                      <a
                        href={`https://wa.me/91${order.phone}?text=${encodeURIComponent(
                          `*DIL GARMENTS — TADIPATRI*\n` +
                          `Namaste ${order.customerName}! 🛍️\n\n` +
                          `Your order *#${order.id}* is currently: *${order.status.toUpperCase()}*.\n` +
                          `Total: ${formatINR(order.totalAmount)} (${order.paymentMethod.toUpperCase()})\n` +
                          (order.address.includes('STORE PICKUP')
                            ? `📍 *Store Pickup Hold*: Ready at our C.B. Road showroom (Opp. Markandeya Swamy Temple).\n`
                            : `🚚 *Delivery Address*: ${order.address}, ${order.city} - ${order.pincode}.\n`) +
                          `\nNeed any adjustments? Reply directly here on WhatsApp.\n— N. Shaiksha Vali, Proprietor\nPh: 9848988295 / 8341312155`
                        )}`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366]/10 text-[#25D366] text-xs font-bold hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20"
                        title="Send detailed WhatsApp notification with tracking and pickup address"
                      >
                        <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Status
                      </a>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    {order.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <img src={item.product.imageUrl} alt={item.product.name} className="w-12 h-12 rounded-xl object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#111] line-clamp-1">{item.product.name}</p>
                          <p className="text-[10px] text-zinc-400">Size: {item.selectedSize} · Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-black text-[#111]">{formatINR(item.product.price * item.quantity)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* ════════════ COUPONS ════════════ */}
        {activeTab === 'coupons' && (
          <div className="space-y-5 max-w-2xl">
            {/* Existing Coupons */}
            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-500">Active Coupons ({coupons.length})</h3>
              {coupons.map(coupon => (
                <div key={coupon.id} className="bg-white rounded-2xl border border-zinc-100 p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#111] flex items-center justify-center">
                      <Tag className="w-5 h-5 text-[#F5B301]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-[#111] text-sm tracking-wider">{coupon.code}</span>
                        <button onClick={() => { navigator.clipboard.writeText(coupon.code); }}
                          className="p-1 rounded hover:bg-zinc-100 transition-colors">
                          <Copy className="w-3 h-3 text-zinc-400" />
                        </button>
                      </div>
                      <p className="text-[11px] text-zinc-500">{coupon.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold text-[#111]">
                          {coupon.discountType === 'percentage' ? `${coupon.discountValue}% off` : `₹${coupon.discountValue} off`}
                        </span>
                        <span className="text-[10px] text-zinc-400">· Min ₹{coupon.minOrderAmount}</span>
                        <span className="text-[10px] text-zinc-400">· Used {coupon.usedCount}×</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCoupons(prev => prev.map(c => c.id === coupon.id ? { ...c, isActive: !c.isActive } : c))}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${coupon.isActive ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}>
                      {coupon.isActive ? 'Active' : 'Inactive'}
                    </button>
                    <button onClick={() => setCoupons(prev => prev.filter(c => c.id !== coupon.id))}
                      className="p-2 rounded-lg hover:bg-red-50 transition-colors">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Coupon */}
            <div className="bg-white rounded-2xl border border-zinc-100 p-5">
              <h3 className="text-sm font-black text-[#111] mb-4 flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-[#F5B301]" /> Create New Coupon
              </h3>
              <form onSubmit={handleAddCoupon} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-zinc-600 block mb-1">Coupon Code *</label>
                    <input value={newCouponCode} onChange={e => setNewCouponCode(e.target.value.toUpperCase())}
                      placeholder="DIWALI20" required
                      className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-sm font-mono font-bold text-[#111] outline-none focus:border-[#111] transition-colors uppercase" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-600 block mb-1">Type</label>
                    <select value={newCouponType} onChange={e => setNewCouponType(e.target.value as 'percentage' | 'fixed')}
                      className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] bg-white">
                      <option value="percentage">Percentage (%)</option>
                      <option value="fixed">Fixed Amount (₹)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-600 block mb-1">
                      {newCouponType === 'percentage' ? 'Discount %' : 'Discount ₹'} *
                    </label>
                    <input type="number" value={newCouponValue} onChange={e => setNewCouponValue(e.target.value)} required
                      placeholder={newCouponType === 'percentage' ? '20' : '100'}
                      className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-600 block mb-1">Min Order (₹)</label>
                    <input type="number" value={newCouponMin} onChange={e => setNewCouponMin(e.target.value)}
                      placeholder="500"
                      className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs font-bold text-zinc-600 block mb-1">Description</label>
                    <input value={newCouponDesc} onChange={e => setNewCouponDesc(e.target.value)}
                      placeholder="Diwali special offer..."
                      className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors" />
                  </div>
                </div>
                <button type="submit"
                  className="w-full py-3 rounded-xl bg-[#111] text-white font-black text-sm hover:bg-[#F5B301] hover:text-black transition-all flex items-center justify-center gap-2">
                  <Tag className="w-4 h-4" /> Create Coupon
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ════════════ BROADCAST ════════════ */}
        {activeTab === 'broadcast' && (
          <div className="max-w-xl space-y-5">
            <div className="bg-white rounded-2xl border border-zinc-100 p-5">
              <h3 className="text-sm font-black text-[#111] mb-1 flex items-center gap-2">
                <Send className="w-4 h-4 text-[#25D366]" /> WhatsApp Broadcast Message
              </h3>
              <p className="text-[11px] text-zinc-400 mb-4">
                Open a WhatsApp message to send to all recent customers. Copy the message and paste into WhatsApp broadcast.
              </p>

              <div className="space-y-3">
                <textarea
                  value={broadcastMsg}
                  onChange={e => setBroadcastMsg(e.target.value)}
                  rows={5}
                  placeholder="Hi! 👋 DIL Garments has a new drop!&#10;🔥 Baggy Shirts & Pants @ FLAT ₹400&#10;✨ New arrivals in Men, Women & Kids&#10;👉 Order on WhatsApp: 9848988295&#10;#DILGarments #Tadipatri"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors resize-none"
                />

                {/* Quick Templates */}
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Quick Templates</p>
                  {[
                    { label: '🔥 New Drop Alert', msg: `Hi! 👋 New drop at DIL Garments, Tadipatri!\n🔥 BAGGY SHIRTS & PANTS @ FLAT ₹400\n✨ Fresh styles in Men, Women & Kids\n📦 COD Available · Free delivery ₹999+\nOrder now: 9848988295` },
                    { label: '🎉 Festive Sale', msg: `🎉 FESTIVE SEASON SPECIAL at DIL Garments!\n🛍️ Designer Gowns, Anarkali Suits & Kurtis\nUp to 64% off on Women's Collection\n📞 9848988295 | 8341312155\nOpp. Markandeya Temple, CB Road, Tadipatri` },
                    { label: '👶 Kids New Arrivals', msg: `New Kids Wear Collection at DIL Garments! 👶\n🧥 Hoodies, Denim Sets, Party Frocks\nSizes 3–14 Years | Premium Quality\n🏬 CB Road, Tadipatri | 📞 9848988295` },
                  ].map(tmpl => (
                    <button key={tmpl.label} onClick={() => setBroadcastMsg(tmpl.msg)}
                      className="w-full text-left px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-100 text-xs text-zinc-700 font-semibold hover:bg-zinc-100 transition-colors">
                      {tmpl.label}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => { navigator.clipboard.writeText(broadcastMsg); }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-[#111] text-[#111] font-bold text-sm hover:bg-[#111] hover:text-white transition-all">
                    <Copy className="w-4 h-4" /> Copy Message
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(broadcastMsg)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-black text-sm hover:bg-green-600 transition-all">
                    <Send className="w-4 h-4" /> Open WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Customer List */}
            <div className="bg-white rounded-2xl border border-zinc-100 p-5">
              <h3 className="text-sm font-black text-[#111] mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" /> Registered Customers ({allUsers.length})
              </h3>
              {allUsers.length === 0 ? (
                <p className="text-sm text-zinc-400 text-center py-4">No registered customers yet.</p>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {allUsers.map(user => (
                    <div key={user.id} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F5B301] flex items-center justify-center text-black font-black text-sm">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#111]">{user.name}</p>
                          <p className="text-[10px] text-zinc-400">{user.phone} · {user.city}</p>
                        </div>
                      </div>
                      <a
                        href={`https://wa.me/91${user.phone}?text=${encodeURIComponent(broadcastMsg || `Hi ${user.name}! New styles at DIL Garments. Check us out!`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 🖨️ Feature 6: Printable GST Invoice & Dispatch Label Modal */}
      <InvoiceModal
        order={selectedInvoiceOrder}
        isOpen={!!selectedInvoiceOrder}
        onClose={() => setSelectedInvoiceOrder(null)}
      />
    </div>
  );
};
