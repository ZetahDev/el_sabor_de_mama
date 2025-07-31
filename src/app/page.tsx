import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ZigZagProduct from "@/components/ZigZagProduct";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-50 px-4 py-16">
      <div className="flex flex-col items-center gap-8 max-w-2xl w-full">
        <Image
          src="/logo.png"
          alt="El Sabor de Mamá logo"
          width={180}
          height={180}
          className="rounded-full shadow-lg border-4 border-pink-200 bg-white"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-700 text-center drop-shadow-lg">
          Bienvenidos a El Sabor de Mamá
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-xl">
          Disfruta nuestros deliciosos postres y pasteles caseros, recién
          horneados cada día con amor y los mejores ingredientes en Cartago,
          Valle del Cauca. Explora nuestro catálogo y haz tu pedido por
          WhatsApp.
        </p>
        <Link
          href="/catalog"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors text-lg mt-4"
        >
          Ver productos
        </Link>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-16 flex flex-col gap-8">
        {products.slice(0, 5).map((product, idx) => (
          <ZigZagProduct
            key={product.id}
            product={product}
            reverse={idx % 2 === 1}
          />
        ))}
      </div>
    </main>
  );
}
