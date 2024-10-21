import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/store/cart/cartSlice';
import { productActions } from '@/store/product/productSlice';

const allActions = {
  ...cartActions,
  ...productActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
