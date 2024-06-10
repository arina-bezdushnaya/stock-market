import {SwitchContainer} from './styled';
import {Switch as SwitchAntd} from 'antd';
import {ChartType} from '../../features/chart/types';

interface Props {
  value?: string;
  onChange: (value: boolean) => void;
}

export function Switch({value, onChange}: Props) {

  return (
    <SwitchContainer text={value}>
      <SwitchAntd
        checkedChildren={ChartType.Spline}
        unCheckedChildren={ChartType.Candlestick}
        onChange={onChange}
      />
    </SwitchContainer>
  );
}
