import {RadioGroupContainer} from './styled';
import {Radio, RadioChangeEvent} from 'antd';

export interface RadioOption {
  value: string;
  title: string;
}

interface Props {
  options: RadioOption[];
  value?: string;
  onChange: (value: RadioChangeEvent) => void;
}

export function RadioGroup({options, value, onChange}: Props) {
  return (
    <RadioGroupContainer>
      <Radio.Group
        onChange={onChange}
        value={value}
      >
        {options.map(({value, title}) => (
          <Radio.Button key={value} value={title}>
            <span title={value}>{title.toUpperCase()}</span>
          </Radio.Button>
        ))}
      </Radio.Group>
    </RadioGroupContainer>
  );
}
