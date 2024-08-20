export type ProductCardType = {
  id: number;
  discount?: number;
  productImg: string;
  title: string;
  currentPrice: string;
  oldPrice?: string;
  type: string;
  productLink: string;
  discountType?: string;
};
