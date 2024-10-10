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

export const toLowerCaseFirstLetter = (str: string) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

export const formatReviewCountString = (count: number) => {
  const lastTwoDigits = count % 100;
  if (
    lastTwoDigits === 11 ||
    lastTwoDigits === 12 ||
    lastTwoDigits === 13 ||
    lastTwoDigits === 14
  ) {
    return `${count} отзывов`;
  }

  const lastDigit = count % 10;
  switch (lastDigit) {
    case 1:
      return `${count} отзыв`;
    case 2:
    case 3:
    case 4:
      return `${count} отзыва`;
    default:
      return `${count} отзывов`;
  }
};
