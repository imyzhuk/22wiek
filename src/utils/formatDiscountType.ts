import { DiscountType } from '@prisma/client';

const mapDiscountType = (type: Exclude<DiscountType, 'Discount'>) => {
  switch (type) {
    case 'Superprice':
      return 'Суперцена';
    case 'Sale':
      return 'Уцененные товары';
  }
};
export const getDiscountTypeName = (types: DiscountType[] | null) => {
  if (!types) return '';

  const type = types.find((type) => type !== 'Discount');

  if (!type) return '';
  return mapDiscountType(type as Exclude<DiscountType, 'Discount'>);
};
