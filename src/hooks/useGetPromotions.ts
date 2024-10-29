import { useActions } from '.';
import { GetPromotionsParamsType } from '@/types/promo';
import promoAPI from '@/services/promoAPI';

export const useGetPromotions = () => {
  const { setProducts, setProductsCount, setIsProductsLoading } = useActions();

  const getProducts = async (params?: Partial<GetPromotionsParamsType>) => {
    setIsProductsLoading(true);
    const {
      data: { products, count },
    } = await promoAPI.getProducts({
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
