import { DependencyList, useEffect } from 'react';

export const useDebounce = (
  fn: () => void,
  delay: number,
  deps: DependencyList,
) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      fn();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, deps);
};
