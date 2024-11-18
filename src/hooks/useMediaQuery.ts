import { useLayoutEffect, useState } from 'react';

type MediaQuery = {
  maxWidth: number;
};

export const useMediaQuery = (query: MediaQuery): boolean => {
  const [matched, setMatched] = useState<boolean>(false);

  useLayoutEffect(() => {
    const isMaxWidthMatched = window.innerWidth <= query.maxWidth;
    if (isMaxWidthMatched) {
      setMatched(true);
    } else {
      setMatched(false);
    }
  }, []);

  return matched;
};
