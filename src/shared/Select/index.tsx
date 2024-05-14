import {Select as AndtSelect} from 'antd';
import styled from 'styled-components/macro';

export interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
  value: string;
  loading?: boolean;
  placeholder?: string;
}

export function Select({
                         options,
                         placeholder,
                         onChange,
                         defaultValue,
                         value,
                         loading = false,
                       }: Props) {
  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const filterOption = (
    input: string,
    option?: {label: string; value: string},
  ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <SelectContainer>
      <AndtSelect
        showSearch
        placeholder={placeholder || 'Select a city'}
        loading={loading}
        disabled={loading}
        optionFilterProp='children'
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={options}
        defaultValue={defaultValue}
      />
    </SelectContainer>
  );
}

export const SelectContainer = styled.div`
  .ant-select {
    width: 100%;
  }
`;
