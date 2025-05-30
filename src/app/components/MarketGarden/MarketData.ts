export interface MarketBusiness {
    id: number;
    name: string;
    type: "physical" | "digital";
    category: "Food" | "Health" | "Education" | "Fashion" | "Services";
    location: [number, number]; // [lat, lng]
    country: string;
    city: string;
    acceptsBitcoin: boolean;
    description: string;
  }
  
  export const businesses: MarketBusiness[] = [
    {
      id: 1,
      name: "Cafe Libertad",
      type: "physical",
      category: "Food",
      location: [19.4326, -99.1332],
      country: "Mexico",
      city: "CDMX",
      acceptsBitcoin: true,
      description: "Local café in Roma Norte accepting Bitcoin and Lightning.",
    },
    {
      id: 2,
      name: "Bitcoin Chic",
      type: "physical",
      category: "Fashion",
      location: [34.0522, -118.2437],
      country: "USA",
      city: "Los Angeles",
      acceptsBitcoin: true,
      description: "Sustainable fashion boutique for the modern Bitcoiner.",
    },
    {
      id: 3,
      name: "Salud Digital",
      type: "digital",
      category: "Health",
      location: [0, 0],
      country: "Remote",
      city: "Online",
      acceptsBitcoin: true,
      description: "Telemedicine services for LATAM paid in BTC.",
    },
    {
      id: 4,
      name: "CryptoKids Academy",
      type: "digital",
      category: "Education",
      location: [0, 0],
      country: "Remote",
      city: "Online",
      acceptsBitcoin: true,
      description: "Bitcoin-first learning for kids across LATAM.",
    },
    {
      id: 5,
      name: "Tortas Lightning",
      type: "physical",
      category: "Food",
      location: [-23.5505, -46.6333],
      country: "Brazil",
      city: "São Paulo",
      acceptsBitcoin: true,
      description: "Street food with Lightning-fast flavor.",
    },
    {
      id: 6,
      name: "Cosmic Nails",
      type: "physical",
      category: "Fashion",
      location: [6.2442, -75.5812],
      country: "Colombia",
      city: "Medellín",
      acceptsBitcoin: true,
      description: "Beauty salon accepting BTC tips.",
    },
    {
      id: 7,
      name: "MujerBit Freelance Hub",
      type: "digital",
      category: "Services",
      location: [0, 0],
      country: "Remote",
      city: "Online",
      acceptsBitcoin: true,
      description: "Latina-led digital services — design, dev, and writing.",
    },
    {
      id: 8,
      name: "BTC Pet Care",
      type: "physical",
      category: "Health",
      location: [40.7128, -74.0060],
      country: "USA",
      city: "New York",
      acceptsBitcoin: true,
      description: "Veterinary clinic accepting Bitcoin for all furry needs.",
    },
    {
      id: 9,
      name: "BitTango Studio",
      type: "physical",
      category: "Fashion",
      location: [-34.6037, -58.3816],
      country: "Argentina",
      city: "Buenos Aires",
      acceptsBitcoin: true,
      description: "Latina-owned tattoo & piercings studio powered by BTC.",
    },
    {
      id: 10,
      name: "Flor de Luna Spa",
      type: "physical",
      category: "Health",
      location: [-12.0464, -77.0428],
      country: "Peru",
      city: "Lima",
      acceptsBitcoin: true,
      description: "Holistic women’s wellness spa with BTC payment available.",
    },
    {
      id: 11,
      name: "BitCafé del Valle",
      type: "physical",
      category: "Food",
      location: [13.6929, -89.2182],
      country: "El Salvador",
      city: "San Salvador",
      acceptsBitcoin: true,
      description: "Crypto-friendly café and co-working space.",
    },
    {
      id: 12,
      name: "BitForPets",
      type: "physical",
      category: "Health",
      location: [-33.4489, -70.6693],
      country: "Chile",
      city: "Santiago",
      acceptsBitcoin: true,
      description: "Pet food & services with Bitcoin rewards program.",
    },
    {
      id: 13,
      name: "Tienda Satoshi",
      type: "physical",
      category: "Services",
      location: [18.7357, -70.1627],
      country: "Dominican Republic",
      city: "Santo Domingo",
      acceptsBitcoin: true,
      description: "Printing, scanning & microservices shop accepting BTC.",
    },
    {
      id: 14,
      name: "BitCeramics",
      type: "physical",
      category: "Fashion",
      location: [21.1619, -86.8515],
      country: "Mexico",
      city: "Cancún",
      acceptsBitcoin: true,
      description: "Handmade ceramic art from the Yucatán jungle.",
    },
    {
      id: 15,
      name: "Crypto Cacao",
      type: "physical",
      category: "Food",
      location: [9.7489, -83.7534],
      country: "Costa Rica",
      city: "San José",
      acceptsBitcoin: true,
      description: "Cacao drinks, chocolate workshops, and BTC beans.",
    },
    {
      id: 16,
      name: "Freedom Kitchen",
      type: "physical",
      category: "Food",
      location: [14.6349, -90.5069],
      country: "Guatemala",
      city: "Guatemala City",
      acceptsBitcoin: true,
      description: "Vegan café & food activism hub with BTC POS.",
    },
    {
      id: 17,
      name: "BitStreet Wear",
      type: "physical",
      category: "Fashion",
      location: [-15.7939, -47.8828],
      country: "Brazil",
      city: "Brasília",
      acceptsBitcoin: true,
      description: "Streetwear for rebels. BTC only.",
    },
    {
      id: 18,
      name: "Casa Crypto Colectiva",
      type: "physical",
      category: "Education",
      location: [20.6597, -103.3496],
      country: "Mexico",
      city: "Guadalajara",
      acceptsBitcoin: true,
      description: "Community learning center for decentralization & sovereignty.",
    },
    {
      id: 19,
      name: "BitHands Therapy",
      type: "physical",
      category: "Health",
      location: [7.1139, -73.1198],
      country: "Colombia",
      city: "Bucaramanga",
      acceptsBitcoin: true,
      description: "Massage & physiotherapy sessions paid in BTC.",
    },
    {
      id: 20,
      name: "CryptoGlow Skincare",
      type: "physical",
      category: "Health",
      location: [32.7157, -117.1611],
      country: "USA",
      city: "San Diego",
      acceptsBitcoin: true,
      description: "Natural skincare line blending science and Satoshi.",
    },
    {
      id: 21,
      name: "Vegas Crypto Supply",
      type: "physical",
      category: "Services",
      location: [36.1699, -115.1398],
      country: "USA",
      city: "Las Vegas",
      acceptsBitcoin: true,
      description: "Hardware wallets, mining tools, and merch for Bitcoiners.",
    },
  
    {
        id: 30,
        name: "DevBitcoin Academy",
        type: "digital",
        category: "Education",
        location: [0, 0],
        country: "Remote",
        city: "Online",
        acceptsBitcoin: true,
        description: "A learning platform for developers looking to integrate Bitcoin into their projects.",
      },
      {
        id: 31,
        name: "Blockchainify Consulting",
        type: "digital",
        category: "Services",
        location: [0, 0],
        country: "Remote",
        city: "Online",
        acceptsBitcoin: true,
        description: "Consulting services to help businesses adopt blockchain and Bitcoin solutions.",
      },
      {
        id: 32,
        name: "CryptoDesign Studio",
        type: "digital",
        category: "Services",
        location: [0, 0],
        country: "Remote",
        city: "Online",
        acceptsBitcoin: true,
        description: "Creative design services for crypto projects, websites, and branding.",
      },
      {
        id: 33,
        name: "BTC Travel Planner",
        type: "digital",
        category: "Services",
        location: [0, 0],
        country: "Remote",
        city: "Online",
        acceptsBitcoin: true,
        description: "Bitcoin-friendly travel planning service that helps you book trips using cryptocurrency.",
      },
      {
        id: 34,
        name: "BitArt Marketplace",
        type: "digital",
        category: "Fashion",
        location: [0, 0],
        country: "Remote",
        city: "Online",
        acceptsBitcoin: true,
        description: "An online marketplace where digital artists can sell and showcase their Bitcoin-themed artwork.",
      },
    ];
  