import React from 'react';
import {observer} from 'mobx-react';
import {RowContainer, Title, Value} from './styled';
import {formatPrice} from '../../../../utils/price';

interface Props {
  title: string;
  value: any;
  showPrice?: boolean;
}

export const SummaryRow = observer(
  ({title, value, showPrice = false}: Props) => {
    const isArray = Array.isArray(value);

    const getRangeValue = (range: string[] | number[]) => {
      const fullRange = showPrice
        ? range.map(item => formatPrice(item, true, true))
        : range;

      return fullRange.join(' – ');
    };

    const valueElement = isArray
      ? getRangeValue(value)
      : getRangeValue([value]);

    return (
      <RowContainer>
        <Title>{title}</Title>
        <Value>{valueElement}</Value>
      </RowContainer>
    );
  }
);
