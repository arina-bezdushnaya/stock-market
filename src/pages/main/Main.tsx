import {observer} from 'mobx-react';
import {
  Container,
  CompanyName,
  MainWrapper,
  TitleWrapper,
  Column,
} from './styled';
import {Chart} from '../../features/chart/ui';
import {CompanySummary} from '../../features/summary/ui';
import {summaryModel} from '../../features/summary/model';
import {Skeleton} from 'antd';
import {CompanyOverview} from '../../features/overview/ui';

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
          <Column>
            {/*<Chart />*/}
            <CompanyOverview />
          </Column>

          <CompanySummary />
        </MainWrapper>
      </Container>
    </>
  );
});
