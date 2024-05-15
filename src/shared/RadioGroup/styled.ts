import styled from 'styled-components/macro';
import {color} from '../../theme';

export const RadioGroupContainer = styled.div`
  .ant-radio-button-wrapper {
    font-weight: 600;
    border: 1px solid ${color.grey};

    :first-child {
      border-start-start-radius: 15px;
      border-end-start-radius: 15px;

      :not(:hover) {
        border: 1px solid ${color.grey};
        border-right: none;
      }
    }

    :last-child {
      border-start-end-radius: 15px;
      border-end-end-radius: 15px;
    }
  }

  .ant-radio-button-wrapper:not(.ant-radio-button-wrapper-checked) {
    :not(:hover) {
      color: ${color.darkGrey};
    }
  }

  .ant-radio-button-wrapper-checked {
    ::before {
      background: ${color.transparent};
    }
  }
`;
