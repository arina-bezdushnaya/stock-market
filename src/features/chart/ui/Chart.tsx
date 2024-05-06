import React, {useEffect} from 'react';
import {ChartContainer} from './styled';
import {observer} from 'mobx-react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer, Area,
} from 'recharts';
import {stockPriceModel} from '../model/chart';
import {toJS} from 'mobx';
import {StockPrice} from '../types';
import {formatDate, formatTime} from '../../../utils/date';


export const Chart = observer(() => {
  let data: StockPrice[] = toJS(stockPriceModel.data) || [];
  data = data
    .filter((item: StockPrice, index: number) => index < 400)
    .reverse();

  useEffect(() => {
  }, [data]);

  return (
    <ChartContainer>
      <ResponsiveContainer>
        <AreaChart
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
          <XAxis dataKey='date' tickFormatter={(label) => formatDate(label)} />
          <YAxis />
          <Tooltip labelFormatter={(label) => <span>Date: {formatDate(label)} Time: {formatTime(label)} </span>} />

          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor={'#ff5c00'} stopOpacity={0.4} />
              <stop offset='75%' stopColor={'white'} stopOpacity={0.05} />
            </linearGradient>
            {/*<linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>*/}
            {/*  <stop offset='0%' stopColor={'blue'} stopOpacity={0.4} />*/}
            {/*  <stop offset='75%' stopColor={'white'} stopOpacity={0.05} />*/}
            {/*</linearGradient>*/}
          </defs>

          <Area type='monotone' dataKey='open' stroke='#ff5c00' strokeWidth={3} fillOpacity={1} fill='url(#colorUv)' />
          {/*<Area type='monotone' dataKey='close' stroke='#ff5c00' strokeWidth={3} fillOpacity={1} fill='url(#colorPv)' />*/}

        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
});
