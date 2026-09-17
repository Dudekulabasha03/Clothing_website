-- PostgreSQL Database Schema for DIL Garments
-- Compatible with Supabase, AWS RDS PostgreSQL, or local Postgres

CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  email VARCHAR(255),
  city VARCHAR(100) DEFAULT 'Tadipatri',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS addresses (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  street TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  state VARCHAR(100) DEFAULT 'Andhra Pradesh',
  is_default BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  subtitle TEXT,
  division VARCHAR(50) NOT NULL, -- men, women, kids
  category VARCHAR(100) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  original_price NUMERIC(10, 2) NOT NULL,
  discount_percentage INT DEFAULT 0,
  image_url TEXT NOT NULL,
  gallery_images TEXT[] DEFAULT '{}',
  sizes TEXT[] NOT NULL,
  in_stock BOOLEAN DEFAULT TRUE,
  stock_count INT DEFAULT 20,
  is_trending BOOLEAN DEFAULT FALSE,
  is_flat_400_offer BOOLEAN DEFAULT FALSE,
  is_latest_collection BOOLEAN DEFAULT TRUE,
  rating NUMERIC(3, 1) DEFAULT 4.8,
  reviews_count INT DEFAULT 0,
  description TEXT,
  features TEXT[] DEFAULT '{}',
  fabric VARCHAR(100),
  fit VARCHAR(100),
  care VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id) ON DELETE SET NULL,
  customer_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  pincode VARCHAR(10) NOT NULL,
  delivery_type VARCHAR(50) DEFAULT 'home', -- 'home' or 'store_pickup'
  total_amount NUMERIC(10, 2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL, -- 'cod', 'upi_qr', 'razorpay'
  payment_status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'paid'
  razorpay_order_id VARCHAR(100),
  razorpay_payment_id VARCHAR(100),
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'confirmed', 'dispatched', 'delivered', 'cancelled'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id VARCHAR(64) REFERENCES orders(id) ON DELETE CASCADE,
  product_id VARCHAR(64) REFERENCES products(id) ON DELETE SET NULL,
  product_name VARCHAR(255) NOT NULL,
  selected_size VARCHAR(20) NOT NULL,
  selected_color VARCHAR(50),
  unit_price NUMERIC(10, 2) NOT NULL,
  quantity INT NOT NULL DEFAULT 1
);
