export const getRelativeTimeFromTodayTo = (
  date: string,
  timeZone: number = 0,
) => {
  date += `.000${timeZone > 0 ? '+' : '-'}${Math.floor(timeZone / 10)}${timeZone % 10}:00`;
  const today = Math.floor(
    (Date.now() + 1000 * 3600 * timeZone) / (1000 * 60 * 60 * 24),
  );
  const dateTo = Math.floor(Date.parse(date) / (1000 * 60 * 60 * 24));
  const formatter = new Intl.DateTimeFormat('ru', {
    month: 'long',
    day: 'numeric',
  });
  switch (dateTo - today) {
    case 0:
      return 'сегодня';
    case 1:
      return 'завтра';
    default:
      return formatter.format(Date.parse(date));
  }
};
