import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Phone, User, MapPin, Star, Mail,
  LogIn, UserPlus, Eye, EyeOff, Sparkles, Gift
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Mode = 'choose' | 'phone_step' | 'otp_step' | 'register_details';

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { sendOtp, verifyOtp, currentUser, logout } = useAuth();
  const [mode, setMode] = useState<Mode>('phone_step');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtpHint, setGeneratedOtpHint] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [city, setCity] = useState('Tadipatri');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const reset = () => {
    setMode('phone_step');
    setPhone(''); setOtp(''); setName(''); setCity('Tadipatri'); setEmail('');
    setGeneratedOtpHint(null);
    setMessage(null);
  };

  const handleClose = () => { reset(); onClose(); };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setTimeout(() => {
      const res = sendOtp(phone);
      setLoading(false);
      if (res.success) {
        setGeneratedOtpHint(res.otp || null);
        setMode('otp_step');
        setMessage({ text: res.message, type: 'success' });
        setCountdown(30);
      } else {
        setMessage({ text: res.message, type: 'error' });
      }
    }, 500);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setTimeout(() => {
      const res = verifyOtp(phone, otp, { name, city, email });
      setLoading(false);
      if (res.success) {
        setMessage({ text: res.message, type: 'success' });
        setTimeout(handleClose, 1200);
      } else {
        setMessage({ text: res.message, type: 'error' });
      }
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="bg-[#111] px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-white font-black text-lg tracking-tight">
                  {mode === 'otp_step' ? 'Enter 6-Digit OTP' : 'Quick Phone Login'}
                </h2>
                <p className="text-zinc-400 text-[11px] mt-0.5">
                  {mode === 'otp_step' ? `Code sent to +91 ${phone}` : 'Enter mobile number for instant OTP verification'}
                </p>
              </div>
              <button onClick={handleClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            <div className="px-6 py-5">
              {/* STEP 1: Phone Input */}
              {mode === 'phone_step' && (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-zinc-700 block mb-1.5">Mobile / WhatsApp Number</label>
                    <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden focus-within:border-[#111] transition-colors">
                      <span className="px-3 py-3 bg-zinc-50 border-r border-zinc-200 text-sm font-bold text-zinc-600 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" /> +91
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="9848988295"
                        maxLength={10}
                        className="flex-1 px-3 py-3 text-sm text-[#111] outline-none bg-white font-mono"
                        required
                        autoFocus
                      />
                    </div>
                  </div>

                  {message && (
                    <div className={`text-xs p-3 rounded-xl font-semibold ${
                      message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {message.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || phone.length < 10}
                    className="w-full py-3.5 rounded-xl bg-[#111] text-white font-black text-sm hover:bg-[#F5B301] hover:text-black transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
                  >
                    {loading ? <span className="animate-spin">⟳</span> : <Sparkles className="w-4 h-4 text-[#F5B301]" />}
                    {loading ? 'Sending OTP...' : 'Get 6-Digit OTP'}
                  </button>

                  <div className="pt-2 text-center text-[11px] text-zinc-400 space-y-1">
                    <p>⚡ Instant SMS &amp; WhatsApp OTP delivery</p>
                    <p className="text-[10px] text-zinc-500">Tadipatri showroom order sync &amp; store pickup access</p>
                  </div>
                </form>
              )}

              {/* STEP 2: OTP Verification & Optional Details */}
              {mode === 'otp_step' && (
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-zinc-700">Enter 6-Digit Code</label>
                      <button
                        type="button"
                        onClick={() => { setMode('phone_step'); setMessage(null); }}
                        className="text-[11px] text-[#F5B301] font-bold hover:underline"
                      >
                        Change Number
                      </button>
                    </div>

                    <input
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="• • • • • •"
                      className="w-full py-3 px-4 text-center tracking-[0.5em] text-xl font-black font-mono border-2 border-zinc-200 rounded-xl focus:border-[#111] outline-none bg-zinc-50"
                      required
                      autoFocus
                    />

                    {generatedOtpHint && (
                      <div className="mt-2 p-2 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-800 flex items-center justify-between">
                        <span>Demo OTP: <strong>{generatedOtpHint}</strong></span>
                        <button
                          type="button"
                          onClick={() => setOtp(generatedOtpHint)}
                          className="font-bold underline text-amber-900"
                        >
                          Auto-fill
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Optional Quick Profile Name if first time */}
                  <div className="space-y-2 pt-1 border-t border-zinc-100">
                    <label className="text-[11px] font-bold text-zinc-500 block">Your Name (for delivery &amp; receipts)</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3 py-2 text-xs border border-zinc-200 rounded-lg outline-none focus:border-[#111]"
                    />
                  </div>

                  {message && (
                    <div className={`text-xs p-3 rounded-xl font-semibold ${
                      message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {message.text}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || otp.length < 6}
                    className="w-full py-3.5 rounded-xl bg-[#111] text-white font-black text-sm hover:bg-[#F5B301] hover:text-black transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
                  >
                    {loading ? <span className="animate-spin">⟳</span> : <LogIn className="w-4 h-4" />}
                    {loading ? 'Verifying...' : 'Verify & Log In'}
                  </button>

                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="text-xs text-zinc-500 hover:text-[#111] font-bold"
                    >
                      Didn't receive code? Resend OTP
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
