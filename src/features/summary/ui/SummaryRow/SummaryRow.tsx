import React from 'react';
import {observer} from 'mobx-react';
import {RowContainer, Title, Value} from './styled';

interface Props {
  title: string;
  value: string | number | string[];
}

export const SummaryRow = observer(({title, value}: Props) => {
  // const isArray = Array.isArray(value);
  // const valueElement = isArray ? value[0] + ' — ' + value[1] : value;

  return (
    <RowContainer>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </RowContainer>
  );
});
