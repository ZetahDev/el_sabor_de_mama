// src/app/catalog/page.tsx
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Bakery Catalog",
  description: "Browse our delicious bakery products and order via WhatsApp.",
};

export default function CatalogPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-pink-700">
        Our Bakery Products
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
