import {makeAutoObservable, runInAction} from 'mobx';
import {fetchSummary} from '../api';
import {CompanySummary} from '../types';

class Summary {
  summary: null | CompanySummary = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getSummary = async (company: string) => {
    if (!this.loading) {
      this.loading = true;

      try {
        await fetchSummary(company).then(response => {
          runInAction(() => {
            this.summary = response;
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
}

export const summaryModel = new Summary();
