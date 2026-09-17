import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  MessageCircle, 
  Truck, 
  CreditCard, 
  Banknote, 
  QrCode,
  ShieldCheck,
  Copy,
  Check,
  Building2,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles,
  Printer,
  Download,
  FileText
} from 'lucide-react';
import { CartItem, Order } from '../types';
import { formatINR } from '../lib/utils';
import { STORE_INFO } from '../data/products';
import { useStore } from '../context/StoreContext';
import { useAuth } from '../context/AuthContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onClearCart
}) => {
  const { addOrder, applyCoupon } = useStore();
  const { currentUser } = useAuth();

  const [deliveryType, setDeliveryType] = useState<'home' | 'store_pickup'>('home');
  const [name, setName] = useState(currentUser?.name || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [address, setAddress] = useState(currentUser?.savedAddresses?.[0]?.address || '');
  const [city, setCity] = useState(currentUser?.city || 'Tadipatri');
  const [pincode, setPincode] = useState('515411');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi' | 'whatsapp'>('upi');
  const [upiRef, setUpiRef] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponFeedback, setCouponFeedback] = useState<{ valid: boolean; text: string } | null>(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = deliveryType === 'store_pickup' ? 0 : subtotal >= 999 ? 0 : 49;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput, subtotal);
    if (res.valid) {
      setAppliedCoupon(res.coupon?.code || couponInput);
      setDiscountAmount(res.discount);
      setCouponFeedback({ valid: true, text: res.message });
    } else {
      setCouponFeedback({ valid: false, text: res.message });
    }
  };

  const storeUpiId = '9848988295@ybl';
  const upiPayUrl = `upi://pay?pa=${storeUpiId}&pn=DIL%20Garments&am=${total}&cu=INR&tn=Order`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&data=${encodeURIComponent(upiPayUrl)}`;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(storeUpiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const generateReceiptHtml = (order: Order) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Receipt #${order.id} - DIL Garments</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 24px; color: #111; max-width: 480px; margin: 0 auto; background: #fff; }
    .header { text-align: center; border-bottom: 2px dashed #bbb; padding-bottom: 16px; margin-bottom: 16px; }
    .logo { font-size: 24px; font-weight: 900; letter-spacing: 1px; color: #111; }
    .sub { font-size: 11px; color: #555; margin-top: 3px; }
    .badge { display: inline-block; background: #111; color: #F5B301; padding: 4px 10px; border-radius: 9999px; font-weight: 900; font-size: 11px; margin-top: 8px; letter-spacing: 0.5px; }
    .meta { font-size: 12px; margin-bottom: 16px; line-height: 1.6; }
    .meta-row { display: flex; justify-content: space-between; margin-bottom: 4px; }
    .box { background: #fdf6e7; border: 1px solid #f9d88a; padding: 10px; border-radius: 8px; font-size: 11px; margin-top: 10px; color: #7c2d12; }
    table { width: 100%; border-collapse: collapse; font-size: 12px; margin: 16px 0; }
    th { text-align: left; border-bottom: 2px solid #111; padding: 6px 0; font-size: 11px; text-transform: uppercase; }
    td { padding: 8px 0; border-bottom: 1px dashed #ddd; }
    .total-section { border-top: 2px solid #111; padding-top: 10px; margin-top: 8px; }
    .total-row { display: flex; justify-content: space-between; font-size: 15px; font-weight: 900; }
    .footer { text-align: center; font-size: 10px; color: #777; margin-top: 24px; border-top: 1px dashed #ccc; padding-top: 12px; line-height: 1.5; }
    @media print { body { padding: 0; } }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">DIL GARMENTS</div>
    <div class="sub">D.No. 3/418, Opp. Markandeya Swamy Temple, C.B. Road, Tadipatri - 515411 (AP)</div>
    <div class="sub">Prop: N. Shaiksha Vali &bull; GSTIN: 37ELBPS4685D2ZQ</div>
    <div class="sub">Phone: 9848988295 / 8341312155</div>
    <div class="badge">${order.address.includes('STORE PICKUP') ? '🏬 TADIPATRI STORE PICKUP SLIP' : '🚚 ORDER RECEIPT / INVOICE'}</div>
  </div>
  <div class="meta">
    <div class="meta-row"><span><strong>Order ID:</strong> #${order.id}</span> <span><strong>Date:</strong> ${order.createdAt}</span></div>
    <div class="meta-row"><span><strong>Customer:</strong> ${order.customerName}</span> <span><strong>Phone:</strong> +91 ${order.phone}</span></div>
    <div class="meta-row"><span><strong>Payment Mode:</strong> ${order.paymentMethod.toUpperCase()}</span> <span><strong>Status:</strong> ${order.status.toUpperCase()}</span></div>
    ${order.address.includes('STORE PICKUP')
      ? `<div class="box"><strong>🏬 Store Pickup Note:</strong> Show this slip or Order ID #${order.id} at the DIL Garments counter. Your selected sizes are held reserved for 24 hours. Walk in, try in trial room, and pay!</div>`
      : `<div style="margin-top:6px;"><strong>Delivery To:</strong> ${order.address}, ${order.city} - ${order.pincode}</div>`}
  </div>
  <table>
    <thead>
      <tr>
        <th>Item Description</th>
        <th>Size</th>
        <th style="text-align:center;">Qty</th>
        <th style="text-align:right;">Price</th>
      </tr>
    </thead>
    <tbody>
      ${order.items.map(it => `
        <tr>
          <td><strong>${it.product.name}</strong><br><span style="font-size:10px;color:#666;">${it.product.fabric || '100% Cotton'}</span></td>
          <td>${it.selectedSize}</td>
          <td style="text-align:center;">${it.quantity}</td>
          <td style="text-align:right;">₹${it.product.price * it.quantity}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  <div class="total-section">
    <div class="total-row">
      <span>NET PAYABLE:</span>
      <span style="color:#d97706;">₹${order.totalAmount}</span>
    </div>
  </div>
  <div class="footer">
    <p>Thank you for choosing DIL Garments, Tadipatri!</p>
    <p>For questions or alterations, contact our Tadipatri store directly at 9848988295.</p>
  </div>
</body>
</html>`;
  };

  const handlePrintReceipt = (order: Order) => {
    const printWindow = window.open('', '_blank', 'width=650,height=750');
    if (!printWindow) return;
    printWindow.document.write(generateReceiptHtml(order));
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 250);
  };

  const handleDownloadReceipt = (order: Order) => {
    const htmlContent = generateReceiptHtml(order);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DIL_Garments_Receipt_${order.id}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    if (deliveryType === 'home' && !address) {
      alert("Please fill in your delivery address.");
      return;
    }

    const generatedId = `DG-${Math.floor(100000 + Math.random() * 900000)}`;

    const newOrder: Order = {
      id: generatedId,
      userId: currentUser?.id,
      customerName: name.trim(),
      phone: phone.trim(),
      address: deliveryType === 'store_pickup' ? '🏬 STORE PICKUP: Opp. Markandeya Swamy Temple, C.B. Road, Tadipatri' : address.trim(),
      city: deliveryType === 'store_pickup' ? 'Tadipatri' : city.trim(),
      pincode: deliveryType === 'store_pickup' ? '515411' : pincode.trim(),
      items: [...items],
      totalAmount: total,
      paymentMethod,
      status: 'pending',
      createdAt: new Date().toLocaleString('en-IN'),
    };

    // Save order in global store
    addOrder(newOrder);
    setPlacedOrder(newOrder);

    // Build WhatsApp Message
    const orderItemsSummary = items
      .map((it, idx) => `${idx + 1}. ${it.product.name} (Size: ${it.selectedSize}, Qty: ${it.quantity}) - ₹${it.product.price * it.quantity}`)
      .join('\n');

    const deliveryNote = deliveryType === 'store_pickup'
      ? `🏬 *DELIVERY:* STORE PICKUP AT TADIPATRI (Opp. Markandeya Swamy Temple, C.B. Road)`
      : `🚚 *DELIVERY ADDRESS:* ${address}, ${city} - ${pincode}`;

    const upiNote = paymentMethod === 'upi'
      ? `\n*UPI Ref / UTR:* ${upiRef || 'Will send screenshot'}`
      : '';

    const waMessage = `*NEW ORDER - DIL GARMENTS (TADIPATRI)*\n\n*Order ID:* #${generatedId}\n*Customer:* ${name}\n*Phone:* ${phone}\n${deliveryNote}\n\n*Items Ordered:*\n${orderItemsSummary}\n\n*Total Payable:* ₹${total} (${paymentMethod.toUpperCase()})${upiNote}\n\nPlease confirm my order!`;

    // Open WhatsApp confirmation for all orders or upi
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(waMessage)}`, '_blank');

    setOrderComplete(true);
    onClearCart();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-2xl z-10 my-6 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-[#111] text-white flex items-center justify-between">
            <div>
              <span className="text-[11px] font-black uppercase text-[#F5B301] tracking-wider">Fast Checkout</span>
              <h2 className="text-xl font-black">Complete Your Order</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!orderComplete ? (
            <form onSubmit={handlePlaceOrder} className="overflow-y-auto p-6 space-y-6 flex-1">

              {/* ── Feature 4: Delivery Method Toggle ── */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-zinc-400 block mb-2">
                  1. Choose Delivery Method
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('home')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3 ${
                      deliveryType === 'home'
                        ? 'border-[#111] bg-zinc-50'
                        : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${deliveryType === 'home' ? 'bg-[#111] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-[#111]">Home Delivery</div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">Dispatched to your address across AP & India</div>
                      <div className="text-[10px] font-bold text-green-600 mt-1">
                        {subtotal >= 999 ? 'FREE Delivery' : '+₹49 Standard'}
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDeliveryType('store_pickup')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-3 ${
                      deliveryType === 'store_pickup'
                        ? 'border-[#111] bg-amber-50/60'
                        : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${deliveryType === 'store_pickup' ? 'bg-[#111] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                      <Building2 className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-[#111] flex items-center gap-1.5">
                        <span>Store Pickup</span>
                        <span className="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 text-[9px] font-black">POPULAR</span>
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">Try on in Tadipatri Store, pay at counter</div>
                      <div className="text-[10px] font-black text-emerald-600 mt-1">FREE · Zero Delivery Charge</div>
                    </div>
                  </button>
                </div>

                {deliveryType === 'store_pickup' && (
                  <div className="mt-3 p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-amber-900">
                      <strong>Pickup Address:</strong> D.No. 3/418, Opp. Markandeya Swamy Temple, C.B. Road, Tadipatri - 515411.
                      <span className="block text-[11px] text-amber-700 mt-0.5">We will hold your selected sizes for 24 hours. Walk in, try in trial room &amp; pay!</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Customer Information ── */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-zinc-400 block mb-2">
                  2. Your Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-zinc-600 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Reddy"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-[#111] text-sm outline-none focus:border-[#111]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-zinc-600 block mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9848012345"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-[#111] text-sm outline-none focus:border-[#111]"
                    />
                  </div>
                </div>

                {deliveryType === 'home' && (
                  <div className="mt-3 space-y-3">
                    <div>
                      <label className="text-[11px] font-bold text-zinc-600 block mb-1">Delivery Address *</label>
                      <textarea
                        required
                        rows={2}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="House no., street, landmark..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-[#111] text-sm outline-none focus:border-[#111] resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-zinc-600 block mb-1">City / Town *</label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-[#111] text-sm outline-none focus:border-[#111]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-zinc-600 block mb-1">Pincode *</label>
                        <input
                          type="text"
                          required
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-[#111] text-sm outline-none focus:border-[#111]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Feature 1: Payment Method with Dynamic UPI QR Code ── */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-zinc-400 block mb-2">
                  3. Payment Method
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-blue-600 bg-blue-50/50'
                        : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <QrCode className="w-5 h-5 text-blue-600 mb-2" />
                    <div className="font-bold text-xs text-[#111]">Instant UPI / QR</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">PhonePe / GPay / Paytm</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#111] bg-zinc-50'
                        : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <Banknote className="w-5 h-5 text-[#F5B301] mb-2" />
                    <div className="font-bold text-xs text-[#111]">
                      {deliveryType === 'store_pickup' ? 'Pay at Store' : 'Cash on Delivery'}
                    </div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">
                      {deliveryType === 'store_pickup' ? 'Pay upon collection' : 'Pay when parcel arrives'}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('whatsapp')}
                    className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                      paymentMethod === 'whatsapp'
                        ? 'border-[#25D366] bg-green-50/50'
                        : 'border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366] mb-2" />
                    <div className="font-bold text-xs text-[#111]">WhatsApp Order</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Chat & Pay directly</div>
                  </button>
                </div>

                {/* ── Dynamic UPI QR Code Panel ── */}
                {paymentMethod === 'upi' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-5 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-5">
                      {/* Real Dynamic QR Code */}
                      <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-blue-100 flex-shrink-0">
                        <img
                          src={qrCodeUrl}
                          alt="DIL Garments UPI QR Code"
                          className="w-36 h-36 rounded-lg"
                        />
                        <p className="text-[10px] font-black text-center text-zinc-400 mt-1">SCAN WITH ANY APP</p>
                      </div>

                      {/* Payment Steps */}
                      <div className="space-y-2 text-xs flex-1">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center">1</span>
                          <span className="font-bold text-[#111]">Scan QR or pay to UPI ID:</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-blue-200">
                          <span className="font-mono font-bold text-sm text-[#111]">{storeUpiId}</span>
                          <button
                            type="button"
                            onClick={handleCopyUpi}
                            className="ml-auto text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                          >
                            {copiedUpi ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                            {copiedUpi ? 'Copied!' : 'Copy'}
                          </button>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[11px] flex items-center justify-center">2</span>
                          <span className="font-bold text-[#111]">Pay exact amount: <strong className="text-base text-blue-700">{formatINR(total)}</strong></span>
                        </div>

                        <div className="pt-2">
                          <label className="text-[11px] font-bold text-zinc-600 block mb-1">
                            3. Enter UPI Transaction / UTR No. (Optional):
                          </label>
                          <input
                            type="text"
                            value={upiRef}
                            onChange={(e) => setUpiRef(e.target.value)}
                            placeholder="e.g. 423456789012"
                            className="w-full px-3 py-2 rounded-xl bg-white border border-blue-200 text-xs outline-none focus:border-blue-600"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Quick Launch Buttons for Mobile */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-blue-200/60">
                      <span className="text-[11px] font-bold text-blue-900 mr-1">Open app:</span>
                      <a
                        href={upiPayUrl}
                        className="px-3 py-1.5 rounded-full bg-white text-blue-800 border border-blue-300 text-[11px] font-bold hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        PhonePe / GPay
                      </a>
                      <a
                        href={`paytmmp://pay?pa=${storeUpiId}&am=${total}`}
                        className="px-3 py-1.5 rounded-full bg-white text-blue-800 border border-blue-300 text-[11px] font-bold hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        Paytm
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* ── Coupon Code Box ── */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => { setCouponInput(e.target.value.toUpperCase()); setCouponFeedback(null); }}
                    placeholder="Coupon code (e.g. FLAT100, DIWALI20)"
                    className="flex-1 px-3 py-2 rounded-xl bg-white border border-amber-200 text-xs uppercase font-mono outline-none focus:border-[#111]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 rounded-xl bg-[#111] text-white font-bold text-xs hover:bg-[#F5B301] hover:text-black transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponFeedback && (
                  <p className={`text-[11px] font-bold ${couponFeedback.valid ? 'text-green-700' : 'text-red-600'}`}>
                    {couponFeedback.text}
                  </p>
                )}
              </div>

              {/* ── Order Summary Box ── */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs">
                <div className="flex justify-between text-zinc-600">
                  <span>Items ({items.length}):</span>
                  <span>{formatINR(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-700 font-bold">
                    <span>Coupon Discount ({appliedCoupon}):</span>
                    <span>- {formatINR(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-zinc-600">
                  <span>Delivery ({deliveryType === 'store_pickup' ? 'Store Pickup' : 'Home Delivery'}):</span>
                  <span>{shipping === 0 ? <strong className="text-green-600">FREE</strong> : formatINR(shipping)}</span>
                </div>
                <div className="pt-2 border-t border-zinc-200 flex justify-between items-baseline text-sm font-black text-[#111]">
                  <span>Total Payable:</span>
                  <span className="text-xl font-mono text-red-600">{formatINR(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#111] hover:bg-[#F5B301] hover:text-black text-white font-black text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Confirm &amp; Place Order ({formatINR(total)})</span>
                <ExternalLink className="w-4 h-4" />
              </button>

            </form>
          ) : (
            /* ── Order Placed Success View ── */
            <div className="p-8 text-center space-y-5 overflow-y-auto">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-bold">
                  Order ID: #{placedOrder?.id}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#111] mt-2">
                  THANK YOU, {name.toUpperCase()}!
                </h2>
                <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
                  {deliveryType === 'store_pickup'
                    ? 'Your clothes are reserved at DIL Garments, Tadipatri. Please collect within 24 hours.'
                    : 'Your order has been placed. We are preparing your parcel for prompt dispatch.'}
                </p>
              </div>

              {/* Order Slip Summary Card */}
              {placedOrder && (
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-left text-xs space-y-3 max-w-md mx-auto">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                    <span className="font-bold text-zinc-500 uppercase text-[10px]">Official Receipt</span>
                    <span className="font-mono font-bold text-emerald-600">CONFIRMED</span>
                  </div>

                  <div className="space-y-1.5">
                    {placedOrder.items.map((it, idx) => (
                      <div key={idx} className="flex justify-between text-[#111]">
                        <span className="truncate pr-2">{it.product.name} ({it.selectedSize}) × {it.quantity}</span>
                        <span className="font-mono font-bold shrink-0">{formatINR(it.product.price * it.quantity)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-zinc-200 flex justify-between font-black text-sm text-[#111]">
                    <span>Total Paid:</span>
                    <span className="font-mono text-emerald-600">{formatINR(placedOrder.totalAmount)}</span>
                  </div>

                  {/* 🧾 Feature 2: Download & Print Receipt Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => handleDownloadReceipt(placedOrder)}
                      className="py-2.5 px-3 rounded-xl bg-[#111] hover:bg-[#F5B301] hover:text-black text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Slip
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePrintReceipt(placedOrder)}
                      className="py-2.5 px-3 rounded-xl bg-white border border-zinc-300 hover:border-zinc-500 text-zinc-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Printer className="w-3.5 h-3.5" /> Print Receipt
                    </button>
                  </div>
                </div>
              )}

              {deliveryType === 'store_pickup' && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 space-y-1.5 max-w-md mx-auto">
                  <div className="font-bold flex items-center gap-1.5 text-amber-950">
                    <MapPin className="w-4 h-4 text-amber-700" />
                    Pickup Location:
                  </div>
                  <p>DIL Garments, D.No. 3/418, Opp. Markandeya Swamy Temple, C.B. Road, Tadipatri - 515411.</p>
                  <p className="text-[11px] text-zinc-500">📞 Call: 9848988295 / 8341312155</p>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi! I placed order #${placedOrder?.id}. Please verify status.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Message on WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-zinc-100 text-zinc-700 font-bold text-xs hover:bg-zinc-200 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
