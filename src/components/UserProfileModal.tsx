import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, User, MapPin, Package, LogOut,
  Plus, Trash2, Home, Briefcase, Edit3, Check,
  ChevronRight, Phone
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useStore } from '../context/StoreContext';
import { formatINR } from '../lib/utils';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ProfileTab = 'overview' | 'orders' | 'addresses';

export const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
  const { currentUser, logout, addAddress, removeAddress, setDefaultAddress } = useAuth();
  const { orders } = useStore();
  const [activeTab, setActiveTab] = useState<ProfileTab>('overview');
  const [showAddAddress, setShowAddAddress] = useState(false);

  // Address form
  const [addrLabel, setAddrLabel] = useState('Home');
  const [addrName, setAddrName] = useState('');
  const [addrPhone, setAddrPhone] = useState('');
  const [addrLine, setAddrLine] = useState('');
  const [addrCity, setAddrCity] = useState('');
  const [addrPin, setAddrPin] = useState('');

  if (!currentUser) return null;

  // Orders belonging to this user
  const myOrders = orders.filter(o => o.phone === currentUser.phone || o.userId === currentUser.id);

  const handleLogout = () => { logout(); onClose(); };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    addAddress({
      label: addrLabel,
      fullName: addrName || currentUser.name,
      phone: addrPhone || currentUser.phone,
      address: addrLine,
      city: addrCity || currentUser.city,
      pincode: addrPin,
      isDefault: currentUser.savedAddresses.length === 0,
    });
    setShowAddAddress(false);
    setAddrLine(''); setAddrPin('');
  };

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-700',
    confirmed: 'bg-blue-100 text-blue-700',
    dispatched: 'bg-purple-100 text-purple-700',
    delivered: 'bg-green-100 text-green-700',
    cancelled: 'bg-red-100 text-red-700',
  };

  const TABS: { key: ProfileTab; label: string; icon: React.ReactNode }[] = [
    { key: 'overview', label: 'Overview', icon: <User className="w-3.5 h-3.5" /> },
    { key: 'orders', label: `Orders (${myOrders.length})`, icon: <Package className="w-3.5 h-3.5" /> },
    { key: 'addresses', label: 'Addresses', icon: <MapPin className="w-3.5 h-3.5" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="bg-[#111] px-5 pt-5 pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#F5B301] flex items-center justify-center text-black font-black text-lg">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-black text-base">{currentUser.name}</p>
                    <p className="text-zinc-400 text-[11px]">+91 {currentUser.phone} · {currentUser.city}</p>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <X className="w-5 h-5 text-zinc-400" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mt-3 overflow-x-auto no-scrollbar">
                {TABS.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all ${
                      activeTab === tab.key ? 'bg-[#F5B301] text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">

              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    {[
                      { label: 'Total Orders', value: myOrders.length },
                      { label: 'Saved Addresses', value: currentUser.savedAddresses.length },
                    ].map(stat => (
                      <div key={stat.label} className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100">
                        <p className="text-2xl font-black text-[#111]">{stat.value}</p>
                        <p className="text-[11px] text-zinc-500 font-semibold mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent Orders */}
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-zinc-400 mb-3">Recent Orders</h3>
                    {myOrders.length === 0 ? (
                      <div className="text-center py-6 text-zinc-400 text-sm">No orders yet. Start shopping!</div>
                    ) : (
                      <div className="space-y-2">
                        {myOrders.slice(0, 3).map(order => (
                          <div key={order.id} className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 border border-zinc-100">
                            <div>
                              <p className="text-xs font-bold text-[#111]">#{order.id}</p>
                              <p className="text-[10px] text-zinc-400">{order.createdAt}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-black text-[#111]">{formatINR(order.totalAmount)}</p>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${statusColors[order.status] || 'bg-zinc-100 text-zinc-600'}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                        ))}
                        {myOrders.length > 3 && (
                          <button
                            onClick={() => setActiveTab('orders')}
                            className="w-full text-center text-xs text-[#111] font-bold py-2 hover:text-[#F5B301] transition-colors flex items-center justify-center gap-1"
                          >
                            View all {myOrders.length} orders <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-red-200 text-red-600 font-bold text-sm hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="p-5">
                  {myOrders.length === 0 ? (
                    <div className="text-center py-12">
                      <Package className="w-12 h-12 text-zinc-200 mx-auto mb-3" />
                      <p className="text-zinc-400 text-sm">No orders yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {myOrders.map(order => (
                        <div key={order.id} className="rounded-xl border border-zinc-100 overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-3 bg-zinc-50 border-b border-zinc-100">
                            <div>
                              <p className="text-xs font-black text-[#111]">#{order.id}</p>
                              <p className="text-[10px] text-zinc-400">{order.createdAt} · {order.paymentMethod.toUpperCase()}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-black text-[#111]">{formatINR(order.totalAmount)}</p>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${statusColors[order.status] || ''}`}>
                                {order.status}
                              </span>
                            </div>
                          </div>
                          <div className="px-4 py-3 space-y-2">
                            {order.items.map((item, i) => (
                              <div key={i} className="flex items-center gap-3 text-xs">
                                <img src={item.product.imageUrl} alt={item.product.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-[#111] line-clamp-1">{item.product.name}</p>
                                  <p className="text-zinc-400">Size: {item.selectedSize} · Qty: {item.quantity}</p>
                                </div>
                                <p className="font-black text-[#111]">{formatINR(item.product.price * item.quantity)}</p>
                              </div>
                            ))}
                          </div>
                          <div className="px-4 pb-3 flex gap-2">
                            <a
                              href={`https://wa.me/919848988295?text=${encodeURIComponent(`Hi! I want to track my order #${order.id}`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center py-2 rounded-lg bg-[#25D366]/10 text-[#25D366] font-bold text-xs hover:bg-[#25D366] hover:text-white transition-all"
                            >
                              Track via WhatsApp
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div className="p-5 space-y-3">
                  {currentUser.savedAddresses.map(addr => (
                    <div key={addr.id} className={`p-4 rounded-xl border-2 transition-all ${addr.isDefault ? 'border-[#111] bg-zinc-50' : 'border-zinc-100'}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2 mb-2">
                          {addr.label === 'Home' ? <Home className="w-4 h-4 text-[#111]" /> : <Briefcase className="w-4 h-4 text-[#111]" />}
                          <span className="text-xs font-black text-[#111]">{addr.label}</span>
                          {addr.isDefault && <span className="px-2 py-0.5 rounded-full bg-[#111] text-white text-[9px] font-black">DEFAULT</span>}
                        </div>
                        <div className="flex items-center gap-1.5">
                          {!addr.isDefault && (
                            <button onClick={() => setDefaultAddress(addr.id)} className="text-[10px] text-zinc-500 hover:text-[#111] transition-colors">Set Default</button>
                          )}
                          <button onClick={() => removeAddress(addr.id)} className="p-1 rounded hover:bg-red-50 transition-colors">
                            <Trash2 className="w-3.5 h-3.5 text-zinc-400 hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-[#111]">{addr.fullName}</p>
                      <p className="text-xs text-zinc-500">{addr.address}, {addr.city} - {addr.pincode}</p>
                      <p className="text-xs text-zinc-500">📞 {addr.phone}</p>
                    </div>
                  ))}

                  {!showAddAddress ? (
                    <button
                      onClick={() => setShowAddAddress(true)}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-zinc-200 text-zinc-500 font-bold text-sm hover:border-[#111] hover:text-[#111] transition-all"
                    >
                      <Plus className="w-4 h-4" /> Add New Address
                    </button>
                  ) : (
                    <form onSubmit={handleAddAddress} className="p-4 rounded-xl border-2 border-[#111] space-y-3">
                      <p className="text-sm font-black text-[#111]">New Address</p>
                      <div className="flex gap-2">
                        {['Home', 'Work', 'Other'].map(l => (
                          <button key={l} type="button"
                            onClick={() => setAddrLabel(l)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${addrLabel === l ? 'bg-[#111] text-white' : 'bg-zinc-100 text-zinc-600'}`}
                          >{l}</button>
                        ))}
                      </div>
                      {[
                        { label: 'Full Name', value: addrName, set: setAddrName, placeholder: currentUser.name },
                        { label: 'Phone', value: addrPhone, set: setAddrPhone, placeholder: currentUser.phone },
                        { label: 'Address Line', value: addrLine, set: setAddrLine, placeholder: 'House no., Street...', required: true },
                        { label: 'City', value: addrCity, set: setAddrCity, placeholder: currentUser.city },
                        { label: 'Pincode', value: addrPin, set: setAddrPin, placeholder: '515411' },
                      ].map(f => (
                        <input key={f.label}
                          type="text"
                          value={f.value}
                          onChange={e => f.set(e.target.value)}
                          placeholder={f.placeholder}
                          required={f.required}
                          className="w-full px-3 py-2.5 rounded-xl border border-zinc-200 text-sm text-[#111] outline-none focus:border-[#111] transition-colors"
                        />
                      ))}
                      <div className="flex gap-2">
                        <button type="submit" className="flex-1 py-2.5 rounded-xl bg-[#111] text-white font-bold text-sm hover:bg-[#F5B301] hover:text-black transition-all flex items-center justify-center gap-2">
                          <Check className="w-4 h-4" /> Save Address
                        </button>
                        <button type="button" onClick={() => setShowAddAddress(false)} className="px-4 py-2.5 rounded-xl border border-zinc-200 text-sm text-zinc-600 font-bold hover:bg-zinc-50 transition-all">
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
