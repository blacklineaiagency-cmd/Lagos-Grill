export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in Naira
  formattedPrice: string; // e.g. "₦12,500"
  category: 'nigerian' | 'grill' | 'continental' | 'soup';
  tags?: string[];
  spicyLevel?: 1 | 2 | 3;
  popular?: boolean;
  image: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  story: string;
  address: {
    street: string;
    area: string;
    city: string;
    full: string;
  };
  phone: {
    primary: string;
    primaryFormatted: string;
    secondary?: string;
    secondaryFormatted?: string;
  };
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
  hours: {
    days: string;
    time: string;
    kitchenClose: string;
  };
  email: string;
}
