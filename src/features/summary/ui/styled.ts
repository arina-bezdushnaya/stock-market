import styled from 'styled-components/macro';
import {breakpoint, color} from '../../../theme';

export const SummaryContainer = styled.div`
  // position: sticky;
  // position: -webkit-sticky;
  width: 100%;
  // height: 700px;
  display: flex;
  flex-flow: column nowrap;
  padding: 25px 35px;
  background: ${color.white};
  border-radius: 15px;
  // top: -30;
  // bottom: 0;

  @media (min-width: ${breakpoint.tablet}) {
    width: 36%;
    // top: -30px;
  }
`;

export const Title = styled.div`
  // position: sticky;
  // top: 0;
  // padding-bottom: 10px;
  color: ${color.primary};
  font-size: 18px;
  font-weight: 600;
  // background: ${color.white};
  // z-index: 5;
`;
