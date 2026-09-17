import fs from 'fs';
import path from 'path';

// Curated high quality fashion images
const MENS_BAGGY_SHIRTS_IMAGES = [
  'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80'
];

const MENS_BAGGY_PANTS_IMAGES = [
  'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80'
];

const MENS_JACKETS_IMAGES = [
  'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80'
];

const WOMENS_IMAGES = [
  'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80'
];

const KIDS_IMAGES = [
  'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=80'
];

const products = [];

// 1. Men's Baggy Shirts (35 items, with many Flat ₹400 options!)
const shirtTitles = [
  "Oversized Boxy Checked Flannel Shirt",
  "Vintage Faded Corduroy Drop-Shoulder Shirt",
  "Korean Minimalist Drape Boxy Shirt",
  "Heavy Heavyweight Checked Street Flannel",
  "Acid Wash Denim Oversized Workshirt",
  "Cuban Camp Collar Geometric Baggy Shirt",
  "Raw Hem Drop-Shoulder Plaid Shirt",
  "AXIS Heavy Diamond Athletic Mesh Jersey",
  "Monochrome Oversized Flannel Overshirt",
  "Chalk White Heavy Cotton Boxy Shirt",
  "Shadow Plaid Relaxed Streetwear Flannel",
  "Olive Drab Utility Multi-Pocket Shirt",
  "Midnight Black Linen-Cotton Baggy Shirt",
  "Burgundy Tartan Oversized Flannel",
  "Cobalt Blue Drop-Shoulder Casual Shirt",
  "Washed Grey Chambray Loose Shirt",
  "Retro Bowling Camp Collar Street Shirt",
  "Vintage Buffalo Check Oversized Shirt",
  "Sage Green Breathable Twill Baggy Shirt",
  "Houndstooth Oversized Double Pocket Shirt",
  "Textured Waffle Drop-Shoulder Overshirt",
  "Slate Blue Heavy Flannel Shacket",
  "Mustard Ochre Boxy Fit Street Shirt",
  "Charcoal Windowpane Checked Shirt",
  "Espresso Brown Brushed Twill Shirt",
  "Teal Gradient Oversized Casual Shirt",
  "Beige Safari Cargo Overshirt",
  "Dark Spruce Plaid Drop-Shoulder Shirt",
  "Vintage Paisley Print Rayon Baggy Shirt",
  "Oxford Weave Relaxed Drop-Collar Shirt",
  "Washed Khaki Heavyweight Flannel",
  "Crimson Red Lumberjack Boxy Shirt",
  "Pastel Peach Summer Baggy Shirt",
  "Steel Grey Micro-Stripe Oversized Shirt",
  "Raw Indigo Heavy Denim Overshirt"
];

shirtTitles.forEach((title, idx) => {
  const is400 = idx % 2 === 0 || idx < 10;
  const price = is400 ? 400 : (449 + (idx % 4) * 50);
  const origPrice = is400 ? 1299 : (price * 2.6);
  const sizes = idx % 3 === 0 
    ? ["M", "L", "XL", "XXL"] 
    : idx % 3 === 1 
    ? ["S", "M", "L", "XL"] 
    : ["M", "L", "XL", "XXL", "3XL"];

  products.push({
    id: `dg-bs-${String(idx + 1).padStart(3, '0')}`,
    name: title,
    subtitle: "Drop-shoulder boxy streetwear cut",
    category: "baggy-shirts",
    division: "men",
    price,
    originalPrice: Math.round(origPrice),
    discountPercentage: Math.round(((origPrice - price) / origPrice) * 100),
    imageUrl: MENS_BAGGY_SHIRTS_IMAGES[idx % MENS_BAGGY_SHIRTS_IMAGES.length],
    galleryImages: [
      MENS_BAGGY_SHIRTS_IMAGES[idx % MENS_BAGGY_SHIRTS_IMAGES.length],
      MENS_BAGGY_SHIRTS_IMAGES[(idx + 1) % MENS_BAGGY_SHIRTS_IMAGES.length]
    ],
    sizes,
    colors: [
      { name: "Signature Shade", hex: "#1e3a2b" },
      { name: "Shadow Black", hex: "#0f172a" }
    ],
    inStock: true,
    stockCount: 15 + (idx % 25),
    isTrending: idx < 12,
    isOfferDrop: is400,
    isNewArrival: idx % 3 === 0,
    isLatestCollection: idx < 8,
    isFlat400Offer: is400,
    rating: Number((4.6 + (idx % 4) * 0.1).toFixed(1)),
    reviewsCount: 30 + idx * 4,
    description: `Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.`,
    features: ["100% Breathable Brushed Cotton Twill", "Signature dropped shoulders", "Pre-shrunk fabric", "Machine washable"],
    fabric: "100% Combed Cotton / Flannel",
    fit: "Oversized Boxy Street Fit",
    care: "Cold machine wash inside out",
    tags: ["baggy-shirts", is400 ? "flat-400" : "", "men"]
  });
});

