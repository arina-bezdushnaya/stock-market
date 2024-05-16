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
`;

export const BlockWrapper = styled.div`
  padding: 25px 30px;
  background: ${color.white};
  border-radius: 15px;
`;

export const OhlcvContainer = styled.div`
  width: 100px;

  .ant-select .ant-select-selection-item {
    color: ${color.primary};
    font-weight: 600;
  }
`;

export const IntervalRadio = styled.div`
  min-width: 360px;
`;
