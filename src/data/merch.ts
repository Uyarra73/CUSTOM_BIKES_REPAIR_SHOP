export interface MerchItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  badge: string;
  accentClassName: string;
}

export const merchItems: MerchItem[] = [
  {
    id: "camiseta-taller",
    name: "Camiseta Taller Heavy Cotton",
    category: "Ropa",
    price: "29 €",
    description: "Camiseta de algodón grueso con gráfico frontal Ezcaray Custom Bikes y acabado lavado vintage.",
    badge: "Bestseller",
    accentClassName: "from-[#5C4033] via-[#7C5943] to-[#C9A227]",
  },
  {
    id: "sudadera-cremallera",
    name: "Sudadera Cremallera Garage",
    category: "Ropa",
    price: "68 €",
    description: "Sudadera negra con cremallera, bordado en pecho y espalda grande inspirada en la estética del taller.",
    badge: "Nueva",
    accentClassName: "from-[#2C2C2C] via-[#5C4033] to-[#D4A574]",
  },
  {
    id: "gorra-patch",
    name: "Gorra Patch Pit Lane",
    category: "Accesorios",
    price: "24 €",
    description: "Gorra de visera curva con parche tejido, tono carbón y ajuste trasero metálico.",
    badge: "Edición Club",
    accentClassName: "from-[#3D2914] via-[#5C4033] to-[#8B9A7D]",
  },
  {
    id: "mug-enamel",
    name: "Taza Enamel Workshop",
    category: "Lifestyle",
    price: "18 €",
    description: "Taza metálica esmaltada para café de ruta, con logotipo frontal y lettering técnico lateral.",
    badge: "Para Ruta",
    accentClassName: "from-[#F5F0E6] via-[#D4A574] to-[#5C4033]",
  },
  {
    id: "bolsa-tool-roll",
    name: "Tool Roll de Lona",
    category: "Garage",
    price: "42 €",
    description: "Bolsa enrollable de lona encerada para llevar llaves, puntas y útiles básicos con estilo de taller clásico.",
    badge: "Taller",
    accentClassName: "from-[#8B9A7D] via-[#5C4033] to-[#2C2C2C]",
  },
  {
    id: "poster-blueprint",
    name: "Póster Blueprint Serie 73",
    category: "Decoración",
    price: "35 €",
    description: "Lámina numerada con ilustración técnica de una custom de casa, impresa sobre papel texturizado.",
    badge: "Colección",
    accentClassName: "from-[#1F3140] via-[#3D2914] to-[#C9A227]",
  },
];

export const merchCategories = ["Ropa", "Accesorios", "Lifestyle", "Garage", "Decoración"] as const;
