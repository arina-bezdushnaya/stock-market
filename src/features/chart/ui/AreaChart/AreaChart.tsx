import React, {useEffect} from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import {
  AreaChart as AreaRecharts,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from 'recharts';
import {stockPriceModel} from '../../model/chart';
import {StockPrice} from '../../types';
import {formatDate, formatMonth, formatTime} from '../../../../utils/date';
import {color} from '../../../../theme';

export const AreaChart = observer(() => {
  let data: StockPrice[] = toJS(stockPriceModel.data) || [];
  data.reverse();

  const isYearly =
    stockPriceModel.interval === '1y' || stockPriceModel.interval === '6M';
  const isShowTime = !(isYearly || stockPriceModel.interval === '3M');

  const ohlcvType = stockPriceModel.type;

  useEffect(() => {}, [data, ohlcvType]);

  return (
    <ResponsiveContainer>
      <AreaRecharts
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 20,
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
        <YAxis domain={['dataMin', 'dataMax']} />
        <Tooltip
          labelFormatter={label => (
            <span>
              Date: {formatDate(label)}{' '}
              {isShowTime && `Time: ${formatTime(label)}`}
            </span>
          )}
        />

        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color.primary} stopOpacity={0.4} />
            <stop offset="90%" stopColor={'white'} stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey={ohlcvType}
          stroke={color.primary}
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaRecharts>
    </ResponsiveContainer>
  );
});

export const getDateLabel = (date: string) => {
  const interval = stockPriceModel.interval;

  switch (interval) {
    case '1d':
    default:
      return formatTime(date);

    case '1w':
    case '2w':
    case '1M':
    case '3M':
    case '6M':
      return formatDate(date);

    case '1y':
      return formatMonth(date);
  }
};
