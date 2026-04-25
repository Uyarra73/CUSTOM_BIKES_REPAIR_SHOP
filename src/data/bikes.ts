export interface BikeBrand {
  name: string;
  models: string[];
}

export const bikeBrands: BikeBrand[] = [
  {
    name: "Harley-Davidson",
    models: ["Iron 883", "Forty-Eight", "Sportster", "Softail", "Dyna", "V-Rod", "Panhead", "Knucklehead", "Shovelhead"],
  },
  {
    name: "Indian",
    models: ["Scout", "Chief", "Chieftain", "Roadmaster", "FTR", "Scout Bobber", "Classic", "Vintage"],
  },
  {
    name: "Triumph",
    models: ["Bonneville", "T120", "T100", "Thruxton", "Scrambler", "Speedmaster", "Bobber", "Thunderbird"],
  },
  {
    name: "Honda",
    models: ["CB750", "CB550", "CB350", "CB400", "Gold Wing", "Shadow", "VTX", "CX500", "GL1000"],
  },
  {
    name: "Yamaha",
    models: ["Virago", "XS650", "XS750", "XS1100", "Royal Star", "V-Star", "XJ550", "TX650"],
  },
  {
    name: "Kawasaki",
    models: ["W1", "W650", "KLR650", "Vulcan", "EN500", " Concours", "Z1", "KZ650"],
  },
  {
    name: "Suzuki",
    models: ["GS500", "GS750", "GS850", "GS1000", "Intruder", "Boulevard", "GN125", "TU250"],
  },
  {
    name: "BMW",
    models: ["R75", "R60", "R50", "R90", "R100", "R80", "R65", "K75", "R1200"],
  },
  {
    name: "Ducati",
    models: ["750 GT", "750 SS", "900 SS", "MHR", "Pantah", "GTS", "Paul II", " Darmah"],
  },
  {
    name: "Moto Guzzi",
    models: ["V7", "Le Mans", "California", "Dart", "V100", "Ambassador", "Eldorado", "Falcone"],
  },
  {
    name: "Cafe Racer Custom",
    models: ["Wiring Special", "Monster Moto", "Rough Crafts", "Roughhouse", "Brat Style", "KillaH", "Deus"],
  },
  {
    name: "Bobber Custom",
    models: ["Roller", "Rough Crafts", "Biltwell", "Born Free", "S&S", "Lowbrow", "Hardtail"],
  },
  {
    name: "Otra",
    models: ["Otra / No aparece en la lista"],
  },
];

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

export const services: Service[] = [
  {
    id: "full-restoration",
    name: "Restauración Integral",
    description: "Restauración completa a chasis desnudo, incluyendo reconstrucción de motor, cableado, pintura, cromados y sistemas mecánicos",
    price: "Presupuesto a medida",
    duration: "4-8 semanas",
  },
  {
    id: "engine-rebuild",
    name: "Reconstrucción de Motor",
    description: "Desmontaje completo del motor, rectificado, trabajo de válvulas, juntas nuevas y montaje según especificaciones de fábrica",
    price: "1.500 € - 4.000 €",
    duration: "2-4 semanas",
  },
  {
    id: "carburetor-rebuild",
    name: "Reconstrucción de Carburador",
    description: "Limpieza completa del carburador, cambio de chiclés, ajuste de flotadores y puesta a punto",
    price: "150 € - 400 €",
    duration: "2-5 días",
  },
  {
    id: "electrical",
    name: "Sistema Eléctrico",
    description: "Reparación de mazo de cables, servicio de encendido, sistema de carga, luces e interruptores",
    price: "200 € - 800 €",
    duration: "3-7 días",
  },
  {
    id: "suspension",
    name: "Servicio de Suspensión",
    description: "Reconstrucción de horquilla, servicio de amortiguadores, cambio de rodamientos y ajuste personalizado",
    price: "300 € - 900 €",
    duration: "3-5 días",
  },
  {
    id: "brake-system",
    name: "Sistema de Frenos",
    description: "Reconstrucción de frenos de tambor o disco, servicio de pinzas, bomba de freno y sustitución de latiguillos",
    price: "150 € - 600 €",
    duration: "2-4 días",
  },
  {
    id: "custom-build",
    name: "Proyecto Custom",
    description: "Diseñamos y construimos la moto de tus sueños desde cero con un acabado artesanal",
    price: "Presupuesto a medida",
    duration: "8-16 semanas",
  },
  {
    id: "tune-up",
    name: "Puesta a Punto Completa",
    description: "Platinos, bujías, encendido, ajuste de carburación, tensión de cadena o correa y cambio de fluidos",
    price: "250 € - 500 €",
    duration: "1-2 días",
  },
];
