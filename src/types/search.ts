import { Category } from '@prisma/client';

export type SearchResponse = {
  categories: Omit<Category, 'parentId'>[];
  products: {
    id: number;
    name: string;
    link: string;
    preview: string;
    price: number;
  }[];
};
