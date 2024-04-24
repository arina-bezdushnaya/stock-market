import {client} from '../../rest/client';
import {IntradayRequest} from './types';

export async function fetchTimeSeriesIntraday(
  params: IntradayRequest
): Promise<any> {
  return (await client.get(`query`, {params})).data;
}
