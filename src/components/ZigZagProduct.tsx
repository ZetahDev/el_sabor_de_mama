// src/components/ZigZagProduct.tsx
"use client";
import Image from "next/image";
import { Product } from "@/lib/products";

interface ZigZagProductProps {
  product: Product;
  reverse?: boolean;
}

export default function ZigZagProduct({
  product,
  reverse,
}: ZigZagProductProps) {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 py-10`}
    >
      <div className="flex-1 flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-2xl shadow-lg object-cover w-full max-w-md h-72"
        />
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <h2 className="text-2xl font-bold text-pink-700">{product.name}</h2>
        <p className="text-gray-700 text-base">{product.description}</p>
        <span className="text-pink-600 font-bold text-lg">{product.price}</span>
        <a
          href={`https://wa.me/?text=Hola!%20Quiero%20pedir%20el%20producto:%20${encodeURIComponent(
            product.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full md:w-auto text-center"
          aria-label={`Pedir ${product.name} por WhatsApp`}
        >
          Pedir por WhatsApp
        </a>
      </div>
    </section>
  );
}
