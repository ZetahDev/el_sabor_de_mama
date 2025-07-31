// src/lib/products.ts
// Hardcoded bakery product data for the catalog

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Torta de Chocolate",
    description:
      "Torta húmeda de chocolate, cubierta con ganache cremoso. Un clásico irresistible.",
    image:
      "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=600&q=80", // Chocolate cake
    price: "$18.000",
  },
  {
    id: "2",
    name: "Croissant Artesanal",
    description:
      "Croissant hojaldrado y mantequilloso, recién horneado cada mañana.",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80", // Croissant
    price: "$3.000",
  },
  {
    id: "3",
    name: "Tarta de Fresas",
    description: "Base crocante rellena de crema pastelera y fresas frescas.",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80", // Strawberry tart
    price: "$5.000",
  },
  {
    id: "4",
    name: "Cheesecake de Maracuyá",
    description:
      "Cheesecake suave con cobertura de maracuyá natural, perfecto para los amantes de los sabores tropicales.",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80", // Cheesecake
    price: "$7.000",
  },
  {
    id: "5",
    name: "Brownie Clásico",
    description:
      "Brownie de chocolate intenso, húmedo y con nueces. Ideal para acompañar un café.",
    image:
      "https://images.unsplash.com/es/fotos/un-monton-de-brownies-encima-de-un-plato-blanco-LjtviHokbr4", // Brownie
    price: "$4.000",
  },
];
