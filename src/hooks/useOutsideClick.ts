import { useState, useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
  initialValue: boolean,
) => {
  const [isActive, setIsActive] = useState<boolean>(initialValue);
  const ref = useRef<T | null>(null);

  const handleClick = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      setIsActive((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (!isActive) return;
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isActive]);

  return { ref, isActive, setIsActive };
};
