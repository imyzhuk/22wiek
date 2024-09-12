import { useEffect, useRef, useState } from 'react';

export const useOffsetLeft = <T extends HTMLElement>(): [
  React.RefObject<T>,
  number,
] => {
  const ref = useRef<T | null>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      setOffsetLeft(element.offsetLeft);
      console.log(element);
      console.log(element.offsetLeft);
    }
  }, []);

  return [ref, offsetLeft];
};
