import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/cart/cartSlice';
import { productActions } from '@/store/product/productSlice';
import { catalogActions } from '@/store/catalog/catalogSlice';

const allActions = {
  ...cartActions,
  ...productActions,
  ...catalogActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
