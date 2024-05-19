import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Skeleton} from 'antd';
import {SummaryContainer, Title} from './styled';
import {SummaryRow} from './SummaryRow';
import {summaryModel} from '../model';
import {companiesModel} from '../../companies/model';
import {formatDateSummary} from '../../../utils/date';

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
            rows: 20,
          }}
        />
      </SummaryContainer>
    );
  }

  const {
    company,
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

  const earnings = earningsDate
    .map(date => formatDateSummary(date))
    .join(' — ');
  const dividend = formatDateSummary(exDividendDate);

  return (
    <SummaryContainer>
      {loading || !summary ? (
        <></>
      ) : (
        <>
          <>
            <Title>Company Summary</Title>
          </>

          <>
            {/*<SummaryRow title="Company" value={company} />*/}
            <SummaryRow title="Previous close" value={previousClose} />
            <SummaryRow title="Open" value={open} />
            <SummaryRow title={`Day's Range`} value={daysRange.join(' — ')} />
            <SummaryRow title="52 Week Range" value={week52Range.join(' — ')} />
            <SummaryRow title="Volume" value={volume} />
            <SummaryRow title="Avg. Volume" value={avgVolume} />
            <SummaryRow title="Market Cap" value={marketCap} />
            <SummaryRow title="Beta (5Y Monthly)" value={beta} />
            <SummaryRow title="PE Ratio (TTM)" value={peRatio} />
            <SummaryRow title="EPS (TTM)" value={eps} />
            <SummaryRow title="Earnings Date" value={earnings} />
            <SummaryRow
              title="Forward Dividend & Yield"
              value={forwardDividend}
            />
            <SummaryRow title="Ex-Dividend Date" value={dividend} />
            <SummaryRow title="1y Target Est" value={targetEst} />
          </>
        </>
      )}
    </SummaryContainer>
  );
});
