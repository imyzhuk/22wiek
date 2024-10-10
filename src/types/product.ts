import { DiscountType, Producer, Product } from '@prisma/client';

export type ProductWithProducer = Omit<
  Product,
  'price' | 'oldPrice' | 'rating'
> & {
  producer: Producer | null;
  price: number;
  oldPrice: number;
  rating: number;
};

export type ExpandedDiscountType = DiscountType | 'All';