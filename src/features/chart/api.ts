import {client} from '../../rest/client';
import {StockPrice, StockPriceRequest} from './types';
import {IntradayRequest} from './model/chart';

export async function fetchCompanyTimeSeries(
  params: StockPriceRequest,
): Promise<StockPrice[]> {
  return (await client.get(`/api/stock`, {params})).data;
}

export async function fetchTimeSeriesIntraday(
  params: IntradayRequest,
): Promise<any> {
  return (await client.get(`query`, {params})).data;
}

export async function fetchCompanies(): Promise<string[]> {
  return (await client.get(`/api/companies`)).data;
}
