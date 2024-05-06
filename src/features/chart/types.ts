export enum TimeInterval {
  '15min' = '15',
  '30min' = '30',
  '60min' = '60'
}

export interface StockPriceRequest {
  company: string;
  time: TimeInterval;
}

export interface StockPrice {
  date: string,
  open: string,
  high: string,
  low: string,
  close: string,
  volume: string
}
