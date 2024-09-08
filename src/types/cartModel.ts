export type CartService = {
  name: string;
  id: string;
  code: string;
  description: string;
  link: string;
  price: string;
  outsource: boolean;
  category: {
    name: string;
    id: string;
    type: string;
  };
};

export type CartProduct = {
  id: string;
  count: number;
  multiple: number;
  type: string;
  code: 8350603 | 9050930;
  name: string;
  brand: string;
  image: string;
  url: string;
  categories: {
    id: number;
    name: string;
  }[];
  prices: {
    price: number;
    salePrice: number;
  };
  present: { code: number; offer: string; link: string } | null;
  discountType: 'discount' | 'superprice' | null;
  discount: number;
  services: never[];
  servicesTotal: number;
};
