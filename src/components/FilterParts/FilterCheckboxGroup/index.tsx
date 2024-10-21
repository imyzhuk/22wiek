'use client';
import React from 'react';
import styles from './FilterCheckboxGroup.module.css';
import { FilterCheckbox } from '..';

type FilterCheckboxGroupProps = {
  options: { name: string; value: string }[];
  name: string;
  className?: string;
};

export const FilterCheckboxGroup: React.FC<FilterCheckboxGroupProps> = ({
  options,
  name,
  className,
}) => {
  return (
    <ul className={className || ''}>
      {options.map((option) => (
        <FilterCheckbox
          name={option.name}
          value={option.value}
          key={option.value}
        />
      ))}
    </ul>
  );
};
