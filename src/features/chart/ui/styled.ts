import styled from 'styled-components/macro';
import {color} from '../../../theme';

export const ChartContainer = styled.div`
  height: 300px;
  user-select: none;
  
  .recharts-cartesian-axis-tick {
    text {
      fill: ${color.primary};
      font-weight: 600;
    }
  }

`;

export const BlockWrapper = styled.div`
  padding: 25px 30px;
  background: ${color.white};
  border-radius: 15px;
`;
