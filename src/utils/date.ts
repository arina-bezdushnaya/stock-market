import moment, {DurationInputArg2} from 'moment';

export function formatTime(date: string) {
  return moment(date).format('HH:mm');
}

export function formatDate(date: string) {
  return moment(date).format('DD.MM.YYYY');
}

export function formatDateTime(date: string) {
  return moment(date).format('DD.MM HH:mm');
}

export function formatFullDate(date?: string) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}

export function formatMMM_YYYY(date: string) {
  const result = moment(date.toString(), 'YYYYMM').format('MMM YYYY');
  const year = moment(date.toString(), 'YYYYMM').year();
  return result[0].toLowerCase() + result.slice(1, 3) + ' ' + year;
}

export function getFromToDate(interval: string): {from: string, to: string} {
  const amount = interval[0];
  const unit = interval[1] as DurationInputArg2;

  return (
    {
      from: moment().subtract(amount, unit)
        .format('YYYY-MM-DD HH:mm:ss'),
      to: moment().format('YYYY-MM-DD HH:mm:ss'),
    }
  );
}
