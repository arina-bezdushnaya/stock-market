import styled from 'styled-components/macro';
import {color} from '../../../theme';
import {Button} from 'antd';

export const OverviewContainer = styled.div`
  width: 100%;
  // height: 100%;
  // height: 700px;
  display: flex;
  flex-flow: column nowrap;
  padding: 25px 35px;
  background: ${color.white};
  border-radius: 15px;
`;

export const OverviewTitle = styled.div`
  color: ${color.primary};
  font-size: 18px;
  font-weight: 600;
`;

export const OverviewMain = styled.div`
  display: flex;
  gap: 30px;
`;

export const OverviewColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 60%;

  :last-child {
    width: 40%;
  }
`;

export const CompanyDescription = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ShowMoreButton = styled(Button)`
  width: 100px;
  height: 30px;
`;
