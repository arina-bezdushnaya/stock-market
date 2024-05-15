import {client} from '../../rest/client';

export async function fetchCompanies(): Promise<string[]> {
  return (await client.get(`/api/companies`)).data;
}
