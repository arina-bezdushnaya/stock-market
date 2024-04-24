export enum TimeSeries {
  "TIME_SERIES_INTRADAY" = "TIME_SERIES_INTRADAY"
}

export enum TimeInterval {
  "1min" = "1min",
  "5min" = "5min",
  "15min" = "15min",
  "30min" = "30min",
  "60min" = "60min"
}

export enum Outputsize {
  "compact" = "compact",
  "full" = "full"
}

export enum Datatype {
  "json" = "json",
  "csv" = "csv"
}


export interface IntradayRequest {
  function: TimeSeries;
  symbol: string;
  interval: TimeInterval;
  adjusted?: boolean;
  extended_hours?: boolean;
  month?: string;
  outputsize?: Outputsize;
  datatype?: Datatype;
  apikey: string;
}


// export interface Intraday {
// }
