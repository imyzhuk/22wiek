'use client';
import React, { useEffect, useState } from 'react';
import styles from './Filters.module.css';
import {
  FilterCheckbox,
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
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import {
  GetRefrigeratorMutableFiltersParamsType,
  GetRefrigeratorsParamsType,
} from '@/types/refrigerator';
import { DiscountType, Producer, RefrigeratorType } from '@prisma/client';
import { useActions, useQueryState, useGetRefrigerators } from '@/hooks';
import { RecursivePartial } from '@/types/utils';

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

const typesOptions: {
  name: string;
  value: RefrigeratorType;
  checked: boolean;
}[] = [
  { name: 'холодильник с морозильником', value: 'WithFreezer', checked: false },
  {
    name: 'холодильник без морозильника',
    value: 'WithoutFreezer',
    checked: false,
  },
  { name: 'торговый холодильник', value: 'Commercial', checked: false },
];

type FiltersProps = {
  initialSearchParams: Partial<GetRefrigeratorsParamsType>;
};

export const Filters: React.FC<FiltersProps> = ({ initialSearchParams }) => {
  const page = useTypedSelector((state) => state.product.page);
  const { setPage } = useActions();
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const { getProducts } = useGetRefrigerators();
  const [freezerSectionsCountOptions, setFreezerSectionsCountOptions] =
    useState<number[]>([]);
  const { setQuery } = useQueryState();
  const [init, setInit] = useState<number>(0);

  const defaultValues = {
    page: page,
    order: sortOptions[0],
    price: {
      fromValue: undefined as number | undefined,
      untilValue: undefined as number | undefined,
    },
    freezerSectionsCount: {
      fromValue: undefined as number | undefined,
      untilValue: undefined as number | undefined,
    },
    types: typesOptions,
    discountTypes: discountTypesOptions,
    producers: [] as (Producer & { checked: boolean })[],
  };

  const { setValue, getValues, control, watch, register, reset } = useForm({
    defaultValues,
  });

  const {
    fields: typesFields,
    append: typesAppend,
    remove: typesRemove,
  } = useFieldArray({ control, name: 'types' });
  const {
    fields: discountTypesFields,
    append: discountTypesAppend,
    remove: discountTypesRemove,
  } = useFieldArray({ control, name: 'discountTypes' });
  const { fields: producersFields } = useFieldArray({
    control,
    name: 'producers',
  });

  const getMutableFilters = async (
    params?: GetRefrigeratorMutableFiltersParamsType,
  ) => {
    const { data } = await refrigeratorAPI.getMutableFilters({ ...params });
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
    if (
      formValues.freezerSectionsCount.fromValue &&
      formValues.freezerSectionsCount.fromValue <
        data.freezerSectionsCountOptions[0]
    ) {
      setValue('freezerSectionsCount', {
        fromValue: data.freezerSectionsCountOptions[0],
        untilValue: formValues.freezerSectionsCount.untilValue,
      });
    }
    if (
      formValues.freezerSectionsCount.untilValue &&
      formValues.freezerSectionsCount.untilValue >
        data.freezerSectionsCountOptions.at(-1)!
    ) {
      setValue('freezerSectionsCount', {
        fromValue: formValues.freezerSectionsCount.fromValue,
        untilValue: data.freezerSectionsCountOptions.at(-1),
      });
    }

    const removedElementsIdx: number[] = [];
    formValues.types.forEach((type, typeIndex) => {
      const matchingElementIdx = data.types.findIndex(
        (dataType) => dataType === type.value,
      );
      if (matchingElementIdx === -1) {
        removedElementsIdx.push(typeIndex);
      } else {
        data.types.splice(matchingElementIdx, 1);
      }
    });

    typesRemove(removedElementsIdx);
    typesAppend(
      typesOptions.filter((type) => {
        return data.types.includes(type.value);
      }),
    );

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

    setFreezerSectionsCountOptions(data.freezerSectionsCountOptions);
  };

  const prepareFormValuesForRequest = (
    formData: RecursivePartial<typeof defaultValues>,
  ) => {
    const order: GetRefrigeratorsParamsType['order'] = {};
    const filters: GetRefrigeratorsParamsType['filters'] = {};

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
    filters.fromFreezerSectionsCount = formData.freezerSectionsCount?.fromValue;
    filters.untilFreezerSectionsCount =
      formData.freezerSectionsCount?.untilValue;
    filters.types = formData.types?.reduce((acc, type) => {
      if (type?.value && type?.checked) {
        acc.push(type.value);
      }
      return acc;
    }, [] as RefrigeratorType[]);

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
      page: formData.page,
    };
  };

  useEffect(() => {
    const subscription = watch((formData, { name, type }) => {
      if (name && name !== 'page' && !type) {
        return;
      }

      const { filters, order, page } = prepareFormValuesForRequest(formData);
      debugger;
      if (name === 'page') {
        setQuery({ filters, order, page });
        getProducts({ order, filters, page });
        return;
      }
      setPage(1);
      setQuery({ filters, order, page });
      getProducts({ order, filters, page });
      getMutableFilters(filters);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    debugger;
    if (init !== 2) {
      setInit((prev) => prev + 1);
      return;
    }
    setValue('page', page);
  }, [page]);

  useEffect(() => {
    debugger;
    const params = {
      page: initialSearchParams.page ? Number(initialSearchParams.page) : 1,
      order: initialSearchParams.order,
      filters: {
        ...initialSearchParams.filters,
        producerIds: initialSearchParams.filters?.producerIds?.map(Number),
        fromPrice: Number(initialSearchParams.filters?.fromPrice) || undefined,
        untilPrice:
          Number(initialSearchParams.filters?.untilPrice) || undefined,
        fromFreezerSectionsCount:
          Number(initialSearchParams.filters?.fromFreezerSectionsCount) ||
          undefined,
        untilFreezerSectionsCount:
          Number(initialSearchParams.filters?.untilFreezerSectionsCount) ||
          undefined,
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
    setValue('freezerSectionsCount', {
      fromValue: params.filters.fromFreezerSectionsCount,
      untilValue: params.filters.untilFreezerSectionsCount,
    });

    setValue(
      'types',
      typesOptions.map((typeOption) => ({
        ...typeOption,
        checked: params.filters.types?.includes(typeOption.value) || false,
      })),
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

    const getImmutableFilters = async () => {
      const { data } = await refrigeratorAPI.getImmutableFilters();
      setValue(
        'producers',
        data.map((producer) => ({
          ...producer,
          checked: params.filters.producerIds?.includes(producer.id) || false,
        })),
      );
    };

    getProducts(params);
    getImmutableFilters();
    getMutableFilters(params.filters);
  }, []);

  return (
    <aside>
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
          />
        ))}
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
        {typesFields.map((item, index) => (
          <FilterCheckbox
            key={item.id}
            name={item.name}
            value={`types.${index}.checked`}
            register={register}
          />
        ))}
      </FilterItem>
      <FilterItem
        title="Количество отделений морозильной камеры"
        hasBottomBorder
      >
        <Controller
          name="freezerSectionsCount"
          control={control}
          render={({ field }) => (
            <FixedRangeFilter
              options={freezerSectionsCountOptions}
              values={field.value}
              {...field}
            />
          )}
        />
      </FilterItem>
      <FilterResetButton
        onClick={() => {
          reset({
            producers: getValues().producers.map((producer) => ({
              ...producer,
              checked: false,
            })),
            types: typesOptions,
            discountTypes: discountTypesOptions,
          });
        }}
      />
    </aside>
  );
};
