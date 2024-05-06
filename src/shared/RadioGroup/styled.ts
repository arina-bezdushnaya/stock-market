import styled from 'styled-components/macro';
import {Select as AntdSelect} from 'antd';

export const Select = styled(AntdSelect)`
  a::before {
    content: "♥";
  }
`;
