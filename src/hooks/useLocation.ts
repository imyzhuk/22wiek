import { Location } from '@/types/locationModel';
import { useEffect } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { useActions } from './useActions';

export const useLocation = () => {
  const location = useTypedSelector((state) => state.profile.location);
  const { setLocation } = useActions();

  useEffect(() => {
    if (localStorage.getItem('location')) {
      const locationFromLocalStorage = localStorage.getItem('location');
      setLocation(JSON.parse(locationFromLocalStorage as string));
    } else {
      localStorage.setItem('location', JSON.stringify(location));
    }
  }, []);

  const saveLocation = (newLocation: Location) => {
    localStorage.setItem('location', JSON.stringify(newLocation));
    setLocation(newLocation);
  };

  return {
    location,
    saveLocation,
  };
};
