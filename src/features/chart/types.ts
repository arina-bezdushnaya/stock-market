export enum TimeInterval {
  '1y' = 'year',
  '6M' = '6months',
  '3M' = '3months',
  '1M' = 'month',
  '2w' = '2weeks',
  '1w' = 'week',
  '1d' = 'day',
}

export interface StockPriceRequest {
  company: string;
  from: string;
  to: string;
  interval: string;
}

export interface StockPrice {
  company: string;
  timestamp: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
