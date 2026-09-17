import { Product, StoreInfo, Order } from '../types';

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

export const INITIAL_PRODUCTS: Product[] = [
  {
    "id": "dg-bs-001",
    "name": "Oversized Boxy Checked Flannel Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 15,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.6,
    "reviewsCount": 30,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-002",
    "name": "Vintage Faded Corduroy Drop-Shoulder Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 16,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.7,
    "reviewsCount": 34,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-003",
    "name": "Korean Minimalist Drape Boxy Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 17,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 38,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-004",
    "name": "Heavy Heavyweight Checked Street Flannel",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 18,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.9,
    "reviewsCount": 42,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-005",
    "name": "Acid Wash Denim Oversized Workshirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 19,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.6,
    "reviewsCount": 46,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-006",
    "name": "Cuban Camp Collar Geometric Baggy Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 20,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.7,
    "reviewsCount": 50,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-007",
    "name": "Raw Hem Drop-Shoulder Plaid Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 21,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 54,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-008",
    "name": "AXIS Heavy Diamond Athletic Mesh Jersey",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 22,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.9,
    "reviewsCount": 58,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-009",
    "name": "Monochrome Oversized Flannel Overshirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 23,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.6,
    "reviewsCount": 62,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-010",
    "name": "Chalk White Heavy Cotton Boxy Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 24,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.7,
    "reviewsCount": 66,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-011",
    "name": "Shadow Plaid Relaxed Streetwear Flannel",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 25,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 70,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-012",
    "name": "Olive Drab Utility Multi-Pocket Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 599,
    "originalPrice": 1557,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 26,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.9,
    "reviewsCount": 74,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-013",
    "name": "Midnight Black Linen-Cotton Baggy Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 27,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.6,
    "reviewsCount": 78,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-014",
    "name": "Burgundy Tartan Oversized Flannel",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 499,
    "originalPrice": 1297,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 28,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.7,
    "reviewsCount": 82,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-015",
    "name": "Cobalt Blue Drop-Shoulder Casual Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 29,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 86,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-016",
    "name": "Washed Grey Chambray Loose Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 599,
    "originalPrice": 1557,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 30,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.9,
    "reviewsCount": 90,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-017",
    "name": "Retro Bowling Camp Collar Street Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 31,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.6,
    "reviewsCount": 94,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-018",
    "name": "Vintage Buffalo Check Oversized Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 499,
    "originalPrice": 1297,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 32,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.7,
    "reviewsCount": 98,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-019",
    "name": "Sage Green Breathable Twill Baggy Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 33,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 102,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-020",
    "name": "Houndstooth Oversized Double Pocket Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 599,
    "originalPrice": 1557,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 34,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.9,
    "reviewsCount": 106,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-021",
    "name": "Textured Waffle Drop-Shoulder Overshirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 35,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.6,
    "reviewsCount": 110,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-022",
    "name": "Slate Blue Heavy Flannel Shacket",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 499,
    "originalPrice": 1297,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 36,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.7,
    "reviewsCount": 114,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-023",
    "name": "Mustard Ochre Boxy Fit Street Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 37,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 118,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-024",
    "name": "Charcoal Windowpane Checked Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 599,
    "originalPrice": 1557,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 38,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.9,
    "reviewsCount": 122,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-025",
    "name": "Espresso Brown Brushed Twill Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 39,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.6,
    "reviewsCount": 126,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-026",
    "name": "Teal Gradient Oversized Casual Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 499,
    "originalPrice": 1297,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 15,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.7,
    "reviewsCount": 130,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-027",
    "name": "Beige Safari Cargo Overshirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 16,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 134,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-028",
    "name": "Dark Spruce Plaid Drop-Shoulder Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 599,
    "originalPrice": 1557,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 17,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.9,
    "reviewsCount": 138,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-029",
    "name": "Vintage Paisley Print Rayon Baggy Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 18,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.6,
    "reviewsCount": 142,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-030",
    "name": "Oxford Weave Relaxed Drop-Collar Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 499,
    "originalPrice": 1297,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 19,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.7,
    "reviewsCount": 146,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-031",
    "name": "Washed Khaki Heavyweight Flannel",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 20,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 150,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-032",
    "name": "Crimson Red Lumberjack Boxy Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 599,
    "originalPrice": 1557,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 21,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.9,
    "reviewsCount": 154,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-033",
    "name": "Pastel Peach Summer Baggy Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 22,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.6,
    "reviewsCount": 158,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bs-034",
    "name": "Steel Grey Micro-Stripe Oversized Shirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 499,
    "originalPrice": 1297,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 23,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.7,
    "reviewsCount": 162,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bs-035",
    "name": "Raw Indigo Heavy Denim Overshirt",
    "subtitle": "Drop-shoulder boxy streetwear cut",
    "category": "baggy-shirts",
    "division": "men",
    "price": 400,
    "originalPrice": 1299,
    "discountPercentage": 69,
    "imageUrl": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      {
        "name": "Signature Shade",
        "hex": "#1e3a2b"
      },
      {
        "name": "Shadow Black",
        "hex": "#0f172a"
      }
    ],
    "inStock": true,
    "stockCount": 24,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 166,
    "description": "Crafted from heavyweight breathable fabric with an authentic oversized boxy cut. Engineered for Indian streetwear enthusiasts by DIL Garments, Tadipatri.",
    "features": [
      "100% Breathable Brushed Cotton Twill",
      "Signature dropped shoulders",
      "Pre-shrunk fabric",
      "Machine washable"
    ],
    "fabric": "100% Combed Cotton / Flannel",
    "fit": "Oversized Boxy Street Fit",
    "care": "Cold machine wash inside out",
    "tags": [
      "baggy-shirts",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-001",
    "name": "Korean Double-Pleat Wide Leg Baggy Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 12,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.7,
    "reviewsCount": 45,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-002",
    "name": "Crinkle Nylon Parachute Track Pants with Lime Piping",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 13,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 50,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-003",
    "name": "Tactical Multi-Pocket Parachute Cargo Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 14,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.9,
    "reviewsCount": 55,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-004",
    "name": "Pleated Drape Baggy Trousers in Midnight Black",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 15,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.7,
    "reviewsCount": 60,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-005",
    "name": "Wide-Leg Relaxed Fit Linen-Blend Trousers",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 16,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 65,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-006",
    "name": "High-Waist Balloon Silhouette Chino Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 17,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": true,
    "rating": 4.9,
    "reviewsCount": 70,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-007",
    "name": "Vintage Washed Loose Skater Denim Jeans",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 18,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.7,
    "reviewsCount": 75,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-008",
    "name": "Cargo Joggers with Adjustable Toggle Ankle Hem",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 19,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 80,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-009",
    "name": "Raw Edge Double Knee Wide Baggy Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 20,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.9,
    "reviewsCount": 85,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-010",
    "name": "Charcoal Ash Korean Pleat Drape Trousers",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 599,
    "originalPrice": 1677,
    "discountPercentage": 64,
    "imageUrl": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 21,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.7,
    "reviewsCount": 90,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bp-011",
    "name": "Sand Beige Minimalist Wide-Leg Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 22,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 95,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-012",
    "name": "Olive Drab Parachute Bungee Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 699,
    "originalPrice": 1957,
    "discountPercentage": 64,
    "imageUrl": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 23,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.9,
    "reviewsCount": 100,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bp-013",
    "name": "Mocha Brown Heavyweight Cotton Baggy Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 24,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.7,
    "reviewsCount": 105,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-014",
    "name": "Slate Grey Elastic Waist Balloon Trousers",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 649,
    "originalPrice": 1817,
    "discountPercentage": 64,
    "imageUrl": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 25,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 110,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bp-015",
    "name": "Deep Navy Pleated Tailored Baggy Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 26,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.9,
    "reviewsCount": 115,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-016",
    "name": "Ripstop Techwear Cargo Baggy Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 599,
    "originalPrice": 1677,
    "discountPercentage": 64,
    "imageUrl": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 27,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.7,
    "reviewsCount": 120,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bp-017",
    "name": "Relaxed Fit Heavy Corduroy Baggy Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 28,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 125,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-018",
    "name": "Washed Black Streetwear Carpenter Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 699,
    "originalPrice": 1957,
    "discountPercentage": 64,
    "imageUrl": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 29,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.9,
    "reviewsCount": 130,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bp-019",
    "name": "Light Stone Wide Leg Summer Trousers",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 30,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.7,
    "reviewsCount": 135,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-020",
    "name": "Double Pleated Dark Chocolate Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 649,
    "originalPrice": 1817,
    "discountPercentage": 64,
    "imageUrl": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 31,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 140,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bp-021",
    "name": "Bungee Cinch Parachute Track Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 12,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.9,
    "reviewsCount": 145,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-022",
    "name": "Desert Khaki Relaxed Fit Cargoes",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 599,
    "originalPrice": 1677,
    "discountPercentage": 64,
    "imageUrl": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 13,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.7,
    "reviewsCount": 150,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bp-023",
    "name": "Ashen Grey Korean Drape Trousers",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 14,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.8,
    "reviewsCount": 155,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-bp-024",
    "name": "Vintage Raw Hem Wide Baggy Jeans",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 699,
    "originalPrice": 1957,
    "discountPercentage": 64,
    "imageUrl": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 15,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.9,
    "reviewsCount": 160,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "",
      "men"
    ]
  },
  {
    "id": "dg-bp-025",
    "name": "Graphite Black Fluid Drape Pants",
    "subtitle": "Wide balloon leg drape with elastic comfort waistband",
    "category": "baggy-pants",
    "division": "men",
    "price": 400,
    "originalPrice": 1799,
    "discountPercentage": 78,
    "imageUrl": "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#0a0a0a"
      },
      {
        "name": "Charcoal Ash",
        "hex": "#374151"
      }
    ],
    "inStock": true,
    "stockCount": 16,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": true,
    "rating": 4.7,
    "reviewsCount": 165,
    "description": "Authentic Seoul streetwear cut featuring double front pleats and wide balloon thigh drape. Perfect drape over sneakers and boots.",
    "features": [
      "Poly-Viscose drape with slight stretch",
      "Double front pleats for balloon volume",
      "Elastic back waist",
      "Deep slant pockets"
    ],
    "fabric": "Poly-Viscose Comfort Stretch Weave",
    "fit": "Korean Wide Baggy Leg",
    "care": "Machine wash cold with similar shades",
    "tags": [
      "baggy-pants",
      "flat-400",
      "men"
    ]
  },
  {
    "id": "dg-jk-001",
    "name": "Tech Quilted Bomber Jacket with Acid Accent",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 899,
    "originalPrice": 2158,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 8,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 38,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-jk-002",
    "name": "Featherweight Thermal Padded Windbreaker",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 999,
    "originalPrice": 2398,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 9,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 41,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-jk-003",
    "name": "Heavyweight 400 GSM Street Fleece Zip Hoodie",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 1099,
    "originalPrice": 2638,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 10,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 44,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-jk-004",
    "name": "Vintage Denim Sherpa-Lined Trucker Jacket",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 1199,
    "originalPrice": 2878,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 11,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 47,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-jk-005",
    "name": "Reflective Piping Techwear Windbreaker",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 899,
    "originalPrice": 2158,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 12,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 50,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-jk-006",
    "name": "Matte Black Minimalist Coach Jacket",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 999,
    "originalPrice": 2398,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 13,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 53,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-jk-007",
    "name": "Oversized Urban Pullover Hoodie with Thumbholes",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 1099,
    "originalPrice": 2638,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 14,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 56,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-jk-008",
    "name": "Varsity Letterman Wool-Blend Street Jacket",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 1199,
    "originalPrice": 2878,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 15,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 59,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-jk-009",
    "name": "Crinkle Nylon Waterproof Track Jacket",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 899,
    "originalPrice": 2158,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 16,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 62,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-jk-010",
    "name": "Colorblock Technical Après-Ski Jacket",
    "subtitle": "High-spec thermal shell with architectural cut",
    "category": "jackets",
    "division": "men",
    "price": 999,
    "originalPrice": 2398,
    "discountPercentage": 58,
    "imageUrl": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Matte Black",
        "hex": "#111827"
      }
    ],
    "inStock": true,
    "stockCount": 17,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.89,
    "reviewsCount": 65,
    "description": "Engineered for style and weather protection. Premium zippers, thermal insulation, and custom hardware by DIL Garments.",
    "features": [
      "Thermal insulation",
      "Deep security pockets",
      "Water-resistant coating"
    ],
    "fabric": "Technical Micro-Poly Shell",
    "fit": "Boxy Bomber Fit",
    "care": "Dry clean recommended",
    "tags": [
      "jackets",
      "men"
    ]
  },
  {
    "id": "dg-wm-001",
    "name": "Terracotta Rust Pleated Anarkali Maxi Gown",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 649,
    "originalPrice": 1687,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 14,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 50,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-002",
    "name": "Pure Chanderi Silk Embroidered Kurti Set",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 729,
    "originalPrice": 1895,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 15,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 56,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-003",
    "name": "Breezy Floral Wrap Midi Summer Dress",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 809,
    "originalPrice": 2103,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 16,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 5,
    "reviewsCount": 62,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-004",
    "name": "Emerald Bottle Green Metallic Buckle Gown",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 889,
    "originalPrice": 2311,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 17,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 68,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-005",
    "name": "Pastel Mint Georgette Tiered Anarkali Suit",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 969,
    "originalPrice": 2519,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 18,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 74,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-006",
    "name": "Mustard Zari Embroidered Silk Kurti & Pant Set",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 649,
    "originalPrice": 1687,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 19,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 5,
    "reviewsCount": 80,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-007",
    "name": "Midnight Blue Satin Slip Maxi Dress",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 729,
    "originalPrice": 1895,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 20,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 86,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-008",
    "name": "Rose Gold Shimmer Festive Gown",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 809,
    "originalPrice": 2103,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 21,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 92,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-009",
    "name": "Boho Chic Botanical Tiered Maxi Dress",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 889,
    "originalPrice": 2311,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 22,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 5,
    "reviewsCount": 98,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-010",
    "name": "Blush Pink Organza Resham Work Kurti",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 969,
    "originalPrice": 2519,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 23,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 104,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-011",
    "name": "Lavender Pleated Bib Long Flare Gown",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 649,
    "originalPrice": 1687,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 24,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 110,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-012",
    "name": "Wine Red Velvet Touch Festive Ensemble",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 729,
    "originalPrice": 1895,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 25,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 5,
    "reviewsCount": 116,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-013",
    "name": "Maroon Georgette Flared Anarkali with Belt",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 809,
    "originalPrice": 2103,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 26,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 122,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-014",
    "name": "Olive Green Button-Down Linen Midi Dress",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 889,
    "originalPrice": 2311,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 27,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 128,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-015",
    "name": "Sunflower Yellow Festive Mirror Work Kurti",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 969,
    "originalPrice": 2519,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 28,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 5,
    "reviewsCount": 134,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-016",
    "name": "Classic Black Tiered Cocktail Maxi Gown",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 649,
    "originalPrice": 1687,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 29,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 140,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-017",
    "name": "Dusty Rose Crepe Flared Party Dress",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 729,
    "originalPrice": 1895,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 14,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 146,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-018",
    "name": "Deep Plum Organza Dupatta Silk Set",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 809,
    "originalPrice": 2103,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 15,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 5,
    "reviewsCount": 152,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-019",
    "name": "Peacock Teal High-Flare Designer Gown",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "dresses",
    "division": "women",
    "price": 889,
    "originalPrice": 2311,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 16,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 158,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-wm-020",
    "name": "Ivory White & Gold Zari Anarkali Suit",
    "subtitle": "Embellished belt buckle with pleat detailing & fluid flare",
    "category": "kurtis",
    "division": "women",
    "price": 969,
    "originalPrice": 2519,
    "discountPercentage": 62,
    "imageUrl": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      {
        "name": "Festive Edition",
        "hex": "#9a3412"
      },
      {
        "name": "Royal Hue",
        "hex": "#065f46"
      }
    ],
    "inStock": true,
    "stockCount": 17,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.8,
    "reviewsCount": 164,
    "description": "Tailored to perfection with flowing silhouette and premium lining. Designed for festive celebrations, weddings, and special events.",
    "features": [
      "Heavy Georgette / Chanderi with crepe lining",
      "Statement belt or zari embroidery",
      "Full flared silhouette"
    ],
    "fabric": "Georgette / Chanderi Silk",
    "fit": "Fit & Flare Silhouette",
    "care": "Dry clean or delicate cold wash",
    "tags": [
      "dresses",
      "kurtis",
      "women"
    ]
  },
  {
    "id": "dg-kd-001",
    "name": "Junior Urban Streetwear Fleece Hoodie & Jogger Set",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 499,
    "originalPrice": 1248,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "3-4 Yrs",
      "5-6 Yrs",
      "7-8 Yrs",
      "9-10 Yrs",
      "11-12 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 15,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 40,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-002",
    "name": "Boys Vintage Faded Denim Trucker Jacket",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 559,
    "originalPrice": 1398,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "4-5 Yrs",
      "6-7 Yrs",
      "8-9 Yrs",
      "10-11 Yrs",
      "12-13 Yrs",
      "13-14 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 16,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 44,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-003",
    "name": "Girls Princess Tiered Ruffle Party Frock",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 619,
    "originalPrice": 1548,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "3-4 Yrs",
      "5-6 Yrs",
      "7-8 Yrs",
      "9-10 Yrs",
      "11-12 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 17,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 48,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-004",
    "name": "Boys Oversized Drop-Shoulder Graphic Street Set",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 679,
    "originalPrice": 1698,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "4-5 Yrs",
      "6-7 Yrs",
      "8-9 Yrs",
      "10-11 Yrs",
      "12-13 Yrs",
      "13-14 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 18,
    "isTrending": true,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": true,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 52,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-005",
    "name": "Girls Festive Shimmer Organza Party Gown",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 499,
    "originalPrice": 1248,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "3-4 Yrs",
      "5-6 Yrs",
      "7-8 Yrs",
      "9-10 Yrs",
      "11-12 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 19,
    "isTrending": true,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 56,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-006",
    "name": "Junior Multi-Pocket Camo Cargo Tracksuit",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 559,
    "originalPrice": 1398,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "4-5 Yrs",
      "6-7 Yrs",
      "8-9 Yrs",
      "10-11 Yrs",
      "12-13 Yrs",
      "13-14 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 20,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 60,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-007",
    "name": "Toddler Cotton Dungaree & Striped Tee Set",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 619,
    "originalPrice": 1548,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "3-4 Yrs",
      "5-6 Yrs",
      "7-8 Yrs",
      "9-10 Yrs",
      "11-12 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 21,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 64,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-008",
    "name": "Girls Floral Printed Cotton Twirl Dress",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 679,
    "originalPrice": 1698,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "4-5 Yrs",
      "6-7 Yrs",
      "8-9 Yrs",
      "10-11 Yrs",
      "12-13 Yrs",
      "13-14 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 22,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 68,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-009",
    "name": "Boys Varsity Bomber Jacket & Denim Combo",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 499,
    "originalPrice": 1248,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "3-4 Yrs",
      "5-6 Yrs",
      "7-8 Yrs",
      "9-10 Yrs",
      "11-12 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 23,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 72,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-010",
    "name": "Girls Pastel Unicorn Sparkle Party Frock",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 559,
    "originalPrice": 1398,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "4-5 Yrs",
      "6-7 Yrs",
      "8-9 Yrs",
      "10-11 Yrs",
      "12-13 Yrs",
      "13-14 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 24,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 76,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-011",
    "name": "Junior 240 GSM Streetwear Graphic Tee",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 619,
    "originalPrice": 1548,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "3-4 Yrs",
      "5-6 Yrs",
      "7-8 Yrs",
      "9-10 Yrs",
      "11-12 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 25,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 80,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-012",
    "name": "Boys Active Fleece Zip-Up Track Set",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 679,
    "originalPrice": 1698,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "4-5 Yrs",
      "6-7 Yrs",
      "8-9 Yrs",
      "10-11 Yrs",
      "12-13 Yrs",
      "13-14 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 26,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 84,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-013",
    "name": "Girls Festive Anarkali Kurta & Leggings",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 499,
    "originalPrice": 1248,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "3-4 Yrs",
      "5-6 Yrs",
      "7-8 Yrs",
      "9-10 Yrs",
      "11-12 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 27,
    "isTrending": false,
    "isOfferDrop": true,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 88,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-014",
    "name": "Boys Stonewashed Elastic Waist Denim Pants",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 559,
    "originalPrice": 1398,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "4-5 Yrs",
      "6-7 Yrs",
      "8-9 Yrs",
      "10-11 Yrs",
      "12-13 Yrs",
      "13-14 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 28,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": false,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 92,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  },
  {
    "id": "dg-kd-015",
    "name": "Girls Butterfly Embroidery Cotton Summer Dress",
    "subtitle": "Skin-friendly combed fabric with zero itch guarantee",
    "category": "kids-sets",
    "division": "kids",
    "price": 619,
    "originalPrice": 1548,
    "discountPercentage": 60,
    "imageUrl": "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=80"
    ],
    "sizes": [
      "3-4 Yrs",
      "5-6 Yrs",
      "7-8 Yrs",
      "9-10 Yrs",
      "11-12 Yrs"
    ],
    "colors": [
      {
        "name": "Youth Dynamic",
        "hex": "#1d4ed8"
      }
    ],
    "inStock": true,
    "stockCount": 29,
    "isTrending": false,
    "isOfferDrop": false,
    "isNewArrival": true,
    "isLatestCollection": false,
    "isFlat400Offer": false,
    "rating": 4.88,
    "reviewsCount": 96,
    "description": "Built tough for active kids and stylish celebrations. Combed cotton that is gentle on sensitive skin and color-safe wash after wash.",
    "features": [
      "100% Breathable cotton or soft fleece",
      "Elastic stretch waistbands",
      "Fade-resistant reactive colors"
    ],
    "fabric": "100% Combed Cotton / Soft Terry Fleece",
    "fit": "Comfort Kids Fit",
    "care": "Machine wash cold",
    "tags": [
      "kids-sets",
      "kids"
    ]
  }
];

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
