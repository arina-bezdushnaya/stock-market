import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {Skeleton} from 'antd';
import {
  OverviewContainer,
  OverviewMain,
  OverviewTitle,
  CompanyDescription,
  OverviewColumn,
  ShowMoreButton,
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
        <OverviewColumn>
          <CompanyDescription>
            {shortInfo}
            {!isShowAll && '...'}
            <ShowMoreButton onClick={() => toggleShowAll(!isShowAll)}>
              {isShowAll ? 'Свернуть' : 'Показать полностью'}
            </ShowMoreButton>
          </CompanyDescription>
          <a href={link} target={'_blank'} rel={'noopener noreferrer'}>
            {linkText}
          </a>
        </OverviewColumn>
        <OverviewColumn>
          <div>Full Time Employees: {employees}</div>
          <div>Sector: {sector}</div>
          <div>Industry: {industry}</div>
        </OverviewColumn>
      </OverviewMain>
    </OverviewContainer>
  );
});
