import { IProductCard } from '@/types/product';
import React from 'react';

export const usePopularProducts = (
  initialProducts: Omit<IProductCard, 'isInStock'>[],
  elementsInPage: number,
) => {
  const [products, setProducts] = React.useState(initialProducts);
  const [productsPage, setProductsPage] = React.useState<number>(1);

  const showMoreProducts = () => {
    const shownProductsCount = productsPage * elementsInPage;
    if (products.length === shownProductsCount) return;

    setProductsPage((currentProductsPage) => currentProductsPage + 1);
  };

  const setNewProducts = (products: IProductCard[]) => {
    setProducts(products);
    setProductsPage(1);
  };

  let shownProducts = products.slice(0, elementsInPage * productsPage);
  let isAllProductsShown = products.length === shownProducts.length;

  return {
    shownProducts,
    isAllProductsShown,
    showMoreProducts,
    setNewProducts,
  };
};
