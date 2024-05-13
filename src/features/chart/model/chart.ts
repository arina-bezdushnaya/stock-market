import {makeAutoObservable, runInAction} from 'mobx';
import {fetchCompanies, fetchCompanyTimeSeries, fetchTimeSeriesIntraday} from '../api';
import {StockPriceRequest, StockPrice} from '../types';
import {getFromToDate} from '../../../utils/date';

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
  companies: null | string[] = null;
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

  getCompanies = async () => {
    if (!this.loading) {
      this.loading = true;

      try {
        await fetchCompanies().then(response => {
          runInAction(() => {
            this.companies = response;
            this.loading = false;
            this.error = null;
          });
        });
      } catch (err) {
        this.loading = false;
        console.log(err);
      }

      if (this.companies) {
        const {from, to} = getFromToDate('1d');

        this.getTimeSeries({
          company: this.companies[0],
          from,
          to,
          interval: '1d',
        });
      }
    }
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
