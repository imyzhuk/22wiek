import React, { useEffect, useState } from 'react';
import styles from './BasketSection.module.css';
import { FilterCheckbox, Modal } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/utils';
import GiftIcon from '@icons/giftIcon.svg';
import DeliveryIcon from '@icons/deliveryIcon.svg';
import ArrivalPointIcon from '@icons/arrivalPointIcon.svg';
import BinIcon from '@icons/binIcon.svg';
import HeartIcon from '@icons/heartIcon.svg';
import { Services } from './Services';
import { Adgames } from './Adgames';
import { Promocode } from './Promocode';
import { TotalPrice } from './TotalPrice';
import { ExpandedCartItemWithProduct } from '@/types/cart';
import { useFieldArray, useForm } from 'react-hook-form';
import { useCartInfo, useMediaQuery } from '@/hooks';
import { Counter } from './Counter';
import DeleteButtonLoader from '@icons/deleteButtonLoader.svg';
import { useTypedSelector } from '@/hooks/useTypedSelector';

/* TODO: make a modal with all services*/

const getChosenCartItemIds = (cartItems?: ExpandedCartItemWithProduct[]) => {
  if (!cartItems) {
    return [];
  }
  return cartItems.reduce<number[]>((acc, item) => {
    if (item && item.checked) {
      acc.push(item.backupId!);
    }

    return acc;
  }, []);
};

type BasketSectionProps = {};

