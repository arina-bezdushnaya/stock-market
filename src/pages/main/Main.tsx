import React from 'react';
import {observer} from 'mobx-react';
import {Container, CompanyName, MainWrapper, TitleWrapper} from './styled';
import {Chart} from '../../features/chart/ui';
import {CompanySummary} from '../../features/summary/ui';
import {summaryModel} from '../../features/summary/model';
import {Skeleton} from 'antd';

export const Main = observer(() => {
  const {summary, loading} = summaryModel;

  const company = summary?.description.fullName;

  return (
    <>
      <Container>
        <TitleWrapper>
          {loading || !company ? (
            <Skeleton paragraph={{rows: 0}} active />
          ) : (
            <CompanyName>{company}</CompanyName>
          )}
        </TitleWrapper>

        <MainWrapper>
          <Chart />

          <CompanySummary />
        </MainWrapper>
      </Container>
    </>
  );
});
