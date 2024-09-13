const isDigit = (char: string) => {
  return char.match(/^\d+$/);
};
export const isStringMatched = (str: string, pattern: string): boolean => {
  if (str.length !== pattern.length) {
    return false;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '_') {
      return false;
    }

    if (str[i] === pattern[i]) {
      continue;
    }

    if (isDigit(str[i]) && pattern[i] === '_') {
      continue;
    }

    return false;
  }

  return true;
};
