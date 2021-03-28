import dayjs from 'dayjs';

export default function addDays(days) {
  const now = dayjs().add(days, 'day');
  return now.format('DD/MM/YYYY');
}
