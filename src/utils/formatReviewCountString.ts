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
