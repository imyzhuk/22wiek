'use client';
import React, { useEffect, useState } from 'react';
import styles from './Filters.module.css';
import {
  FilterCheckboxGroup,
  FilterItem,
  FilterResetButton,
  FixedRangeFilter,
  Popover,
  ProducersFilter,
  RangeFilter,
  SortFilter,
} from '@/components';
import { Option } from '@/types/optionsModel';
import refrigeratorAPI from '@/services/refrigeratorAPI';
import { useActions } from '@/hooks';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { productsOnPage } from '@/data/product';

const sortOptions: Option[] = [
  { name: 'Популярные', value: 'popular' },
  { name: 'Дешевые', value: 'cheap' },
  { name: 'Дорогие', value: 'expensive' },
  { name: 'Выгодные', value: 'profitable' },
];

const discountTypes: Option[] = [
  {
    name: 'Товары со скидкой',
    value: 'discounts',
  },
  {
    name: 'Суперцена',
    value: 'superprice',
  },
  {
    name: 'Уцененные товары',
    value: 'sale',
  },
];

const typeOptions: Option[] = [
  { name: 'холодильник с морозильником', value: 'with_freezer' },
  { name: 'холодильник без морозильника', value: 'without_freezer' },
  { name: 'торговый холодильник', value: 'trade' },
];

const constructionOptions: Option[] = [
  { name: 'side-by-side', value: 'sideBySide' },
  { name: 'однодверный', value: 'oneDoor:' },
  { name: 'двухдверный', value: 'twoDoor' },
  { name: 'четырехдверный', value: 'fourDoor' },
  { name: 'french door', value: 'frenchDoor' },
];

const { format } = new Intl.NumberFormat('ru', {
  minimumFractionDigits: 2,
});

type FiltersProps = {};

export const Filters: React.FC<FiltersProps> = () => {
  const { setProducts, setProductsCount, setIsProductsLoading } = useActions();
  const page = useTypedSelector((state) => state.product.page);
  useEffect(() => {
    const getProducts = async () => {
      setIsProductsLoading(true);
      const {
        data: { products, count },
      } = await refrigeratorAPI.getProducts(page);
      setProducts(products);
      setProductsCount(count);
      setIsProductsLoading(false);
    };
    getProducts();
  }, [page]);
  return (
    <aside>
      <FilterItem title="Сортировка" hasBottomBorder>
        <SortFilter options={sortOptions} />
      </FilterItem>
      <FilterItem title="Цена" hasBottomBorder>
        <RangeFilter
          unit="р."
          fromValuePlaceholder={format(420)}
          untilValuePlaceholder={format(10760)}
        />
      </FilterItem>
      <FilterItem title="Производитель" hasBottomBorder>
        <ProducersFilter />
      </FilterItem>
      <FilterItem title="Спецпредложения" hasBottomBorder>
        <FilterCheckboxGroup name="discount" options={discountTypes} />
      </FilterItem>
      <FilterItem
        title="Тип"
        hasBottomBorder
        popover={
          <Popover
            popoverClassName={styles.popover}
            title="Тип"
            body={
              <>
                <p>
                  <strong>Холодильник без морозильника</strong> представляет
                  собой одну холодильную камеру, где поддерживается температура
                  для хранения продуктов в диапазоне примерно от +2 до +14°С.
                  Такие модели чаще всего используется для дачи или в комбинации
                  с отдельными морозильниками.
                </p>
                <p>
                  <strong>Холодильник с морозильником</strong> — универсальный,
                  наиболее привычный и распространенный тип, который включает в
                  себя камеру для хранения продуктов при низкой плюсовой
                  температуре, так и камеру для заморозки продуктов и хранения
                  их в замороженном виде (при температуре до -24°С).
                </p>
                <p>
                  <strong>Винный кулер</strong> — это устройство, которое
                  охлаждает бутылку до нужной температуры для подачи её к столу,
                  а также поддерживает необходимую температуру напитка после
                  открытия бутылки.
                </p>
              </>
            }
          />
        }
      >
        <FilterCheckboxGroup name="type" options={typeOptions} />
      </FilterItem>
      <FilterItem
        title="Конструкция"
        hasBottomBorder
        popover={
          <Popover
            popoverClassName={styles.popover}
            title="Конструкция"
            body={
              <>
                <p>
                  <strong>Однодверный холодильник</strong> – самая простая
                  конструкция холодильника с одной дверью. Но не очень
                  практичная в случае с комбинированными моделями, так как
                  морозильная камера отделена от холодильника обычно лишь
                  пластиковой дверцей. И при открывании двери в морозильнике
                  может повышаться температура, что приводит к необходимости
                  чаще его размораживать.
                </p>
                <p>
                  В <strong>двухдверном варианте</strong> конструкции
                  холодильная и морозильная камеры располагаются независимо друг
                  от друга.
                </p>
                <p>
                  <strong>Side-by-side</strong> – конструкция холодильника с
                  распашными дверьми, при этом может быть двух- или
                  четырехдверной. Варианты расположения камер с такой
                  конструкцией: холодильное и морозильные отделения сбоку друг
                  от друга или морозильная камера внизу. Такие холодильники
                  отличаются большой вместимостью, практичностью, стильным
                  внешним видом, но они достаточно габаритны и занимают много
                  пространства на кухне.
                </p>
                <p>
                  Конструкция типа <strong>French door</strong> или «французская
                  дверь» представляет собой верхнюю холодильную камеру с
                  распашными дверьми, а морозильное отделение – в виде выдвижных
                  ящиков, число которых варьируется от одного до 4.
                </p>
              </>
            }
          />
        }
      >
        <FilterCheckboxGroup
          name="construction"
          options={constructionOptions}
        />
      </FilterItem>
      <FilterItem title="Высота" hasBottomBorder>
        <RangeFilter unit="см" />
      </FilterItem>
      <FilterItem
        title="Количество отделений морозильной камеры"
        hasBottomBorder
      >
        <FixedRangeFilter options={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </FilterItem>
      <FilterResetButton />
    </aside>
  );
};
