import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function createWhatsAppOrderLink(
  phoneNumber: string,
  productName: string,
  price: number,
  size?: string,
  color?: string
): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const message = `Hello DIL Garments (Tadipatri)! 👋\n\nI want to order:\n🛍️ *${productName}*\n💰 Price: ₹${price}\n📏 Size: ${size || 'Standard'}\n🎨 Color: ${color || 'As Shown'}\n\nPlease confirm availability and payment details for delivery.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
