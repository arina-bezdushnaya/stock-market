import styled from 'styled-components/macro';
import {color} from '../../../../theme';

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${color.grey};

  :last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const Title = styled.div`
  color: ${color.darkGrey};
`;

export const Value = styled.div`
  width: 50%;
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  color: ${color.black};
`;
