import {Select as AndtSelect} from 'antd';

export interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
  value: string;
  placeholder?: string;
  title?: string;
}

export function Select({
                         options,
                         placeholder,
                         onChange,
                         defaultValue,
                         value,
                       }: Props) {
  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const filterOption = (
    input: string,
    option?: {label: string; value: string},
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  console.log(value);

  return (
    <AndtSelect
      showSearch
      placeholder={placeholder || 'Select a city'}
      optionFilterProp='children'
      value={value}
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={options}
      defaultValue={defaultValue}
    />
  );
}
