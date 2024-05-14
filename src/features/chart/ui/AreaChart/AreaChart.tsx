import React, {useEffect} from 'react';
import {toJS} from 'mobx';
import {observer} from 'mobx-react';
import {ChartContainer} from '../styled';
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
import {formatDate, formatTime} from '../../../../utils/date';
import {color} from '../../../../theme';

export const AreaChart = observer(() => {
  let data: StockPrice[] = toJS(stockPriceModel.data) || [];
  data.reverse();

  useEffect(() => {
  }, [data]);

  return (
    <ChartContainer>
      <ResponsiveContainer>
        <AreaRecharts
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='timestamp'
            tickFormatter={label => formatDate(label)}
          />
          <YAxis domain={['dataMin', 'dataMax']} />
          <Tooltip
            labelFormatter={label => (
              <span>
                Date: {formatDate(label)} Time: {formatTime(label)}{' '}
              </span>
            )}
          />

          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor={color.primary} stopOpacity={0.4} />
              <stop offset='75%' stopColor={'white'} stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area
            type='monotone'
            dataKey='open'
            stroke={color.primary}
            strokeWidth={3}
            fillOpacity={1}
            fill='url(#colorUv)'
          />
        </AreaRecharts>
      </ResponsiveContainer>
    </ChartContainer>
  );
});