// 2. Men's Baggy Pants & Trousers (25 items, with Flat ₹400 options!)
const pantTitles = [
  "Korean Double-Pleat Wide Leg Baggy Pants",
  "Crinkle Nylon Parachute Track Pants with Lime Piping",
  "Tactical Multi-Pocket Parachute Cargo Pants",
  "Pleated Drape Baggy Trousers in Midnight Black",
  "Wide-Leg Relaxed Fit Linen-Blend Trousers",
  "High-Waist Balloon Silhouette Chino Pants",
  "Vintage Washed Loose Skater Denim Jeans",
  "Cargo Joggers with Adjustable Toggle Ankle Hem",
  "Raw Edge Double Knee Wide Baggy Pants",
  "Charcoal Ash Korean Pleat Drape Trousers",
  "Sand Beige Minimalist Wide-Leg Pants",
  "Olive Drab Parachute Bungee Pants",
  "Mocha Brown Heavyweight Cotton Baggy Pants",
  "Slate Grey Elastic Waist Balloon Trousers",
  "Deep Navy Pleated Tailored Baggy Pants",
  "Ripstop Techwear Cargo Baggy Pants",
  "Relaxed Fit Heavy Corduroy Baggy Pants",
  "Washed Black Streetwear Carpenter Pants",
  "Light Stone Wide Leg Summer Trousers",
  "Double Pleated Dark Chocolate Pants",
  "Bungee Cinch Parachute Track Pants",
  "Desert Khaki Relaxed Fit Cargoes",
  "Ashen Grey Korean Drape Trousers",
  "Vintage Raw Hem Wide Baggy Jeans",
  "Graphite Black Fluid Drape Pants"
];

pantTitles.forEach((title, idx) => {
  const is400 = idx % 2 === 0 || idx < 8;
  const price = is400 ? 400 : (599 + (idx % 3) * 50);
  const origPrice = is400 ? 1799 : (price * 2.8);
  const sizes = idx % 2 === 0 ? ["28", "30", "32", "34", "36"] : ["30", "32", "34", "36", "38"];

  products.push({
    id: `dg-bp-${String(idx + 1).padStart(3, '0')}`,
    name: title,
    subtitle: "Wide balloon leg drape with elastic comfort waistband",
    category: "baggy-pants",
    division: "men",
    price,
    originalPrice: Math.round(origPrice),
    discountPercentage: Math.round(((origPrice - price) / origPrice) * 100),
    imageUrl: MENS_BAGGY_PANTS_IMAGES[idx % MENS_BAGGY_PANTS_IMAGES.length],
    galleryImages: [
      MENS_BAGGY_PANTS_IMAGES[idx % MENS_BAGGY_PANTS_IMAGES.length]
    ],
    sizes,
    colors: [
      { name: "Obsidian Black", hex: "#0a0a0a" },
      { name: "Charcoal Ash", hex: "#374151" }
    ],
    inStock: true,
    stockCount: 12 + (idx % 20),
    isTrending: idx < 10,
    isOfferDrop: is400,
    isNewArrival: idx % 2 === 0,
    isLatestCollection: idx < 6,
    isFlat400Offer: is400,
    rating: Number((4.7 + (idx % 3) * 0.1).toFixed(1)),
    reviewsCount: 45 + idx * 5,
    description: `Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.`,
    features: ["Poly-Viscose drape with slight stretch", "Double front pleats for balloon volume", "Elastic back waist", "Deep slant pockets"],
    fabric: "Poly-Viscose Comfort Stretch Weave",
    fit: "Korean Wide Baggy Leg",
    care: "Machine wash cold with similar shades",
    tags: ["baggy-pants", is400 ? "flat-400" : "", "men"]
  });
});