export const BasketSection: React.FC<BasketSectionProps> = () => {
  const cartItems = useTypedSelector((state) => state.cart.cartItems);
  const chosenProductsCount = useTypedSelector(
    (state) => state.cart.chosenProductsCount,
  );
  const [deletedItem, setDeletedItem] = useState<{
    index: number | 'all';
  } | null>(null);
  const isMatched = useMediaQuery({ maxWidth: 992 });
  const {
    isLoadingCartInfo,
    cartInfo,
    setCartInfo,
    updateCartInfo,
    changeQuantity,
    deleteItems,
    isDeleting,
  } = useCartInfo();
  const cartDefaultValues: ExpandedCartItemWithProduct[] = cartItems.map(
    (item) => ({
      ...item,
      backupId: item.id,
      checked: true,
    }),
  );
  const { register, watch, setValue, getValues, control } = useForm({
    mode: 'onChange',
    defaultValues: {
      all: true,
      cart: cartDefaultValues,
    },
  });
  const { fields, remove } = useFieldArray({
    control,
    name: 'cart',
  });

  React.useEffect(() => {
    const subscription = watch((formData, { name, type }) => {
      if (type !== 'change' || !name) {
        return;
      }

      if (name === 'all' && formData[name]) {
        formData.cart?.forEach((item, index) => {
          if (!item?.checked) {
            setValue(`cart.${index}.checked`, true);
          }
        });
        updateCartInfo([]);
        return;
      }

      if (name === 'all') {
        fields.forEach((item, index) => {
          setValue(`cart.${index}.checked`, false);
        });
        setCartInfo({
          totalPrice: 0,
          finishedPrice: 0,
          discount: 0,
          totalProductsCount: 0,
        });
        return;
      }

      const chosenCartItems = getChosenCartItemIds(
        formData.cart as ExpandedCartItemWithProduct[],
      );
      if (type === 'change' && chosenCartItems.length) {
        updateCartInfo(chosenCartItems.map((key) => Number(key)));
      }
      const chosenCartItemIndex = Number(name.split('.')[1]);
      const chosenCartItem = formData.cart?.[chosenCartItemIndex];

      if (!chosenCartItem?.checked) {
        if (formData.all) {
          setValue('all', false);
        }
        if (!chosenCartItems.length) {
          setCartInfo({
            totalPrice: 0,
            finishedPrice: 0,
            discount: 0,
            totalProductsCount: 0,
          });
        }
        return;
      }

      if (chosenCartItem?.checked && !formData.all) {
        if (chosenCartItems.length === getValues().cart.length) {
          setValue('all', true);
          return;
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onDelete = async () => {
    if (!deletedItem) {
      return;
    }
    const deletedItemsIndexes = await deleteItems(
      getValues().cart,
      deletedItem.index,
    );
    if (deletedItemsIndexes) {
      remove(deletedItemsIndexes);
    }
    const chosenCartItemsIds = getChosenCartItemIds(getValues().cart);
    if (deletedItem.index !== 'all' && chosenCartItemsIds.length) {
      updateCartInfo(chosenCartItemsIds);
    }
    if (deletedItem.index !== 'all') {
      setCartInfo({
        totalPrice: 0,
        finishedPrice: 0,
        discount: 0,
        totalProductsCount: 0,
      });
    }

    if (chosenCartItemsIds.length === getValues().cart.length) {
      setValue('all', true);
    } else {
      setValue('all', false);
    }
    setDeletedItem(null);
  };

  const onCounterChange = async (productId: number, quantity: number) => {
    await changeQuantity(productId, quantity);
    const chosenCartItemsIds = getChosenCartItemIds(getValues().cart);
    if (chosenCartItemsIds.length) {
      updateCartInfo(chosenCartItemsIds);
    }
  };

  return (
    <div className={styles.section}>
      <Modal isVisible={!!deletedItem} closeModal={() => setDeletedItem(null)}>
        <div className={styles.modalWrapper}>
          <h5 className={styles.modalTitle}>
            {deletedItem?.index === 'all'
              ? 'Удаление товаров'
              : 'Удалить товар'}{' '}
            из корзины
          </h5>
          <div className={styles.modalDescription}>
            Вы уверены, что хотите удалить
            {deletedItem?.index === 'all' ? ' выбранные товары' : ' этот товар'}
            ?
          </div>
          <div className={styles.modalButtons}>
            <button
              className={`${styles.modalButton} ${styles.cancelModalButton}`}
              onClick={() => setDeletedItem(null)}
            >
              Отмена
            </button>
            <button
              className={`${styles.modalButton} ${styles.deleteModalButton}`}
              onClick={onDelete}
            >
              {isDeleting ? <DeleteButtonLoader /> : 'Удалить'}
            </button>
          </div>
        </div>
      </Modal>
      <div className={styles.productsContainer}>
        <div className={styles.firstRow}>
          <FilterCheckbox name="Выбрать все" value="all" register={register} />
          {Boolean(chosenProductsCount) && (
            <button
              type="button"
              className={styles.deleteAllButton}
              onClick={() => setDeletedItem({ index: 'all' })}
            >
              Удалить выбранные
            </button>
          )}
        </div>
        {fields.map(({ id, backupId, quantity, product }, index) => {
          const [intPricePart, decimalPricePart] = formatPrice(
            product.price,
          ).split(',');
          return (
            <div className={styles.product} key={id}>
              <div className={styles.checkboxWrapper}>
                <FilterCheckbox
                  name=""
                  value={`cart.${index}.checked`}
                  register={register}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.topBlock}>
                  <div className={styles.imgContainer}>
                    <Link href={product.link}>
                      <Image
                        src={product.preview}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Link>
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.titleWrapper}>
                      <Link href={product.link} className={styles.title}>
                        {product.name}
                      </Link>
                    </div>
                    {!isMatched && (
                      <Counter
                        quantity={quantity}
                        onChange={(newQuantity) =>
                          onCounterChange(backupId, newQuantity)
                        }
                      />
                    )}
                    <div className={styles.priceBlock}>
                      {Boolean(Number(product.oldPrice)) && (
                        <div className={styles.oldPrice}>
                          {formatPrice(Number(product.oldPrice))} р.
                        </div>
                      )}
                      <div className={styles.price}>
                        {`${intPricePart},`}
                        <span className={styles.priceDecimalPart}>
                          {decimalPricePart} р.
                        </span>
                      </div>
                      {Boolean(product.discountTypes.length) && (
                        <div className={styles.discount}>
                          {product.discountTypes[0] === 'Discount' &&
                            `Скидка ${formatPrice(Number(product.oldPrice) - product.price)} р.`}
                          {product.discountTypes[0] === 'Superprice' &&
                            'Суперцена'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.bottomBlock}>
                  <ul className={styles.details}>
                    {false && (
                      <li className={styles.detail}>
                        <span className={styles.detailName}>Подарок:</span>
                        <Link href={''} className={styles.presentLink}>
                          <GiftIcon className={styles.presentIcon} />
                        </Link>
                      </li>
                    )}
                    <li className={styles.detail}>
                      {!isMatched && (
                        <span className={styles.detailName}>Доставка:</span>
                      )}
                      <span className={styles.detailPart}>
                        <DeliveryIcon className={styles.deliveryIcon} />
                        Курьером завтра
                      </span>
                      <span className={styles.detailPart}>
                        <ArrivalPointIcon className={styles.deliveryIcon} />
                        Самовывоз завтра
                      </span>
                    </li>
                  </ul>
                  {Boolean(product.additionalServices.length) && (
                    <Services items={product.additionalServices} />
                  )}
                  <div className={styles.buttonsWrapper}>
                    <button
                      className={styles.productButton}
                      onClick={() => setDeletedItem({ index })}
                    >
                      <BinIcon /> {!isMatched && 'Удалить'}
                    </button>
                    {isMatched && (
                      <Counter
                        quantity={quantity}
                        onChange={(newQuantity) =>
                          onCounterChange(backupId, newQuantity)
                        }
                      />
                    )}
                    {false && (
                      <button className={styles.productButton}>
                        <HeartIcon /> В избранное
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.rightColumn}>
        <TotalPrice
          isLoading={isLoadingCartInfo}
          totalPrice={cartInfo.totalPrice}
          finishedPrice={cartInfo.finishedPrice}
          discount={cartInfo.discount}
          totalProductsCount={cartInfo.totalProductsCount}
        />
        {Boolean(cartInfo.totalProductsCount) && (
          <>
            <Adgames />
            <Promocode />
          </>
        )}
      </div>
    </div>
  );
};
