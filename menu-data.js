// Joe's Caffè — Direction A. Full menu data.
// Prices in Tunisian Dinar (DT), format X.XXX. Edit items/prices here.
const BRAND = {
  espresso: "#160f0a",
  espresso2: "#1d140d",
  card: "#241910",
  cardLine: "rgba(244,183,64,.14)",
  cream: "#f6ecdd",
  creamDim: "#cdbaa2",
  muted: "#9a8870",
  gold: "#f4b740",
  goldDeep: "#e09a2b",
  berry: "#d05a6e",
};

// Featured cards at the top of the menu. Decorative showcases — names are
// marketing labels, not menu items, so no price is shown. Add `price: "X.XXX"`
// to a card if you want a price displayed.
const SIGNATURES = [
  {
    id: "waffle",
    name: "Bubble Waffle Suprême",
    desc: "Gaufre bubble, crème fouettée maison, M&M's & coulis chocolat",
    img: "img/waffle-hero.png",
    tag: "Best-seller",
  },
  {
    id: "milkshake-royal",
    name: "Saint-Sébastien & Shake",
    desc: "Fondant chocolat, milkshake crémeux, fruits frais",
    img: "img/milkshake-cake.png",
    tag: "Signature",
  },
  {
    id: "cafe-glace",
    name: "Ice Coffee Caramel",
    desc: "Espresso, lait, glaçons & sirop caramel — sous le néon",
    img: "img/iced-coffee-neon.png",
    tag: "Popular",
  },
];

