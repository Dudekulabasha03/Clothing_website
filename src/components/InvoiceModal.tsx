import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, ShieldCheck, Phone, MapPin, Truck, Scissors } from 'lucide-react';
import { Order } from '../types';
import { formatINR } from '../lib/utils';
import { STORE_INFO } from '../data/products';

interface InvoiceModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({ order, isOpen, onClose }) => {
  if (!isOpen || !order) return null;

  const handlePrint = () => {
    window.print();
  };

  // 5% GST split: 2.5% CGST + 2.5% SGST on apparel
  const totalAmount = order.totalAmount;
  const taxableValue = Math.round((totalAmount / 1.05) * 100) / 100;
  const totalGst = Math.round((totalAmount - taxableValue) * 100) / 100;
  const halfGst = Math.round((totalGst / 2) * 100) / 100;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm print:p-0 print:bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[95vh] flex flex-col print:max-w-none print:m-0 print:shadow-none print:rounded-none print:max-h-none"
        >
          {/* Top Control Bar (Hidden when printed) */}
          <div className="px-6 py-3.5 bg-[#111] text-white flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">Official GST Tax Invoice &amp; Dispatch Slip</span>
              <span className="text-xs text-[#F5B301] font-mono font-bold">#{order.id}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-lg bg-[#F5B301] text-black font-black text-xs uppercase flex items-center gap-1.5 hover:bg-white transition-colors"
              >
                <Printer className="w-4 h-4" /> Print / Save PDF
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ── Printable Invoice Sheet ── */}
          <div className="p-6 sm:p-8 overflow-y-auto font-sans text-[#111] space-y-6 print:p-8 print:overflow-visible">

            {/* 1. Header: Brand & GST Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start pb-6 border-b-2 border-zinc-900 gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-[#111]">
                  DIL GARMENTS
                </h1>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mt-0.5">
                  Kidswear &amp; Gents Wear, Ladies Wear
                </p>
                <p className="text-[11px] text-zinc-600 mt-1 max-w-sm leading-relaxed">
                  {STORE_INFO.address.line1}, {STORE_INFO.address.line2}<br />
                  {STORE_INFO.address.town} - {STORE_INFO.address.pincode}, {STORE_INFO.address.district}, {STORE_INFO.address.state}
                </p>
                <p className="text-[11px] text-zinc-600 mt-1">
                  📞 Phone: +91 9848988295 / 8341312155
                </p>
              </div>

              <div className="sm:text-right space-y-1">
                <div className="inline-block px-3 py-1 rounded bg-zinc-100 font-mono font-bold text-xs uppercase">
                  TAX INVOICE
                </div>
                <p className="text-xs text-zinc-600">
                  Invoice No: <strong className="text-[#111]">INV-{order.id}</strong>
                </p>
                <p className="text-xs text-zinc-600">
                  Date: <strong className="text-[#111]">{order.createdAt}</strong>
                </p>
                <div className="pt-1 text-xs">
                  <span className="text-zinc-500">GSTIN: </span>
                  <strong className="font-mono text-[#111]">{STORE_INFO.gstin}</strong>
                </div>
                <div className="text-xs">
                  <span className="text-zinc-500">Proprietor: </span>
                  <strong className="text-[#111]">{STORE_INFO.proprietor}</strong>
                </div>
              </div>
            </div>

            {/* 2. Bill To / Ship To Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs">
              <div>
                <span className="font-black uppercase tracking-wider text-zinc-400 block mb-1">
                  CUSTOMER / BILL TO
                </span>
                <p className="font-bold text-sm text-[#111]">{order.customerName}</p>
                <p className="text-zinc-600">📞 Phone: +91 {order.phone}</p>
              </div>
              <div>
                <span className="font-black uppercase tracking-wider text-zinc-400 block mb-1">
                  DELIVERY / SHIP TO
                </span>
                <p className="text-zinc-800 leading-relaxed">{order.address}</p>
                <p className="text-zinc-600 mt-0.5">{order.city} - {order.pincode}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-zinc-200 text-[10px] font-bold uppercase">
                    Payment: {order.paymentMethod.toUpperCase()}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-[10px] font-bold uppercase">
                    Status: {order.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Items Table */}
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-y-2 border-zinc-900 bg-zinc-100">
                  <th className="py-2.5 px-3 font-black uppercase text-zinc-700">#</th>
                  <th className="py-2.5 px-3 font-black uppercase text-zinc-700">Item Description</th>
                  <th className="py-2.5 px-3 font-black uppercase text-zinc-700">Size</th>
                  <th className="py-2.5 px-3 font-black uppercase text-zinc-700 text-center">Qty</th>
                  <th className="py-2.5 px-3 font-black uppercase text-zinc-700 text-right">Unit Price</th>
                  <th className="py-2.5 px-3 font-black uppercase text-zinc-700 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, idx) => (
                  <tr key={idx} className="border-b border-zinc-200">
                    <td className="py-3 px-3 text-zinc-500">{idx + 1}</td>
                    <td className="py-3 px-3 font-bold text-[#111]">
                      {item.product.name}
                      <span className="block text-[10px] font-normal text-zinc-500">
                        HSN: 6205 · {item.product.fabric || '100% Cotton'}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono font-bold">{item.selectedSize}</td>
                    <td className="py-3 px-3 text-center font-bold">{item.quantity}</td>
                    <td className="py-3 px-3 text-right font-mono">{formatINR(item.product.price)}</td>
                    <td className="py-3 px-3 text-right font-mono font-bold">
                      {formatINR(item.product.price * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 4. Tax Calculation Breakdown */}
            <div className="flex justify-end">
              <div className="w-full sm:w-72 space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-600">
                  <span>Taxable Value:</span>
                  <span className="font-mono">{formatINR(taxableValue)}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>CGST (2.5%):</span>
                  <span className="font-mono">{formatINR(halfGst)}</span>
                </div>
                <div className="flex justify-between text-zinc-600">
                  <span>SGST (2.5%):</span>
                  <span className="font-mono">{formatINR(halfGst)}</span>
                </div>
                <div className="pt-2 border-t-2 border-zinc-900 flex justify-between text-sm font-black text-[#111]">
                  <span>Grand Total:</span>
                  <span className="text-base font-mono text-black">{formatINR(order.totalAmount)}</span>
                </div>
              </div>
            </div>

            {/* 5. Cut-Out Dispatch Shipping Label */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-zinc-300">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 mb-2">
                <Scissors className="w-3.5 h-3.5" />
                <span>CUT ALONG DOTTED LINE — AFFIX TO PARCEL</span>
              </div>

              <div className="p-4 rounded-xl border-2 border-zinc-900 bg-white space-y-3">
                <div className="flex justify-between items-start border-b border-zinc-200 pb-2">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">SHIPPER (FROM):</span>
                    <p className="font-black text-xs text-[#111]">DIL GARMENTS</p>
                    <p className="text-[10px] text-zinc-600">Opp. Markandeya Swamy Temple, C.B. Road, Tadipatri - 515411</p>
                    <p className="text-[10px] text-zinc-600">📞 +91 9848988295 · GSTIN: {STORE_INFO.gstin}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-1 rounded bg-[#111] text-white font-mono font-bold text-xs">
                      #{order.id}
                    </span>
                    <div className="text-[10px] font-mono mt-1 text-zinc-500">
                      |||||| |||| ||||| |||||||
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">DELIVER TO:</span>
                    <p className="font-black text-sm text-[#111]">{order.customerName}</p>
                    <p className="text-xs text-zinc-800 leading-tight mt-0.5">{order.address}</p>
                    <p className="text-xs font-bold text-[#111] mt-0.5">{order.city} - {order.pincode}</p>
                    <p className="text-xs font-bold text-zinc-700 mt-1">📞 Phone: +91 {order.phone}</p>
                  </div>
                  <div className="text-right flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">AMOUNT TO COLLECT:</span>
                      <p className="text-xl font-black font-mono text-red-600 mt-0.5">
                        {order.paymentMethod === 'cod' ? formatINR(order.totalAmount) : '₹0 (PREPAID)'}
                      </p>
                      <p className="text-[10px] font-bold text-zinc-500">
                        {order.paymentMethod.toUpperCase()}
                      </p>
                    </div>
                    <p className="text-[9px] text-zinc-400">Verified Dispatch from Tadipatri, AP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Signoff */}
            <div className="pt-4 border-t border-zinc-200 flex justify-between items-center text-[10px] text-zinc-400">
              <p>This is a computer generated invoice. No signature required.</p>
              <p>Thank you for choosing DIL Garments, Tadipatri!</p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
