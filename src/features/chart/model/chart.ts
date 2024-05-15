import {makeAutoObservable, runInAction} from 'mobx';
import {fetchCompanyTimeSeries, fetchTimeSeriesIntraday} from '../api';
import {StockPriceRequest, StockPrice, TimeInterval} from '../types';

export enum TimeSeries {
  'TIME_SERIES_INTRADAY' = 'TIME_SERIES_INTRADAY',
  'TIME_SERIES_DAILY' = 'TIME_SERIES_DAILY',
  'TIME_SERIES_MONTHLY' = 'TIME_SERIES_MONTHLY',
  'TIME_SERIES_WEEKLY' = 'TIME_SERIES_WEEKLY'
}

export enum TInterval {
  '1min' = '1min',
  '5min' = '5min',
  '15min' = '15min',
  '30min' = '30min',
  '60min' = '60min'
}

export enum Outputsize {
  'compact' = 'compact',
  'full' = 'full'
}

export enum Datatype {
  'json' = 'json',
  'csv' = 'csv'
}

export interface IntradayRequest {
  function: TimeSeries;
  symbol: string;
  interval?: TInterval;
  adjusted?: boolean;
  extended_hours?: boolean;
  month?: string;
  outputsize?: Outputsize;
  datatype?: Datatype;
  apikey: string;
}


class CompanyPrice {
  data: null | StockPrice[] = null;
  interval: string = '1d';
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getTimeSeries = async (params: StockPriceRequest) => {
    if (!this.loading) {
      this.loading = true;

      try {
        await fetchCompanyTimeSeries(params).then(response => {
          runInAction(() => {
            this.data = response;
            this.loading = false;
            this.error = null;
          });
        });
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    }
  };


  setInterval = (interval: TimeInterval) => {
    this.interval = interval;
  };

  getIntraday = async () => {
    this.loading = true;
    const API_KEY = process.env.REACT_APP_API_KEY as string;

    const params: IntradayRequest = {
      apikey: API_KEY,
      function: TimeSeries.TIME_SERIES_INTRADAY,
      symbol: 'AAPL',
      interval: TInterval['60min'],
      outputsize: Outputsize.full,
      // month: '2023-05',
      datatype: Datatype.csv,
    };

    try {
      const data = await fetchTimeSeriesIntraday(params);

      console.log(data);

      runInAction(() => {
        this.data = data;
        this.loading = false;
        this.error = null;
      });
    } catch (err) {
      this.loading = false;
      console.log(err);
      // this.error = err.response.data;
    }
  };

}

export const stockPriceModel = new CompanyPrice();
