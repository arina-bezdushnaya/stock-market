import {makeAutoObservable, runInAction} from 'mobx';
import {fetchCompanies} from '../api';
import {getFromToDate} from '../../../utils/date';
import {stockPriceModel} from '../../chart/model/chart';

class CompaniesList {
  companies: null | string[] = null;
  currentCompany: string = '';
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

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

        stockPriceModel.getTimeSeries({
          company: this.companies[0],
          from,
          to,
          interval: '1d',
        });
      }
    }
  };

  setCompany = (company: string) => {
    this.currentCompany = company;
  };

}

export const companiesModel = new CompaniesList();
