const isJsonArray = (str: string) => /^\[.+\]$/.test(str);

export const parseParams = <T>(searchParams: URLSearchParams): Partial<T> => {
  const params: any = {};
  searchParams.forEach((value, key) => {
    const parsedValue = isJsonArray(value) ? JSON.parse(value) : value;
    let [attribute, innerAttribute] = key.split(/\W/g);
    if (!innerAttribute) {
      params[attribute] = parsedValue;
      return;
    }
    params[attribute] = {
      ...params[attribute],
      [innerAttribute]: parsedValue,
    };
  });
  return params;
};
