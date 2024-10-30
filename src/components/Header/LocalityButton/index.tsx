'use client';

import React, { useEffect, useState } from 'react';
import styles from './LocalityButton.module.css';
import LocalityIcon from '@icons/localityIcon.svg';
import { locations as initialLocations } from '@/data/locations';
import { Location } from '@/types/locationModel';
import { LocalityModal } from './LocalityModal';

const initialLocation = initialLocations[0];
type LocalityButtonProps = {};

export const LocalityButton: React.FC<LocalityButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    if (localStorage.getItem('location')) {
      const locationFromLocalStorage = localStorage.getItem('location');
      setLocation(JSON.parse(locationFromLocalStorage as string));
    } else {
      localStorage.setItem('location', JSON.stringify(initialLocation));
      setLocation(initialLocation);
    }
  }, []);

  return (
    <>
      <button
        type="button"
        className={styles.localityButton}
        onClick={() => setIsOpen(true)}
      >
        <LocalityIcon />
        {location && (
          <span>
            {location.type}. {location.name}
          </span>
        )}
      </button>
      {isOpen && location && (
        <LocalityModal
          closeModal={() => setIsOpen(false)}
          setCurrentLocation={setLocation}
          currentLocation={location}
        />
      )}
    </>
  );
};
