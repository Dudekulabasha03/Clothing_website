import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, Info } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

const MEN_SHIRTS = [
  { size: 'S', chest: '36–38"', shoulder: '16.5"', length: '28"', weight: '55–65 kg' },
  { size: 'M', chest: '38–40"', shoulder: '17"', length: '29"', weight: '65–75 kg' },
  { size: 'L', chest: '40–42"', shoulder: '17.5"', length: '30"', weight: '75–85 kg' },
  { size: 'XL', chest: '42–44"', shoulder: '18"', length: '30.5"', weight: '85–95 kg' },
  { size: 'XXL', chest: '44–46"', shoulder: '18.5"', length: '31"', weight: '95–110 kg' },
  { size: '3XL', chest: '46–48"', shoulder: '19"', length: '31.5"', weight: '110+ kg' },
];

const MEN_PANTS = [
  { size: '28', waist: '28"', hip: '36"', inseam: '30"', thigh: '22"' },
  { size: '30', waist: '30"', hip: '38"', inseam: '30"', thigh: '23"' },
  { size: '32', waist: '32"', hip: '40"', inseam: '31"', thigh: '24"' },
  { size: '34', waist: '34"', hip: '42"', inseam: '31"', thigh: '25"' },
  { size: '36', waist: '36"', hip: '44"', inseam: '32"', thigh: '26"' },
  { size: '38', waist: '38"', hip: '46"', inseam: '32"', thigh: '27"' },
];

const WOMEN_SIZES = [
  { size: 'S', bust: '34"', waist: '27"', hip: '36"', indian: 'Size 8' },
  { size: 'M', bust: '36"', waist: '29"', hip: '38"', indian: 'Size 10' },
  { size: 'L', bust: '38"', waist: '31"', hip: '40"', indian: 'Size 12' },
  { size: 'XL', bust: '40"', waist: '33"', hip: '42"', indian: 'Size 14' },
  { size: 'XXL', bust: '42"', waist: '35"', hip: '44"', indian: 'Size 16' },
];

const KIDS_SIZES = [
  { size: '3–4 Yrs', height: '98–104 cm', chest: '22"', waist: '21"' },
  { size: '5–6 Yrs', height: '110–116 cm', chest: '24"', waist: '22"' },
  { size: '7–8 Yrs', height: '122–128 cm', chest: '26"', waist: '23"' },
  { size: '9–10 Yrs', height: '134–140 cm', chest: '28"', waist: '24"' },
  { size: '11–12 Yrs', height: '146–152 cm', chest: '30"', waist: '25"' },
  { size: '13–14 Yrs', height: '158–164 cm', chest: '32"', waist: '26"' },
];

type TabKey = 'shirts' | 'pants' | 'women' | 'kids';

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose, category }) => {
  const defaultTab: TabKey = category === 'baggy-pants' ? 'pants'
    : category === 'dresses' || category === 'kurtis' ? 'women'
    : category === 'kids-sets' ? 'kids'
    : 'shirts';

  const [activeTab, setActiveTab] = React.useState<TabKey>(defaultTab);

  React.useEffect(() => {
    setActiveTab(defaultTab);
  }, [category, isOpen]);

  const TABS: { key: TabKey; label: string }[] = [
    { key: 'shirts', label: 'Men — Shirts & Tops' },
    { key: 'pants', label: 'Men — Pants' },
    { key: 'women', label: 'Women' },
    { key: 'kids', label: 'Kids' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[88vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#111] flex items-center justify-center">
                  <Ruler className="w-5 h-5 text-[#F5B301]" />
                </div>
                <div>
                  <h2 className="text-base font-black text-[#111]">DIL Garments Size Guide</h2>
                  <p className="text-[11px] text-zinc-400">All measurements in inches unless noted</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-6 pt-4 overflow-x-auto no-scrollbar">
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    activeTab === tab.key
                      ? 'bg-[#111] text-white'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tip */}
            <div className="mx-6 mt-3 flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
              <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-amber-800 leading-relaxed">
                <strong>Pro Tip:</strong> For baggy/oversized fits, choose your regular size for a street-style drop-shoulder look.
                If you prefer a slightly fitted baggy silhouette, size down by one.
                Unsure? WhatsApp us at <strong>9848988295</strong> — we'll help you pick!
              </p>
            </div>

            {/* Table */}
            <div className="overflow-auto flex-1 px-6 pb-6 mt-3">
              {activeTab === 'shirts' && (
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-zinc-100">
                      {['Size', 'Chest', 'Shoulder', 'Length', 'Body Weight'].map(h => (
                        <th key={h} className="text-left py-2.5 pr-4 text-[11px] font-black uppercase tracking-wider text-zinc-400">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MEN_SHIRTS.map((row, i) => (
                      <tr key={row.size} className={`border-b border-zinc-50 hover:bg-zinc-50 transition-colors ${i === 2 ? 'bg-amber-50' : ''}`}>
                        <td className="py-2.5 pr-4 font-black text-[#111]">
                          {row.size}
                          {i === 2 && <span className="ml-2 text-[9px] px-1.5 py-0.5 bg-amber-200 text-amber-800 rounded font-bold">POPULAR</span>}
                        </td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.chest}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.shoulder}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.length}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'pants' && (
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-zinc-100">
                      {['Size', 'Waist', 'Hip', 'Inseam', 'Thigh'].map(h => (
                        <th key={h} className="text-left py-2.5 pr-4 text-[11px] font-black uppercase tracking-wider text-zinc-400">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MEN_PANTS.map((row, i) => (
                      <tr key={row.size} className={`border-b border-zinc-50 hover:bg-zinc-50 transition-colors ${i === 2 ? 'bg-amber-50' : ''}`}>
                        <td className="py-2.5 pr-4 font-black text-[#111]">
                          {row.size}
                          {i === 2 && <span className="ml-2 text-[9px] px-1.5 py-0.5 bg-amber-200 text-amber-800 rounded font-bold">POPULAR</span>}
                        </td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.waist}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.hip}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.inseam}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.thigh}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'women' && (
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-zinc-100">
                      {['Size', 'Bust', 'Waist', 'Hip', 'Indian Equiv.'].map(h => (
                        <th key={h} className="text-left py-2.5 pr-4 text-[11px] font-black uppercase tracking-wider text-zinc-400">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {WOMEN_SIZES.map((row, i) => (
                      <tr key={row.size} className={`border-b border-zinc-50 hover:bg-zinc-50 transition-colors ${i === 1 ? 'bg-pink-50' : ''}`}>
                        <td className="py-2.5 pr-4 font-black text-[#111]">{row.size}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.bust}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.waist}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.hip}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.indian}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'kids' && (
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-zinc-100">
                      {['Age Size', 'Height', 'Chest', 'Waist'].map(h => (
                        <th key={h} className="text-left py-2.5 pr-4 text-[11px] font-black uppercase tracking-wider text-zinc-400">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {KIDS_SIZES.map((row) => (
                      <tr key={row.size} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                        <td className="py-2.5 pr-4 font-black text-[#111]">{row.size}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.height}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.chest}</td>
                        <td className="py-2.5 pr-4 text-zinc-600">{row.waist}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 pb-5 border-t border-zinc-100 pt-4 flex items-center justify-between gap-3">
              <p className="text-[11px] text-zinc-400">
                Still unsure? Message us — we measure every piece before dispatch.
              </p>
              <a
                href={`https://wa.me/919848988295?text=${encodeURIComponent('Hi! I need help with sizing for my order.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-white font-bold text-xs whitespace-nowrap hover:bg-green-600 transition-colors"
              >
                Ask on WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
