import {RadioGroupContainer} from './styled';
import {Radio, RadioChangeEvent} from 'antd';
import {RadioGroupButtonStyle} from 'antd/es/radio';

export interface RadioOption {
  value: string;
  title: string;
}

interface Props {
  options: RadioOption[];
  value?: string;
  onChange: (value: RadioChangeEvent) => void;
  buttonStyle?: RadioGroupButtonStyle;
  isRounded?: boolean;
}

export function RadioGroup({
  options,
  value,
  buttonStyle = 'outline',
  isRounded = false,
  onChange,
}: Props) {
  return (
    <RadioGroupContainer isRounded={isRounded}>
      <Radio.Group onChange={onChange} value={value} buttonStyle={buttonStyle}>
        {options.map(({value, title}) => (
          <Radio.Button key={value} value={title}>
            <span title={value}>{title.toUpperCase()}</span>
          </Radio.Button>
        ))}
      </Radio.Group>
    </RadioGroupContainer>
  );
}
