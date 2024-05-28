import React from 'react';
import {observer} from 'mobx-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  BarChart,
  Tooltip,
} from 'recharts';
import {StockPrice} from '../../types';
import {toJS} from 'mobx';
import {stockPriceModel} from '../../model/chart';
import {getDateLabel} from '../AreaChart/AreaChart';
import {color} from '../../../../theme';
import {formatDate, formatTime} from '../../../../utils/date';

export const CandleStickBarChart = observer(() => {
  let data: StockPrice[] = toJS(stockPriceModel.data) || [];
  data.reverse();

  const prepareData = (data: StockPrice[]) => {
    return data.map(({open, close, low, high, ...other}) => {
      return {
        ...other,
        OHLC: [open, high, low, close],
      };
    });
  };

  const dataForCandleStick = prepareData(data);

  const minValue = dataForCandleStick.reduce(
    (minValue, {OHLC: [open, high, low, close]}) => {
      const currentMin = Math.min(+low, +open, +close);
      return minValue === 0 || currentMin < minValue ? currentMin : minValue;
    },
    0
  );
  const maxValue = dataForCandleStick.reduce(
    (maxValue, {OHLC: [open, high, low, close]}) => {
      const currentMax = Math.max(+high, +open, +close);
      return currentMax > maxValue ? currentMax : maxValue;
    },
    minValue
  );

  const CandleStick = (props: any) => {
    const {
      x,
      width,
      OHLC: [open, high, low, close],
    } = props;

    const isGrowing = open < close;

    const color = isGrowing ? 'green' : 'red';
    const ratio = 265 / (maxValue - minValue);

    const getY = (y: number) => (maxValue - y) * ratio + 20;
    const heightY = (close - open) * ratio;

    const closeY = getY(close);
    const openY = getY(open);
    const highY = getY(high);
    const lowY = getY(low);

    return (
      <g stroke={color} fill={color} strokeWidth="1">
        <path
          d={`
          M ${x},${closeY}
          L ${x},${closeY + heightY}
          L ${x + width},${closeY + heightY}
          L ${x + width},${closeY}
          L ${x},${closeY}
        `}
        />

        {/* bottom line */}
        {isGrowing ? (
          <path
            d={`
            M ${x + width / 2}, ${closeY + heightY}
            L ${x + width / 2},${lowY}
          `}
          />
        ) : (
          <path
            d={`
            M ${x + width / 2}, ${closeY}
            L ${x + width / 2},${lowY}
          `}
          />
        )}

        {/* top line */}
        {isGrowing ? (
          <path
            d={`
            M ${x + width / 2}, ${openY}
            L ${x + width / 2},${highY}
          `}
          />
        ) : (
          <path
            d={`
            M ${x + width / 2}, ${openY + heightY}
            L ${x + width / 2},${highY}
          `}
          />
        )}
      </g>
    );
  };

  const isYearly =
    stockPriceModel.interval === '1y' || stockPriceModel.interval === '6M';
  const isShowTime = !(isYearly || stockPriceModel.interval === '3M');

  return (
    <ResponsiveContainer>
      <BarChart
        width={500}
        height={300}
        data={dataForCandleStick}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="timestamp"
          tickFormatter={getDateLabel}
          minTickGap={isYearly ? 40 : 20}
          tickMargin={15}
          allowDuplicatedCategory={false}
        />
        <YAxis domain={[minValue, maxValue]} />

        <Tooltip
          shared={false}
          wrapperStyle={{outline: 'none'}}
          formatter={value => {
            const [open, high, low, close] = value as string[];

            return `${open}, ${high}, ${low}, ${close}`;
          }}
          labelFormatter={label => {
            return (
              <span>
                Date: {formatDate(label)}{' '}
                {isShowTime && `Time: ${formatTime(label)}`}
              </span>
            );
          }}
        />

        <Bar dataKey="OHLC" fill={color.primary} shape={<CandleStick />} />
      </BarChart>
    </ResponsiveContainer>
  );
});
