import {client} from '../../rest/client';
import {CompanySummary} from './types';

export async function fetchSummary(company: string): Promise<CompanySummary> {
  return (await client.get(`/api/summary/${company}`)).data;
}
