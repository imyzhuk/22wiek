import React from 'react';
import styles from './MobileCatalogModal.module.css';
import { Modal } from '@/components/Modal';
import { useGetCatalog } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import ArrowUpIcon from '@icons/arrowUpIcon.svg';
import { Loader } from '@/components/Loader';

const NOT_INDEX = -1;

type MobileCatalogModalProps = {
  isVisible: boolean;
  closeModal: () => void;
};

export const MobileCatalogModal: React.FC<MobileCatalogModalProps> = ({
  closeModal,
  isVisible,
}) => {
  const { isLoading, catalog } = useGetCatalog();
  const [activeCategoryIndex, setActiveCategoryIndex] =
    React.useState<number>(NOT_INDEX);
  const [activeSubcategoryIndex, setActiveSubcategoryIndex] =
    React.useState<number>(NOT_INDEX);

  const onClose = () => {
    setActiveCategoryIndex(NOT_INDEX);
    setActiveSubcategoryIndex(NOT_INDEX);
    closeModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      closeModal={onClose}
      onBackButtonClick={
        activeSubcategoryIndex !== NOT_INDEX
          ? () => setActiveSubcategoryIndex(NOT_INDEX)
          : activeCategoryIndex !== NOT_INDEX
            ? () => setActiveCategoryIndex(NOT_INDEX)
            : undefined
      }
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          {activeCategoryIndex === NOT_INDEX && (
            <>
              <h6 className={styles.title}>Каталог товаров</h6>
              <ul className={styles.list}>
                {catalog.map((category, idx) => (
                  <li key={category.id}>
                    <button onClick={() => setActiveCategoryIndex(idx)}>
                      <span className={styles.imgWrapper}>
                        <span className={styles.imgContainer}>
                          <Image
                            src={'/images/kitchen.png'}
                            alt={category.name}
                            fill
                            className={styles.img}
                          />
                        </span>
                      </span>
                      <span className={styles.categoryName}>
                        {category.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
          {activeCategoryIndex !== NOT_INDEX &&
            activeSubcategoryIndex === NOT_INDEX && (
              <>
                <h6 className={styles.subcategoryTitle}>
                  {catalog[activeCategoryIndex].name}
                </h6>
                <div className={styles.selectionsWrapper}>
                  <div className={styles.selectionsTitle}>Подборки</div>
                  <ul className={styles.selections}>
                    {catalog[activeCategoryIndex].compilations.map(
                      (compilation) => (
                        <li key={compilation.id} className={styles.selection}>
                          <Link
                            href={compilation.link}
                            onClick={onClose}
                            className={styles.selectionLink}
                          >
                            <span className={styles.selectionImage}>
                              <Image
                                src={compilation.image}
                                alt={compilation.name}
                                fill
                                style={{ objectFit: 'contain' }}
                              />
                            </span>
                            <span className={styles.selectionName}>
                              {compilation.name}
                            </span>
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <ul className={styles.subcategories}>
                  {catalog[activeCategoryIndex].subcategories.map(
                    (subcategory, index) => (
                      <li
                        key={subcategory.id}
                        className={styles.subcategory}
                        onClick={() => setActiveSubcategoryIndex(index)}
                      >
                        <button className={styles.subcategoryButton}>
                          <span>{subcategory.name}</span>
                          <span className={styles.arrow}>
                            <ArrowUpIcon />
                          </span>
                        </button>
                      </li>
                    ),
                  )}
                </ul>
              </>
            )}
          {activeSubcategoryIndex !== NOT_INDEX && (
            <>
              <h6 className={styles.subcategoryTitle}>
                {
                  catalog[activeCategoryIndex].subcategories[
                    activeSubcategoryIndex
                  ].name
                }
              </h6>
              <ul className={styles.subcategories}>
                {catalog[activeCategoryIndex].subcategories[
                  activeSubcategoryIndex
                ].subcategories.map((item) => (
                  <li key={item.id} className={styles.subcategory}>
                    <Link
                      href={item.link}
                      onClick={onClose}
                      className={styles.subcategoryButton}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </Modal>
  );
};
