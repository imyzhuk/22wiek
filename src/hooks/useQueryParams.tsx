import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useQueryParams = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQuery = (query: string, value?: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(query, value);
    } else {
      params.delete(query);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return { setQuery };
};
