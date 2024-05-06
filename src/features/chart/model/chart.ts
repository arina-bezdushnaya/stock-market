import {makeAutoObservable} from 'mobx';
import {fetchCompanyTimeSeries} from '../api';
import {StockPriceRequest, TimeInterval, StockPrice} from '../types';

class CompanyPrice {
  data: null | StockPrice[] = null;
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
          this.data = response;
          this.loading = false;
          this.error = null;
        });
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    }
  };
}

export const stockPriceModel = new CompanyPrice();