// 3. Men's Jackets & Hoodies (10 items)
const jacketTitles = [
  "Tech Quilted Bomber Jacket with Acid Accent",
  "Featherweight Thermal Padded Windbreaker",
  "Heavyweight 400 GSM Street Fleece Zip Hoodie",
  "Vintage Denim Sherpa-Lined Trucker Jacket",
  "Reflective Piping Techwear Windbreaker",
  "Matte Black Minimalist Coach Jacket",
  "Oversized Urban Pullover Hoodie with Thumbholes",
  "Varsity Letterman Wool-Blend Street Jacket",
  "Crinkle Nylon Waterproof Track Jacket",
  "Colorblock Technical Après-Ski Jacket"
];

jacketTitles.forEach((title, idx) => {
  const price = 899 + (idx % 4) * 100;
  const origPrice = price * 2.4;
  products.push({
    id: `dg-jk-${String(idx + 1).padStart(3, '0')}`,
    name: title,
    subtitle: "High-spec thermal shell with architectural cut",
    category: "jackets",
    division: "men",
    price,
    originalPrice: Math.round(origPrice),
    discountPercentage: Math.round(((origPrice - price) / origPrice) * 100),
    imageUrl: MENS_JACKETS_IMAGES[idx % MENS_JACKETS_IMAGES.length],
    galleryImages: [MENS_JACKETS_IMAGES[idx % MENS_JACKETS_IMAGES.length]],
    sizes: ["M", "L", "XL", "XXL"],
    colors: [{ name: "Matte Black", hex: "#111827" }],
    inStock: true,
    stockCount: 8 + (idx % 12),
    isTrending: idx < 4,
    isOfferDrop: false,
    isNewArrival: true,
    isLatestCollection: idx < 3,
    isFlat400Offer: false,
    rating: 4.89,
    reviewsCount: 38 + idx * 3,
    description: "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    features: ["Thermal insulation", "Deep security pockets", "Water-resistant coating"],
    fabric: "Technical Micro-Poly Shell",
    fit: "Boxy Bomber Fit",
    care: "Dry clean recommended",
    tags: ["jackets", "men"]
  });
});

// 4. Women's Designer Gowns, Dresses & Kurtis (20 items)
const womenTitles = [
  "Terracotta Rust Pleated Anarkali Maxi Gown",
  "Pure Chanderi Silk Embroidered Kurti Set",
  "Breezy Floral Wrap Midi Summer Dress",
  "Emerald Bottle Green Metallic Buckle Gown",
  "Pastel Mint Georgette Tiered Anarkali Suit",
  "Mustard Zari Embroidered Silk Kurti & Pant Set",
  "Midnight Blue Satin Slip Maxi Dress",
  "Rose Gold Shimmer Festive Gown",
  "Boho Chic Botanical Tiered Maxi Dress",
  "Blush Pink Organza Resham Work Kurti",
  "Lavender Pleated Bib Long Flare Gown",
  "Wine Red Velvet Touch Festive Ensemble",
  "Maroon Georgette Flared Anarkali with Belt",
  "Olive Green Button-Down Linen Midi Dress",
  "Sunflower Yellow Festive Mirror Work Kurti",
  "Classic Black Tiered Cocktail Maxi Gown",
  "Dusty Rose Crepe Flared Party Dress",
  "Deep Plum Organza Dupatta Silk Set",
  "Peacock Teal High-Flare Designer Gown",
  "Ivory White & Gold Zari Anarkali Suit"
];