// Full menu. Each item: { n: name, p: price, d?: desc, pop?: photo row, img? }
const CATS = [
  {
    id: "coffee", label: "Coffee", glyph: "☕",
    items: [
      { n: "Express", p: "2.500" },
      { n: "Américain", p: "2.600" },
      { n: "Cappucin", p: "2.700" },
      { n: "Direct", p: "3.000" },
      { n: "Café Turc", p: "3.000" },
      { n: "Nescafé", p: "3.000" },
      { n: "Café au Lait", p: "3.000" },
      { n: "Café Aromatisé", p: "3.500" },
    ],
  },
  {
    id: "ice", label: "Ice Coffee & Tea", glyph: "🧊",
    items: [
      { n: "Ice Coffee Caramel", p: "6.000", pop: true, img: "img/caramel-ice.png" },
      { n: "Ice Coffee Noisette", p: "6.000" },
      { n: "Ice Coffee Cookies", p: "6.000" },
      { n: "Ice Tea Red", p: "5.000" },
      { n: "Ice Tea Citron", p: "5.500" },
      { n: "Ice Tea Orange", p: "5.500" },
    ],
  },
  {
    id: "frappuccino", label: "Frappuccino", glyph: "🥤",
    items: [
      { n: "Caramel", p: "6.500" },
      { n: "Noisette", p: "6.500" },
      { n: "Cookies", p: "6.500" },
      { n: "Nutella", p: "7.500" },
      { n: "Orio", p: "7.500" },
    ],
  },
  {
    id: "cappuccino", label: "Cappuccino", glyph: "☕",
    items: [
      { n: "Caramel", p: "4.500" },
      { n: "Noisette", p: "4.500" },
      { n: "Cookies", p: "4.500" },
    ],
  },
  {
    id: "choco", label: "Chocolat Chaud", glyph: "🍫",
    items: [
      { n: "Normal", p: "5.500" },
      { n: "Cantillé", p: "6.500" },
      { n: "Coffee", p: "7.500" },
    ],
  },
  {
    id: "the", label: "Thé", glyph: "🍵",
    items: [
      { n: "Thé Menthe", p: "2.000" },
      { n: "Thé Louz", d: "Amande", p: "6.000" },
      { n: "Thé Bonde9", p: "7.000" },
    ],
  },
  {
    id: "jus", label: "Jus", glyph: "🍊",
    items: [
      { n: "Citron", p: "4.500" },
      { n: "Orange", p: "4.500" },
      { n: "Lait de Poule", p: "6.000" },
      { n: "Fraise", p: "6.000" },
      { n: "Fruit", p: "7.500" },
      { n: "Fraise Banane", p: "7.500" },
      { n: "Cocktail Joe", p: "9.500", d: "La signature de la maison" },
    ],
  },
  {
    id: "smoothie", label: "Smoothie", glyph: "🍓",
    items: [
      { n: "Smoothi Banane", p: "7.500" },
      { n: "Smoothi Kiwi", p: "7.500" },
      { n: "Smoothi Fraise", p: "7.500" },
      { n: "Smoothi Souris", p: "7.500" },
      { n: "Smoothi Helthi", p: "8.000" },
      { n: "Smoothi Joe", p: "9.000", d: "Signature" },
    ],
  },
  {
    id: "milkshake", label: "Milkshake", glyph: "🥛",
    banner: { img: "img/pink-milkshake.png", name: "Pink Dream Milkshake", desc: "Fraise, crème fouettée, menthe + shot de coulis" },
    items: [
      { n: "Milkshake Vanille", p: "7.500" },
      { n: "Milkshake Fraise", p: "7.500" },
      { n: "Milkshake Banane", p: "7.500" },
      { n: "Milkshake Nutella", p: "8.500" },
      { n: "Milkshake Orio", p: "8.500" },
    ],
  },
  {
    id: "mojito", label: "Mojito", glyph: "🌿",
    banner: { img: "img/mojitos.png", name: "Mojito Duo", desc: "Fraise & blue curaçao, menthe fraîche, citron" },
    items: [
      { n: "Mojito Vergin", p: "6.000" },
      { n: "Mojito Blue", p: "7.000" },
      { n: "Mojito Red", p: "7.000" },
      { n: "Mojito Energitique", p: "9.000" },
    ],
  },
  {
    id: "mocktail", label: "Mocktail", glyph: "🍹",
    items: [
      { n: "Mocktail Hawai", p: "8.000" },
      { n: "Mocktail Blue", p: "8.000" },
      { n: "Mocktail Joe", p: "9.500", d: "Signature" },
    ],
  },
  {
    id: "crepe-sucree", label: "Crêpes Sucrée", glyph: "🥞",
    items: [
      { n: "Crêpe Chocolat", p: "7.000" },
      { n: "Crêpe Nutella", p: "8.000" },
      { n: "Crêpe Nutella Fruit", p: "8.500" },
      { n: "Crêpe Nutella Fruit Sec", p: "9.000" },
      { n: "Crêpe Nutella Orio", p: "9.000" },
      { n: "Crêpe Joe", p: "10.000", d: "Signature" },
    ],
  },
  {
    id: "crepe-salee", label: "Crêpes Salée", glyph: "🧀",
    items: [
      { n: "Crêpe Jambon Fromage", p: "6.500" },
      { n: "Crêpe Thon Fromage", p: "7.000" },
      { n: "Crêpe Thon Œuf Fromage", p: "8.000" },
      { n: "Crêpe Thon Jambon Fromage", p: "9.000" },
    ],
  },
  {
    id: "kunafa", label: "Crêpe Kunafa", glyph: "🍮",
    items: [
      { n: "Pistache", p: "10.000" },
      { n: "Nutella", p: "10.000" },
      { n: "Chocolat Blanc", p: "10.000" },
    ],
  },
  {
    id: "bubble", label: "Bubble Waffle", glyph: "🧇",
    banner: { img: "img/waffle-hero.png", name: "Bubble Waffle Suprême", desc: "Gaufre bubble, crème fouettée, M&M's & coulis chocolat" },
    items: [
      { n: "Miel", p: "6.500" },
      { n: "Chocolat", p: "7.000" },
      { n: "Nutella", p: "8.000" },
      { n: "Fruit Sec", p: "8.500" },
    ],
  },
  {
    id: "gauffre", label: "Gauffre", glyph: "🧇",
    items: [
      { n: "Chocolat", p: "7.000" },
      { n: "Nutella", p: "8.000" },
      { n: "Fruit", p: "8.500" },
      { n: "Fruit Sec", p: "9.000" },
    ],
  },
  {
    id: "pancake", label: "Pancake", glyph: "🥞",
    items: [
      { n: "Chocolat", p: "7.000" },
      { n: "Nutella", p: "8.000" },
      { n: "Nutella Fruit", p: "8.500" },
      { n: "Nutella Fruit Sec", p: "9.000" },
    ],
  },
  {
    id: "glace", label: "Glace", glyph: "🍨",
    items: [
      { n: "1 Boule", p: "5.500" },
      { n: "2 Boules", p: "6.000" },
      { n: "3 Boules", p: "6.500" },
    ],
  },
  {
    id: "gateaux", label: "Gâteaux", glyph: "🍰",
    items: [
      { n: "Gâteaux", p: "3.000" },
      { n: "Cheesecake", p: "6.000" },
      { n: "Tiramisu", p: "6.000" },
      { n: "Saint-Sébastien", p: "9.000" },
    ],
  },
  {
    id: "fruit", label: "Fruit", glyph: "🍓",
    items: [
      { n: "Salade Fruit", p: "8.000" },
      { n: "Plat Fruit", p: "10.000" },
    ],
  },
  {
    id: "omelette", label: "Omelette", glyph: "🍳",
    items: [
      { n: "Jambon", p: "5.500" },
      { n: "Thon Fromage", p: "6.000" },
      { n: "Jambon Thon Fromage", p: "7.000" },
    ],
  },
  {
    id: "panini", label: "Panini", glyph: "🥪",
    items: [
      { n: "Jambon Fromage", p: "4.500" },
      { n: "Thon Fromage", p: "5.000" },
      { n: "Jambon Thon Fromage", p: "5.500" },
    ],
  },
  {
    id: "boisson", label: "Boisson Gazeuse", glyph: "🥤",
    items: [
      { n: "Canette", p: "2.500" },
      { n: "Eau Gazéifiée", p: "3.000" },
      { n: "Jus en Canette", p: "3.500" },
      { n: "Boisson Énergétique", p: "6.000" },
    ],
  },
  {
    id: "eau", label: "Eau", glyph: "💧",
    items: [
      { n: "Eau 0.5L", p: "1.500" },
      { n: "Eau 1L", p: "2.500" },
    ],
  },
  {
    id: "chicha", label: "Chicha", glyph: "💨",
    items: [
      { n: "Chicha Fakher", p: "4.500" },
      { n: "Chicha Love", p: "5.000" },
      { n: "Chicha Chick Money", p: "5.000" },
    ],
  },
];

