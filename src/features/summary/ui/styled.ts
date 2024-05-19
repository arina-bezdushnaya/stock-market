import styled from 'styled-components/macro';
import {breakpoint, color} from '../../../theme';

export const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  //justify-content: space-between;
  padding: 25px 35px;
  background: ${color.white};
  border-radius: 15px;

  @media (min-width: ${breakpoint.tablet}) {
    width: 36%;
  }
`;

export const Title = styled.div`
  //padding: 15px;
  color: ${color.primary};
  font-size: 18px;
  font-weight: 600;
`;
