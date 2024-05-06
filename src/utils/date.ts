import moment from 'moment';

export function formatTime(date: string) {
  return moment(date).format('HH:mm');
}

export function formatDate(date: string) {
  return moment(date).format('DD.MM.YYYY');
}

export function formatDateTime(date: string) {
  return moment(date).format('DD.MM HH:mm');
}

export function formatMMM_YYYY(date: string) {
  const result = moment(date.toString(), 'YYYYMM').format('MMM YYYY');
  const year = moment(date.toString(), 'YYYYMM').year();
  return result[0].toLowerCase() + result.slice(1, 3) + ' ' + year;
}
