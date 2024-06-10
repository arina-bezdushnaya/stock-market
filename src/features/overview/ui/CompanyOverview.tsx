import {useState} from 'react';
import {observer} from 'mobx-react';
import {Skeleton, Tag} from 'antd';
import {
  OverviewContainer,
  OverviewMain,
  OverviewTitle,
  CompanyDescription,
  ShowMoreButton,
  Link,
  Tags,
} from './styled';
import {summaryModel} from '../../summary/model';

export const CompanyOverview = observer(() => {
  const {summary, loading} = summaryModel;
  const overview = summary?.description;
  const [isShowAll, toggleShowAll] = useState(false);

  if (loading || !overview) {
    return (
      <OverviewContainer>
        <Skeleton active />
      </OverviewContainer>
    );
  }

  const {info, industry, fullName, link, linkText, sector, employees} =
    overview;

  const shortInfo = isShowAll ? info : info.slice(0, 512);

  return (
    <OverviewContainer>
      <OverviewTitle>{fullName} Overview</OverviewTitle>

      <OverviewMain>
        <Tags>
          <Tag color="warning">{employees + ' full-time employees'}</Tag>
          <Tag color="processing">{sector + ' sector'}</Tag>
          <Tag color="success">{industry + ' industry'}</Tag>
        </Tags>

        <CompanyDescription>
          {shortInfo}
          {!isShowAll && '...'}
          <ShowMoreButton onClick={() => toggleShowAll(!isShowAll)}>
            {isShowAll ? 'Свернуть' : 'Показать полностью'}
          </ShowMoreButton>
        </CompanyDescription>
        <Link href={link} target={'_blank'} rel={'noopener noreferrer'}>
          {linkText}
        </Link>
      </OverviewMain>
    </OverviewContainer>
  );
});
