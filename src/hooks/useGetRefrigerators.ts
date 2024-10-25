import { GetRefrigeratorsParamsType } from '@/types/refrigerator';
import { useActions } from '.';
import refrigeratorAPI from '@/services/refrigeratorAPI';

export const useGetRefrigerators = () => {
  const { setProducts, setProductsCount, setIsProductsLoading } = useActions();

  const getProducts = async (params?: Partial<GetRefrigeratorsParamsType>) => {
    setIsProductsLoading(true);
    const {
      data: { products, count },
    } = await refrigeratorAPI.getProducts({
      ...params,
    });
    setProducts(products);
    setProductsCount(count);
    setIsProductsLoading(false);
  };

  return {
    getProducts,
  };
};
