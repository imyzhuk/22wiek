import { usePathname, useRouter } from 'next/navigation';
import qs from 'qs';

export const useQueryState = () => {
  const router = useRouter();
  const pathname = usePathname();

  const setQuery = (object: Record<string, any>) => {
    const params = qs.stringify(object, { arrayFormat: 'indices' });

    router.push(`${pathname}?${params}`, {
      scroll: false,
    });
  };

  return { setQuery };
};
