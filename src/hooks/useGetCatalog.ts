import { useEffect, useState } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { useActions } from './useActions';
import catalogAPI from '@/services/catalogAPI';

export const useGetCatalog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setCatalog } = useActions();
  const catalog = useTypedSelector((state) => state.catalog.catalog);

  const getCatalog = async () => {
    setIsLoading(true);
    const { data } = await catalogAPI.getCatalog();
    setCatalog(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!catalog.length) {
      getCatalog();
    }
  }, []);

  return {
    isLoading,
    catalog,
  };
};
