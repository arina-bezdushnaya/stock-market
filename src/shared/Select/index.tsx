import {Select as AndtSelect} from 'antd';
import {SelectContainer} from './styled';
import {SizeType} from 'antd/es/config-provider/SizeContext';

export interface SelectOption {
  value: string;
  label: string;
}

interface Props {
  options: SelectOption[];
  onChange: (value: string) => void;
  defaultValue?: string;
  value: string;
  loading?: boolean;
  placeholder?: string;
  size?: SizeType;
  isSearch?: boolean;
}

export function Select({
  options,
  placeholder,
  onChange,
  defaultValue,
  value,
  loading = false,
  size = 'large',
  isSearch = true,
}: Props) {
  // const onSearch = (value: string) => {
  //   console.log('search:', value);
  // };

  const filterOption = (
    input: string,
    option?: {label: string; value: string}
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <SelectContainer>
      <AndtSelect
        showSearch={isSearch}
        placeholder={placeholder || 'Select a city'}
        loading={loading}
        disabled={loading}
        optionFilterProp="children"
        value={value}
        onChange={onChange}
        // onSearch={onSearch}
        filterOption={filterOption}
        options={options}
        defaultValue={defaultValue}
        size={size}
      />
    </SelectContainer>
  );
}
