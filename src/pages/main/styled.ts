import styled from 'styled-components/macro';
import {breakpoint} from '../../theme';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  gap: 20px;

  @media (min-width: ${breakpoint.tablet}) {
    flex-flow: row nowrap;
  }
`;
