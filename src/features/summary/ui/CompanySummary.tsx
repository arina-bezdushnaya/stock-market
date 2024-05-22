import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Skeleton} from 'antd';
import {SummaryContainer, Title} from './styled';
import {SummaryRow} from './SummaryRow';
import {summaryModel} from '../model';
import {companiesModel} from '../../companies/model';
import {formatDateSummary} from '../../../utils/date';
import {formatPrice} from '../../../utils/price';

export const CompanySummary = observer(() => {
  const {summary, loading} = summaryModel;
  const currentCompany = companiesModel.currentCompany;

  useEffect(() => {
    currentCompany && summaryModel.getSummary(currentCompany);
  }, [currentCompany]);

  if (loading || !summary) {
    return (
      <SummaryContainer>
        <Skeleton
          active
          paragraph={{
            rows: 24,
          }}
        />
      </SummaryContainer>
    );
  }

  const {
    eps,
    beta,
    earningsDate,
    exDividendDate,
    forwardDividend,
    marketCap,
    peRatio,
    volume,
    avgVolume,
    targetEst,
    open,
    previousClose,
    week52Range,
    daysRange,
  } = summary;

  const earnings = earningsDate.map(date => formatDateSummary(date));
  const dividend = formatDateSummary(exDividendDate);

  const getNumeralValue = (value: number | string) =>
    formatPrice(value, false, true);

  return (
    <SummaryContainer>
      <Title>Company Summary</Title>

      <SummaryRow title="Previous close" value={previousClose} showPrice />
      <SummaryRow title="Open" value={open} showPrice />
      <SummaryRow title={`Day's Range`} value={daysRange} showPrice />
      <SummaryRow title="52 Week Range" value={week52Range} showPrice />
      <SummaryRow title="Volume" value={formatPrice(volume)} />
      <SummaryRow title="Avg. Volume" value={formatPrice(avgVolume)} />
      <SummaryRow title="Market Cap" value={marketCap} />
      <SummaryRow title="Beta (5Y Monthly)" value={getNumeralValue(beta)} />
      <SummaryRow title="PE Ratio (TTM)" value={getNumeralValue(peRatio)} />
      <SummaryRow title="EPS (TTM)" value={getNumeralValue(eps)} />
      <SummaryRow title="Earnings Date" value={earnings} />
      <SummaryRow title="Forward Dividend & Yield" value={forwardDividend} />
      <SummaryRow title="Ex-Dividend Date" value={dividend} />
      <SummaryRow title="1y Target Est" value={targetEst} showPrice />
    </SummaryContainer>
  );
});
