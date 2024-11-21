'use client';

import React, { use, useEffect, useState } from 'react';
import styles from './LocalityModalContent.module.css';
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
import { useFocus, useLocation } from '@/hooks';

type LocalityModalContentProps = {
  closeModal: () => void;
};

export const LocalityModalContent: React.FC<LocalityModalContentProps> = ({
  closeModal,
}) => {
  const { location: currentLocation, saveLocation } = useLocation();
  const [locations, setLocations] = useState<Location[]>(initialLocations);
  const [searchValue, setSearchValue] = useState<string>(
    `${currentLocation.type}. ${currentLocation.name}`,
  );
  const [activeLocation, setActiveLocation] =
    useState<Location>(currentLocation);
  const [isLocationSelected, setIsLocationSelected] = useState<boolean>(true);
  const [inputRef, isInputFocused, setInputFocus] =
    useFocus<HTMLInputElement>();

  useEffect(() => {
    setSearchValue(`${currentLocation.type}. ${currentLocation.name}`);
    setActiveLocation(currentLocation);
  }, [currentLocation]);

  const handleLocationClick = (location: Location) => {
    setIsLocationSelected(true);
    setSearchValue(`${location.type}. ${location.name}`);
    if (location.id !== activeLocation.id) {
      setActiveLocation(location);
    }
  };

  const save = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (`${activeLocation.type}. ${activeLocation.name}` !== searchValue) {
      return;
    }
    if (activeLocation.id !== currentLocation.id) {
      saveLocation(activeLocation);
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
    <>
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
          onClick={save}
          disabled={
            !isLocationSelected || currentLocation.id === activeLocation.id
          }
        >
          Сохранить
        </button>
      </form>
    </>
  );
};
