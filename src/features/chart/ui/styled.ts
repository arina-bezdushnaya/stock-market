import styled from 'styled-components/macro';
import {color} from '../../../theme';

export const ChartContainer = styled.div`
  height: 320px;
  user-select: none;

  .recharts-cartesian-axis-tick {
    text {
      fill: ${color.primary};
      font-weight: 600;
    }
  }
`;

export const Params = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  gap: 8px;
`;

export const BlockWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 25px 30px;
  background: ${color.white};
  border-radius: 15px;
`;

export const OhlcContainer = styled.div`
  padding-top: 15px;
`;
