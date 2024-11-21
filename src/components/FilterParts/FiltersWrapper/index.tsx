'use client';
import React from 'react';
import { GetPromotionsParamsType } from '@/types/promo';
import { useMediaQuery } from '@/hooks';
import { Filters } from '../../../app/(home)/(product)/special_offers/promo/_components/Filters';
import { FiltersButtons, Modal } from '@/components';

type FiltersWrapperProps = {
  children: React.ReactNode;
};

export const FiltersWrapper: React.FC<FiltersWrapperProps> = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 992 });
  const [isVisible, setIsVisible] = React.useState(false);
  return isTablet ? (
    <>
      <FiltersButtons onFiltersButtonClick={() => setIsVisible(true)} />
      <Modal isVisible={isVisible} closeModal={() => setIsVisible(false)}>
        {children}
      </Modal>
    </>
  ) : (
    children
  );
};
