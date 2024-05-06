export enum TimeInterval {
  '1Y' = 'year',
  '6M' = '6months',
  '3M' = '3months',
  '1M' = 'month',
  '2W' = '2week',
  '1W' = 'week',
  '1D' = 'day',
}
export interface StockPriceRequest {
  company: string;
  time: TimeInterval;
}

export interface StockPrice {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
