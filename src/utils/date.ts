import moment, {DurationInputArg2} from 'moment';

export function formatTime(date: string) {
  return moment.utc(date).format('HH:mm');
}

export function formatFullDate(date: string) {
  return moment.utc(date).format('DD.MM.YYYY');
}

export function formatDate(date: string) {
  return moment.utc(date).format('DD.MM');
}

export function formatDateTime(date: string) {
  return moment.utc(date).format('DD.MM HH:mm');
}

export function formatFullDateWithTime(date?: string) {
  return moment.utc(date).format('YYYY-MM-DD HH:mm:ss');
}

export function formatMMM_YYYY(date: string) {
  const result = moment(date).format('MMM YYYY');
  const year = moment(date).year();
  return result[0].toLowerCase() + result.slice(1, 3) + ' ' + year;
}

export function formatMonth(date: string) {
  return moment(date).format('MMM');
}

export function formatDateSummary(date: string) {
  return moment(date).format('MMM DD, YYYY');
}

export function getFromToDate(interval: string): {from: string; to: string} {
  let amount = interval[0];
  const unit = interval[1] as DurationInputArg2;

  const dayOfWeek = moment().day();

  if (dayOfWeek === 0) {
    amount = '2';
  }

  const format =
    interval === '1d' && (dayOfWeek === 6 || dayOfWeek === 0)
      ? 'YYYY-MM-DD'
      : 'YYYY-MM-DD HH:mm:ss';

  return {
    from: moment().subtract(amount, unit).format(format),
    to: moment().format(format),
  };
}
