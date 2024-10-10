import { DiscountType } from '@prisma/client';

export type IProductCard = {
  id: number;
  name: string;
  link: string;
  preview: string;
  discount: number;
  discountTypes: DiscountType[];
  price: number;
  oldPrice: number;
  isInStock: boolean;
};

export type ExpandedDiscountType = DiscountType | 'All';
