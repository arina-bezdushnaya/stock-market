import styled from 'styled-components/macro';
import {color} from '../../../theme';
import {Button} from 'antd';

export const OverviewContainer = styled.div`
  width: 100%;
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
  flex-flow: column nowrap;
`;

export const CompanyDescription = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: justify;
`;

export const ShowMoreButton = styled(Button)`
  width: 200px;
  height: 30px;
  margin: 10px 0 20px;
`;

export const Link = styled.a`
  font-weight: 600;
`;

export const Tags = styled.div`
  display: flex;
  padding: 10px 0;
`;
