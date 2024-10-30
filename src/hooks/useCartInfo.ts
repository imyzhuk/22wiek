import React from 'react';
import cartAPI from '@/services/cartAPI';
import { ExpandedCartItemWithProduct, GetCartInfoResponse } from '@/types/cart';
import { useTypedSelector } from './useTypedSelector';
import { useActions } from '.';

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

export const useCartInfo = () => {
  const totalPrice = useTypedSelector((state) => state.cart.totalPrice);
  const finishedPrice = useTypedSelector((state) => state.cart.finishedPrice);
  const discount = useTypedSelector((state) => state.cart.discount);
  const totalProductsCount = useTypedSelector(
    (state) => state.cart.chosenProductsCount,
  );
  const { setCartInfo, setCartItemsCount, removeCartProductIds } = useActions();

  const [isLoadingCartInfo, setIsLoadingCartInfo] =
    React.useState<boolean>(false);
  const [isDeleting, setIsDeleting] = React.useState<boolean>(false);

  const updateCartInfo = async (cartItemIds: number[]) => {
    setIsLoadingCartInfo(true);
    try {
      const { data } = await cartAPI.getInfo(cartItemIds);
      setCartInfo(data);
    } catch (error) {}
    setIsLoadingCartInfo(false);
  };

  const changeQuantity = async (cartItemId: number, newQuantity: number) => {
    setIsLoadingCartInfo(true);
    try {
      const { data } = await cartAPI.changeQuantity(cartItemId, newQuantity);
      setCartItemsCount(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoadingCartInfo(false);
  };

  const deleteChosenItems = async (
    cartItems: ExpandedCartItemWithProduct[],
  ) => {
    const removingElementsIndexes: number[] = [];
    const removingProductIds: number[] = [];
    const itemIds = cartItems.reduce<number[]>((acc, item, index) => {
      if (item.checked) {
        acc.push(item.backupId);
        removingElementsIndexes.push(index);
        removingProductIds.push(item.product.id);
      }
      return acc;
    }, []);
    try {
      setIsDeleting(true);
      const {
        data: { quantity },
      } = await cartAPI.deleteMany(itemIds);
      setCartItemsCount({
        newQuantity: quantity,
      });
      setCartInfo({
        discount: 0,
        finishedPrice: 0,
        totalPrice: 0,
        totalProductsCount: 0,
      });
      removeCartProductIds(removingProductIds);
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
      const {
        data: { quantity },
      } = await cartAPI.deleteMany([deletedItem.backupId]);
      setCartItemsCount({
        newQuantity: quantity,
      });
      removeCartProductIds([deletedItem.product.id]);
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
