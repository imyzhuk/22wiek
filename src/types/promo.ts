import { DiscountType, Producer } from '@prisma/client';
import { IProductCard } from './product';

export type GetPromotionsParamsType = {
  page: number;
  order: {
    price?: 'desc' | 'asc';
    popularity?: 'desc';
    promoDiscount?: 'desc';
  };
  filters: {
    fromPrice?: number;
    untilPrice?: number;
    discountTypes?: DiscountType[];
    producerIds?: Producer['id'][];
    discount?: number;
  };
};

export type GetPromotionsResponseType = {
  products: IProductCard[];
  count: number;
};

export type GetPromotionsFiltersParamsType = Pick<
  GetPromotionsParamsType['filters'],
  'fromPrice' | 'untilPrice' | 'discountTypes' | 'producerIds' | 'discount'
>;

export type GetPromotionsFiltersResponseType = Required<
  Omit<GetPromotionsFiltersParamsType, 'producerIds' | 'discount'>
>;
