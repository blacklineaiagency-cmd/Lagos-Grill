import { MenuItem, RestaurantInfo } from '../types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Lagos Grill",
  tagline: "Flame-Kissed Nigerian Specialties & Continental Classics",
  story: "Born from a passion for authentic Nigerian food culture and modern open-flame cooking, Lagos Grill brings together the warmth of traditional culinary heritage and the sophistication of continental dining. Situated in the vibrant pulse of Lekki, Lagos, we celebrate rich spices, prime cuts, and relaxed Lagosian hospitality in a warm, welcoming atmosphere.",
  address: {
    street: "Plot 14B, Admiralty Way",
    area: "Lekki Phase 1",
    city: "Lagos, Nigeria",
    full: "Plot 14B, Admiralty Way, Lekki Phase 1, Lagos, Nigeria"
  },
  phone: {
    primary: "+2348023456789",
    primaryFormatted: "+234 (0) 802 345 6789",
    secondary: "+2348123456780",
    secondaryFormatted: "+234 (0) 812 345 6780"
  },
  whatsapp: {
    number: "2348023456789",
    defaultMessage: "Hello Lagos Grill! I'd like to make a reservation / ask about today's menu."
  },
  hours: {
    days: "Monday – Sunday",
    time: "12:00 PM – 11:30 PM",
    kitchenClose: "10:45 PM"
  },
  email: "reservations@lagosgrill.ng"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "smoky-jollof-croaker",
    name: "Smoky Party Jollof & Charcoal Croaker",
    description: "Long-grain firewood-infused jollof rice cooked in rich bell pepper reductions, served with a whole spiced flame-grilled croaker fish, sweet fried plantains (dodo), and house pepper relish.",
    price: 12500,
    formattedPrice: "₦12,500",
    category: "nigerian",
    tags: ["House Special", "Popular"],
    spicyLevel: 2,
    popular: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lagos-suya-platter",
    name: "Lagos Signature Suya Platter",
    description: "Thinly sliced tender prime beef crusted in northern yaji spice and slow-seared over glowing charcoal coals. Served with red onion rings, fresh vine tomatoes, and spicy cabbage slaw.",
    price: 9500,
    formattedPrice: "₦9,500",
    category: "grill",
    tags: ["Chef's Favorite", "Spicy"],
    spicyLevel: 3,
    popular: true,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "catfish-pepper-soup",
    name: "Slow-Braised Catfish Pepper Soup",
    description: "Fresh Lagos lagoon catfish simmered in an aromatic broth infused with calabash nutmeg, wild scent leaves, uda pods, and scotch bonnet peppers. Served steaming hot.",
    price: 8000,
    formattedPrice: "₦8,000",
    category: "soup",
    tags: ["Authentic", "Herbal"],
    spicyLevel: 3,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "charcoal-prime-ribeye",
    name: "Charcoal-Grilled Prime Ribeye Steak",
    description: "300g seasoned prime beef ribeye seared to perfection with garlic-thyme butter, served with crispy seasoned yam fries, charred corn on the cob, and house chimichurri sauce.",
    price: 18500,
    formattedPrice: "₦18,500",
    category: "continental",
    tags: ["Premium Cut", "Grill Master"],
    spicyLevel: 1,
    popular: true,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "seafood-okro-poundo",
    name: "Seafood Okro & Fluffy Poundo",
    description: "Fresh coastal okro soup loaded with jumbo tiger prawns, blue crab, tender calamari rings, and flaked smoked catfish in rich palm broth, served with silky hot pounded yam.",
    price: 14000,
    formattedPrice: "₦14,000",
    category: "nigerian",
    tags: ["Fresh Catch", "Traditional"],
    spicyLevel: 2,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "smoked-honey-chicken",
    name: "Smoked Honey-Glazed Half Chicken",
    description: "Spiced free-range half chicken slow-roasted over hardwood charcoal, brushed with wildflower honey and scotch bonnet glaze. Served with seasoned basmati fried rice and creamy slaw.",
    price: 11000,
    formattedPrice: "₦11,000",
    category: "grill",
    tags: ["Crowd Pleaser"],
    spicyLevel: 1,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
  }
];
