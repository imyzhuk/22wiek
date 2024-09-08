export const addDotsToNumber = (num: number | string): string => {
  return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1.');
};
