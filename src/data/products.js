/**
 * Green Deli Product Database
 * Categories: Chillies, Masalas, Powders, The Larder
 */

export const products = [
  // --- CHILLIES ---
  {
    id: 'gd-01',
    name: "Hot Chilli Powder",
    slug: "hot-chilli-powder",
    category: "Chillies",
    price: 15000,
    rating: 4.5,
    origin: "Bududa",
    image: "/assets/products/chillis.png",
    description: "Pure African Bird's Eye chilies, sun-dried and milled for a sharp, clean heat.",
    isHot: true,
  },
  {
    id: 'gd-02',
    name: "Lake Salt Chilli",
    slug: "lake-salt-chilli",
    category: "Chillies",
    price: 15000,
    rating: 1.5,
    origin: "Lake Katwe",
    image: "/assets/products/lake-salt-chilli.png",
    description: "Mineral-rich salt from the craters of Katwe, infused with crushed bird's eye flakes.",
    isHot: true
  },
  {
    id: 'gd-03',
    name: "Chilli Flakes",
    slug: "chilli-flakes",
    category: "Chillies",
    price: 12000,
    rating: 3.5,
    origin: "Bududa",
    image: "/assets/products/flakes.png",
    description: "Coarsely crushed chilies for a slow-releasing heat on pizza, pasta, or local stews.",
    isHot: true
  },

  // --- MASALAS ---
  {
    id: 'gd-04',
    name: "Pilau Masala",
    slug: "pilau-masala",
    category: "Masalas",
    price: 25000,
    origin: "Deli Atelier",
    image: "/assets/products/pilau.png",
    description: "A fragrant, warm blend of cloves, cardamom, and cinnamon for the perfect celebratory rice.",
    isOrganic: true
  },
  {
    id: 'gd-05',
    name: "Beef Masala",
    slug: "beef-masala",
    category: "Masalas",
    price: 22000,
    origin: "Deli Atelier",
    image: "/assets/products/beefMasala.jpg",
    description: "A robust blend of warm spices designed to elevate roasted and stewed meats.",
    isOrganic: true
  },
  {
    id: 'gd-06',
    name: "Curry Powder",
    slug: "curry-powder",
    category: "Masalas",
    price: 20000,
    origin: "Deli Atelier",
    image: "/assets/products/curry.jpeg",
    description: "Our balanced house blend of turmeric, cumin, and coriander.",
    isOrganic: true
  },
  {
    id: 'gd-07',
    name: "Deli Mchuzi Mix",
    slug: "deli-mchuzi-mix",
    category: "Masalas",
    price: 25000,
    origin: "Deli Atelier",
    image: "/assets/products/mchuzi-mix.jpg",
    description: "A premium, thick-base seasoning for rich Ugandan gravies and stews.",
    isOrganic: true
  },
  {
    id: 'gd-08',
    name: "Delish Seasoning",
    slug: "delish-seasoning",
    category: "Masalas",
    price: 22000,
    origin: "Deli Atelier",
    image: "/assets/products/delish-seasoning.jpg",
    description: "Our all-purpose flavor enhancer. The secret ingredient for every professional meal.",
    isOrganic: true
  },

  // --- POWDERS ---
  {
    id: 'gd-09',
    name: "Ginger Powder",
    slug: "ginger-powder",
    category: "Powders",
    price: 12000,
    origin: "Kasese",
    image: "/assets/products/ginger.jpg",
    description: "Zesty mountain ginger powder, essential for both the spice rack and medicinal teas.",
    isOrganic: true
  },
  {
    id: 'gd-10',
    name: "Turmeric",
    slug: "turmeric",
    category: "Powders",
    price: 15000,
    origin: "Central Uganda",
    image: "/assets/products/turmeric.jpg",
    description: "Deep orange turmeric with high curcumin levels for maximum flavor and health benefits.",
    isOrganic: true
  },
  {
    id: 'gd-11',
    name: "Onion Powder",
    slug: "onion-powder",
    category: "Powders",
    price: 15000,
    origin: "Kabale",
    image: "/assets/products/onion.png",
    description: "Pure, dehydrated red onions for a sweet, savory base without the prep work.",
    isOrganic: true
  },
  {
    id: 'gd-12',
    name: "Tomato Powder",
    slug: "tomato-powder",
    category: "Powders",
    price: 18000,
    origin: "Mbarara",
    image: "/assets/products/tomato powder.png",
    description: "Concentrated tomato essence, perfect for thickening sauces and adding deep umami.",
    isOrganic: true
  },
  {
    id: 'gd-13',
    name: "Cinnamon Powder",
    slug: "cinnamon-powder",
    category: "Powders",
    price: 20000,
    origin: "Bundibugyo",
    image: "/assets/products/cinnamon-powder.jpg",
    description: "Sweet and warm aromatic bark, freshly ground for peak essential oil retention.",
    isOrganic: true   
  },
  {
    id: 'gd-14',
    name: "Black Pepper",
    slug: "black-pepper",
    category: "Powders",
    price: 18000,
    origin: "Mukono District",
    image: "/assets/products/blackPepper.png",
    description: "Whole peppercorns harvested for high piperine content, ground for sharp, woody heat.",
    isOrganic: true
  },
  {
    id: 'gd-15',
    name: "Lemon Pepper",
    slug: "lemon-pepper",
    category: "Powders",
    price: 22000,
    origin: "Deli Atelier",
    image: "/assets/products/lemon.png",
    description: "Bright citrus notes paired with the sharp bite of premium cracked black pepper.",
    isOrganic: true
  },

  // --- THE LARDER ---
  {
    id: 'gd-16',
    name: "Honey",
    slug: "pure-honey",
    category: "The Larder",
    price: 35000,
    origin: "Arua",
    image: "/assets/products/honey.png",
    description: "Raw, unfiltered wild honey sourced from the nectar of Northern Uganda's diverse flora.",
    isOrganic: true
  }
];

// UI Helper: Category Metadata
export const categories = [
  { title: "Chillies", itemCount: 3, image: "/assets/products/chillis.png" },
  { title: "Masalas", itemCount: 5, image: "/assets/products/beefMasala.jpg" },
  { title: "Powders", itemCount: 7, image: "/assets/products/garlicPowder.jpeg" },
  { title: "The Larder", itemCount: 1, image: "/assets/products/honey.png" }
];

// Utility: Format Currency for Uganda
export const formatPrice = (amount) => {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    maximumFractionDigits: 0,
  }).format(amount);
};