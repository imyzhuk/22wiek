import {
  DiscountType,
  Producer,
  RefrigeratorConstruction,
  RefrigeratorType,
} from '@prisma/client';

export type GetRefrigeratorsParamsType = {
  page: number;
  order: {
    price?: 'desc' | 'asc';
    popularity?: 'desc';
    promoDiscount?: 'desc';
  };
  filters: {
    fromPrice?: number;
    untilPrice?: number;
    discountTypes?: DiscountType[];
    types?: RefrigeratorType[];
    producerIds?: Producer['id'][];
    fromFreezerSectionsCount?: number;
    untilFreezerSectionsCount?: number;
  };
};

export type GetRefrigeratorMutableFiltersParamsType = Pick<
  GetRefrigeratorsParamsType['filters'],
  | 'fromPrice'
  | 'fromFreezerSectionsCount'
  | 'untilPrice'
  | 'untilFreezerSectionsCount'
  | 'types'
  | 'discountTypes'
  | 'producerIds'
>;
export type GetRefrigeratorMutableFiltersResponseType = Required<
  Omit<
    GetRefrigeratorMutableFiltersParamsType,
    'fromFreezerSectionsCount' | 'untilFreezerSectionsCount' | 'producerIds'
  > & {
    freezerSectionsCountOptions: number[];
  }
>;
