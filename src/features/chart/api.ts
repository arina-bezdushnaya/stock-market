import {client} from '../../rest/client';
import {StockPrice, StockPriceRequest} from './types';

export async function fetchCompanyTimeSeries(
  params: StockPriceRequest,
): Promise<StockPrice[]> {
  return (await client.get(`/api/stock`, {params})).data;
}
