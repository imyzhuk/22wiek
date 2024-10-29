import { Category, Compilation, Producer } from '@prisma/client';
import { IProductCard } from './product';

type GetCatalogItemType = Omit<Category, 'parentId'> & {
  compilations: Compilation[];
  producers: Producer[];
  subcategories: Array<Category & { subcategories: Category[] }>;
};

export type GetCatalogType = GetCatalogItemType[];

export type GetPromoProductsType = IProductCard[];

export type GetPopularProductsType = Omit<IProductCard, 'isInStock'>[];
