'use client';

import React, { useState } from 'react';
import styles from './LocalityModal.module.css';
import {
  FilterDropdown,
  FilterDropdownRadioButton,
  Input,
  Modal,
  ScrollContainer,
} from '@/components';
import Image from 'next/image';
import LocationImg from '@images/location.png';
import { locations as initialLocations } from '@/data/locations';
import { Location } from '@/types/locationModel';
import ErrorInfoIcon from '@icons/errorInfo.svg';
import { useFocus } from '@/hooks';

type LocalityModalProps = {
  closeModal: () => void;
  currentLocation: Location;
  setCurrentLocation: (location: Location) => void;
};

export const LocalityModal: React.FC<LocalityModalProps> = ({
  closeModal,
  currentLocation,
  setCurrentLocation,
}) => {
  const [locations, setLocations] = useState<Location[]>(initialLocations);
  const [searchValue, setSearchValue] = useState<string>(
    `${currentLocation.type}. ${currentLocation.name}`,
  );
  const [activeLocation, setActiveLocation] =
    useState<Location>(currentLocation);
  const [isLocationSelected, setIsLocationSelected] = useState<boolean>(true);
  const [inputRef, isInputFocused, setInputFocus] =
    useFocus<HTMLInputElement>();

  const handleLocationClick = (location: Location) => {
    setIsLocationSelected(true);
    setSearchValue(`${location.type}. ${location.name}`);
    if (location.id !== activeLocation.id) {
      setActiveLocation(location);
    }
  };

  const saveLocation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (`${activeLocation.type}. ${activeLocation.name}` !== searchValue) {
      return;
    }
    if (activeLocation.id !== currentLocation.id) {
      localStorage.setItem('location', JSON.stringify(activeLocation));
      setCurrentLocation(activeLocation);
    }
    closeModal();
  };
  const handleSearchChange = (value: string) => {
    setIsLocationSelected(false);
    setSearchValue(value);
    setLocations(
      initialLocations.filter((location) =>
        `${location.type}. ${location.name}`
          .toLowerCase()
          .includes(value.toLowerCase()),
      ),
    );
  };

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.imgContainer}>
        <Image src={LocationImg} alt="Населенный пункт" />
      </div>
      <form>
        <h5 className={styles.title}>Населенный пункт</h5>
        <p className={styles.desc}>
          Вам будут показаны товары, а также условия доставки для выбранного
          населенного пункта. Если пункт не найден, уточните запрос введя район
          или сельсовет.
        </p>
        <FilterDropdown
          triggerElement={
            <div className={styles.triggerContainer}>
              <Input
                label="Населенный пункт"
                value={searchValue}
                onChange={handleSearchChange}
                onClear={() => {
                  handleSearchChange('');
                  setInputFocus();
                }}
                ref={inputRef}
                hasError={!(isLocationSelected || isInputFocused)}
              />
              <span
                className={`${styles.errorMessage} ${!(isLocationSelected || isInputFocused) ? styles.visible : ''}`}
              >
                <ErrorInfoIcon className={styles.errorIcon} />
                Выберите населенный пункт из списка
              </span>
            </div>
          }
          canCloseIfClickInsideMenu
        >
          <div className={styles.locations} role="listbox">
            <ScrollContainer
              maxHeight="90px"
              thumbWidth="thin"
              thumbColor="lighter"
              hoverColor="light"
            >
              {locations.map((location) => {
                const label = `${location.type}. ${location.name}`;
                const highlightedPartStartIndex = label
                  .toLowerCase()
                  .indexOf(searchValue.toLowerCase());
                const labelElement = (
                  <span>
                    {label.slice(0, highlightedPartStartIndex)}
                    {searchValue && (
                      <span className={styles.highlight}>
                        {label.slice(
                          highlightedPartStartIndex,
                          highlightedPartStartIndex + searchValue.length,
                        )}
                      </span>
                    )}
                    {label.slice(
                      highlightedPartStartIndex + searchValue.length,
                    )}
                  </span>
                );
                return (
                  <FilterDropdownRadioButton
                    key={location.id}
                    label={isLocationSelected ? label : labelElement}
                    isActive={
                      isLocationSelected && location.id === activeLocation.id
                    }
                    onClick={() => handleLocationClick(location)}
                  />
                );
              })}
            </ScrollContainer>
          </div>
        </FilterDropdown>
        <button
          type="button"
          className={styles.saveButton}
          onClick={saveLocation}
          disabled={!isLocationSelected}
        >
          Сохранить
        </button>
      </form>
    </Modal>
  );
};