const GAMES = {
  title: "Coin Jeux",
  desc: "Khamsa w Khmis · El Marichal · Harissa · Chmeta — demandez nos jeux de société à l'accueil. Gratuit avec votre commande.",
  img: "img/games.png",
};

// Top-level tabs. Each maps to the category ids it contains, so the nav stays
// short on phones. "signatures" and "jeux" are special sections (not in CATS).
const GROUPS = [
  { id: "g-signatures", label: "Signatures", sections: ["signatures"] },
  { id: "g-chaud", label: "Boissons Chaudes", sections: ["coffee", "cappuccino", "choco", "the"] },
  { id: "g-froid", label: "Boissons Froides", sections: ["ice", "frappuccino", "jus", "smoothie", "milkshake", "mojito", "mocktail", "boisson", "eau"] },
  { id: "g-crepes", label: "Crêpes & Gaufres", sections: ["crepe-sucree", "crepe-salee", "kunafa", "bubble", "gauffre", "pancake"] },
  { id: "g-desserts", label: "Desserts", sections: ["glace", "gateaux", "fruit"] },
  { id: "g-snacks", label: "Snacks", sections: ["omelette", "panini"] },
  { id: "g-chicha", label: "Chicha", sections: ["chicha"] },
  { id: "g-jeux", label: "Jeux", sections: ["jeux"] },
];
