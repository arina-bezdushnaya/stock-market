import styled from 'styled-components/macro';
import {ChartType} from '../../features/chart/types';
import {color} from '../../theme';

export const SwitchContainer = styled.div<{text?: string}>`

  button {
    width: 210px;
    height: 38px;
    background: ${color.primary};
    font-weight: 600;
  }

  .ant-switch-handle {
    width: 100px;
    height: 28px;
    top: 5px;
    left: ${p => p.text === ChartType.Spline ? `5px` : `calc(100% - 100px - 5px)`};
    color: ${color.primary};
    font-weight: 600;
  }

  .ant-switch-handle::before {
    content: "${p => p.text}";
    border-radius: 15px;
    font-size: 14px;
    line-height: 25px;
  }

  .ant-switch-inner {
    text-align: ${p => p.text === ChartType.Spline ? 'right' : 'left'};
    padding: 0 ${p => p.text === ChartType.Spline ? `10px` : `26px`};
    font-size: 14px;
    line-height: 25px;
  }
`;
