import { Product, SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  // Use a placeholder or environment variable if you want to swap it easily
  whatsappNumber: "+923214141274", 
  companyInfo: {
    name: "Xpert Packages",
    tagline: "Industrial Flexible-Packaging Manufacturer.",
    phone: "0321-4141274",
    email: "xpertpackages@gmail.com",
    address: "Gajju Matta, Lahore",
    social: {}
  }
};

export const products: Product[] = [
  {
    id: "shopping-bags",
    categoryNumber: "01",
    name: "Shopping Bags",
    description: "Durable and customizable LLDPE shopping bags for retail and commercial use.",
    image: "https://images.unsplash.com/photo-1605600659873-d808a1d85f26?auto=format&fit=crop&q=80&w=800",
    applications: ["Retail stores", "Supermarkets", "Boutiques", "Events"],
    customizationOptions: ["Custom sizes", "Multi-color printing", "Die-cut handles", "Loop handles"]
  },
  {
    id: "industrial-bags",
    categoryNumber: "02",
    name: "Industrial Bags",
    description: "Heavy-duty LLDPE solutions for demanding packaging applications.",
    image: "https://images.unsplash.com/photo-1577702312572-5bb9328a9f15?auto=format&fit=crop&q=80&w=800",
    applications: ["Manufacturing", "Hardware", "Construction materials", "Chemicals"],
    customizationOptions: ["High thickness (up to 150 μm)", "UV protection", "Heavy-duty sealing"]
  },
  {
    id: "garment-bags",
    categoryNumber: "03",
    name: "Garment Bags",
    description: "Clear and protective packaging for the textile and apparel industry.",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
    applications: ["Clothing retail", "Textile manufacturing", "Dry cleaning", "Export"],
    customizationOptions: ["Hanger holes", "Adhesive flaps", "Ventilation holes", "Clear presentation"]
  },
  {
    id: "packaging-bags",
    categoryNumber: "04",
    name: "Packaging Bags",
    description: "Versatile bags for general product packaging and protection.",
    image: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&q=80&w=800",
    applications: ["E-commerce", "Electronics", "Auto parts", "Components"],
    customizationOptions: ["Zipper locks", "Tear notches", "Bubble lining", "Anti-static"]
  },
  {
    id: "printed-bags",
    categoryNumber: "05",
    name: "Printed Bags",
    description: "Brand-focused packaging with high-quality flexographic printing.",
    image: "https://images.unsplash.com/photo-1587324438673-56c80a221295?auto=format&fit=crop&q=80&w=800",
    applications: ["Branded retail", "Promotional packaging", "Consumer goods"],
    customizationOptions: ["Up to 8 color printing", "Matte/Gloss finish", "Edge-to-edge designs"]
  },
  {
    id: "custom-bags",
    categoryNumber: "06",
    name: "Custom Bags",
    description: "Engineered specifically to your unique dimensional and functional requirements.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=800",
    applications: ["Specialized machinery", "Unique form factors", "Non-standard items"],
    customizationOptions: ["Any dimension", "Custom formulations", "Specialized construction"]
  }
];

export const configuratorOptions = {
  materials: [
    { value: "LLDPE", label: "LLDPE" }
  ],
  qualities: [
    { value: "Standard", label: "Standard" },
    { value: "Premium", label: "Premium" },
    { value: "Heavy Duty", label: "Heavy Duty" }
  ],
  thicknesses: [
    { value: "40 μm", label: "40 μm" },
    { value: "60 μm", label: "60 μm" },
    { value: "80 μm", label: "80 μm" },
    { value: "100 μm", label: "100 μm" }
  ],
  sizes: [
    { value: "8 × 12 inches", label: "8 × 12 inches" },
    { value: "10 × 15 inches", label: "10 × 15 inches" },
    { value: "12 × 18 inches", label: "12 × 18 inches" },
    { value: "14 × 24 inches", label: "14 × 24 inches" },
    { value: "18 × 24 inches", label: "18 × 24 inches" },
    { value: "Custom", label: "Custom Size" }
  ],
  colors: [
    { value: "Transparent", label: "Transparent" },
    { value: "Milky White", label: "Milky White" },
    { value: "Black", label: "Black" },
    { value: "Custom", label: "Custom Color" }
  ],
  printing: [
    { value: "Plain", label: "Plain (No Print)" },
    { value: "1 Colour", label: "1 Colour" },
    { value: "2 Colour", label: "2 Colour" },
    { value: "Multi-colour", label: "Multi-colour" }
  ]
};

export const industriesData = [
  { id: "textile", name: "Textile", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600" },
  { id: "retail", name: "Retail", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" },
  { id: "agriculture", name: "Agriculture", image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c13?auto=format&fit=crop&q=80&w=600" },
  { id: "manufacturing", name: "Manufacturing", image: "https://images.unsplash.com/photo-1565439390237-7e61e695d661?auto=format&fit=crop&q=80&w=600" },
  { id: "food-packaging", name: "Food Packaging", image: "https://images.unsplash.com/photo-1588612501061-ce1d7f457ffc?auto=format&fit=crop&q=80&w=600" },
  { id: "ecommerce", name: "E-commerce", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600" }
];

export const galleryImages = [
  { id: "g1", url: "https://images.unsplash.com/photo-1605600659873-d808a1d85f26?auto=format&fit=crop&q=80&w=1200", title: "Transparent Shopping Bags" },
  { id: "g2", url: "https://images.unsplash.com/photo-1587324438673-56c80a221295?auto=format&fit=crop&q=80&w=1200", title: "Printed Retail Bags" },
  { id: "g3", url: "https://images.unsplash.com/photo-1577702312572-5bb9328a9f15?auto=format&fit=crop&q=80&w=1200", title: "Heavy Duty Industrial Packaging" },
  { id: "g4", url: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200", title: "Textile Garment Bags" },
  { id: "g5", url: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&q=80&w=1200", title: "E-commerce Mailers" },
  { id: "g6", url: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=1200", title: "Custom Form Factor Bags" }
];