womenTitles.forEach((title, idx) => {
  const price = 649 + (idx % 5) * 80;
  const origPrice = price * 2.6;
  const sizes = idx % 2 === 0 ? ["S", "M", "L", "XL", "XXL"] : ["M", "L", "XL", "XXL"];

  products.push({
    id: `dg-wm-${String(idx + 1).padStart(3, '0')}`,
    name: title,
    subtitle: "Embellished belt buckle with pleat detailing & fluid flare",
    category: idx % 2 === 0 ? "dresses" : "kurtis",
    division: "women",
    price,
    originalPrice: Math.round(origPrice),
    discountPercentage: Math.round(((origPrice - price) / origPrice) * 100),
    imageUrl: WOMENS_IMAGES[idx % WOMENS_IMAGES.length],
    galleryImages: [WOMENS_IMAGES[idx % WOMENS_IMAGES.length]],
    sizes,
    colors: [
      { name: "Festive Edition", hex: "#9a3412" },
      { name: "Royal Hue", hex: "#065f46" }
    ],
    inStock: true,
    stockCount: 14 + (idx % 16),
    isTrending: idx < 6,
    isOfferDrop: idx % 3 === 0,
    isNewArrival: idx % 2 === 0,
    isLatestCollection: idx < 5,
    isFlat400Offer: false,
    rating: Number((4.75 + (idx % 3) * 0.1).toFixed(1)),
    reviewsCount: 50 + idx * 6,
    description: "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    features: ["Heavy Georgette / Chanderi with crepe lining", "Statement belt or zari embroidery", "Full flared silhouette"],
    fabric: "Georgette / Chanderi Silk",
    fit: "Fit & Flare Silhouette",
    care: "Dry clean or delicate cold wash",
    tags: ["dresses", "kurtis", "women"]
  });
});

// 5. Kids' Wear: Boys Streetwear & Girls Frocks (15 items)
const kidsTitles = [
  "Junior Urban Streetwear Fleece Hoodie & Jogger Set",
  "Boys Vintage Faded Denim Trucker Jacket",
  "Girls Princess Tiered Ruffle Party Frock",
  "Boys Oversized Drop-Shoulder Graphic Street Set",
  "Girls Festive Shimmer Organza Party Gown",
  "Junior Multi-Pocket Camo Cargo Tracksuit",
  "Toddler Cotton Dungaree & Striped Tee Set",
  "Girls Floral Printed Cotton Twirl Dress",
  "Boys Varsity Bomber Jacket & Denim Combo",
  "Girls Pastel Unicorn Sparkle Party Frock",
  "Junior 240 GSM Streetwear Graphic Tee",
  "Boys Active Fleece Zip-Up Track Set",
  "Girls Festive Anarkali Kurta & Leggings",
  "Boys Stonewashed Elastic Waist Denim Pants",
  "Girls Butterfly Embroidery Cotton Summer Dress"
];

