import styled from 'styled-components/macro';
import {color} from '../../theme';

export const RadioGroupContainer = styled.div`

  .ant-radio-button-wrapper {
    font-weight: 600;
    color: ${color.darkGrey};

    :hover {
      color: ${color.primary};
    }

    ::before {
      background: ${color.transparent} !important;
      border: none !important;
    }

    :first-child {
      border-start-start-radius: 15px;
      border-end-start-radius: 15px;
    }

    :last-child {
      border-start-end-radius: 15px;
      border-end-end-radius: 15px;
    }
  }

  .ant-radio-button-wrapper-checked {
    border: 1px solid ${color.grey};
    color: ${color.primary};

    ::before {
      background: ${color.transparent};
    }

    :not(.ant-radio-button-wrapper-disabled) {
      border: 1px solid ${color.grey};
    }
  }

  //.ant-radio-button-input {
  //  :checked {
  //    outline: none !important;
  //    box-shadow: none !important;
  //  }
  //}
`;
