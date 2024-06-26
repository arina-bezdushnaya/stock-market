import styled from 'styled-components/macro';
import {breakpoint} from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 20px 0;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 20px 0 10px;
  gap: 20px;

  @media (min-width: ${breakpoint.tablet}) {
    flex-flow: row nowrap;
  }
`;

export const TitleWrapper = styled.div`
  min-height: 32px;

  .ant-skeleton-paragraph {
    display: none;
  }
`;

export const CompanyName = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  padding-left: 35px;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;

  @media (min-width: ${breakpoint.tablet}) {
    width: 64%;
  }
`;
