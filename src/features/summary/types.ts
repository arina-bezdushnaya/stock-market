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
}
