// import {StyledHeader} from './styled';
import {Radio, RadioChangeEvent} from 'antd';

export interface RadioOption {
  value: string;
  title: string;
}

interface Props {
  options: RadioOption[];
  onChange: (value: RadioChangeEvent) => void;
}

export function RadioGroup({options, onChange}: Props) {
  return (
    <Radio.Group onChange={onChange} defaultValue={options[0].value}>
      {options.map(({value, title}) => (
        <Radio.Button key={value} value={value}>
          <span title={value}>{title}</span>
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}
