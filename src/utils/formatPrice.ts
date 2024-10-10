export const formatPrice = (num: number): string => {
  const { format } = new Intl.NumberFormat('ru', {
    minimumFractionDigits: 2,
  });
  return format(num);
};
