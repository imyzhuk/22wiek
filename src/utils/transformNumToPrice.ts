export const transformNumToPrice = (num: number): string => {
  let str = num.toFixed(2).split('.');
  str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  return str.join(',');
};
