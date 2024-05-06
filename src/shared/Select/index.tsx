// import {StyledHeader} from './styled';
import {Select as AndtSelect} from 'antd';

export interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  title?: string;
}

export function Select({
  options,
  placeholder,
  onChange,
  defaultValue,
  title,
}: Props) {
  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const filterOption = (
    input: string,
    option?: {label: string; value: string}
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <AndtSelect
      showSearch
      placeholder={placeholder || 'Select a city'}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={options}
      defaultValue={defaultValue}
    />
  );
}
