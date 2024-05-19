import styled from 'styled-components/macro';
import {breakpoint} from '../../../../theme';

export const IntervalContainer = styled.div``;

export const IntervalSelect = styled.div`
  display: flex;

  div {
    width: 160px;
  }

  @media (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`;

export const IntervalRadio = styled.div`
  display: none;

  @media (min-width: ${breakpoint.tablet}) {
    display: flex;
    width: 360px;
  }
`;
