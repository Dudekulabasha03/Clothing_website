import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const DICTIONARY: Record<Language, Record<string, string>> = {
  en: {
    brand_title: 'DIL GARMENTS',
    tagline: 'Gents, Ladies & Kids Wear — Tadipatri',
    nav_men: 'Men',
    nav_women: 'Women',
    nav_kids: 'Kids',
    nav_baggy_shirts: 'Baggy Shirts @ ₹400',
    nav_baggy_pants: 'Baggy Pants @ ₹400',
    nav_flat_400: 'Flat ₹400 Deals',
    nav_latest: 'Latest Collection',
    nav_track: 'Track Order',
    nav_login: 'Login',
    hero_badge: 'UNFILTERED STREETWEAR',
    hero_offer: 'FLAT ₹400 OFFER DROPS',
    shop_now: 'Shop Now',
    explore_men: 'Men Collection',
    explore_women: 'Women Collection',
    explore_kids: 'Kids Collection',
    curated_catalog: 'Curated Apparel Catalog',
    showing_styles: 'Showing styles available in Tadipatri',
    filter_by_size: 'Filter by Size:',
    filter_by_price: 'Filter by Budget:',
    price_under_400: 'Under ₹400',
    price_400_750: '₹400 – ₹750',
    price_750_plus: '₹750+',
    add_to_bag: 'Add to Bag',
    added_to_bag: 'Added to Bag!',
    view_details: 'View Details',
    size_guide: 'Size Guide',
    share_whatsapp: 'Share on WhatsApp',
    complete_combo: 'COMPLETE THE FIT COMBO',
    combo_savings: 'Save ₹50 extra on Shirt + Pants combo!',
    in_stock: 'In Stock',
    out_of_stock: 'Out of Stock',
    store_location: 'Opp. Markandeya Swamy Temple, C.B. Road, Tadipatri',
  },
  te: {
    brand_title: 'దిల్ గార్మెంట్స్',
    tagline: 'జెంట్స్, లేడీస్ & కిడ్స్ వేర్ — తాడిపత్రి',
    nav_men: 'పురుషులు (Men)',
    nav_women: 'మహిళలు (Women)',
    nav_kids: 'పిల్లలు (Kids)',
    nav_baggy_shirts: 'బాగీ షర్టులు @ ₹400',
    nav_baggy_pants: 'బాగీ ప్యాంట్లు @ ₹400',
    nav_flat_400: 'ఫ్లాట్ ₹400 ఆఫర్స్',
    nav_latest: 'తాజా కలెక్షన్',
    nav_track: 'ఆర్డర్ ట్రాక్',
    nav_login: 'లాగిన్',
    hero_badge: 'తాజా స్ట్రీట్‌వేర్ కలెక్షన్',
    hero_offer: 'ఫ్లాట్ ₹400 స్పెషల్ ఆఫర్స్',
    shop_now: 'ఇప్పుడే కొనండి',
    explore_men: 'పురుషుల దుస్తులు',
    explore_women: 'మహిళల కలెక్షన్',
    explore_kids: 'పిల్లల కలెక్షన్',
    curated_catalog: 'ప్రత్యేక దుస్తుల కేటలాగ్',
    showing_styles: 'తాడిపత్రి స్టోర్‌లో అందుబాటులో ఉన్న డిజైన్లు',
    filter_by_size: 'సైజు ఎంచుకోండి:',
    filter_by_price: 'బడ్జెట్ ఎంచుకోండి:',
    price_under_400: '₹400 లోపు',
    price_400_750: '₹400 – ₹750',
    price_750_plus: '₹750 పైన',
    add_to_bag: 'బ్యాగ్‌లో వేయి',
    added_to_bag: 'బ్యాగ్‌లో చేరింది!',
    view_details: 'వివరాలు చూడండి',
    size_guide: 'సైజు గైడ్',
    share_whatsapp: 'వాట్సాప్‌లో షేర్ చేయండి',
    complete_combo: 'కంప్లీట్ ఫిట్ కాంబో డీల్',
    combo_savings: 'షర్ట్ + ప్యాంట్ కలిపి కొంటే ₹50 ఆదా!',
    in_stock: 'స్టాక్ ఉంది',
    out_of_stock: 'స్టాక్ అయిపోయింది',
    store_location: 'శ్రీ మార్కండేయ స్వామి దేవాలయం ఎదురుగా, సి.బి. రోడ్, తాడిపత్రి',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('dg_lang');
      if (saved === 'te' || saved === 'en') return saved;
    } catch {}
    return 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('dg_lang', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'te' : 'en');
  };

  const t = (key: string): string => {
    return DICTIONARY[lang][key] || DICTIONARY['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
