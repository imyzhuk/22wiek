import { CartItem } from '@prisma/client';
import { IProductCard } from './product';

export type IAdditionalService = {
  name: string;
  id: number;
  link: string | null;
  price: number;
  description: string;
  priceCurrency: string;
  categoryId: number;
};

export type CartItemWithProduct = CartItem & {
  product: Omit<IProductCard, 'oldPrice'> & {
    oldPrice: string;
    additionalServices: IAdditionalService[];
  };
};

export type GetCartInfoResponse = {
  finishedPrice: number;
  totalPrice: number;
  totalProductsCount: number;
  discount: number;
};

export type ExpandedCartItemWithProduct = CartItemWithProduct & {
  backupId: number;
  checked: boolean;
};
