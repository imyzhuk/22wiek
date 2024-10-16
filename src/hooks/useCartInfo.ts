import React from 'react';
import cartAPI from '@/services/cartAPI';
import { ExpandedCartItemWithProduct, GetCartInfoResponse } from '@/types/cart';

type DeleteCallbackType = (index?: number | number[]) => void;

const getChosenCartItemIds = (cartItems?: ExpandedCartItemWithProduct[]) => {
  if (!cartItems) {
    return [];
  }
  return cartItems.reduce<number[]>((acc, item) => {
    if (item && item.checked) {
      acc.push(item.backupId!);
    }

    return acc;
  }, []);
};

export const useCartInfo = (
  initialCartInfo: GetCartInfoResponse,
  setCartItemsCountForTabs: (count: number) => void,
) => {
  const [totalPrice, setTotalPrice] = React.useState(
    initialCartInfo.totalPrice,
  );
  const [finishedPrice, setFinishedPrice] = React.useState(
    initialCartInfo.finishedPrice,
  );
  const [discount, setDiscount] = React.useState(initialCartInfo.discount);
  const [totalProductsCount, setTotalProductsCount] = React.useState(
    initialCartInfo.totalProductsCount,
  );
  const [isLoadingCartInfo, setIsLoadingCartInfo] =
    React.useState<boolean>(false);
  const [isDeleting, setIsDeleting] = React.useState<boolean>(false);

  const setCartInfo = (cartInfo: GetCartInfoResponse) => {
    setTotalPrice(cartInfo.totalPrice);
    setFinishedPrice(cartInfo.finishedPrice);
    setDiscount(cartInfo.discount);
    setTotalProductsCount(cartInfo.totalProductsCount);
    setCartItemsCountForTabs(cartInfo.totalProductsCount);
  };

  const updateCartInfo = async (cartItemIds: number[]) => {
    setIsLoadingCartInfo(true);
    try {
      const { data } = await cartAPI.getInfo(cartItemIds);
      setCartInfo(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoadingCartInfo(false);
  };

  const changeQuantity = async (cartItemId: number, newQuantity: number) => {
    setIsLoadingCartInfo(true);
    try {
      await cartAPI.changeQuantity(cartItemId, newQuantity);
    } catch (error) {
      console.log(error);
    }
    setIsLoadingCartInfo(false);
  };

  const deleteChosenItems = async (
    cartItems: ExpandedCartItemWithProduct[],
  ) => {
    const removingElementsIndexes: number[] = [];
    const itemIds = cartItems.reduce<number[]>((acc, item, index) => {
      if (item.checked) {
        acc.push(item.backupId);
        removingElementsIndexes.push(index);
      }
      return acc;
    }, []);
    try {
      setIsDeleting(true);
      await cartAPI.deleteMany(itemIds);
      setCartInfo({
        discount: 0,
        finishedPrice: 0,
        totalPrice: 0,
        totalProductsCount: 0,
      });
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setIsDeleting(false);
    }
    return removingElementsIndexes;
  };

  const deleteChosenItem = async (
    cartItems: ExpandedCartItemWithProduct[],
    index: number,
  ) => {
    const deletedItem = cartItems[index];
    try {
      setIsDeleting(true);
      await cartAPI.deleteMany([deletedItem.backupId]);
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setIsDeleting(false);
    }
    return [index];
  };

  const deleteItems = async (
    cartItems: ExpandedCartItemWithProduct[],
    index: number | 'all',
  ) => {
    let deletedItemsIndexes;
    if (index === 'all') {
      deletedItemsIndexes = await deleteChosenItems(cartItems);
      return deletedItemsIndexes || null;
    }

    deletedItemsIndexes = await deleteChosenItem(cartItems, index);
    return deletedItemsIndexes || null;
  };

  const cartInfo = {
    totalPrice,
    finishedPrice,
    discount,
    totalProductsCount,
  };
  return {
    cartInfo,
    setCartInfo,
    updateCartInfo,
    changeQuantity,
    deleteItems,
    isLoadingCartInfo,
    isDeleting,
  };
};
