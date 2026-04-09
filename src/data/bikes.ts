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
    name: "Other",
    models: ["Other / Not Listed"],
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
    name: "Full Restoration",
    description: "Complete frame-off restoration including engine rebuild, wiring, paint, chrome, and mechanical systems",
    price: "Quote required",
    duration: "4-8 weeks",
  },
  {
    id: "engine-rebuild",
    name: "Engine Rebuild",
    description: "Complete engine teardown, bore, valve job, new gaskets, and reassembly to factory specs",
    price: "$1,500 - $4,000",
    duration: "2-4 weeks",
  },
  {
    id: "carburetor-rebuild",
    name: "Carburetor Rebuild",
    description: "Complete carb cleaning, jet replacement, float adjustment, and tuning",
    price: "$150 - $400",
    duration: "2-5 days",
  },
  {
    id: "electrical",
    name: "Electrical System",
    description: "Wiring harness repair, ignition system service, charging system, lights, and switches",
    price: "$200 - $800",
    duration: "3-7 days",
  },
  {
    id: "suspension",
    name: "Suspension Service",
    description: "Fork rebuild, shock service, bearing replacement, and custom setup",
    price: "$300 - $900",
    duration: "3-5 days",
  },
  {
    id: "brake-system",
    name: "Brake System",
    description: "Drum/disc brake rebuild, caliper service, master cylinder rebuild, and line replacement",
    price: "$150 - $600",
    duration: "2-4 days",
  },
  {
    id: "custom-build",
    name: "Custom Build",
    description: "Design and build your dream motorcycle from the ground up with expert craftsmanship",
    price: "Quote required",
    duration: "8-16 weeks",
  },
  {
    id: "tune-up",
    name: "Full Tune-Up",
    description: "Points, plugs, timing, carb adjustment, chain/belt tension, and fluid change",
    price: "$250 - $500",
    duration: "1-2 days",
  },
];
