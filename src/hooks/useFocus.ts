import { useCallback, useEffect, useRef, useState } from 'react';

export const useFocus = <T extends HTMLElement>(): [
  React.MutableRefObject<T | null>,
  boolean,
  () => void,
] => {
  const ref = useRef<T | null>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const toggle = useCallback(() => {
    setIsFocused(!isFocused);
  }, [isFocused]);

  useEffect(() => {
    const element = ref.current;

    element?.addEventListener('focus', toggle);
    element?.addEventListener('blur', toggle);

    return () => {
      element?.removeEventListener('focus', toggle);
      element?.removeEventListener('blur', toggle);
    };
  });

  const setFocus = () => {
    ref.current?.focus();
  };

  return [ref, isFocused, setFocus];
};
