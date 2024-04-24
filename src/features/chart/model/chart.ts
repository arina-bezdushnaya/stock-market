import {makeAutoObservable, runInAction} from "mobx";
import {fetchTimeSeriesIntraday} from "../api";
import {IntradayRequest, TimeInterval, TimeSeries} from "../types";

class Intraday {
  data = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }


  getIntraday = async () => {
    this.loading = true;
    const API_KEY = process.env.REACT_APP_API_KEY as string;

    const params: IntradayRequest= {
      apikey: API_KEY,
      function: TimeSeries.TIME_SERIES_INTRADAY,
      symbol: "IBM",
      interval: TimeInterval["60min"]
    }

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

export const intradayModel = new Intraday();
