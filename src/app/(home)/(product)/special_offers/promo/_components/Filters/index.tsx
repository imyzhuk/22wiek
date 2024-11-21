'use client';
import React, { useEffect, useState } from 'react';
import styles from './Filters.module.css';
import {
  FilterCheckbox,
  FilterItem,
  FilterRadioGroup,
  FilterResetButton,
  ProducersFilter,
  RangeFilter,
  SortFilter,
} from '@/components';
import { Option } from '@/types/optionsModel';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { DiscountType, Producer } from '@prisma/client';
import { useActions, useQueryState, useGetPromotions } from '@/hooks';
import { RecursivePartial } from '@/types/utils';
import promoAPI from '@/services/promoAPI';
import {
  GetPromotionsFiltersParamsType,
  GetPromotionsParamsType,
} from '@/types/promo';
import producerAPI from '@/services/producerAPI';

const sortOptions: Option[] = [
  { name: 'Популярные', value: 'popular' },
  { name: 'Дешевые', value: 'cheap' },
  { name: 'Дорогие', value: 'expensive' },
  { name: 'Выгодные', value: 'profitable' },
];

const discountTypesOptions: {
  name: string;
  value: DiscountType;
  checked: boolean;
}[] = [
  {
    name: 'Товары со скидкой',
    value: 'Discount',
    checked: false,
  },
  {
    name: 'Суперцена',
    value: 'Superprice',
    checked: false,
  },
  {
    name: 'Уцененные товары',
    value: 'Sale',
    checked: false,
  },
];

const discounts = [
  { name: 'Все', value: 'all' },
  { name: 'от 50%', value: '50' },
  { name: 'от 40%', value: '40' },
  { name: 'от 30%', value: '30' },
  { name: 'от 20%', value: '20' },
  { name: 'от 10%', value: '10' },
];

type FiltersProps = {
  initialSearchParams: Partial<GetPromotionsParamsType>;
};

/*TODO: Create categories filter*/

