export type FavoriteProduct = {
  id: number;
  price: string;
  salePrice: string;
  discount: number;
  status: string;
  packSize: number;
  code: string;
  name: string;
  alias: string;
  image: string;
  hasPresent: boolean;
  hasSuperprice: boolean;
  link: string;
  rating: string;
  minSalePrice: null;
  packPrice: string;
  producerName: string;
  templateId: number;
  reviewCount: number;
  categories: {
    id: number;
    name: string;
  }[];
  isAdult: boolean;
};
