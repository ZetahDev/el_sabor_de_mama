// src/components/ProductCard.tsx
"use client";
import Image from "next/image";
import { Product } from "../lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/?text=I%20want%20to%20order%20the%20${encodeURIComponent(
    product.name
  )}`;
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-3 w-full max-w-xs">
      <Image
        src={product.image}
        alt={product.name}
        width={240}
        height={180}
        className="rounded-lg object-cover w-full h-40"
        priority={true}
      />
      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
      <p className="text-gray-600 text-sm text-center">{product.description}</p>
      <span className="text-pink-600 font-bold text-base">{product.price}</span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full text-center"
        aria-label={`Order ${product.name} on WhatsApp`}
      >
        Order via WhatsApp
      </a>
    </div>
  );
}