kidsTitles.forEach((title, idx) => {
  const price = 499 + (idx % 4) * 60;
  const origPrice = price * 2.5;
  const sizes = idx % 2 === 0 
    ? ["3-4 Yrs", "5-6 Yrs", "7-8 Yrs", "9-10 Yrs", "11-12 Yrs"]
    : ["4-5 Yrs", "6-7 Yrs", "8-9 Yrs", "10-11 Yrs", "12-13 Yrs", "13-14 Yrs"];

  products.push({
    id: `dg-kd-${String(idx + 1).padStart(3, '0')}`,
    name: title,
    subtitle: "Skin-friendly combed fabric with zero itch guarantee",
    category: "kids-sets",
    division: "kids",
    price,
    originalPrice: Math.round(origPrice),
    discountPercentage: Math.round(((origPrice - price) / origPrice) * 100),
    imageUrl: KIDS_IMAGES[idx % KIDS_IMAGES.length],
    galleryImages: [KIDS_IMAGES[idx % KIDS_IMAGES.length]],
    sizes,
    colors: [{ name: "Youth Dynamic", hex: "#1d4ed8" }],
    inStock: true,
    stockCount: 15 + (idx % 20),
    isTrending: idx < 5,
    isOfferDrop: idx % 3 === 0,
    isNewArrival: idx % 2 === 0,
    isLatestCollection: idx < 4,
    isFlat400Offer: false,
    rating: 4.88,
    reviewsCount: 40 + idx * 4,
    description: "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    features: ["100% Breathable cotton or soft fleece", "Elastic stretch waistbands", "Fade-resistant reactive colors"],
    fabric: "100% Combed Cotton / Soft Terry Fleece",
    fit: "Comfort Kids Fit",
    care: "Machine wash cold",
    tags: ["kids-sets", "kids"]
  });
});

console.log(`Generated total products: ${products.length}`);

// Output to products.ts
const content = `import { Product, StoreInfo, Order } from '../types';

export const STORE_INFO: StoreInfo = {
  name: "DIL Garments",
  tagline: "Trending Streetwear & Fashion — Men, Women & Kids",
  proprietor: "N. Shaiksha Vali",
  phones: ["9848988295", "8341312155"],
  gstin: "37ELBPS4685D2ZQ",
  address: {
    line1: "D.No. 3/418, Opp. Markandeya Swamy Temple",
    line2: "C.B. Road",
    town: "TADIPATRI",
    pincode: "515411",
    district: "Anantapur (Dist.)",
    state: "Andhra Pradesh"
  },
  mapsUrl: "https://maps.google.com/?q=Markandeya+Swamy+Temple+CB+Road+Tadipatri+515411",
  whatsappNumber: "919848988295"
};

export const INITIAL_PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};

export const INITIAL_ORDERS: Order[] = [
  {
    id: "DG-849201",
    customerName: "Karthik Reddy",
    phone: "9848012345",
    address: "D.No. 4/12, C.B. Road, Near Bus Stand",
    city: "Tadipatri",
    pincode: "515411",
    items: [
      {
        product: INITIAL_PRODUCTS[0],
        selectedSize: "L",
        selectedColor: "Signature Shade",
        quantity: 2
      },
      {
        product: INITIAL_PRODUCTS[35],
        selectedSize: "32",
        selectedColor: "Obsidian Black",
        quantity: 1
      }
    ],
    totalAmount: 1200,
    paymentMethod: "cod",
    status: "dispatched",
    createdAt: "Today, 11:30 AM"
  },
  {
    id: "DG-849189",
    customerName: "Sneha Varma",
    phone: "8341123456",
    address: "Plot 42, Sai Nagar",
    city: "Anantapur",
    pincode: "515001",
    items: [
      {
        product: INITIAL_PRODUCTS[70],
        selectedSize: "M",
        selectedColor: "Festive Edition",
        quantity: 1
      }
    ],
    totalAmount: 899,
    paymentMethod: "whatsapp",
    status: "confirmed",
    createdAt: "Today, 02:15 PM"
  }
];

export const TESTIMONIALS = [
  { id: 't-1', name: 'Ramesh Reddy', location: 'Tadipatri', rating: 5, comment: 'Best clothing store in Tadipatri! The ₹400 baggy pants and checked flannels quality is crazy good.', verified: true },
  { id: 't-2', name: 'Sneha Varma', location: 'Anantapur', rating: 5, comment: 'The Anarkali maxi gown stitch and flare is stunning. 24 hour fast delivery.', verified: true },
  { id: 't-3', name: 'Syed Imran', location: 'Guntakal', rating: 5, comment: 'Proper Korean baggy pants street fit. Flat ₹400 price is unbelievable.', verified: true }
];
`;

fs.writeFileSync(path.resolve('src/data/products.ts'), content, 'utf8');
console.log('Successfully wrote 105 products to src/data/products.ts!');
