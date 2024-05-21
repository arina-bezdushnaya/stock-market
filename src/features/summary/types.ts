export interface CompanySummaryRequest {
  company: string;
}

export interface CompanySummary {
  company: string;
  previousClose: number;
  open: number;
  daysRange: string[];
  week52Range: string[];
  volume: number;
  avgVolume: number;
  marketCap: number;
  beta: number;
  peRatio: number;
  eps: number;
  earningsDate: string[];
  exDividendDate: string;
  targetEst: number;
  forwardDividend: string;
  description: CompanyDescription;
}

export interface CompanyDescription {
  fullName: string;
  info: string;
  link: string;
  linkText: string;
  employees: number;
  industry: string;
  sector: string;
}