export const Filters: React.FC<FiltersProps> = ({ initialSearchParams }) => {
  const page = useTypedSelector((state) => state.product.page);
  const { setPage, resetProductsStore } = useActions();
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const { getProducts } = useGetPromotions();
  const { setQuery } = useQueryState();
  const [init, setInit] = useState<number>(0);

  const defaultValues = {
    page: page,
    order: sortOptions[0],
    price: {
      fromValue: undefined as number | undefined,
      untilValue: undefined as number | undefined,
    },
    discountTypes: discountTypesOptions,
    producers: [] as (Producer & { checked: boolean })[],
    discount: discounts[0].value as (typeof discounts)[number]['value'],
  };

  const { setValue, getValues, control, watch, register, reset } = useForm({
    defaultValues,
  });

  const {
    fields: discountTypesFields,
    append: discountTypesAppend,
    remove: discountTypesRemove,
  } = useFieldArray({ control, name: 'discountTypes' });
  const { fields: producersFields } = useFieldArray({
    control,
    name: 'producers',
  });

  const getFilters = async (params?: GetPromotionsFiltersParamsType) => {
    const { data } = await promoAPI.getFilters({ ...params });
    setMinPrice(data.fromPrice);
    setMaxPrice(data.untilPrice);
    const formValues = getValues();
    if (
      formValues.price.fromValue &&
      formValues.price.fromValue < data.fromPrice
    ) {
      setValue('price', {
        fromValue: data.fromPrice,
        untilValue: formValues.price.untilValue,
      });
    }
    if (
      formValues.price.untilValue &&
      formValues.price.untilValue > data.untilPrice
    ) {
      setValue('price', {
        fromValue: formValues.price.fromValue,
        untilValue: data.untilPrice,
      });
    }

    const removedDiscountTypesIdx: number[] = [];
    formValues.discountTypes.forEach((discountType, discountTypeIndex) => {
      const matchingElementIdx = data.discountTypes.findIndex(
        (dataDiscountType) => dataDiscountType === discountType.value,
      );
      if (matchingElementIdx === -1) {
        removedDiscountTypesIdx.push(discountTypeIndex);
      } else {
        data.discountTypes.splice(matchingElementIdx, 1);
      }
    });

    discountTypesRemove(removedDiscountTypesIdx);
    discountTypesAppend(
      discountTypesOptions.filter((discountType) => {
        return data.discountTypes.includes(discountType.value);
      }),
    );
  };

  const prepareFormValuesForRequest = (
    formData: RecursivePartial<typeof defaultValues>,
  ) => {
    const order: GetPromotionsParamsType['order'] = {};
    const filters: GetPromotionsParamsType['filters'] = {};

    switch (formData.order?.value) {
      case sortOptions[0].value:
        order.popularity = 'desc';
        break;
      case sortOptions[1].value:
        order.price = 'asc';
        break;
      case sortOptions[2].value:
        order.price = 'desc';
        break;
      case sortOptions[3].value:
        order.promoDiscount = 'desc';
        break;
    }
    filters.fromPrice = formData.price?.fromValue;
    filters.untilPrice = formData.price?.untilValue;
    filters.discount = Number(formData.discount) || undefined;

    filters.discountTypes = formData.discountTypes?.reduce(
      (acc, discountType) => {
        if (discountType?.value && discountType?.checked) {
          acc.push(discountType.value);
        }
        return acc;
      },
      [] as DiscountType[],
    );
    filters.producerIds = formData.producers?.reduce(
      (acc, producer) => {
        if (producer?.id && producer?.checked) {
          acc.push(producer.id);
        }
        return acc;
      },
      [] as Producer['id'][],
    );

    return {
      filters,
      order,
      page: formData.page || 1,
    };
  };

  useEffect(() => {
    const subscription = watch((formData, { name, type }) => {
      if (name && name !== 'page' && !type) {
        return;
      }

      const { filters, order, page } = prepareFormValuesForRequest(formData);
      if (name === 'page') {
        setQuery({ filters, order, page });
        getProducts({ order, filters, page });
        return;
      }
      setPage(1);
      setQuery({ filters, order, page });
      getProducts({ order, filters, page });
      getFilters(filters);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (init !== 2) {
      setInit((prev) => prev + 1);
      return;
    }
    setValue('page', page);
  }, [page]);

  useEffect(() => {
    const params = {
      page: initialSearchParams.page ? Number(initialSearchParams.page) : 1,
      order: initialSearchParams.order,
      filters: {
        ...initialSearchParams.filters,
        producerIds: initialSearchParams.filters?.producerIds?.map(Number),
        fromPrice: Number(initialSearchParams.filters?.fromPrice) || undefined,
        untilPrice:
          Number(initialSearchParams.filters?.untilPrice) || undefined,
        discount: Number(initialSearchParams.filters?.discount) || undefined,
      },
    };

    setPage(params.page);

    if (params.order) {
      if (params.order.popularity) {
        setValue('order', sortOptions[0]);
      } else if (params.order.price && params.order.price === 'asc') {
        setValue('order', sortOptions[1]);
      } else if (params.order.price && params.order.price === 'desc') {
        setValue('order', sortOptions[2]);
      } else if (params.order.promoDiscount) {
        setValue('order', sortOptions[3]);
      }
    }
    setValue('price', {
      fromValue: params.filters.fromPrice,
      untilValue: params.filters.untilPrice,
    });

    setValue(
      'discount',
      params.filters.discount ? String(params.filters.discount) : 'all',
    );

    setValue(
      'discountTypes',
      discountTypesOptions.map((discountTypeOption) => ({
        ...discountTypeOption,
        checked:
          params.filters.discountTypes?.includes(discountTypeOption.value) ||
          false,
      })),
    );

    const getProducers = async () => {
      const { data } = await producerAPI.getProducers();
      setValue(
        'producers',
        data.map((producer) => ({
          ...producer,
          checked: params.filters.producerIds?.includes(producer.id) || false,
        })),
      );
    };

    getProducts(params);
    getProducers();
    getFilters(params.filters);

    return () => {
      resetProductsStore();
    };
  }, []);

  return (
    <aside className={styles.wrapper}>
      <FilterItem title="Сортировка" hasBottomBorder>
        <Controller
          name="order"
          control={control}
          render={({ field }) => (
            <SortFilter
              options={sortOptions}
              activeOption={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FilterItem>
      <FilterItem title="Скидка" hasBottomBorder>
        <FilterRadioGroup
          register={register}
          name="discount"
          options={discounts}
        />
      </FilterItem>
      <FilterItem title="Цена" hasBottomBorder>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <RangeFilter
              unit="р."
              maxPrice={maxPrice}
              minPrice={minPrice}
              values={field.value}
              {...field}
            />
          )}
        />
      </FilterItem>
      <FilterItem title="Производитель" hasBottomBorder>
        <ProducersFilter fields={producersFields} register={register} />
      </FilterItem>
      <FilterItem title="Спецпредложения" hasBottomBorder>
        {discountTypesFields.map((item, index) => (
          <FilterCheckbox
            key={item.id}
            name={item.name}
            value={`discountTypes.${index}.checked`}
            register={register}
            responsive
          />
        ))}
      </FilterItem>
      <FilterResetButton
        onClick={() => {
          reset({
            producers: getValues().producers.map((producer) => ({
              ...producer,
              checked: false,
            })),
            discountTypes: discountTypesOptions,
            discount: discounts[0].value,
          });
        }}
      />
    </aside>
  );
};
